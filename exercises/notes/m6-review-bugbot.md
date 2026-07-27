# M6 Task B — 本地 Bugbot 预审

Diff: uncommitted changes  
Runner: Bugbot subagent

## 发现与标注

| # | 发现 | 标注 | 说明 |
|---|------|------|------|
| 1 | `guard-shell.js` stdin 1.5s 超时可能导致空 command → 危险删除被放行 | **真问题** | 超时抢在完整 JSON 之前会削弱拦截 |
| 2 | `hooks.json` 使用 `cmd /c`，非 Windows 上 hook 起不来 | **真问题（环境相关）** / 对本机可算 **部分不适用** | Windows 学习机必要；跨平台仓库应条件化或文档说明 |
| 3 | 未报 playground XSS / 缺测试等 | **不适用范围** | `BUGBOT.md` 明确：demo 不追框架迁移与覆盖率；XSS 仅在 title 当 HTML 时才强调 |

## 练习收获

- `/review` → 选 bugbot：适合按 `BUGBOT.md` 做本地预审
- 要自己标：真问题 / 误报 / 不适用，不能照单全收
