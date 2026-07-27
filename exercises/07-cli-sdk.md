# 练习 M7 — CLI 与 SDK

## 任务 A — 确认 CLI 是否可用

在本机终端尝试（按你安装的命令调整）：

```powershell
Get-Command cursor -ErrorAction SilentlyContinue
Get-Command agent -ErrorAction SilentlyContinue
Get-Command cursor-agent -ErrorAction SilentlyContinue
cursor --help
```

记录：哪个命令存在、是否支持 agent 子命令。

## 任务 B — 对 playground 跑一次只读询问

若 CLI 可用，在仓库根对 playground 提问（示例，按实际 flag 改写）：

```text
用 Ask/只读模式：playground 的 HTTP 端口和 todos 数据文件路径是什么？
```

把终端回答贴到 `exercises/notes/cli-ask.txt`（自建）或自己的笔记。

若 CLI 不可用：在 IDE Ask 模式完成同一问题，并注明「CLI 未安装，用 IDE 替代」。

## 任务 C — SDK 认知（可选动手）

1. 阅读 [`scripts/sdk-hello.md`](../scripts/sdk-hello.md)
2. 可选：按说明安装 `@cursor/sdk` 并跑通最小 prompt（需要本机 API/登录条件）
3. 写 3 条：「SDK 适合 / 不适合」的场景

## 验收标准

- [ ] 有 CLI 探测记录（成功或「未安装」）
- [ ] 完成一次针对 playground 的只读问答（CLI 或 IDE）
- [ ] 能口头说出 CLI headless 与 IDE Agent 的差别（交互审批、CI、云端）

## 注意

- 不要在 CI 示例里硬编码密钥
- 本模块不要求搭建完整自动化平台
