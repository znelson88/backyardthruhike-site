# Handoff: Backyard Thru Hike — Homepage

## Overview
Marketing homepage for **Backyard Thru Hike** (backyardthruhike.com) — a trail journal and gear-lending community resource dedicated to the people of **Plattsburg, Missouri** (39.5656°N, 94.4477°W). Tagline: **"Get Outside."** Aesthetic: woodsy, analog/field-notebook — "REI catalog meets field notebook," intentionally not corporate.

The full site is planned as 4 pages (Home, Journal, About, Corner Library). **This bundle covers the Homepage only.**

## About the Design Files
The file `Backyard Thru Hike.dc.html` is a **design reference created in HTML** — a working prototype showing the intended look and behavior. It is **not production code to copy directly**. It is authored as a "Design Component" (a custom streaming-template format) and will not drop cleanly into a normal app.

Your task is to **recreate this design in the target codebase's environment** using its established patterns and libraries (React/Next, Vue, Astro, plain HTML/CSS, etc.). If no codebase exists yet, pick the most appropriate framework — for a content/marketing site, **Astro or Next.js with a headless CMS for the Journal** is a sensible default. Treat the HTML as the source of truth for layout, color, type, and copy; rebuild it idiomatically.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and interactions are intended as-is. Recreate the UI pixel-faithfully with your codebase's libraries. The seasonal palettes, ridgeline hero, elevation divider, and card treatments are all deliberate.

## Screens / Views

### Homepage (single scrolling page)
Sections in order: **Header → Hero → Elevation divider → Journal → Corner Library → About/Dedication → Footer.** Max content width **1200px**, centered, with **28px** horizontal page padding. Anchor IDs: `#top`, `#journal`, `#library`, `#about`.

**1. Header** (sticky, `top:0`, `z-index:60`)
- Background: `color-mix(in srgb, var(--bg) 86%, transparent)` + `backdrop-filter: blur(8px)`. Bottom border: 1px of `green @ 22% alpha`.
- Inner: flex, space-between, padding `14px 28px`.
- **Brand (left):** a 26×26px forest-green rounded square rotated 45° with a small parchment-outlined inner square; next to it stacked: "Backyard Thru‑Hike" (Zilla Slab 700, 19px, `--ink`) over "GET OUTSIDE" (JetBrains Mono, 9.5px, letter-spacing 0.32em, `--accent`).
- **Desktop nav (≥880px):** mono links (12px, letter-spacing 0.08em) — Home, Journal, About, Corner Library. Hover → `--accent`.
- **Mobile nav (<880px):** hamburger (three 24×2px bars). Tapping toggles a full-width dropdown panel below the header with the 4 links stacked (mono 14px, 13px vertical padding, 1px divider between).
- Breakpoint is measured in JS (`window.innerWidth < 880`), not a CSS media query, in the prototype — use a normal CSS media query in production.

**2. Hero** (`min-height: clamp(580px, 90vh, 840px)`, content top-aligned)
- **Background:** a single full-bleed inline SVG (`viewBox 0 0 1440 760`, `preserveAspectRatio="xMidYMax slice"`). Layers, back to front:
  - Sky: vertical linear gradient `--sky-top → --sky-bottom`.
  - Sun: two stacked circles at (1175,158) — outer r=92 @ 0.16 alpha (glow), inner r=56 @ 0.9 — fill `--sun`.
  - Decorative topographic contour lines: 3 thin curves, stroke `--ridge-near`, opacity 0.13, stroke-width 1.4.
  - Four ridgeline silhouette paths (back→front) filled `--ridge-far`, `--ridge-mid`, `--ridge-near`, `--ridge-fore`. Path `d` values are in the HTML — copy them verbatim.
- **Content (z-index 2):** max-width 720px, top padding `clamp(70px,11vh,128px)`.
  - Location pill: mono 11px, letter-spacing 0.22em, `--green` text, parchment translucent bg, 1px green border, a 6px `--accent` dot. Text: `PLATTSBURG, MO · 39.5656°N`.
  - H1: Zilla Slab 700, `clamp(2.7rem, 6.2vw, 5rem)`, line-height 0.98, letter-spacing -0.02em, `--ink`, `text-wrap:balance`. Copy: "Find the trail in your own backyard."
  - Lede: Inter, `clamp(1.05rem,1.7vw,1.3rem)`, line-height 1.55, `--ink-soft`, max-width 560px. Copy: "A field journal and lending library for the people of Plattsburg — for anyone who wants to find a little wildness in the ordinary ground underfoot. No summit required."
  - CTAs (flex, gap 14px): **primary** filled `--accent`, text `#FBF6E9`, mono 13px, padding `14px 22px`, radius 8px, soft shadow — "Read the Journal →". **secondary** 1.5px `--green` outline, `--green` text, translucent parchment fill — "Visit the Corner Library".

