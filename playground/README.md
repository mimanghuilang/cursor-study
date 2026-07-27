# Playground Todo

Minimal Express + static frontend for Cursor learning exercises.

## Run

```bash
cd playground
npm install
npm start
```

Open http://localhost:3847

## API

| Method | Path | Body |
|--------|------|------|
| GET | `/api/health` | — |
| GET | `/api/todos` | — |
| POST | `/api/todos` | `{ "title": "..." }` |
| PATCH | `/api/todos/:id` | `{ "done": true }` and/or `{ "title": "..." }` |
| DELETE | `/api/todos/:id` | — |

Data file: `data/todos.json` (created on first run).

## Smoke check

```bash
node smoke-check.js
```

Confirms health/create, and prints the intentional PATCH bug (`done` stays false when body sends boolean `true`).

## Known bug (for M2)

`PATCH` toggle uses a string comparison so boolean `done` from the UI never flips correctly. Fix it in [exercises/02-debug-review.md](../exercises/02-debug-review.md).
