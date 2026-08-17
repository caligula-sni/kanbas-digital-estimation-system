<?php
// Kanbas domain logic. A "draft" kanbas is built in session, then saved to DB.
// See docs/schema.md and docs/requirements.md FR-02 through FR-09.

require_once __DIR__ . '/../config/db.php';

/** Start a new draft kanbas in session. */
function start_draft_kanbas(string $name, string $category) {
    $_SESSION['draft_kanbas'] = [
        'name' => trim($name),
        'category' => $category,
        'items' => [],       // [ ['item_id' => int, 'quantity' => int], ... ]
        'extra_costs' => [], // [ ['label' => string, 'amount' => float], ... ]
    ];
}

function has_draft_kanbas(): bool {
    return isset($_SESSION['draft_kanbas']);
}

function get_draft_kanbas(): ?array {
    return $_SESSION['draft_kanbas'] ?? null;
}

function clear_draft_kanbas() {
    unset($_SESSION['draft_kanbas']);
}

function add_item_to_draft(int $item_id, int $quantity) {
    if (!has_draft_kanbas() || $quantity < 1) return;

    // If item already in draft, bump quantity instead of duplicating
    foreach ($_SESSION['draft_kanbas']['items'] as &$row) {
        if ($row['item_id'] === $item_id) {
            $row['quantity'] += $quantity;
            return;
        }
    }
    unset($row);

    $_SESSION['draft_kanbas']['items'][] = [
        'item_id' => $item_id,
        'quantity' => $quantity,
    ];
}

function remove_item_from_draft(int $index) {
    if (!has_draft_kanbas()) return;
    unset($_SESSION['draft_kanbas']['items'][$index]);
    $_SESSION['draft_kanbas']['items'] = array_values($_SESSION['draft_kanbas']['items']);
}

function add_cost_to_draft(string $label, float $amount) {
    if (!has_draft_kanbas() || $amount <= 0 || trim($label) === '') return;
    $_SESSION['draft_kanbas']['extra_costs'][] = [
        'label' => trim($label),
        'amount' => $amount,
    ];
}

function remove_cost_from_draft(int $index) {
    if (!has_draft_kanbas()) return;
    unset($_SESSION['draft_kanbas']['extra_costs'][$index]);
    $_SESSION['draft_kanbas']['extra_costs'] = array_values($_SESSION['draft_kanbas']['extra_costs']);
}

/**
 * Returns draft items joined with live item data (name, price) plus running total.
 */
function get_draft_details(PDO $pdo): array {
    $draft = get_draft_kanbas();
    if (!$draft) {
        return ['items' => [], 'extra_costs' => [], 'items_total' => 0, 'extra_total' => 0, 'grand_total' => 0];
    }

    $items = [];
    $items_total = 0;

    foreach ($draft['items'] as $index => $row) {
        $stmt = $pdo->prepare('SELECT id, name, price, unit FROM items WHERE id = ?');
        $stmt->execute([$row['item_id']]);
        $item = $stmt->fetch();
        if (!$item) continue;

        $lineTotal = $item['price'] * $row['quantity'];
        $items_total += $lineTotal;

        $items[] = [
            'index' => $index,
            'item_id' => $item['id'],
            'name' => $item['name'],
            'unit' => $item['unit'],
            'price' => $item['price'],
            'quantity' => $row['quantity'],
            'line_total' => $lineTotal,
        ];
    }

    $extra_total = 0;
    $extra_costs = [];
    foreach ($draft['extra_costs'] as $index => $cost) {
        $extra_total += $cost['amount'];
        $extra_costs[] = array_merge($cost, ['index' => $index]);
    }

    return [
        'items' => $items,
        'extra_costs' => $extra_costs,
        'items_total' => $items_total,
        'extra_total' => $extra_total,
        'grand_total' => $items_total + $extra_total,
    ];
}

/**
 * Persist the current draft to the database, tied to the given user.
 * Returns the new kanbas id, or null if there was no draft / draft was empty.
 */
