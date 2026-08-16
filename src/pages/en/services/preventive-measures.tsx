import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
import GoogleReviewCard from "@/components/services/GoogleReviewCard";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";
import SubServiceLinkButton from "@/components/services/SubServiceLinkButton";

const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/preventive-measures";
const TITLE = "Preventive Measures Lawyer Bucharest - Immediate Intervention | Bogdan Lamatic";
const DESCRIPTION =
  "Preventive measures lawyer Bucharest - police custody, judicial control, house arrest, pre-trial detention. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between judicial control, house arrest and pre-trial detention?",
    a: "Judicial control does not involve detention, but imposes obligations and possible restrictions. House arrest is a custodial measure served at a designated address. Pre-trial detention means deprivation of liberty in a detention facility. The Criminal Procedure Code includes all of these among preventive measures.",
  },
  {
    q: "How long can police custody last?",
    a: "Police custody may be ordered for no more than 24 hours. Once it expires, the person cannot be held further on the basis of the same custody measure. If another preventive measure is sought, the procedure provided for that measure must be followed.",
  },
  {
    q: "How long can pre-trial detention last?",
    a: "During the criminal investigation, pre-trial detention may initially be ordered for up to 30 days and may be extended under the conditions of the law, without the total duration at this stage exceeding 180 days. The rules applicable at the other stages of the criminal trial are distinct.",
  },
  {
    q: "How is a preventive measure challenged?",
    a: "It depends on the measure ordered, the authority that ordered it, the act by which it was ordered and the stage of the proceedings. Articles 204, 205 and 206 of the Criminal Procedure Code govern appeals against rulings on preventive measures at the different stages, while Article 213 governs the remedy against judicial control ordered by the prosecutor. The deadlines can be very short.",
  },
  {
    q: "Can a preventive measure be replaced with a lighter one?",
    a: "Yes, if the conditions provided by law are met. Article 242 of the Criminal Procedure Code governs both the revocation of preventive measures and the replacement of a measure with a lighter one. The fact that this possibility exists does not mean any request will be granted. The grounds of the measure, the development of the case and the procedural conduct must be analysed concretely.",
  },
  {
    q: "Who can order pre-trial detention or house arrest?",
    a: "Pre-trial detention and house arrest fall within the competence of the judge or the court, depending on the procedural stage and the applicable procedure. The prosecutor may make a proposal in the situations provided by law, but cannot order pre-trial detention himself.",
  },
  {
    q: "What obligations can be imposed through judicial control?",
    a: "Judicial control involves the obligations provided by Article 215 of the Criminal Procedure Code and may include, under the conditions of the law, additional restrictions adapted to the case. These may concern appearing before the judicial authority, reporting to the police, changing residence, travel, contact with certain persons and certain activities. The exact obligations must be checked in the act ordering the measure.",
  },
  {
    q: "Can I leave house arrest for work or medical treatment?",
    a: "In the situations and under the conditions provided by law, permission may be requested to leave the premises for a determined period and for a justified purpose. There is no automatic approval. The request must be analysed and argued according to the concrete circumstances.",
  },
  {
    q: "How much does a lawyer cost for a preventive measure?",
    a: "The fee depends on urgency, the complexity of the case, the volume of documents, the preventive measure, the procedural stage, the activities required and the number of hearings. I offer a first free discussion to assess the situation, and before taking on the mandate I explain the fee and the services included.",
  },
  {
    q: "Will you personally represent me?",
    a: "Yes. I handle the case personally and remain your point-of-contact lawyer. If the situation requires cooperation with other professionals, I personally coordinate the defence strategy.",
  },
  {
    q: "Can the family contact the lawyer if the person is in police custody?",
    a: "Yes. Very often, in a custody situation, the first person to look for a lawyer is a family member. Tell me who was taken into custody, where they are, when it happened, what information you received and, if you know it, which authority is handling the case. You do not have to wait until you have all the documents.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Call me now!" }: { label?: string }) {
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

const PROBLEMS = [
  {
    title: "24-hour police custody",
    lead: "Have you been taken into custody, or is someone close to you at the Police or the Prosecutor's Office?",
    text: "The first hours may include hearings and important decisions about the measures that follow. Custody may be ordered for no more than 24 hours.",
    linkLabel: "24-hour police custody - what to do immediately",
    to: "/en/services/police-custody-24-hours",
  },
  {
    title: "Pre-trial detention",
    lead: "Is the prosecutor requesting pre-trial detention, or has the measure already been ordered?",
    text: "The defence must be prepared in relation to the concrete grounds invoked for the deprivation of liberty, the state of the evidence and the possibility of applying a less severe measure.",
    linkLabel: "Pre-trial detention - defence, appeal and replacement of the measure",
    to: "/en/services/pre-trial-detention",
  },
  {
    title: "Judicial control",
    lead: "Do you face restrictions on travel, contact with certain persons or your professional activity?",
    text: "It must be analysed whether the obligations are necessary and proportionate and whether there are grounds for modifying, revoking or replacing the measure.",
    linkLabel: "Judicial control - obligations, challenge and revocation",
    to: "/en/services/judicial-control",
  },
  {
    title: "House arrest",
    lead: "Are you under house arrest, or is this measure about to be discussed?",
    text: "Depending on the situation, we can consider challenging the measure, replacing it with a less severe one, or requests to leave the premises in the cases allowed by law.",
    linkLabel: "House arrest - appeal, permissions and replacement",
    to: "/en/services/house-arrest",
  },
];

export default function PreventiveMeasures() {
  useSEO({
    canonical: "/en/services/preventive-measures",
    locale: "en_US",
    alternates: { ro: "/servicii/masuri-preventive", en: "/en/services/preventive-measures", xDefault: "/servicii/masuri-preventive" },
    title: TITLE,
    description: DESCRIPTION,
    keywords: "preventive measures lawyer, preventive measures lawyer Bucharest",
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
            <BreadcrumbLink href="/en/services">Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Preventive measures</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">Preventive measures lawyer in Bucharest</h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>Have you been taken into police custody, are you under judicial control, or is a pre-trial detention proposal coming?</strong></span>
          <span className="block">A preventive measure can limit your liberty, your travel, your professional activity and your family life before any conviction exists.</span>
          <span className="block">If you or someone close to you has been told that a preventive measure is coming, or the measure has already been ordered, the time available to prepare the defence can be very short.</span>
        </p>
      </div>

      <ServiceHeroCta lang="en" ariaLabel="Call me now! - preventive measures lawyer" />

      <LawyerBioBlock path="/en/services/preventive-measures" lang="en" />

      <ServiceSubServices path="/en/services/preventive-measures" />

      {/* USP - personal handling */}
      <div className="mt-10 md:mt-12 rounded-lg border-l-4 border-accent bg-accent/10 px-5 py-4">
        <p className="text-lg font-semibold text-foreground">I handle your case personally</p>
        <p className="mt-1 text-base leading-relaxed text-foreground">You are not taken on and then automatically passed to another lawyer. I personally handle the strategy and the essential moments of the mandate.</p>
      </div>

      {/* What I do immediately - 4 steps */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What I do immediately after you contact me</h2>
        </CardHeader>
        <CardContent className="pb-5">
          <p className="text-base leading-relaxed text-black mb-5">
            You do not need to know the Criminal Procedure Code. Just tell me what happened.
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-black">
            <li>
              <strong>I clarify the situation</strong> - what happened, where the person is, what deadline is next.
            </li>
            <li>
              <strong>I check the documents</strong> - ordinance, court ruling, summons and any available documents.
            </li>
            <li>
              <strong>I assess the risk</strong> - what measure may be ordered and what arguments exist.
            </li>
            <li>
              <strong>I prepare the defence</strong> - challenge, rejection, revocation or a lighter measure.
            </li>
          </ol>
          <CallCta label="Call now - 031 632 01 83" />
        </CardContent>
      </Card>

      <GoogleReviewCard
        lang="en"
        reviewText={`Complicated criminal case with serious accusations. Attorney Lamatic quickly identified the weak points of the case and handled everything firmly. Available anytime, explains everything clearly, calmly and realistically, without false promises.\nThe result was far beyond what I hoped for.`}
      />

      {/* What is your situation right now */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What is your situation right now?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4 pb-5">
          {PROBLEMS.map((item) => (
            <div key={item.to} className="space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-foreground">{item.lead}</p>
              <p className="text-muted-foreground">{item.text}</p>
              <SubServiceLinkButton to={item.to}>{item.linkLabel}</SubServiceLinkButton>
            </div>
          ))}
          <div className="rounded-lg border border-accent bg-[#faf0e6] px-5 py-4">
            <h3 className="text-lg font-semibold">Not sure whether it is police custody, judicial control or a detention proposal?</h3>
            <p className="mt-1">You do not need to know the legal terms. Tell me what happened and I will tell you what needs to be checked immediately.</p>
            <CallCta label="Call now - 031 632 01 83" />
          </div>
        </CardContent>
      </Card>

      {/* What to tell me */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What to tell me or send me</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3 pb-5">
          <p className="font-semibold">Tell me 3 things:</p>
          <p>where the person is · what happened · when the next deadline is</p>
          <p className="font-semibold pt-2">If you have them, send:</p>
          <p>the ordinance · the court ruling · the summons · the Police/Prosecutor documents</p>
          <p className="font-semibold text-foreground pt-2">Don't have all the documents? Call anyway.</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <WhatsAppDocsCta lang="en" variant="green" />
          </div>
        </CardContent>
      </Card>

      {/* Why choose me */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Why choose me for a preventive measure</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>
            <strong>18+ years of experience in criminal law.</strong> I have represented clients in criminal cases and in dealings with the relevant judicial authorities, and my practice includes white-collar crime files and complex investigations.
          </p>
          <p>
            <strong>Legal 500 recognition - White-Collar Crime.</strong> Legal 500 currently lists Bogdan Lamatic in the Next Generation Partners category - White-Collar Crime, Romania. Experience in a criminal case does not only mean knowing the text of the law, but being able to identify quickly what matters procedurally and evidentially when time is limited.
          </p>
          <div className="rounded-lg border border-accent bg-[#faf0e6] px-5 py-4">
            <p className="text-foreground"><span className="font-semibold">I handle your case personally.</span> I do not take on the case only to then automatically pass you to another lawyer. I personally handle the strategy and the essential moments of the mandate.</p>
          </div>
          <p>
            <strong>Extended hours and intervention in urgent situations.</strong> Monday - Friday: 06:00 - 22:00, Saturday - Sunday: 09:00 - 20:00. For criminal emergencies there is also availability outside the usual schedule, depending on the situation. If it concerns custody, an urgent hearing, a search, a detention proposal or an imminent term regarding a preventive measure, call directly.
          </p>
          <p>
            <strong>Discretion and confidentiality.</strong> Discussions with the lawyer and the information received in the exercise of the profession are protected by the rules on professional secrecy.
          </p>
          <CallCta label="Call now - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* Risks */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What you risk if you do not react in time</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <ul className="list-disc pl-6 space-y-2">
            <li>You can miss a 48-hour deadline.</li>
            <li>A more severe measure may be ordered or maintained.</li>
            <li>You may be left with restrictions affecting your work and travel.</li>
            <li>Your personal and professional situation can become complicated quickly.</li>
          </ul>
        </CardContent>
      </Card>

      {/* What preventive measures are */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What preventive measures are and for what purpose they can be taken</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>Preventive measures are procedural measures that may restrict liberty or the exercise of certain rights during the criminal proceedings. They may be taken only under the conditions provided by law.</p>
          <p>
            Article 202 of the Criminal Procedure Code sets the general framework, including the need for a reasonable suspicion and the requirement that the measure be necessary for the procedural purposes provided by law and proportionate to the seriousness of the accusation. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
          </p>
          <p>In essence, preventive measures aim at the proper conduct of the criminal proceedings, preventing evasion from investigation or trial and preventing the commission of another offence. The concrete measure must be analysed in relation to the individual situation of the case.</p>
        </CardContent>
      </Card>

      {/* The 5 preventive measures */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What are the 5 preventive measures</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4 pb-5">
          <div className="space-y-2">
            <p>The Criminal Procedure Code provides five preventive measures: police custody, judicial control, judicial control on bail, house arrest and pre-trial detention.</p>
            <p>Three are custodial - police custody, house arrest and pre-trial detention - and two are restrictive of rights - judicial control and judicial control on bail.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Police custody - maximum 24 hours</h3>
            <p>Police custody is a custodial preventive measure. During the criminal investigation it may be ordered for no more than 24 hours. The short duration does not mean this stage is unimportant, because procedural acts that influence what follows may take place within this interval.</p>
            <p>Depending on the concrete situation, I can intervene for immediate legal advice, assistance at hearings, analysis of the procedural situation, review of the available documents, preparation of the procedural position and preparation of the defence for a possible request for another preventive measure.</p>
            <SubServiceLinkButton to="/en/services/police-custody-24-hours">24-hour police custody - rights, lawyer assistance and what follows</SubServiceLinkButton>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Judicial control</h3>
            <p>Judicial control is a non-custodial preventive measure. The person remains at liberty but must comply with the obligations set by the competent judicial authority. Article 215 of the Criminal Procedure Code governs the content of judicial control and the obligations that may be imposed.</p>
            <p>I analyse the reasons why the measure was ordered, the obligations established, their concrete impact, the proportionality of the restrictions, the development of the case and any new circumstances. Depending on the situation, the remedy, the modification of obligations, the removal of certain restrictions, revocation or replacement of the measure may be considered.</p>
            <SubServiceLinkButton to="/en/services/judicial-control">Judicial control - obligations, complaint, modification and revocation</SubServiceLinkButton>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Judicial control on bail</h3>
            <p>Judicial control on bail is governed separately by the Criminal Procedure Code and involves, in addition to the obligations specific to judicial control, the payment of bail under the conditions established by law. Information about this procedure is included in the page dedicated to judicial control.</p>
            <p>In such a situation I analyse, as the case may be: the conditions of the measure, its appropriateness compared to other measures, the obligations imposed, the bail, the relevant financial situation and the possibility of using a non-custodial measure instead of a more severe one, when the legal framework and the concrete situation allow this argument.</p>
            <SubServiceLinkButton to="/en/services/judicial-control">Judicial control and judicial control on bail</SubServiceLinkButton>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. House arrest</h3>
            <p>House arrest is a custodial preventive measure. The person must remain in the premises where the measure is served and comply with the obligations established, with the exceptions allowed by law or approved by the competent judicial authority. During the criminal investigation it may be ordered for no more than 30 days, and the maximum duration at this stage may reach, through successive extensions under the conditions of the law, 180 days.</p>
            <p>Depending on when you contact me, I prepare the defence against the measure being taken, analyse the available remedy, request replacement with a less severe measure where there are grounds, analyse the possibility of revocation and file requests concerning leaving the premises where there is a justified reason.</p>
            <SubServiceLinkButton to="/en/services/house-arrest">House arrest - appeal, permissions, revocation and replacement</SubServiceLinkButton>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Pre-trial detention</h3>
            <p>Pre-trial detention is the most severe preventive measure provided by the Criminal Procedure Code. During the criminal investigation it may be ordered by a judge for a period of no more than 30 days and may be extended under the conditions of the law, the total duration at this stage not being able to exceed 180 days.</p>
            <p>Intervention can begin from the moment a detention proposal exists. Once the measure has been ordered, the appeal, opposition to the extension, periodic reviews, revocation or replacement of the measure may become relevant.</p>
            <SubServiceLinkButton to="/en/services/pre-trial-detention">Pre-trial detention - proposal, appeal, extension and replacement</SubServiceLinkButton>
          </div>
        </CardContent>
      </Card>

      {/* Working method */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">How I help you - my working method</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>
            <strong>A. Rapid intervention.</strong> The first objective is to establish exactly what happened, what follows, when it follows, what documents exist and which procedural deadline must be observed. I do not wait for the case to reach a more advanced stage in order to identify the risks that already exist.
          </p>
          <p>
            <strong>B. Checking the legal conditions.</strong> I analyse the general conditions provided by Article 202 of the Criminal Procedure Code and the special rules applicable to the respective measure. I check whether the measure is allowed by law, justified by the circumstances of the case, necessary, proportionate and supported by concrete grounds.
          </p>
          <p>
            <strong>C. Appeal, revocation or replacement.</strong> The Criminal Procedure Code separately governs the remedies concerning preventive measures in the criminal investigation (Article 204), in the pre-trial chamber (Article 205) and at trial (Article 206). For judicial control ordered by the prosecutor there is the specific regulation of Article 213, while revocation and replacement are governed by Article 242.
          </p>
          <p>
            <strong>D. Representation throughout the measure.</strong> I follow the development of the case, the deadlines, changes in the evidence, changes in personal circumstances, whether the grounds invoked remain or disappear and the possibility of modifying, revoking or replacing the measure.
          </p>
        </CardContent>
      </Card>

      {/* Practical steps */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Practical steps depending on your situation</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>
            <strong>You have been taken into custody.</strong> Call immediately. Custody cannot exceed 24 hours, and important procedural acts may take place within this interval.
          </p>
          <p>
            <strong>You have learned that the prosecutor is requesting pre-trial detention.</strong> Contact me before the hearing, if possible. The defence can be better prepared before the judge decides.
          </p>
          <p>
            <strong>You are already under judicial control.</strong> Send me the ordinance or the ruling, the obligations established, the date on which the measure was taken or extended and the concrete problem one of the obligations creates for you.
          </p>
          <p>
            <strong>You are under house arrest.</strong> Send the ruling and explain the concrete problem. We can analyse both the continuation of the measure and any justified requests to leave the premises.
          </p>
          <p>
            <strong>You are in pre-trial detention.</strong> Tell me when the measure was taken, whether an extension is coming, at what stage the case is and which documents you have.
          </p>
          <p>
            <strong>The measure was ordered or extended recently.</strong> Tell me the date and time of the pronouncement or communication. In certain procedures the deadline for the remedy is only 48 hours.
          </p>
          <CallCta label="Call now - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions about preventive measures</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ol className="list-decimal pl-6 space-y-3">
            {FAQ.map((item) => (
              <li key={item.q}>
                <strong>{item.q}</strong>
                <p className="mt-1">{item.a}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Need help now */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Do you need help now?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>If you or someone close to you has been taken into custody, is facing or has been placed under pre-trial detention, has been placed under judicial control, has problems with its obligations, is under house arrest, has had a measure extended or wants to challenge it, request its revocation or its replacement with a less severe one, you do not need to work out on your own which request should be filed.</p>
          <p>Tell me what happened and we will check which procedural options exist in the concrete situation.</p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact - free initial assessment</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4 pb-5">
          <p className="font-semibold">If it is an urgent situation, say from the start: „It is about a preventive measure."</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Call now - 031 632 01 83</a>
            </Button>
            <WhatsAppDocsCta lang="en" />
            <Button asChild variant="outline">
              <Link to="/en/contact">Send me the documents by email</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Official resources */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Official resources</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>The legal information on this page refers to the provisions of the Criminal Procedure Code on preventive measures.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Article 202 - purpose, general conditions and categories of preventive measures;</li>
            <li>Article 204 - the remedy during the criminal investigation;</li>
            <li>Article 205 - the remedy in the pre-trial chamber;</li>
            <li>Article 206 - the remedy during the trial;</li>
            <li>Article 209 - police custody;</li>
            <li>Articles 211-215 - judicial control;</li>
            <li>Articles 216-217 - judicial control on bail;</li>
            <li>Articles 218-222 - house arrest;</li>
            <li>Article 223 and following - pre-trial detention;</li>
            <li>Articles 241-242 - cessation by law, revocation and replacement of preventive measures.</li>
          </ul>
          <p>
            (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
          </p>
        </CardContent>
      </Card>

      <RelatedServices current="/en/services/preventive-measures" />
    </section>
  );
}
