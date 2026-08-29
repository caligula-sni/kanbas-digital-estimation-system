# Data Model

## Overview
As of ADR 0006, there is no database. All data lives client-side or as a static file.

## Item Catalog (`app/js/items-data.js`)
A plain JS array, checked into the repo. Each item:

```js
{ id: 1, name: 'Notebook (80 leaves)', category: 'school_supplies', unit: 'piece', price: 25.00, description: '...' }
```

To update: edit the file directly, commit, push. GitHub Actions redeploys automatically.

## Client-Side Data (localStorage)

**`kdes_draft`** — the Kanbas currently being built:
```json
{
  "name": "string",
  "category": "string",
  "items": [{ "item_id": 1, "name": "string", "price": 25.00, "unit": "piece", "quantity": 2 }],
  "extra_costs": [{ "label": "fare", "amount": 20.00 }]
}
```

**`kdes_saved_kanbas`** — array of finalized Kanbas:
```json
[
  {
    "id": "uuid-or-timestamp-string",
    "name": "string",
    "category": "string",
    "created_at": "ISO 8601 timestamp",
    "items": [ ... ],
    "extra_costs": [ ... ]
  }
]
```
