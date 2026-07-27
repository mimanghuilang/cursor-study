# M6 — Cloud Agents、Automations、Bugbot

目标：了解「人离开电脑也能跑」的云端代理、自动化触发，以及 PR 审查机器人。

> 账号/套餐若未开通：本模块以**读懂概念 + 找齐入口**为主，练习提供降级路径。

## Cloud Agents（原 Background Agents）

- 在云端 VM 跑 Agent，产出分支 / PR / 产物
- 质量关键：**环境配置**（依赖、密钥、Docker、多仓）
- 可从 IDE、Web（[cursor.com/agents](https://cursor.com/agents)）、部分 IM/SCM 入口触发
- 适合：长任务、并行试验、笔记本合上也能继续

## Automations

- 定时、GitHub/GitLab 事件、Slack、Webhook 等触发
- 用 `/automate` 在 **Agents Window** 里起草并到编辑器完成配置
- 适合：例行 review、摘要、分诊；不是替代 CI 编译测试的全部

## Bugbot 与审查家族

| 能力 | 作用 |
|------|------|
| **Bugbot** | PR 上自动找 bug/质量/安全问题，可 Autofix |
| **`BUGBOT.md`** | 仓库级审查偏好 |
| **`/review-bugbot` / `/review-security`** | 本地预审 |
| **`/babysit`** | 盯 PR：评论、冲突、CI、跟进 |
| **`/split-to-prs`** | 大改拆成可审 PR |
| **Approval Agents** | 按信号自动通过或路由（偏团队/企业） |

本仓库可在根目录放 `BUGBOT.md` 做练习（见 exercises）。

## 常见坑

- Cloud 环境没装依赖 → Agent「能想不能跑」
- Automations 的 MCP 必须是控制台可识别的 dashboard/plugin 类；纯本地 MCP 不一定能进自动化
- Bugbot 与本地 Review 重复时可按产品说明用 patch id 等机制去重

## 官方链接

- [cursor.com/agents](https://cursor.com/agents)
- [Agent best practices](https://cursor.com/blog/agent-best-practices)
