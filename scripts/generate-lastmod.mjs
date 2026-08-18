/**
 * Writes scripts/lastmod.json: route -> YYYY-MM-DD of the last real content change.
 *
 * Sources (most recent wins):
 *  - last commit touching the route's page component file
 *  - last commit touching that page's data object inside src/lib/subServices/*.ts
 *    (line-range history, so sibling pages don't all inherit the same file date)
 *
 * The JSON is committed so the deploy build does not depend on git history.
 * Re-run manually (node scripts/generate-lastmod.mjs) to refresh the dates.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROUTES } from "./routes.mjs";

const git = (args) => {
  try {
    return execFileSync("git", args, { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
};

const fileDate = (file) => {
  if (!existsSync(file)) return "";
  const out = git(["log", "-1", "--format=%cI", "--", file]);
  return out ? out.slice(0, 10) : "";
};

/** Last commit date for the line range of `ident` inside `file`. */
function objectDate(file, ident) {
  if (!existsSync(file)) return "";
  const lines = readFileSync(file, "utf8").split("\n");
  const start = lines.findIndex((l) => new RegExp(`^export const ${ident}\\b`).test(l));
  if (start === -1) return "";
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^export const /.test(lines[i])) {
      end = i;
      break;
    }
  }
  const out = git(["log", "-1", "--format=%cI", `-L${start + 1},${end}:${file}`]);
  const m = out.match(/\d{4}-\d{2}-\d{2}T[\d:]+[+\-Z][\d:]*/);
  return m ? m[0].slice(0, 10) : "";
}

// ---- route -> page component file, from src/routes.tsx -------------------
const routesSrc = readFileSync(resolve("src/routes.tsx"), "utf8");

const componentFiles = new Map();
for (const m of routesSrc.matchAll(/const\s+(\w+)\s*=\s*lazyRoute\(\s*\(\)\s*=>\s*import\(\s*"([^"]+)"/g)) {
  componentFiles.set(m[1], m[2]);
}
for (const m of routesSrc.matchAll(/^import\s+(\w+)\s+from\s+"(\.\/pages[^"]+)";/gm)) {
  componentFiles.set(m[1], m[2]);
}

const routeComponent = new Map();
for (const m of routesSrc.matchAll(/path="([^"]+)"[^>]*element=\{<(\w+)/g)) {
  routeComponent.set(m[1], m[2]);
}
// also handle element before path on the same Route tag
for (const m of routesSrc.matchAll(/element=\{<(\w+)[^>]*?\/>\}\s*path="([^"]+)"/g)) {
  if (!routeComponent.has(m[2])) routeComponent.set(m[2], m[1]);
}

const resolveComponentPath = (spec) => {
  const base = resolve("src", spec.replace(/^\.\//, ""));
  for (const ext of [".tsx", ".ts", "/index.tsx", "/index.ts"]) {
    if (existsSync(base + ext)) return base + ext;
  }
  return existsSync(base) ? base : "";
};

function pageFileFor(route) {
  // Route paths in routes.tsx may be relative to a parent route ("/en/...").
  const candidates = [route, route.replace(/^\//, ""), route.replace(/^\/en\/?/, "")];
  for (const c of candidates) {
    const comp = routeComponent.get(c);
    if (comp && componentFiles.has(comp)) return resolveComponentPath(componentFiles.get(comp));
  }
  return "";
}

const lastmod = {};
const missing = [];

for (const route of ROUTES) {
  const file = pageFileFor(route);
  const dates = [];
  if (file) {
    dates.push(fileDate(file));
    const src = readFileSync(file, "utf8");
    const dataImport = src.match(/import\s*\{\s*(\w+)\s*\}\s*from\s*"@\/lib\/subServices\/(ro|en)"/);
    if (dataImport) {
      dates.push(objectDate(resolve(`src/lib/subServices/${dataImport[2]}.ts`), dataImport[1]));
    }
  }
  const best = dates.filter(Boolean).sort().pop();
  if (best) lastmod[route] = best;
  else missing.push(route);
}

writeFileSync(resolve("scripts/lastmod.json"), `${JSON.stringify(lastmod, null, 2)}\n`);
console.log(`lastmod.json written (${Object.keys(lastmod).length}/${ROUTES.length} routes)`);
if (missing.length) console.log(`no date resolved for: ${missing.join(", ")}`);
