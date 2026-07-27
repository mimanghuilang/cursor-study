# M1 — 行内编辑与上下文

目标：少开 Agent，也能在文件里快速改代码、精确喂上下文。

## 做什么 / 何时用

| 能力 | 何时用 |
|------|--------|
| **Cursor Tab** | 你知道大概要写什么，想连续补全、跨位置跳改 |
| **Cmd/Ctrl+K** Inline Edit | 选中一小段，用自然语言做手术式修改 |
| **选区 → Agent (Cmd/Ctrl+L)** | 局部问题升级成多文件任务 |
| **`@` 提及** | 你明确知道该看哪些文件/终端/文档/diff |
| **Codebase indexing** | Agent 语义搜索质量依赖索引；感觉「搜不到」时检查/重建 |

## 关键操作

### Tab

- 接受整段建议：`Tab`
- 按词接受：常见为 `Ctrl/Cmd+→`（以本机 Keybindings 为准）
- 拒绝：继续打字或 `Esc`
- 接受后若出现「下一处编辑」提示，再按 `Tab` 可 **Jump-in-file**
- 临时关闭：Cursor Settings → Tab → snooze / 按扩展禁用

### Inline Edit

1. 选中代码 → `Ctrl+K`（macOS：`Cmd+K`）
2. 写清意图（「改成返回 400 并带 error 字段」）
3. 查看 inline diff 后接受/拒绝
4. 想先问再改：部分版本支持 `Alt/Opt+Enter` 提问模式

### `@` 上下文

在 Agent/Chat 输入框输入 `@`，常用：

- `@文件` / `@文件夹`
- `@Docs`（已添加的文档索引）
- `@Terminals`、`@Past Chats`
- `@Commit` / `@Branch`（工作区或分支 diff）
- `@Browser`（当前浏览器工具上下文）

原则：**知道就 @，不知道让 Agent 自己搜**。大段无关上下文会稀释注意力。

### 索引与忽略

- 状态栏可看索引状态；改大量文件后搜索发飘可 **Reindex**
- [`.cursorignore`](../.cursorignore) 排除噪声与生成物（本仓库已忽略 `node_modules`、日志等）
- 注意：ignore 主要影响索引/部分文件工具；终端与部分 MCP 仍可能读到磁盘文件

## 常见坑

- 模式切换会开**新上下文**；不要假设 Ask 里聊过的细节 Agent 还记得
- Tab 在 markdown/JSON 里有时吵 → snooze 或按语言禁用
- `@` 了整仓大文件夹 → 上下文爆满、回答变飘

## 官方链接

- [Agent / modes](https://cursor.com/help/ai-features/agent)
- [Prompting & context](https://cursor.com/docs/agent/prompting)
- [Best practices](https://cursor.com/blog/agent-best-practices)
