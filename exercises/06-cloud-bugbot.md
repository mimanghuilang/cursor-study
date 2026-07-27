# 练习 M6 — Cloud / Automations / Bugbot

## 任务 A — 写 `BUGBOT.md`

在仓库根创建 [`BUGBOT.md`](../BUGBOT.md)（若还没有），内容至少包括：

- 本仓库是学习向 Todo demo，不要要求上正式观测/多环境
- 优先指出：错误处理缺失、持久化竞态、XSS（若把 title 当 HTML）
- 忽略：缺少 React、缺少 TypeScript、缺少测试覆盖率门槛

可用 Agent 起草，你再改一版人话。

## 任务 B — 本地预审（人人可做）

1. 对当前分支改动运行 `/review` 或 `/review-bugbot`（有则用之）
2. 保存 3 条发现：真问题 / 误报 / 不适用范围

## 任务 C — Cloud 或 Automations（有权限则做）

**有 Cloud 权限：**

1. 打开 Cloud Agents / [cursor.com/agents](https://cursor.com/agents)
2. 对仓库跑一个只读任务：「总结 playground 架构，开 PR 或贴结果」
3. 记录：环境是否需手动配 Node

**无 Cloud 权限：**

1. 在 IDE 找到 Cloud / Background Agent 入口截图级记下路径（或设置里灰色项）
2. 阅读 Automations 说明；若有 Agents Window，试 `/automate` 看是否提示去编辑器（**不要**强行对接生产 Slack）

## 任务 D — babysit / split（可选）

若有开放 PR：对 Agent 说 `/babysit` 盯评论与 CI。  
若改动很大：试 `/split-to-prs` 看拆分建议。

## 验收标准

- [ ] 根目录有合理的 `BUGBOT.md`
- [ ] 完成一次本地 review 并标注真假问题
- [ ] 对 Cloud/Automations：要么跑通一次，要么写明「无权限 + 入口在哪」

## 降级说明

不强制付费开通。概念搞清 + `BUGBOT.md` + 本地 review 即算本模块达标。
