import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DrugPenaltiesChart from "@/components/charts/DrugPenaltiesChart";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
export default function DrugOffensesEn() {
  useSEO({
    keywords: "drug offenses lawyer romania, drug trafficking defense attorney, narcotics lawyer bucharest",
    title: "Drug trafficking lawyer Bucharest - DIICOT defense | Bogdan Lamatic",
    description: "Defense in drug trafficking/possession cases across Romania.",
    alternates: { en: "/en/services/drug-offenses", ro: "/servicii/cauze-penale-privind-droguri" , xDefault: "/servicii/cauze-penale-privind-droguri"},
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
              { "@type": "ListItem", position: 2, name: "Criminal cases regarding drugs", item: "https://avocatpenalbucuresti.ro/en/services/drug-offenses" },
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
            name: "Drug trafficking lawyer - Bucharest",
            description: "Defense in drug trafficking/possession cases across Romania.",
            url: "https://avocatpenalbucuresti.ro/en/services/drug-offenses",
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

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <Breadcrumb className="mb-4">
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
              <BreadcrumbPage>Criminal cases regarding drugs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-2xl font-semibold mb-4">Drug trafficking lawyer - Bucharest | Strategy and defense - DIICOT cases</h1>

        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            <span className="block"><strong>In drug cases, the first hours matter most.</strong></span>
            <span className="block">What you state at the hearing, how the search is carried out and how the substances are sampled and weighed can decide whether the case is closed or turns into a lengthy DIICOT trial.</span>
            <span className="block">Do not wait for the pre-trial arrest hearing to ask for help.</span>
          </p>
        </div>

        <ServiceHeroCta lang="en" ariaLabel="Call now" />

        <p className="mt-3 text-sm text-muted-foreground">
          5.0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> out of 27 Google reviews
        </p>
        <LawyerBioBlock path="/en/services/drug-offenses" lang="en" />

        <ServiceSubServices path="/en/services/drug-offenses" lang="en" />

        {/* Why acting fast matters */}
        <Card className="mt-12 md:mt-14 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Why it’s essential to act fast</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <p>
              I have defended clients in DIICOT investigations and court trials involving drug trafficking. Early defense
              can change the course of a case - from challenging unlawfully obtained evidence to negotiating favorable
              outcomes.
            </p>
          </CardContent>
        </Card>

        {/* The law */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">What is drug trafficking under Romanian law</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <p>
              Under Law no. 143/2000, trafficking includes producing, manufacturing, transporting, selling, distributing,
              and possessing drugs for the purpose of commercialization.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Trafficking</strong> - organized activity aimed at distribution.
              </li>
              <li>
                <strong>Possession for personal use</strong> - a distinct offense, generally with lower penalties.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <DrugPenaltiesChart title="Penalties for drug-related offenses"
            data={[
              { categorie: "Risk drugs", Minim: 2, Maxim: 7 },
              { categorie: "High-risk drugs", Minim: 7, Maxim: 15 },
            ]}
            unit="years"
            minLabel="Minimum"
            maxLabel="Maximum"
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
                                    "name": "Can I avoid prison if I had a small quantity?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "If it is proven to be for personal use, the penalty can be reduced or replaced with alternative measures."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "What should I do if DIICOT summons me for a hearing?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Contact your lawyer immediately and do not give statements without legal advice."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Can the legal qualification be changed from trafficking to possession?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, if there is no proof of intent to commercialize."
                                    }
                        }
            ]
}),
        }}
      />
        </div>

        {/* High-risk vs risk drugs */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">High-risk and risk drugs</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>High-risk</strong>: heroin, cocaine, LSD, methamphetamine - typically attract severe penalties (7-15 years).
              </li>
              <li>
                <strong>Risk</strong>: cannabis, ecstasy (MDMA), amphetamines - penalties usually 2-7 years.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* How I defend */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">How I defend</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-1">
              <li>Verifying legality of searches, interceptions and warrants</li>
              <li>Analyzing DIICOT files thoroughly (minutes, toxicology, surveillance)</li>
              <li>Identifying gaps in the accusation and requesting additional evidence</li>
              <li>Negotiating more favorable legal qualifications where possible</li>
              <li>Full representation at all court levels</li>
            </ul>
            <div className="pt-4">
              <a href="tel:+40316320183" aria-label="Call now">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> Call now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ul className="space-y-2">
              <li>
                <strong>Can I avoid prison if I had a small quantity?</strong> If it is proven to be for personal use, the penalty can be reduced or replaced with alternative measures.
              </li>
              <li>
                <strong>What should I do if DIICOT summons me for a hearing?</strong> Contact your lawyer immediately and do not give statements without legal advice.
              </li>
              <li>
                <strong>Can the legal qualification be changed from trafficking to possession?</strong> Yes, if there is no proof of intent to commercialize.
              </li>
            </ul>
          </CardContent>
        </Card>
        <RelatedServices current="/en/services/drug-offenses" lang="en" />

      </section>
    </>
  );
}
