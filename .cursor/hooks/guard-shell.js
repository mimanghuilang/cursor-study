#!/usr/bin/env node
/**
 * beforeShellExecution: block obviously destructive rm -rf style commands.
 * Strips UTF-8 BOM (common on Windows Cursor hooks) before JSON.parse.
 */
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

readStdin(1500).then((raw) => {
  let input = {};
  try {
    input = JSON.parse(stripBom(raw) || "{}");
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
    return;
  }

  process.stdout.write(JSON.stringify({ permission: "allow" }));
  process.exit(0);
});
