<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$query = trim($_GET['q'] ?? '');
$items = search_items($pdo, $query);
$hasDraft = has_draft_kanbas();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search Materials — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <h1>Search Materials — School Supplies</h1>

        <?php if (!$hasDraft): ?>
            <p style="color:#777; margin-bottom:16px;">
                Browsing only. <a href="kanbas_new.php">Start a Kanbas</a> to add items to a list.
            </p>
        <?php else: ?>
            <p style="color:#777; margin-bottom:16px;">
                Building "<strong><?= htmlspecialchars(get_draft_kanbas()['name']) ?></strong>" —
                <a href="kanbas_build.php">go to builder</a>
            </p>
        <?php endif; ?>

        <form class="search-box" method="GET" action="items.php">
            <input type="text" name="q" placeholder="Search school supplies..." value="<?= htmlspecialchars($query) ?>">
            <button type="submit">Search</button>
        </form>

        <?php if (empty($items)): ?>
            <div class="empty-state">No items found.</div>
        <?php else: ?>
            <div class="item-grid">
                <?php foreach ($items as $item): ?>
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
</body>
</html>
