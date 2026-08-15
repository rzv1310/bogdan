/**
 * Build-time SEO validation for the prerendered output.
 *
 * Reads every prerendered page from dist/ and checks title, description,
 * canonical, hreflang reciprocity, JSON-LD validity and the Open Graph /
 * Twitter Card set. Any error fails the build.
 */
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_ORIGIN } from "./routes.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");

/** Routes that intentionally exist only in Romanian (no hreflang pair). */
const RO_ONLY = new Set([
  "/calculator-despagubiri",
  "/harta-site",
  "/servicii/urmarire-penala",
  "/servicii/masuri-preventive",
  "/servicii/infractiuni-contra-persoanei",
]);

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

/** Service pages must carry BreadcrumbList + LegalService (+ FAQPage where a FAQ exists). */
const isServiceRoute = (route) => route.startsWith("/servicii/") || route.startsWith("/en/services/");

function validateBreadcrumb(route, node) {
  const items = node.itemListElement;
  if (!Array.isArray(items) || items.length < 2) {
    err(route, "BreadcrumbList needs at least 2 itemListElement entries");
    return;
  }
  items.forEach((item, index) => {
    if (item?.["@type"] !== "ListItem") err(route, `BreadcrumbList item ${index + 1} is not a ListItem`);
    if (item?.position !== index + 1) err(route, `BreadcrumbList item ${index + 1} has wrong position`);
    if (!item?.name) err(route, `BreadcrumbList item ${index + 1} has no name`);
    const target = item?.item ?? item?.["@id"];
    const isLast = index === items.length - 1;
    if (!target && !isLast) err(route, `BreadcrumbList item ${index + 1} has no item URL`);
    if (target && !String(target).startsWith(SITE_ORIGIN)) {
      err(route, `BreadcrumbList item ${index + 1} URL is not absolute on ${SITE_ORIGIN}`);
    }
  });
}

function validateLegalService(route, node) {
  // Reference-only stubs ({ "@type": ..., "@id": ... }) point at the full node elsewhere.
  const keys = Object.keys(node).filter((key) => key !== "@type" && key !== "@context");
  if (keys.length === 1 && keys[0] === "@id") return;

  if (!node.name) err(route, "LegalService has no name");
  if (!node.description) err(route, "LegalService has no description");
  if (!node.url) err(route, "LegalService has no url");
  else if (!String(node.url).startsWith(SITE_ORIGIN)) err(route, "LegalService url is not absolute");
  if (!node.areaServed) err(route, "LegalService has no areaServed");
  const person = node.provider ?? node.founder ?? node.employee;
  if (!person) err(route, "LegalService has no provider/founder reference");
  if (!node.telephone && !person?.telephone) err(route, "LegalService has no telephone");
}


function validateFaq(route, node) {
  const entities = node.mainEntity;
  if (!Array.isArray(entities) || entities.length === 0) {
    err(route, "FAQPage has no mainEntity questions");
    return;
  }
  entities.forEach((question, index) => {
    if (question?.["@type"] !== "Question") err(route, `FAQPage entry ${index + 1} is not a Question`);
    if (!question?.name) err(route, `FAQPage entry ${index + 1} has no question text (name)`);
    const answer = question?.acceptedAnswer;
    if (!answer || answer["@type"] !== "Answer") err(route, `FAQPage entry ${index + 1} has no Answer`);
    else if (!answer.text?.trim()) err(route, `FAQPage entry ${index + 1} Answer has no text`);
  });
}

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
      const typeList = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
      if (typeList.includes("BreadcrumbList")) validateBreadcrumb(route, node);
      if (typeList.includes("LegalService")) validateLegalService(route, node);
      if (typeList.includes("FAQPage")) validateFaq(route, node);
    }
  }
  if (types.length === 0) warn(route, "no JSON-LD on this page");
  const seen = new Set();
  for (const type of types) {
    if (seen.has(type)) err(route, `duplicate JSON-LD @type "${type}"`);
    seen.add(type);
  }

  if (isServiceRoute(route)) {
    const flat = types.flatMap((type) => type.split(","));
    for (const required of ["BreadcrumbList", "LegalService"]) {
      if (!flat.includes(required)) err(route, `service page is missing ${required} JSON-LD`);
    }
    // FAQPage is only valid when the page really renders a FAQ block.
    const hasFaqContent = /Întrebări frecvente|Frequently asked|FAQ/i.test(html);
    if (!flat.includes("FAQPage")) {
      if (hasFaqContent) err(route, "service page renders a FAQ but has no FAQPage JSON-LD");
      else warn(route, "service page has no FAQPage JSON-LD (no FAQ section on the page)");
    }
  }
  return types;
}

