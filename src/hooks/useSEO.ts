import { useEffect } from "react";
import { collectHead, isPrerender } from "@/lib/ssr-head";

interface SEOOptions {
  title?: string;
  description?: string;
  // Page-specific meta keywords; overrides the sitewide default in index.html
  keywords?: string;
  canonical?: string;
  // Absolute or path-only URLs; if path-only, origin will be prefixed automatically
  alternates?: { ro?: string; en?: string; xDefault?: string };
  // Open Graph locale, e.g. "ro_RO" | "en_GB" | "en_US"
  locale?: string;
  // Meta robots directives for search engine optimization
  robotsDirectives?: string;
  // Schema.org structured data to inject into <head>
  schemas?: object[];
}

export function useSEO({ title, description, keywords, canonical, alternates, locale, robotsDirectives, schemas }: SEOOptions) {
  // Build-time prerender: report the metadata so it can be written into the
  // static HTML head. No-op in the browser.
  if (isPrerender) {
    collectHead({ title, description, keywords, canonical, alternates, locale, robotsDirectives, schemas });
  }

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

    if (keywords) {
      let kw = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!kw) {
        kw = document.createElement('meta');
        kw.setAttribute('name', 'keywords');
        document.head.appendChild(kw);
      }
      kw.setAttribute('content', keywords);
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

    // Schema.org structured data
    if (schemas && schemas.length > 0) {
      // Remove existing schema scripts that we manage
      const existingSchemas = document.head.querySelectorAll('script[type="application/ld+json"][data-managed="true"]');
      existingSchemas.forEach(el => el.remove());

      // Inject new schemas
      schemas.forEach((schema, index) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-managed', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, alternates, locale, robotsDirectives, schemas]);
}
