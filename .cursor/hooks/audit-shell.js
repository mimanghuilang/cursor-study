#!/usr/bin/env node
/**
 * afterShellExecution: append a one-line audit record for learning/demo.
 * Strips UTF-8 BOM (common on Windows Cursor hooks) before JSON.parse.
 */
const fs = require("fs");
const path = require("path");

function readStdin(timeoutMs) {
  return new Promise((resolve) => {
    let raw = "";
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      resolve(raw);
    };

    const timer = setTimeout(done, timeoutMs);
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (chunk) => {
      raw += chunk;
    });
    process.stdin.on("end", () => {
      clearTimeout(timer);
      done();
    });
    process.stdin.on("error", () => {
      clearTimeout(timer);
      done();
    });
    process.stdin.resume();
  });
}

function stripBom(text) {
  return String(text || "").replace(/^\uFEFF/, "");
}

const logPath = path.join(__dirname, "shell-audit.log");

readStdin(1500).then((raw) => {
  let input = {};
  try {
    input = JSON.parse(stripBom(raw) || "{}");
  } catch {
    input = {};
  }

  const line = JSON.stringify({
    at: new Date().toISOString(),
    command: input.command || "",
    exitCode: input.exitCode ?? input.exit_code ?? null,
    duration: input.duration ?? null,
  });

  try {
    fs.appendFileSync(logPath, line + "\n", "utf8");
  } catch {
    // Fail open
  }

  process.stdout.write("{}");
  process.exit(0);
});
