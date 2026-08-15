import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RoadAccidentsChart from "@/components/charts/RoadAccidentsChart";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
export default function RoadTrafficEn() {
  useSEO({
    keywords: "road traffic offenses lawyer romania, car accident criminal defense, negligent homicide attorney",
    title: "Road traffic offenses with/without victims | Road accident lawyer - Bogdan Lamatic, Bucharest",
    description: "DUIs, no license, leaving the scene; accidents with/without victims.",
    alternates: { en: "/en/services/road-traffic-offenses", ro: "/servicii/infractiuni-rutiere-cu-victime" , xDefault: "/servicii/infractiuni-rutiere-cu-victime"},
    locale: "en_US",
    canonical: "/en/services/road-traffic-offenses",
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
              { "@type": "ListItem", position: 2, name: "Road traffic offenses with victims", item: "https://avocatpenalbucuresti.ro/en/services/road-traffic-offenses" },
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
            name: "Road traffic offenses with victims",
            description: "DUIs, no license, leaving the scene; accidents with/without victims.",
            url: "https://avocatpenalbucuresti.ro/en/services/road-traffic-offenses",
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
                      <BreadcrumbLink href="/en/services">Services</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Road traffic offenses with victims</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
        <h1 className="text-2xl font-semibold mb-4">Road traffic offenses with/without victims | Road accident lawyer - Bogdan Lamatic, Bucharest</h1>
        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p className="text-foreground">
            <span className="block"><strong>After a road accident, the first hours matter most.</strong></span>
            <span className="block">Blood alcohol testing, the on-site report and the first statements you give can decide whether the case is closed or turns into a lengthy trial.</span>
            <span className="block">Do not wait for the first court hearing to ask for help.</span>
          </p>
        </div>

        <ServiceHeroCta lang="en" ariaLabel="Call now for a traffic case consultation" />

        <p className="mt-3 text-sm text-muted-foreground">
          <span className="text-yellow-400" aria-hidden="true">★★★★★</span> 5.0 out of 27 Google reviews
        </p>
        <ServiceSubServices path="/en/services/road-traffic-offenses" lang="en" />

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I am Bogdan Lamatic, a lawyer with the Bucharest Bar since 2007, with over 18 years of experience in criminal law. I defend clients in traffic offenses, from matters without victims to accidents with bodily injury or death.
          </p>
          <p>
            I am recognized by Legal 500 as a "Next Generation Partner" (White-Collar Crime) and have represented clients before all prosecutors' offices and courts of all levels, including the High Court of Cassation and Justice.
          </p>
        </div>



        {/* Why choose me */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Why choose me for a traffic case?</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-2">
            <ul className="list-disc pl-6 space-y-1">
              <li>Rapid intervention in investigation phase (requests, evidence, assisted hearing)</li>
              <li>Challenging technical evidence (breathalyzer, biological samples, toxicology, forensic reports)</li>
              <li>Pragmatic solutions: requalification, waiver of prosecution, deferred penalty, plea agreement where possible</li>
              <li>Full approach: criminal defense + civil claims or protection of client’s assets</li>
            </ul>
          </CardContent>
        </Card>

        {/* Offenses without victims */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Offenses without victims</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ul className="list-disc pl-6 space-y-2">
              <li>Driving without license - art. 335 CP</li>
              <li>Driving under the influence of alcohol or drugs - art. 336 CP</li>
              <li>Refusal to provide biological samples - art. 337 CP</li>
              <li>Unregistered vehicle/false plate - art. 334 CP</li>
            </ul>
          </CardContent>
        </Card>

        {/* Offenses with victims */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Offenses with victims</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ul className="list-disc pl-6 space-y-2">
              <li>Leaving the scene of an accident - art. 338 CP</li>
              <li>Bodily injury by negligence - art. 196 CP</li>
              <li>Manslaughter by negligence - art. 192 CP</li>
            </ul>
          </CardContent>
        </Card>

        {/* Work plan */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Work plan in 4 steps</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-4">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Legal & technical audit</strong> - reviewing warrants, toxicology, chain of custody, devices, video
                evidence; requesting expert reports.
              </li>
              <li>
                <strong>Urgent measures</strong> - complaints against unlawful acts, lifting restrictions where possible, protecting
                assets.
              </li>
              <li>
                <strong>Active defense</strong> - procedural challenges, defensive evidence; plea agreement when advantageous.
              </li>
              <li>
                <strong>Civil component</strong> - when representing victims, we quantify damages rigorously; when defending suspects,
                we limit liability and seek amicable repair where appropriate.
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ul className="space-y-2">
              <li>
                <strong>Is 0.80 g/l alcohol in blood always a crime?</strong> Yes, above the threshold it falls under art. 336(1); under the threshold we discuss contravention (Road Code). For drugs, the biologically/toxicologically confirmed influence matters.
              </li>
              <li>
                <strong>What if I refuse to provide biological samples?</strong> It is a separate offense (art. 337), even if the BAC would have been below the threshold.
              </li>
              <li>
                <strong>When is leaving the scene not an offense?</strong> The law provides limited situations (e.g., transporting the injured with immediate return).
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8">
          <RoadAccidentsChart
            title="Serious road accidents and their consequences in 2022 and 2023"
            data={[
              { categorie: "Deaths", an2022: 1633, an2023: 1545 },
              { categorie: "Seriously injured", an2022: 3695, an2023: 3537 },
              { categorie: "Slightly injured", an2022: 2076, an2023: 2172 },
            ]}
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
                                    "name": "Is 0.80 g/l alcohol in blood always a crime?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, above the threshold it falls under art. 336(1); under the threshold we discuss contravention (Road Code). For drugs, the biologically/toxicologically confirmed influence matters."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "What if I refuse to provide biological samples?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "It is a separate offense (art. 337), even if the BAC would have been below the threshold."
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "When is leaving the scene not an offense?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "The law provides limited situations (e.g., transporting the injured with immediate return)."
                                    }
                        }
            ]
}),
        }}
      />
        </div>
        <RelatedServices current="/en/services/road-traffic-offenses" lang="en" />

      </section>
    </>
  );
}
