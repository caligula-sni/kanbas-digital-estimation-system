# Architecture

## Overview
Fully static site as of ADR 0006. No server, no database, no build step. Plain HTML/CSS/JS, deployed to GitHub Pages.

## Stack
| Layer | Choice | Why |
|---|---|---|
| Frontend | HTML/CSS + vanilla JS | Owns everything — catalog, Kanbas state, rendering |
| Backend | None | Removed entirely (ADR 0006) |
| Database | None | Item catalog is a static JS file |
| Hosting | GitHub Pages | Free, zero maintenance, deploys automatically on push |

## Modules
- **`items-data.js`** — the item catalog (was the MySQL `items` table). 86 items across 5 real categories (school supplies, food & groceries, hardware & woodwork, steelwork & construction, hygiene & household), plus a 6th Kanbas-level "Mixed / DIY" option that draws from all of them (ADR 0008, 0010, 0011). Every item carries `verified`/`source` fields, shown on the item detail page. Target is 40 items per category, built up in batches — Food is done, others pending.
- **`kanbas-store.js`** — owns the entire Kanbas lifecycle via localStorage: draft, add/remove items and costs, totals, save, delete
- **`nav.js`** — injects the sidebar into each page (was PHP's `include('nav.php')`)
- **Pages** (`home.html`, `items.html`, `item_detail.html`, `kanbas_new.html`, `kanbas_build.html`, `saved_kanbas.html`, `kanbas_view.html`) — each includes the three scripts above and renders using plain JS DOM manipulation

## System Flow
1. Page loads → `renderNav()` injects sidebar, `items-data.js` and `kanbas-store.js` load
2. Browsing/searching items filters `ITEMS` array in-memory — no network request at all
3. Starting a Kanbas → `startDraft()` writes to `localStorage['kdes_draft']`
4. Adding items/costs → JS mutates that same object directly
5. Save → `saveDraftAsKanbas()` moves the draft into `localStorage['kdes_saved_kanbas']`, clears the draft
6. Saved Kanbas / Detail pages read directly from `localStorage['kdes_saved_kanbas']`

## Notes
- Updating item prices = edit `app/js/items-data.js`, commit, push (auto-deploys via GitHub Actions)
- No live pricing API — manually seeded, per ADR 0003 (still applies)
- Data is per-browser/per-device — no cross-device sync (ADR 0005, still applies)
- The whole site can also just be opened locally as a file (`app/home.html`) with no server at all, for quick testing

---
See `docs/decisions/` for reasoning behind specific choices.
