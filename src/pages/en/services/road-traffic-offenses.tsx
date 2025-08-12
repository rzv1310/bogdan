import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RoadAccidentsChart from "@/components/charts/RoadAccidentsChart";

export default function RoadTrafficEn() {
  useSEO({
    title: "Road Traffic Offenses | Defense & Victim representation",
    description: "DUIs, no license, leaving the scene; accidents with/without victims.",
    alternates: { en: "/en/services/road-traffic-offenses", ro: "/servicii/infractiuni-rutiere-cu-victime" },
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
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Road traffic offenses", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/road-traffic-offenses` : "/en/services/road-traffic-offenses" },
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
            name: "Road traffic offenses",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/road-traffic-offenses` : "/en/services/road-traffic-offenses",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Road traffic offenses</h1>
        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I am attorney Bogdan Lamatic (Bucharest Bar, since 2007). I defend clients in traffic offenses – from matters
            without victims to accidents with bodily injury or death.
          </p>
          <p>
            I have represented clients before all courts and prosecutors’ offices and received repeated recognition in the
            Legal 500 guide (White-Collar Crime) for rigorous strategy and defense.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="premium" size="lg" aria-label="Call now for a traffic case consultation">
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
                <BreadcrumbPage>Road traffic offenses</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
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
              <li>Driving without license – art. 335 CP</li>
              <li>Driving under the influence of alcohol or drugs – art. 336 CP</li>
              <li>Refusal to provide biological samples – art. 337 CP</li>
              <li>Unregistered vehicle/false plate – art. 334 CP</li>
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
              <li>Leaving the scene of an accident – art. 338 CP</li>
              <li>Bodily injury by negligence – art. 196 CP</li>
              <li>Manslaughter by negligence – art. 192 CP</li>
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
                <strong>Legal & technical audit</strong> – reviewing warrants, toxicology, chain of custody, devices, video
                evidence; requesting expert reports.
              </li>
              <li>
                <strong>Urgent measures</strong> – complaints against unlawful acts, lifting restrictions where possible, protecting
                assets.
              </li>
              <li>
                <strong>Active defense</strong> – procedural challenges, defensive evidence; plea agreement when advantageous.
              </li>
              <li>
                <strong>Civil component</strong> – when representing victims, we quantify damages rigorously; when defending suspects,
                we limit liability and seek amicable repair where appropriate.
              </li>
            </ol>
          </CardContent>
        </Card>

        <div className="mt-8">
          <RoadAccidentsChart />
        </div>
      </section>
    </>
  );
}
