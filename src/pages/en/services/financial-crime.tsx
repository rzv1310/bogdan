import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import EconomicCrimesChart from "@/components/charts/EconomicCrimesChart";

export default function FinancialCrimeEn() {
  useSEO({
    title: "Economic crime lawyer | White-collar specialist | Bogdan Lamatic, Bucharest",
    description: "Defense in fraud, embezzlement, tax evasion, AML cases.",
    alternates: { en: "/en/services/financial-crime", ro: "/servicii/criminalitate-economica" },
    locale: "en_US",
    canonical: "/en/services/financial-crime",
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
                name: "Economic crime",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en/services/financial-crime`
                    : "/en/services/financial-crime",
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
            name: "Economic crime lawyer | White-collar specialist",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en/services/financial-crime`
                : "/en/services/financial-crime",
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
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Economic crime lawyer | White-collar specialist | Bogdan Lamatic</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/en">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">Services</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Economic crime</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40745506443" aria-label="Call now">
                <Phone className="mr-2" /> Call now
              </a>
            </Button>
          </div>
        </header>

        {/* Intro */}
        <section className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I am Bogdan Lamatic, attorney at the Bucharest Bar, with 17+ years of criminal law practice and a strong
            track record in white-collar crime: tax evasion, money laundering, fraud, embezzlement, corruption and
            abuse of office. I represent both individuals and companies in complex investigations and trials, including
            before the High Court of Cassation and Justice.
          </p>
          <p>
            Recognized by Legal 500 for five consecutive years as a Next Generation Partner (White-Collar Crime), I build
            tailored, evidence-driven strategies that focus on procedural fairness, challenging unlawful evidence, and
            minimizing reputational impact.
          </p>
          <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
            Whether you are under investigation, indicted, or a victim in an economic crime case, my goal is to secure a
            solid, discreet, and result-oriented outcome.
          </p>
        </section>

        {/* What cases I handle */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Areas of defense in economic crime</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Fraud, deceit, and fraudulent financial operations</li>
              <li>Embezzlement, abuse of office, conflict of interest</li>
              <li>Bribery, bribery offering, influence peddling, buying influence</li>
              <li>Tax evasion and customs offenses</li>
              <li>Money laundering and asset concealment</li>
              <li>Banking, corporate, accounting and securities offenses</li>
              <li>Manipulation of public tenders and misuse of EU funds</li>
            </ul>
          </CardContent>
        </Card>

        {/* Why a specialist matters */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Why you need a white-collar specialist</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Economic crime cases require not only advanced criminal law knowledge but also a deep understanding of
              financial flows, accounting, tax, procurement rules and corporate governance. Defense hinges on correlating
              technical documentation with the strict requirements of criminal procedure.
            </p>
            <p>
              I protect your rights from the first procedural step, scrutinize every piece of evidence, raise procedural
              objections where appropriate, and negotiate pragmatic outcomes when they serve your best interest.
            </p>
          </CardContent>
        </Card>

        {/* Quick legal references */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Key legal references (Romania)</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Criminal Code: bribery (art. 289-292), embezzlement (art. 295), abuse of office (art. 297), fraud (art. 244)</li>
              <li>Law 241/2005 on tax evasion</li>
              <li>Law 129/2019 (AML/CFT) and related guidance</li>
            </ul>
          </CardContent>
        </Card>

        {/* DIICOT chart */}
        <div className="mt-8">
          <EconomicCrimesChart
            title="Economic and financial crime and smuggling cases (DIICOT)"
            subtitle="Public summary data from DIICOT reports - 2023 vs 2024"
            legendLabels={{ Active: "Active cases", Pasive: "Passive cases", Total: "Total" }}
            downloadAriaLabel="Download chart as PNG"
            filename="diicot-economic-crimes-2023-2024-en.png"
          />
        </div>

        <div className="mt-8">
          <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
            <a href="tel:+40745506443" aria-label="Call now for a case review">
              <Phone className="mr-2" /> Request a quick case review
            </a>
          </Button>
        </div>
      </main>
    </>
  );
}
