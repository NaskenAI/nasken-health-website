/**
 * Post-build prerender.
 *
 * The site is client-rendered, so crawlers and link unfurlers that do not run
 * JavaScript (LinkedIn, WhatsApp, Slack) would otherwise see only the static
 * fallback in index.html for every URL. This renders each route to HTML at
 * build time and writes it to dist/<route>/index.html, so the served HTML for
 * each route carries that route's own content and its own head tags.
 *
 * Run automatically by `npm run build`.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url)) + "/..";
const dist = path.join(root, "dist");

const { render } = await import(path.join(root, "dist-ssr/entry-server.js"));

// Kept in sync with the route table in src/App.tsx. The catch-all 404 is
// deliberately not prerendered: it must stay a soft 404 handled at runtime.
const routes = [
  "/",
  "/team",
  "/careers",
  "/fellowships",
  "/news/nvidia-inception",
  "/privacy",
  "/terms",
];

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

for (const route of routes) {
  const { html, head } = await render(route);

  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  // Route-level tags win over the index.html defaults, so drop the defaults
  // that Helmet is about to re-emit for this route.
  page = page
    .replace(/\n\s*<title>[\s\S]*?<\/title>/, "")
    .replace(/\n\s*<meta\s+name="description"[\s\S]*?\/>/, "")
    .replace(/\n\s*<meta\s+property="og:title"[\s\S]*?\/>/, "")
    .replace(/\n\s*<meta\s+property="og:description"[\s\S]*?\/>/, "")
    .replace(/\n\s*<meta\s+property="og:url"[\s\S]*?\/>/, "")
    .replace(/\n\s*<meta\s+name="twitter:title"[\s\S]*?\/>/, "")
    .replace(/\n\s*<meta\s+name="twitter:description"[\s\S]*?\/>/, "")
    .replace("</head>", `  ${head}\n  </head>`);

  const outDir = route === "/" ? dist : path.join(dist, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page);
  console.log(
    `  prerendered ${route.padEnd(26)} -> ${path.relative(root, path.join(outDir, "index.html"))}`
  );
}

fs.rmSync(path.join(root, "dist-ssr"), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes`);
