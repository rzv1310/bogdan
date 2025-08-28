import * as React from "react";

export type Lang = "ro" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Fallback if React hooks are not available
  if (!React.useState || !React.useEffect || !React.useMemo) {
    console.error('React hooks not available in LanguageProvider');
    return React.createElement('div', {}, children);
  }

  const [lang, setLang] = React.useState<Lang>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "ro" || stored === "en") return stored;
    const nav = typeof navigator !== "undefined" ? navigator.language : "ro";
    return nav?.toLowerCase().startsWith("ro") ? "ro" : "en";
  });

  React.useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    } catch {}
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang }), [lang]);

  return React.createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}