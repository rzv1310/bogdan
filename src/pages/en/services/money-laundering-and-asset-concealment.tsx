import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import RelatedServices from "@/components/RelatedServices";
export default function MoneyLaunderingEn() {
  useSEO({
    keywords: "money laundering lawyer romania, asset concealment defense, aml defense attorney",
    title: "Money laundering & asset concealment | Defense - Bogdan Lamatic",
    description: "Defense in money laundering and asset concealment cases.",
    alternates: { en: "/en/services/money-laundering-and-asset-concealment", ro: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" , xDefault: "/servicii/spalare-de-bani-si-ascundere-de-bunuri"},
    locale: "en_US",
    canonical: "/en/services/money-laundering-and-asset-concealment",
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
              { "@type": "ListItem", position: 2, name: "Money laundering and asset concealment", item: "https://avocatpenalbucuresti.ro/en/services/money-laundering-and-asset-concealment" },
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
            name: "Defense in money laundering and asset concealment",
            description: "Defense in money laundering and asset concealment cases.",
            url: "https://avocatpenalbucuresti.ro/en/services/money-laundering-and-asset-concealment",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
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
                                    "name": "Is a conviction for the predicate offense required?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Not necessarily. It suffices to prove assets come from a criminal offense (not a contravention) and that the defendant knew this. (reference)"
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Can the author of the predicate also be charged with laundering?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes. For art. 49 (a) and (b), the offender need not be a different person; only for (c) (acquiring/using) must it be a third party."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Can seizures and garnishments be lifted if they paralyze activity?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes. Courts must respect proportionality; under the 2025 amendments, measures can be challenged and narrowed when they disproportionately affect economic activity."
                                    }
                        }
            ]
}),
        }}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold mb-4">Money laundering offense | Asset concealment – my experience as a lawyer (Bogdan Lamatic, Bucharest)</h1>
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
                <BreadcrumbPage>Money laundering and asset concealment</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Intro + CTA */}
        <section className="mt-4 border border-accent rounded-md p-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40316320183" aria-label="Call now">
                <Phone className="mr-2" /> Call now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:contact@avocatpenalbucuresti.ro" aria-label="Email us">
                <Mail className="mr-2" /> Email us
              </a>
            </Button>
          </div>
          <div className="mt-3 space-y-3 text-base leading-relaxed">
            <p>
              I chose to practice business criminal law because it is one of the few fields where facts, money and intent intertwine in a way that directly shapes people’s lives.
            </p>
            <p>
              Every white‑collar crime case I take confirms that no two stories are alike, and the path to a fair outcome starts with understanding the legal context and the moral responsibilities of those involved.
            </p>
            <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
              As a lawyer with the Bucharest Bar, specialized in money laundering and asset concealment, I share key landmarks to navigate the current legislation and prepare your defense.
            </p>
          </div>
                  <RelatedServices current="/en/services/money-laundering-and-asset-concealment" lang="en" />

        