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
  assert.match(html, /Garret Ritchie \| Technology Strategist, Systems Builder and Educator/);
  assert.match(html, /I build useful things with technology\./);
  assert.match(html, /Curiosity leads to building\./);
  assert.match(html, /Redstone MSP App/);
  assert.match(html, /Experience teaches what theory cannot/);
  assert.match(html, /href="\/work"/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/contact"/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|react-loading-skeleton/);
});
