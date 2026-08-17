# Database Schema

## Tables

### users
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | INT | PK, AUTO_INCREMENT | |
| username | VARCHAR(50) | UNIQUE, NOT NULL | |
| email | VARCHAR(100) | UNIQUE, NOT NULL | |
| password_hash | VARCHAR(255) | NOT NULL | via password_hash() |
| created_at | DATETIME | DEFAULT CURRENT_TIMESTAMP | |

### items
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | INT | PK, AUTO_INCREMENT | |
| name | VARCHAR(100) | NOT NULL | |
| category | VARCHAR(50) | NOT NULL | 'school_supplies' for v1 |
| unit | VARCHAR(20) | NOT NULL | 'piece' for v1 |
| price | DECIMAL(10,2) | NOT NULL | manually seeded |
| description | TEXT | NULL | |
| updated_at | DATETIME | DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP | manual price update tracking |

### kanbas
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | INT | PK, AUTO_INCREMENT | |
| user_id | INT | FK → users.id, NOT NULL | |
| name | VARCHAR(100) | NOT NULL | |
| category | VARCHAR(50) | NOT NULL | |
| created_at | DATETIME | DEFAULT CURRENT_TIMESTAMP | |

### kanbas_items
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | INT | PK, AUTO_INCREMENT | |
| kanbas_id | INT | FK → kanbas.id, NOT NULL | |
| item_id | INT | FK → items.id, NOT NULL | |
| quantity | INT | NOT NULL | |

### kanbas_extra_costs
| Field | Type | Constraints | Description |
|---|---|---|---|
| id | INT | PK, AUTO_INCREMENT | |
| kanbas_id | INT | FK → kanbas.id, NOT NULL | |
| label | VARCHAR(50) | NOT NULL | e.g. "fare", "fuel" |
| amount | DECIMAL(10,2) | NOT NULL | |

## Relationships
- users.id → kanbas.user_id (one-to-many)
- kanbas.id → kanbas_items.kanbas_id (one-to-many)
- items.id → kanbas_items.item_id (one-to-many)
- kanbas.id → kanbas_extra_costs.kanbas_id (one-to-many)

## Total Calculation
```
kanbas total = SUM(kanbas_items.quantity * items.price) + SUM(kanbas_extra_costs.amount)
```
