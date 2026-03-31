# Broadmoor Hat Co — Shopify Installation Guide

This package installs two new customer-facing pages into the Broadmoor Hat Co Shopify theme:

- **Hat Designer** — `/pages/hat-designer` — live hat configurator
- **Find Your Hat** — `/pages/find-your-hat` — 8-question style quiz

---

## Repository Structure

```
shipped-code/           ← Copy these into your live Shopify theme
  assets/
    hat-config.js       Central catalog: colors, parts, quiz, results
    hat-designer.js     Hat Designer canvas compositing logic
    find-your-hat.js    Quiz scoring and rendering
    hat-tools.css       Shared styles for both pages
  sections/
    hat-designer-main.liquid
    find-your-hat-main.liquid
  templates/
    page.hat-designer.json
    page.find-your-hat.json

readme/                 This folder
preview/                Standalone HTML previews (no Shopify required)
archive/                Previous iterations and reference files
```

---

## Step 1 — Upload PNG Assets

The hat part images must be uploaded to your Shopify theme `assets/` folder.
**Source:** `prototype/hat-finder-2.0/assets/` in this repo.

| File | Part |
|------|------|
| `brim_flat.png` | Brim: Flat |
| `brim_george_wide.png` | Brim: George |
| `brim_george_pointed.png` | Brim: George Pointed |
| `brim_low.png` | Brim: Low |
| `crown_wide_cattleman.png` | Crown: Cattleman + Wide Cattleman |
| `crown_round.png` | Crown: Round Top |
| `crown_gus.png` | Crown: Gus |
| `crown_open.png` | Crown: Open |
| `crown_brick.png` | Crown: Brick |
| `crown_clint.png` | Crown: Clint |
| `crown_square.png` | Crown: Square Top |
| `band_leather.png` | Band: Leather |
| `band_horsehair.png` | Band: Horsehair |
| `band_bead.png` | Band: Beaded |
| `band_horsehair_silver.png` | Band: Silver Horsehair |
| `band_blue.png` | Band: Blue Ribbon |
| `band_pink.png` | Band: Pink Ribbon |

**Via Shopify Admin:** Online Store → Themes → Edit Code → Assets → Upload files

**Via Shopify CLI:**
```bash
shopify theme push --path ./your-theme-folder
```

---

## Step 2 — Upload JS, CSS, and Liquid Files

From `shipped-code/`, upload to the corresponding theme folders:

| Source | Theme destination |
|--------|-------------------|
| `assets/hat-config.js` | `assets/hat-config.js` |
| `assets/hat-designer.js` | `assets/hat-designer.js` |
| `assets/find-your-hat.js` | `assets/find-your-hat.js` |
| `assets/hat-tools.css` | `assets/hat-tools.css` |
| `sections/hat-designer-main.liquid` | `sections/hat-designer-main.liquid` |
| `sections/find-your-hat-main.liquid` | `sections/find-your-hat-main.liquid` |
| `templates/page.hat-designer.json` | `templates/page.hat-designer.json` |
| `templates/page.find-your-hat.json` | `templates/page.find-your-hat.json` |

---

## Step 3 — Create Shopify Pages

In **Shopify Admin → Online Store → Pages**, create two pages:

**Hat Designer**
- Title: `Hat Designer`
- Handle: `hat-designer`
- Theme template: `page.hat-designer`

**Find Your Hat**
- Title: `Find Your Hat`
- Handle: `find-your-hat`
- Theme template: `page.find-your-hat`

---

## Step 4 — Add to Hamburger Navigation

In **Shopify Admin → Online Store → Navigation**, find the hamburger/mobile menu and add:

- Label: `Hat Designer` → Link: `/pages/hat-designer`
- Label: `Find Your Hat` → Link: `/pages/find-your-hat`

Per spec: hamburger menu only, not top desktop nav.

---

## Step 5 — QA Checklist

### Hat Designer
- [ ] Loads at `/pages/hat-designer` without errors
- [ ] Default build: black / Cattleman / George / Leather
- [ ] Canvas shows composited hat parts
- [ ] Color circles update the hat preview
- [ ] `Selected color: [Name]` text updates correctly
- [ ] Brim, Crown, Band dropdowns update preview
- [ ] Book Appointment → `https://broadmoorhatco.com/pages/appointments`
- [ ] Save PNG downloads `custom_hat.png` at 1078×1078
- [ ] Copy Share Link restores exact design on reload
- [ ] Arriving from quiz shows origin message

### Find Your Hat
- [ ] Loads at `/pages/find-your-hat` without errors
- [ ] Start the Quiz begins 8-question flow
- [ ] Progress bar advances each question
- [ ] Answer click auto-advances (no Next button)
- [ ] After Q8 result card appears
- [ ] Start My Custom Hat → Hat Designer with preloaded build
- [ ] Book Appointment → appointments page
- [ ] Same answers always produce same result

### Navigation
- [ ] Hat Designer in hamburger menu
- [ ] Find Your Hat in hamburger menu

---

## Known Limitations

1. **No `crown_cattleman.png` asset** — Cattleman crown uses `crown_wide_cattleman.png`. Add a dedicated `crown_cattleman.png` and update the `asset` field in `hat-config.js` to enable it.

2. **PNG assets must be uploaded manually** — Binary files cannot be pushed via the GitHub API. Copy all PNGs from `prototype/hat-finder-2.0/assets/` to the Shopify theme `assets/` folder.

3. **Tinting works best on neutral/greyscale source images** — The canvas pipeline converts to greyscale then multiply-tints. Strongly pre-colored assets may shift unexpectedly.

4. **Logo in PNG export is text** — `Save PNG` writes `BROADMOOR HAT CO` as text. Upload `bhc_logo.png` to assets and update `exportPng()` in `hat-designer.js` to use it.

5. **Live theme not in this repo** — This is an integration-ready module. Follow steps above to place files into the real Shopify theme.
