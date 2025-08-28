import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "ro" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
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

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
