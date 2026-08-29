# Testing

## Approach
Manual testing. No accounts (ADR 0005), no server/database (ADR 0006) — testing focuses on the core loop and that data survives a page reload.

## How to Test Locally
No server needed. Just open `app/home.html` directly in a browser, or serve the `app/` folder with any static server (e.g. `python3 -m http.server` from inside `app/`) if your browser restricts local file access to localStorage.

## Test Cases
| ID | Description | Input | Expected | Result |
|---|---|---|---|---|
| TC-01 | Create Kanbas | Name + category | Draft created in localStorage | |
| TC-02 | Add item to Kanbas | Click item card | Item appears in draft, total updates | |
| TC-03 | Add same item twice | Click same item card twice | Quantity increments, not duplicated | |
| TC-04 | Remove item from draft | Click Remove | Item removed, total updates | |
| TC-05 | Add extra cost | Label + amount | Extra cost saved, total updates | |
| TC-06 | Total calculation accuracy | Multiple items + extra costs | Total matches manual calculation | |
| TC-07 | Save Kanbas with no items | Click Save on empty draft | Rejected with error, not saved | |
| TC-08 | Save Kanbas | Draft with items | Moved to saved list, draft cleared | |
| TC-09 | Reload page mid-draft | Add items, refresh browser | Draft persists (localStorage) | |
| TC-10 | View saved Kanbas list | Open Saved Kanbas page | All saved Kanbas shown, newest first | |
| TC-11 | Open Kanbas detail | Select from Saved Kanbas | Full item list + total displayed correctly | |
| TC-12 | Delete saved Kanbas | Click Delete + confirm | Removed from list | |
| TC-13 | Search items (client-side) | Type partial name | Grid filters live, no page reload | |
| TC-14 | Search saved Kanbas | Type partial name | List filters live | |
| TC-15 | Clear browser data | Clear localStorage manually | All Kanbas gone (expected — documented limitation) | |
| TC-16 | GitHub Pages deploy | Push to main | Site updates live within a few minutes | |
| TC-17 | Filter items by category | Click a category tab on Search Materials | Grid shows only that category | |
| TC-18 | Add cross-category item while draft active | Open an item from a different category than active draft | Blocked, prompted to start new Kanbas | |
| TC-19 | Kanbas Builder shows only matching category | Start a "Hardware" Kanbas, check right panel | Only hardware items shown, no school supplies mixed in | |
| TC-20 | Source tag displays correctly | Open a verified item vs. an estimated item | "✓ Verified — [source]" or "○ Estimated" shows correctly | |
| TC-21 | Hygiene category selectable | Create Kanbas, pick "Hygiene & Household" | Only hygiene items shown when building | |

## Known Gaps
- No automated tests yet (manual only for v1)
- No cross-device testing (by design — localStorage is per-browser)
