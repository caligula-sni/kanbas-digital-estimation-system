# Changelog

## [Unreleased]
### Added
- Food & Groceries expanded 10 → 40 items with real Philippine brand names (Saba, 555, Star, Argentina, CDO, Datu Puti, Silver Swan, Lucky Me, Century Tuna, and more) — 26 verified via DTI SRP bulletin, 14 estimated (ADR 0011)
- New "Mixed / DIY" Kanbas category — lets one Kanbas pull items from all 5 categories at once, for shopping trips that cross categories (ADR 0011)
- 5th category: Hygiene & Household (15 items, 7 verified against DTI SRP bulletin) — ADR 0010
- `verified`/`source` fields on every catalog item; shown as a tag on item detail pages
- Category option added to Create Kanbas dropdown

### Changed
- Corrected 4 branded item prices sourced earlier but not yet written back: claw hammer (₱250→₱255, Stanley), latex paint (₱220→₱234.50, Boysen), highlighter (₱25→₱48, Stabilo Boss), clearbook (₱55→₱235, Comix — also fixed spec mismatch, was described as 20 pages, actual product is 40 sheets)
- Verified all 41 original catalog prices against real PH sources (DTI SRP bulletin, DTI school supplies price guide, PSA retail price monitoring, 2026 construction material price lists) — see ADR 0009. Several corrected meaningfully, notably cooking oil (₱95→₱200/L) and a few construction materials.

### Added
- Expanded catalog to 4 categories: School Supplies, Food & Groceries, Hardware & Woodwork, Steelwork & Construction — 41 items total (ADR 0008)
- Category tabs on `items.html` for filtering the standalone browse view
- Category-compatibility check on `item_detail.html` — blocks adding an item from a different category than the active Kanbas

### Changed
- **Rebrand:** KDES → KANBAS (ADR 0007). Sidebar wordmark and all page titles updated.
- Full visual redesign — manila-ledger aesthetic, ballpen-blue/red-pen accent palette, Space Mono / Inter / JetBrains Mono type system (ADR 0007)
- New landing page (`app/landing.html`) with animated rotating-audience hero, separate from the in-app `home.html` dashboard
- `index.html` now redirects to `landing.html` instead of `home.html`
- **Breaking:** Converted to a fully static site (ADR 0006). Removed PHP and MySQL entirely.
- `items` MySQL table → `app/js/items-data.js` static array
- All `.php` pages → `.html`, PHP includes replaced by `nav.js`
- Server-side search (page reload) → client-side JS filtering
- Deployment target: GitHub Pages via GitHub Actions (`.github/workflows/deploy-pages.yml`)
- Removed `src/`, `database/` — no longer needed
- Removed user accounts entirely (ADR 0005). No more register/login/logout.
- Kanbas storage moved from server-side session+MySQL to client-side localStorage (`app/js/kanbas-store.js`)

### Added
- Initial project scaffold and docs (requirements, architecture, schema, ADRs)
- All FR-02 through FR-11 from requirements.md implemented

### Added
ADR 0013: Added 25 more items for Food and Groceries 
ADR 0014: Added 32 more items for Hardware and Woodwork 
ADR 0015: Added 32 more items for Steelwork & COnstruction 
ADR 0016: Added 25 more items for Steelwork & COnstruction 
