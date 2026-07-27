---
name: tapd-yapi-brief
description: >-
  Pull TAPD story/iteration context and/or YApi interface details, then produce a
  short implementation brief for the playground. Use when the user asks to sync
  TAPD/YApi into a task list, API skeleton, or learning exercise brief.
---

# TAPD / YApi brief

## When to use

Use this skill when the user wants to practice MCP by turning TAPD requirements or YApi interfaces into concrete coding notes for `playground/`.

## Steps

1. Confirm which MCP is available in this session (TAPD, YApi, or both).
2. If TAPD is available:
   - Fetch the iteration or stories the user named (or ask for workspace/story id).
   - Summarize title, status, assignee, and acceptance points in bullets.
3. If YApi is available:
   - Fetch the interface(s) the user named (project/cat/id).
   - Extract method, path, request/response fields.
4. Produce a brief in this format:

```markdown
## Goal
<one sentence>

## TAPD context
- ...

## API contract (YApi)
- METHOD /path
- Request: ...
- Response: ...

## Suggested playground changes
- [ ] ...
```

5. Do **not** invent TAPD/YApi data if MCP calls fail — say what failed and what id/url the user should provide.
6. Keep code changes minimal unless the user explicitly asks to implement.
