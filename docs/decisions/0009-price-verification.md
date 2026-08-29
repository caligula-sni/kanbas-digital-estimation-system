# ADR 0009: Price Verification Pass (August 2026)

## Status
Accepted

## Context
The original 41 prices (ADR 0008) were generated estimates, not sourced from any real data — flagged as a gap when asked directly. Ran a verification pass using web search against real Philippine sources.

## Sources Used
- **DTI SRP Bulletin, effective 02 Feb–10 May 2026** — official suggested retail prices for canned sardines, iodized salt, bread, powdered milk, instant noodles/mami, coffee sachets
- **DTI "Gabay sa Pamimili ng School Supplies" SY 2026-2027** (released June 2026) — official price ranges for notebooks, pencils, ballpens, erasers, rulers, crayons
- **PSA Price Situationer of Selected Agricultural Commodities** (April–August 2026 releases) — rice, cooking oil, sugar, egg retail averages
- **2026 PH construction material price lists** (multiple contractor/supplier references) — cement, hollow blocks, plywood, rebar, GI sheets, nails, lumber, tie wire

## Confidence Levels

**High confidence (matched to an official/verified figure):** rice, cooking oil, sugar, egg, canned sardines, iodized salt, bread, powdered milk, instant noodles, coffee sachet, notebook, pencil, eraser, ruler, crayons, cement, hollow blocks, plywood, rebar, GI sheet, nails, lumber, tie wire.

**Not independently verified — kept as reasonable estimates:** folder, scissors, glue stick, bond paper (ream), highlighter, sign pen, clearbook, correction tape, stapler, claw hammer, wood glue, sandpaper, latex paint, screwdriver set, steel angle bar, welding rod, sand per sack. These weren't found in any commodity-tracked price list (DTI/PSA don't regulate them, and general hardware tools/stationery items aren't index-tracked the way food and core construction materials are).

## Notable Corrections from Original Estimates
- Cooking oil: ₱95 → ₱200/L (was roughly half the real price)
- Plywood 4x8: ₱850 → ₱550/sheet
- Common wire nails: ₱75 → ₱45/kg
- GI sheet: ₱320 → ₱190/sheet
- Bread loaf: ₱65 → ₱44
- Pencil: ₱8 → ₱14
- Instant noodles/mami: ₱15 → ₱8.50
- Instant coffee: switched from an unrealistic "₱120 jar" to a "₱8 sachet" (jars aren't the common purchase unit tracked by DTI; sachets are)

## Consequences
- Verified items reflect real Q1–Q3 2026 Philippine retail prices, not guesses
- Unverified items remain plausible but should be spot-checked against a real store/Shopee before the beta launches, per the original recommendation
- Prices are point-in-time (Aug 2026) — rice, cooking oil, and construction materials in particular move monthly per PSA data; this catalog will drift out of date and should be re-checked periodically, not treated as permanently accurate
