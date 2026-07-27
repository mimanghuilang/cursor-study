#!/usr/bin/env node
/**
 * afterShellExecution: append a one-line audit record for learning/demo.
 */
const fs = require("fs");
const path = require("path");

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  raw += chunk;
});
process.stdin.on("end", () => {
  let input = {};
  try {
    input = JSON.parse(raw || "{}");
  } catch {
    input = {};
  }

  const logPath = path.join(__dirname, "shell-audit.log");
  const line = JSON.stringify({
    at: new Date().toISOString(),
    command: input.command || "",
    exitCode: input.exitCode ?? input.exit_code ?? null,
  });

  try {
    fs.appendFileSync(logPath, line + "\n", "utf8");
  } catch {
    // Fail open: auditing must never break the agent loop.
  }

  process.stdout.write("{}");
  process.exit(0);
});
