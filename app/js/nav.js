// nav.js
// Injects the sidebar into any page with <div id="nav-container"></div>.
// Replaces the old PHP include('nav.php').

function renderNav(activePage) {
    const links = [
        { href: 'home.html', label: 'Home', key: 'home' },
        { href: 'items.html', label: 'Search Materials', key: 'items' },
        { href: 'kanbas_new.html', label: 'Create Kanbas', key: 'kanbas' },
        { href: 'saved_kanbas.html', label: 'Saved Kanbas', key: 'saved' }
    ];

    const linksHtml = links.map(function (link) {
        const activeClass = link.key === activePage ? ' active' : '';
        return '<a href="' + link.href + '" class="' + activeClass.trim() + '">' + link.label + '</a>';
    }).join('');

    const nav = '<nav class="sidebar"><div class="sidebar-title">KANBAS</div>' + linksHtml + '</nav>';

    document.getElementById('nav-container').outerHTML = nav;
}
