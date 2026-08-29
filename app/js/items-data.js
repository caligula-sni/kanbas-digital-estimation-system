// items-data.js
// The full item catalog, static. Replaces the MySQL `items` table (ADR 0006).
// Every item carries `verified` (bool) and `source` (string). Categories are
// expanding in batches, ~40 items each — see docs/decisions/0011-branded-catalog-expansion.md.
// "mixed" is a Kanbas-level category (choose from all items), not an item category —
// no items are tagged category: 'mixed'.
// To update prices/items: edit this file and commit.

const CATEGORIES = [
    { key: 'school_supplies', label: 'School Supplies' },
    { key: 'food', label: 'Food & Groceries' },
    { key: 'hardware', label: 'Hardware & Woodwork' },
    { key: 'steelwork', label: 'Steelwork & Construction' },
    { key: 'hygiene', label: 'Hygiene & Household' }
];

const KANBAS_CATEGORIES = CATEGORIES.concat([
    { key: 'mixed', label: 'Mixed / DIY (all categories)' }
]);

const ITEMS = [
    // School Supplies (15)
    { id: 1, name: 'Notebook (80 leaves)', category: 'school_supplies', unit: 'piece', price: 25.00, description: 'Standard 80-leaf notebook', verified: true, source: 'DTI School Supplies Price Guide, SY 2026-2027' },
    { id: 2, name: 'Ballpen (black)', category: 'school_supplies', unit: 'piece', price: 10.00, description: 'Black ballpoint pen', verified: false, source: 'Estimated' },
    { id: 3, name: 'Pencil #2', category: 'school_supplies', unit: 'piece', price: 14.00, description: 'HB graphite pencil', verified: true, source: 'DTI School Supplies Price Guide, SY 2026-2027' },
    { id: 4, name: 'Folder (long)', category: 'school_supplies', unit: 'piece', price: 15.00, description: 'Long plastic folder', verified: false, source: 'Estimated' },
    { id: 5, name: 'Scissors', category: 'school_supplies', unit: 'piece', price: 45.00, description: 'Standard student scissors', verified: false, source: 'Estimated' },
    { id: 6, name: 'Glue Stick', category: 'school_supplies', unit: 'piece', price: 20.00, description: 'Small glue stick', verified: false, source: 'Estimated' },
    { id: 7, name: 'Ruler (12 inch)', category: 'school_supplies', unit: 'piece', price: 20.00, description: 'Plastic ruler', verified: true, source: 'DTI School Supplies Price Guide, SY 2026-2027' },
    { id: 8, name: 'Eraser', category: 'school_supplies', unit: 'piece', price: 8.00, description: 'Rubber eraser', verified: true, source: 'DTI School Supplies Price Guide, SY 2026-2027' },
    { id: 9, name: 'Bond Paper (short, 1 pack)', category: 'school_supplies', unit: 'piece', price: 190.00, description: '1 ream, 500 sheets', verified: false, source: 'Estimated' },
    { id: 10, name: 'Highlighter (Stabilo Boss)', category: 'school_supplies', unit: 'piece', price: 48.00, description: 'Stabilo Boss original highlighter', verified: true, source: 'SM Stationery' },
    { id: 11, name: 'Sign Pen (black)', category: 'school_supplies', unit: 'piece', price: 18.00, description: 'Gel sign pen', verified: false, source: 'Estimated' },
    { id: 12, name: 'Clearbook (Comix, 40 sheets)', category: 'school_supplies', unit: 'piece', price: 235.00, description: 'Comix Clearbook Fixed, 40 sheets, A4, with cover pocket', verified: true, source: 'National Book Store' },
    { id: 13, name: 'Crayons (24 colors)', category: 'school_supplies', unit: 'piece', price: 65.00, description: 'Box of 24 crayons', verified: true, source: 'DTI School Supplies Price Guide, SY 2026-2027' },
    { id: 14, name: 'Correction Tape', category: 'school_supplies', unit: 'piece', price: 28.00, description: 'Standard correction tape', verified: false, source: 'Estimated' },
    { id: 15, name: 'Stapler', category: 'school_supplies', unit: 'piece', price: 85.00, description: 'Small desktop stapler', verified: false, source: 'Estimated' },
        // School Supplies — expansion batch, ADR 0012
    { id: 87, name: 'Pilot BP-S Ballpen (0.7mm)', category: 'school_supplies', unit: 'piece', price: 26.00, description: 'Fine tip ballpoint pen', verified: true, source: 'SM Stationery' },
    { id: 88, name: 'Pilot Juice Gel Pen (0.5mm)', category: 'school_supplies', unit: 'piece', price: 44.00, description: 'Gel ink pen', verified: true, source: 'SM Stationery' },
    { id: 89, name: 'Faber-Castell Textliner Highlighter', category: 'school_supplies', unit: 'piece', price: 35.00, description: 'Single highlighter (from 6-pack pricing)', verified: true, source: 'SM Stationery' },
    { id: 90, name: 'Faber-Castell Pencil Lead Refill 0.5 2B (20s)', category: 'school_supplies', unit: 'piece', price: 31.00, description: 'Mechanical pencil lead refill, pack of 20', verified: true, source: 'National Book Store' },
    { id: 91, name: 'Faber-Castell Colored Pencils, 48 colors', category: 'school_supplies', unit: 'piece', price: 812.00, description: 'Classic colored pencils, long, 48-color set', verified: true, source: 'National Book Store' },
    { id: 92, name: 'Faber-Castell Watercolor Pencils, 36 colors', category: 'school_supplies', unit: 'piece', price: 760.00, description: 'Watercolor pencils, long, 36-color set', verified: true, source: 'National Book Store' },
    { id: 93, name: 'Crayola Colored Pencils, 12 colors', category: 'school_supplies', unit: 'piece', price: 179.00, description: '12-color pencil set', verified: true, source: 'National Book Store' },
    { id: 94, name: 'Mongol Pencil #2', category: 'school_supplies', unit: 'piece', price: 8.00, description: 'Classic hexagonal graphite pencil', verified: false, source: 'Estimated' },
    { id: 95, name: 'Panda Sign Pen', category: 'school_supplies', unit: 'piece', price: 20.00, description: 'Gel sign pen, black', verified: false, source: 'Estimated' },
    { id: 96, name: 'Best Buy Long Folder', category: 'school_supplies', unit: 'piece', price: 15.00, description: 'Plastic long folder', verified: false, source: 'Estimated' },
    { id: 97, name: 'Best Buy Clearbook, 20 sheets', category: 'school_supplies', unit: 'piece', price: 55.00, description: 'Fixed clearbook, long, 20 sheets', verified: false, source: 'Estimated' },
    { id: 98, name: 'Orions Notebook, 100 leaves', category: 'school_supplies', unit: 'piece', price: 35.00, description: '100-leaf notebook', verified: false, source: 'Estimated' },
    { id: 99, name: 'Sterling Yellow Pad Paper', category: 'school_supplies', unit: 'piece', price: 25.00, description: 'Yellow legal pad', verified: false, source: 'Estimated' },
    { id: 100, name: "Elmer's Glue Stick", category: 'school_supplies', unit: 'piece', price: 25.00, description: 'Washable glue stick', verified: false, source: 'Estimated' },
    { id: 101, name: 'Maped Scissors', category: 'school_supplies', unit: 'piece', price: 55.00, description: 'Student scissors', verified: false, source: 'Estimated' },
    { id: 102, name: "Kevin's Correction Tape", category: 'school_supplies', unit: 'piece', price: 25.00, description: 'Standard correction tape', verified: false, source: 'Estimated' },
    { id: 103, name: 'Deli Stapler No.10', category: 'school_supplies', unit: 'piece', price: 65.00, description: 'Mini desktop stapler', verified: false, source: 'Estimated' },
    { id: 104, name: 'Kokuyo Staple Wire (box)', category: 'school_supplies', unit: 'piece', price: 15.00, description: 'Box of staple wire refills', verified: false, source: 'Estimated' },
    { id: 105, name: 'Titus Permanent Marker', category: 'school_supplies', unit: 'piece', price: 22.00, description: 'Black permanent marker', verified: false, source: 'Estimated' },
    { id: 106, name: 'Pentel Correction Pen', category: 'school_supplies', unit: 'piece', price: 45.00, description: 'Liquid correction pen', verified: false, source: 'Estimated' },
    { id: 107, name: 'Zebra Mildliner Highlighter', category: 'school_supplies', unit: 'piece', price: 60.00, description: 'Dual-tip soft highlighter', verified: false, source: 'Estimated' },
    { id: 108, name: 'Artline Whiteboard Marker', category: 'school_supplies', unit: 'piece', price: 45.00, description: 'Bullet tip whiteboard marker', verified: false, source: 'Estimated' },
    { id: 109, name: 'Crayola Crayons, 8 colors', category: 'school_supplies', unit: 'piece', price: 55.00, description: '8-color crayon box, smaller size', verified: false, source: 'Estimated' },
    { id: 110, name: 'Tombow Glue Tape', category: 'school_supplies', unit: 'piece', price: 65.00, description: 'Permanent adhesive tape roller', verified: false, source: 'Estimated' },
    { id: 111, name: 'Seagull Clearbook Refillable, Long, 20 sheets', category: 'school_supplies', unit: 'piece', price: 65.00, description: 'Refillable clearbook', verified: false, source: 'Estimated' },

    // Food & Groceries (40) — expanded with real brands, ADR 0011
    { id: 16, name: 'Rice, well-milled (1kg)', category: 'food', unit: 'kg', price: 50.00, description: 'Well-milled rice, various brands', verified: true, source: 'PSA Price Situationer, Aug 2026' },
    { id: 17, name: 'Cooking Oil (1L)', category: 'food', unit: 'piece', price: 200.00, description: 'Vegetable cooking oil, various brands, 1L bottle', verified: true, source: 'PSA Price Situationer, Aug 2026' },
    { id: 18, name: 'Sugar, refined (1kg)', category: 'food', unit: 'kg', price: 78.00, description: 'Refined white sugar', verified: true, source: 'PSA Price Situationer, May 2026' },
    { id: 19, name: 'Egg', category: 'food', unit: 'piece', price: 9.00, description: 'Medium-sized chicken egg', verified: true, source: 'PSA Price Situationer, May 2026' },
    { id: 20, name: 'Saba Sardines (155g)', category: 'food', unit: 'piece', price: 20.00, description: 'In tomato sauce', verified: true, source: 'DTI SRP Bulletin' },
    { id: 21, name: 'Payless Instant Mami (55g)', category: 'food', unit: 'piece', price: 8.50, description: 'Chicken or beef flavor', verified: true, source: 'DTI SRP Bulletin' },
    { id: 22, name: 'Lasap Iodized Salt (500g)', category: 'food', unit: 'piece', price: 17.25, description: 'Iodized table salt', verified: true, source: 'DTI SRP Bulletin' },
    { id: 23, name: 'Pinoy Tasty Bread (450g)', category: 'food', unit: 'piece', price: 44.00, description: 'Sliced loaf', verified: true, source: 'DTI SRP Bulletin' },
    { id: 24, name: 'Bear Brand Powdered Milk (135g)', category: 'food', unit: 'piece', price: 50.00, description: 'Fortified powdered milk drink', verified: true, source: 'DTI SRP Bulletin' },
    { id: 25, name: 'Nescafe 3-in-1 Coffee (sachet)', category: 'food', unit: 'piece', price: 8.00, description: 'Original blend, single sachet', verified: true, source: 'DTI SRP Bulletin' },
    { id: 26, name: 'Star Corned Beef (150g)', category: 'food', unit: 'piece', price: 34.00, description: 'Canned corned beef', verified: true, source: 'DTI SRP Bulletin' },
    { id: 27, name: 'Argentina Corned Beef (175g)', category: 'food', unit: 'piece', price: 40.00, description: 'Canned corned beef', verified: true, source: 'DTI SRP Bulletin' },
    { id: 28, name: 'CDO Beef Loaf (150g)', category: 'food', unit: 'piece', price: 19.00, description: 'Canned beef loaf', verified: true, source: 'DTI SRP Bulletin' },
    { id: 29, name: '555 Beef Loaf (150g)', category: 'food', unit: 'piece', price: 19.50, description: 'Canned beef loaf', verified: true, source: 'DTI SRP Bulletin' },
    { id: 30, name: "Family's Meat Loaf, Budget Pack (150g)", category: 'food', unit: 'piece', price: 18.00, description: 'Canned meat loaf', verified: true, source: 'DTI SRP Bulletin' },
    { id: 31, name: 'Jersey Condensed Creamer (390g)', category: 'food', unit: 'piece', price: 39.25, description: 'Sweetened condensed creamer', verified: true, source: 'DTI SRP Bulletin' },
    { id: 32, name: 'Alaska Evaporated Milk (370ml)', category: 'food', unit: 'piece', price: 31.00, description: 'Evaporated filled milk', verified: true, source: 'DTI SRP Bulletin' },
    { id: 33, name: 'Angel Evaporated Milk (410ml)', category: 'food', unit: 'piece', price: 44.00, description: 'Evaporated filled milk', verified: true, source: 'DTI SRP Bulletin' },
    { id: 34, name: 'Birch Tree Full Cream Milk (150g)', category: 'food', unit: 'piece', price: 70.75, description: 'Powdered full cream milk', verified: true, source: 'DTI SRP Bulletin' },
    { id: 35, name: 'Great Taste Coffee Refill (50g)', category: 'food', unit: 'piece', price: 41.00, description: 'Premium coffee refill pack', verified: true, source: 'DTI SRP Bulletin' },
    { id: 36, name: 'Nescafe Classic Coffee Refill (50g)', category: 'food', unit: 'piece', price: 43.25, description: 'Coffee refill pack', verified: true, source: 'DTI SRP Bulletin' },
    { id: 37, name: 'Datu Puti Vinegar (350ml)', category: 'food', unit: 'piece', price: 27.55, description: 'Sukang paombong / white vinegar', verified: true, source: 'DTI SRP Bulletin' },
    { id: 38, name: 'Silver Swan Soy Sauce (350ml)', category: 'food', unit: 'piece', price: 23.75, description: 'All-purpose soy sauce', verified: true, source: 'DTI SRP Bulletin' },
    { id: 39, name: 'Viva Distilled Water (1L)', category: 'food', unit: 'piece', price: 19.00, description: 'Distilled drinking water', verified: true, source: 'DTI SRP Bulletin' },
    { id: 40, name: '5-Star Esperma Candles (5pcs pack)', category: 'food', unit: 'piece', price: 33.42, description: 'White wax candles', verified: true, source: 'DTI SRP Bulletin' },
    { id: 41, name: 'Winner Candles (150g)', category: 'food', unit: 'piece', price: 30.75, description: 'White wax candles', verified: true, source: 'DTI SRP Bulletin' },
    { id: 42, name: 'Lucky Me Pancit Canton (60g)', category: 'food', unit: 'piece', price: 15.00, description: 'Stir-fry instant noodles', verified: false, source: 'Estimated' },
    { id: 43, name: 'Century Tuna Flakes in Oil (155g)', category: 'food', unit: 'piece', price: 35.00, description: 'Canned tuna flakes', verified: false, source: 'Estimated' },
    { id: 44, name: 'UFC Banana Catsup (320g)', category: 'food', unit: 'piece', price: 35.00, description: 'Banana ketchup', verified: false, source: 'Estimated' },
    { id: 45, name: 'Knorr Sinigang Mix (44g)', category: 'food', unit: 'piece', price: 15.00, description: 'Sinigang sa sampalok mix', verified: false, source: 'Estimated' },
    { id: 46, name: 'Maggi Magic Sarap (8g sachet)', category: 'food', unit: 'piece', price: 6.00, description: 'All-purpose seasoning', verified: false, source: 'Estimated' },
    { id: 47, name: 'Del Monte Pineapple Juice (240ml)', category: 'food', unit: 'piece', price: 20.00, description: 'Canned pineapple juice', verified: false, source: 'Estimated' },
    { id: 48, name: 'Purefoods Corned Beef (150g)', category: 'food', unit: 'piece', price: 30.00, description: 'Canned corned beef', verified: false, source: 'Estimated' },
    { id: 49, name: 'Magnolia Chicken, fresh (1kg)', category: 'food', unit: 'kg', price: 190.00, description: 'Whole dressed chicken', verified: false, source: 'Estimated' },
    { id: 50, name: 'San Miguel Pale Pilsen (320ml)', category: 'food', unit: 'piece', price: 55.00, description: 'Beer, bottle', verified: false, source: 'Estimated' },
    { id: 51, name: 'Skyflakes Crackers (10s pack)', category: 'food', unit: 'piece', price: 30.00, description: 'Soda crackers', verified: false, source: 'Estimated' },
    { id: 52, name: 'Chippy Corn Chips (110g)', category: 'food', unit: 'piece', price: 30.00, description: 'BBQ corn chips', verified: false, source: 'Estimated' },
    { id: 53, name: 'Piattos Potato Chips (85g)', category: 'food', unit: 'piece', price: 35.00, description: 'Sour cream potato chips', verified: false, source: 'Estimated' },
    { id: 54, name: 'Nissin Cup Noodles (40g)', category: 'food', unit: 'piece', price: 25.00, description: 'Cup instant noodles', verified: false, source: 'Estimated' },
    { id: 55, name: 'Milo Chocolate Drink Powder (300g)', category: 'food', unit: 'piece', price: 145.00, description: 'Chocolate malt drink powder', verified: false, source: 'Estimated' },

    // Hardware & Woodwork (8)
    { id: 56, name: 'Plywood Sheet (4x8, ordinary)', category: 'hardware', unit: 'piece', price: 550.00, description: 'Ordinary plywood, 4ft x 8ft', verified: true, source: '2026 PH construction material price list' },
    { id: 57, name: 'Lumber 2x2 (8ft, coco)', category: 'hardware', unit: 'piece', price: 75.00, description: 'Coco lumber, 8 feet length', verified: true, source: '2026 PH construction material price list' },
    { id: 58, name: 'Common Wire Nails (1kg)', category: 'hardware', unit: 'kg', price: 45.00, description: 'Assorted sizes', verified: true, source: '2026 PH construction material price list' },
    { id: 59, name: 'Claw Hammer (Stanley, 16oz, wood handle)', category: 'hardware', unit: 'piece', price: 255.00, description: 'Stanley wood-handle claw hammer', verified: true, source: 'KHM Megatools / Goldpeak Tools PH' },
    { id: 60, name: 'Wood Glue (250ml)', category: 'hardware', unit: 'piece', price: 85.00, description: 'White wood glue', verified: false, source: 'Estimated' },
    { id: 61, name: 'Sandpaper Sheet', category: 'hardware', unit: 'piece', price: 15.00, description: 'Medium grit', verified: false, source: 'Estimated' },
    { id: 62, name: 'Latex Paint (Boysen, 1L)', category: 'hardware', unit: 'piece', price: 234.50, description: 'Boysen Permacoat semi-gloss latex, white', verified: true, source: 'DIY Hardware PH' },
    { id: 63, name: 'Screwdriver Set', category: 'hardware', unit: 'piece', price: 180.00, description: '5-piece flathead/Phillips set', verified: false, source: 'Estimated' },

    // Steelwork & Construction (8)
    { id: 64, name: 'Portland Cement (40kg bag)', category: 'steelwork', unit: 'piece', price: 270.00, description: 'Type 1 Portland cement', verified: true, source: '2026 PH construction material price list' },
    { id: 65, name: 'Deformed Rebar 10mm (6m)', category: 'steelwork', unit: 'piece', price: 190.00, description: 'Grade 40 deformed bar', verified: true, source: '2026 PH construction material price list' },
    { id: 66, name: 'Hollow Blocks (4 inch)', category: 'steelwork', unit: 'piece', price: 14.00, description: 'CHB, 4 inch', verified: true, source: '2026 PH construction material price list' },
    { id: 67, name: 'GI Sheet, corrugated (8ft)', category: 'steelwork', unit: 'piece', price: 190.00, description: 'Ordinary corrugated GI sheet, 26 gauge', verified: true, source: '2026 PH construction material price list' },
    { id: 68, name: 'Tie Wire (1kg)', category: 'steelwork', unit: 'kg', price: 52.00, description: 'GI tie wire #16', verified: true, source: '2026 PH construction material price list' },
    { id: 69, name: 'Steel Angle Bar (6m)', category: 'steelwork', unit: 'piece', price: 380.00, description: '2mm thick, 6 meter length', verified: false, source: 'Estimated' },
    { id: 70, name: 'Welding Rod (1kg pack)', category: 'steelwork', unit: 'kg', price: 150.00, description: 'E6013 welding rod', verified: false, source: 'Estimated' },
    { id: 71, name: 'Sand (per sack)', category: 'steelwork', unit: 'piece', price: 60.00, description: 'Washed sand, sack', verified: false, source: 'Estimated' },

    // Hygiene & Household (15)
    { id: 72, name: 'Toilet Soap (55g)', category: 'hygiene', unit: 'piece', price: 22.00, description: 'Safeguard Pure White, 55g bar', verified: true, source: 'DTI SRP Bulletin' },
    { id: 73, name: 'Toilet Soap (85g)', category: 'hygiene', unit: 'piece', price: 25.75, description: 'Green Cross Pure Care, 85g bar', verified: true, source: 'DTI SRP Bulletin' },
    { id: 74, name: 'Laundry Bar Soap (380g)', category: 'hygiene', unit: 'piece', price: 24.00, description: 'Tide/Surf-type laundry bar', verified: true, source: 'DTI SRP Bulletin' },
    { id: 75, name: 'Laundry Bar Soap, budget (330g)', category: 'hygiene', unit: 'piece', price: 20.00, description: 'Budget bar soap, various brands', verified: true, source: 'DTI SRP Bulletin' },
    { id: 76, name: 'Candles, white (20pcs/pack)', category: 'hygiene', unit: 'piece', price: 39.00, description: 'Standard white candles, pack of 20', verified: true, source: 'DTI SRP Bulletin' },
    { id: 77, name: 'Batteries AA (pack of 2)', category: 'hygiene', unit: 'piece', price: 27.00, description: 'Eveready Heavy Duty, pack of 2', verified: true, source: 'DTI SRP Bulletin' },
    { id: 78, name: 'Batteries AA, premium (pack of 4)', category: 'hygiene', unit: 'piece', price: 206.25, description: 'Energizer Max, blister pack of 4', verified: true, source: 'DTI SRP Bulletin' },
    { id: 79, name: 'Dishwashing Liquid (250ml)', category: 'hygiene', unit: 'piece', price: 35.00, description: 'Standard dishwashing liquid', verified: false, source: 'Estimated' },
    { id: 80, name: 'Shampoo (sachet)', category: 'hygiene', unit: 'piece', price: 8.00, description: 'Single-use shampoo sachet', verified: false, source: 'Estimated' },
    { id: 81, name: 'Toothpaste (small tube)', category: 'hygiene', unit: 'piece', price: 35.00, description: 'Standard toothpaste, ~50g tube', verified: false, source: 'Estimated' },
    { id: 82, name: 'Toilet Paper (2-ply roll)', category: 'hygiene', unit: 'piece', price: 25.00, description: 'Standard 2-ply bathroom tissue roll', verified: false, source: 'Estimated' },
    { id: 83, name: 'Rubbing Alcohol (70%, 250ml)', category: 'hygiene', unit: 'piece', price: 45.00, description: 'Isopropyl alcohol, antiseptic', verified: false, source: 'Estimated' },
    { id: 84, name: 'Fabric Softener (sachet)', category: 'hygiene', unit: 'piece', price: 7.00, description: 'Single-use fabric softener sachet', verified: false, source: 'Estimated' },
    { id: 85, name: 'Trash Bags (roll of 10, medium)', category: 'hygiene', unit: 'piece', price: 30.00, description: 'Medium size, roll of 10', verified: false, source: 'Estimated' },
    { id: 86, name: 'Hand Soap, liquid (250ml pump)', category: 'hygiene', unit: 'piece', price: 65.00, description: 'Liquid hand soap, pump bottle', verified: false, source: 'Estimated' }
];

function searchItems(query, category) {
    let results = ITEMS;

    if (category) {
        results = results.filter(function (item) { return item.category === category; });
    }
    if (query) {
        const q = query.toLowerCase();
        results = results.filter(function (item) { return item.name.toLowerCase().includes(q); });
    }
    return results;
}

function getItemById(id) {
    return ITEMS.find(function (item) { return item.id === Number(id); }) || null;
}

function getCategoryLabel(key) {
    const cat = KANBAS_CATEGORIES.find(function (c) { return c.key === key; });
    return cat ? cat.label : key;
}
