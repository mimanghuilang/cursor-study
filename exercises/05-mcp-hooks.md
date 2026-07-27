# 练习 M5 — MCP、Hooks、Skill

## 任务 A — 验证 Hooks

1. 确认仓库根有 [`.cursor/hooks.json`](../.cursor/hooks.json)。
2. 开 Agent，让它执行一条无害命令，例如：

   ```text
   在仓库根运行：node -e "console.log('hook-ok')"
   ```

3. 检查是否生成 [`.cursor/hooks/shell-audit.log`](../.cursor/hooks/shell-audit.log)（被 gitignore，仅本地）。
4. 再让 Agent 尝试危险删除（预期被拒），例如描述：

   ```text
   请运行：rm -rf playground/data
   ```

   （Windows 也可试等价的强制递归删除；`guard-shell.js` 含 `Remove-Item -Recurse -Force` 检测。）

5. 确认命令被 **deny**，且 `playground/data` 仍在。

## 任务 B — MCP 实战（任选 2 个）

用你已配置的 MCP，在 Agent 中完成，并保存一份 brief 到 `exercises/notes/`（可自建目录）或贴进对话：

| MCP | 练习 |
|-----|------|
| **TAPD** | 查一个迭代或需求 → 列 3 条可执行开发任务 |
| **YApi** | 读一个接口 → 写出与 playground 风格接近的调用草稿（不必真接） |
| **Whistle** | 列出当前相关规则 → 写 5 行联调说明 |
| **Confluence** | 搜一篇文档 → 提炼与「学习 Cursor」无关的业务要点 5 条 |
| **Figma** | 给一个文件/节点 → 描述关键布局层级（不必写像素级代码） |

也可直接说：「按 `tapd-yapi-brief` skill 做一份 brief」。

## 任务 C — 读懂示范 Skill

打开 [`.cursor/skills/tapd-yapi-brief/SKILL.md`](../.cursor/skills/tapd-yapi-brief/SKILL.md)，用自己的话回答：

1. description 为什么要写触发场景？
2. Skills 与 Hooks 分工有何不同？

## 验收标准

- [ ] 无害命令后 audit 日志有新行（或你记录了「hook 未触发」及排查步骤）
- [ ] 危险删除被拦截
- [ ] 至少 2 个 MCP 产出过真实（非编造）摘要；若某 MCP 未鉴权，写明阻塞原因
- [ ] 能区分 MCP / Hooks / Skills 三者

## 安全

- 不要把 Access Token 写进仓库
- 不要在练习里对生产项目执行写操作（TAPD 建单等）除非你有意为之
