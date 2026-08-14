import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSEO } from "@/hooks/useSEO";
import { Phone, Mail } from "lucide-react";

import RelatedServices from "@/components/RelatedServices";
import RelatedServices from "@/components/RelatedServices";
const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Sună acum" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - avocat spălare de bani`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

export default function SpalareDeBani() {
  useSEO({
    keywords: "avocat spalare de bani bucuresti, dosar spalare bani, ascundere bunuri, avocat confiscare bunuri",
    title: "Infracțiune spălare de bani | Ascundere de bunuri - avocat Bogdan Lamatic, București",
    description: "Apărare în dosare de spălare de bani și ascundere de bunuri.",
    alternates: {
      ro: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
      en: "/en/services/money-laundering-and-asset-concealment", xDefault: "/servicii/spalare-de-bani-si-ascundere-de-bunuri"
    },
    canonical: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
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
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
              { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/#servicii" },
              { "@type": "ListItem", position: 3, name: "Spălare de bani și ascundere de bunuri", item: "https://avocatpenalbucuresti.ro/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
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
            name: "Apărare în dosare de spălare de bani și ascundere de bunuri",
            description: "Apărare în dosare de spălare de bani și ascundere de bunuri.",
            url: "https://avocatpenalbucuresti.ro/servicii/spalare-de-bani-si-ascundere-de-bunuri",
            areaServed: ["RO", "EU"],
            availableLanguage: ["ro", "en"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Strada Colonel Stefan Stoika 22",
              addressLocality: "București",
              addressRegion: "Bucuresti",
              postalCode: "012244",
              addressCountry: "RO",
              url: "https://www.google.com/maps?cid=17818591254142574295"
            },
            hasMap: "https://www.google.com/maps?cid=17818591254142574295",
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 (31) 632 01 83" },
            telephone: "+40 (31) 632 01 83",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                        {
                                    "@type": "Question",
                                    "name": "Trebuie să existe o condamnare pentru fapta‑sursă?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Nu neapărat. E suficient să se dovedească faptul că bunurile provin dintr‑o infracțiune și că inculpatul cunoștea această proveniență. (referință)"
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Autorul faptei‑sursă poate fi acuzat și de spălare a banilor?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Da. Pentru art. 49 lit. a) și b) nu se cere ca făptuitorul să fie diferit; pentru lit. c) este necesar un terț."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Se pot ridica sechestrul și poprirea dacă paralizează activitatea?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Da. Instanța trebuie să respecte principiul proporționalității; potrivit modificărilor din 2025, măsurile pot fi contestate și restrânse dacă afectează disproporționat activitatea economică."
                                    }
                        }
            ]
}),
        }}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold mb-4">Infracțiune spălare de bani | Ascundere de bunuri - experiența mea ca avocat (Bogdan Lamatic, București)</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">Servicii</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dosare de spălare de bani și ascundere de bunuri</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Intro + CTA */}
        <section className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            Am ales să practic dreptul penal al afacerilor pentru că este unul dintre puținele domenii în care faptele, banii și intențiile se împletesc într-un mod care afectează direct destinele oamenilor.
          </p>
          <p>
            Fiecare dosar de „white‑collar crime" pe care îl preiau îmi confirmă că nu există două povești identice, iar drumul spre o soluție justă începe de la înțelegerea contextului legal și a responsabilităților morale ale celor implicați.
          </p>
          <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
            În calitate de avocat în Baroul București, specializat în spălare de bani și ascunderea de bunuri, vă împărtășesc câteva repere esențiale pentru a naviga prin legislația actuală și pentru a vă pregăti apărarea.
          </p>
                  <RelatedServices current="/servicii/spalare-de-bani-si-ascundere-de-bunuri" />

         <RelatedServices current="/servicii/spalare-de-bani-si-ascundere-de-bunuri" />
        