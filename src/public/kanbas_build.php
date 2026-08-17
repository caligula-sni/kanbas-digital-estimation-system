<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

if (!has_draft_kanbas()) {
    header('Location: kanbas_new.php');
    exit;
}

// Handle actions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['remove_item'])) {
        remove_item_from_draft((int) $_POST['remove_item']);
    } elseif (isset($_POST['add_cost'])) {
        add_cost_to_draft($_POST['cost_label'] ?? '', (float) ($_POST['cost_amount'] ?? 0));
    } elseif (isset($_POST['remove_cost'])) {
        remove_cost_from_draft((int) $_POST['remove_cost']);
    } elseif (isset($_POST['discard'])) {
        clear_draft_kanbas();
        header('Location: kanbas_new.php');
        exit;
    } elseif (isset($_POST['save_kanbas'])) {
        $kanbas_id = save_draft_kanbas($pdo, current_user_id());
        if ($kanbas_id) {
            header('Location: kanbas_view.php?id=' . $kanbas_id);
            exit;
        } else {
            $error = 'Add at least one item before saving.';
        }
    }
    // Redirect to avoid resubmission on refresh (PRG pattern)
    if (!isset($error)) {
        header('Location: kanbas_build.php');
        exit;
    }
}

$draft = get_draft_kanbas();
$details = get_draft_details($pdo);

$query = trim($_GET['q'] ?? '');
$searchResults = search_items($pdo, $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Building: <?= htmlspecialchars($draft['name']) ?> — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <h1><?= htmlspecialchars($draft['name']) ?></h1>

        <?php if (!empty($error)): ?>
            <div class="error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>

        <div class="split-panel">
            <!-- LEFT: current draft -->
            <div class="panel">
                <h2>Your Kanbas</h2>

                <?php if (empty($details['items'])): ?>
                    <div class="empty-state">No items added yet. Browse and add items from the right.</div>
                <?php else: ?>
                    <table>
                        <tr><th>Item</th><th>Qty</th><th>Line Total</th><th></th></tr>
                        <?php foreach ($details['items'] as $row): ?>
                            <tr>
                                <td><?= htmlspecialchars($row['name']) ?></td>
                                <td><?= $row['quantity'] ?> <?= htmlspecialchars($row['unit']) ?></td>
                                <td>₱<?= number_format($row['line_total'], 2) ?></td>
                                <td>
                                    <form method="POST" style="display:inline;">
                                        <button type="submit" name="remove_item" value="<?= $row['index'] ?>" class="remove-btn">Remove</button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php endif; ?>

                <h2 style="margin-top:20px;">Extra Costs</h2>
                <?php if (!empty($details['extra_costs'])): ?>
                    <table>
                        <?php foreach ($details['extra_costs'] as $cost): ?>
                            <tr>
                                <td><?= htmlspecialchars($cost['label']) ?></td>
                                <td>₱<?= number_format($cost['amount'], 2) ?></td>
                                <td>
                                    <form method="POST" style="display:inline;">
                                        <button type="submit" name="remove_cost" value="<?= $cost['index'] ?>" class="remove-btn">Remove</button>
                                    </form>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php endif; ?>

                <form method="POST" class="inline-form">
                    <input type="text" name="cost_label" placeholder="Label (e.g. fare)" required>
                    <input type="number" name="cost_amount" placeholder="Amount" step="0.01" min="0.01" style="width:100px;" required>
                    <button type="submit" name="add_cost" class="small-btn">Add Cost</button>
                </form>

                <div class="totals">
                    <div>Items: ₱<?= number_format($details['items_total'], 2) ?></div>
                    <div>Extra Costs: ₱<?= number_format($details['extra_total'], 2) ?></div>
                    <div class="grand">Total Estimate: ₱<?= number_format($details['grand_total'], 2) ?></div>
                </div>

                <div style="display:flex; gap:8px; margin-top:16px;">
                    <form method="POST">
                        <button type="submit" name="save_kanbas">Save Kanbas</button>
                    </form>
                    <form method="POST" onsubmit="return confirm('Discard this Kanbas?');">
                        <button type="submit" name="discard" class="remove-btn">Discard</button>
                    </form>
                </div>
            </div>

            <!-- RIGHT: browse/search materials -->
            <div class="panel">
                <h2>Add Materials</h2>
                <form class="search-box" method="GET" action="kanbas_build.php">
                    <input type="text" name="q" placeholder="Search school supplies..." value="<?= htmlspecialchars($query) ?>">
                    <button type="submit">Search</button>
                </form>

                <?php if (empty($searchResults)): ?>
                    <div class="empty-state">No items found.</div>
                <?php else: ?>
                    <div class="item-grid">
                        <?php foreach ($searchResults as $item): ?>
                            <a class="item-card" href="item_detail.php?id=<?= $item['id'] ?>">
                                <div class="name"><?= htmlspecialchars($item['name']) ?></div>
                                <div class="price">₱<?= number_format($item['price'], 2) ?></div>
                                <div class="unit">per <?= htmlspecialchars($item['unit']) ?></div>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</div>
</body>
</html>
