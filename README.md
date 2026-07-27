# Cursor 全功能系统学习

用本仓库系统练习 Cursor 的各项能力与工作流技巧。

你已熟悉：**对话、Plan / Agent / Ask、Rules、Skills** — 对应内容标为「复习可选」。其余模块按顺序做完即可覆盖主流功能面。

## 怎么学

1. 读对应 `docs/0N-*.md`
2. 按 `exercises/0N-*.md` 动手（验收标准写在练习里）
3. 在下方 checklist 勾选进度

练习载体是 [`playground/`](playground/) 里的极简 Todo（Express + 静态页）。

```bash
cd playground
npm install
npm start
# http://localhost:3847
```

## 学习地图

```text
M1 行内编辑与上下文 → M2 Debug / Diff / Review
→ M3 Agents Window / 并行 / Worktree
→ M4 Browser / Design Mode / Canvas
→ M5 MCP / Hooks / Customize
→ M6 Cloud / Automations / Bugbot
→ M7 CLI / SDK
→ M8 模型策略与日常工作流
```

## 进度

- [x] **M1** 行内编辑与上下文 — [docs](docs/01-inline-context.md) · [练习](exercises/01-inline-context.md)
- [x] **M2** Debug、Diff、Review — [docs](docs/02-debug-review.md) · [练习](exercises/02-debug-review.md)
- [x] **M3** Agents Window 与并行 — [docs](docs/03-agents-window.md) · [练习](exercises/03-agents-window.md)
- [x] **M4** Browser、Design Mode、Canvas — [docs](docs/04-browser-canvas.md) · [练习](exercises/04-browser-canvas.md)
- [x] **M5** MCP、Hooks、Plugins — [docs](docs/05-mcp-hooks.md) · [练习](exercises/05-mcp-hooks.md)
- [x] **M6** Cloud、Automations、Bugbot — [docs](docs/06-cloud-bugbot.md) · [练习](exercises/06-cloud-bugbot.md)
- [ ] **M7** CLI 与 SDK — [docs](docs/07-cli-sdk.md) · [练习](exercises/07-cli-sdk.md)（已跳过；A/B 有探测笔记）
- [ ] **M8** 模型与工作流 — [docs](docs/08-workflow.md) · [练习](exercises/08-workflow.md)（进行中）

### 复习可选（你已会）

- Plan / Agent / Ask 模式切换
- Project Rules（本仓库已有 [`.cursor/rules/`](.cursor/rules/)）
- Skills（示范：[`.cursor/skills/tapd-yapi-brief/`](.cursor/skills/tapd-yapi-brief/)）

## 仓库结构

```text
cursor-study/
  README.md
  docs/                 # 模块说明
  exercises/            # 动手任务 + 验收
  playground/           # Todo 练习应用
  .cursor/
    rules/              # 示范项目规则
    skills/             # 示范 Skill
    agents/             # 示范 Subagent
    hooks.json + hooks/ # Shell 防护与审计
    mcp.json.example    # MCP 配置形状（无密钥）
```

## 原则

- 不做成完整业务产品；`playground` 保持小而可改
- 不把密钥提交进仓库；MCP 用本机已有配置或 example
- Cloud / Bugbot 等若账号无权限：读文档即可，练习里有「有权限 / 无权限」分支

## 官方入口

- [Cursor Docs](https://cursor.com/docs)
- [Agent 模式说明](https://cursor.com/help/ai-features/agent)
- [Agent best practices](https://cursor.com/blog/agent-best-practices)
