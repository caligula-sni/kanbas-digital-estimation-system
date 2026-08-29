# ADR 0007: Visual Redesign — Manila-Ledger Aesthetic, Rebrand to KANBAS

## Status
Accepted

## Context
The app's design was functional but generic (default sans-serif, plain white/gray). "Kanbas" is Tagalog for "canvas" — the name itself pointed at a stronger visual identity than the placeholder UI had. Also wanted a proper landing page (separate from the in-app Home page) to introduce the product before someone starts using it.

## Decision
- **Rebrand:** "KDES" → "KANBAS" everywhere user-facing (sidebar wordmark, page titles). Internal identifiers (localStorage keys, function names) unchanged to avoid unnecessary churn.
- **Visual direction:** manila-folder / ledger-paper palette (warm tan paper, ballpen-blue accent, red-pen accent for remove/delete actions) instead of a generic light theme — grounded in the actual material world of Filipino school/office supplies, which is the app's subject matter.
- **Typography:** Space Mono (display/headlines — ledger/receipt feel), Inter (body), JetBrains Mono (prices/totals/dates — tabular alignment for numbers).
- **New landing page** (`app/landing.html`), separate from the in-app `home.html` dashboard. Hero headline "Digital Expenditures Estimation Service for [rotating audience]" with a stamp-style entrance animation on the rotating word, respecting `prefers-reduced-motion`.
- **Entry point:** `index.html` now redirects to `landing.html` (was `home.html`). The in-app sidebar nav still links to `home.html` as the dashboard once someone has "entered."

## Consequences
- Fonts load from Google Fonts CDN — app now has an external dependency it didn't have before (fails gracefully to system fonts if offline, but not a fully offline-first app anymore)
- Design is now distinctive and intentional rather than default browser styling — better for the Facebook beta's first impression and portfolio value
- Landing → Home is now a two-step entry (matches the original concept doc's site map, which always had these as separate pages)
