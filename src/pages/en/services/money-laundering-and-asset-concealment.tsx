import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MoneyLaunderingEn() {
  useSEO({
    title: "Money Laundering & Asset Concealment | Defense",
    description: "Defense in money laundering and asset concealment cases.",
    alternates: { en: "/en/services/money-laundering-and-asset-concealment", ro: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Money laundering and asset concealment", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/money-laundering-and-asset-concealment` : "/en/services/money-laundering-and-asset-concealment" },
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
            name: "Money laundering and asset concealment",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/money-laundering-and-asset-concealment` : "/en/services/money-laundering-and-asset-concealment",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Money laundering and asset concealment</h1>
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

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            Defense in AML cases requires a precise understanding of financial flows, KYC/monitoring obligations,
            reporting and seizure/recovery mechanisms. I build defense strategies based on the legality of evidence,
            procedural safeguards and pragmatic negotiation where appropriate.
          </p>
        </div>

        <div className="mt-6">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg">
              <Phone /> Call now
            </Button>
          </a>
        </div>

        {/* Key references */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Key references</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Law 129/2019 (AML/CFT) – KYC, risk-based measures, reporting duties</li>
              <li>Criminal Code provisions on laundering (where applicable)</li>
              <li>Guidance from the Romanian FIU and sector regulators</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