**3. Elevation divider**
- A `--ridge-fore` band holding an SVG (`viewBox 0 0 1440 70`, `preserveAspectRatio="none"`, height 62px) with a jagged mountain-profile polygon filled `--accent` (rust), plus a 2px stroke line of the same color at 0.55 opacity tracing the top edge. Sits directly under the hero.

**4. Journal** (`#journal`, vertical padding `clamp(56px,8vw,96px)`)
- Header row (flex, space-between, wrap): left = mono label "FIELD JOURNAL" (11px, letter-spacing 0.26em, `--accent`) over H2 "Lately, on the trail" (Zilla Slab 700, `clamp(1.9rem,3.6vw,2.9rem)`). Right = "All entries →" link (mono 12px, `--green`, with a 1.5px `--accent` bottom border).
- **Card grid:** `grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))`, gap 26px (naturally responsive — no media query).
- **Card** (`<article>`): bg `--card`, 1px border `green @ 12%`, **left border 4px `--green`**, radius 4px, shadow `0 10px 26px -22px rgba(38,48,42,0.7)`, overflow hidden, flex column.
  - Thumbnail: 188px tall image area. Diagonal striped placeholder in the prototype (a drag-drop `<image-slot>`); in production use a real `<img>`/CMS image, `object-fit: cover`.
  - Body padding `20px 20px 22px`. Tag chips (flex, gap 7px): mono 10px, letter-spacing 0.1em, `--slate` text, 1px `slate @ 40%` border, radius 4px, padding `3px 8px`.
  - Title: Zilla Slab 600, 1.32rem, line-height 1.12, `--ink`.
  - Excerpt: Inter 0.95rem, line-height 1.55, `--ink-soft`, `text-wrap:pretty`.
  - Meta footer: 1px top divider, mono 10.5px, `--ink-soft` — `DATE • READ TIME` separated by a faint bullet.
- The 3 posts (date, tags, title, excerpt, read time) are listed under **Content / Copy** below.

**5. Corner Library** (`#library`)
- Full-width band: bg `color-mix(in srgb, var(--green) 9%, var(--bg))`, 1px top & bottom borders `green @ 12%`.
- Inner: `grid-template-columns: repeat(auto-fit, minmax(320px,1fr))`, gap 48px, vertically centered, padding `clamp(56px,8vw,96px) 28px`.
- **Left:** image area `height: clamp(280px, 34vw, 400px)`, rounded 10px, 1px border. A rotated (8°) `--accent` circular "FREE TO BORROW" badge (84px, mono 9px, 3 lines, `#FBF6E9`) overlaps its top-right corner.
- **Right:** mono label "THE CORNER LIBRARY"; H2 "Borrow what you need. / Return it when you're done." (Zilla Slab 700, `clamp(1.9rem,3.6vw,2.8rem)`); lede paragraph (Inter 1.05rem, `--ink-soft`); an **item list** card (bg `--card`, 1px border, radius 8px) with rows: item name (Inter 500) + a status pill on the right. CTA button "Browse the full library →" (filled `--green`, `#FBF6E9`) plus a mono helper note.
- Status pill colors: **available** = green tint bg / `--green` text; **out** = rust tint / `--rust`; **seasonal** = slate tint / `--slate`. Each is `color-mix(... 16-18% ..., transparent)` bg.

**6. About / Dedication** (`#about`, max-width 760px, centered text, padding `clamp(60px,9vw,110px)`)
- Mono label "FIELD NOTES · EST. 2026" (`--slate`).
- Pull quote: Zilla Slab 500 **italic**, `clamp(1.5rem,3vw,2.15rem)`, line-height 1.3, `--ink`, `text-wrap:balance`. Copy: "You don't need a trailhead and a tank of gas. You need ten minutes, a pair of boots, and the willingness to look closely at the ground you already stand on."
- Mono dedication: "MADE FOR THE PEOPLE OF PLATTSBURG, MO".

