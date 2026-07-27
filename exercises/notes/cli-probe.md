# M7 Task A — CLI 探测

日期: 2026-07-27
环境: Windows / Cursor 3.13.10

## 结果

| 命令 | 状态 |
|------|------|
| `cursor` | 存在 → `...\Programs\cursor\resources\app\bin\cursor.cmd` |
| `agent` | 未找到 |
| `cursor-agent` | 未找到 |

## 细节

- `cursor -h` 的 **Subcommands** 列出了 `agent`（Start the Cursor agent in your terminal）
- 实际执行 `cursor agent --help` / `cursor agent -h` **未进入 Agent CLI**，仍打印 IDE 主帮助
- 结论：本机有 IDE 启动器 `cursor`，**独立 Agent CLI（headless）尚未可用/未装全**

## 降级

按练习：CLI 不可用时，任务 B 用 IDE **Ask** 模式替代。
