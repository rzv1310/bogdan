import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/preventive-measures";
const TITLE = "Preventive Measures Lawyer Bucharest - Immediate Intervention | Bogdan Lamatic";
const DESCRIPTION =
  "Preventive measures lawyer Bucharest - detention, judicial control, house arrest, pre-trial detention. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between judicial control, house arrest and pre-trial detention?",
    a: "All three restrict the liberty of the investigated person, but to different degrees: judicial control only imposes certain obligations (without deprivation of liberty), house arrest requires staying at the indicated address, while pre-trial detention means actual deprivation of liberty, in a detention facility.",
  },
  {
    q: "How long can pre-trial detention last during criminal investigation?",
    a: "It is initially ordered for a maximum of 30 days and may be extended, also by increments of up to 30 days, up to a maximum total of 180 days during criminal investigation.",
  },
  {
    q: "How is a preventive measure challenged?",
    a: "Through an appeal filed against the ruling of the judge for rights and liberties, which is usually resolved within 5 days of registration (Article 204 of the Criminal Procedure Code). The deadlines are short, which is why a quick response matters enormously.",
  },
  {
    q: "Can a preventive measure be replaced with a lighter one?",
    a: "Yes. A preventive measure can be replaced or revoked, either on the court's own initiative or upon request, when the grounds that led to it have ceased or new circumstances have arisen (Article 242 of the Criminal Procedure Code).",
  },
  {
    q: "Who can order pre-trial detention or house arrest?",
    a: "Only a judge - the judge for rights and liberties during the criminal investigation, the pre-trial chamber judge, or the trial court afterwards. Neither the prosecutor nor the police can order these measures on their own.",
  },
  {
    q: "What obligations can be imposed through judicial control?",
    a: "Typically: periodic reporting to the judicial authority, a ban on leaving the locality or the country without authorization, a ban on contacting certain persons, or other obligations expressly established, proportional to the offense under investigation.",
  },
  {
    q: "How much does a lawyer cost for challenging a preventive measure?",
    a: "The fee depends on urgency, the complexity of the case and the procedural stage. I offer a first free consultation to assess the situation and a transparent estimated fee. Call me at +40 (31) 632 01 83.",
  },
  {
    q: "Can I leave house arrest for work or medical treatment?",
    a: "Under certain conditions, the judge may allow exceptions to the obligation to remain at home, if these are justified and properly requested.",
  },
  {
    q: "Will you personally represent me at the hearings regarding the preventive measure?",
    a: "Yes, I personally handle the case, from the first discussion to the final resolution of the preventive measure, remaining your point-of-contact lawyer throughout the case.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Call now" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - preventive measures lawyer`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

const LEGISLATIE = "https://legislatie.just.ro/Public/DetaliiDocument/185907";

export default function PreventiveMeasuresEn() {
  useSEO({
    canonical: "/en/services/preventive-measures",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    keywords: "preventive measures lawyer bucharest, pre-trial detention lawyer romania",
    alternates: { ro: "/servicii/masuri-preventive", en: "/en/services/preventive-measures", xDefault: "/servicii/masuri-preventive" },
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://avocatpenalbucuresti.ro/en/services" },
          { "@type": "ListItem", position: 3, name: "Preventive measures", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Preventive measures lawyer Bucharest - Bogdan Lamatic",
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
      <h1 className="text-2xl font-semibold mb-4">
        Preventive Measures Lawyer Bucharest - Immediate Intervention | Bogdan Lamatic
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>A preventive measure can restrict your liberty, movement or professional activity as early as the criminal investigation phase, before any conviction.</strong></span>
          <span className="block">That is why the presence of a lawyer exactly at the moment the measure is proposed - not afterwards - can make the difference between rejection of the proposal, a lighter measure, or upholding the most severe option.</span>
        </p>
      </div>

      <CallCta />

      <p className="mt-3 text-sm text-muted-foreground">
        <span className="text-yellow-400" aria-hidden="true">★★★★★</span> 5.0 out of 27 Google reviews
      </p>
      <ServiceSubServices path="/en/services/preventive-measures" lang="en" />

      <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          I am Bogdan Lamatic, a lawyer with the Bucharest Bar, with over 18 years of experience in criminal law. I act as a preventive measures lawyer in Bucharest in cases of detention, judicial control, judicial control on bail, house arrest and pre-trial detention, from the first hour a measure is proposed or ordered, usually as a result of a{" "}
          <Link to="/en/services/criminal-investigation" className="text-primary underline underline-offset-2">
            measure arising during the criminal investigation phase
          </Link>
          .
        </p>
        <p>
          I am recognized by Legal 500 as a "Next Generation Partner" (White-Collar Crime) 2021-2024 and have represented clients before judges for rights and liberties, pre-trial chamber judges and trial courts, in cases involving judicial control, house arrest or pre-trial detention.
        </p>
      </div>


      <div className="mt-6">
        <Breadcrumb>
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
              <BreadcrumbPage>Preventive measures</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* What preventive measures are */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            What preventive measures are and who can order them
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Preventive measures are procedural tools through which judicial bodies restrict a person's liberty or movement during criminal proceedings, when there is evidence or reasonable indications that the person committed an offense and when the measure is necessary for the proper conduct of the proceedings, to prevent evading investigation or trial, or to prevent a new offense (Article 202 of the Criminal Procedure Code). Any preventive measure must be <strong>proportional</strong> to the severity of the accusation. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
          </p>
          <p>The Criminal Procedure Code provides for five categories of preventive measures (Article 202, paragraph 4 of the Criminal Procedure Code):</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Detention</strong> - ordered by the criminal investigation body or the prosecutor, only during criminal investigation, for a maximum of 24 hours.</li>
            <li><strong>Judicial control</strong> - can be ordered by the prosecutor or the judge for rights and liberties, with a set of obligations that the investigated person must comply with.</li>
            <li><strong>Judicial control on bail</strong> - similar to judicial control, conditioned on the deposit of an amount of money set by the court.</li>
            <li><strong>House arrest</strong> - ordered only by a judge, requiring the person to remain at the indicated address, with expressly permitted exceptions.</li>
            <li><strong>Pre-trial detention</strong> - the most severe measure, ordered only by a judge, initially for a maximum of 30 days, with the possibility of extension during criminal investigation up to a total of no more than 180 days.</li>
          </ol>
          <p>
            As a preventive measures lawyer, I intervene at each of these stages - from the hearing before the prosecutor to challenging the ruling of the judge for rights and liberties.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* How I defend at each measure */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">How I defend you for each of the 5 preventive measures</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Detention.</strong> I am present alongside you from the moment of detention, verify its legality and, if necessary, prepare the defense for the hearing before the prosecutor regarding a possible proposal for pre-trial detention. Detention cannot exceed 24 hours.
          </p>
          <p>
            <strong>Judicial control.</strong> I analyze the obligations imposed (ban on leaving the locality/country, periodic reporting to the judicial authority, etc.), verify whether they are proportional to the offense you are charged with, and, where grounds exist, request the lifting or modification of some of them.
          </p>
          <p>
            <strong>Judicial control on bail.</strong> I assist you in establishing and negotiating the amount of the bail and in the steps needed to replace a more severe measure (house arrest or pre-trial detention) with this option.
          </p>
          <p>
            <strong>House arrest.</strong> I formulate defenses to avoid this measure or, if it has already been ordered, request its replacement with a lighter measure, as well as the proper regulation of exceptions to the obligation to remain at home (for example, for work or medical treatment, where the law allows it).
          </p>
          <p>
            <strong>Pre-trial detention.</strong> This is the measure requiring the fastest intervention. I formulate defenses before the judge for rights and liberties from the initial proposal onward, challenge extensions (Article 204 of the Criminal Procedure Code) and, where grounds exist, request replacement with a non-custodial measure.
          </p>
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
            <strong>A) Rapid intervention when the measure is proposed.</strong> From the moment you learn of a proposed preventive measure, I get involved immediately in preparing the defense - I analyze the case file to which I have access and identify the relevant arguments for rejecting or mitigating the proposal.
          </p>
          <p>
            <strong>B) Verification of legal conditions.</strong> I check whether the general conditions (Article 202 of the Criminal Procedure Code) and those specific to each measure are met, as well as whether the requested measure is proportional to the offense and to your personal circumstances.
          </p>
          <p>
            <strong>C) Challenges and requests for replacement.</strong> I file appeals against rulings ordering or extending a preventive measure (Article 204 of the Criminal Procedure Code) and requests for revocation or replacement with a lighter measure, whenever the initial grounds have ceased or new circumstances have arisen (Article 242 of the Criminal Procedure Code).
          </p>
          <p>
            <strong>D) Representation for the entire duration of the measure.</strong> I monitor compliance with legal deadlines, periodically check whether the grounds for the measure still exist, and respond immediately to any proposal for extension, until the criminal investigation or trial is concluded.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* Risks */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            What you risk without a lawyer when a preventive measure is ordered or extended
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>You may receive a more severe measure than necessary</strong>, if no one argues before the judge for a proportional option (judicial control instead of house arrest, for example).
            </li>
            <li>
              <strong>You may miss the appeal deadline.</strong> The appeal against the ruling on a preventive measure is usually resolved quickly, within 5 days of registration (Article 204 of the Criminal Procedure Code) - without representation, you may lose this window.
            </li>
            <li>
              <strong>You may needlessly comply with excessive obligations</strong> under judicial control, when no one has requested, at the right time, that they be adjusted or lifted.
            </li>
            <li>
              <strong>You may remain in pre-trial detention longer than necessary</strong>, if the initial grounds have ceased but no one files a timely request for revocation or replacement.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Practical steps */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Practical steps, depending on the measure applied to you</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>You have been detained and a hearing on a possible pre-trial detention is coming up.</strong> Call me immediately - detention lasts a maximum of 24 hours, and preparing the defense for the hearing before the judge for rights and liberties must be done as quickly as possible.
          </p>
          <p>
            <strong>You have been notified of a proposal for pre-trial detention or house arrest.</strong> Contact me before the hearing scheduled to resolve the proposal - this is the most important moment to avoid a custodial measure.
          </p>
          <p>
            <strong>You are already under judicial control and believe some obligations are excessive.</strong> We can review your specific situation and file a request to modify or lift the obligations that are no longer necessary.
          </p>
          <p>
            <strong>You want to challenge a measure already ordered or extended.</strong> I check the remaining appeal deadline and, if still possible, prepare the appropriate appeal (Article 204 of the Criminal Procedure Code).
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
            I have over 18 years of experience in criminal law and have been recognized by Legal 500 for five consecutive years as a Next Generation Partner. I have represented clients in all five types of preventive measures, in cases before the Police, Prosecutor's Offices, DNA, DIICOT and courts of all levels.
          </p>
          <p>
            <strong>I handle every case personally.</strong> I do not send a colleague in my place to hearings or preventive measure proceedings - I remain your point-of-contact lawyer throughout the case, with absolute discretion.
          </p>
          <p>
            <strong>I am available almost around the clock.</strong> Proposals for preventive measures do not wait for office hours, which is why I can be reached from 6 a.m. until late at night, including on weekends.
          </p>
          <CallCta label="I need a lawyer!" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions about preventive measures</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            {FAQ.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p className="mt-1">
                  {item.q.startsWith("How much does") ? (
                    <>
                      The fee depends on urgency, the complexity of the case and the procedural stage. I offer a first free consultation to assess the situation and a transparent estimated fee. Call me at{" "}
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
            If you or someone close to you is facing a proposed or already ordered preventive measure, time matters. Call me now for a free initial assessment and find out immediately what the next steps are.
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
              Criminal Procedure Code - Title V, Preventive Measures and Other Procedural Measures (Articles 202-242 of the Criminal Procedure Code), including detention, judicial control, judicial control on bail, house arrest and pre-trial detention. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
            <li>
              Criminal Procedure Code - appeal against rulings on preventive measures (Article 204 of the Criminal Procedure Code). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
            <li>
              Criminal Procedure Code - termination by operation of law, revocation and replacement of preventive measures (Articles 241-242 of the Criminal Procedure Code). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <RelatedServices current="/en/services/preventive-measures" lang="en" />

    </section>
  );
}
