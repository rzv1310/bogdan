import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function VictimRepresentationEn() {
  useSEO({
    title: "Compensation for accident victims / bodily injury | Attorney Bogdan Lamatic, Bucharest",
    description: "Compensation for traffic accidents and bodily harm.",
    alternates: { en: "/en/services/victim-representation-in-criminal-cases", ro: "/servicii/reprezentarea-victimelor-in-procese-penale" },
    locale: "en_US",
    canonical: "/en/services/victim-representation-in-criminal-cases",
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
              { "@type": "ListItem", position: 2, name: "Representation of victims in criminal proceedings", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/victim-representation-in-criminal-cases` : "/en/services/victim-representation-in-criminal-cases" },
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
            name: "Compensation for accident victims and bodily injury",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/victim-representation-in-criminal-cases` : "/en/services/victim-representation-in-criminal-cases",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Compensation for accident victims / bodily injury | Attorney Bogdan Lamatic, Bucharest</h1>

        <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            I represent victims in criminal proceedings and obtain compensation for road accidents, bodily injuries,
            workplace accidents and other criminal acts. I have pleaded at all levels – from prosecutors to the High
            Court of Cassation and Justice – including complex cases with medico-legal expertise and negotiation with
            insurers.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Call now for a victim case consultation">
            <a href="tel:+40745506443">
              <Phone className="mr-2 h-4 w-4" /> Call now
            </a>
          </Button>
        </div>

        <div className="mt-6">
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
                <BreadcrumbPage>Representation of victims in criminal proceedings</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Cases I take */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Cases I take</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Road accidents (RCA/CASCO, injuries, death).</strong> Coordination of the criminal investigation and civil action
                for victims and families: establishing liability, civil party, damage quantification, negotiation with the
                insurer under Romanian law.
              </li>
              <li>
                <strong>Bodily injury and assault.</strong> Cases concerning assault and battery and bodily injury – including aggravated
                forms or situations where prosecution is ex officio under recent amendments.
              </li>
              <li>
                <strong>Negligent injury / negligent homicide.</strong> Representation of victims (or families) – often related to traffic
                rules; careful medico-legal assessment and correlation with evidence.
              </li>
              <li>
                <strong>Work accidents / employer liability.</strong> Both criminal and civil limbs (damages, lost income, care, full repair).
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Method of work */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">How I help | Method of work</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-4">
            <div>
              <p>
                <strong>A) Quick factual-legal assessment.</strong> Review of medical documents, Police reports, witness statements,
                imaging, invoices/receipts to fix causality and proper legal framing.
              </p>
            </div>
            <div>
              <p>
                <strong>B) Dual procedural strategy.</strong>
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Criminal:</strong> complaints/evidence requests, medico-legal and accident reconstruction expert reports, full use
                  of victim rights.
                </li>
                <li>
                  <strong>Civil:</strong> civil party in the criminal case or separate action; rigorous quantification of material and moral
                  damages based on evidence.
                </li>
              </ul>
            </div>
            <div>
              <p>
                <strong>C) Negotiation with the insurer.</strong> Opening and following the claim file under Romanian law; negotiating the
                most advantageous solution (direct payment/settlement).
              </p>
            </div>
            <div>
              <p>
                <strong>D) Court representation.</strong> Full advocacy for integral reparation with support for technical/medico-legal
                evidence.
              </p>
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
                <strong>Is a criminal trial mandatory to obtain compensation?</strong> Not necessarily. You can seek compensation as a civil party in the criminal trial or separately, in civil court – we choose the optimal strategy for time and result.
              </li>
              <li>
                <strong>What deadlines apply?</strong> Deadlines depend on the nature of the act (criminal/civil) and the applicable limitation periods; in road accidents we act quickly and notify the insurer promptly.
              </li>
              <li>
                <strong>What does it mean that “the insurer pays”?</strong> In road accidents, the RCA insurer covers the proven damage of third parties; the insurer has clear obligations for ascertainment and settlement of claims.
              </li>
              <li>
                <strong>Can I participate actively in the criminal investigation?</strong> Yes. As an injured person/civil party you can consult the file, make requests and question witnesses/experts (under the law).
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Initial evaluation</h3>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-2">
            <p>
              I offer an initial evaluation and action plan (evidence, legal framing, steps). Based in Bucharest, working
              nationwide.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Call now</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
