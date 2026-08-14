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

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const SITE_ORIGIN = "https://avocatpenalbucuresti.ro";

// Safety net for publish output limits — keep well below platform caps.
const MAX_PRERENDER_PAGES = 200;

const ROUTES = [
  "/",
  "/despre-mine",
  "/blog",
  "/calculator-despagubiri",
  "/contact",
  "/servicii/criminalitate-economica",
  "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
  "/servicii/investigatii-privind-activele-cripto",
  "/servicii/cauze-penale-privind-droguri",
  "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  "/servicii/neglijenta-profesionala-si-malpraxis",
  "/servicii/infractiuni-rutiere-cu-victime",
  "/servicii/raspundere-penala-incidente-locul-de-munca",
  "/servicii/reprezentarea-victimelor-in-procese-penale",
  "/termeni-si-conditii",
  "/gdpr",
  "/politica-cookies",
  "/en",
  "/en/about",
  "/en/blog",
  "/en/contact",
  "/en/terms-and-conditions",
  "/en/gdpr",
  "/en/cookie-policy",
  "/en/services/financial-crime",
  "/en/services/corruption-and-public-office-offenses",
  "/en/services/crypto-asset-investigations",
  "/en/services/drug-offenses",
  "/en/services/money-laundering-and-asset-concealment",
  "/en/services/professional-negligence-and-malpractice",
  "/en/services/road-traffic-offenses",
  "/en/services/workplace-criminal-liability",
  "/en/services/victim-representation-in-criminal-cases",
];

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
  if (title) tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  if (description) tags.push(`<meta name="twitter:description" content="${escapeHtml(description)}" />`);

  const alternates = head?.alternates;
  if (alternates) {
    if (alternates.ro) tags.push(`<link rel="alternate" hreflang="ro" href="${escapeHtml(absolute(alternates.ro))}" />`);
    if (alternates.en) tags.push(`<link rel="alternate" hreflang="en" href="${escapeHtml(absolute(alternates.en))}" />`);
    if (alternates.xDefault)
      tags.push(`<link rel="alternate" hreflang="x-default" href="${escapeHtml(absolute(alternates.xDefault))}" />`);
  }

  for (const schema of head?.schemas ?? []) {
    const json = JSON.stringify(schema).replace(/</g, "\\u003c");
    tags.push(`<script type="application/ld+json" data-managed="true">${json}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}

async function main() {
  const template = stripTemplateHead(await readFile(path.join(distDir, "index.html"), "utf8"));
  const { render } = await import(path.join(root, "dist-ssr", "entry-server.js"));

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

    const outFile =
      route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, page, "utf8");
    console.log(`[prerender] ${route} -> ${path.relative(distDir, outFile)}`);
  }

  console.log(`[prerender] done: ${routes.length} pages`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
