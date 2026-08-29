# ADR 0002: Narrow v1 Scope to School Supplies Only

## Status
Accepted

## Context
Original concept spanned food, hardware, steelwork, and school supplies — each with different units and pricing complexity. Building all categories before validating the core Kanbas loop risked delaying the prototype significantly.

## Decision
v1 supports school supplies only. Schema keeps a `category` field on `items` and `kanbas` so other categories can be added later without a schema migration.

## Consequences
- Faster path to a testable prototype
- Simpler unit model (all items are "piece"-based)
- Other categories (food, hardware, steelwork) deferred to post-v1 roadmap
