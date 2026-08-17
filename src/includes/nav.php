<nav class="sidebar">
    <div class="sidebar-title">KDES</div>
    <a href="home.php" class="<?= basename($_SERVER['PHP_SELF']) === 'home.php' ? 'active' : '' ?>">Home</a>
    <a href="items.php" class="<?= basename($_SERVER['PHP_SELF']) === 'items.php' ? 'active' : '' ?>">Search Materials</a>
    <a href="kanbas_new.php" class="<?= in_array(basename($_SERVER['PHP_SELF']), ['kanbas_new.php', 'kanbas_build.php']) ? 'active' : '' ?>">Create Kanbas</a>
    <a href="saved_kanbas.php" class="<?= basename($_SERVER['PHP_SELF']) === 'saved_kanbas.php' ? 'active' : '' ?>">Saved Kanbas</a>
    <a href="logout.php" class="logout-link">Log Out</a>
</nav>
