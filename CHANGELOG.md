# Changelog

## [Unreleased]
### Added
- Initial project scaffold and docs (requirements, architecture, schema, ADRs)
- Database schema + seed data (database/schema.sql, database/seed.sql)
- Auth module: register, login, logout, session-based (src/public, src/includes/auth.php)
- Kanbas module: session-based draft builder, save to DB (src/includes/kanbas.php)
- Search Materials page — browse/search school supply items (items.php)
- Selected Material page — item detail + add-to-kanbas (item_detail.php)
- Create Kanbas flow — name/category start (kanbas_new.php) + split-panel builder (kanbas_build.php)
- Saved Kanbas listing with search (saved_kanbas.php)
- Show Kanbas Info — full detail view (kanbas_view.php)
- Home page updated with sidebar nav + recent Kanbas list
- All FR-01 through FR-10 from requirements.md implemented
