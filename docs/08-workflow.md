# M8 — 模型策略与日常工作流

目标：选对模型与自主度；形成可重复的个人默认工作流。

## 模型与路由

| 概念 | 要点 |
|------|------|
| **Model picker** | `Ctrl/Cmd+/` 常用于快速切换 |
| **Router / Auto** | Cost / Balance / Intelligence — 交给路由按任务选模 |
| **Thinking** | 展开推理块排查「为何这么改」；CLI 可配显示 |
| **Max Mode** | 遗留：旧按次套餐的大上下文；现行用量制计划通常不适用 |
| **用量面板** | 设消费上限，避免月底惊吓 |

原则：**简单改动用快模型；架构/疑难用强模型；先 Plan 再Build 往往更省总量**。

## 快捷键（Windows 为主，macOS 换 Cmd）

| 操作 | 常见快捷键 |
|------|------------|
| Agent 侧栏 | `Ctrl+I` / `Ctrl+L` |
| Inline Edit | `Ctrl+K` |
| 模式菜单 | `Ctrl+.` ；`Shift+Tab` 切模式 |
| 切换模型 | `Ctrl+/` |
| Design Mode | `Ctrl+Shift+D`（Agents Window） |

以 **Keyboard Shortcuts** 编辑器为准，可自定义。

## 工作流心法

1. **新任务新对话** — 旧上下文是隐形债务  
2. **模式切换 ≈ 新上下文** — 重要结论要粘贴或 @Past Chat  
3. **复杂事先 Plan** — 改计划优于在错误实现上打补丁  
4. **Run Modes** — Auto-review / Allowlist / Run Everything：自主度与安全的权衡  
5. **Sandbox** — 限制网络与路径，适合高自动  
6. **Privacy Mode** — 了解数据留存与分享限制  
7. **Rules = 常驻约束；Skills = 按需流程；Hooks = 硬门禁**  

## 推荐默认（可写入 User Rules）

见练习：整理你的个人默认，并可选同步到 User Rules。

## 官方链接

- [Agent help](https://cursor.com/help/ai-features/agent)
- [Best practices](https://cursor.com/blog/agent-best-practices)
