import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createServer } from "vite";

async function render(pathname) {
  const vite = await createServer({
    appType: "custom",
    server: { middlewareMode: true },
  });

  try {
    const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
    return renderToStaticMarkup(
      React.createElement(
        StaticRouter,
        { location: pathname },
        React.createElement(App),
      ),
    );
  } finally {
    await vite.close();
  }
}

test("renders the personal lab landing page", async () => {
  const html = await render("/");
  assert.match(html, /I build useful things with technology\./);
  assert.match(html, /Curiosity leads to building\./);
  assert.match(html, /Experience teaches what theory cannot/);
  assert.doesNotMatch(html, /Redstone MSP App/);
  assert.doesNotMatch(html, /href="\/work"/);
  assert.match(html, /href="\/portfolio"/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/contact"/);
  assert.doesNotMatch(html, /Codex is working|Your site is taking shape|react-loading-skeleton/);
});

test("includes production metadata in the Vite entry document", async () => {
  const html = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
  assert.match(html, /Garret Ritchie \| Technology Strategist, Systems Builder and Educator/);
  assert.match(html, /<script type="module" crossorigin src="\/assets\/index-[^"]+\.js"><\/script>/);
});

test("renders every portfolio route", async () => {
  const routes = [
    ["/portfolio", /Selected projects across AI, web, operations, and digital platforms/],
    ["/about", /Notice\. Question\. Build\. Live\./],
    ["/capabilities", /Capability matrix/],
    ["/contact", /Garret K\. Ritchie/],
  ];

  for (const [pathname, expected] of routes) {
    assert.match(await render(pathname), expected);
  }
});
