# Architecture

## Overview
Server-rendered PHP web app. PHP handles auth, Kanbas CRUD, and item queries against MySQL via PDO. JS handles the split-panel interactivity (swapping search/detail panels, drag-to-add) without a full framework.

## Stack
| Layer | Choice | Why |
|---|---|---|
| Frontend | HTML/CSS + vanilla JS | Matches project scope, no build tooling needed |
| Backend | PHP (vanilla, PDO) | Matches skillset, no framework overhead needed at this scale |
| Database | MySQL | Standard pairing with PHP, relational fit for users/kanbas/items |
| Hosting | Local (XAMPP/LAMP) for v1, TBD for beta | Current Goal is local test before beta deploy |

## Modules
- **Auth** — register/login/logout, session-based
- **Kanbas Form** — create/edit a Kanbas, add items + extra costs, compute total
- **Item Search** — browse/search school supply items
- **Item Detail** — full info on a selected item
- **Saved Kanbas** — list + search user's own Kanbas
- **Kanbas Detail** — full read view of one saved Kanbas

## System Flow
1. User logs in → session created
2. User opens Kanbas Form → browses items in split panel → adds items + quantities
3. User adds extra costs → total recalculated
4. User saves Kanbas → written to DB tied to `user_id`
5. User revisits via Saved Kanbas → Kanbas Detail pulls full record

## Notes
- No live pricing API in v1 — `items` table is manually seeded (see `docs/requirements.md` Non-Goals)
- Category field on `items`/`kanbas` is included now even though only one category exists, so category expansion later doesn't require a schema migration

---
See `docs/decisions/` for reasoning behind specific choices (e.g. no framework, PDO over mysqli).
