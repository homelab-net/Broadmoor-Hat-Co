# Hat Finder 2.0 Prototype

This is a standalone prototype for the Broadmoor Hat Co overhaul request.

## What it demonstrates
- Multi-step style quiz that maps user answers into default part recommendations.
- Progressive disclosure entry modes:
  - Simple mode for quick recommendation capture.
  - Advanced mode for users that want deeper configuration control.
- Modular designer using preconfigured hat piece-parts:
  - Crown
  - Brim
  - Band
- Compatibility rules with graceful fallback messaging.
- Top-3 ranked look recommendations generated from quiz style affinity tags.
- Dynamic build code, estimated price, and turnaround generation.
- "Save My Build" behavior via localStorage to support appointment handoff.
- Single-asset style approach with color changed through filter logic (prototype approximation).

## Run locally
From repository root:

```bash
python -m http.server 8000
```

Open:

- http://localhost:8000/prototype/hat-finder-2.0/

## Notes
This is intentionally lightweight for fast iteration and stakeholder review. In production, migrate parts to CDN-backed assets, use calibrated mask-based color transforms, and add backend persistence for saved builds.
