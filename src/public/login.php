<?php
require_once __DIR__ . '/../includes/auth.php';

if (is_logged_in()) {
    header('Location: home.php');
    exit;
}

$error = null;
$justRegistered = isset($_GET['registered']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $result = login_user(
        $pdo,
        $_POST['email'] ?? '',
        $_POST['password'] ?? ''
    );

    if ($result === true) {
        header('Location: home.php');
        exit;
    } else {
        $error = $result;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Log In — KDES</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="auth-card">
        <h1>Log in to KDES</h1>

        <?php if ($justRegistered): ?>
            <div class="error" style="background:#e8f5e9; color:#1b5e20;">
                Account created. You can log in now.
            </div>
        <?php endif; ?>

        <?php if ($error): ?>
            <div class="error"><?= htmlspecialchars($error) ?></div>
        <?php endif; ?>

        <form method="POST" action="login.php">
            <div class="field">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            <button type="submit">Log In</button>
        </form>

        <div class="switch-link">
            No account yet? <a href="register.php">Register</a>
        </div>
    </div>
</body>
</html>
