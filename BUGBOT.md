# Bugbot guidance for cursor-study

This repository is a **Cursor learning sandbox**, not a production app.

## Focus on

- Correctness bugs (especially API persistence and boolean/string mismatches)
- Missing input validation on write endpoints
- XSS risk if todo titles are ever injected as HTML
- Accidental deletion of learning docs or `.cursor/` demos

## Ignore / do not nag about

- Lack of React/Vue/TypeScript migration
- Absence of unit/e2e coverage gates
- No observability stack, feature flags, or multi-environment config
- Styling not matching a design system (demo CSS is intentional)

## Style

Keep findings short. Prefer one concrete file path and fix hint per issue.
