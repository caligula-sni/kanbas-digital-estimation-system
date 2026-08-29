# ADR 0003: Manually Seed Pricing Data (No Live API)

## Status
Accepted

## Context
Original concept assumed PSA OpenSTAT could provide live item-level pricing. Research confirmed PSA OpenSTAT only publishes aggregate price indices (CPI, regional retail/wholesale indices), not itemized product prices. DTI SRPs exist for some basic necessities but are PDF publications, not an API, and don't consistently cover school supplies. No free/open real-time item-pricing API exists for the Philippine market.

## Decision
Manually seed ~50-100 school supply items with real prices for v1. No live API dependency.

## Consequences
- Removes a major technical blocker/dependency from the prototype
- Prices will go stale over time — mitigated post-v1 by a user-suggested price update feature
- Long-term: FOI request to PSA/DTI is a possible future path if project scope justifies it
