# Requirements

## Problem
Students and consumers often don't know how much they'll spend before leaving to buy items. KDES (Kanbas Digital Estimation System) lets users build a list ("Kanbas"), add items with quantities and extra costs, and see a total estimate before shopping.

## Goals
- Let a user create a Kanbas, add school supply items, and see a total cost estimate
- Let a user save and revisit their Kanbas
- Validate the core loop (create → estimate → save) with a small Facebook beta group

## Non-Goals (v1)
- User accounts / login — removed per ADR 0005, app is fully anonymous
- Server/database — removed per ADR 0006, fully static site
- Mixed-category Kanbas — each Kanbas holds items from one category only (ADR 0008)
- Live/API-sourced pricing — manually seeded data only
- Cross-device sync — Kanbas data lives in one browser's localStorage only
- Mobile app — web only

## Functional Requirements
| ID | Requirement | Priority |
|---|---|---|
| FR-01 | ~~User can register and log in~~ (removed, ADR 0005) | — |
| FR-02 | User can create a Kanbas (name + category) | Must |
| FR-03 | User can search/browse items, filterable by category | Must |
| FR-04 | User can add an item to a Kanbas with a quantity | Must |
| FR-05 | User can view a specific item's detail page | Must |
| FR-06 | User can add extra costs (fare, fuel, misc.) to a Kanbas | Must |
| FR-07 | System calculates and displays total estimated cost | Must |
| FR-08 | User can view all Kanbas saved on this browser/device | Must |
| FR-09 | User can open a saved Kanbas to see full detail | Must |
| FR-10 | User can search saved Kanbas by name | Should |
| FR-11 | User can delete a saved Kanbas | Should |
| FR-12 | A Kanbas only accepts items from its own category (ADR 0008), except a "Mixed / DIY" Kanbas which accepts items from any category (ADR 0011) | Must |

## Non-Functional Requirements
| ID | Requirement |
|---|---|
| NFR-01 | ~~Passwords stored hashed~~ (removed, no accounts) |
| NFR-02 | ~~All DB queries use prepared statements~~ (removed, no database) |
| NFR-03 | Runs as a fully static site — no server, no build step required |
| NFR-04 | Split-panel UI (form + browse) works on desktop browser at minimum |
| NFR-05 | Kanbas data persists across page reloads via localStorage, until browser data is cleared |
| NFR-06 | Deployable to GitHub Pages with zero hosting cost or server maintenance |

## Constraints
- Time: solo dev, prototype-first
- Tech stack: HTML, CSS, PHP (vanilla, PDO), JS, MySQL
- Deployment target: local first, Facebook beta hosting TBD (Phase 5)
- Pricing data: manually seeded, single category (school supplies)
