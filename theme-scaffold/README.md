# Broadmoor Hat Co Theme Scaffold (Spec-Aligned Base)

This folder is a clean base for implementing the **Hat Designer** and **Find Your Hat** pages inside a Shopify theme, aligned to:

- `BROADMOOR_HAT_DESIGNER_AND_FIND_YOUR_HAT_IMPLEMENTATION_SPEC.txt`

## What's included

- Shopify JSON templates for both pages.
- Two liquid sections with spec-required layout structure.
- Spec-locked data registries (colors, archetypes, quiz questions, baseline builds).
- Lightweight starter JS for:
  - quiz scoring (8 questions / 4 outcomes / tie-break rules)
  - quiz-to-designer handoff state
  - share-link state read/write
- Starter CSS with brand-safe, neutral defaults.

## What the incoming coder should do next

1. Wire real part assets (brim/crown/band) and canvas compositing.
2. Replace placeholder logo and appointment URL.
3. Connect menu entries in Shopify navigation (hamburger-only).
4. Apply production visual polish aligned to broadmoorhatco.com.
5. QA against spec Definition of Done.

## Notes

- The scaffold intentionally avoids extra features excluded by MVP.
- The scaffold keeps deterministic data in one place: `assets/hat-config.js`.
