# Hat Finder 2.0 Prototype

This is a standalone prototype for the Broadmoor Hat Co overhaul request.

## What it demonstrates
- Multi-step style quiz that maps user answers into default part recommendations.
- Modular designer using preconfigured hat piece-parts:
  - Crown
  - Brim
  - Band
- Compatibility rules (example blocked combination handling).
- Single-asset style approach with color changed through filter logic (prototype approximation).
- Dynamic build code and estimated price generation.

## Run locally
From repository root:

```bash
python -m http.server 8000
```

Open:

- http://localhost:8000/prototype/hat-finder-2.0/

## Notes
This is intentionally lightweight for fast iteration and stakeholder review. In production, migrate parts to CDN-backed assets, use calibrated mask-based color transforms, and add backend persistence for saved builds.
