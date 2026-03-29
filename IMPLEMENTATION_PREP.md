# Broadmoor Hat Co — Main Branch Cleanup + Coder Base

Date: 2026-03-29

The definitive source of truth for implementation is:

- `BROADMOOR_HAT_DESIGNER_AND_FIND_YOUR_HAT_IMPLEMENTATION_SPEC.txt`

## What was cleaned up

- Replaced the previous prep narrative (which referenced prototype-era assumptions) with a spec-first implementation base.
- Added a new `theme-scaffold/` directory that mirrors Shopify theme structure and gives an incoming coder deterministic starting points.

## Base now available for coder handoff

Use `theme-scaffold/` as the implementation starting point.

Included:

- Page templates for Hat Designer and Find Your Hat
- Liquid section shells for both pages
- Centralized data registry with:
  - 5 allowed felt colors
  - 8 required quiz questions
  - 4 result archetypes + baseline builds
  - tie-breaker ordering
- Starter JS for quiz logic and designer state/share behaviors
- Starter CSS for layout and controls

## Deliberate constraints in this base

- No feature creep beyond the definitive spec.
- No compatibility blockers between combinations.
- No rotation/AR/360 flows.
- No detached microsite assumption.

## Next build steps

1. Move scaffold files into the target live theme repository structure.
2. Wire real part assets and compositing layers (brim -> crown -> band).
3. Hook logo asset for PNG export branding in the bottom-right corner.
4. Add hamburger-only menu entries in Shopify navigation.
5. Run QA against Section 19 (Definition of Done) in the spec.
