# lbh-site

The LBH bilingual website (Hebrew default, English), exported from Claude Design.

Static site with no build step. Serve this folder as-is (GitHub Pages: Settings → Pages → Deploy from branch `main`, folder `/`).

- `index.html` is the site: a hash-routed single page (`#/he/…`, `#/en/…`).
- `content.js` and `content-geo.js` hold all copy (he/en). Edit text there.
- `vendor/` has React 18.3.1 and Babel 7.29.0, byte-identical to the versions the runtime pins, so the site needs no third-party CDN.
- `404.html` sends path URLs such as `/he/team/moni-katz/` to the matching `#/he/team/moni-katz/` route.
- `sitemap.xml`, `robots.txt` and `llms.txt` still use the placeholder domain `lbh.example`.
