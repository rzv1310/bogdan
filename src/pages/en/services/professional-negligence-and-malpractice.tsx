import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MalpracticeEn() {
  useSEO({
    title: "Medical malpractice lawyer | Attorney Bogdan Lamatic | Bucharest | Negligence in service",
    description: "Defense and representation in medical malpractice cases.",
    alternates: { en: "/en/services/professional-negligence-and-malpractice", ro: "/servicii/neglijenta-profesionala-si-malpraxis" },
    locale: "en_US",
    canonical: "/en/services/professional-negligence-and-malpractice",
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
              { "@type": "ListItem", position: 2, name: "Professional negligence and malpractice", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/professional-negligence-and-malpractice` : "/en/services/professional-negligence-and-malpractice" },
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
            name: "Medical malpractice lawyer | Attorney Bogdan Lamatic | Bucharest | Negligence in service",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/professional-negligence-and-malpractice` : "/en/services/professional-negligence-and-malpractice",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Medical malpractice lawyer | Attorney Bogdan Lamatic | Bucharest | Negligence in service</h1>
        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I am attorney Bogdan Lamatic, with strong practice in criminal law (white-collar, service offenses) and
            litigation with medical components (malpractice, civil and criminal liability). I represent both defendants
            and injured parties, including complex files with medico-legal expertise and malpractice committees.
          </p>
          <p>
            Recognized by Legal 500 as “Next Generation Partner” (White-Collar Crime) 2021–2024.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="premium" size="lg" aria-label="Call now for malpractice advice">
            <a href="tel:+40745506443">
              <Phone className="mr-2 h-4 w-4" /> Call now
            </a>
          </Button>
        </div>

        <div className="mt-6">
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
                <BreadcrumbPage>Professional negligence and malpractice</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* What malpractice means. Legal basis */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">What medical malpractice means. Legal basis</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Legal definition: malpractice is the professional error in the medical/pharmaceutical act that causes damage
              to the patient and attracts civil liability of the medical staff and/or the provider. (Law 95/2006)
            </p>
            <div>
              <h3 className="text-xl font-semibold">Who is liable?</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  <strong>Medical staff</strong> – negligence, imprudence or insufficient knowledge, including breach of
                  confidentiality/consent.
                </li>
                <li>
                  <strong>Healthcare unit</strong> – nosocomial infections, non-compliant devices/materials, lack of insurance, etc.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* When it becomes criminal */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">When does it become criminal</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Bodily injury by negligence – art. 196 CP</strong>
              </li>
              <li>
                <strong>Manslaughter by negligence – art. 192 CP</strong>
              </li>
              <li>
                <strong>Negligence in service – art. 298 CP</strong>; extension to private sector via art. 308 CP.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* How I work for you */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">How I work for you</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-5">
            <div>
              <h3 className="text-xl font-semibold">If you are a patient/family (injured party)</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li><strong>Legal & medical audit:</strong> identify deviation from professional standard and document causality.</li>
                <li><strong>Dual channels:</strong> malpractice committee procedure and, where applicable, criminal complaint.</li>
                <li><strong>Damages:</strong> activate insurer and follow full compensation (treatment, income, moral damages).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">If you are a doctor/clinic (defense)</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li><strong>Standard of care & competence</strong> delimitation</li>
                <li><strong>Managing investigations</strong> – responses to committees/inspectorates, coherent positions, confidentiality</li>
                <li><strong>Criminal strategy</strong> – delimiting professional fault from inherent medical risks</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button asChild variant="premium" aria-label="Call for malpractice consultation">
                <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Call now</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
