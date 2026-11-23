#!/usr/bin/env python3
"""Build the static LBH website from src/app.html + content.js.

Renders every route in headless Chrome and writes one complete HTML file per URL
(he/..., en/...), with the page content, metadata, hreflang and JSON-LD in the initial HTML.
No JavaScript framework is shipped to visitors; assets/site.js only adds the mobile menu and count-up.

Usage:  pip install playwright && python -m playwright install chromium
        python tools/build.py            (run after editing content.js or src/app.html)
Set the public address in content.js -> site.url; all links and canonicals follow it.
"""
import functools, http.server, json, os, re, shutil, socketserver, subprocess, sys, tempfile, threading, datetime
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.loads(subprocess.check_output(['node', '-e', '''
global.window = {}; require(process.argv[1]); const C = window.LBH;
const routes = ['', 'about', 'investments', 'strategy', 'team', 'media', 'privacy', 'accessibility', 'terms']
  .concat(C.funds.filter(f => f.published).map(f => 'investments/' + f.slug))
  .concat(C.people.filter(p => p.published).map(p => 'team/' + p.slug));
console.log(JSON.stringify({ url: C.site.url, routes, people: C.people.filter(p => p.published).map(p => p.slug),
  removedPeople: C.people.filter(p => !p.published).map(p => p.slug) }));
''', os.path.join(ROOT, 'content.js')]))
SITE = data['url'].rstrip('/')
BASE = urlparse(SITE + '/').path            # e.g. /lbh-site/
ROUTES = data['routes']
GENERATED_DIRS = ['he', 'en']
OLD = {'contact': 'about', 'faq': 'about', 'track-record': 'investments', 'insights': '', 'checklist': ''}
REMOVED_PEOPLE = ['moni-katz', 'mordy-ben-ami'] + data['removedPeople']

HASH_REDIRECT = ('<script>(function(){var h=location.hash;if(h.indexOf("#/")!==0)return;var B=%s,K=%s,O=%s;'
  'var p=h.slice(1).split("#"),a=p[1]||"",m=p[0].match(/^\\/(he|en)\\/?(.*)$/);if(!m){location.replace(B+"he/");return;}'
  'var L=m[1],r=m[2].replace(/\\/$/,""),t=r.split("/");'
  'if(t[0]==="track-record"){r=({"dan-transportation":"investments/dan","gadot":"investments/gadot"})[a]||"investments";a="";}'
  'else if(O.hasOwnProperty(t[0])){r=O[t[0]];a="";}else if(t[0]==="team"&&t[1]&&K.indexOf(t[1])<0){r="team";}'
  'location.replace(B+L+"/"+(r?r+"/":"")+(a?"#"+a:""));})();</script>') % (json.dumps(BASE), json.dumps(data['people']), json.dumps(OLD))

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link href="https://fonts.googleapis.com/css2?family=Karantina:wght@400;700&family=Heebo:wght@300;400;500;600&family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet">')

def serve():
    tmp = tempfile.mkdtemp()
    os.symlink(ROOT, os.path.join(tmp, BASE.strip('/') or 'site'))
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a): pass
    handler = functools.partial(Quiet, directory=tmp)
    srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, 'http://127.0.0.1:%d%s' % (srv.server_address[1], BASE)

EXTRACT = '''() => {
  const css = [];
  for (const sh of document.styleSheets) { try { if (sh.href) continue; for (const r of sh.cssRules) css.push(r.cssText); } catch (e) {} }
  const head = [...document.head.querySelectorAll('title,[data-seo],meta[name="robots"]')].map(e => e.outerHTML).join('\\n');
  const root = document.querySelector('body div[lang][dir]');
  return { css: [...new Set(css)].join('\\n'), head, body: root.outerHTML, lang: document.documentElement.lang, dir: document.documentElement.dir };
}'''

def page_html(r, extra_head=''):
    body = r['body']
    return ('<!DOCTYPE html>\n<html lang="%s" dir="%s">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
            '%s\n%s\n<link rel="icon" type="image/png" href="%sassets/favicon.png">\n<link rel="apple-touch-icon" href="%sassets/apple-touch-icon.png">\n'
            '<meta name="theme-color" content="#0E1724">\n%s\n<style>%s</style>\n%s\n</head>\n<body>\n%s\n'
            '<script src="%sassets/site.js" defer></script>\n</body>\n</html>\n') % (
        r['lang'], r['dir'], r['head'], extra_head, BASE, BASE, FONTS, r['css'], HASH_REDIRECT, body, BASE)

