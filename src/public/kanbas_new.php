<?php
require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/kanbas.php';
require_login();

$error = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = trim($_POST['name'] ?? '');
    $category = $_POST['category'] ?? '';

    if ($name === '') {
        $error = 'Kanbas name is required.';
    } else {
        start_draft_kanbas($name, $category);
        header('Location: kanbas_build.php');
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Kanbas — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body class="app">
<div class="app-layout">
    <?php include __DIR__ . '/../includes/nav.php'; ?>
    <div class="content">
        <h1>Create a Kanbas</h1>

        <div class="panel" style="max-width:420px;">
            <?php if ($error): ?>
                <div class="error"><?= htmlspecialchars($error) ?></div>
            <?php endif; ?>

            <?php if (has_draft_kanbas()): ?>
                <div class="error" style="background:#fff8e1; color:#8a6d00;">
                    You already have an unsaved Kanbas in progress ("<?= htmlspecialchars(get_draft_kanbas()['name']) ?>").
                    Starting a new one will discard it. <a href="kanbas_build.php">Go back to it instead</a>.
                </div>
            <?php endif; ?>

            <form method="POST" action="kanbas_new.php">
                <div class="field">
                    <label for="name">Kanbas Name</label>
                    <input type="text" id="name" name="name" placeholder="e.g. School Supplies for Sem 1" required>
                </div>
                <div class="field">
                    <label for="category">Category</label>
                    <select id="category" name="category" style="width:100%; padding:10px; border:1px solid #ccc; border-radius:4px;">
                        <option value="school_supplies">School Supplies</option>
                    </select>
                </div>
                <button type="submit">Start Building</button>
            </form>
        </div>
    </div>
</div>
</body>
</html>
