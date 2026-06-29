# Backyard Thru Hike — Project Notes

## What this is
A trail journal and community nature resource for Plattsburg, MO (39.5656°N, 94.4477°W). The premise: you don't need to travel to find nature — the backyard, vacant lot, drainage ditch, and unmowed strip are worth paying attention to.

**Live site domain:** backyardthruhike.com

## Tech stack
- **Static site generator:** Eleventy (11ty) with Nunjucks templates
- **No build step / bundler** — CSS and JS are served directly from `src/`
- **CMS:** Decap CMS (`src/admin/`) — content lives in `src/_data/*.json`
- **Fonts:** Zilla Slab (display), Inter (body), JetBrains Mono (mono/labels) via Google Fonts

## Project structure
```
src/
  _data/          # JSON content files (edit these for copy changes)
    siteconfig.json   # nav, brand name, tagline
    homepage.json     # hero headline, lede, CTAs
    pageabout.json    # about page content
    pageblog.json     # blog page header content
    pageevents.json   # events page
    pagelibrary.json  # corner library page
    seasonaltips.json # footer ticker tips
  _includes/
    base.njk      # shared HTML shell (header, footer, seasonal ticker)
    post.njk      # blog post layout
  styles.css      # single stylesheet — all styles live here
  index.njk       # homepage
  blog.njk        # journal listing
  about.njk
  events.njk
  library.njk
  seasonal-ticker.njk / seasonal-ticker.js  # footer rotating tips
```

## Design system
- **Aesthetic:** Woodsy, analog, field-notebook meets REI catalog. Not corporate.
- **Background:** Warm parchment `#EFEAD8` with subtle CSS ruled-line texture
- **Colors:**
  - Forest green: `#2F4F3D` (dark: `#233C2E`)
  - Rust orange: `#C1542C`
  - Slate blue: `#5F8696`
  - Parchment raised: `#F7F4E9`
  - Line/border: `#C7BC9C`
- **Cards:** Left 4px border in forest green, minimal border-radius (2px)
- **Hero:** Topographic contour SVG lines as decorative background
- **Elevation divider:** Rust orange polyline SVG between hero and content sections
- **Footer:** Rotating seasonal nature tips ticker (JS-driven)

## Pages / nav
- `/` — Home
- `/blog/` — Journal (blog posts)
- `/about/` — About
- `/library/` — Corner Library (gear/book lending + request form)

## Build & local dev
- `npm install` — install dependencies
- `npm run build` — build to `_site/`
- `npm start` — Eleventy dev server with live reload
- Deploy: Cloudflare Pages builds `_site/` (see `wrangler.toml`)

## Status (as of 2026-06-29)
The Claude Design homepage redesign is **merged to `main`** (PR #23). The site builds clean. Shipped in that pass: data-driven header/footer, mobile hamburger nav, seasonal color shift (`data-season` on `<html>`), homepage hero, and the seasonal footer ticker.

## Known gaps / next up
- **No blog posts yet** — `src/blog/` contains only `blog.json`; the journal listing renders empty until the first `.md` post is added (via Decap CMS or by hand).
- Library access-request form is wired to a Cloudflare Worker; confirm end-to-end before relying on it.
- Photo originals live in the local-only `site pics/` folder (gitignored). Web-sized copies go in `src/images/`.

## Conventions
- Edit copy in `src/_data/*.json` (or via the CMS at `/admin/`), not in templates.
- All styles live in `src/styles.css`. Colors are CSS variables.
- Blog posts are Markdown in `src/blog/`; `blog/blog.json` applies the `post.njk` layout to them automatically.
