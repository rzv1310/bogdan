import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";

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

      <p className="mt-3 text-sm text-muted-foreground">
        5.0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> from 27 Google reviews
      </p>
      <LawyerBioBlock path="/en/services/preventive-measures" lang="en" />

      <ServiceSubServices path="/en/services/preventive-measures" />

      {/* Do you have one of these problems */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Do you have one of these problems?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-6">
          {PROBLEMS.map((item) => (
            <div key={item.to} className="space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-foreground">{item.lead}</p>
              <p className="text-muted-foreground">{item.text}</p>
              <Link to={item.to} className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
                {item.linkLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
          <div className="pt-2">
            <h3 className="text-lg font-semibold">Not sure exactly which measure is being discussed?</h3>
            <p className="mt-1">You do not need to know the exact legal term.</p>
            <p>Tell me what happened, where the person is and what information you received from the Police, the Prosecutor's Office or the court.</p>
            <CallCta label="Call now - 031 632 01 83" />
          </div>
        </CardContent>
      </Card>

      {/* What happens now */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What happens now?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">You or someone close to you has been taken into custody</h3>
            <p>Police custody is a custodial preventive measure that may be ordered for no more than 24 hours. Within this interval, hearings and other important procedural acts may take place.</p>
            <p>Depending on the case, after custody another preventive measure may come into discussion, including judicial control, house arrest or pre-trial detention. That is why it is preferable for the defence strategy to be analysed before the next decision is taken.</p>
            <p>If the person in custody is a family member or someone close to you, you can contact me as well. Tell me:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the person's name;</li>
              <li>where they are;</li>
              <li>which police station, prosecutor's office or authority they were taken to;</li>
              <li>when the custody took place;</li>
              <li>what information you have received so far;</li>
              <li>whether you know when the hearing or the appearance before the judge will take place.</li>
            </ul>
            <p>You do not need to have all the documents in order to contact me.</p>
            <CallCta label="Custody has been ordered - Call now" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">A pre-trial detention proposal is coming</h3>
            <p>This is one of the moments when preparing the defence quickly is essential. Pre-trial detention is the most severe of the preventive measures provided by the Criminal Procedure Code.</p>
            <p>During the criminal investigation, the measure may initially be ordered for no more than 30 days, and extensions are subject to the conditions and limits provided by law. The total duration at this stage cannot exceed 180 days.</p>
            <p>I analyse:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the concrete grounds invoked for detention;</li>
              <li>the general conditions for preventive measures;</li>
              <li>the special conditions for pre-trial detention;</li>
              <li>the relevant available evidence;</li>
              <li>the existence of the procedural risks invoked;</li>
              <li>personal, family and professional circumstances;</li>
              <li>the proportionality of the measure;</li>
              <li>the possibility of applying a less severe measure.</li>
            </ul>
            <p>Depending on the concrete situation, the aim of the defence may be: rejection of the proposal, application of judicial control, application of house arrest, or another solution allowed by law.</p>
            <CallCta label="A detention proposal is coming - Call now" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">You are already under judicial control</h3>
            <p>Judicial control does not involve detention, but it can have a real impact on daily life. There may be obligations concerning:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>appearing before the judicial authority;</li>
              <li>reporting to the police unit in charge of supervision;</li>
              <li>changing residence;</li>
              <li>travelling within certain territorial limits;</li>
              <li>contact with certain persons;</li>
              <li>carrying out certain activities, where such an obligation is established under the conditions of the law.</li>
            </ul>
            <p>The content of judicial control is governed by Article 215 of the Criminal Procedure Code. The fact that an obligation has been established does not mean it must automatically remain unchanged regardless of how the case develops.</p>
            <p>I analyse whether the measure is still necessary, whether the obligations are proportionate, whether new circumstances have arisen, whether certain restrictions can be modified and whether there are grounds for revoking or replacing the measure.</p>
            <CallCta label="Review the judicial control obligations" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">You are under house arrest</h3>
            <p>House arrest is a custodial preventive measure. During the criminal investigation it may be ordered for no more than 30 days, with the possibility of extension under the conditions provided by law, and the maximum duration at this stage is 180 days.</p>
            <p>If the measure has already been ordered, we analyse:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>whether a remedy is available;</li>
              <li>whether the measure is still necessary;</li>
              <li>whether it can be replaced with a less severe one;</li>
              <li>whether new circumstances have arisen;</li>
              <li>whether a request is needed to temporarily leave the premises in a situation allowed by law.</li>
            </ul>
            <CallCta label="I am under house arrest - I want to check my options" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">You are already in pre-trial detention</h3>
            <p>The fact that pre-trial detention has been ordered does not mean the defence analysis is over. Depending on the stage of the case, the following may become relevant:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>the appeal;</li>
              <li>the defence against the extension of the measure;</li>
              <li>the periodic review of the measure;</li>
              <li>revocation;</li>
              <li>replacement with a less severe preventive measure.</li>
            </ul>
            <p>The Criminal Procedure Code allows the revocation of the measure when the grounds that led to it have ceased or relevant new circumstances have arisen, and also governs replacement with a lighter measure when the legal conditions are met.</p>
            <CallCta label="The measure has already been ordered - Check the options" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">You want to challenge a preventive measure</h3>
            <p className="text-foreground"><strong>Do not delay checking the deadline.</strong></p>
            <p>In the field of preventive measures there are very short procedural deadlines. For the appeals governed by Articles 204-206 of the Criminal Procedure Code, the deadline is 48 hours from the pronouncement or, as the case may be, from communication. There is also a specific remedy against the prosecutor's ordinance imposing judicial control, governed by Article 213 of the Criminal Procedure Code.</p>
            <p>That is why the first thing I check is: which measure was ordered, by which act, by whom, at what stage the case is, when the decision was pronounced, when it was communicated and which procedural deadline applies to the concrete situation.</p>
            <CallCta label="I want to check the deadline" />
          </div>
        </CardContent>
      </Card>

      {/* What I do immediately */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What I do immediately after you contact me</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>You do not need to know the Criminal Procedure Code, nor which request should be filed. Just tell me what happened.</p>
          <p>
            <strong>1. I clarify the situation.</strong> I establish where the person is, whether they are a suspect or a defendant, which measure was discussed, proposed or ordered, who ordered it or who is requesting it, at what stage the case is, when the next hearing or term is, and whether a procedural deadline is running.
          </p>
          <p>
            <strong>2. I analyse the available documents.</strong> I review the documents you have and, within the limits of the access allowed by law, the relevant documents in the file. I identify the accusation, the grounds of the measure, the prosecutor's arguments, the procedural situation and the elements that can be used in the defence.
          </p>
          <p>
            <strong>3. I assess the procedural risk.</strong> I analyse the legal conditions applicable to the measure and the client's concrete circumstances. What matters includes the nature of the accusation, the evidence, procedural conduct, relevant records, family and professional situation, ties to the community, the development of the investigation and the risks invoked by the prosecution.
          </p>
          <p>
            <strong>4. I build the defence.</strong> Depending on the situation, the strategy may aim at avoiding a preventive measure, rejecting the detention proposal, keeping the person at liberty, applying a less severe measure, challenging the measure ordered, modifying certain obligations, revoking or replacing it. No outcome can be guaranteed.
          </p>
          <CallCta label="Call now - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* What to tell me */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What to tell me or send me</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>So that I can understand the situation as quickly as possible, tell me from the start:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the name of the person concerned;</li>
            <li>where they are at this moment;</li>
            <li>whether they have been taken into custody;</li>
            <li>their status in the case, if you know it;</li>
            <li>which measure has been proposed or ordered;</li>
            <li>which institution is handling the case;</li>
            <li>when the next hearing or term is;</li>
            <li>when the decision was pronounced or communicated, if any.</li>
          </ul>
          <p>If you have them, send me the ordinance, the court ruling, the summons, the documents received from the Police or the Prosecutor's Office, the documents concerning the preventive measure and any other relevant document.</p>
          <p>Do not wait until you have gathered all the documents before contacting me. Especially in the case of custody or an imminent term, the information you already have may be enough for a first discussion.</p>
        </CardContent>
      </Card>

      {/* Why choose me */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Why choose me for a preventive measure</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>18+ years of experience in criminal law.</strong> I have represented clients in criminal cases and in dealings with the relevant judicial authorities, and my practice includes white-collar crime files and complex investigations.
          </p>
          <p>
            <strong>Legal 500 recognition - White-Collar Crime.</strong> Legal 500 currently lists Bogdan Lamatic in the Next Generation Partners category - White-Collar Crime, Romania. Experience in a criminal case does not only mean knowing the text of the law, but being able to identify quickly what matters procedurally and evidentially when time is limited.
          </p>
          <p>
            <strong>I handle your case personally.</strong> I personally handle the strategy and the representation for which I have taken the mandate and remain your point-of-contact lawyer. If the particularities of the case require cooperation with other professionals, I personally coordinate the defence.
          </p>
          <p>
            <strong>Extended hours and intervention in urgent situations.</strong> Monday - Friday: 06:00 - 22:00, Saturday - Sunday: 09:00 - 20:00. For criminal emergencies there is also availability outside the usual schedule, depending on the situation. If it concerns custody, an urgent hearing, a search, a detention proposal or an imminent term regarding a preventive measure, call directly.
          </p>
          <p>
            <strong>Discretion and confidentiality.</strong> Discussions with the lawyer and the information received in the exercise of the profession are protected by the rules on professional secrecy.
          </p>
          <CallCta label="Talk directly to lawyer Bogdan Lamatic" />
        </CardContent>
      </Card>

      {/* Risks */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What you risk if you do not react in time</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>A preventive measure should not be treated as a mere procedural formality. It can produce real effects before the criminal case is finally resolved.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>A more severe measure may be ordered.</strong> When there are arguments for a less restrictive measure, they must be identified and presented at the right procedural moment.
            </li>
            <li>
              <strong>You may miss a short procedural deadline.</strong> In the field of preventive measures there are situations in which the deadline for filing the remedy is only 48 hours.
            </li>
            <li>
              <strong>You may keep complying with obligations that could be changed.</strong> Judicial control can affect travel, trips, professional activity, the relationship with certain persons and the way you organise your daily life.
            </li>
            <li>
              <strong>A custodial measure may continue even though the case has changed.</strong> The Criminal Procedure Code governs the revocation and replacement of preventive measures when the legal conditions are met.
            </li>
            <li>
              <strong>The effects are not only legal.</strong> A preventive measure can directly affect liberty, family, employment, running a business, travel, professional relationships, reputation and the ability to continue certain activities.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* What preventive measures are */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What preventive measures are and for what purpose they can be taken</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Preventive measures are procedural measures that may restrict liberty or the exercise of certain rights during the criminal proceedings. They may be taken only under the conditions provided by law.</p>
          <p>
            Article 202 of the Criminal Procedure Code sets the general framework, including the need for a reasonable suspicion and the requirement that the measure be necessary for the procedural purposes provided by law and proportionate to the seriousness of the accusation. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Legislative Portal</a>)
          </p>
          <p>In essence, preventive measures aim at the proper conduct of the criminal proceedings, preventing evasion from investigation or trial and preventing the commission of another offence. The concrete measure must be analysed in relation to the individual situation of the case.</p>
        </CardContent>
      </Card>

      {/* The 5 preventive measures */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">What are the 5 preventive measures</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-6">
          <div className="space-y-2">
            <p>The Criminal Procedure Code provides five preventive measures: police custody, judicial control, judicial control on bail, house arrest and pre-trial detention.</p>
            <p>Three are custodial - police custody, house arrest and pre-trial detention - and two are restrictive of rights - judicial control and judicial control on bail.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Police custody - maximum 24 hours</h3>
            <p>Police custody is a custodial preventive measure. During the criminal investigation it may be ordered for no more than 24 hours. The short duration does not mean this stage is unimportant, because procedural acts that influence what follows may take place within this interval.</p>
            <p>Depending on the concrete situation, I can intervene for immediate legal advice, assistance at hearings, analysis of the procedural situation, review of the available documents, preparation of the procedural position and preparation of the defence for a possible request for another preventive measure.</p>
            <Link to="/en/services/police-custody-24-hours" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              24-hour police custody - rights, lawyer assistance and what follows <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Judicial control</h3>
            <p>Judicial control is a non-custodial preventive measure. The person remains at liberty but must comply with the obligations set by the competent judicial authority. Article 215 of the Criminal Procedure Code governs the content of judicial control and the obligations that may be imposed.</p>
            <p>I analyse the reasons why the measure was ordered, the obligations established, their concrete impact, the proportionality of the restrictions, the development of the case and any new circumstances. Depending on the situation, the remedy, the modification of obligations, the removal of certain restrictions, revocation or replacement of the measure may be considered.</p>
            <Link to="/en/services/judicial-control" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Judicial control - obligations, complaint, modification and revocation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Judicial control on bail</h3>
            <p>Judicial control on bail is governed separately by the Criminal Procedure Code and involves, in addition to the obligations specific to judicial control, the payment of bail under the conditions established by law. Information about this procedure is included in the page dedicated to judicial control.</p>
            <p>In such a situation I analyse, as the case may be: the conditions of the measure, its appropriateness compared to other measures, the obligations imposed, the bail, the relevant financial situation and the possibility of using a non-custodial measure instead of a more severe one, when the legal framework and the concrete situation allow this argument.</p>
            <Link to="/en/services/judicial-control" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Judicial control and judicial control on bail <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. House arrest</h3>
            <p>House arrest is a custodial preventive measure. The person must remain in the premises where the measure is served and comply with the obligations established, with the exceptions allowed by law or approved by the competent judicial authority. During the criminal investigation it may be ordered for no more than 30 days, and the maximum duration at this stage may reach, through successive extensions under the conditions of the law, 180 days.</p>
            <p>Depending on when you contact me, I prepare the defence against the measure being taken, analyse the available remedy, request replacement with a less severe measure where there are grounds, analyse the possibility of revocation and file requests concerning leaving the premises where there is a justified reason.</p>
            <Link to="/en/services/house-arrest" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              House arrest - appeal, permissions, revocation and replacement <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Pre-trial detention</h3>
            <p>Pre-trial detention is the most severe preventive measure provided by the Criminal Procedure Code. During the criminal investigation it may be ordered by a judge for a period of no more than 30 days and may be extended under the conditions of the law, the total duration at this stage not being able to exceed 180 days.</p>
            <p>Intervention can begin from the moment a detention proposal exists. Once the measure has been ordered, the appeal, opposition to the extension, periodic reviews, revocation or replacement of the measure may become relevant.</p>
            <Link to="/en/services/pre-trial-detention" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Pre-trial detention - proposal, appeal, extension and replacement <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Working method */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">How I help you - my working method</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
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
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Practical steps depending on your situation</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
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
          <CallCta label="Check your options now" />
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
                <p className="mt-1">{item.a}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Need help now */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Do you need help now?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>If you or someone close to you has been taken into custody, is facing or has been placed under pre-trial detention, has been placed under judicial control, has problems with its obligations, is under house arrest, has had a measure extended or wants to challenge it, request its revocation or its replacement with a less severe one, you do not need to work out on your own which request should be filed.</p>
          <p>Tell me what happened and we will check which procedural options exist in the concrete situation.</p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact - free initial assessment</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>Bogdan Lamatic - criminal law attorney, Bucharest. Phone: 031 632 01 83.</p>
          <p>Hours: Monday - Friday: 06:00 - 22:00; Saturday - Sunday: 09:00 - 20:00.</p>
          <p>If it is an urgent situation, say from the start: „It is about a preventive measure.”</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Call me now</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/en/contact">Send your request and documents</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Official resources */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Official resources</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
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
