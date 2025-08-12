import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DrugPenaltiesChart from "@/components/charts/DrugPenaltiesChart";

export default function DrugOffensesEn() {
  useSEO({
    title: "Criminal cases regarding drugs | DIICOT cases",
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
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Criminal cases regarding drugs", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/drug-offenses` : "/en/services/drug-offenses" },
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
            name: "Criminal cases regarding drugs",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/drug-offenses` : "/en/services/drug-offenses",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Criminal cases regarding drugs – strategy and defense</h1>
        <p className="mt-2 text-muted-foreground">by Bogdan Lamatic, criminal defense and white-collar lawyer</p>

        <div className="mt-4">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg">
              <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
              Call now: +40 745 506 443
            </Button>
          </a>
        </div>

        <div className="mt-4">
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
                <BreadcrumbPage>Criminal cases regarding drugs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Why acting fast matters */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">Why it’s essential to act fast</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <p>
              I have defended clients in DIICOT investigations and court trials involving drug trafficking. Early defense
              can change the course of a case – from challenging unlawfully obtained evidence to negotiating favorable
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
                <strong>Trafficking</strong> – organized activity aimed at distribution.
              </li>
              <li>
                <strong>Possession for personal use</strong> – a distinct offense, generally with lower penalties.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <DrugPenaltiesChart />
        </div>

        {/* High-risk vs risk drugs */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold">High-risk and risk drugs</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>High-risk</strong>: heroin, cocaine, LSD, methamphetamine – typically attract severe penalties (7–15 years).
              </li>
              <li>
                <strong>Risk</strong>: cannabis, ecstasy (MDMA), amphetamines – penalties usually 2–7 years.
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
              <a href="tel:+40745506443" aria-label="Call now">
                <Button variant="premium" size="lg">
                  <Phone /> Call now
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
