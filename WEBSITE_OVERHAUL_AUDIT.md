# Broadmoor Hat Co — Website Overhaul Audit (Phase 1)

Date: 2026-03-24
Source reviewed: https://broadmoorhatco.com/

## Quick Wins (High Impact, Low Effort)

1. **Fix copy quality and trust issues sitewide**
   - Correct capitalization and typos (e.g., "PRocess and Pricing", "PRicing", "Scotsdale", "iVisit", "Eight St").
   - Standardize naming and categories in nav ("Shop Hats", "Shop Hats & Accessories", "Shop!", "Custom Hats", "Handcrafted Hats").
   - Ensure all pages consistently show current year and location wording.

2. **Consolidate duplicate/legacy pages**
   - Merge and redirect duplicate contact URLs (`/pages/contact` and `/pages/contact-us`).
   - Ensure there is one source of truth for event pricing, appointment details, and navigation labels.

3. **Clarify conversion paths**
   - Add primary CTA hierarchy on home:
     - Primary: "Book Hat Appointment"
     - Secondary: "Book Event"
     - Tertiary: "Shop Ready-to-Wear"
   - Repeat CTA after each key section and in sticky mobile footer.

4. **Improve product card UX**
   - Remove repeated product titles on cards.
   - Add materials, brim/crown style, turnaround, and "Best for" tags.
   - Add quick-add and saved configuration options.

5. **Strengthen social proof and authority**
   - Add featured client logos, venue names, review snippets, and UGC gallery.
   - Add count-based trust indicators (hats shaped, events served, average rating).

## Structural Overhaul Recommendations

### 1) Information Architecture

- Recommended top nav:
  - Shop
  - Custom Hats
  - Events
  - Appointments
  - About
  - FAQ
  - Contact
- Replace mixed taxonomy with clear intent-based destinations:
  - "I want a custom hat"
  - "I need hats for an event"
  - "I want to shop now"

### 2) Homepage Framework

1. Hero: strong value proposition + two CTAs + short proof point.
2. "How it Works" (3-step visual flow).
3. "Choose Your Experience": In-shop custom | Event hat bar | Ready-to-wear.
4. Best sellers with richer product metadata.
5. Event packages snapshot with starting price + what's included.
6. Testimonial/UGC carousel.
7. Location + map + hours + parking.
8. Final CTA + lead capture.

### 3) Events Funnel (Major Revenue Opportunity)

- Create dedicated **Event Landing Page** built for inquiry conversion:
  - Package comparison table
  - Add-ons menu (branding, premium bands, travel tiers)
  - Capacity examples by event type
  - Logistics FAQ
  - Lead form with date, location, guest count, budget, event type
- Add downloadable one-page PDF deck for planners.
- Add calendar pre-qualification flow before form submission.

### 4) Custom Appointment Funnel

- Pre-appointment configurator:
  - Material -> crown -> brim -> band -> accessories -> estimate
- Show transparent estimate range and turnaround by material tier.
- Enable deposit checkout inside booking flow.

### 5) Brand & Storytelling

- Add founder/artisan story section and process craftsmanship visuals.
- Emphasize heritage differentiator (1880s conformateur) with explainer micro-content.
- Create "Lookbook" as editorial gallery filtered by style occasions.

## Conversion Rate Optimization Backlog

1. Add sticky mobile CTA bar (Book / Call / Directions).
2. Add exit-intent offer for email capture (lookbook or care guide).
3. Add cart-level upsells for bands, pins, travel cases.
4. Add urgency cues for event bookings (seasonal demand calendar).
5. Add trust badges and clearer shipping/returns/care policy links near CTAs.

## SEO + Discoverability

1. Build keyword-focused landing pages:
   - "Custom cowboy hats Colorado Springs"
   - "Hat bar for weddings"
   - "Corporate event hat experience"
2. Add robust schema:
   - LocalBusiness, Product, FAQ, Event, Review schema.
3. Improve internal linking from blog/lookbook into appointment and events pages.
4. Add unique meta titles/descriptions per collection and service page.

## Content Quality Fixes

- Create style guide for:
  - capitalization
  - punctuation
  - service naming
  - price display conventions
- Rewrite long paragraphs into skimmable sections with bullets.
- Add consistent policy content (shipping, turnaround, alterations, deposit/refund).

## Technical / Platform Improvements (Shopify)

1. Audit app load and remove unused apps/scripts.
2. Compress and serve modern images (WebP/AVIF) with responsive sizes.
3. Improve Core Web Vitals (especially mobile LCP/CLS).
4. Add search relevance tuning and collection filters (material/size/style/price).
5. Implement analytics stack:
   - GA4 ecommerce events
   - Meta CAPI
   - Klaviyo lifecycle flows

## 90-Day Rollout Plan

### Phase 1 (Week 1–2): Foundation
- Navigation/content cleanup
- CTA hierarchy and conversion sections
- Typo/consistency fixes

