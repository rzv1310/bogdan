/**
 * Build-time head collection.
 *
 * During the prerender pass there is no `document`, so `useSEO` cannot mutate
 * the DOM. Instead it reports its options here and the prerender script turns
 * them into real `<head>` tags inside the generated HTML file.
 *
 * Field semantics mirror the browser: in the browser, effects run child-first
 * then parent, so the OUTERMOST `useSEO` call wins. Here we therefore keep the
 * first value we receive for each field (parents render before children).
 */

export const SITE_ORIGIN = "https://avocatpenalbucuresti.ro";

export interface CollectedHead {
  path: string;
  lang: string;
  title?: string;
  description?: string;
  canonical?: string;
  alternates?: { ro?: string; en?: string; xDefault?: string };
  locale?: string;
  robotsDirectives?: string;
  schemas: object[];
}

export interface CollectHeadInput {
  title?: string;
  description?: string;
  canonical?: string;
  alternates?: { ro?: string; en?: string; xDefault?: string };
  locale?: string;
  robotsDirectives?: string;
  schemas?: object[];
}

export const isPrerender = typeof document === "undefined";

let current: CollectedHead | null = null;

export function beginHeadCollection(path: string): void {
  current = {
    path,
    lang: path === "/en" || path.startsWith("/en/") ? "en" : "ro",
    schemas: [],
  };
}

export function endHeadCollection(): CollectedHead | null {
  const collected = current;
  current = null;
  return collected;
}

export function collectHead(input: CollectHeadInput): void {
  if (!current) return;

  if (current.title === undefined && input.title) current.title = input.title;
  if (current.description === undefined && input.description) current.description = input.description;
  if (current.canonical === undefined && input.canonical) current.canonical = input.canonical;
  if (current.alternates === undefined && input.alternates) current.alternates = input.alternates;
  if (current.locale === undefined && input.locale) current.locale = input.locale;
  if (current.robotsDirectives === undefined && input.robotsDirectives) {
    current.robotsDirectives = input.robotsDirectives;
  }
  if (input.schemas?.length) current.schemas.push(...input.schemas);
}

/** Language for the page currently being prerendered, derived from its path. */
export function getPrerenderLang(): "ro" | "en" {
  return current?.lang === "en" ? "en" : "ro";
}
