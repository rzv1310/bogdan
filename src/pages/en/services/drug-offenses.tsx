import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

export default function DrugOffensesEn() {
  useSEO({
    title: "Drug Offenses Defense | DIICOT cases",
    description: "Defense in drug trafficking/possession cases across Romania.",
    alternates: { en: "/en/services/drug-offenses", ro: "/servicii/cauze-penale-privind-droguri" },
    locale: "en_US",
    canonical: "/en/services/drug-offenses",
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
                name: "Drug offenses",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en/services/drug-offenses`
                    : "/en/services/drug-offenses",
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
            name: "Drug offenses",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en/services/drug-offenses`
                : "/en/services/drug-offenses",
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
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Drug offenses</h1>
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
              <BreadcrumbPage>Drug offenses</BreadcrumbPage>
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
