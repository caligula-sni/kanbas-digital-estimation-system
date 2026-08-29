# ADR 0010: Hygiene & Household Category + Price Source Attribution

## Status
Accepted

## Context
Two decisions made together in one pass:
1. Add a 5th category (Hygiene & Household), matching the original concept doc's broader scope
2. Show price sources on the item detail page, not just in internal ADRs — a beta tester asking "why should I trust this number" deserves a visible answer, not just a repo file they'll never read

## Decision

**Data model change:** every item in `items-data.js` now carries `verified` (boolean) and `source` (string) fields. This was retrofitted onto the full existing catalog, not just the new category, so the distinction is consistent everywhere.

**New category — Hygiene & Household (7 verified, 8 estimated, 15 total):** toilet soap, laundry bar soap, candles, and batteries were sourced from the same DTI SRP bulletin used for food items (Feb-May 2026). Dishwashing liquid, shampoo, toothpaste, toilet paper, rubbing alcohol, fabric softener, trash bags, and hand soap are not DTI/PSA-tracked commodities — no reliable source was found, so these remain honest estimates.

**Branded price corrections (from earlier research, not yet written back):** claw hammer (Stanley 16oz, ₱255, KHM Megatools/Goldpeak Tools), latex paint (Boysen Permacoat 1L, ₱234.50, DIY Hardware PH), highlighter (Stabilo Boss, ₱48, SM Stationery), clearbook (Comix 40-sheet, ₱235, National Book Store) — these were sourced during the "choose branded products" discussion but the catalog wasn't updated until this pass.

**UI:** item detail page shows a tag — "✓ Verified — [source]" or "○ Estimated — Estimated" — next to the price.

## Scope Decision Deferred
Health products (Step 4 of the roadmap) still needs a scope call — OTC supplies only (alcohol, band-aids, masks) vs. including basic medicine (vitamins, paracetamol). Not decided yet; revisit when that category is actually built.

## Consequences
- Catalog is now 56 items across 5 categories, 34 verified / 22 estimated
- The verified/estimated split is visible to users, not just documented internally — this is the "citation" pattern discussed, applied at the data layer rather than as a separate feature
- Going forward, any new item added to the catalog must declare `verified` and `source` — no more silent unsourced entries
- Sketch-icon artwork (discussed, not yet built) was deliberately deferred until the category list stabilizes, so icon "buckets" don't need re-scoping every time a category is added
