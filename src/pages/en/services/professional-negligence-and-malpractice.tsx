import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
export default function MalpracticeEn() {
  useSEO({
    keywords: "medical malpractice lawyer romania, professional negligence attorney, malpractice defense",
    title: "Medical malpractice lawyer | Attorney Bogdan Lamatic | Bucharest | Negligence in service",
    description: "Defense and representation in medical malpractice cases.",
    alternates: { en: "/en/services/professional-negligence-and-malpractice", ro: "/servicii/neglijenta-profesionala-si-malpraxis" , xDefault: "/servicii/neglijenta-profesionala-si-malpraxis"},
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
              { "@type": "ListItem", position: 2, name: "Professional negligence and malpractice", item: "https://avocatpenalbucuresti.ro/en/services/professional-negligence-and-malpractice" },
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
            description: "Defense and representation in medical malpractice cases.",
            url: "https://avocatpenalbucuresti.ro/en/services/professional-negligence-and-malpractice",
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
                                    "name": "Can I claim damages without a criminal trial?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes. Civil liability can be pursued separately (Malpractice Committee + civil action), independently of criminal proceedings (Law 95/2006)."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "What is the limitation period?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Generally 3 years for civil malpractice; for criminal offenses (e.g., arts. 192/196 CP) criminal limitation periods apply."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "What if the unit/doctor has no insurance?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "It is a sanctionable breach; civil liability remains and damages can be pursued directly."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "When does it become “negligence in service” (criminal)?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "When a public official breaches a legal duty causing damage/rights violation; for the private sector, art. 308 CP extends the rules with reduced limits."
                                    }
                        }
            ]
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
              <BreadcrumbLink href="/en/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Professional negligence and malpractice</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-2xl font-semibold mb-4">Medical malpractice lawyer | Attorney Bogdan Lamatic | Bucharest | Negligence in service</h1>
        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            <span className="block"><strong>In malpractice cases, the first days matter most.</strong></span>
            <span className="block">The medical file, the medico-legal expert reports and the statements given at the beginning of the investigation can decide whether criminal liability is established or not.</span>
            <span className="block">Do not wait for the indictment to ask for help.</span>
          </p>
        </div>

        <ServiceHeroCta lang="en" ariaLabel="Call now for malpractice advice" />

        <LawyerBioBlock path="/en/services/professional-negligence-and-malpractice" lang="en" />

        <ServiceSubServices path="/en/services/professional-negligence-and-malpractice" lang="en" />

        {/* What malpractice means. Legal basis */}
        <Card className="mt-12 md:mt-14 border-accent">
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
                  <strong>Medical staff</strong> - negligence, imprudence or insufficient knowledge, including breach of
                  confidentiality/consent.
                </li>
                <li>
                  <strong>Healthcare unit</strong> - nosocomial infections, non-compliant devices/materials, lack of insurance, etc.
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
                <strong>Bodily injury by negligence - art. 196 CP</strong>
              </li>
              <li>
                <strong>Manslaughter by negligence - art. 192 CP</strong>
              </li>
              <li>
                <strong>Negligence in service - art. 298 CP</strong>; extension to private sector via art. 308 CP.
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
                <li><strong>Managing investigations</strong> - responses to committees/inspectorates, coherent positions, confidentiality</li>
                <li><strong>Criminal strategy</strong> - delimiting professional fault from inherent medical risks</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Call for malpractice consultation">
                <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Call now</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Can I claim damages without a criminal trial?</strong> Yes. Civil liability can be pursued separately (Malpractice Committee + civil action), independently of criminal proceedings (Law 95/2006).
              </li>
              <li>
                <strong>What is the limitation period?</strong> Generally 3 years for civil malpractice; for criminal offenses (e.g., arts. 192/196 CP) criminal limitation periods apply.
              </li>
              <li>
                <strong>What if the unit/doctor has no insurance?</strong> It is a sanctionable breach; civil liability remains and damages can be pursued directly.
              </li>
              <li>
                <strong>When does it become “negligence in service” (criminal)?</strong> When a public official breaches a legal duty causing damage/rights violation; for the private sector, art. 308 CP extends the rules with reduced limits.
              </li>
            </ol>
          </CardContent>
        </Card>
        <RelatedServices current="/en/services/professional-negligence-and-malpractice" lang="en" />

      </section>
    </>
  );
}
