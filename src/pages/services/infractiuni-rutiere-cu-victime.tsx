import { ServiceAuthorBio } from "@/components/services/ServiceAuthorBio";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import RoadAccidentsChart from "@/components/charts/RoadAccidentsChart";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
export default function InfractiuniRutiere() {
  useSEO({
    keywords: "avocat accidente rutiere bucuresti, avocat infractiuni rutiere",
    canonical: "/servicii/infractiuni-rutiere-cu-victime",
    alternates: { ro: "/servicii/infractiuni-rutiere-cu-victime", en: "/en/services/road-traffic-offenses", xDefault: "/servicii/infractiuni-rutiere-cu-victime" },
    locale: "ro_RO",
    title: "Avocat accidente rutiere București | Avocat infracțiuni rutiere - Bogdan Lamatic",
    description:
      "Avocat penal Bogdan Lamatic, București. Apărare în infracțiuni rutiere (alcool/droguri, fără permis, părăsire loc). Accidente cu/fără victime. Consultanță rapidă.",
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      {(
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Acasă",
                    "item": "https://avocatpenalbucuresti.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": "https://avocatpenalbucuresti.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Infracțiuni rutiere cu / fără victime",
                    "item": "https://avocatpenalbucuresti.ro/servicii/infractiuni-rutiere-cu-victime"
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                "name": "Servicii avocat infracțiuni rutiere cu / fără victime",
                "description": "Apărare în infracțiuni rutiere (alcool/droguri, fără permis, părăsire loc). Accidente cu/fără victime",
                "url": "https://avocatpenalbucuresti.ro/servicii/infractiuni-rutiere-cu-victime",
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "România"
                  },
                  {
                    "@type": "Place",
                    "name": "Uniunea Europeană"
                  }
                ],
                "availableLanguage": ["ro", "en"],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Strada Colonel Stefan Stoika 22",
                  "addressLocality": "București",
                  "addressRegion": "Bucuresti",
                  "postalCode": "012244",
                  "addressCountry": "RO",
                  "url": "https://www.google.com/maps?cid=17818591254142574295"
                },
                "hasMap": "https://www.google.com/maps?cid=17818591254142574295",
                "provider": {
                  "@type": "Attorney",
                  "name": "Bogdan Lamatic",
                  "telephone": "+40 (31) 632 01 83"
                }
              })
            }}
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
                                    "name": "0,80 g/l în sânge e întotdeauna penal?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Da, peste prag e art. 336 alin. (1); sub prag discutăm contravențional (Codul rutier). În cazul drogurilor, contează influența/substanța depistată. (Portal Legislativ)"
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Dacă refuz recoltarea?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "E faptă separată (art. 337), chiar dacă alcoolemia ar fi ieșit sub prag. (Portal Legislativ)"
                                    }
                        },
                        {
                                    "@type": "Question",
                                    "name": "Când nu e infracțiune părăsirea locului?",
                                    "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Legea prevede situații limitate (ex. transportul răniților cu reîntoarcere imediată). (Portal Legislativ)"
                                    }
                        }
            ]
}),
        }}
      />
        </>
      )}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-muted-foreground">Servicii</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Infracțiuni rutiere cu / fără victime</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Avocat accidente rutiere București | Avocat infracțiuni rutiere - Bogdan Lamatic
      </h1>
      <ServiceAuthorBio lang="ro" path="/servicii/infractiuni-rutiere-cu-victime" />

      <ServiceHeroCta lang="ro" ariaLabel="Sună acum - avocat infracțiuni rutiere" />

      <p className="mt-3 text-sm text-muted-foreground">
        5,0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> din 27 de recenzii Google
      </p>
      <ServiceSubServices path="/servicii/infractiuni-rutiere-cu-victime" />

            {/* De ce să apelezi la mine */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să apelezi la mine pentru un dosar rutier?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-1">
            <li>Intervin rapid pe faza de urmărire penală (acte imediate: memorii, cereri de probatoriu, audiere asistată).</li>
            <li>Atac probatoriul tehnic (etilotest, recoltare biologică, toxicologie, constatări tehnico-științifice, reconstituire).</li>
            <li>Prioritizez soluțiile pragmatice: reducerea încadrării, renunțarea la urmărire, amânarea aplicării pedepsei, acord de recunoaștere, mediere/împăcare unde legea permite.</li>
            <li>Gândesc cap-coadă: apărare penală + pretenții civile (daune materiale și morale) sau protejarea patrimoniului clientului.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Infracțiuni fără victime */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce acoperă „infracțiuni rutiere fără victime”</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Conducere fără permis - art. 335 Cod penal. Apărarea vizează situații de necorespundere categorie, permis anulat/suspendat sau lipsă drept de a conduce în România. (Portal Legislativ)
            </li>
            <li>
              Conducere sub influența alcoolului sau a substanțelor psihoactive - art. 336. Pragul penal pentru alcool este peste 0,80 g/l alcool pur în sânge; pentru droguri contează starea de influență confirmată biologic/toxicologic. (Portal Legislativ)
            </li>
            <li>
              Refuz/sustragere de la prelevare mostre biologice - art. 337. E o infracțiune distinctă, indiferent dacă ulterior s-ar dovedi alcoolemie sub prag. Strategia se concentrează pe legalitatea solicitării, informarea corectă și condițiile recoltării. (Portal Legislativ)
            </li>
            <li>
              Vehicul neînmatriculat/număr fals - art. 334. Analizăm statutul vehiculului, eroarea scuzabilă, situațiile speciale (de ex., tractoare agricole/forestiere și efectele deciziilor recente). (Portal Legislativ)
            </li>
            <li>
              Împiedicarea/îngreunarea circulației, întreceri neautorizate - art. 339. Vizat inclusiv racing pe drum public, semnalizare montată/modificată fără autorizație. (sintact.ro, ugb.ro)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Infracțiuni cu victime */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">„Infracțiuni rutiere cu victime”</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Părăsirea locului accidentului - art. 338. Excepțiile legale (transportul răniților, autospeciale în misiune etc.) trebuie încadrate strict; discutăm despre definiția „accidentului” și condițiile exoneratoare. (Portal Legislativ)
            </li>
            <li>
              Vătămare corporală din culpă - art. 196. Cheia e delimitarea medical-legală a leziunilor și a culpei în raport cu regulile de circulație; posibil cumul cu alte fapte rutiere. (Portal Legislativ, Lege5)
            </li>
            <li>
              Ucidere din culpă - art. 192. Analizăm situațiile agravate (nerespectarea dispozițiilor legale/măsurilor de prevedere) și raportul cu alte infracțiuni rutier-conexe. (Portal Legislativ)
            </li>
          </ul>
          <div className="mt-4">
            <h3 className="font-semibold">Fapte corelate care pot atrage răspundere</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Nerespectarea atribuțiilor privind verificarea tehnică/ITP sau reparații - art. 340. Vizează persoane cu atribuții tehnice; în forma agravată când există victime. (Portal Legislativ)
              </li>
              <li>
                Lucrări neautorizate în zona drumului public - art. 341. Răspunderea celor care creează pericole pe drum. (Portal Legislativ)
              </li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Toate textele citate sunt din Codul penal (Legea nr. 286/2009), în versiuni oficiale sau decizii ale instanțelor relevante. Verificările se fac pe legislatie.just.ro și alte publicații oficiale. (Portal Legislativ)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Plan de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum abordez un dosar rutier (plan de lucru în 4 pași)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Audit juridic & tehnic (T0-T14 zile).</strong> Verific invitații/citații, ordonanțe, buletine toxicologice, lanțul de custodie, fișe aparate, body-cam, GPS, camere trafic, martori. Cer probe utile (expertiză criminalistică auto, reconstituire, audiere martori cheie).
            </li>
            <li>
              <strong>Măsuri urgente.</strong> Plângeri împotriva actelor de urmărire penală, cereri de ridicare restricții, solicitări pentru restituirea permisului când e posibil, protecția patrimoniului.
            </li>
            <li>
              <strong>Apărare activă.</strong> Contrazic concluzii tehnice slabe, ridic excepții procedurale (nulități), valorific cauze justificative/neimputabilitate; negociez acord de recunoaștere când aduce rezultat mai bun.
            </li>
            <li>
              <strong>Componenta civilă.</strong> Dacă reprezinți victima, cuantificăm riguros prejudiciul (RCA/CASCO/daune morale). Dacă ești inculpat, urmăresc limitarea răspunderii și mecanisme de reparare amiabilă.
            </li>
          </ol>
          <div className="pt-2">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună pentru consultanță dosar rutier">
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Șoferi profesioniști & companii */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pentru șoferi profesioniști & companii</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Am asistat grupuri din energie, logistică, transport, retail - proiecte care cer coordonare multi-disciplinară (compliance, investigații, date, muncă).
          </p>
          <p>Procedurile interne și training-ul șoferilor reduc masiv riscul penal.</p>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="space-y-2">
            <li>
              <strong>0,80 g/l în sânge e întotdeauna penal?</strong> Da, peste prag e art. 336 alin. (1); sub prag discutăm contravențional (Codul rutier). În cazul drogurilor, contează influența/substanța depistată. (Portal Legislativ)
            </li>
            <li>
              <strong>Dacă refuz recoltarea?</strong> E faptă separată (art. 337), chiar dacă alcoolemia ar fi ieșit sub prag. (Portal Legislativ)
            </li>
            <li>
              <strong>Când nu e infracțiune părăsirea locului?</strong> Legea prevede situații limitate (ex. transportul răniților cu reîntoarcere imediată). (Portal Legislativ)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Documente utile */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Documente utile la prima discuție</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Proces-verbal eveniment, planșe foto, schiță, date martori</li>
            <li>Buletin etilotest, dovadă reținere permis, buletine toxicologie</li>
            <li>Acte medicale (victime), poliță RCA, devize reparații</li>
            <li>Ordonanțe/încheieri primite, înregistrări video (dacă există)</li>
          </ul>
        </CardContent>
      </Card>

      {/* Despre mine */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Despre mine, pe scurt</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Avocat în Baroul București de 18 ani; practică penală, inclusiv accidente rutiere cu vătămare sau deces; pledoarii la toate nivelurile de jurisdicție.
          </p>
          <p>Recunoaștere Legal 500 (Rising Star / Next Generation Partner).</p>
        </CardContent>
      </Card>

      {/* Contact rapid */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact rapid - consultanță inițială</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
             📍 București • 📞 <a className="underline" href="tel:+40316320183">+40 (31) 632 01 83</a> • ✉️ <a className="underline" href="mailto:contact@avocatpenalbucuresti.ro">contact@avocatpenalbucuresti.ro</a>.
            Scrie-mi sau sună pentru evaluarea dosarului tău - răspund prompt și clar!
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">Trimite email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Articole din Codul Penal */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Articole Utile din Codul Penal</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>Art. 334 - Vehicul neînmatriculat/număr fals.</li>
            <li>Art. 335 - Conducerea fără permis.</li>
            <li>Art. 336 - Conducerea sub influența alcoolului/drogurilor.</li>
            <li>Art. 337 - Refuz/sustragere la prelevare.</li>
            <li>Art. 338 - Părăsirea locului accidentului.</li>
            <li>Art. 339 - Împiedicarea/îngreunarea circulației, întreceri neautorizate. (sintact.ro)</li>
            <li>Art. 340 - Verificare tehnică/ITP & reparații.</li>
            <li>Art. 341 - Lucrări neautorizate în zona drumului public.</li>
            <li>Art. 196 - Vătămare corporală din culpă.</li>
            <li>Art. 192 - Ucidere din culpă.</li>
          </ul>
        </CardContent>
      </Card>

      <RoadAccidentsChart />
        <RelatedServices current="/servicii/infractiuni-rutiere-cu-victime" />

      </section>
    </>
  );
}
