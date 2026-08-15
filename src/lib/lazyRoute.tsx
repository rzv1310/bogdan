import { lazy, type ComponentType } from "react";

type Loader = () => Promise<{ default: ComponentType<Record<string, never>> }>;

const loaders: Loader[] = [];
const resolved = new Map<Loader, ComponentType<Record<string, never>>>();

/**
 * Route-level code splitting that stays safe for build-time prerendering.
 *
 * In the browser this is a plain React.lazy chunk, so the initial bundle only
 * contains the code for the page the visitor actually opened.
 *
 * During SSR (prerender) React.lazy cannot resolve synchronously, so every
 * loader is registered and awaited once via preloadAllRoutes() before render.
 * The prerendered HTML therefore stays complete and identical.
 */
const RELOAD_FLAG = "lovable:chunk-reloaded";

/**
 * A chunk request can fail when the site was republished while a visitor still
 * has the previous HTML (the old hashed file no longer exists). Retry once,
 * then fall back to a single automatic reload per session, which pulls the new
 * HTML plus the new chunk names instead of leaving a blank screen behind.
 */
async function loadWithRetry(loader: Loader) {
  try {
    return await loader();
  } catch (error) {
    try {
      return await loader();
    } catch (secondError) {
      if (typeof window !== "undefined" && !sessionStorage.getItem(RELOAD_FLAG)) {
        sessionStorage.setItem(RELOAD_FLAG, "1");
        window.location.reload();
        // Keep Suspense pending while the reload happens.
        return await new Promise<{ default: ComponentType<Record<string, never>> }>(() => {});
      }
      throw secondError;
    }
  }
}

export function lazyRoute(loader: Loader) {
  loaders.push(loader);

  if (import.meta.env.SSR) {
    const SSRRoute = (props: Record<string, never>) => {
      const Component = resolved.get(loader);
      if (!Component) return null;
      return <Component {...props} />;
    };
    return SSRRoute;
  }

  return lazy(() => loadWithRetry(loader));
}


/** Resolve every registered route module (server-side only). */
export async function preloadAllRoutes() {
  await Promise.all(
    loaders.map(async (loader) => {
      const mod = await loader();
      resolved.set(loader, mod.default);
    }),
  );
}
