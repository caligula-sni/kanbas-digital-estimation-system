# ADR 0008: Expand to Multiple Categories

## Status
Accepted — supersedes ADR 0002

## Context
ADR 0002 scoped v1 to school supplies only, to validate the core loop before taking on unit/pricing complexity across categories. That validation is done. Since ADR 0006 moved the catalog to a static JS file (no schema migrations, no DB setup), the cost of adding categories dropped significantly — it's now just adding array entries.

## Decision
Expanded the catalog to 4 categories: School Supplies, Food & Groceries, Hardware & Woodwork, Steelwork & Construction (41 items total). Each Kanbas is still scoped to exactly one category, chosen at creation (`kanbas_new.html`) — matches the original concept doc's design ("category such as food, woodwork, steelwork, school work").

Rules enforced:
- The Kanbas Builder's item search only shows items from the Kanbas's own category (no cross-category mixing in one list)
- `items.html` (standalone browse) shows all categories with a tab filter, since browsing isn't tied to one Kanbas
- If someone reaches an item's detail page from a different category than their active draft, they're blocked from adding it and prompted to start a new Kanbas in that category instead

## Consequences
- Item units vary meaningfully by category (piece, kg) — `price` is always "per unit," so the total calculation (`quantity * price`) still works uniformly regardless of category, no formula changes needed
- Catalog now needs more careful upkeep across 4 categories instead of 1, but still just editing `items-data.js`
- A Kanbas cannot mix categories (e.g. school supplies + hardware in one list) — intentional, matches the original concept; revisit only if user feedback asks for mixed lists
