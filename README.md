# lbh-site

The LBH bilingual website (Hebrew default, English), published with GitHub Pages from `main` (folder `/`).

Every page is a real static URL (`/he/`, `/en/about/`, `/he/investments/dan/`, …) whose HTML already contains the full content,
title, description, canonical, hreflang, Open Graph and JSON-LD. Visitors receive no JavaScript framework;
`assets/site.js` only adds the mobile menu and the count-up animation.

## Editing
- **Text and data:** `content.js` (Hebrew and English side by side). Investment pages are built from `pages.<fund>` blocks;
  dated public sources are in `sources` and feed both the Sources blocks and the In the Media page.
  Hide a fund or person with `published: false`, a block with `show: false`.
- **Layout:** `src/app.html` (source template). Open `src/app.html#/he/` through a local web server to preview.
- **Build:** after any change run
  ```
  pip install playwright && python -m playwright install chromium   # once
  python tools/build.py
  ```
  This regenerates `index.html`, `he/`, `en/`, `404.html`, redirect pages for old URLs, `sitemap.xml` and `robots.txt`.
- **Domain:** set `site.url` in `content.js` and rebuild; every link, canonical and sitemap entry follows it.
  Note: on a `*.github.io/<repo>` address, `robots.txt` is not read by crawlers (it must sit at the domain root);
  submit `sitemap.xml` in Google Search Console instead. With a custom domain it works automatically.

Old hash links (`#/he/...`) and removed pages (`contact`, `faq`, `track-record`, removed profiles) redirect to their new URLs.
