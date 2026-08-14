import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import { useSEO } from "@/hooks/useSEO";

export default function EnIndex() {
  const { setLang } = useLanguage();
  useEffect(() => { setLang("en"); }, [setLang]);

  useSEO({
    title: "Attorney Bogdan Lamatic - Criminal Defense Lawyer | Bucharest",
    description: "Defense in white-collar crime, corruption, road traffic, crypto, malpractice.",
    canonical: "/en",
    alternates: { en: "/en", ro: "/", xDefault: "/" },
    locale: "en_US",
  });

  return <Outlet />;
}
