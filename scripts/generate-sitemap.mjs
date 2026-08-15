/**
 * Writes public/sitemap.xml from the shared route list (scripts/routes.mjs),
 * including hreflang alternates so the RO/EN pairs are declared in the sitemap
 * as well as in each page's <head>.
 *
 * Runs via the predev / prebuild npm hooks.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROUTES, SITE_ORIGIN, priorityFor } from "./routes.mjs";
import { RO_TO_EN as PAIRS } from "./langPairs.mjs";


const enToRo = Object.fromEntries(Object.entries(PAIRS).map(([ro, en]) => [en, ro]));

const loc = (route) => `${SITE_ORIGIN}${route === "/" ? "/" : route}`;

function alternatesFor(route) {
  const ro = route in PAIRS ? route : enToRo[route];
  if (!ro) return [];
  const en = PAIRS[ro];
  return [
    `    <xhtml:link rel="alternate" hreflang="ro" href="${loc(ro)}" />`,
    `    <xhtml:link rel="alternate" hreflang="en" href="${loc(en)}" />`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(ro)}" />`,
  ];
}

const urls = ROUTES.map((route) =>
  [
    `  <url>`,
    `    <loc>${loc(route)}</loc>`,
    ...alternatesFor(route),
    `    <changefreq>weekly</changefreq>`,
    `    <priority>${priorityFor(route)}</priority>`,
    `  </url>`,
  ].join("\n"),
);

const xml = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
  ...urls,
  `</urlset>`,
  ``,
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${ROUTES.length} entries)`);
