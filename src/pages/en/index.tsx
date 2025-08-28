import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import Index from "../Index";

export default function EnIndex() {
  const { setLang } = useLanguage();
  
  useEffect(() => { 
    setLang("en");
    document.title = "Attorney Bogdan Lamatic - Criminal Defense | Bucharest";
  }, [setLang]);
  
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
            telephone: "+40 745 506 443",
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
      <Index />
    </>
  );
}
