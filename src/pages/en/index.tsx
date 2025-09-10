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
    alternates: { en: "/en", ro: "/" },
    locale: "en_US",
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Attorney Bogdan Lamatic",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en`
                : "/en",
            telephone: "+40 (31) 632 01 83",
            areaServed: ["RO", "EU"],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Attorney Bogdan Lamatic",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en`
                : "/en",
            inLanguage: "en-US",
          }),
        }}
      />
      <Outlet />
    </>
  );
}
