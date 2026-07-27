# M3 — Agents Window、并行与 Worktree

目标：会用 Agent 优先界面、并行子代理、隔离 worktree，以及 best-of-n 选型。

## 做什么 / 何时用

| 能力 | 何时用 |
|------|--------|
| **Agents Window** | 多任务、看 diff/PR、本地↔云端交接，偏「代理工作台」 |
| **Editor Window** | 仍要深度改代码、Inline Diff、经典 IDE 布局 |
| **Side chats** | 旁路探索，不污染主对话 |
| **消息队列 / 中断** | Agent 跑着时排队追问；跑偏时中断 |
| **Subagents** | 搜索/Shell/Browser 隔离上下文，并行干活 |
| **`/multitask`** | 明确要求异步并行而不是串行队列 |
| **Worktree / `/worktree`** | 多路改同一仓库互不踩脚 |
| **`/best-of-n`** | 同一提示多模型/多路实现，挑赢家再 apply |
| **自定义 Subagent** | 固定领域专家（本仓库有示范） |

## Agents Window vs Editor

- Agents Window：代理会话、并行、云端、设计模式入口更完整
- Editor Window：文件树 + 编辑器 + Inline Diffs 审阅路径更熟
- 设置里可配置是否启动时打开 Agents Window

## 并行心法

- **Skills** = 可调用的流程说明书
- **Subagents** = 独立上下文的工人（Explore / Shell / Browser / 自定义）
- 主代理汇总结果；避免让主对话塞满搜索噪声

自定义示范：[`.cursor/agents/playground-explorer.md`](../.cursor/agents/playground-explorer.md)

## Worktree 与 best-of-n

1. `/worktree`：当前聊天绑到独立 checkout
2. `/best-of-n`：多路并行实现同一需求
3. 对比 diff / 行为后，用 apply 类命令（如 `/apply-worktree`）合并赢家
4. 可选 `.cursor/worktrees.json` 自定义 setup（进阶）

## 常见坑

- 并行不是越多越好：目标要可拆、可汇总
- worktree 磁盘与依赖安装成本；练完记得清理
- 主对话里串很多无关追问 → 上下文脏；用 Side chat 或新开

## 官方链接

- [Agents Window](https://cursor.com/docs/agent/agents-window)
- [Subagents](https://cursor.com/docs/subagents)
- [Agent help](https://cursor.com/help/ai-features/agent)
