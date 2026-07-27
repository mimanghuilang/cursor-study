# 练习 M2 — Debug、Checkpoint、Review

前置：启动 playground（`npm start`），打开 http://localhost:3847

## 任务 A — Debug 修预埋 bug

现象：

1. 添加一条 todo，显示正常
2. 点 **Done**，刷新或重新 load 后，**完成状态没有真正切换**（或 UI 瞬间变了又不对）

原因在 [`playground/server.js`](../playground/server.js) 的 `PATCH` 处理：用 `req.body.done == "true"` 判断，而前端传的是 **boolean**。

要求：

1. 切换到 **Debug mode**
2. 把现象与复现步骤告诉 Agent（可 `@playground/server.js` `@playground/public/app.js`）
3. 让它加日志 → **你手动点 Done 复现** → 再让它修
4. 修完后：点 Done / Undo 应能正确持久化（看 `playground/data/todos.json` 或刷新页面）

## 任务 B — Checkpoint 回滚体验

1. 开一个 **Agent** 对话，故意说：「把 playground 前端改成使用 React + Vite」（过度改造）
2. 等它开始改或改完一部分后，用 **Checkpoint Restore** 回到改之前
3. 确认 `playground/public/` 仍是原生 HTML/JS（无强制 React 工程化）

若 UI 找不到 Checkpoint：在该对话的历史消息旁找 Restore / 恢复相关控件（不同版本文案可能为 Restore checkpoint）。

## 任务 C — 本地 Review

1. 用 Git 查看相对初始的改动：`git status` / `git diff`
2. 在 Agent 输入 `/review` 或使用 Agent Review，针对当前改动（或相对 `main`）要一份简短问题列表
3. 人工判断哪些是真问题、哪些可忽略

## 验收标准

- [ ] Done 切换后刷新，状态保持正确
- [ ] `server.js` 中错误的 `== "true"` 逻辑已改为正确布尔处理
- [ ] 你至少成功执行过一次 Checkpoint 恢复（或记录「本机 UI 路径」）
- [ ] Review 输出里至少有一条你认同或明确驳回的意见

## 提示

修 bug 时建议在修好处留一行简短注释（项目规则 `playground.mdc` 也鼓励这样做）。
