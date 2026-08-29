# ADR 0005: Remove User Accounts, Use Client-Side Storage

## Status
Accepted — supersedes ADR 0004

## Context
The account system (register/login, `users` table, server-side session drafts) added complexity that wasn't paying off for a beta prototype. Lower friction for Facebook beta testers (no signup barrier) was prioritized over cross-device persistence.

## Decision
Remove accounts entirely. Kanbas data (draft and saved) now lives client-side in the browser's `localStorage`, not the database. The `items` catalog remains server-side in MySQL (still needs a shared source of truth for prices). `users`, `kanbas`, `kanbas_items`, and `kanbas_extra_costs` tables are dropped from the schema.

## Consequences
- No signup/login friction — anyone can use the app immediately
- No security surface for auth (no passwords, no sessions to attack)
- Kanbas data is tied to one browser/device — clearing browser data or switching devices loses saved Kanbas
- No way to see "all users' Kanbas" or aggregate usage data server-side
- Simpler schema (one table instead of five)
- If accounts are ever needed later (e.g. cross-device sync), this would need to be reintroduced — client-side data would need a migration path to server-side
