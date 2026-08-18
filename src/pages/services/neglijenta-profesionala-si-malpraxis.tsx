import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { HERO_CTA_CLASS } from "@/lib/cta";


import RelatedServices from "@/components/RelatedServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";

const subPages = [
  {
    to: "/servicii/despagubiri-malpraxis-medical",
    title: "Despăgubiri malpraxis medical",
    text: "Ai suferit un prejudiciu în urma unui act medical? Analizez dosarul, expertiza și dauna pentru a construi o cerere de despăgubiri solidă. Răspunderea civilă se poate urmări separat de cea penală.",
  },
  {
    to: "/servicii/raspundere-penala-medic",
    title: "Răspundere penală medic",
    text: "Ești medic chemat la Poliție sau Parchet? Verific ce conduită profesională ți se impută, ce standard aplică și cum se stabilește legătura cauzală. Apărarea începe înainte de prima declarație.",
  },
  {
    to: "/servicii/comisia-de-malpraxis",
    title: "Comisia de malpraxis",
    text: "Vrei să sesizezi Comisia de malpraxis sau ai primit deja decizia? Pregătesc sesizarea cu o cronologie clară și documente relevante, iar decizia o pot analiza pentru contestare în termen de 15 zile.",
  },
  {
    to: "/servicii/vatamare-corporala-din-culpa-medicala",
    title: "Vătămare corporală din culpă medicală",
    text: "Ești cercetat pentru vătămare în urma unui act medical sau ești pacientul vătămat? Analizez expertiza medico-legală și distincția dintre complicația medicală și culpa profesională penală.",
  },
  {
    to: "/servicii/ucidere-din-culpa-medicala",
    title: "Ucidere din culpă medicală",
    text: "Cauza implică decesul unui pacient? Reconstruiesc contextul medical și verific dacă rezultatul fatal se poate atribui legal conduitei investigate, separând cazurile tragice de cele cu vinovăție penală.",
  },
  {
    to: "/servicii/plangere-colegiul-medicilor",
    title: "Plângere Colegiul Medicilor",
    text: "Dorești să depui plângere disciplinară împotriva unui medic? Te ajut să structurezi faptele și documentele astfel încât sesizarea să vizeze răspunderea profesională, distinctă de malpraxisul civil.",
  },
  {
    to: "/servicii/malpraxis-stomatologic",
    title: "Malpraxis stomatologic",
    text: "Probleme după implant, extracție sau tratament endodontic? Analizez fișa și radiografiile pentru a vedea dacă există o abatere de la standardul profesional stomatologic și ce căi legale ai.",
  },
];

const FAQ = [
  {
    q: "Un rezultat medical nefavorabil înseamnă automat malpraxis?",
    a: "Nu. Trebuie analizat dacă a existat o abatere de la standardul profesional, dacă s-a produs un prejudiciu și dacă există o legătură între conduita medicală și acel prejudiciu.",
  },
  {
    q: "Pot cere despăgubiri fără proces penal?",
    a: "Da. Răspunderea civilă se poate valorifica separat (Comisie de malpraxis + acțiune civilă), independent de latura penală.",
  },
  {
    q: "Care este termenul de prescripție?",
    a: "De regulă, 3 ani pentru malpraxis pe cale civilă; pentru infracțiuni (ex. art. 192/196 CP) se aplică termenele penale.",
  },
  {
    q: "Ce se întâmplă dacă unitatea/medicul nu are asigurare?",
    a: "E abatere sancționabilă; răspunderea civilă rămâne, iar despăgubirile pot fi urmărite direct.",
  },
  {
    q: "Cum aleg calea potrivită pentru situația mea?",
    a: "În funcție de obiectiv: despăgubiri (civil), apărare penală (penal), decizia Comisiei (contestare) sau răspundere disciplinară (Colegiu). Discutăm împreună care cale are sens.",
  },
];



