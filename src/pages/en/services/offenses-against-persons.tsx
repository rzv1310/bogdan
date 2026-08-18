import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/offenses-against-persons";
const TITLE = "Violent Crime Defense Lawyer Bucharest, Romania | Bogdan Lamatic";
const DESCRIPTION =
  "Offenses against persons lawyer Bucharest - assault, threats, bodily harm, sexual offenses. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between assault and bodily harm?",
    a: "Assault or other acts of violence (art. 193 Criminal Code) generally involves physical suffering without significant days of medical care, while bodily harm (art. 194 Criminal Code) is an aggravated form, with more serious consequences to the victim's health - the correct legal classification directly influences the seriousness of the charge.",
  },
  {
    q: "Can a complaint for violence or threats be withdrawn?",
    a: "For some offenses in this category, criminal proceedings are initiated only upon the prior complaint of the injured person, and withdrawing the complaint or a settlement between the parties can lead to termination of the criminal proceedings. It depends on the specific offense and the procedural stage - I analyze this individually for each case.",
  },
  {
    q: "What happens if I received a protection order?",
    a: "A protection order imposes obligations and restrictions (for example, keeping a distance from the victim) that must be complied with immediately. There is a possibility to challenge it or request its modification, under the conditions set by law.",
  },
  {
    q: "Can I be held in pre-trial detention for a domestic violence or sexual offense accusation?",
    a: "Yes, depending on the seriousness of the act and the circumstances, the prosecutor may propose a preventive measure, including pre-trial detention. I step in immediately to build a solid defense from the moment the measure is proposed.",
  },
  {
    q: "How much does a lawyer cost for an offenses against persons case?",
    a: "The fee depends on the complexity of the case and the procedural stage. I offer a free initial discussion to assess your situation and a transparent estimated fee, fully set out in the contract. Call me at +40 (31) 632 01 83.",
  },
  {
    q: "I am wrongly accused - what can I do?",
    a: "Contact me immediately. I will review the complaint, the existing evidence and statements, challenge the unfounded elements and build a defense based on facts, witnesses and expert reports where relevant.",
  },
  {
    q: "Will you personally represent me at hearings and in court?",
    a: "Yes, I handle the case personally, from the first discussion to the final outcome, remaining your point of contact throughout the case.",
  },
];

