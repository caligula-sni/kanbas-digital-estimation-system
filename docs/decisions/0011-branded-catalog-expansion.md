# ADR 0011: Branded Catalog Expansion + Mixed/DIY Category

## Status
Accepted

## Context
Two requests handled together: (1) feature real, recognizable Philippine brand names instead of generic descriptions — confirmed this is legal (factual price information, no logos/packaging used, matches what DTI's own SRP bulletin does), and (2) allow a Kanbas to pull from multiple categories at once for mixed shopping/DIY trips, without breaking the existing "one category per Kanbas" rule for the other categories.

Standard going forward: **40 items per category, per batch.** Past that in a single pass, sourcing quality drops — batches let each category get real research rather than filler. Food & Groceries was done first since it has the deepest official price-tracked branded data (DTI SRP bulletin) to draw from.

## Decision

**Food & Groceries expanded from 10 → 40 items**, real brand names throughout:
- 26 verified: 4 generic PSA-sourced staples (rice, cooking oil, sugar, egg — no single dominant brand, so kept generic) + 22 real DTI SRP brand+price pairs (Saba, 555, Star, Argentina, CDO, Family's, Jersey, Alaska, Angel, Birch Tree, Great Taste, Nescafe, Datu Puti, Silver Swan, Viva, 5-Star Esperma, Winner, Bear Brand, Payless, Lasap, Pinoy Tasty)
- 14 estimated: common, recognizable brands (Lucky Me, Century Tuna, UFC, Knorr, Maggi, Del Monte, Purefoods, Magnolia, San Miguel, Skyflakes, Chippy, Piattos, Nissin, Milo) where no official SRP/PSA figure exists — honestly tagged, not presented as verified

**New Kanbas-level category — "Mixed / DIY":**
- Not an item category. No item is tagged `category: 'mixed'`.
- Added as a 6th option in `kanbas_new.html`, and as a separate `KANBAS_CATEGORIES` list (= `CATEGORIES` + mixed) used only for the Kanbas-creation dropdown and label lookups
- When a Kanbas's category is `'mixed'`, the builder's item search skips category filtering entirely (shows all 86 items), and the item-detail category-block check is bypassed
- The 5 real categories (school supplies, food, hardware, steelwork, hygiene) keep the one-category-per-Kanbas rule from ADR 0008 — mixed is additive, not a replacement

## Consequences
- Catalog is now 86 items total (up from 56)
- Verified/estimated ratio for Food specifically: 26/40 (65%) — notably better than the earlier hardware/steelwork categories
- `items.html` category tabs still only show the 5 real categories (mixed is never a browsable filter, since no items carry that tag) — this is intentional, not a bug
- Remaining categories (School Supplies, Hardware, Steelwork, Hygiene) still need their own 40-item expansion passes, one at a time, following this same batch approach
