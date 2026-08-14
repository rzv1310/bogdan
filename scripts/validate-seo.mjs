/**
 * Build-time SEO validation for the prerendered output.
 *
 * Reads every prerendered page from dist/ and checks title, description,
 * canonical, hreflang reciprocity, JSON-LD validity and the Open Graph /
 * Twitter Card set. Any error fails the build.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_ORIGIN } from "./routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

/** Routes that intentionally exist only in Romanian (no hreflang pair). */
const RO_ONLY = new Set(["/calculator-despagubiri", "/harta-site", "/servicii/urmarire-penala"]);

const errors = [];
const warnings = [];
const err = (route, message) => errors.push(`${route}: ${message}`);
const warn = (route, message) => warnings.push(`${route}: ${message}`);

const abs = (route) => SITE_ORIGIN + (route === "/" ? "/" : route);

const fileFor = (route) =>
  route === "/" ? path.join(distDir, "index.html") : path.join(distDir, route, "index.html");

const metaContent = (html, attr, name) => {
  const matches = [
    ...html.matchAll(
      new RegExp(`<meta\\s+${attr}="${name}"\\s+content="([^"]*)"[^>]*>`, "gi"),
    ),
  ];
  return matches.map((m) => m[1]);
};

const decode = (value) =>
  value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

const REQUIRED_SOCIAL = [
  ["property", "og:title"],
  ["property", "og:description"],
  ["property", "og:type"],
  ["property", "og:url"],
  ["property", "og:locale"],
  ["property", "og:site_name"],
  ["property", "og:image"],
  ["name", "twitter:card"],
  ["name", "twitter:title"],
  ["name", "twitter:description"],
  ["name", "twitter:image"],
];

function collectJsonLd(route, html) {
  const types = [];
  for (const match of html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
  )) {
    let parsed;
    try {
      parsed = JSON.parse(match[1].replace(/\\u003c/g, "<"));
    } catch (error) {
      err(route, `JSON-LD does not parse (${error.message})`);
      continue;
    }
    const nodes = Array.isArray(parsed["@graph"]) ? parsed["@graph"] : [parsed];
    for (const node of nodes) {
      if (!node || !node["@type"]) {
        err(route, "JSON-LD node without @type");
        continue;
      }
      const type = Array.isArray(node["@type"]) ? node["@type"].join(",") : node["@type"];
      types.push(type);
    }
  }
  if (types.length === 0) warn(route, "no JSON-LD on this page");
  const seen = new Set();
  for (const type of types) {
    if (seen.has(type)) err(route, `duplicate JSON-LD @type "${type}"`);
    seen.add(type);
  }
  return types;
}

async function main() {
  const pages = new Map();

  for (const route of ROUTES) {
    let html;
    try {
      html = await readFile(fileFor(route), "utf8");
    } catch {
      err(route, "prerendered HTML file is missing");
      continue;
    }

    const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
    if (!title) err(route, "missing or empty <title>");

    const description = metaContent(html, "name", "description");
    if (description.length !== 1 || !description[0].trim()) {
      err(route, `expected exactly one non-empty meta description (found ${description.length})`);
    }

    const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
    if (canonicals.length !== 1) {
      err(route, `expected exactly one canonical (found ${canonicals.length})`);
    } else if (canonicals[0] !== abs(route)) {
      err(route, `canonical is not self-referential: ${canonicals[0]} (expected ${abs(route)})`);
    }

    // Open Graph / Twitter
    for (const [attr, name] of REQUIRED_SOCIAL) {
      const values = metaContent(html, attr, name);
      if (values.length === 0) err(route, `missing ${name}`);
      else if (values.length > 1) err(route, `duplicate ${name} (${values.length} tags)`);
    }
    const ogUrl = metaContent(html, "property", "og:url")[0];
    if (ogUrl && canonicals[0] && ogUrl !== canonicals[0]) {
      err(route, `og:url (${ogUrl}) differs from canonical (${canonicals[0]})`);
    }
    const metaDesc = description[0] ? decode(description[0]) : undefined;
    for (const [attr, name] of [
      ["property", "og:description"],
      ["name", "twitter:description"],
    ]) {
      const value = metaContent(html, attr, name)[0];
      if (metaDesc && value && decode(value) !== metaDesc) {
        err(route, `${name} differs from meta description`);
      }
    }
    const ogTitle = metaContent(html, "property", "og:title")[0];
    if (title && ogTitle && decode(ogTitle) !== decode(title)) {
      err(route, "og:title differs from <title>");
    }
    for (const name of ["og:image", "twitter:image"]) {
      const value = metaContent(html, name === "og:image" ? "property" : "name", name)[0];
      if (value && !value.startsWith("https://")) err(route, `${name} is not an absolute https URL`);
    }

    const alternates = [
      ...html.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g),
    ].map((m) => ({ hreflang: m[1], href: m[2] }));

    collectJsonLd(route, html);
    pages.set(route, { alternates });

    if (alternates.length === 0) {
      if (RO_ONLY.has(route)) warn(route, "no hreflang (Romanian-only page)");
      else err(route, "no hreflang alternates");
    }
  }

  // hreflang reciprocity + x-default must point at the Romanian variant.
  for (const [route, { alternates }] of pages) {
    const xDefault = alternates.find((a) => a.hreflang === "x-default");
    if (alternates.length > 0 && !xDefault) err(route, "missing hreflang x-default");
    if (xDefault) {
      const target = xDefault.href.replace(SITE_ORIGIN, "") || "/";
      if (target.startsWith("/en")) err(route, `x-default points at an English URL (${target})`);
    }

    for (const { hreflang, href } of alternates) {
      if (hreflang === "x-default") continue;
      const target = href.replace(SITE_ORIGIN, "") || "/";
      if (!href.startsWith(SITE_ORIGIN)) {
        err(route, `hreflang ${hreflang} href is not absolute: ${href}`);
        continue;
      }
      if (!pages.has(target)) {
        err(route, `hreflang ${hreflang} points at a non-prerendered route: ${target}`);
        continue;
      }
      const back = pages
        .get(target)
        .alternates.some((a) => (a.href.replace(SITE_ORIGIN, "") || "/") === route);
      if (!back) err(route, `hreflang is not reciprocal with ${target}`);
    }
  }

  // Prerendered 404 must exist and be noindex.
  try {
    const html = await readFile(path.join(distDir, "404.html"), "utf8");
    const robots = metaContent(html, "name", "robots")[0] ?? "";
    if (!robots.includes("noindex")) err("/404", "404.html is not marked noindex");
    if (!/<title>[\s\S]*?\S[\s\S]*?<\/title>/i.test(html)) err("/404", "404.html has no title");
  } catch {
    err("/404", "dist/404.html is missing");
  }

  for (const message of warnings) console.warn(`[seo] warning ${message}`);
  for (const message of errors) console.error(`[seo] ERROR ${message}`);

  console.log(
    `[seo] validated ${pages.size} routes + 404 — ${errors.length} error(s), ${warnings.length} warning(s)`,
  );
  if (errors.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
