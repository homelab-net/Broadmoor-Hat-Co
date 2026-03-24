# Hat Finder 2.0 Prototype

Interactive hat configurator for Broadmoor Hat Co — style quiz + modular designer.

## What it demonstrates

- **5-step style quiz** that maps answers to crown, brim, material, and color recommendations.
- **Mode toggle** — quiz or jump straight to the builder.
- **Full crown catalog** — all 15 styles from the manifest (Open, Low Cattleman, Cattleman, Wide Cattleman, Ranch, Gus, Brick, Square Top, Round Top, Diamond Top, Gambler, Clint, Association, Puncher, Luke).
- **Split brim selector** — 11 brim styles × 5 edge shapes = 55 combinations, matching manifest naming.
- **5 band options** — Grosgrain, Leather, Braided, Horsehair, Concho (with visual pattern rendering).
- **4 materials** with price modifiers and turnaround ranges.
- **8 hat colors** as visual chip swatches; color tinting via CSS filter on base assets.
- **PNG asset compositing** — layers attempt to load from `assets/crowns/` and `assets/brims/`; SVG placeholders render instantly as fallback.
- **Compatibility engine** — blocks aesthetic mismatches (e.g. Gambler crown + Buckaroo brim) with a soft warning.
- **Shareable build URL** — state encoded in URL hash; copy link via Share / Save buttons.
- **Live build code** — unique alphanumeric code per configuration (e.g. `BHC-CATARE`).
- **Estimated pricing** — base $500 + per-part modifiers, updates in real time.

## Asset structure (for PNG drop-in)

```
assets/
  crowns/
    crown_open_silverbelly.png
    crown_cattleman_silverbelly.png
    crown_gus_silverbelly.png
    ... (one per crown style, silverbelly base color)
  brims/
    brim_flat_pointed_silverbelly.png
    brim_taco_wide_silverbelly.png
    ... (one per style × edge combination)
```

PNG files are named to match `output_filename` in `broadmoor_hat_designer_manifest.csv`.
Drop them into the correct folder and they auto-composite over the SVG placeholders.

## Run locally

```bash
# From repository root:
python -m http.server 8000
```

Open: `http://localhost:8000/prototype/hat-finder-2.0/`

## Production notes

- Replace CSS filter tinting with SVG `feColorMatrix` or canvas compositing for calibrated color accuracy.
- Migrate assets to CDN; add `<link rel="preload">` for above-the-fold parts.
- Add backend persistence for saved builds (build code → configuration lookup).
- Phase 3: deposit/checkout flow directly from the designer.
