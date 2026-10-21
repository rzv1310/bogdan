/**
 * Writes dist/feed.xml (RSS 2.0) after prerender. Items are the Romanian
 * indexable pages; title/description are read from the prerendered HTML so the
 * feed never drifts from the real page metadata. pubDate comes from lastmod.json.
 */
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROUTES, SITE_ORIGIN } from "./routes.mjs";

const LASTMOD_FILE = resolve("scripts/lastmod.json");
const LASTMOD = existsSync(LASTMOD_FILE) ? JSON.parse(readFileSync(LASTMOD_FILE, "utf8")) : {};
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function htmlFor(route) {
  const base = route === "/" ? "index" : route.slice(1);
  for (const p of [`dist/${base}.html`, `dist/${base}/index.html`]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return null;
}

const items = ROUTES.filter((r) => !r.startsWith("/en"))
  .map((route) => {
    const html = htmlFor(route);
    const title = html?.match(/<title[^>]*>([^<]*)<\/title>/)?.[1];
    if (!title) return null;
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    const date = LASTMOD[route];
    return { route, title: decode(title), desc: decode(desc), date };
  })
  .filter(Boolean)
  .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

const link = (r) => `${SITE_ORIGIN}${r === "/" ? "/" : r}`;
const rfc = (d) => new Date(`${d}T00:00:00Z`).toUTCString();
const latest = items.find((i) => i.date)?.date;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Avocat Bogdan Lamatic - Drept Penal Bucuresti</title>
    <link>${SITE_ORIGIN}/</link>
    <description>Resurse și pagini actualizate despre drept penal, publicate de avocat Bogdan Lamatic.</description>
    <language>ro-RO</language>
    <atom:link href="${SITE_ORIGIN}/feed.xml" rel="self" type="application/rss+xml" />${latest ? `\n    <lastBuildDate>${rfc(latest)}</lastBuildDate>` : ""}
${items
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${link(i.route)}</link>
      <guid isPermaLink="true">${link(i.route)}</guid>
      <description>${esc(i.desc)}</description>${i.date ? `\n      <pubDate>${rfc(i.date)}</pubDate>` : ""}
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

writeFileSync(resolve("dist/feed.xml"), xml);
console.log(`[feed] wrote dist/feed.xml with ${items.length} items`);
