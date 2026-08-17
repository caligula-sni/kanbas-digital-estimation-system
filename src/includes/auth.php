<?php
// Auth helpers. See docs/requirements.md NFR-01/NFR-02 and docs/architecture.md.

require_once __DIR__ . '/../config/db.php';

session_start();

/**
 * Register a new user. Returns true on success, or an error string on failure.
 */
function register_user(PDO $pdo, string $username, string $email, string $password) {
    $username = trim($username);
    $email = trim($email);

    if ($username === '' || $email === '' || $password === '') {
        return 'All fields are required.';
    }
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return 'Invalid email address.';
    }
    if (strlen($password) < 8) {
        return 'Password must be at least 8 characters.';
    }

    // Check for existing username/email
    $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ? OR email = ?');
    $stmt->execute([$username, $email]);
    if ($stmt->fetch()) {
        return 'Username or email already in use.';
    }

    $hash = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)');
    $stmt->execute([$username, $email, $hash]);

    return true;
}

/**
 * Attempt login. Returns true on success, or an error string on failure.
 */
function login_user(PDO $pdo, string $email, string $password) {
    $email = trim($email);

    $stmt = $pdo->prepare('SELECT id, username, password_hash FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user['password_hash'])) {
        return 'Invalid email or password.';
    }

    // Prevent session fixation
    session_regenerate_id(true);

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['username'] = $user['username'];

    return true;
}

function logout_user() {
    $_SESSION = [];
    session_destroy();
}

function is_logged_in(): bool {
    return isset($_SESSION['user_id']);
}

/**
 * Call at the top of any protected page.
 */
function require_login() {
    if (!is_logged_in()) {
        header('Location: login.php');
        exit;
    }
}

function current_user_id(): ?int {
    return $_SESSION['user_id'] ?? null;
}
