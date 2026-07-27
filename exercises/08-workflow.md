# 练习 M8 — 个人工作流定稿

## 任务 A — 快捷键实测

打开 Keyboard Shortcuts，确认并试用：

- [ ] 打开 Agent 面板
- [ ] Inline Edit（Ctrl+K）
- [ ] 切换模式
- [ ] 切换模型

把与文档不一致的本机键位记在下方（自己改此文件或另存笔记）：

```text
Agent:
Inline Edit:
Mode:
Model:
```

## 任务 B — 写「个人默认工作流」

在本文件末尾或新建 `exercises/notes/my-workflow.md`，按模板填写：

```markdown
## 我的默认

- 新功能：先用 ____ 模式，因为 ____
- 只读摸代码：____
- 顽固 bug：____
- 小改一处：Tab / Ctrl+K / Agent 三选一策略：____
- 涉及 TAPD/YApi：先 ____（Skill/MCP）
- Shell 风险：Run Mode = ____ ；是否依赖项目 Hooks：____
- 模型：日常 ____ ；疑难 ____ ；是否用 Router：____

## 我不做的事

- ...
```

## 任务 C — 沉淀到 User Rules（推荐）

把「我的默认」里稳定、跨项目的 5～10 条，写入 **Cursor User Rules**（全局）。  
项目特有的留在 `.cursor/rules/`。

## 任务 D — 总复习（可选）

快速过一遍 README checklist，把未做模块排进日历；把本仓库加星或 pin，当作 Cursor 功能手册。

## 验收标准

- [ ] 快捷键实测完成
- [ ] 有一份写成文字的个人默认工作流
- [ ] （推荐）User Rules 已更新，或明确决定「只放项目 rules」

完成 M8 后，回到 [README](../README.md) 勾选全部模块。