/**
 * Style rule (no-em-dash): em dashes and en dashes must never appear in the
 * site's source content. Prerender normalizes the HTML output, but source files
 * are flagged here so the text stays consistent everywhere (schema included).
 */
const DASH_SCAN_DIRS = [path.join(root, "src"), path.join(root, "scripts")];
const DASH_SCAN_FILES = [path.join(root, "index.html"), path.join(root, "public", "llms.txt")];
const DASH_SCAN_EXT = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".html", ".txt", ".md"]);

async function checkNoFancyDashes() {
  const targets = [...DASH_SCAN_FILES];
  for (const dir of DASH_SCAN_DIRS) {
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      let entries;
      try {
        entries = await readdir(current, { withFileTypes: true });
      } catch {
        continue;
      }
      for (const entry of entries) {
        const full = path.join(current, entry.name);
        if (entry.isDirectory()) {
          if (entry.name !== "node_modules" && entry.name !== "dist") stack.push(full);
        } else if (DASH_SCAN_EXT.has(path.extname(entry.name))) {
          targets.push(full);
        }
      }
    }
  }

  for (const file of targets) {
    let content;
    try {
      content = await readFile(file, "utf8");
    } catch {
      continue;
    }
    if (!/[\u2014\u2013]/.test(content)) continue;
    const rel = path.relative(root, file);
    content.split("\n").forEach((line, index) => {
      if (/[\u2014\u2013]/.test(line)) {
        errors.push(`${rel}:${index + 1}: em/en dash found - replace it with "-"`);
      }
    });
  }
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
    pages.set(route, { alternates, html });

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

  // Contextual internal links: every route needs >= 2 in-content inbound links
  // from other pages (header/footer nav, /harta-site and 404 are excluded).
  const CONTEXTUAL_MIN = 2;
  const inbound = new Map(ROUTES.map((r) => [r, new Set()]));
  for (const [route, page] of pages) {
    if (route === "/harta-site") continue;
    const body = (page.html.split(/<body[^>]*>/i)[1] ?? "")
      .replace(/<header[\s\S]*?<\/header>/gi, "")
      .replace(/<footer[\s\S]*?<\/footer>/gi, "");
    const main = body;
    if (!main) continue;
    for (const match of main.matchAll(/<a[^>]+href="(\/[^"#?]*)"/g)) {
      const target = match[1].replace(/\/$/, "") || "/";
      if (target === route) continue;
      if (inbound.has(target)) inbound.get(target).add(route);
    }
  }
  const CONTEXTUAL_EXEMPT = new Set(["/harta-site"]);
  for (const [route, sources] of inbound) {
    if (CONTEXTUAL_EXEMPT.has(route)) continue;
    if (sources.size < CONTEXTUAL_MIN) {
      warn(
        route,
        `only ${sources.size} contextual internal link(s) (expected >= ${CONTEXTUAL_MIN})`,
      );
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

  // Style rule: no em dash / en dash anywhere in source content. Use "-".
  await checkNoFancyDashes();



  for (const message of warnings) console.warn(`[seo] warning ${message}`);
  for (const message of errors) console.error(`[seo] ERROR ${message}`);

  console.log(
    `[seo] validated ${pages.size} routes + 404 - ${errors.length} error(s), ${warnings.length} warning(s)`,
  );
  if (errors.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
