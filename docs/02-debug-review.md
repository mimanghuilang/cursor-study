# M2 — Debug、Diff 与本地 Review

目标：用运行时证据修顽固 bug；会回滚 Agent 误改；会做本地审查。

## 做什么 / 何时用

| 能力 | 何时用 |
|------|--------|
| **Debug mode** | 现象清楚但根因不清；需要日志/复现证据 |
| **Checkpoints / Restore** | Agent 大改之后发现跑偏，想回到对话中某快照 |
| **Inline Diffs / Keep·Undo** | 在 Editor Window 里逐文件审 Agent 改动 |
| **Agent Review / `/review`** | 提交前本地扫一遍相对 main/基线的问题 |

## Debug mode 流程

1. 切换到 **Debug**（模式菜单或 `Shift+Tab` 等，以 UI 为准）
2. 描述现象 + 复现步骤（越具体越好）
3. Agent 提出假设并**埋点/加日志**
4. **你来复现**，把终端/网络/页面结果提供给它
5. 基于证据修；不要跳过「复现」直接猜

Playground 已预埋一个适合练手的 bug（见练习）。

## Checkpoints

- Agent 编辑过程中会留下 checkpoint
- 用 Restore 回到某步的文件状态（**不是** `git reset` 的替代品）
- 适合：「刚才那轮 Agent 改坏了，但我还想留着对话思路」

## Diff 审阅

- **Editor Window**：Settings → Agents → Applying Changes / Inline Diffs，用 Keep / Undo 控制落盘
- **Agents Window**：在 agent UI 内看 diff、提交、开 PR（若已接 GitHub）
- 大改务必先扫一眼再 Keep All

## Agent Review

- 本地：`/review`、`/agent-review` 或 SCM 相关入口（版本 UI 可能略有差异）
- 可配深度（Quick / Deep）
- 与云端 Bugbot 互补：本地先挡一轮，PR 上再自动评

## 常见坑

- Debug 模式仍可能改文件；若只要分析可先 Ask，再 Debug
- Checkpoint 恢复后，未保存的手工编辑可能丢失 — 恢复前确认
- Review 结论要对照真实业务约束，不要盲合并

## 官方链接

- [Agent modes（含 Debug）](https://cursor.com/help/ai-features/agent)
- [Best practices](https://cursor.com/blog/agent-best-practices)
