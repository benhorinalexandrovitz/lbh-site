# lbh-site

The LBH bilingual website (Hebrew default, English). Static site, no build step required to run.
GitHub Pages: Settings → Pages → Deploy from branch `main`, folder `/`.

- `index.html` is the app: a hash-routed single page (`#/he/…`, `#/en/…`) rendered by `support.js` (React runtime in `vendor/`).
- `content.js` holds all copy in Hebrew and English, including investment pages (`pages`), returns table (`returns`) and the disclosure text.
  - Hide a fund or a person from the live site with `published: false`; hide a single block of an investment page with `show: false`.
- `tools/prerender.js` writes a static copy of the page for every route (`he/about/index.html`, `en/investments/dan/index.html`, …) with route-specific title, description, canonical, hreflang and Open Graph tags, and regenerates `sitemap.xml` and `robots.txt`.
  **Run `node tools/prerender.js` after editing `content.js` or `index.html`.**
- Old URLs (`track-record`, `faq`, `insights`, removed team profiles) redirect to their new pages.
- `404.html` sends unknown path URLs to the matching hash route.
- Domain: `content.js` → `site.url` (currently the GitHub Pages address). Change it there and re-run the prerender script when a custom domain is connected.
