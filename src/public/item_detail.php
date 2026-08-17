<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$id = (int) ($_GET['id'] ?? 0);
$item = get_item($pdo, $id);

if (!$item) {
    http_response_code(404);
    $notFound = true;
}

$hasDraft = has_draft_kanbas();

if ($item && $hasDraft && $_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_item'])) {
    $qty = max(1, (int) ($_POST['quantity'] ?? 1));
    add_item_to_draft($item['id'], $qty);
    header('Location: kanbas_build.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title><?= $item ? htmlspecialchars($item['name']) : 'Not Found' ?> — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <p><a href="items.php">&larr; Back to Search Materials</a></p>

        <?php if (empty($notFound)): ?>
            <h1><?= htmlspecialchars($item['name']) ?></h1>
            <div class="panel" style="max-width:420px;">
                <p><strong>Price:</strong> ₱<?= number_format($item['price'], 2) ?> per <?= htmlspecialchars($item['unit']) ?></p>
                <p style="margin-top:8px; color:#555;"><?= htmlspecialchars($item['description'] ?? '') ?></p>

                <?php if ($hasDraft): ?>
                    <form method="POST" class="inline-form" style="margin-top:16px;">
                        <input type="number" name="quantity" value="1" min="1" style="width:80px;">
                        <button type="submit" name="add_item" class="small-btn">Add to Kanbas</button>
                    </form>
                <?php else: ?>
                    <p style="margin-top:16px; color:#777;">
                        <a href="kanbas_new.php">Start a Kanbas</a> to add this item.
                    </p>
                <?php endif; ?>
            </div>
        <?php else: ?>
            <h1>Item not found</h1>
        <?php endif; ?>
    </div>
</div>
</body>
</html>
