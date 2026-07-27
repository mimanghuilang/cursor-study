# SDK hello（可选）

Cursor Agent SDK 演进较快。动手前在 IDE 输入 `/sdk`，以当前 skill 与官方包 README 为准。

## TypeScript 最小思路

```bash
npm init -y
npm install @cursor/sdk
```

伪代码（API 名请对照当前文档替换）：

```ts
import { Agent } from "@cursor/sdk"; // 以实际导出为准

const agent = await Agent.create({ /* apiKey / auth from env */ });
const result = await agent.prompt({
  message: "In ask/read-only spirit: what port does playground/server.js listen on?",
});
console.log(result);
```

## 环境变量

- 把密钥放在 `.env`（已 gitignore），不要提交
- 区分 **local runtime**（改当前工作树）与 **cloud runtime**（隔离 VM）

## 本课程要求

- 读完本节并知道 SDK 用在「程序里驱动 Agent」
- 跑通不是硬性指标；条件不足则停在阅读 + 笔记
