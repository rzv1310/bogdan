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

  return lazy(loader);
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
