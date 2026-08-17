# Kanbas Digital Estimation System (KDES)

Build a list ("Kanbas") of school supply items, add quantities and extra costs, and get a total spending estimate before you shop.

## Features
- User accounts (register/login)
- Create and save Kanbas (item lists)
- Browse/search school supply items
- Add extra costs (fare, fuel, etc.)
- Auto-calculated total estimate

## Tech Stack
- Frontend: HTML, CSS, vanilla JS
- Backend: PHP (vanilla, PDO)
- Database: MySQL

(See `docs/architecture.md` for details and reasoning.)

## Getting Started
```bash
git clone <repo-url>
cd kdes
# import schema (see docs/schema.md)
# configure DB connection
# serve via local PHP/XAMPP server
```

## Environment Variables
| Variable | Description |
|---|---|
| DB_HOST | MySQL host |
| DB_NAME | Database name |
| DB_USER | MySQL user |
| DB_PASS | MySQL password |

## Project Status
Prototype complete — all v1 modules implemented (auth, item search, Kanbas builder, saved Kanbas). Ready for local testing (Phase 4) before Facebook beta deployment (Phase 5).

## Documentation
- [Requirements](docs/requirements.md)
- [Architecture](docs/architecture.md)
- [Schema](docs/schema.md)
- [Testing](docs/testing.md)
- [Decisions (ADRs)](docs/decisions/)
