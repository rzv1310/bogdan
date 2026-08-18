/**
 * Build-time prerender.
 *
 * Renders every public route with react-dom/server and writes a real HTML file
 * per route into dist/. Crawlers that do not execute JavaScript now see the
 * full page content plus the correct per-page title, description, canonical,
 * hreflang, Open Graph tags and JSON-LD.
 *
 * The client bundle still boots normally on top of it, so runtime behaviour
 * (Netlify Forms, GTM after consent, language switching) is unchanged.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_ORIGIN } from "./routes.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// Safety net for publish output limits - keep well below platform caps.
const MAX_PRERENDER_PAGES = 200;


const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const absolute = (value) =>
  value.startsWith("http") ? value : SITE_ORIGIN + (value.startsWith("/") ? value : `/${value}`);

/** Remove the tags we replace per route, so no duplicates ship. */
function stripTemplateHead(template) {
  const patterns = [
    /\s*<title>[\s\S]*?<\/title>/i,
    /\s*<meta\s+name="description"[^>]*>/i,
    /\s*<link\s+rel="canonical"[^>]*>/i,
    /\s*<meta\s+name="robots"[^>]*>/i,
    /\s*<meta\s+property="og:title"[^>]*>/i,
    /\s*<meta\s+property="og:description"[^>]*>/i,
    /\s*<meta\s+property="og:type"[^>]*>/i,
    /\s*<meta\s+property="og:url"[^>]*>/i,
    /\s*<meta\s+property="og:site_name"[^>]*>/i,
    /\s*<meta\s+name="twitter:card"[^>]*>/i,
    /\s*<meta\s+name="twitter:title"[^>]*>/i,
    /\s*<meta\s+name="twitter:description"[^>]*>/i,
  ];
  return patterns.reduce((html, pattern) => html.replace(pattern, ""), template);
}

function buildHead(route, head) {
  const title = head?.title;
  const description = head?.description;
  const canonical = absolute(head?.canonical || route);
  const locale = head?.locale || (head?.lang === "en" ? "en_US" : "ro_RO");
  const robots =
    head?.robotsDirectives ||
    "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large";

  const tags = [];
  if (title) tags.push(`<title>${escapeHtml(title)}</title>`);
  if (description) tags.push(`<meta name="description" content="${escapeHtml(description)}" />`);
  tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
  tags.push(`<meta name="robots" content="${escapeHtml(robots)}" />`);
  tags.push(`<meta name="googlebot" content="${escapeHtml(robots)}" />`);

  if (title) tags.push(`<meta property="og:title" content="${escapeHtml(title)}" />`);
  if (description) tags.push(`<meta property="og:description" content="${escapeHtml(description)}" />`);
  tags.push(`<meta property="og:type" content="website" />`);
  tags.push(`<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  tags.push(`<meta property="og:locale" content="${escapeHtml(locale)}" />`);
  tags.push(
    `<meta property="og:site_name" content="${escapeHtml(
      head?.lang === "en" ? "Attorney Bogdan Lamatic" : "Avocat Bogdan Lamatic",
    )}" />`,
  );
  tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  if (title) tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  if (description) tags.push(`<meta name="twitter:description" content="${escapeHtml(description)}" />`);

  const alternates = head?.alternates;
  if (alternates) {
    if (alternates.ro) tags.push(`<link rel="alternate" hreflang="ro" href="${escapeHtml(absolute(alternates.ro))}" />`);
    if (alternates.en) tags.push(`<link rel="alternate" hreflang="en" href="${escapeHtml(absolute(alternates.en))}" />`);
    if (alternates.xDefault)
      tags.push(`<link rel="alternate" hreflang="x-default" href="${escapeHtml(absolute(alternates.xDefault))}" />`);
  }

  const schemas = head?.schemas ?? [];
  if (schemas.length > 0) {
    let payload;
    if (schemas.length === 1 && schemas[0]["@graph"]) {
      // A single @graph object is passed through as-is.
      payload = schemas[0];
    } else {
      // Combine multiple schemas into one @graph.
      const graph = schemas.map((schema) => {
        const { ["@context"]: _, ...rest } = schema;
        return rest;
      });
      payload = { "@context": "https://schema.org", "@graph": graph };
    }
    const json = JSON.stringify(payload).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json" data-managed="true">${json}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

// Site style rule: no em/en dashes anywhere in the output (HTML text or JSON-LD).
// Any that slip into source content get normalized to a plain hyphen here.
function stripFancyDashes(text) {
  return text.replace(/\s*[\u2014\u2013]\s*/g, (m) => (/\s/.test(m) ? " - " : "-"));
}

async function main() {
  const template = stripTemplateHead(await readFile(path.join(distDir, "index.html"), "utf8"));
  const { render, preload } = await import(path.join(root, "dist-ssr", "entry-server.js"));
  // Code-split routes must be resolved before synchronous SSR rendering.
  await preload();

  const routes = ROUTES.slice(0, MAX_PRERENDER_PAGES);
  if (ROUTES.length > MAX_PRERENDER_PAGES) {
    console.warn(`[prerender] route list capped at ${MAX_PRERENDER_PAGES} pages`);
  }

  for (const route of routes) {
    const { html, head } = render(route);
    const lang = head?.lang === "en" ? "en" : "ro";

    let page = template
      .replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}"`)
      .replace("</head>", `${buildHead(route, head)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    // Per-page keywords override the sitewide default from index.html.
    if (head?.keywords) {
      page = page.replace(
        /<meta\s+name="keywords"[^>]*>/i,
        `<meta name="keywords" content="${escapeHtml(head.keywords)}" />`,
      );
    }

    const outFile =
      route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    if (route === "/") console.log("[debug before strip] priceRange:", page.match(/priceRange[^,]+/)[0]);
    const final = stripFancyDashes(page);
    if (route === "/") console.log("[debug final] priceRange:", final.match(/priceRange[^,]+/)[0]);
    await writeFile(outFile, final, "utf8");
    console.log(`[prerender] ${route} -> ${path.relative(distDir, outFile)}`);
  }

  // Prerendered 404 page (not indexable, not in the sitemap).
  {
    const { html, head } = render("/pagina-inexistenta-404");
    const lang = head?.lang === "en" ? "en" : "ro";
    const page = template
      .replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}"`)
      .replace("</head>", `${buildHead("/404", { ...head, canonical: "/404" })}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    await writeFile(path.join(distDir, "404.html"), stripFancyDashes(page), "utf8");
    console.log("[prerender] 404 -> 404.html");
  }

  console.log(`[prerender] done: ${routes.length} pages`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
