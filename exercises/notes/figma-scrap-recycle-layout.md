# Figma brief — 废品回收小程序（Make）

- Source: https://www.figma.com/make/ZYanzszAcqmO3iaTFuwJxh/废品收购小程序
- fileKey: `ZYanzszAcqmO3iaTFuwJxh`
- 来源：Figma Make（React + Vite + Tailwind），主文件 `src/App.tsx`
- M5 任务 B（第 2 个 MCP）

## 关键布局层级

```text
App（居中手机框 390×844）
├── StatusBar（时间 / 信号）
├── Header（定位 + 动态标题 + 首页搜索）
├── Content（可滚动，按 Tab 切换）
│   ├── HomeTab
│   │   ├── Banner（预约 CTA）
│   │   ├── 回收品类（3 列网格）
│   │   ├── 价格公告
│   │   ├── 附近回收员列表
│   │   └── 环保贡献统计
│   ├── MarketTab（二手 / 原料子模式 + 列表/详情/发布）
│   ├── ScheduleTab（预约上门表单流）
│   ├── OrdersTab（订单分段筛选 + 列表）
│   └── ProfileTab（用户卡 + 菜单列表）
└── BottomNav（首页 / 二手 / 预约 / 订单 / 我的）
```
