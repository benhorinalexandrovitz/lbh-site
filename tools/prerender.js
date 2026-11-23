#!/usr/bin/env node
/* Generates static copies of index.html for every route (e.g. he/about/index.html) with route-specific
   <title>, description, canonical, hreflang and Open Graph tags, plus sitemap.xml and robots.txt.
   Run after editing content.js:  node tools/prerender.js
   The copies boot the same app; an inline script moves them onto the hash router. */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
global.window = {};
require(path.join(root, 'content.js'));
const C = window.LBH;
const url = C.site.url;
const basePath = new URL(url + '/').pathname; // e.g. /lbh-site/
const today = new Date().toISOString().slice(0, 10);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const routes = ['', 'about', 'investments', 'strategy', 'team', 'contact', 'privacy', 'accessibility', 'terms']
  .concat(C.funds.filter(f => f.published).map(f => 'investments/' + f.slug))
  .concat(C.people.filter(p => p.published).map(p => 'team/' + p.slug));

function meta(lang, r) {
  const [a, b] = r.split('/');
  if (a === 'team' && b) { const L = C.people.find(p => p.slug === b)[lang]; return [L.seoTitle, L.summary, L.name]; }
  if (a === 'investments' && b) { const m = C.meta[b][lang]; return [m[0], m[1], C.funds.find(f => f.slug === b)[lang].title]; }
  const m = C.meta[a || 'home'][lang];
  const h1 = a === '' ? C.home[lang].hero : a === 'investments' ? C.investments[lang].h1 : C[a] && C[a][lang] && C[a][lang].h1 ? C[a][lang].h1 : C.legal[a] ? C.legal[a][lang].h1 : m[0];
  return [m[0], m[1], h1];
}
const loc = (lang, r) => url + '/' + lang + '/' + (r ? r + '/' : '');

function seoBlock(lang, r) {
  const [title, desc] = meta(lang, r);
  const canon = loc(lang, r);
  return `<!--SEO-->
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canon}">
<link rel="alternate" hreflang="he" href="${loc('he', r)}">
<link rel="alternate" hreflang="en" href="${loc('en', r)}">
<link rel="alternate" hreflang="x-default" href="${loc('he', r)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="LBH">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canon}">
<meta property="og:locale" content="${lang === 'he' ? 'he_IL' : 'en_US'}">
<meta property="og:image" content="${url}/${C.site.ogImage}">
<meta name="twitter:card" content="summary_large_image">
<!--/SEO-->`;
}

function noscript(lang, r) {
  const [, desc, h1] = meta(lang, r);
  const links = C.ui[lang].nav.map(([k, l]) => `<a href="${loc(lang, k === 'home' ? '' : k)}">${esc(l)}</a>`).join(' | ');
  return `<!--NOSCRIPT--><noscript><h1>${esc(h1)}</h1><p>${esc(desc)}</p><nav>${links}</nav></noscript><!--/NOSCRIPT-->`;
}

const src = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
function render(lang, r, withBase) {
  let h = src.replace(/<!--SEO-->[\s\S]*?<!--\/SEO-->/, seoBlock(lang, r))
    .replace(/<!--BASE-->[\s\S]*?<!--\/BASE-->/, withBase ? `<!--BASE--><base href="${basePath}"><!--/BASE-->` : '<!--BASE--><!--/BASE-->')
    .replace(/<html[^>]*>/, `<html lang="${lang === 'he' ? 'he-IL' : 'en'}" dir="${lang === 'he' ? 'rtl' : 'ltr'}">`);
  h = h.replace(/<!--NOSCRIPT-->[\s\S]*?<!--\/NOSCRIPT-->/, '');
  h = h.replace('<body>', '<body>\n' + noscript(lang, r));
  return h;
}

// Remove previously generated route folders
for (const lang of ['he', 'en']) fs.rmSync(path.join(root, lang), { recursive: true, force: true });
let n = 0;
for (const lang of ['he', 'en']) for (const r of routes) {
  const dir = path.join(root, lang, r);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(lang, r, true));
  n++;
}
fs.writeFileSync(path.join(root, 'index.html'), render('he', '', false));

const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'];
for (const r of routes) for (const lang of ['he', 'en']) {
  sm.push(`  <url>\n    <loc>${loc(lang, r)}</loc>\n    <lastmod>${today}</lastmod>\n    <xhtml:link rel="alternate" hreflang="he" href="${loc('he', r)}"/>\n    <xhtml:link rel="alternate" hreflang="en" href="${loc('en', r)}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc('he', r)}"/>\n  </url>`);
}
sm.push('</urlset>');
fs.writeFileSync(path.join(root, 'sitemap.xml'), sm.join('\n') + '\n');
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`);
console.log(`Prerendered ${n} pages, sitemap with ${routes.length * 2} URLs.`);