function save_draft_kanbas(PDO $pdo, int $user_id): ?int {
    $draft = get_draft_kanbas();
    if (!$draft || $draft['name'] === '' || empty($draft['items'])) {
        return null;
    }

    $pdo->beginTransaction();
    try {
        $stmt = $pdo->prepare('INSERT INTO kanbas (user_id, name, category) VALUES (?, ?, ?)');
        $stmt->execute([$user_id, $draft['name'], $draft['category']]);
        $kanbas_id = (int) $pdo->lastInsertId();

        $itemStmt = $pdo->prepare('INSERT INTO kanbas_items (kanbas_id, item_id, quantity) VALUES (?, ?, ?)');
        foreach ($draft['items'] as $row) {
            $itemStmt->execute([$kanbas_id, $row['item_id'], $row['quantity']]);
        }

        $costStmt = $pdo->prepare('INSERT INTO kanbas_extra_costs (kanbas_id, label, amount) VALUES (?, ?, ?)');
        foreach ($draft['extra_costs'] as $cost) {
            $costStmt->execute([$kanbas_id, $cost['label'], $cost['amount']]);
        }

        $pdo->commit();
        clear_draft_kanbas();
        return $kanbas_id;
    } catch (Exception $e) {
        $pdo->rollBack();
        return null;
    }
}

/** Search/browse items by name (school_supplies only in v1). */
function search_items(PDO $pdo, string $query = ''): array {
    if ($query !== '') {
        $stmt = $pdo->prepare("SELECT * FROM items WHERE category = 'school_supplies' AND name LIKE ? ORDER BY name");
        $stmt->execute(['%' . $query . '%']);
    } else {
        $stmt = $pdo->query("SELECT * FROM items WHERE category = 'school_supplies' ORDER BY name");
    }
    return $stmt->fetchAll();
}

function get_item(PDO $pdo, int $id): ?array {
    $stmt = $pdo->prepare('SELECT * FROM items WHERE id = ?');
    $stmt->execute([$id]);
    $item = $stmt->fetch();
    return $item ?: null;
}

/** All kanbas belonging to a user, optionally filtered by search term. */
function get_user_kanbas(PDO $pdo, int $user_id, string $query = ''): array {
    if ($query !== '') {
        $stmt = $pdo->prepare('SELECT * FROM kanbas WHERE user_id = ? AND name LIKE ? ORDER BY created_at DESC');
        $stmt->execute([$user_id, '%' . $query . '%']);
    } else {
        $stmt = $pdo->prepare('SELECT * FROM kanbas WHERE user_id = ? ORDER BY created_at DESC');
        $stmt->execute([$user_id]);
    }
    return $stmt->fetchAll();
}

/** Full detail of one saved kanbas (items + costs + totals), scoped to the owning user. */
function get_kanbas_full(PDO $pdo, int $kanbas_id, int $user_id): ?array {
    $stmt = $pdo->prepare('SELECT * FROM kanbas WHERE id = ? AND user_id = ?');
    $stmt->execute([$kanbas_id, $user_id]);
    $kanbas = $stmt->fetch();
    if (!$kanbas) return null;

    $stmt = $pdo->prepare('
        SELECT ki.quantity, i.name, i.unit, i.price, (ki.quantity * i.price) AS line_total
        FROM kanbas_items ki
        JOIN items i ON i.id = ki.item_id
        WHERE ki.kanbas_id = ?
    ');
    $stmt->execute([$kanbas_id]);
    $items = $stmt->fetchAll();

    $stmt = $pdo->prepare('SELECT label, amount FROM kanbas_extra_costs WHERE kanbas_id = ?');
    $stmt->execute([$kanbas_id]);
    $extra_costs = $stmt->fetchAll();

    $items_total = array_sum(array_column($items, 'line_total'));
    $extra_total = array_sum(array_column($extra_costs, 'amount'));

    return [
        'kanbas' => $kanbas,
        'items' => $items,
        'extra_costs' => $extra_costs,
        'items_total' => $items_total,
        'extra_total' => $extra_total,
        'grand_total' => $items_total + $extra_total,
    ];
}
