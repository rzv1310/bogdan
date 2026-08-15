import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppProviders from "./AppProviders";
import AppRoutes from "./routes";
import { preloadAllRoutes } from "./lib/lazyRoute";
import { beginHeadCollection, endHeadCollection, type CollectedHead } from "./lib/ssr-head";

export interface RenderResult {
  html: string;
  head: CollectedHead | null;
}

/** Resolve every code-split route module before rendering (prerender only). */
export async function preload() {
  await preloadAllRoutes();
}

export function render(path: string): RenderResult {
  beginHeadCollection(path);
  const html = renderToString(
    <AppProviders>
      <StaticRouter location={path}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
  return { html, head: endHeadCollection() };
}
