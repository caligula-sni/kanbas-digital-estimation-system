<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$recentKanbas = array_slice(get_user_kanbas($pdo, current_user_id()), 0, 5);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <h1>Welcome, <?= htmlspecialchars($_SESSION['username']) ?></h1>

        <div class="panel" style="max-width:600px;">
            <h2>Recent Kanbas</h2>

            <?php if (empty($recentKanbas)): ?>
                <div class="empty-state">
                    No Kanbas yet. <a href="kanbas_new.php">Create your first one</a> to estimate your school supply costs.
                </div>
            <?php else: ?>
                <?php foreach ($recentKanbas as $k): ?>
                    <a class="kanbas-list-item" href="kanbas_view.php?id=<?= $k['id'] ?>">
                        <strong><?= htmlspecialchars($k['name']) ?></strong>
                        <div class="meta"><?= date('M j, Y', strtotime($k['created_at'])) ?></div>
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </div>
</div>
</body>
</html>
