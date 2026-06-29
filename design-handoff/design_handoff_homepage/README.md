# Handoff: Backyard Thru-Hike — Homepage

A drop-in implementation package for the homepage redesign. Built for a
**Nunjucks / 11ty** site, but the snippets are plain HTML + CSS + vanilla JS and
port to any framework.

## What's in here

```
design_handoff_homepage/
├── README.md                 ← you are here
├── styles.css                ← all tokens + every component's CSS (one file)
├── partials/                 ← drop-in markup, one file per section
│   ├── header.html           ← 01 · header + hamburger nav
│   ├── hero.html             ← 02 · hero (full ridgeline SVG inline)
│   ├── divider.html          ← 03 · elevation divider
│   ├── journal.html          ← 04 · journal card grid (loop one <article>)
│   ├── library.html          ← 05 · corner library
│   └── footer.html           ← 06 · footer + trail-tip ticker
├── scripts/
│   ├── nav.js                ← hamburger toggle (aria-expanded + .is-open)
│   └── ticker.js             ← footer tip rotation (5.2s, season-aware)
└── reference/
    ├── Backyard Thru Hike.dc.html              ← the original design prototype
    ├── Homepage Redesign — Dev Handoff.dc.html ← live previews + the same snippets
    └── support.js, image-slot.js               ← runtime for the two .dc.html files (reference only)
```

## About these files
The snippets here **are** production-ready vanilla HTML/CSS/JS — copy them
straight in. The two files in `reference/` are **design references** (an in-house
HTML prototype format); open them to see the intended look and behavior, but
implement from the `styles.css` + `partials/` + `scripts/` files, not from the
prototype.

## Fidelity
**High.** Exact colors, type, spacing, and SVG paths are final. Recreate faithfully.

## How to wire it up

1. **Fonts** — Zilla Slab (display/headings), Inter (body), JetBrains Mono
   (labels/nav). Load once in your base layout `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
   ```
2. **CSS** — paste `styles.css` into your `styles.css` (or `@import` it). If your
   project already has a reset, delete the top "base reset" block.
3. **Markup** — each `partials/*.html` maps to a Nunjucks include. Rename to
   `.njk` and `{% include "partials/hero.njk" %}` in page order:
   **header → hero → divider → journal → library → footer.** The journal grid and
   library item list each show one row — wrap them in `{% for %}` over your CMS data.
4. **JS** — include `scripts/nav.js` and `scripts/ticker.js` (defer is fine).
5. **Page max width** is 1200px with 28px gutters, baked into the section classes.

## Seasonal theming (the whole point of the tokens)
Every color is a CSS variable. The default `:root` is **summer**; three overrides
key off a `data-season` attribute on `<html>`:

```html
<html data-season="fall">   <!-- summer | fall | winter | spring -->
```

Derive it server-side from the month and stamp it on the layout's `<html>` tag:
- **Dec–Feb → winter, Mar–May → spring, Jun–Aug → summer, Sep–Nov → fall.**

The footer ticker reads the same attribute to pick its tip list. Allow an
explicit override (`auto | summer | fall | winter | spring`) as a config value;
this is **not** user-facing UI.

Nunjucks helper, for reference:
```njk
{% set m = "now" | date("M") | int %}
{% set season = "winter" if (m == 12 or m <= 2) else ("spring" if m <= 5 else ("summer" if m <= 8 else "fall")) %}
<html data-season="{{ season }}">
```

## Design tokens (summer / default)
| Token | Hex | Role |
|---|---|---|
| `--bg` | `#EFEAD8` | page background (parchment) |
| `--card` | `#F5F1E3` | card / panel surface |
| `--ink` | `#26302A` | primary text |
| `--ink-soft` | `#565c4f` | secondary text |
| `--green` | `#2F4F3D` | brand green (borders, primary buttons) |
| `--accent` / `--rust` | `#C1542C` | accent / CTA |
| `--slate` | `#5F8696` | tertiary / "introduced" |
| `--off-white` | `#FBF6E9` | text on colored fills |
| `--sky-top` / `--sky-bottom` / `--sun` | `#F6ECCB` / `#ECE7CB` / `#E8B84B` | hero sky + sun |
| `--ridge-far → -fore` | `#A9BC9C` / `#728F66` / `#4C6B49` / `#2F4F3D` | hero ridge ramp + footer/divider |

Fall, winter, and spring values live in `styles.css` under their `[data-season]`
selectors. **Type scale, spacing, radii, and shadows** are inline in the
component classes (radii: cards 4px, buttons 8px, library photo 10px, pills 999px;
card shadow `0 10px 26px -22px rgba(38,48,42,0.7)`).

## Behavior notes
- **Sticky header** with blur backdrop; desktop nav ↔ hamburger flips at **880px**
  (real CSS media query). `nav.js` toggles `.is-open` + `aria-expanded`; links
  close the menu. Mark the current page link with `class="is-active"`.
- **Anchor nav** to `#top #journal #library #about` — `scroll-behavior:smooth`
  and `scroll-margin-top:80px` are already in `styles.css`.
- **Footer ticker** rotates the season's tips every **5.2s** with a 0.5s fade
  (`@keyframes bthFade`). Set `rotateTips=false` → render only the first tip and
  skip `ticker.js`.
- **Hover:** nav/footer links → accent/white; primary buttons → `brightness(1.07)`;
  outline button → faint green wash.

## Assets
- **No image files shipped.** Card thumbnails and the library shelf use a
  diagonal-stripe CSS fallback (`.bth-card__thumb` / `.bth-library__photo`
  background) behind a real `<img>`. Wire `src` to your CMS/asset pipeline; the
  stripe shows through until a photo exists.
- **All SVG is inline** in `hero.html` and `divider.html` — copy path `d` values
  verbatim. The hero gradient id `bthSky` must be unique if two heroes share a page.
- **No icon library** — the brand mark, hamburger, arrows (`&rarr;`), and bullets
  are CSS shapes / HTML entities.

## Skip (handle in-codebase, per the brief)
Full page layouts (your `.njk` structure), the type scale, and CMS data files
(`homepage.json`, etc.) — those stay in your repo.
