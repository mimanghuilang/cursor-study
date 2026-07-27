#!/usr/bin/env node
/**
 * beforeShellExecution: block obviously destructive rm -rf style commands.
 * Reads JSON from stdin, writes JSON permission to stdout.
 */
const fs = require("fs");

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

  const command = String(input.command || "");
  const dangerous =
    /\brm\s+(-[a-zA-Z]*r[a-zA-Z]*f|--recursive\s+--force|-rf|-fr)\b/i.test(
      command
    ) || /\bRemove-Item\s+.*-Recurse\s+.*-Force\b/i.test(command);

  if (dangerous) {
    process.stdout.write(
      JSON.stringify({
        permission: "deny",
        user_message:
          "Blocked by cursor-study hook: recursive force delete is not allowed in this learning repo.",
        agent_message:
          "A project hook denied a destructive delete command. Use a safer cleanup approach.",
      })
    );
    process.exit(0);
  }

  process.stdout.write(JSON.stringify({ permission: "allow" }));
  process.exit(0);
});
