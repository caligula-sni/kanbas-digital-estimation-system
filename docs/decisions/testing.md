# Testing

## Approach
Manual testing for v1 — prototype scope doesn't yet justify an automated test suite. Focus: verify the core loop (create Kanbas → add items → save → reopen) works end-to-end, and auth/security basics hold.

## Test Cases
| ID | Description | Input | Expected | Result |
|---|---|---|---|---|
| TC-01 | Register new user | Valid username/email/password | Account created, password hashed in DB | |
| TC-02 | Login with correct credentials | Valid email/password | Session created, redirected to Home | |
| TC-03 | Login with wrong password | Invalid password | Rejected, no session | |
| TC-04 | SQL injection attempt on login | `' OR 1=1 --` in email field | Rejected, no bypass | |
| TC-05 | Create Kanbas | Name + category | Kanbas saved, tied to user_id | |
| TC-06 | Add item to Kanbas | Select item + quantity | Item appears in kanbas_items, total updates | |
| TC-07 | Add extra cost | Label + amount | Extra cost saved, total updates | |
| TC-08 | Total calculation accuracy | Multiple items + extra costs | Total matches manual calculation | |
| TC-09 | View saved Kanbas list | Logged-in user with saved kanbas | Only that user's kanbas shown | |
| TC-10 | Open Kanbas detail | Select from Saved Kanbas | Full item list + total displayed correctly | |
| TC-11 | Save Kanbas with no items | Click Save with empty draft | Rejected with error, not saved | |
| TC-12 | Access another user's saved Kanbas by URL | Change ?id= to another user's kanbas | 404 / not found, no data leak | |
| TC-13 | Discard draft | Click Discard mid-build | Session draft cleared, nothing saved to DB | |

## Known Gaps
- No automated tests yet (manual only for v1)
- No load/performance testing (prototype scale)
