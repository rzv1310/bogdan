import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  canonical?: string;
  // Absolute or path-only URLs; if path-only, origin will be prefixed automatically
  alternates?: { ro?: string; en?: string; xDefault?: string };
  // Open Graph locale, e.g. "ro_RO" | "en_GB" | "en_US"
  locale?: string;
  // Meta robots directives for search engine optimization
  robotsDirectives?: string;
}

export function useSEO({ title, description, canonical, alternates, locale, robotsDirectives }: SEOOptions) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }

    const origin = window.location.origin;
    const url = canonical || origin + window.location.pathname;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);

    // Open Graph basics
    const setMeta = (selector: string, attr: 'property' | 'name', name: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    if (title) setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    if (description) setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    if (locale) setMeta('meta[property="og:locale"]', 'property', 'og:locale', locale);

    // Twitter basics
    if (title) setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    if (description) setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');

    // Meta robots and googlebot directives
    if (robotsDirectives) {
      setMeta('meta[name="robots"]', 'name', 'robots', robotsDirectives);
      setMeta('meta[name="googlebot"]', 'name', 'googlebot', robotsDirectives);
    }

    // hreflang alternates
    if (alternates) {
      const ensureLink = (hreflang: string, href?: string) => {
        if (!href) return;
        const absolute = href.startsWith('http') ? href : origin + href;
        let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`) as HTMLLinkElement | null;
        if (!el) {
          el = document.createElement('link');
          el.setAttribute('rel', 'alternate');
          el.setAttribute('hreflang', hreflang);
          document.head.appendChild(el);
        }
        el.setAttribute('href', absolute);
      };
      ensureLink('ro', alternates.ro);
      ensureLink('en', alternates.en);
      if (alternates.xDefault) ensureLink('x-default', alternates.xDefault);
    }
  }, [title, description, canonical, alternates, locale, robotsDirectives]);
}
