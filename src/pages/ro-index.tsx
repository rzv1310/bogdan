import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import Index from "./Index";

export default function RoIndex() {
  const { setLang } = useLanguage();
  
  useEffect(() => { 
    setLang("ro");
    document.title = "Avocat Bogdan Lamatic - Avocat Drept Penal | București";
  }, [setLang]);
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Avocat Bogdan Lamatic",
            url:
              typeof window !== "undefined"
                ? window.location.origin
                : "https://avocatpenalbucuresti.ro",
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
            name: "Avocat Bogdan Lamatic",
            url:
              typeof window !== "undefined"
                ? window.location.origin
                : "https://avocatpenalbucuresti.ro",
            inLanguage: "ro-RO",
          }),
        }}
      />
      <Index />
    </>
  );
}