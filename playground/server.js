const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3847;
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "todos.json");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, "[]", "utf8");
  }
}

function readTodos() {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeTodos(todos) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), "utf8");
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "cursor-study-playground" });
});

app.get("/api/todos", (_req, res) => {
  res.json(readTodos());
});

app.post("/api/todos", (req, res) => {
  const title = String(req.body?.title || "").trim();
  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }

  const todos = readTodos();
  const todo = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    title,
    done: false,
    createdAt: new Date().toISOString(),
  };
  todos.push(todo);
  writeTodos(todos);
  res.status(201).json(todo);
});

app.patch("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const index = todos.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "not found" });
  }

  const current = todos[index];
  if (typeof req.body?.title === "string") {
    const title = req.body.title.trim();
    if (!title) {
      return res.status(400).json({ error: "title cannot be empty" });
    }
    current.title = title;
  }

  // INTENTIONAL BUG for M2 Debug exercise:
  // toggling done uses loose equality against the string "true",
  // so boolean true from JSON never matches and done never flips.
  // Fix during exercises/02-debug-review.md (remove this branch logic).
  if ("done" in (req.body || {})) {
    current.done = req.body.done == "true";
  }

  todos[index] = current;
  writeTodos(todos);
  res.json(current);
});

app.delete("/api/todos/:id", (req, res) => {
  const todos = readTodos();
  const next = todos.filter((t) => t.id !== req.params.id);
  if (next.length === todos.length) {
    return res.status(404).json({ error: "not found" });
  }
  writeTodos(next);
  res.status(204).end();
});

app.listen(PORT, () => {
  ensureDataFile();
  console.log(`Playground Todo listening on http://localhost:${PORT}`);
});
