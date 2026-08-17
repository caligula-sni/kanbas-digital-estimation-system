# Requirements

## Problem
Students and consumers often don't know how much they'll spend before leaving to buy items. KDES (Kanbas Digital Estimation System) lets users build a list ("Kanbas"), add items with quantities and extra costs, and see a total estimate before shopping.

## Goals
- Let a user create a Kanbas, add school supply items, and see a total cost estimate
- Let a user save and revisit their Kanbas
- Validate the core loop (create → estimate → save) with a small Facebook beta group

## Non-Goals (v1)
- Multiple categories (food, hardware, steelwork) — school supplies only for now
- Live/API-sourced pricing — manually seeded data only
- Email verification, password reset, 2FA, OAuth
- Mobile app — web only

## Functional Requirements
| ID | Requirement | Priority |
|---|---|---|
| FR-01 | User can register and log in | Must |
| FR-02 | User can create a Kanbas (name + category) | Must |
| FR-03 | User can search/browse school supply items | Must |
| FR-04 | User can add an item to a Kanbas with a quantity | Must |
| FR-05 | User can view a specific item's detail page | Must |
| FR-06 | User can add extra costs (fare, fuel, misc.) to a Kanbas | Must |
| FR-07 | System calculates and displays total estimated cost | Must |
| FR-08 | User can view all their saved Kanbas | Must |
| FR-09 | User can open a saved Kanbas to see full detail | Must |
| FR-10 | User can search saved Kanbas by name/date/category | Should |

## Non-Functional Requirements
| ID | Requirement |
|---|---|
| NFR-01 | Passwords stored hashed, never plaintext |
| NFR-02 | All DB queries use prepared statements (PDO) |
| NFR-03 | Runs locally on standard LAMP/XAMPP-style stack |
| NFR-04 | Split-panel UI (form + browse) works on desktop browser at minimum |

## Constraints
- Time: solo dev, prototype-first
- Tech stack: HTML, CSS, PHP (vanilla, PDO), JS, MySQL
- Deployment target: local first, Facebook beta hosting TBD (Phase 5)
- Pricing data: manually seeded, single category (school supplies)