function CallCta({ label = "Call now!" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - offenses against persons lawyer`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

const LEGISLATIE = "https://legislatie.just.ro/Public/DetaliiDocument/223635";

export default function OffensesAgainstPersons() {
  useSEO({
    canonical: "/en/services/offenses-against-persons",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    keywords: "offenses against persons lawyer bucharest, assault lawyer romania",
    alternates: {
      ro: "/servicii/infractiuni-contra-persoanei",
      en: "/en/services/offenses-against-persons",
      xDefault: "/servicii/infractiuni-contra-persoanei",
    },
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://avocatpenalbucuresti.ro/en/services" },
          { "@type": "ListItem", position: 3, name: "Offenses Against Persons", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Offenses against persons lawyer Bucharest - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "Bucuresti",
          addressRegion: "Bucuresti",
          postalCode: "012244",
          addressCountry: "RO",
        },
        hasMap: "https://www.google.com/maps?cid=17818591254142574295",
        telephone: "+40 (31) 632 01 83",
        email: "contact@avocatpenalbucuresti.ro",
        provider: {
          "@type": "Attorney",
          name: "Bogdan Lamatic",
          telephone: "+40 (31) 632 01 83",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <div className="flex flex-col">
      <Breadcrumb className="order-last mt-5 mb-5 md:order-first md:mt-0 md:mb-4">
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
            <BreadcrumbPage>Offenses Against Persons</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Violent Crime Defense Lawyer in Bucharest
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>Accusations of offenses against persons directly affect your freedom, but also your reputation and family life.</strong></span>
          <span className="block">Many of these cases start from a conflict, a complaint filed in anger, or a misinterpretation of events - and how you react from day one can decisively influence the final outcome.</span>
        </p>
      </div>

      <ServiceHeroCta lang="en" ariaLabel="Call now! - offenses against persons lawyer" />

      <LawyerBioBlock path="/en/services/offenses-against-persons" lang="en" />
      </div>

      <ServiceSubServices path="/en/services/offenses-against-persons" lang="en" />

      {/* What offenses against persons means */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What offenses against persons means</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Offenses against persons are regulated by Title I of the Special Part of the Criminal Code (art. 188-227) and cover acts that harm a person's life, bodily integrity, freedom, private life, or sexual freedom and integrity. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>) The Criminal Code groups them into nine chapters:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Offenses against life (murder, manslaughter) - art. 188-192</li>
            <li>Offenses against bodily integrity or health (assault, bodily harm) - art. 193-198</li>
            <li>Offenses committed against a family member (domestic violence) - art. 199-200</li>
            <li>Aggression against the fetus - art. 201-202</li>
            <li>Offenses regarding the duty to assist persons in danger - art. 203-204</li>
            <li>Offenses against personal freedom (unlawful deprivation of liberty, threats, blackmail, harassment) - art. 205-208</li>
            <li>Trafficking and exploitation of vulnerable persons - art. 209-217</li>
            <li>Offenses against sexual freedom and integrity (rape, sexual assault) - art. 218-223</li>
            <li>Offenses against the home and private life - art. 224-227</li>
          </ul>
          <p>
            <strong>Note:</strong> if you are the injured party seeking compensation or representation as a civil party, the information you need is on the{" "}
            <Link to="/en/services/victim-representation-in-criminal-cases" className="text-primary underline underline-offset-2">
              Victim Representation in Criminal Cases
            </Link>
            {" "}page. This page addresses the defense of accused persons.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* Types of cases */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Types of cases I defend</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Assault and other acts of violence, bodily harm (art. 193-195 Criminal Code).</strong> I defend people accused of acts of violence, analyzing the proportionality of the alleged act, the forensic medical certificates and the real circumstances of the conflict.</li>
            <li><strong>Bodily harm caused by negligence (art. 196 Criminal Code).</strong> Frequently encountered in accidents, negligence or conflicts without intent to harm - I challenge the legal classification when the elements of negligence are not clearly proven. For cases arising from traffic accidents, see also the{" "}
              <Link to="/en/services/road-traffic-offenses" className="text-primary underline underline-offset-2">
                Traffic Offenses with Victims
              </Link> page.
            </li>
            <li><strong>Domestic violence (art. 199 Criminal Code).</strong> I build the defense taking into account the particularities of these cases - often with conflicting evidence, family witnesses and, sometimes, protection orders already issued.</li>
            <li><strong>Threats and blackmail (art. 206-207 Criminal Code).</strong> I analyze whether the reported act actually meets the elements of the offense or represents a verbal conflict without criminal relevance.</li>
            <li><strong>Harassment and sexual harassment (art. 208, art. 223 Criminal Code).</strong> I defend people accused in such cases, carefully verifying the evidence and the context of the communications relied upon.</li>
            <li><strong>Unlawful deprivation of liberty (art. 205 Criminal Code).</strong> I represent people accused in situations often linked to family or property disputes, where the legal classification must be examined rigorously.</li>
            <li><strong>Offenses against sexual freedom and integrity - rape, sexual assault (art. 218-219 Criminal Code).</strong> Cases with extremely high stakes for the client's freedom and reputation, in which I build the defense based on forensic evidence, witnesses and the timeline of events.</li>
            <li><strong>Trespassing and violation of private life (art. 224-227 Criminal Code).</strong> I defend people accused of unlawfully entering a home or violating another person's private life.</li>
          </ol>
          <CallCta />
        </CardContent>
      </Card>

      {/* Method of work */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">How I help you | Method of work</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A) Quick and confidential assessment.</strong> I review the complaint, the referral document or summons you received, together with any existing evidence (forensic certificates, messages, witnesses), to understand exactly what you are being accused of.
          </p>
          <p>
            <strong>B) Verifying the legal classification.</strong> Many cases in this category start from real conflicts, but the reported act does not always meet the elements of the offense invoked. I check whether the classification is correct and whether there are grounds for reclassification, dismissal or alternative solutions.
          </p>
          <p>
            <strong>C) Tailored defense strategy.</strong> I prepare statements, file requests for evidence and, where the law allows it (for example, for certain offenses subject to a prior complaint requirement), I examine the possibility of a settlement between the parties.
          </p>
          <p>
            <strong>D) Complete representation, from the hearing to court.</strong> I represent you personally throughout the case - from the first hearing at the Police or Prosecutor's Office, during the{" "}
            <Link to="/en/services/criminal-investigation" className="text-primary underline underline-offset-2">
              criminal investigation phase
            </Link>
            , to the prosecutor's decision and, if necessary, before the court.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* Why you need a lawyer from the first stage */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Why you need a lawyer from the first stage</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Some offenses against persons allow a settlement between the parties or withdrawal of the prior complaint</strong> - but only if the legal conditions are met and the steps are taken correctly and on time.
            </li>
            <li>
              <strong>An accusation of violence or a sexual offense may also lead to a{" "}
              <Link to="/en/services/preventive-measures" className="text-primary underline underline-offset-2">preventive measure</Link></strong> (judicial control, house arrest), in addition to the criminal proceedings themselves.
            </li>
            <li>
              <strong>Statements given without preparation can be interpreted against you</strong>, even if your real intent was different from what was recorded in the complaint.
            </li>
            <li>
              <strong>The reputational impact and the effect on family life are often greater than the sentence itself</strong> - which is why discretion and swift action matter just as much as legal arguments.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Practical steps */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Practical steps, depending on your situation</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>You have been summoned or reported for an incident of violence or threats.</strong> Call me before the hearing, so we can prepare your statement together and determine what documents or witnesses can support your version of events.
          </p>
          <p>
            <strong>A provisional protection order has been issued against you.</strong> Comply immediately with the obligations imposed and contact me as soon as possible - the deadlines for challenging or modifying such an order are short.
          </p>
          <p>
            <strong>You have been accused of an act with sexual connotations.</strong> Do not give any statement without a lawyer. Call me immediately, regardless of the time, for a confidential assessment of your situation.
          </p>
          <p>
            <strong>You want to know whether you can reach a settlement with the injured party.</strong> We will analyze together whether the reported act legally allows this option and, if so, how it can be negotiated correctly.
          </p>
          <CallCta />
        </CardContent>
      </Card>

      {/* Why choose me */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Why choose me</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            I have over 18 years of experience in criminal law and have been recognized by Legal 500 for five consecutive years as a Next Generation Partner. I have represented clients in a wide range of cases involving offenses against persons, from lower-level conflicts to complex accusations with a major impact on personal freedom.
          </p>
          <p>
            <strong>I handle every case personally.</strong> I do not send a colleague in my place to hearings or to court - I remain your point-of-contact lawyer throughout the case, with absolute discretion.
          </p>
          <p>
            <strong>I am available almost around the clock.</strong> These situations do not follow office hours, which is why I can be reached from 6 a.m. until late in the evening, including on weekends.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <ServiceFaq
        title="Frequently asked questions about offenses against persons"
        ordered
        items={FAQ.map((item) => ({
          q: item.q,
          a: item.q.startsWith("How much does") ? (
            <>
              The fee depends on the complexity of the case and the procedural stage. I offer a free initial discussion to assess your situation and a transparent estimated fee, fully set out in the contract. Call me at{" "}
              <a href="tel:+40316320183" className="text-primary underline underline-offset-2">+40 (31) 632 01 83</a>.
            </>
          ) : (
            item.a
          ),
        }))}
      />

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Free initial assessment</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            If you are accused of an offense against persons or have been summoned for a hearing, call me now for a free and confidential initial assessment.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Call now</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">Send email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Official resources */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Official resources (useful links)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Criminal Code - Title I, Offenses Against Persons (art. 188-227), including assault, bodily harm, domestic violence, threats, blackmail and offenses against sexual freedom and integrity. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
            <li>
              Law no. 217/2003 on preventing and combating domestic violence, including the provisions on protection orders. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <RelatedServices current="/en/services/offenses-against-persons" lang="en" />

    </section>
  );
}