**7. Footer** (bg `--ridge-fore` forest green, text `#E7E2CF`)
- **Trail-tip ticker** (top bar, 1px bottom border, padding `13px 28px`): a `--accent` "TRAIL TIP" mono chip + a rotating tip string (mono 12.5px, `#EDE8D6`) that fades in (`bthFade` 0.5s) on change. Tips rotate every **5200ms** and are season-specific (see Data below).
- Main grid (`repeat(auto-fit, minmax(220px,1fr))`, gap 40px): big "Get Outside." wordmark (Zilla Slab 700, `clamp(2.4rem,5vw,3.4rem)`, color `--bg`) + blurb; an EXPLORE link column; a FIND US column ("On the courthouse square / Plattsburg, MO 64477 / 39.5656°N, 94.4477°W").
- Bottom bar: 1px top border, mono 10.5px @ ~55% alpha — "© 2026 BACKYARD THRU-HIKE" and "BACKYARDTHRUHIKE.COM".

## Interactions & Behavior
- **Sticky header** with blur backdrop.
- **Mobile hamburger** toggles a stacked dropdown menu; links close it on click. Switch desktop/mobile at **880px** (use a CSS media query in production rather than the JS width check used in the prototype).
- **Smooth in-page anchor nav** to `#journal`, `#library`, `#about`, `#top`. (Add `scroll-behavior:smooth` and `scroll-margin-top` to offset the sticky header.)
- **Footer tip ticker:** cycles the current season's tip list every 5.2s with a short fade-in. Can be disabled (see `rotateTips` token below) → show only the first tip.
- **Hover states:** nav links → `--accent`; primary buttons → `filter:brightness(1.07)`; secondary button → faint green wash; footer links → `#fff`.
- **Card thumbnails & library image** are drag-and-drop fillable in the prototype; in production they are normal images sourced from the CMS / asset pipeline.

## State Management
Minimal. In a production rebuild:
- **`season`** — drives the entire color palette + which tip list shows. Default behavior: **auto-derive from the current date** (see token logic). Allow an explicit override (`auto | summer | fall | winter | spring`).
- **`menuOpen`** — mobile menu open/closed.
- **`tipIndex`** — current footer tip (advances on a 5.2s interval when rotation is enabled).
- **Journal posts** and **library items** should come from data/CMS, not hard-coded — sample data is below.

## Design Tokens

### Configurable behavior (was the "Tweaks" panel in the prototype)
- **`season`**: `auto | summer | fall | winter | spring` (default `auto`). When `auto`, derive from month: **Dec–Feb → winter, Mar–May → spring, Jun–Aug → summer, Sep–Nov → fall.** This replaced an on-page season toggle — it's intended as a config/server value, not user-facing UI.
- **`paperTexture`**: boolean (default `true`) — the subtle horizontal ruled-line texture over the parchment background (`repeating-linear-gradient(180deg, transparent 0 31px, rgba(47,79,61,0.05) 31px 32px)`).
- **`rotateTips`**: boolean (default `true`) — auto-rotate footer trail tips; when false, show the first tip only.

### Seasonal color palettes (CSS custom properties)
All UI colors reference these vars so the whole page re-themes by season. **Constant accents** referenced in copy: forest green `#2F4F3D`, rust orange `#C1542C`, slate blue `#5F8696` (these shift slightly per season below).

**Summer** (warm, default)
`--bg:#EFEAD8` · `--card:#F5F1E3` · `--ink:#26302A` · `--ink-soft:#565c4f` · `--green:#2F4F3D` · `--rust:#C1542C` · `--slate:#5F8696` · `--accent:#C1542C` · `--sky-top:#F6ECCB` · `--sky-bottom:#ECE7CB` · `--sun:#E8B84B` · `--ridge-far:#A9BC9C` · `--ridge-mid:#728F66` · `--ridge-near:#4C6B49` · `--ridge-fore:#2F4F3D`

**Fall** (amber)
`--bg:#ECE3CC` · `--card:#F3EAD2` · `--ink:#2c2a22` · `--ink-soft:#5e5640` · `--green:#4A5536` · `--rust:#B14620` · `--slate:#6E7E7E` · `--accent:#B14620` · `--sky-top:#F4DCB4` · `--sky-bottom:#EBDDBC` · `--sun:#D9702C` · `--ridge-far:#CBA873` · `--ridge-mid:#B0793F` · `--ridge-near:#7C5A2E` · `--ridge-fore:#463822`

**Winter** (cool, slate-led)
`--bg:#ECEAE1` · `--card:#F4F2EA` · `--ink:#24292b` · `--ink-soft:#54595c` · `--green:#3C4D55` · `--rust:#A85A3E` · `--slate:#5F8696` · `--accent:#5F8696` · `--sky-top:#DCE4EA` · `--sky-bottom:#E9EAE3` · `--sun:#CBD6DC` · `--ridge-far:#B3C0C7` · `--ridge-mid:#8597A1` · `--ridge-near:#5E7682` · `--ridge-fore:#3B4C54`

