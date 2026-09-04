// icons-data.js
// Sketch-style SVG icons, one per item "bucket" (not per SKU/brand) — ADR 0017.
// Icons use stroke="currentColor" so they inherit color via CSS (.item-icon { color: var(--ink); }).

const ICONS = {
    'writing-tools': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 50 L44 20"/><path d="M44 20 L50 14 L54 18 L48 24 Z"/><path d="M14 50 L10 54 L16 56 L20 52 Z"/><path d="M40 24 L44 28"/><path d="M36 28 L40 32"/></svg>`,
    'paper-books': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="10" width="34" height="44" rx="2"/><circle cx="12" cy="16" r="2"/><circle cx="12" cy="24" r="2"/><circle cx="12" cy="32" r="2"/><circle cx="12" cy="40" r="2"/><circle cx="12" cy="48" r="2"/><path d="M22 20 L44 20"/><path d="M22 28 L44 28"/><path d="M22 36 L38 36"/></svg>`,
    'cutting-binding-tools': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12 L44 44"/><path d="M44 12 L20 44"/><circle cx="17" cy="48" r="6"/><circle cx="47" cy="48" r="6"/></svg>`,
    'art-supplies': `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 50 L16 24 L20 16 L24 24 L24 50 Z"/><path d="M28 50 L28 18 L32 10 L36 18 L36 50 Z"/><path d="M40 50 L40 26 L44 18 L48 26 L48 50 Z"/><path d="M14 50 L26 50"/><path d="M26 50 L38 50"/><path d="M38 50 L50 50"/></svg>`
};

function getIconSvg(key) {
    return ICONS[key] || ICONS['paper-books'];
}

function getIconForItem(item) {
    const name = item.name.toLowerCase();

    if (item.category === 'school_supplies') {
        if (/pen|pencil|marker|highlighter/.test(name)) return 'writing-tools';
        if (/scissors|glue|tape|staple/.test(name)) return 'cutting-binding-tools';
        if (/crayon|colored pencil|watercolor/.test(name)) return 'art-supplies';
        return 'paper-books'; // notebook, folder, bond paper, clearbook, etc.
    }

    // Other categories fall back here until their batches are added
    return 'paper-books';
}