# Backyard Thru Hike — Project Notes

## What this is
A trail journal and community nature resource for Plattsburgh, NY. The premise: you don't need to travel to find nature — the backyard, vacant lot, drainage ditch, and unmowed strip are worth paying attention to.

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

## Active development branch
`claude/website-claude-design-c9uchz`

## In-progress work
Redesign pass informed by Claude Design output. Design targets:
1. Stronger homepage hero (photo/illustration, better hierarchy)
2. Polished blog/journal cards (photo thumbnails, metadata)
3. More inviting Corner Library page (gear lending + request form)
4. Mobile hamburger nav (currently header just stacks)
5. Seasonal color shift (subtle warm→cool tones across seasons)

When bringing in Claude Design changes, expect: updated CSS variables, HTML component snippets, SVG assets, and revised color tokens. Map these into `styles.css` and the relevant `.njk` templates.
