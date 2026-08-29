# Kanbas Digital Estimation System (KDES)

Build a list ("Kanbas") of school supply items, add quantities and extra costs, and get a total spending estimate before you shop. No account needed, no server needed — open and use immediately.

## Features
- Browse/search school supply items
- Create and save Kanbas (item lists) — stored in your browser
- Add extra costs (fare, fuel, etc.)
- Auto-calculated total estimate

## Tech Stack
- HTML, CSS, vanilla JS — fully static, no backend
- Item catalog is a static JS file (`app/js/items-data.js`)
- Kanbas data lives in browser localStorage

(See `docs/architecture.md` for details and reasoning.)

## Running It
No install, no server required.

**Option 1 — just open it:**
Open `app/landing.html` directly in your browser (or `index.html` at the repo root, which redirects there).

**Option 2 — local static server** (needed if your browser restricts localStorage on `file://`):
```bash
cd app
python3 -m http.server 8000
# visit http://localhost:8000/landing.html
```

## Deployment
Auto-deploys to GitHub Pages on every push to `main` via `.github/workflows/deploy-pages.yml`. Enable Pages in repo Settings → Pages → Source: GitHub Actions (one-time setup).

## Updating Item Prices
Edit `app/js/items-data.js` directly, commit, push.

## Project Status
Fully static prototype — no accounts, no server, no database (see ADR 0005 and 0006). Ready for Facebook beta via GitHub Pages.

## Documentation
- [Requirements](docs/requirements.md)
- [Architecture](docs/architecture.md)
- [Data Model](docs/schema.md)
- [Testing](docs/testing.md)
- [Decisions (ADRs)](docs/decisions/)
