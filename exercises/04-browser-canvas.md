# 练习 M4 — Browser / Design Mode / Canvas

前置：`cd playground && npm start`，确认 http://localhost:3847 可打开。

## 任务 A — Agent Browser 冒烟

在 Agent 中请求类似：

> 用浏览器打开 http://localhost:3847 ，添加一条标题为 `browser-smoke` 的 todo，确认列表出现后截图。

若需审批点击，按 UI 允许本次操作。

## 任务 B — Design Mode 或等价视觉指令

任选：

1. **Design Mode**：在 Agents Window 打开 Design Mode，点中标题或 Add 按钮，要求「字重/间距微调，保持现有配色」；或
2. 无 Design Mode：`@Browser` + 「根据当前页面截图，把 `.lede` 行高调整得更易读，只改 CSS」

## 任务 C — Canvas

请 Agent：

> 分析 `playground/` 的模块关系（server / public / data），用 **Canvas** 展示，不要只用超长 Markdown 表格。

在对话里打开生成的 Canvas，确认能看到分区结构。

## 验收标准

- [ ] 浏览器流程成功添加过 todo（或有截图/快照证据）
- [ ] 至少一次由视觉反馈驱动的 CSS/文案小改
- [ ] 对话中出现可打开的 Canvas（或明确记录「本机构建无 Canvas，已用结构化 Markdown 替代」）

## 注意

- 不要在练习里接真实账号登录流
- 练完可删除 `browser-smoke` 那条 todo
