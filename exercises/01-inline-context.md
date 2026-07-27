# 练习 M1 — 行内编辑与上下文

前置：`cd playground && npm install && npm start`，浏览器打开 http://localhost:3847

## 任务 A — 只用 Tab + Cmd-K（尽量不开 Agent）

1. 打开 [`playground/public/app.js`](../playground/public/app.js)。
2. 在 `renderTodos` 里用 **Tab** 补一段：当 `todo.done === true` 时，给标题加 `title` 属性显示 `createdAt`（有则显示，无则空）。
3. 选中 [`playground/public/styles.css`](../playground/public/styles.css) 里 `.todo-item` 规则，用 **Ctrl+K** 要求：「增加轻微 hover 上浮（translateY -1px）与边框高亮，不要改配色体系」。
4. 在 [`playground/server.js`](../playground/server.js) 的 `POST /api/todos` 附近，用 Tab 或 Ctrl+K 增加可选字段 `tags`（字符串数组，默认 `[]`），并写回 JSON。

## 任务 B — `@` 上下文问答（可用 Ask）

新建 Ask 对话，消息里 **显式 `@`**：

- `@playground/server.js`
- `@playground/public/app.js`

提问：「列出所有 API 与前端调用的对应关系，用表格。」

不要 @ 整个 `playground/` 文件夹，练习精确引用。

## 验收标准

- [ ] 未完成任务 A 的主体部分时，没有依赖完整 Agent 多文件自动改（允许 Ask 只读）
- [ ] 页面仍可添加 / 删除 todo
- [ ] Ask 回答中的 API 路径与代码一致（含 GET/POST/PATCH/DELETE）
- [ ] 你能说出：Tab、Ctrl+K、`@文件` 各适合什么场景（口头即可）

## 可选加分

- 打开 Cursor Settings → Tab，试一次 snooze，观察补全是否暂停
- 看一眼 [`.cursorignore`](../.cursorignore)，理解为何忽略 `node_modules` 与日志
