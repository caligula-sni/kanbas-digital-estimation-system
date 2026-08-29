# ADR 0004: Session-Based Draft Kanbas Before DB Save

## Status
Accepted

## Context
The Kanbas Form needs to let a user add/remove items and extra costs interactively while browsing, without committing incomplete data to the database. Needed a way to hold "in-progress" state.

## Decision
Use PHP `$_SESSION` to hold a single in-progress "draft" Kanbas (name, category, items, extra costs). Only written to the database (`kanbas`, `kanbas_items`, `kanbas_extra_costs`) when the user clicks Save. Discarding or starting a new Kanbas clears the session draft.

## Consequences
- No partial/incomplete Kanbas rows ever hit the database
- Simple to reason about and debug — no AJAX, no JS state management needed
- Limitation: only one draft Kanbas at a time per session (acceptable for v1 — user finishes or discards before starting another)
- Draft is lost if session expires before saving — acceptable risk for a prototype
