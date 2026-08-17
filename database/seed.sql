-- Sample school supply items (manually seeded, see ADR 0003)
USE kdes;

INSERT INTO items (name, category, unit, price, description) VALUES
('Notebook (80 leaves)', 'school_supplies', 'piece', 25.00, 'Standard 80-leaf notebook'),
('Ballpen (black)', 'school_supplies', 'piece', 10.00, 'Black ballpoint pen'),
('Pencil #2', 'school_supplies', 'piece', 8.00, 'HB graphite pencil'),
('Folder (long)', 'school_supplies', 'piece', 15.00, 'Long plastic folder'),
('Scissors', 'school_supplies', 'piece', 45.00, 'Standard student scissors'),
('Glue Stick', 'school_supplies', 'piece', 20.00, 'Small glue stick'),
('Ruler (12 inch)', 'school_supplies', 'piece', 15.00, 'Plastic ruler'),
('Eraser', 'school_supplies', 'piece', 5.00, 'Rubber eraser'),
('Bond Paper (short, 1 pack)', 'school_supplies', 'piece', 150.00, '1 ream, 500 sheets'),
('Highlighter', 'school_supplies', 'piece', 25.00, 'Assorted color highlighter'),
('Sign Pen (black)', 'school_supplies', 'piece', 18.00, 'Gel sign pen'),
('Clearbook (20 pages)', 'school_supplies', 'piece', 55.00, '20-page clearbook'),
('Crayons (24 colors)', 'school_supplies', 'piece', 65.00, 'Box of 24 crayons'),
('Correction Tape', 'school_supplies', 'piece', 22.00, 'Standard correction tape'),
('Stapler', 'school_supplies', 'piece', 85.00, 'Small desktop stapler');
