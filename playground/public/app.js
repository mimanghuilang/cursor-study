const listEl = document.getElementById("todo-list");
const formEl = document.getElementById("todo-form");
const inputEl = document.getElementById("todo-input");
const statusEl = document.getElementById("status");

function setStatus(message, kind = "") {
  statusEl.textContent = message || "";
  statusEl.className = "status" + (kind ? ` ${kind}` : "");
}

async function api(path, options) {
  const res = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = body.error || detail;
    } catch {
      /* ignore */
    }
    throw new Error(detail);
  }
  if (res.status === 204) return null;
  return res.json();
}

function renderTodos(todos) {
  listEl.innerHTML = "";
  if (!todos.length) {
    setStatus("No todos yet — add one above.", "");
    return;
  }

  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo-item" + (todo.done ? " done" : "");
    li.dataset.id = todo.id;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.textContent = todo.done ? "Undo" : "Done";
    toggle.addEventListener("click", () => toggleTodo(todo));

    const title = document.createElement("span");
    title.className = "todo-title";
    title.textContent = todo.title;

    const del = document.createElement("button");
    del.type = "button";
    del.className = "delete";
    del.textContent = "Delete";
    del.addEventListener("click", () => deleteTodo(todo.id));

    li.append(toggle, title, del);
    listEl.appendChild(li);
  }
}

async function loadTodos() {
  setStatus("Loading…");
  try {
    const todos = await api("/api/todos");
    renderTodos(todos);
    setStatus(`${todos.length} todo(s)`, "ok");
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function toggleTodo(todo) {
  try {
    await api(`/api/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ done: !todo.done }),
    });
    await loadTodos();
  } catch (err) {
    setStatus(err.message, "error");
  }
}

async function deleteTodo(id) {
  try {
    await api(`/api/todos/${id}`, { method: "DELETE" });
    await loadTodos();
  } catch (err) {
    setStatus(err.message, "error");
  }
}

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = inputEl.value.trim();
  if (!title) return;

  try {
    await api("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    inputEl.value = "";
    await loadTodos();
  } catch (err) {
    setStatus(err.message, "error");
  }
});

loadTodos();
