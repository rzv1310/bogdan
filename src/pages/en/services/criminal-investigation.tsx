import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/criminal-investigation";
const TITLE = "Criminal Investigation Lawyer Bucharest - Defense From the First Hour | Bogdan Lamatic";
const DESCRIPTION =
  "Criminal investigation lawyer in Bucharest - defense from the first hour: hearings, detention, pre-trial arrest, searches. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between a suspect and a defendant?",
    a: "A suspect is a person against whom there are indications that they committed the act under investigation (art. 307 Criminal Procedure Code), but criminal proceedings have not yet been formally initiated against them. A defendant is a person against whom criminal proceedings have been formally initiated (art. 309 Criminal Procedure Code) and who becomes a party to the criminal trial, with broader procedural rights.",
  },
  {
    q: "Am I required to appear for a hearing if I receive a summons?",
    a: "Yes, appearing is, in principle, mandatory. Unjustified failure to appear can have consequences, including forced appearance. I recommend contacting me before the scheduled date so we can prepare the statement.",
  },
  {
    q: "Can I refuse to give statements during the criminal investigation?",
    a: "Yes. Suspects and defendants have the right to make no statement at all, without any adverse consequence resulting from this refusal (art. 83 letter a, corroborated with art. 78 of the Criminal Procedure Code). The decision to make a statement or not is always taken based on the defense strategy in the file.",
  },
  {
    q: "How much does a lawyer cost for the criminal investigation phase?",
    a: "The fee depends on the complexity of the case and the stage at which I get involved. I offer a free initial consultation, after which we agree on a transparent estimated fee, set out in full in the contract. Call me at +40 (31) 632 01 83.",
  },
  {
    q: "What happens if I am detained or my pre-trial arrest is proposed?",
    a: "Detention cannot exceed 24 hours. If the prosecutor proposes pre-trial arrest, the case reaches a judge for rights and liberties, where I present concrete defenses to have the proposal rejected or to obtain a less restrictive preventive measure, such as judicial control.",
  },
  {
    q: "Can I have a lawyer even if I have not yet been officially summoned but I know I am targeted in a case?",
    a: "Yes. You can request legal assistance from the earliest stage, before any official summons - this is, in fact, the best moment to build a solid defense.",
  },
  {
    q: "How long does the criminal investigation usually last?",
    a: "The law does not provide a general maximum term for all cases; the duration depends on the complexity of the file, the number of pieces of evidence and the type of offense. I will constantly monitor the status of the file and act to avoid unjustified delays.",
  },
  {
    q: "What happens at the end of the criminal investigation?",
    a: "The prosecutor may order the closing of the case, waiver of criminal prosecution, or referral of the case to trial. Each of these outcomes depends on the evidence gathered and the arguments raised during the investigation - which is why the defense built from the very first hearings has a direct impact on the final outcome.",
  },
  {
    q: "Will you represent me personally or send someone else from the team?",
    a: "I personally handle the file, from the first discussion to the prosecutor's decision and, if necessary, in court. I remain your point-of-contact lawyer throughout the case.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Call now!" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - criminal investigation lawyer`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

const LEGISLATIE = "https://legislatie.just.ro/Public/DetaliiDocument/185907";

export default function CriminalInvestigation() {
  useSEO({
    canonical: "/en/services/criminal-investigation",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    keywords: "criminal investigation lawyer bucharest, criminal case lawyer romania",
    alternates: { ro: "/servicii/urmarire-penala", en: "/en/services/criminal-investigation", xDefault: "/servicii/urmarire-penala" },
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://avocatpenalbucuresti.ro/en/services" },
          { "@type": "ListItem", position: 3, name: "Criminal Investigation", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Criminal Investigation Lawyer Bucharest - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["en", "ro"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "Bucharest",
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
      <Breadcrumb className="mb-4">
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
            <BreadcrumbPage>Criminal Investigation</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Criminal Investigation Lawyer Bucharest - Defense From the First Hour of the Investigation | Bogdan Lamatic
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>In a criminal investigation, the first hours matter most.</strong></span>
          <span className="block">What you state, what you sign and how you react in the first 24 hours can decide whether the case closes quickly or turns into a lengthy trial.</span>
          <span className="block">Do not wait for the first court hearing to ask for help - a criminal investigation lawyer defends you from the moment of the hearing, the search, or the detention itself.</span>
        </p>
      </div>

      <ServiceHeroCta lang="en" ariaLabel="Call now! - criminal investigation lawyer" />

      <p className="mt-3 text-sm text-muted-foreground">
        5.0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> out of 27 Google reviews
      </p>
      <LawyerBioBlock path="/en/services/criminal-investigation" lang="en" />

      <ServiceSubServices path="/en/services/criminal-investigation" lang="en" />

      {/* What is a criminal investigation */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            What is a criminal investigation and why you need a lawyer from the first phase
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            The criminal investigation is the stage in which the criminal investigation bodies (police, prosecutor) gather evidence to determine whether an offense was committed and who is responsible. It begins, under art. 305 of the Criminal Procedure Code, with an order opening the criminal investigation "in rem", and when there are indications that a particular person committed the act, that person acquires the <strong>status of suspect</strong> (art. 307 Criminal Procedure Code). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
          </p>
          <p>
            Many people believe they need a lawyer only "if it reaches trial". In reality, it is precisely the <strong>criminal investigation phase where the defense is built or lost</strong>: statements given without a lawyer, evidence not challenged in time, or missed deadlines for complaints can weigh decisively later, in court.
          </p>
          <p>
            As a criminal investigation lawyer, I get involved from the very first stage to protect your rights, verify the legality of the evidence and build a coherent strategy before the case moves forward.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* What I do for you */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What I do for you during the criminal investigation phase</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Assistance and representation at hearings</strong> - before the Police, the Prosecutor's Office, DNA, DIICOT or the European Public Prosecutor's Office, as counsel for the suspect or the defendant (art. 78, art. 83 Criminal Procedure Code). I prepare you before the hearing and am actually present, so that no statement is given without a clear strategy behind it.
            </li>
            <li>
              <strong>Defense in case of detention or pre-trial arrest.</strong> I intervene immediately if you are detained (art. 209-210 Criminal Procedure Code) or if the prosecutor proposes pre-trial arrest (art. 223 et seq. Criminal Procedure Code), presenting concrete defenses starting from the hearing before the judge for rights and liberties.
            </li>
            <li>
              <strong>Challenging preventive measures.</strong> I challenge judicial control, judicial control on bail, house arrest or pre-trial arrest (art. 211-222 Criminal Procedure Code) and request their replacement or revocation whenever the legal conditions allow it. <a href="/en/services/preventive-measures" className="text-primary underline underline-offset-2">Read more about preventive measures</a>.
            </li>
            <li>
              <strong>Presence during searches</strong> - of homes, computer systems or persons (art. 157 et seq. Criminal Procedure Code) - to verify the legality of the warrant and of the manner in which the search is carried out.
            </li>
            <li>
              <strong>Access to the file and drafting of requests, complaints, objections.</strong> I review the criminal investigation file (art. 94 Criminal Procedure Code), file requests for evidence, objections of unlawfulness and complaints against the prosecutor's acts whenever necessary.
            </li>
            <li>
              <strong>Negotiation with the prosecutor and alternative solutions.</strong> Depending on the case, I analyze the possibility of a waiver of criminal prosecution (art. 318 Criminal Procedure Code), a closing of the case (art. 314-315 Criminal Procedure Code) or a plea agreement (art. 478-488 Criminal Procedure Code), whenever it serves your interest.
            </li>
          </ol>
          <CallCta />
        </CardContent>
      </Card>

      {/* How I help you */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">How I help you | Working method</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A) Rapid intervention.</strong> From the moment you call me, I assess the situation: have you been summoned, detained, searched, or only informed verbally? We immediately establish the next steps, including whether my urgent presence is needed.
          </p>
          <p>
            <strong>B) Defense strategy from the very first statement.</strong> I analyze the referral document, the legal classification and the existing evidence, then we jointly decide what you will state, what you will not state and what requests we file starting from the earliest phase (art. 83 Criminal Procedure Code).
          </p>
          <p>
            <strong>C) Challenging measures and verifying the legality of evidence.</strong> I check compliance with procedural rights, the legality of the search, of interceptions or of other means of evidence, and file complaints or objections wherever irregularities exist.
          </p>
          <p>
            <strong>D) Full representation until the prosecutor's decision.</strong> I represent you personally throughout the criminal investigation, whether it ends with the closing of the case, a waiver of prosecution or referral to trial - and I continue the defense without interruption if the case reaches court.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* Why you risk going alone */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Why you risk it if you go to the hearing alone</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Statements given without a lawyer can be used against you</strong> throughout the criminal proceedings, even if you later nuance or withdraw them.
            </li>
            <li>
              <strong>You do not know what you are allowed not to say.</strong> You have the right to remain silent, without any adverse consequence (art. 83 letter a Criminal Procedure Code) - but few people know exactly how and when to exercise it.
            </li>
            <li>
              <strong>You can miss essential deadlines</strong> for complaints, requests for evidence or challenging certain measures, because the law does not wait until you hire a lawyer.
            </li>
            <li>
              <strong>You cannot verify on your own the legality of a search or a detention</strong> - a procedural irregularity not challenged in time can later be "covered".
            </li>
          </ul>
          <p>
            Having a criminal investigation lawyer does not mean you have something to hide - it means someone is checking every step, in real time, while it can still make a difference.
          </p>
        </CardContent>
      </Card>

      {/* Practical steps */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Practical steps, depending on your situation</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>You received a summons from the Police or the Prosecutor's Office.</strong> Do not ignore the summons - unjustified failure to appear can have consequences. Call me before the hearing date so we can prepare the statement together and establish what documents you need to bring.
          </p>
          <p>
            <strong>You or someone close to you has been detained.</strong> Contact me immediately, regardless of the hour - detention lasts a maximum of 24 hours, and reaction time matters enormously. I offer a phone number accessible from early morning until late at night, precisely for such situations.
          </p>
          <p>
            <strong>A search is about to take place, or has taken place, at your home or your company.</strong> Ask to see the search warrant before allowing access, if possible, and call me as soon as possible - I can be present or guide you step by step over the phone.
          </p>
          <p>
            <strong>You found out you are targeted in a criminal case, but have not yet been officially summoned.</strong> Do not wait for the summons. A preventive assessment of your situation allows me to prepare the defense in advance, not at the last moment.
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
            I have over 18 years of experience in criminal law and have been recognized by Legal 500 for five consecutive years as a Next Generation Partner. I have represented clients in criminal investigation files of all types - from simple cases to complex investigations conducted by DNA, DIICOT or the European Public Prosecutor's Office.
          </p>
          <p>
            <strong>I handle every file personally.</strong> I do not send a colleague in my place to hearings or to court - I remain your point-of-contact lawyer throughout the case, with absolute discretion.
          </p>
          <p>
            <strong>I am available almost around the clock.</strong> Criminal investigation situations do not follow office hours, which is why I can be contacted from 6 a.m. until late in the evening, including on weekends.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions about criminal investigation</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            {FAQ.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p className="mt-1">
                  {item.q.startsWith("How much does") ? (
                    <>
                      The fee depends on the complexity of the case and the stage at which I get involved. I offer a free initial consultation, after which we agree on a transparent estimated fee, set out in full in the contract. Call me at{" "}
                      <a href="tel:+40316320183" className="text-primary underline underline-offset-2">+40 (31) 632 01 83</a>.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Free initial assessment</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Your situation in the criminal investigation phase cannot wait. Call me now for a free initial assessment and find out immediately what the next steps are for your defense.
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
              Criminal Procedure Code - Title I, Criminal Investigation (art. 285-341), including the provisions on the rights of the suspect and the defendant (art. 78, art. 83). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
            <li>
              Criminal Procedure Code - preventive measures: detention, judicial control, house arrest, pre-trial arrest (art. 202-241 Criminal Procedure Code). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
            <li>
              Criminal Procedure Code - plea agreement (art. 478-488 Criminal Procedure Code). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <RelatedServices current="/en/services/criminal-investigation" lang="en" />

    </section>
  );
}
