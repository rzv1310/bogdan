import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function WorkplaceLiabilityEn() {
  useSEO({
    title: "Criminal liability for incidents at the workplace | Defense",
    description: "Defense in workplace incidents with criminal consequences.",
    alternates: { en: "/en/services/workplace-criminal-liability", ro: "/servicii/raspundere-penala-incidente-locul-de-munca" },
    locale: "en_US",
    canonical: "/en/services/workplace-criminal-liability",
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
              { "@type": "ListItem", position: 2, name: "Criminal liability for incidents at the workplace", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/workplace-criminal-liability` : "/en/services/workplace-criminal-liability" },
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
            name: "Criminal liability for incidents at the workplace",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/workplace-criminal-liability` : "/en/services/workplace-criminal-liability",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Criminal liability for incidents at the workplace</h1>
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
              <BreadcrumbPage>Criminal liability for incidents at the workplace</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I defend companies and individuals in incidents at work that may attract criminal liability: work accidents,
            HSE non-compliance, negligent supervision, violations of safety procedures, reporting and documentation
            failures.
          </p>
          <p>
            The approach combines criminal defense with civil exposure management and practical remediation where needed.
          </p>
        </div>

        <div className="mt-6">
          <a href="tel:+40745506443" aria-label="Call now">
            <Button variant="premium" size="lg">
              <Phone /> Call now
            </Button>
          </a>
        </div>

        {/* Typical situations */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Typical situations</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>Accidents with injuries or fatalities at work</li>
              <li>Breach of health and safety protocols or missing training</li>
              <li>Negligence in service (public entities) / extension to private via art. 308 CP</li>
              <li>Liability of employer and/or contractors; documentation gaps</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
