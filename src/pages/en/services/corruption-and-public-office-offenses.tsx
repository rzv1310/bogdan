import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import MitaBarChart from "@/components/charts/MitaBarChart";

export default function CorruptionPublicOfficeEn() {
  useSEO({
    title: "Corruption offenses and acts related to the exercise of public office – Attorney Bogdan Lamatic | Bucharest",
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
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Corruption offenses and acts related to the exercise of public office", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/corruption-and-public-office-offenses` : "/en/services/corruption-and-public-office-offenses" },
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
            name: "Corruption offenses and acts related to the exercise of public office – Attorney Bogdan Lamatic | Bucharest",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/corruption-and-public-office-offenses` : "/en/services/corruption-and-public-office-offenses",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Corruption offenses and acts related to the exercise of public office – Attorney Bogdan Lamatic | Bucharest</h1>
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
              <BreadcrumbPage>Corruption offenses and acts related to the exercise of public office</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I am a pleading lawyer in Bucharest since 2007, coordinating defense in corruption and service-related cases –
            from internal investigation to final verdict.
          </p>
          <p>
            Recommended by Legal 500 as a Next Generation Partner (White-Collar Crime) 2021–2024, my work focuses on
            rigorous defense and measurable results in high-stakes matters.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="premium" size="lg" aria-label="Call now for anti-corruption advice">
            <a href="tel:+40745506443">
              <Phone className="mr-2 h-4 w-4" /> Call now
            </a>
          </Button>
          <Button variant="premium" size="lg" className="border border-hero-foreground">
            <Phone /> Call now
          </Button>
        </div>

        {/* Definitions & framework */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">What counts as corruption vs service offenses</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <div>
              <p className="font-medium">Corruption (Criminal Code Chapter I)</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Bribery (art. 289)</li>
                <li>Bribery offering (art. 290) – non-punishable if self-reported before investigation starts</li>
                <li>Influence peddling (art. 291)</li>
                <li>Buying influence (art. 292)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Service offenses (Criminal Code Chapter II)</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Embezzlement (art. 295)</li>
                <li>Abuse of office (art. 297) – after CCR case law, requires breach of law</li>
                <li>Conflict of interest (art. 301)</li>
                <li>Art. 308 – extends to persons assimilated to public officials</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Special framework</p>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>Law 78/2000 (special anti-corruption provisions)</li>
                <li>GEO 43/2002 (DNA competence)</li>
                <li>Whistleblowers Law 361/2022; Integrity Law 176/2010 (ANI)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How I defend */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">How I defend your case</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-2">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Rapid assessment of legal qualification and competence (DNA/prosecutor)</strong> – checking typicity and
                competence thresholds.
              </li>
              <li>
                <strong>Sensitive evidence strategy</strong> – challenging legality of authorizations, chain of custody; using causes of
                non-punishment where applicable.
              </li>
              <li>
                <strong>Service-offense defense per CCR jurisprudence</strong> – strict requirement of breach of law for abuse of office.
              </li>
              <li>
                <strong>Reputation & preventive measures</strong> – for public figures, companies and institutions (internal investigation,
                compliance remediation, cooperation with DNA/ANI).
              </li>
            </ul>
            <div className="pt-2">
              <Button asChild variant="premium" size="lg" aria-label="Call for a quick consultation">
                <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Call now</a>
              </Button>
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
                <strong>I was offered a "tip". What should I do?</strong> Do not accept. If you have offered money under pressure, we immediately discuss the opportunity of self-reporting (art. 290(3)).
              </li>
              <li>
                <strong>My case is with the DNA. Does the "amount" matter?</strong> Competence may depend on the nature of the offense and criteria in GEO 43/2002; we check your exact situation.
              </li>
              <li>
                <strong>I hold a management role in a state-owned company. Does art. 308 apply to me?</strong> Yes, the rule extends to assimilated persons – we analyze your concrete duties.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <MitaBarChart
            title="Defendants sent to trial for bribery / offering a bribe (arts. 289–290 CC), 2023–2024"
            subtitle="Official data from the Public Ministry annual reports."
            labels={{ luare: "Bribery (art. 289)", dare: "Offering a bribe (art. 290)" }}
            downloadAriaLabel="Download chart as PNG"
            filename="bribery-defendants-2023-2024-en.png"
          />
        </div>
      </section>
    </>
  );
}
