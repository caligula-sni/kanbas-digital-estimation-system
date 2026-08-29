# ADR 0006: Fully Static Site — No PHP, No MySQL, No Server

## Status
Accepted — supersedes ADR 0001 (no framework decision no longer applies, since there's no backend at all)

## Context
Hosting hardware failure (HDD) took the Debian LEMP server down. Separately, the goal shifted toward an "open, always-available" system rather than something tied to one server's uptime. After ADR 0005 removed accounts, the only remaining server dependency was the read-only `items` catalog (one table, manually seeded, 15 rows).

## Decision
Convert KDES to a fully static site: plain HTML/CSS/JS, no PHP, no MySQL, no server process required at all.
- `items` table → `app/js/items-data.js`, a static JS array
- All `.php` pages → `.html`, with PHP's `include()` for the sidebar replaced by a JS `renderNav()` call
- Server-side search (`GET` + page reload) → client-side JS filtering
- Deployment target: GitHub Pages (free, no server to maintain), via a GitHub Actions workflow that auto-publishes on push to `main`

## Consequences
- Zero hosting cost, zero server maintenance, zero uptime risk tied to personal hardware
- Runs from any static host (GitHub Pages, Netlify, or even opened as a local file) — genuinely "open, anytime" as intended
- Updating item prices means editing `items-data.js` and committing — no admin UI, but acceptable at 15 hand-seeded items
- No further server-side logic is possible without reintroducing a backend — acceptable, since Kanbas data was already fully client-side (ADR 0005) and the catalog is read-only
- ADR 0001 (no framework) becomes moot — there's no backend to frame in the first place
