# AGENTS.md — LUMI PET PROJECT BOOTSTRAP

This repository is governed by the central Website OS repository:

- Source repo: `capquangfptminhlh/seo-web`
- Source ref: `main`
- Manifest: `governance/website-os.manifest.yml`
- Central entrypoint: `AGENTS.md`
- Enforcement engine: `engine/website_os_engine.py`
- Engine policy: `engine/policy.yml`
- Full-scope standard: `standards/Website_OS_Full_Scope_Launch_Completeness_Gate_v1.0.0.md`
- Full-scope machine policy: `governance/full-scope-launch-policy.yml`

## Mandatory startup

Before substantive work, load the central manifest, resolve the central source SHA, complete the manifest `mandatory_read_order`, then read these local rules. Hard Website OS failures fail closed.

## Project-specific rules

1. Production project: Lumi Pet Spa & Hotel 24/7, Bình Thạnh, TP.HCM.
2. Production repository: `capquangfptminhlh/mimi`.
3. `main` is the editable source branch. GitHub Pages deploys from the workflow on `main`.
4. Business facts and prices must come from first-party supplied material or another identified source of truth. Never fabricate price, address, coordinates, opening hours, reviews, availability or search metrics.
5. First-party price source observed 2026-08-24: user-supplied Lumi Pet price posters for dog spa/grooming, cat spa and pet hotel.
6. Verified source values used by the booking system:
   - Dog spa: Tắm vệ sinh: <3kg 120k; 3–6kg 170k; 6–9kg 220k; 9–12kg 270k; 12–18kg 350k.
   - Dog tắm+cạo: <3kg 180k; 3–6kg 240k; 6–9kg 300k; 9–12kg 360k; 12–18kg 460k.
   - Dog tắm+cắt tỉa: <3kg 260k; 3–6kg 320k; 6–9kg 380k; 9–12kg 450k; 12–18kg 550k.
   - Cat tắm vệ sinh: <3kg 150k; 3–6kg 200k; 6–10kg 250k.
   - Cat tắm+cạo: <3kg 230k; 3–6kg 290k; 6–10kg 350k.
   - Hotel/day: <3kg 100k; 3–6kg 120k; 6–9kg 160k; 9–12kg 200k; 12–15kg 250k. More than 5 days: 5% discount; more than 10 days: 8% discount.
7. Spa/grooming poster lists possible surcharges as ranges; those are never silently added to automated totals. Booking UI must label totals as provisional and require shop confirmation when a surcharge may apply.
8. Current public canonical origin is `https://capquangfptminhlh.github.io/mimi/` unless a verified custom domain is configured later.
9. Local SEO is enabled. Do not create doorway/location-name-swap pages.
10. Do not publish unverified latitude/longitude. Omit geo coordinates until verified.
11. Preserve existing booking history compatibility using localStorage key `paws_perfect_bookings` unless a real backend is introduced.
12. SEO/AEO/GEO priority: crawlable money pages, explicit canonical URL ownership, LocalBusiness/Service structured data, first-party price tables, concise answer blocks, consistent NAP, internal links, sitemap and robots.
