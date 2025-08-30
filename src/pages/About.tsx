import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // SEO
  useSEO({
    title: lang === "en" ? "About me | Attorney Bogdan Lamatic" : "Despre mine | Avocat Bogdan Lamatic | Bucuresti",
    description:
      lang === "en"
        ? "About attorney Bogdan Lamatic: experience, recognitions, publications and professional background."
        : "Despre avocat Bogdan Lamatic - informații, experiență și prezentare profesională.",
  });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bogdan-Constantin Lamatic",
    jobTitle: "Attorney",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bucuresti",
      addressRegion: "012244",
      streetAddress: "Strada Colonel Stefan Stoika 22",
      addressCountry: "RO",
    },
    email: "mailto:bogdan.lamatic@yahoo.com",
    telephone: "+40 745 506 443",
    memberOf: [
      { "@type": "Organization", name: "Bucharest Bar" },
      { "@type": "Organization", name: "Romanian Lawyers Union" }
    ],
    url: typeof window !== "undefined" ? window.location.href : undefined,
  } as const;

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <p className="sr-only">{lang === "en" ? "About me" : t.nav.about}</p>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{lang === "en" ? "Home" : "Acasă"}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{lang === "en" ? "About me" : t.nav.about}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* EN: Europass CV */}
      {lang === "en" ? (
        <main className="mt-6 space-y-8">
          <header>
            <p className="text-sm text-muted-foreground">Curriculum vitae</p>
            <h1 className="text-2xl font-semibold tracking-tight">Bogdan Lamatic - About Me</h1>
          </header>

          <section aria-labelledby="personal-info" className="grid gap-4">
            <h2 id="personal-info" className="text-xl font-medium">Personal information</h2>
            <dl className="grid gap-2 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Name/Surname</dt>
                <dd className="font-medium">Lamatic Bogdan-Constantin</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Address</dt>
                <dd className="font-medium">Strada Colonel Stefan Stoika 22, Bucuresti 012244</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">LinkedIn</dt>
                <dd className="font-medium"><a href="https://www.linkedin.com/in/bogdan-lamatic-b36a2a1b8/" target="_blank" rel="noopener noreferrer" className="text-primary underline">LinkedIn Profile - Attorney Bogdan Lamatic</a></dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">E-mail</dt>
                <dd className="font-medium">bogdan.lamatic@yahoo.com</dd>
              </div>
            </dl>
          </section>

          {/* Call to Action Button */}
          <div className="flex flex-col items-center gap-4 p-6 bg-muted/30 rounded-lg border">
            <p className="text-center text-sm text-muted-foreground">Call me now:</p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <a href="tel:+40745506443" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +40 745 506 443
              </a>
            </Button>
          </div>

          <section aria-labelledby="recognition" className="grid gap-4">
            <h2 id="recognition" className="text-xl font-medium">Recognition</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Legal500 - Rising Star - 2020 Edition (White-Collar Crime)</li>
              <li>Legal500 - Next Generation Partner - 2021 Edition (White-Collar Crime)</li>
              <li>Legal500 - Next Generation Partner - 2022 Edition (White-Collar Crime)</li>
              <li>Legal500 - Next Generation Partner - 2023 Edition (White-Collar Crime)</li>
              <li>Legal500 - Next Generation Partner - 2024 Edition (White-Collar Crime)</li>
            </ul>
          </section>

          {/* More English sections would continue here */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </main>
      ) : (
        /* Romanian Version */
        <main className="mt-6 space-y-8">
          <header>
            <p className="text-sm text-muted-foreground">Curriculum vitae</p>
            <h1 className="text-2xl font-semibold tracking-tight">Bogdan Lamatic - Despre mine</h1>
          </header>

          <section aria-labelledby="personal-info-ro" className="grid gap-4">
            <h2 id="personal-info-ro" className="text-xl font-medium">Informații personale</h2>
            <dl className="grid gap-2 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Nume/Prenume</dt>
                <dd className="font-medium">Lamatic Bogdan-Constantin</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Adresă</dt>
                <dd className="font-medium">Strada Colonel Stefan Stoika 22, București 012244</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">LinkedIn</dt>
                <dd className="font-medium"><a href="https://www.linkedin.com/in/bogdan-lamatic-b36a2a1b8/" target="_blank" rel="noopener noreferrer" className="text-primary underline">LinkedIn - av. Bogdan Lamatic</a></dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">E-mail</dt>
                <dd className="font-medium">bogdan.lamatic@yahoo.com</dd>
              </div>
            </dl>
          </section>

          {/* Call to Action Button */}
          <div className="flex flex-col items-center gap-4 p-6 bg-muted/30 rounded-lg border">
            <p className="text-center text-sm text-muted-foreground">Sună-mă acum:</p>
            <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white">
              <a href="tel:+40745506443" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +40 745 506 443
              </a>
            </Button>
          </div>

          <section aria-labelledby="recognition-ro" className="grid gap-4">
            <h2 id="recognition-ro" className="text-xl font-medium">Recunoașteri</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Legal500 - Rising Star - Ediția 2020 (Criminalitate economică)</li>
              <li>Legal500 - Next Generation Partner - Ediția 2021 (Criminalitate economică)</li>
              <li>Legal500 - Next Generation Partner - Ediția 2022 (Criminalitate economică)</li>
              <li>Legal500 - Next Generation Partner - Ediția 2023 (Criminalitate economică)</li>
              <li>Legal500 - Next Generation Partner - Ediția 2024 (Criminalitate economică)</li>
            </ul>
          </section>

          <section aria-labelledby="memberships-ro" className="grid gap-4">
            <h2 id="memberships-ro" className="text-xl font-medium">Afiliere</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Membru al Baroului București</li>
              <li>Membru al Uniunii Naționale a Barourilor din România</li>
            </ul>
          </section>

          <section aria-labelledby="employment-ro" className="grid gap-4">
            <h2 id="employment-ro" className="text-xl font-medium">Experiență profesională</h2>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Wolf Theiss - Societate civilă de avocați, București, România</h4>
              <p className="text-sm text-muted-foreground">Casă de avocatură, infracțiuni economice, conformitate, investigații corporative, drept civil și comercial, litigii</p>
              <p className="mt-1">Perioadă: 2022 - 2025</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">„Enache Pirtea & Asociații” S.p.a.r.l., Str. Ion Negulici nr. 32, Sector 1, București, România</h4>
              <p className="text-sm text-muted-foreground">Casă de avocatură, criminalitate economică, drept civil și comercial, litigii</p>
              <p className="mt-1">Perioadă: 2020 - 2022</p>
              <p>Funcție: Partener</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">„Mușat & Asociații” S.p.a.r.l., Bd. Aviatorilor nr. 43, Sector 1, București, România</h4>
              <p className="text-sm text-muted-foreground">Casă de avocatură, criminalitate economică, drept civil și comercial, litigii</p>
              <p className="mt-1">Perioadă: 2013 - 2020</p>
              <p>Funcție: 2013 - 2015: Avocat Senior; 2016 - 2020: Managing Associate</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Șerban & Asociații - Societate de Avocați, București</h4>
              <p className="text-sm text-muted-foreground">Casă de avocatură, criminalitate economică</p>
              <p className="mt-1">Perioadă: 2010 - 2013</p>
              <p>Funcție: Avocat Senior</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Cabinet de avocat Cristina Trelea, București</h4>
              <p className="text-sm text-muted-foreground">Cabinet de Avocat</p>
              <p className="mt-1">Perioadă: 2007 - 2010</p>
              <p>Funcție: Avocat</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Sova & Asociații - Societate de Avocați, București</h4>
              <p className="text-sm text-muted-foreground">Casă de avocatură</p>
              <p className="mt-1">Perioadă: ianuarie 2007 - noiembrie 2007</p>
              <p>Funcție: Avocat</p>
            </article>
          </section>

          <section aria-labelledby="relevant-record-ro" className="grid gap-4">
            <h2 id="relevant-record-ro" className="text-xl font-medium">Experiență profesională relevantă</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>Asistență unui fond global de private equity într-o investigație internă sensibilă privind o fraudă în una dintre subsidiarele din România și acțiuni conexe de limitare a expunerii potențiale a mai multor companii și acționari, împreună cu asistență complexă în recuperarea de active, infracțiuni economice și procese de conformitate.</li>
              <li>Asistență unui mare fond de investiții european în legătură cu achiziția propusă a unui proiect de energie regenerabilă de peste 100 MW și evaluarea dimensiunilor de asset recovery și criminalitate economică relevante pentru achiziție și structurarea tranzacției.</li>
              <li>Asistență unui important grup energetic european în legătură cu o analiză internă și cu aspecte de recuperare de active și alte dimensiuni de criminalitate economică referitoare la posibile fraude și alte nereguli.</li>
              <li>Asistență și consiliere pentru un grup internațional de logistică de top în diverse investigații interne, conformitate și măsuri de remediere privind subsidiare din România și regiunea CEE, inclusiv proiectarea și implementarea cu succes a pașilor pentru protejarea grupului de riscuri materiale în mai multe jurisdicții.</li>
              <li>Asistență Health Tech Media GmbH într-o investigație privind o fraudă internă, cu evaluarea unghiurilor de recuperare de active și alte aspecte de criminalitate economică; cauza combină elemente locale complexe cu dimensiuni juridice transfrontaliere, coordonând totodată pentru client expertize non-juridice (fiscalitate, contabilitate, IT).</li>
              <li>Asistență unui grup internațional de inginerie, tehnologie și infrastructură într-o investigație corporativă internă sensibilă și în investigații derulate de autorități în mai multe jurisdicții, incluzând conformitate, infracțiuni economice, reglementare, operațional și cooperare transfrontalieră.</li>
              <li>Asistență unui jucător listat din energie într-o investigație internă foarte sensibilă privind fraude și măsuri de limitare a expunerii companiilor și acționarilor, inclusiv asistență complexă în recuperarea de active, criminalitate economică și procese de conformitate (accesare și prelucrare date, criminalitate informatică, urmărire active, chestiuni contractuale).</li>
              <li>Asistență unui grup internațional de shipping într-o analiză internă complexă și pași de investigație corporativă pe potențiale probleme de conformitate și infracțiuni economice, necesitând structurarea rapidă a investigației și asistență imediată multidisciplinară (Compliance, Investigations, White-Collar Crime, Protecția Datelor, Corporate M&A, Muncă etc.).</li>
              <li>Asistență unui grup european de life science în etape ale unei investigații interne privind subsidiarele sale, adresând cu succes aspecte de conformitate și criminalitate economică și implementând măsuri de remediere pentru protejarea grupului în România și alte jurisdicții, cu interacțiune cu autorități multiple.</li>
              <li>Asistență liderului din energie electrică în fața organelor de urmărire penală în legătură cu diverse tipuri de infracțiuni comise împotriva companiei sau, presupus, de către angajați (inclusiv recuperarea prejudiciilor aferente).</li>
              <li>Reprezentarea unei autorități din aviație în dosarul penal instrumentat de Parchetul de pe lângă Înalta Curte de Casație și Justiție, privind un accident aviatic produs în ianuarie 2014, în România.</li>
              <li>Asistență și reprezentare pentru liderul pieței de energie și gaze din România în diverse dosare penale complexe, atât în fața organelor de urmărire penală, cât și a instanțelor penale, incluzând soluționarea pretențiilor civile.</li>
              <li>Reprezentarea unei corporații globale (Spania), lider în producția și furnizarea de material rulant și soluții feroviare, în legătură cu acuzații de corupție aduse unor funcționari publici privind achiziții publice de peste 300 milioane EUR.</li>
              <li>Reprezentarea unuia dintre principalii furnizori mondiali de servicii financiare într-un proiect multidisciplinar de recuperare creanțe, incluzând insolvență și investigații privind infracțiuni economice.</li>
              <li>Asistență unuia dintre giganții industriali din România, specializat în consultanță și comerț pentru obiective industriale (în special industria metalurgică), în fața organelor de urmărire penală, privind o presupusă fraudă fiscală de peste 2.500.000 EUR.</li>
              <li>Asistență și reprezentare pentru una dintre cele mai mari companii de asigurări din România, în fața organelor de urmărire penală și a instanțelor, pentru recuperarea sau diminuarea valorii despăgubirilor de plătit.</li>
              <li>Reprezentarea unui fond de pensii în legătură cu plângeri penale formulate de foști parteneri de afaceri.</li>
              <li>Asistență companiei lider în distribuția de energie în investigații interne privind angajați, activități și proceduri referitoare la statutul datelor și informațiilor confidențiale sau secrete.</li>
              <li>Asistență și reprezentare a unei companii românești private, specializată în importul și distribuția de produse metalice pentru construcții, în fața organelor de urmărire penală.</li>
              <li>Asistență unui furnizor de servicii medicale specializate în investigații interne privind potențiale fapte de corupție sau practici ilicite.</li>
              <li>Asistență membrilor Consiliului unei companii media de stat în legătură cu acuzații de abuz în serviciu privind achiziția Radio Chișinău (Rep. Moldova), constând în supraevaluarea prețului acțiunilor și un prejudiciu de peste 650.000 EUR fonduri publice.</li>
              <li>Asistență și reprezentare a unui fost Secretar de Stat în Ministerul Transporturilor, în legătură cu acuzații de dare de mită în cuantum de 2 milioane EUR.</li>
              <li>Asistență și reprezentare a unui politician de prim rang (fost deputat, fost vice-ministru și fost viceprimar) cercetat pentru fapte de corupție (trafic de influență) în legătură cu candidatura la Primăria Municipiului București.</li>
              <li>Asistență și reprezentare a unui primar de municipiu în legătură cu acuzații de abuz în serviciu care au generat un prejudiciu semnificativ bugetului local.</li>
              <li>Asistență și reprezentare a unui fost primar de municipiu, cercetat și judecat pentru abuz în serviciu privind alocarea de subvenții și finanțări locale ce depășesc 400.000 EUR.</li>
              <li>Asistență și reprezentare a unui om de afaceri român în fața organelor de urmărire penală și a instanței într-o cauză privind constituirea unui grup infracțional organizat de circa 30 de persoane și funcționari publici de rang înalt pentru comiterea de infracțiuni economice în legătură cu producția și comercializarea de produse petroliere, prejudiciul depășind 50.000.000 EUR.</li>
              <li>Asistență și reprezentare a Directorului General al unui lanț național de farmacii într-o investigație penală privind posibila deturnare de fonduri publice și subvenții pentru medicamente, precum și fals în înscrisuri, cu un prejudiciu de peste 4.000.000 EUR.</li>
              <li>Asistență și reprezentare a unui fost reprezentant al Statului Român într-o organizație financiară internațională, cu privire la acuzații de corupție activă în raport cu magistrați, pentru obținerea unei hotărâri favorabile.</li>
            </ul>
          </section>

          <section aria-labelledby="publications-ro" className="grid gap-4">
            <h2 id="publications-ro" className="text-xl font-medium">Publicații</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Cele mai noi sancțiuni UE împotriva Rusiei vizează capacitățile militare, instrumentele de propagandă și altele, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/newest-eu-sanctions-against-russia-target-military-capabilities-propaganda-tools-and-more/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Legea avertizorilor revizuită și îmbunătățită, adoptată în România, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/revised-and-improved-whistleblowing-law-adopted-in-romania/?trk=public_post-text" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Wolf Theiss Corporate Investigations Guide 2022, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/corporate-investigations-guide/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Evoluții privind protecția avertizorilor în România, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/developments-on-whistleblowers-protection-in-romania/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Sancțiunile UE împotriva Rusiei și actualizări ale programelor de conformitate, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/eu-sanctions-against-russia-and-updates-to-compliance-programmes/?trk=public_post_share-upda" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Articol despre Directiva privind Avertizorii de Integritate, 2023, Bizlawyer.ro, {" "}
                <a href="https://www.bizlawyer.ro/stiri/piata-avocaturii/totul-despre-modul-de-aplicare-a-legii-privind-protectia-avertizorilor-in-intere" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Articol „Aspecte teoretice și practice legate de măsurile preventive în vechiul și actualul Cod de procedură penală”, 2023, Juridice.ro, {" "}
                <a href="https://www.juridice.ro/695393/aspecte-teoretice-si-practice-legate-de-masurile-preventive-in-vechiul-si-actualul-cod-de-procedu" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>Diverse alerte pentru clienți și articole pe teme de drept penal, conformitate și legea avertizorilor.</li>
            </ul>
          </section>

          {/* Call to Action */}
          <section className="mt-12 text-center">
            <h2 className="text-xl font-medium mb-4">Ai nevoie de asistență juridică?</h2>
            <p className="text-muted-foreground mb-6">
              Contactează-mă direct pentru consultanță de drept penal și reprezentare juridică.
            </p>
            <a href="tel:+40745506443" aria-label="Sună acum">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white border border-white">
                <Phone /> Sună acum: +40 745 506 443
              </Button>
            </a>
          </section>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </main>
      )}
    </section>
  );
}

