# M7 — CLI 与 SDK

目标：离开 IDE 也能跑 Agent；了解用 SDK 把 Agent 嵌进脚本/CI 的入口。

## CLI

Cursor Agent CLI（具体二进制名随版本可能为 `cursor-agent` / `agent` 等，以本机 `cursor` 帮助为准）常见能力：

| 能力 | 用途 |
|------|------|
| 交互模式 | 终端里用 Agent / Plan / Ask |
| `--mode` / slash | 切模式、下指令 |
| `-p` / print / headless | 脚本化、CI 非交互 |
| sandbox / permissions | 收紧自动执行 |
| `cli-config.json` | 模型、审批、thinking 显示等 |
| Statusline | `/statusline` 自定义页脚 |
| 云端交接 | 部分版本用消息前缀 `&` 推到 Cloud |

安装与登录以官方 CLI 文档为准；先 `which` / `Get-Command` 确认命令存在。

## SDK

- TypeScript：`@cursor/sdk`
- Python：`cursor-sdk` / `cursor_sdk`
- 可选本地 runtime 或 Cloud runtime
- 适合：机器人、流水线、内部平台；本课程只要求 **hello 级** 认知

本仓库提供可选脚本草稿：[`scripts/sdk-hello.md`](../scripts/sdk-hello.md)（说明如何最小运行；不强制安装付费依赖）。

## 常见坑

- CI 里忘了鉴权 / 非交互审批策略 → 挂起
- headless 输出要解析 stream/事件，不要当纯同步字符串 API
- SDK API 演进快：以 `/sdk` skill 与当前 npm 文档为准

## 官方链接

- 编辑器内 `/sdk` skill
- [Cursor Docs](https://cursor.com/docs)
