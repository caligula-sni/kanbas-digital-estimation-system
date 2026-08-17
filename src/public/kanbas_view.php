<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$id = (int) ($_GET['id'] ?? 0);
$data = get_kanbas_full($pdo, $id, current_user_id());

if (!$data) {
    http_response_code(404);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $data ? htmlspecialchars($data['kanbas']['name']) : 'Not Found' ?> — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <p><a href="saved_kanbas.php">&larr; Back to Saved Kanbas</a></p>

        <?php if (!$data): ?>
            <h1>Kanbas not found</h1>
        <?php else: ?>
            <h1><?= htmlspecialchars($data['kanbas']['name']) ?></h1>
            <p style="color:#777; margin-bottom:16px;">
                <?= htmlspecialchars($data['kanbas']['category']) ?> &middot;
                Created <?= date('M j, Y', strtotime($data['kanbas']['created_at'])) ?>
            </p>

            <div class="panel">
                <h2>Items</h2>
                <?php if (empty($data['items'])): ?>
                    <div class="empty-state">No items in this Kanbas.</div>
                <?php else: ?>
                    <table>
                        <tr><th>Item</th><th>Qty</th><th>Unit Price</th><th>Line Total</th></tr>
                        <?php foreach ($data['items'] as $row): ?>
                            <tr>
                                <td><?= htmlspecialchars($row['name']) ?></td>
                                <td><?= $row['quantity'] ?> <?= htmlspecialchars($row['unit']) ?></td>
                                <td>₱<?= number_format($row['price'], 2) ?></td>
                                <td>₱<?= number_format($row['line_total'], 2) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php endif; ?>

                <?php if (!empty($data['extra_costs'])): ?>
                    <h2 style="margin-top:16px;">Extra Costs</h2>
                    <table>
                        <?php foreach ($data['extra_costs'] as $cost): ?>
                            <tr>
                                <td><?= htmlspecialchars($cost['label']) ?></td>
                                <td>₱<?= number_format($cost['amount'], 2) ?></td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                <?php endif; ?>

                <div class="totals">
                    <div>Items: ₱<?= number_format($data['items_total'], 2) ?></div>
                    <div>Extra Costs: ₱<?= number_format($data['extra_total'], 2) ?></div>
                    <div class="grand">Total Estimate: ₱<?= number_format($data['grand_total'], 2) ?></div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
</body>
</html>
