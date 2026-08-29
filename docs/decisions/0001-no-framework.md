# ADR 0001: Use Vanilla PHP, No Framework

## Status
Superseded by ADR 0006 — no backend exists anymore, so this decision no longer applies.


## Context
Needed to decide whether to use a PHP framework (e.g. Laravel) or plain PHP for a solo prototype project.

## Decision
Use vanilla PHP with PDO for database access. No framework.

## Consequences
- Less setup/config overhead, faster to start
- Full visibility into how auth/routing/queries work — better for learning and documentation
- Will need to reconsider if project scale grows significantly (multi-dev, complex routing)
