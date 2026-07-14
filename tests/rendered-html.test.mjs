import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the personal lab landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Garret Ritchie \| Personal Lab and Project Workbench/);
  assert.match(html, /I&#x27;m Garret\. Building small useful things\./);
  assert.match(html, /Dynamic project workbench/);
  assert.match(html, /Redstone MSP App/);
  assert.match(html, /Project Zion 2\.0/);
  assert.match(html, /Experience teaches what theory cannot/);
  assert.match(html, /Garret K\. Ritchie/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|react-loading-skeleton/);
});
