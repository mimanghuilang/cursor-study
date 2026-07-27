# M5 — MCP、Hooks、Customize / Plugins

目标：把外部系统接进 Agent；用 Hooks 守门与审计；知道 Customize 一页管什么。

## MCP

**Model Context Protocol**：让 Agent 调用外部工具（TAPD、YApi、Whistle、Figma、Confluence、数据库等）。

| 配置位置 | 用途 |
|----------|------|
| `~/.cursor/mcp.json` | 用户级，跨项目 |
| `.cursor/mcp.json` | 项目级，可进版本库（**勿提交密钥**） |
| Customize / MCP UI | 开关、安装、鉴权 |

本仓库只提供形状示例：[`.cursor/mcp.json.example`](../.cursor/mcp.json.example)。你本机已接的 TAPD / Figma / YApi / Whistle / Confluence 可直接用于练习。

技巧：

- 对话里可临时关掉吵闹的 MCP 工具
- 用 **Skill** 规定「何时调哪个 MCP、输出什么模板」
- 示范 Skill：[`.cursor/skills/tapd-yapi-brief/SKILL.md`](../.cursor/skills/tapd-yapi-brief/SKILL.md)

## Hooks

配置：[`.cursor/hooks.json`](../.cursor/hooks.json)  
脚本：[`.cursor/hooks/`](../.cursor/hooks/)

本仓库示范：

- `beforeShellExecution` → `guard-shell.js`：拦截 `rm -rf` / 危险 `Remove-Item`
- `afterShellExecution` → `audit-shell.js`：追加写入 `shell-audit.log`（已 gitignore）

常见事件：`sessionStart/End`、`preToolUse`、`beforeShellExecution`、`afterFileEdit`、`beforeMCPExecution`、`beforeSubmitPrompt` 等。

返回 JSON 控制 `permission: allow|deny|ask`。Windows 下用 **Node 脚本** 比 bash 更省事；`hooks.json` 里命令建议加 `cmd /c` 前缀，脚本解析 stdin 前去掉 UTF-8 BOM。

## Customize / Plugins

Customize 页集中管理：Rules、Skills、Hooks、MCP、Plugins、作用域。

**Plugins** = 打包分享的 rules + skills + agents + hooks + MCP 组合（适合团队）。

## 常见坑

- Hook 依赖的 `node`/`jq` 不在 PATH → hook 静默失败；先本机跑通脚本
- MCP 鉴权过期 → 工具列表在但调用失败，先鉴权再怪 Agent
- 项目 hooks 路径相对**仓库根目录**

## 官方链接

- [Hooks skill / docs via create-hook](https://cursor.com/docs)（以编辑器内 `/create-hook` 为准）
- [Best practices（MCP / Skills）](https://cursor.com/blog/agent-best-practices)
