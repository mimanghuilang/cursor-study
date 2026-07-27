const http = require("http");
const { spawn } = require("child_process");
const path = require("path");

const root = path.join(__dirname);
const child = spawn("node", ["server.js"], {
  cwd: root,
  stdio: ["ignore", "pipe", "pipe"],
});

child.stdout.on("data", (d) => process.stdout.write(d));
child.stderr.on("data", (d) => process.stderr.write(d));

function request(method, urlPath, body) {
  const payload = body ? JSON.stringify(body) : null;
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port: 3847,
        path: urlPath,
        method,
        headers: payload
          ? {
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(payload),
            }
          : {},
      },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: data })
        );
      }
    );
    req.on("error", reject);
    if (payload) req.write(payload);
    req.end();
  });
}

setTimeout(async () => {
  try {
    const health = await request("GET", "/api/health");
    console.log("health", health.status, health.body);
    const created = await request("POST", "/api/todos", { title: "smoke" });
    console.log("post", created.status, created.body);
    const id = JSON.parse(created.body).id;
    const patched = await request("PATCH", `/api/todos/${id}`, { done: true });
    console.log("patch-bug-demo", patched.status, patched.body);
    const done = JSON.parse(patched.body).done;
    console.log("intentional-bug-done-is", done, "(expected false before M2 fix)");
  } catch (err) {
    console.error(err);
  } finally {
    child.kill();
  }
}, 600);
