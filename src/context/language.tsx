import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getPrerenderLang, isPrerender } from "@/lib/ssr-head";

export type Lang = "ro" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function langFromPath(pathname: string): Lang | null {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  return null;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    // Build-time prerender: the URL decides the language (/en/* -> en, else ro).
    if (isPrerender) return getPrerenderLang();
    // On the client, the URL is authoritative when it is language-specific.
    if (typeof window !== "undefined") {
      const fromUrl = langFromPath(window.location.pathname);
      if (fromUrl) return fromUrl;
      // Romanian routes (everything outside /en) are always Romanian.
      return "ro";
    }
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "ro" || stored === "en") return stored;
    const nav = typeof navigator !== "undefined" ? navigator.language : "ro";
    return nav?.toLowerCase().startsWith("ro") ? "ro" : "en";
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

/** Keeps the language in sync with the current URL on client-side navigation. */
export function useSyncLangWithPath(pathname: string) {
  const { lang, setLang } = useLanguage();
  useEffect(() => {
    const next: Lang = langFromPath(pathname) ?? "ro";
    if (next !== lang) setLang(next);
  }, [pathname, lang, setLang]);
}


export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