def stub(target):
    return ('<!DOCTYPE html>\n<html><head><meta charset="utf-8"><meta name="robots" content="noindex, follow">'
            '<link rel="canonical" href="%s"><meta http-equiv="refresh" content="0; url=%s"><title>LBH</title>'
            '<script>location.replace(%s)</script></head><body><a href="%s">%s</a></body></html>\n') % (target, target, json.dumps(target), target, target)

def main():
    from playwright.sync_api import sync_playwright
    srv, origin = serve()
    for d in GENERATED_DIRS: shutil.rmtree(os.path.join(ROOT, d), ignore_errors=True)
    pages = {}
    with sync_playwright() as p:
        exe = os.environ.get('CHROME') or ('/usr/bin/google-chrome' if os.path.exists('/usr/bin/google-chrome') else None)
        b = p.chromium.launch(executable_path=exe, args=['--no-sandbox']) if exe else p.chromium.launch()
        ctx = b.new_context(viewport={'width': 1280, 'height': 900})
        ctx.add_init_script('window.__SSG = { base: %s };' % json.dumps(BASE))
        ctx.route(re.compile(r'https://fonts\.(googleapis|gstatic)\.com/.*'), lambda route: route.abort())
        pg = ctx.new_page()
        errors = []
        pg.on('pageerror', lambda e: errors.append(str(e)))
        jobs = [(l, r) for l in ('he', 'en') for r in ROUTES] + [('he', '__404__')]
        for lang, r in jobs:
            pg.goto(origin + 'src/app.html#/%s/%s' % (lang, (r + '/') if r else ''))
            pg.wait_for_function('document.documentElement.getAttribute("data-ready") === "1" && !!document.querySelector("main h1")', timeout=30000)
            pg.wait_for_timeout(150)
            res = pg.evaluate(EXTRACT)
            pg.evaluate('document.documentElement.removeAttribute("data-ready")')
            pages[(lang, r)] = res
        b.close()
    srv.shutdown()
    if errors: print('Page errors:', errors); sys.exit(1)

    for (lang, r), res in pages.items():
        if r == '__404__': continue
        out = os.path.join(ROOT, lang, r, 'index.html')
        os.makedirs(os.path.dirname(out), exist_ok=True)
        open(out, 'w').write(page_html(res))
    open(os.path.join(ROOT, 'index.html'), 'w').write(page_html(pages[('he', '')]))
    nf = pages[('he', '__404__')]
    nf['head'] = re.sub(r'<link rel="canonical"[^>]*>|<link rel="alternate"[^>]*>|<meta property="og:url"[^>]*>', '', nf['head'])
    open(os.path.join(ROOT, '404.html'), 'w').write(page_html(nf))

    # Redirect stubs for URLs of the previous site structure
    n_stub = 0
    for lang in ('he', 'en'):
        olds = dict(OLD); olds.update({'team/' + s: 'team' for s in REMOVED_PEOPLE})
        for old, new in olds.items():
            d = os.path.join(ROOT, lang, old)
            if os.path.exists(os.path.join(d, 'index.html')): continue
            os.makedirs(d, exist_ok=True)
            open(os.path.join(d, 'index.html'), 'w').write(stub(SITE + '/' + lang + '/' + (new + '/' if new else '')))
            n_stub += 1

    today = datetime.date.today().isoformat()
    loc = lambda l, r: SITE + '/' + l + '/' + (r + '/' if r else '')
    sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for r in ROUTES:
        for l in ('he', 'en'):
            sm.append('  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n    <xhtml:link rel="alternate" hreflang="he-IL" href="%s"/>\n    <xhtml:link rel="alternate" hreflang="en" href="%s"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>\n  </url>' % (loc(l, r), today, loc('he', r), loc('en', r), loc('he', r)))
    sm.append('</urlset>')
    open(os.path.join(ROOT, 'sitemap.xml'), 'w').write('\n'.join(sm) + '\n')
    open(os.path.join(ROOT, 'robots.txt'), 'w').write('User-agent: *\nAllow: /\nDisallow: %ssrc/\n\nSitemap: %s/sitemap.xml\n' % (BASE, SITE))
    print('Built %d pages, %d redirect stubs, sitemap with %d URLs.' % (len(pages) - 1, n_stub, len(ROUTES) * 2))

if __name__ == '__main__':
    main()
