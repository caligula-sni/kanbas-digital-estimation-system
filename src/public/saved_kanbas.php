<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$query = trim($_GET['q'] ?? '');
$kanbasList = get_user_kanbas($pdo, current_user_id(), $query);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Saved Kanbas — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <h1>Saved Kanbas</h1>

        <form class="search-box" method="GET" action="saved_kanbas.php">
            <input type="text" name="q" placeholder="Search by name..." value="<?= htmlspecialchars($query) ?>">
            <button type="submit">Search</button>
        </form>

        <?php if (empty($kanbasList)): ?>
            <div class="empty-state">
                No saved Kanbas yet. <a href="kanbas_new.php">Create one</a>.
            </div>
        <?php else: ?>
            <?php foreach ($kanbasList as $k): ?>
                <a class="kanbas-list-item" href="kanbas_view.php?id=<?= $k['id'] ?>">
                    <strong><?= htmlspecialchars($k['name']) ?></strong>
                    <div class="meta">
                        <?= htmlspecialchars($k['category']) ?> &middot;
                        <?= date('M j, Y', strtotime($k['created_at'])) ?>
                    </div>
                </a>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>
</body>
</html>
