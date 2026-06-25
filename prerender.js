// Build-time pre-rendering (SSG): renders <App /> to static HTML and injects
// it into dist/index.html so crawlers (and users with JS disabled) see the
// real content. The client then hydrates this markup.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/index.html"), "utf-8");
const { render } = await import("./dist/server/entry-server.js");

const appHtml = render();

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> in dist/index.html');
}

const html = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(toAbsolute("dist/index.html"), html);

// The SSR bundle is only needed during this step; remove it from the output.
fs.rmSync(toAbsolute("dist/server"), { recursive: true, force: true });

console.log("✓ pre-rendered: dist/index.html");
