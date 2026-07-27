# M4 — Browser、Design Mode、Canvas

目标：用浏览器工具验收 UI；用 Design Mode 点选驱动修改；用 Canvas 看分析结果。

## 做什么 / 何时用

| 能力 | 何时用 |
|------|--------|
| **Agent Browser** | 打开页面、点击、截图、做视觉/交互冒烟 |
| **Browser 审批模式** | 控制自动点击风险：手动 / 白名单 / 更自动 |
| **`@Browser`** | 把当前浏览器状态钉进对话 |
| **Design Mode** | 在 Agents Window 对实页点选/框选，让 Agent 改对应代码（快捷键常为 `Cmd/Ctrl+Shift+D`） |
| **Canvas** | 仪表盘、审计、表格型结论 — 比超长 Markdown 好扫 |

## Browser 工作流

1. 先本地起服务（playground：`npm start` → `http://localhost:3847`）
2. 让 Agent：「用浏览器打开本地页，添加一条 todo，截图确认」
3. 失败时优先 **snapshot / screenshot**，少盲目连点
4. 登录墙、验证码、权限弹窗 → 停下来让人接管

## Design Mode

- 适合：「这个按钮再大一点」「这块间距不对」等视觉指向
- 在 Agents Window 启用 Design Mode，点页面元素再下指令
- 仍要 Agent 映射到真实 CSS/HTML 文件；复杂设计系统需额外约束

## Canvas

- 适合依赖审计、模块关系、对比表、学习进度看板
- 可要求：「用 Canvas 展示 playground 模块关系，不要长表格 Markdown」
- Canvas 可再打开迭代；可沉淀为 Skill 固定布局（进阶）

## 常见坑

- 没起本地服务就让 Browser 访问 → 必然失败
- iframe 内页面往往点不到
- Canvas 不是所有任务都更好；简单是非题用短答即可

## 官方链接

- [Canvas](https://cursor.com/docs/agent/tools/canvas)
- [Agents Window](https://cursor.com/docs/agent/agents-window)
