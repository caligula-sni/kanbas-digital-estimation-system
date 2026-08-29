// kanbas-store.js
// All Kanbas data lives in the browser's localStorage. No accounts, no server persistence.
// See docs/decisions/0005-remove-user-accounts.md

const DRAFT_KEY = 'kdes_draft';
const SAVED_KEY = 'kdes_saved_kanbas';

function getDraft() {
    const raw = localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
}

function startDraft(name, category) {
    const draft = { name: name, category: category, items: [], extra_costs: [] };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    return draft;
}

function hasDraft() {
    return getDraft() !== null;
}

function clearDraft() {
    localStorage.removeItem(DRAFT_KEY);
}

function addItemToDraft(item) {
    // item: { item_id, name, price, unit, quantity }
    const draft = getDraft();
    if (!draft) return;

    const existing = draft.items.find(function (i) { return i.item_id === item.item_id; });
    if (existing) {
        existing.quantity += item.quantity;
    } else {
        draft.items.push(item);
    }
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function removeItemFromDraft(index) {
    const draft = getDraft();
    if (!draft) return;
    draft.items.splice(index, 1);
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function addCostToDraft(label, amount) {
    const draft = getDraft();
    if (!draft || !label || amount <= 0) return;
    draft.extra_costs.push({ label: label, amount: amount });
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function removeCostFromDraft(index) {
    const draft = getDraft();
    if (!draft) return;
    draft.extra_costs.splice(index, 1);
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function calculateTotals(draft) {
    const itemsTotal = draft.items.reduce(function (sum, i) { return sum + i.price * i.quantity; }, 0);
    const extraTotal = draft.extra_costs.reduce(function (sum, c) { return sum + c.amount; }, 0);
    return { itemsTotal: itemsTotal, extraTotal: extraTotal, grandTotal: itemsTotal + extraTotal };
}

function generateId() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'k_' + Date.now() + '_' + Math.random().toString(36).slice(2);
}

function getSavedKanbas() {
    const raw = localStorage.getItem(SAVED_KEY);
    return raw ? JSON.parse(raw) : [];
}

function saveDraftAsKanbas() {
    const draft = getDraft();
    if (!draft || draft.items.length === 0) return null;

    const record = {
        id: generateId(),
        name: draft.name,
        category: draft.category,
        created_at: new Date().toISOString(),
        items: draft.items,
        extra_costs: draft.extra_costs
    };

    const saved = getSavedKanbas();
    saved.push(record);
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
    clearDraft();
    return record.id;
}

function getKanbasById(id) {
    return getSavedKanbas().find(function (k) { return k.id === id; }) || null;
}

function deleteKanbas(id) {
    const saved = getSavedKanbas().filter(function (k) { return k.id !== id; });
    localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
}

function formatPeso(n) {
    return '₱' + n.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