### Phase 2 (Week 3–6): Funnel Build
- Event LP + form redesign
- Appointment pre-qualifier flow
- Product card enrichment

### Phase 3 (Week 7–10): CRO + SEO
- Trust blocks, reviews, UGC
- Schema, metadata, local SEO pages
- Lead magnets and email automations

### Phase 4 (Week 11–13): Performance + Iteration
- Speed optimization
- A/B tests on hero, CTA copy, and packages
- Data-driven iteration from analytics

## Suggested Feature Additions

- "Design Your Hat" visual builder (light configurator)
- Corporate gifting portal for branded hat experiences
- Waitlist/preorder for limited seasonal drops
- Automated post-purchase care reminder and reorder flows
- Loyalty program for repeat local customers and event planners


## Feature Concept: Hat Finder 2.0 + Modular Designer Overhaul

This concept builds directly on the existing "Find Your Signature Hat" quiz flow (inspiration -> color -> shape -> character -> occasion -> recommendation) and turns it into a production-ready design and checkout engine.

### A) Keep and expand the quiz experience

- Keep the strongest parts of the current quiz:
  - Guided discovery for users who do not know hat terminology.
  - Multi-step style preference capture with confidence score/match output.
  - CTA paths: consult, request, save profile.
- Expand with:
  - Progressive disclosure (simple mode first, advanced mode optional).
  - Real-time cost range updates as users make selections.
  - Fit profile capture (head size, face-shape hints, wear context).

### B) New modular designer architecture (piece-part assembly)

Use a cache of preconfigured hat piece-parts and assemble a live composite preview:

1. **Parts Catalog (Canonical Library)**
   - Crown catalog (e.g., Cattleman, Teardrop, Pinch Front)
   - Brim catalog (e.g., 4" flat, slight curve, traditional curve)
   - Band catalog (ribbon, leather, braided, statement)
   - Optional accents (feathers, conchos, branding plates)

2. **Preconfigured Rendering Assets**
   - One clean base image per part variant (neutral color, transparent PNG/SVG/web-ready).
   - Standardized anchor points per asset so crowns/brims/bands align consistently in composition.
   - Layer order: brim -> crown -> band -> accents -> lighting/shadow overlay.

3. **Colorization Engine**
   - Apply color by filter/software transform instead of storing every color permutation image.
   - Recommended approach:
     - Base grayscale + alpha masks per part.
     - HSL/HSV transform + blend maps to preserve texture and shading.
     - Color profile constraints so branded colors remain visually accurate across devices.
   - Fallback: serve pre-rendered popular colorways if client device performance is weak.

4. **Compatibility Rules Engine**
   - Define allowed combinations (e.g., brim width limits for specific crown heights).
   - Validate style coherence before showing final recommendation.
   - Surface graceful alternatives ("closest valid option") when user picks unsupported combinations.

### C) User flow for the overhauled styler

1. User completes quiz or chooses direct builder mode.
2. System maps quiz answers to a ranked part set (top 3 complete looks).
3. User edits live preview by swapping crown/brim/band and color.
4. Designer recalculates price/timeline instantly.
5. User saves configuration to profile and moves to consultation/deposit.

### D) Data model (implementation blueprint)

- `part_type`: crown | brim | band | accent
- `part_id`: unique SKU-like identifier
- `shape_tags`: classic, rugged, modern, feminine, bold, etc.
- `color_capabilities`: supported dye ranges and finish behavior
- `compatibility_matrix`: allowed/blocked pairings
- `price_modifier`: per-part delta from base package
- `turnaround_modifier`: lead-time impact per part
- `render_config`: asset URLs, anchor points, mask map, z-index

### E) Performance + caching strategy

- CDN cache for part assets and color masks.
- Server-side generated preview snapshots for shareable links.
- Edge cache of top combinations by season and campaign.
- Local session cache so users can resume without data loss.

### F) Conversion features tied to the designer

- "Save My Build" with unique build code (e.g., BHC-7K2M).
- "Bring to Appointment" handoff payload for in-store staff tablet view.
- "Request This Build" sends exact part IDs + selected palette to sales pipeline.
- Abandonment recovery emails with rendered preview image and one-click resume.

### G) Rollout approach for this feature

- **Phase 1 (MVP):** quiz + static recommendation + save profile.
- **Phase 2:** live modular preview with cached parts and core colors.
- **Phase 3:** compatibility rules, dynamic pricing, and deposit checkout.
- **Phase 4:** AI-assisted style suggestions from uploaded outfit photos (optional).

### H) Success metrics for Hat Finder 2.0

- Quiz completion rate
- Builder completion rate
- Save/build share rate
- Consultation booking rate from designer
- Deposit conversion rate from designer
- Average order value uplift for modular add-ons

## KPIs to Track

- Appointment conversion rate
- Event inquiry submission rate
- Revenue per session
- AOV (with accessories attach rate)
- Returning customer rate
- Mobile bounce rate and LCP

---

This document is designed as a first-pass strategic audit to guide a full redesign and growth roadmap.
