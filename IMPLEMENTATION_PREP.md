# Broadmoor Hat Co — Shopify Theme Implementation Preparation

Date: 2026-03-25

## What was reviewed

- `README.md`
- `WEBSITE_OVERHAUL_AUDIT.md`
- `BROADMOOR_HAT_CO_ONE_SHOT_CODING_PROMPT.txt`
- `broadmoor_hat_designer_manifest.csv`
- `prototype/hat-finder-2.0/README.md`
- Uploaded image pack in repo root (`*.png`)

## Current repo state (important)

This repository is **not** currently a full Shopify theme structure. It includes strategy docs, a prototype folder, a manifest CSV, and modular PNG assets, but no canonical Shopify theme directories like:

- `layout/`
- `templates/`
- `sections/`
- `snippets/`
- `assets/` (theme-level)
- `config/` with theme settings schema

Implication: implementation should be prepared as an **integration-ready module plan** for the live Broadmoor theme, then merged into the actual theme repository/environment.

## Uploaded image pack assessment (from direct visual review)

- Asset dimensions are consistent by class:
  - most part assets are `1024x1024`
  - several assets are `1024x1536`
- Visual classes identified:
  - crown-only renders
  - brim-only renders
  - a few full crown+band references
- Background treatments are mixed:
  - transparent black/alpha previews
  - gradient studio backgrounds on some exports

### Normalization items required before production compositing

1. Ensure all production compositing assets have transparent backgrounds only.
2. Separate mixed renders into strict part classes:
   - crown-only
   - brim-only
   - band-only (or generated vector band layer if not available)
3. Normalize anchor and canvas model so all part families align from one coordinate system.
4. Keep naming aligned to `broadmoor_hat_designer_manifest.csv` output filenames.

## Recommended implementation path (Shopify-native)

### Phase A — Theme integration scaffolding

1. Add new pages/templates:
   - `page.hat-quiz`
   - `page.hat-designer`
2. Add reusable section/snippets:
   - quiz stepper section
   - designer canvas section
   - results card + handoff CTA snippets
3. Add theme assets:
   - `hat-quiz.js`
   - `hat-designer.js`
   - `hat-tools.css`
   - data JSON files for catalog, compatibility, quiz mapping, and color filters
4. Add menu entries in Shopify Navigation:
   - Hat Quiz
   - Hat Designer

### Phase B — Data and rendering engine

1. Central config files:
   - part catalog
   - compatibility rules
   - color swatch/filter tokens
   - deterministic quiz scoring map
2. Implement layered preview engine:
   - brim base
   - crown
   - band
3. Persist state in URL + local storage:
   - build code
   - crown/brim/band/color IDs
   - source mode (`quiz` or `designer`)

### Phase C — Conversion handoff

1. Add CTA actions:
   - save build
   - share build URL
   - open booking flow with payload
2. Ensure no customer-facing pricing/lead time appears in Quiz/Designer v1.

## Questions to unblock implementation

### Shopify/theme access

1. Can you provide the **actual live Shopify theme repo** (or theme export) where these files must be implemented?
2. Which theme is live now (e.g., Dawn derivative, custom theme name/version)?
3. Do you want implementation on a development theme first, then publish?

### Navigation + URL decisions

4. Confirm final slugs:
   - `/pages/hat-quiz`
   - `/pages/hat-designer`
5. Should both links appear in desktop nav and hamburger/mobile menu, or hamburger only?

### Booking handoff destination

6. Where should “Book with this design” route users?
   - existing appointment page URL?
   - event booking URL?
   - conditional routing?
7. Should build payload be appended as URL params, hidden form fields, or both?

### Asset and design constraints

8. Do you have a **band-only PNG set**, or should v1 render bands as stylable vector/CSS ribbons?
9. Do you approve a single “left-side profile” preview for v1, with no angle switching yet?
10. Which exact customer-facing color set should ship in v1 (name + hex list)?

### Quiz product logic

11. Please confirm final quiz steps/questions for production (the prototype has a candidate flow).
12. For results, should recommendations map to:
   - style families only, or
   - exact crown+brim+band defaults?
13. Do you want predefined rationale copy per result, or should we draft and you approve first?

### Data + CRM integration

14. Where should saved builds be sent?
   - Shopify customer metafields
   - Klaviyo profile properties
   - both
15. Should staff receive build payload by email, CRM webhook, or Shopify note/cart attribute?

### Governance

16. Who is final approver for:
   - quiz wording
   - compatibility rules
   - color names
   - launch QA signoff

## Pre-implementation acceptance criteria (draft)

- Deterministic quiz returns 1 primary + 2 alternates every time for same answers.
- Designer supports crown/brim/band/color with visible swatches/chips.
- Layer order is fixed and documented.
- Build state can be saved/shared and passed into booking.
- No pricing, lead-time, or turnaround shown.
- Menu links added without disrupting existing Book Appointment / Book Event / Shop pathways.

