# 练习 M3 — Agents Window / 并行 / Worktree

## 任务 A — 用 Explore / 自定义 Subagent 扫结构

在 Agent 中任选其一：

1. 让主代理 **派 Explore 子代理** 只读扫描 `playground/`，汇总入口、路由、前端文件；或
2. 提及自定义代理说明：[`.cursor/agents/playground-explorer.md`](../.cursor/agents/playground-explorer.md)，要求按该格式输出

验收：输出包含 Entrypoints / API / Frontend / Data 四块，且与真实文件一致。

## 任务 B — Side chat 或并行

1. 主对话继续做一件小事（例如：「给 DELETE 加一句 console 日志」——可随后还原）
2. 同时开 **Side chat**（或 `/multitask`）问：「`playground` 依赖有哪些？为何够用？」
3. 观察：旁路结论是否出现在主对话里（通常不应污染）

## 任务 C — best-of-n 或 worktree（有则做）

若当前 Cursor 版本支持 `/best-of-n` 或 `/worktree`：

1. 需求：「给 Todo 增加 `priority: low|normal|high` 字段，API + UI 都要」
2. 用 `/best-of-n`（或两个 worktree 会话）跑 **两路** 方案
3. 对比后只保留一路；另一路丢弃或不要 apply

若 slash 命令不可用：手动开两个 Agent 会话描述同一需求，人工对比 diff，在练习笔记里写「本机无 best-of-n，改用双会话」。

## 验收标准

- [ ] 任务 A 的结构图与仓库一致
- [ ] 你能说明 Side chat / 子代理 相对「全塞主对话」的好处
- [ ] 任务 C：有两路结果对比记录（命令成功或双会话替代均可）

## 清理

练习产生的多余日志、半成品字段，用 Git 还原或再开 Agent 清掉，保持 `playground` 仍适合后续模块。
