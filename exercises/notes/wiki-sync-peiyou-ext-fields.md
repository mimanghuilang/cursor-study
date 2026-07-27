# Wiki brief — 《同步培优》章节扩展字段

- Source: http://wiki.up366.com:8090/pages/viewpage.action?pageId=68097090
- Page: 《同步培优》（space: flipbook, id: 68097090）
- Fetched via Confluence MCP / wiki search（M5 任务 B）

## 5 要点

1. **扩展字段1 是章节配置核心**：不同栏目（unit*、同步课件、趣味活动、课堂活动、主题视频等）都靠「扩展字段1」里的 JSON 决定跳转与展示。
2. **常见关联键**：`bookId` / `chapterId` / `category` / `taskId` / `id` / `template` / `chapterTitle` / `chapterType` 等，按栏目类型组合使用。
3. **名称不可随意改**：趣味活动、课堂活动等条目（如「单次PK」「互动配音」「趣味学词」）文档标注「名称不能变」。
4. **已废弃与必建节点**：带 `chapterTitle: "自定义"` 的自定义扩展字段已废弃；「我的练习」扩展字段必填，「个性练习」章节必建且勿删「我的练习」。
5. **班级启用要配套授权**：要把《同步培优》配到班级，需同时授权并添加对应《同步培优xxx版》《探索发现》《新版趣课堂》《高中听说课》；跳转写作专有报告需邮件后台配置。