export default function Malpraxis() {
  useSEO({
    keywords: "avocat malpraxis medical bucuresti",
    canonical: "/servicii/neglijenta-profesionala-si-malpraxis",
    alternates: { ro: "/servicii/neglijenta-profesionala-si-malpraxis", en: "/en/services/professional-negligence-and-malpractice", xDefault: "/servicii/neglijenta-profesionala-si-malpraxis" },
    locale: "ro_RO",
    title: "Avocat Malpraxis Medical București - Bogdan Lamatic",
    description:
      "Avocat malpraxis medical în București. Evaluare rapidă, strategie integrată civil & penal. Suna acum!",
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
              { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
              { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/servicii" },
              {
                "@type": "ListItem",
                position: 3,
                name: "Neglijență profesională și malpraxis",
                item: "https://avocatpenalbucuresti.ro/servicii/neglijenta-profesionala-si-malpraxis",
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
            name: "Avocat Malpraxis Medical București - Bogdan Lamatic",
            description: "Avocat malpraxis medical în București. Evaluare rapidă, strategie integrată civil & penal. Suna acum!",
            url: "https://avocatpenalbucuresti.ro/servicii/neglijenta-profesionala-si-malpraxis",
            areaServed: [{ "@type": "Country", name: "România" }, { "@type": "Place", name: "Uniunea Europeană" }],
            availableLanguage: ["ro", "en"],
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
            provider: { "@type": "Attorney", name: "Bogdan Lamatic", telephone: "+40 (31) 632 01 83" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />


      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <div className="flex flex-col">
          <Breadcrumb className="order-last mt-5 mb-5 md:order-first md:mt-0 md:mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/servicii">Servicii</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Neglijență profesională și malpraxis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-2xl font-semibold mb-4">
            Avocat Malpraxis Medical București
          </h1>

          <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
            <p className="text-foreground">
              <span className="block"><strong>În cazurile de malpraxis, primele zile pot conta decisiv.</strong></span>
              <span className="block">Documentația medicală, expertizele și primele demersuri pot influența atât obținerea despăgubirilor de către pacient, cât și stabilirea unei eventuale răspunderi penale a medicului.</span>
              <span className="block">Analizez cazul de la început și stabilesc calea juridică potrivită.</span>
            </p>
          </div>

          <ServiceHeroCta lang="ro" ariaLabel="Sună acum - avocat malpraxis" />

          <LawyerBioBlock path="/servicii/neglijenta-profesionala-si-malpraxis" lang="ro" />
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te pot ajuta într-un caz de malpraxis medical</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Alege mai jos subiectul care te interesează, vei găsi detalii, întrebări frecvente și acțiunea concretă pentru cazul tău.
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
                    Vezi pagina <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 space-y-3 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-semibold leading-none tracking-tight text-foreground">Când poate exista malpraxis medical?</h2>
          <p>
            Un rezultat medical nefavorabil nu înseamnă automat malpraxis. Într-un caz concret trebuie analizate conduita medicului sau a unității medicale, standardul profesional aplicabil, prejudiciul produs și legătura dintre faptă și consecințele pentru pacient.
          </p>
          <p>
            În funcție de situație, răspunderea poate fi civilă, disciplinară sau penală, iar aceste proceduri au obiective și reguli diferite. Primul pas este analiza documentației medicale și alegerea căii juridice potrivite cazului.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce documente sunt importante de la început?</h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pentru o primă evaluare sunt utile biletul de externare, foaia de observație, investigațiile, consimțământul informat, recomandările medicale și orice expertiză sau sesizare deja formulată. Dacă nu ai dosarul medical complet, putem stabili ce documente trebuie solicitate.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Nu trebuie să ai toate actele pentru prima discuție.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className={HERO_CTA_CLASS} aria-label="☎ Sună-mă acum - 031 632 01 83">
              <a href="tel:+40316320183">☎ Sună-mă acum - 031 632 01 83</a>
            </Button>
          </div>
        </div>

        <ServiceFaq title="Întrebări frecvente" ordered items={FAQ} />


        <RelatedServices current="/servicii/neglijenta-profesionala-si-malpraxis" />
      </section>
    </>
  );
}