**Spring** (fresh green)
`--bg:#EFECD9` · `--card:#F5F2E0` · `--ink:#26302A` · `--ink-soft:#54604e` · `--green:#356A3A` · `--rust:#C1542C` · `--slate:#5F8696` · `--accent:#356A3A` · `--sky-top:#E3EBD2` · `--sky-bottom:#ECEDDB` · `--sun:#EBD66E` · `--ridge-far:#B3CC9E` · `--ridge-mid:#7FAE69` · `--ridge-near:#548045` · `--ridge-fore:#34582F`

### Typography
- **Display / headings:** Zilla Slab (400/500/600/700, plus italic for the pull quote). Google Fonts.
- **Body:** Inter (400/500/600).
- **Labels / nav / mono details:** JetBrains Mono (400/500/700).
- Heading sizes use `clamp()` for fluid scaling (values per section above). Mono labels use wide letter-spacing (0.1em–0.32em).

### Spacing / radius / shadow
- Page max-width 1200px; horizontal padding 28px; section vertical padding `clamp(56px,8vw,96px)`.
- Radii: cards 4px, buttons 8px, pills/chips 4–999px, library image 10px.
- Card shadow: `0 10px 26px -22px rgba(38,48,42,0.7)`. Button shadow: `0 6px 16px -8px rgba(0,0,0,0.4)`.
- Keyframes: `bthFade` (opacity 0→1, translateY 4px→0, 0.5s) for the tip ticker.

## Content / Copy (sample data — move to CMS)

**Journal posts**
1. **Smithville Lake at First Light** — tags `LAKESIDE`, `EASY` — JUN 18, 2026 · 4 MIN READ — "Out the door by 5:40, fog still sitting on the water. Two herons and a beaver wake — all before the first boat trailer hit the ramp."
2. **Three Maples and a Stone Wall** — tags `BACKYARD`, `MAPPING` — JUN 11, 2026 · 6 MIN READ — "You can survey a quarter-acre like it's the Ozark backcountry. Here's how I mapped every tree, burrow, and game trail behind the house."
3. **Smithville Bluffs Before Breakfast** — tags `BLUFF`, `MODERATE` — JUN 03, 2026 · 5 MIN READ — "A 1.2-mile loop up the timbered bluffs, done before the lot fills. Smithville Lake laid out flat and silver to the south."

**Corner Library items** (name — status)
- Osprey Daypack — 28L — AVAILABLE
- Field Guide: Missouri Wildflowers — AVAILABLE
- Trekking Poles (pair) — OUT · BACK FRI
- Two-Person Tent — AVAILABLE
- Snowshoes — Women's M — SEASONAL

**Footer trail tips** (by season)
- *Summer:* "Chiggers love the tall grass by July — tuck your socks in." / "Wild blackberries ripen along the old rail trail by late August." / "Listen for the dickcissel buzzing its name from the fence posts."
- *Fall:* "Oak and hickory peak in late October — the bluffs go gold and rust." / "First frost usually lands by mid-October. Cover the late tomatoes." / "Watch for monarchs funneling south through the prairie in September."
- *Winter:* "Bald eagles gather below Smithville Dam through January." / "Track prints in new snow: fox tracks run in a near-straight line." / "Thin ice in the lake coves even when the middle looks solid. Stay on the bank."
- *Spring:* "Spring ephemerals — trout lily, trillium — bloom before the canopy leafs out." / "Listen for spring peepers in the wet meadows by mid-April." / "Mud season: stick to gravel paths so the trails don't rut."

## Assets
- **Fonts:** Zilla Slab, Inter, JetBrains Mono (Google Fonts).
- **Hero landscape, sun, contour lines, elevation divider:** all inline SVG defined in the HTML — no external image files. Copy the path `d` strings verbatim.
- **Brand mark:** built from CSS (rotated rounded square), no asset file.
- **Photos:** none shipped. The card thumbnails and library shelf are placeholders meant to be filled with real photos (trail/river/bluff shots, a gear-shelf photo). Wire them to the CMS / asset pipeline.
- No icon library is used; the only glyphs are HTML entities (arrows, bullets, degree sign).

## Files
- `Backyard Thru Hike.dc.html` — the homepage design reference (template markup + a logic class near the bottom of the file). Read it for exact inline styles, SVG paths, and the palette/data objects.
- `image-slot.js`, `support.js` — runtime helpers for the prototype's drag-drop image placeholders and Design-Component format. **Reference only** — do not ship these; replace the image slots with real images.
