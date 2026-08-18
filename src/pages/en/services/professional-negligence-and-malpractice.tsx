import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";

import RelatedServices from "@/components/RelatedServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";

const subPages = [
  {
    to: "/en/services/medical-malpractice-compensation",
    title: "Medical malpractice compensation",
    text: "Have you suffered damage after a medical act? I analyse the file, the medical evidence and the damage to build a solid compensation claim. Civil liability can be pursued independently of criminal proceedings.",
  },
  {
    to: "/en/services/doctor-criminal-liability",
    title: "Doctor criminal liability",
    text: "Are you a doctor summoned by the Police or the Prosecutor's Office? I check what professional conduct is attributed to you, which standard applies and how causality is established. Defence starts before the first statement.",
  },
  {
    to: "/en/services/malpractice-committee",
    title: "Malpractice committee",
    text: "Do you want to file a complaint with the Malpractice Committee or have you already received the decision? I prepare the complaint with a clear chronology and relevant documents, and I can analyse the decision for appeal within 15 days.",
  },
  {
    to: "/en/services/medical-negligence-bodily-injury",
    title: "Bodily injury from medical negligence",
    text: "Are you being investigated for bodily injury following a medical act or are you the injured patient? I analyse the medico-legal report and distinguish between medical complication and professional criminal fault.",
  },
  {
    to: "/en/services/medical-negligence-manslaughter",
    title: "Manslaughter from medical negligence",
    text: "Does the case involve the death of a patient? I reconstruct the medical context and verify whether the fatal outcome can be legally attributed to the conduct under investigation, separating tragic cases from those with criminal fault.",
  },
  {
    to: "/en/services/complaint-college-of-physicians",
    title: "Complaint to the College of Physicians",
    text: "Do you want to file a disciplinary complaint against a doctor? I help you structure the facts and documents so that the complaint targets professional liability, distinct from civil malpractice.",
  },
  {
    to: "/en/services/dental-malpractice",
    title: "Dental malpractice",
    text: "Problems after an implant, extraction or endodontic treatment? I analyse the dental file and radiographs to see if there was a deviation from the dental professional standard and what legal options are available.",
  },
];

export default function MalpracticeEn() {
  useSEO({
    keywords: "medical malpractice lawyer romania, professional negligence attorney, malpractice defense",
    title: "Medical malpractice lawyer | Bogdan Lamatic | Bucharest | Negligence in service",
    description: "Defense and representation in medical malpractice cases.",
    alternates: {
      en: "/en/services/professional-negligence-and-malpractice",
      ro: "/servicii/neglijenta-profesionala-si-malpraxis",
      xDefault: "/servicii/neglijenta-profesionala-si-malpraxis",
    },
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
              { "@type": "ListItem", position: 2, name: "Services", item: "https://avocatpenalbucuresti.ro/en/services" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Professional negligence and malpractice",
                item: "https://avocatpenalbucuresti.ro/en/services/professional-negligence-and-malpractice",
              },
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
            name: "Medical malpractice lawyer | Bogdan Lamatic | Bucharest | Negligence in service",
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
              url: "https://www.google.com/maps?cid=17818591254142574295",
            },
            hasMap: "https://www.google.com/maps?cid=17818591254142574295",
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 (31) 632 01 83" },
            telephone: "+40 (31) 632 01 83",
          }),
        }}
      />

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
                <BreadcrumbPage>Professional negligence and malpractice</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-2xl font-semibold mb-4">Medical malpractice lawyer | Bogdan Lamatic | Bucharest | Negligence in service</h1>
          <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              <span className="block"><strong>In malpractice cases, the first days matter most.</strong></span>
              <span className="block">The medical file, the medico-legal expert reports and the statements given at the beginning of the investigation can decide whether criminal liability is established or not.</span>
              <span className="block">Do not wait for the indictment to ask for help.</span>
            </p>
          </div>

          <ServiceHeroCta lang="en" ariaLabel="Call now for malpractice advice" />

          <LawyerBioBlock path="/en/services/professional-negligence-and-malpractice" lang="en" />
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-base leading-relaxed text-muted-foreground">
            This parent page gives a summary for each direction. Choose the topic below for details, frequently asked questions and the concrete action for your case.
          </p>
          {subPages.map((sub) => (
            <Card key={sub.to} className="border-accent">
              <CardContent className="p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold leading-tight">{sub.title}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{sub.text}</p>
                </div>
                <Button asChild variant="outline" className="shrink-0 gap-2">
                  <Link to={sub.to}>
                    See the page <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <ServiceFaq
          title="Frequently asked questions"
          ordered
          items={[
            {
              q: "Can I claim damages without a criminal trial?",
              a: "Yes. Civil liability can be pursued separately (Malpractice Committee + civil action), independently of criminal proceedings.",
            },
            {
              q: "What is the limitation period?",
              a: "Generally 3 years for civil malpractice; for criminal offenses (e.g., arts. 192/196 CP) criminal limitation periods apply.",
            },
            {
              q: "What if the unit/doctor has no insurance?",
              a: "It is a sanctionable breach; civil liability remains and damages can be pursued directly.",
            },
            {
              q: "How do I choose the right path for my situation?",
              a: "Depending on your goal: compensation (civil), criminal defence (criminal), Committee decision (appeal) or disciplinary liability (College of Physicians). We discuss together which path makes sense.",
            },
          ]}
        />

        <RelatedServices current="/en/services/professional-negligence-and-malpractice" lang="en" />
      </section>
    </>
  );
}
