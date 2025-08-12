import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function CorruptionPublicOfficeEn() {
  useSEO({
    title: "Corruption & Public Office Offenses | Defense",
    description: "Bribery, influence peddling, abuse of office. DNA cases.",
    alternates: { en: "/en/services/corruption-and-public-office-offenses", ro: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice" },
    locale: "en_US",
    canonical: "/en/services/corruption-and-public-office-offenses",
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en`
                    : "/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Corruption and public office offenses",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en/services/corruption-and-public-office-offenses`
                    : "/en/services/corruption-and-public-office-offenses",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Corruption and public office offenses",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en/services/corruption-and-public-office-offenses`
                : "/en/services/corruption-and-public-office-offenses",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: {
              "@type": "Person",
              name: "Bogdan Lamatic",
              telephone: "+40 745 506 443",
            },
            telephone: "+40 745 506 443",
          }),
        }}
      />
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Corruption and public office offenses</h1>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/en">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">Services</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Corruption and public office offenses</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mt-6">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg"><Phone /> Call now</Button>
          </a>
        </div>
      </section>
    </>
  );
}
