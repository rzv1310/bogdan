import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import { useSEO } from "@/hooks/useSEO";

export default function EnIndex() {
  const { setLang } = useLanguage();
  useEffect(() => { setLang("en"); }, [setLang]);

  useSEO({
    title: "Criminal Defense Lawyer in Bucharest, Romania | Bogdan Lamatic",
    description: "Criminal defense lawyer in Bucharest, Romania. Strategic defense in white-collar crime, corruption, road traffic, crypto and malpractice cases.",
    canonical: "/en",
    alternates: { en: "/en", ro: "/", xDefault: "/" },
    locale: "en_US",
  });

  return <Outlet />;
}
