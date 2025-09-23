import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GeminiButtonEffect from "@/components/ui/gemini-button-effect";
import { Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EconomicCrimesChart from "@/components/charts/EconomicCrimesChart";

export default function CriminalitateEconomica() {
  useSEO({
    title: "Criminalitate economică | Servicii avocat penal Bucuresti | Bogdan Lamatic",
    description: "Asistență și reprezentare în cauze de criminalitate economică.",
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      {typeof window !== "undefined" && (
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
                    "item": typeof window !== "undefined" ? `${window.location.origin}/` : "https://avocatpenalbucuresti.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": typeof window !== "undefined" ? `${window.location.origin}/#servicii` : "https://avocatpenalbucuresti.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Criminalitate economică",
                    "item": typeof window !== "undefined" ? `${window.location.origin}/services/criminalitate-economica` : "https://avocatpenalbucuresti.ro/services/criminalitate-economica"
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
                "name": "Servicii avocat criminalitate economică",
                "description": "Asistență și reprezentare în cauze de criminalitate economică",
                "url": typeof window !== "undefined" ? `${window.location.origin}/services/criminalitate-economica` : "https://avocatpenalbucuresti.ro/services/criminalitate-economica",
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
        </>
      )}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-2xl font-semibold mb-2">Avocat Infracțiuni Economice | Specializat în „White-Collar Crime” | Bogdan Lamatic</h1>
      <Breadcrumb>
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
            <BreadcrumbPage>Criminalitate economică</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-4 border border-accent rounded-md p-4">
        <div className="flex flex-wrap items-center gap-3">
          <a href="tel:+40316320183" aria-label="Sună acum">
            <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone /> Sună acum
            </Button>
          </a>
        </div>
        <div className="mt-3 space-y-3 text-base leading-relaxed">
          <p>
            Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal și specializare recunoscută în white-collar crime - infracțiuni economice comise în mediul profesional sau corporativ. Am reprezentat clienți în dosare complexe de evaziune fiscală, spălare de bani, fraudă, delapidare, corupție și abuz de încredere, atât în fața parchetelor specializate, cât și în instanțele de toate gradele, inclusiv Înalta Curte de Casație și Justiție.
          </p>
          <p>
            Recunoscut de Legal500 timp de cinci ani consecutiv ca Next Generation Partner în domeniul infracțiunilor economice și de corupție, abordez fiecare caz cu o strategie personalizată, bazată pe analiza detaliată a probelor și pe identificarea vulnerabilităților acuzării. Am experiență în reprezentarea atât a persoanelor fizice, cât și a companiilor multinaționale în anchete transfrontaliere și proceduri complexe.
          </p>
          <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
            Indiferent dacă ești anchetat, inculpat sau parte vătămată într-un dosar de infracțiuni economice, obiectivul meu este să îți asigur o apărare solidă, discretă și orientată spre rezultate concrete.
          </p>
        </div>
      </section>

      <div className="mt-6 space-y-8">
        <section className="space-y-4">
          <p>
            Infracțiunile economice reprezintă ansamblul activităților ilegale de natură financiară, fiscală, comercială, contabilă, bancară sau vamală,
            sancționate de numeroase articole din Codul penal și legi speciale, precum:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Codul Penal: art. 207, 239-242, 244-248, 249-252, 256^1, 289-292, 295, 297-298, 300-301, 306-307, 309-328</li>
            <li>Legea nr. 241/2005: art. 3-9 (prevenirea și combaterea evaziunii fiscale)</li>
            <li>Legea nr. 656/2002: art. 29-33 (prevenirea spălării banilor)</li>
            <li>Legea nr. 31/1990: art. 271-281 (infracțiuni privind societățile comerciale)</li>
            <li>Legea nr. 78/2000: art. 6-7, art. 10-13^2, art. 15, art. 18^1-18^5 (corupție și fapte asimilate)</li>
            <li>Codul Vamal: art. 270-275</li>
            <li>Alte legi speciale aplicabile.</li>
          </ul>

          <h2 className="text-xl font-semibold">Ce sunt infracțiunile economice (White-Collar Crime)</h2>
          <p>
            Numite și „infracțiuni ale gulerelor albe”, acestea sunt săvârșite, în general, de persoane aflate în poziții sociale sau profesionale importante.
            Nu implică violență fizică, ci produc pierderi financiare semnificative pentru persoane, companii sau instituții.
          </p>

          <section className="border border-accent rounded-md p-4">
            <h2 className="text-xl font-semibold">Tipuri de infracțiuni economice pe care le apăr</h2>
            <p>Un avocat specializat în infracțiuni economice poate asigura apărarea în cazuri precum:</p>
            <ul className="list-disc pl-6 columns-1 md:columns-2 gap-8 [&_li]:break-inside-avoid">
              <li>Abuz de încredere în fraudarea creditorilor</li>
              <li>Bancrută frauduloasă</li>
              <li>Înșelăciune</li>
              <li>Deturnarea licitațiilor publice</li>
              <li>Operațiuni financiare frauduloase</li>
              <li>Luare și dare de mită</li>
              <li>Trafic și cumpărare de influență</li>
              <li>Delapidare</li>
              <li>Abuz în serviciu</li>
              <li>Falsificare de monede și înscrisuri</li>
              <li>Deturnare de fonduri</li>
              <li>Evaziune fiscală</li>
              <li>Spălarea banilor</li>
              <li>Contrabandă</li>
              <li>Utilizarea ilegală a subvențiilor</li>
              <li>Incompatibilități financiare cu funcția publică</li>
              <li>
                Schimbarea destinației fondurilor europene
                <div className="mt-3">
                  <a href="tel:+40316320183" aria-label="Sună acum">
                    <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                      <Phone /> Sună acum
                    </Button>
                  </a>
                </div>
              </li>
            </ul>
          </section>

          <figure className="py-4">
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/5a0690ed-7910-4259-948b-3d42e2fe9151.png"
                alt="Legal 500 Next Generation Partner 2024 - avocat infracțiuni economice"
                loading="lazy"
                decoding="async"
                className="w-[300px] sm:w-[360px] md:w-[400px] h-auto rounded-md shadow"
              />
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground text-center">
              av. Bogdan Lamatic | Legal500 - Next Generation Partner - 2024 Edition (White-Collar Crime)
            </figcaption>
          </figure>

          <section className="mt-6 border border-accent rounded-md p-4">
            <h2 className="text-xl font-semibold">De ce ai nevoie de un avocat specializat în infracțiuni economice</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed">
              <p>
                În dosarele de infracțiuni economice, procedurile penale sunt deosebit de complexe și necesită nu doar cunoștințe juridice avansate, ci și o înțelegere profundă a mecanismelor financiare, fiscale și contabile. <br />În cei peste 18 ani de practică, am constatat că succesul într-un astfel de dosar depinde de capacitatea avocatului de a corela legislația penală cu aspectele tehnice ale tranzacțiilor și fluxurilor financiare.
              </p>
              <p>
                Ca avocat specializat în white-collar crime, îți protejez drepturile încă din prima etapă a anchetei, analizez minuțios probele, identific eventualele nereguli procedurale și formulez strategii de apărare adaptate fiecărui caz. <br />Când este posibil, negociez direct cu procurorii sau cu partea adversă pentru a obține soluții favorabile înainte de ajungerea în instanță, reducând astfel riscul unor sancțiuni severe și limitând impactul asupra reputației tale personale sau profesionale.
              </p>
              <p>
                Scopul meu este să îți ofer o apărare solidă, documentată și discretă, menită să protejeze atât libertatea ta, cât și interesele financiare pe termen lung!
              </p>
            </div>
          </section>
          <div className="flex justify-center animate-fade-in">
            <GeminiButtonEffect>
              <a href="tel:+40316320183" aria-label="Vreau avocat!">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> Vreau avocat!
                </Button>
              </a>
            </GeminiButtonEffect>
          </div>
          <div className="h-5" aria-hidden="true"></div>
        </section>
        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Codul Penal</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="art-207">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 207 – Șantajul</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Constrângerea unei persoane să dea, să facă, să nu facă sau să sufere ceva, în scopul de a dobândi în mod injust un folos nepatrimonial, pentru sine ori pentru altul, se pedepsește cu închisoarea de la unu la 5 ani.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează amenințarea cu darea în vileag a unei fapte reale sau imaginare, compromițătoare pentru persoana amenințată ori pentru un membru de familie al acesteia, în scopul prevăzut în alin. (1).</p>
                      <p>(3) Dacă faptele prevăzute în alin. (1) și alin. (2) au fost comise în scopul de a dobândi în mod injust un folos patrimonial, pentru sine sau pentru altul, pedeapsa este închisoarea de la 2 la 7 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, primul pas este să contest existența scopului injust. Dacă se poate demonstra că acțiunea a fost motivată de un drept legitim – de exemplu, solicitarea unei plăți datorate sau avertizarea privind o situație reală – nu mai vorbim despre șantaj penal. De asemenea, voi analiza contextul relației dintre părți: dacă există un raport comercial, juridic sau personal în care discuțiile au fost tensionate, pot argumenta că ceea ce acuzarea numește „constrângere” a fost de fapt o negociere dură. Orice lipsă de probe directe asupra elementului intențional este în favoarea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-239">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 239 – Abuzul de încredere prin fraudarea creditorilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta debitorului de a înstrăina, ascunde, deteriora sau distruge, în tot sau în parte, valori ori bunuri din patrimoniul său ori de a invoca acte sau datorii fictive în scopul fraudării creditorilor se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează fapta persoanei care, știind că nu va putea plăti, achiziționează bunuri ori servicii producând o pagubă creditorului.</p>
                      <p>(3) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Voi verifica dacă există dovezi clare că bunurile au fost ascunse sau înstrăinate cu intenția directă de a frauda creditorii. Dacă acțiunile clientului au fost determinate de necesitatea plății altor datorii sau de menținerea activității economice, putem argumenta lipsa intenției frauduloase. În plus, această infracțiune se judecă doar dacă există plângere prealabilă din partea creditorului – lipsa acesteia sau formularea sa tardivă poate duce la încetarea procesului penal. De asemenea, pot invoca circumstanța că evaluarea prejudiciului nu este certă sau nu se poate dovedi că a fost produs direct de acțiunea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-240">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 240 – Bancruta simplă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Neintroducerea sau introducerea tardivă, de către debitorul persoană fizică ori de reprezentantul legal al persoanei juridice debitoare, a cererii de deschidere a procedurii insolvenței, într-un termen care depășește cu mai mult de 6 luni termenul prevăzut de lege de la apariția stării de insolvență, se pedepsește cu închisoarea de la 3 luni la un an sau cu amendă.</p>
                      <p>(2) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aici apărarea se concentrează pe momentul exact în care s-a instalat starea de insolvență. Dacă putem demonstra că acest moment este incert sau că, în mod obiectiv, clientul nu avea cunoștință de imposibilitatea plăților, elementul subiectiv al infracțiunii lipsește. De asemenea, există situații în care întârzierea depunerii cererii de insolvență se justifică prin negocieri în curs cu creditorii sau prin speranța rezonabilă de redresare financiară. Lipsa plângerii prealabile rămâne un punct procedural puternic în favoarea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-241">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 241 – Bancruta frauduloasă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta persoanei care, în frauda creditorilor: a) falsifică, sustrage sau distruge evidențele debitorului ori ascunde o parte din activul averii acestuia; b) înfățișează datorii inexistente sau prezintă în registrele debitorului, în alt act sau în situația financiară sume nedatorate; c) înstrăinează, în caz de insolvență a debitorului, o parte din active se pedepsește cu închisoarea de la 6 luni la 5 ani.</p>
                      <p>(2) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În acest caz, apărarea trebuie să demonstreze lipsa intenției de fraudă și existența unor explicații legitime pentru tranzacțiile contestate. De exemplu, dacă activele au fost înstrăinate pentru a acoperi datorii curente sau pentru a obține lichidități, nu se poate vorbi de scop fraudulos. Voi contesta de asemenea calitatea și validitatea probelor contabile aduse de acuzare – un simplu dezechilibru în documente nu înseamnă automat bancrută frauduloasă. Condiția plângerii prealabile rămâne o barieră procedurală importantă în favoarea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-242">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 242 – Gestiunea frauduloasă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Pricinuirea de pagube unei persoane, cu ocazia administrării sau conservării bunurilor acesteia, de către cel care are ori trebuie să aibă grija administrării sau conservării acelor bunuri se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                      <p>(2) Când fapta prevăzută în alin. (1) a fost săvârșită de administratorul judiciar, de lichidatorul averii debitorului sau de un reprezentant sau prepus al acestora, pedeapsa este închisoarea de la unu la 5 ani.</p>
                      <p>(3) Faptele prevăzute în alin. (1) și alin. (2) săvârșite în scopul de a dobândi un folos patrimonial se pedepsesc cu închisoarea de la 2 la 7 ani.</p>
                      <p>(4) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi urmări să demonstrez că eventualele pagube nu au rezultat dintr-o acțiune intenționată sau din neglijență gravă, ci din decizii comerciale luate în interesul patrimoniului administrat. Este important să subliniez că evaluarea pagubei trebuie să fie concretă și direct legată de actul imputat clientului. În cazul administratorilor judiciari sau lichidatorilor, pot argumenta că deciziile contestate au fost luate în limitele mandatului legal și în baza informațiilor disponibile la acel moment. Lipsa plângerii prealabile poate bloca acțiunea penală.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-244">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 244 – Înșelăciunea</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Inducerea în eroare a unei persoane prin prezentarea ca adevărată a unei fapte mincinoase sau ca mincinoasă a unei fapte adevărate, în scopul de a obține pentru sine sau pentru altul un folos patrimonial injust și dacă s-a pricinuit o pagubă, se pedepsește cu închisoarea de la 6 luni la 3 ani.</p>
                      <p>(2) Înșelăciunea săvârșită prin folosirea de nume sau calități mincinoase ori de alte mijloace frauduloase se pedepsește cu închisoarea de la unu la 5 ani. Dacă mijlocul fraudulos constituie prin el însuși o infracțiune, se aplică regulile privind concursul de infracțiuni.</p>
                      <p>(3) Împăcarea înlătură răspunderea penală.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare se bazează pe contestarea intenției și a caracterului mincinos al afirmațiilor sau acțiunilor clientului. Dacă ceea ce acuzarea numește „inducere în eroare” a fost de fapt o eroare comercială sau o estimare greșită, atunci fapta poate fi lipsită de caracter penal. Voi insista pe ideea că eventualul prejudiciu nu a fost produs cu intenție, ci în urma unor circumstanțe obiective. De asemenea, posibilitatea de împăcare cu partea vătămată este o soluție practică ce poate duce la încetarea procesului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-245">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 245 – Înșelăciunea privind asigurările</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Distrugerea, degradarea, aducerea în stare de neîntrebuințare, ascunderea sau înstrăinarea unui bun asigurat, în scopul de a obține, pentru sine sau pentru altul, suma asigurată, se pedepsește cu închisoarea de la unu la 5 ani.</p>
                      <p>(2) Fapta persoanei care, în scopul prevăzut în alin. (1), simulează, își cauzează sau agravează leziuni ori vătămări corporale produse de un risc asigurat se pedepsește cu închisoarea de la 6 luni la 3 ani sau cu amendă.</p>
                      <p>(3) Împăcarea înlătură răspunderea penală.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Voi analiza dacă există probe tehnice clare care să ateste intenția de a frauda asigurătorul. În multe cazuri, daunele pot fi accidentale sau cauzate de factori externi, iar simpla suspiciune nu este suficientă pentru condamnare. Este esențial să verificăm rapoartele de expertiză și să contestăm concluziile neclare. De asemenea, procedura de împăcare poate reprezenta o cale eficientă de închidere a dosarului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-246">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 246 – Deturnarea licitațiilor publice</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta de a îndepărta, prin constrângere sau corupere, un participant de la o licitație publică ori înțelegerea între participanți pentru a denatura prețul de adjudecare se pedepsește cu închisoarea de la unu la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi urmări să dovedesc lipsa oricărei legături directe între acțiunile clientului și rezultatul licitației. Înțelegerea între participanți trebuie dovedită prin probe clare, nu doar prin presupuneri. Dacă discuțiile între părți au avut loc în context legitim (negocieri comerciale generale), putem invoca lipsa elementului constitutiv. De asemenea, analiza procedurii licitației poate evidenția vicii independente de comportamentul clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-247">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 247 – Exploatarea patrimonială a unei persoane vulnerabile</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta creditorului care, cu ocazia dării cu împrumut de bani sau bunuri, profitând de starea de vădită vulnerabilitate a debitorului, datorată vârstei, stării de sănătate, infirmității ori relației de dependență, îl face să constituie sau să transmită, pentru sine sau pentru altul, un drept real ori de creanță de valoare vădit disproporționată față de această prestație se pedepsește cu închisoarea de la unu la 5 ani.</p>
                      <p>(2) Punerea unei persoane în stare de vădită vulnerabilitate prin provocarea unei intoxicații cu alcool sau cu substanțe psihoactive în scopul de a o determina să consimtă la constituirea sau transmiterea unui drept real ori de creanță sau să renunțe la un drept, dacă s-a produs o pagubă, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aici, apărarea se concentrează pe demonstrarea faptului că nu a existat o stare reală de vulnerabilitate exploatată de client. Dacă valoarea prestației poate fi justificată prin condițiile pieței sau prin riscul împrumutului, disproporția nu mai este „vădită”. De asemenea, trebuie verificată existența consimțământului liber exprimat și a eventualelor marturii care să confirme lipsa oricărei constrângeri.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-248">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 248 – Sancționarea tentativei</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracțiunile prevăzute în art. 239 alin. (1), art. 241 și art. 244-247 se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În cazul tentativei, apărarea se concentrează pe argumentul că acțiunile clientului nu au depășit faza actelor pregătitoare, care nu sunt sancționabile. Dacă fapta nu a fost dusă la îndeplinire din motive independente de voința clientului sau dacă nu există certitudinea că intenția era infracțională, se poate cere achitarea.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-249">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 249 – Frauda informatică</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Introducerea, modificarea sau ștergerea de date informatice, restricționarea accesului la aceste date ori împiedicarea în orice mod a funcționării unui sistem informatic, în scopul de a obține un beneficiu material pentru sine sau pentru altul, dacă s-a cauzat o pagubă unei persoane, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Ca apărător, verific dacă există dovada certă a legăturii dintre acțiunile atribuite clientului și paguba invocată. În multe cazuri, erorile tehnice sau accesările neautorizate pot proveni de la terți ori din defecțiuni de sistem, nu din acțiunea directă a clientului. Lipsa unei expertize informatice solide și independente este un punct de atac. De asemenea, dacă accesul a fost făcut cu acordul sau toleranța proprietarului sistemului, lipsește caracterul neautorizat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-250">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 250 – Efectuarea de operațiuni financiare în mod fraudulos</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Efectuarea unei operațiuni de retragere de numerar, încărcare sau descărcare a unui instrument de monedă electronică ori de transfer de fonduri, prin utilizarea, fără consimțământul titularului, a unui instrument de plată electronică sau a datelor de identificare care permit utilizarea acestuia, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează efectuarea uneia dintre operațiunile prevăzute în alin. (1), prin utilizarea neautorizată a oricăror date de identificare sau prin utilizarea de date de identificare fictive.</p>
                      <p>(3) Transmiterea neautorizată către altă persoană a oricăror date de identificare, în vederea efectuării uneia dintre operațiunile prevăzute în alin. (1), se pedepsește cu închisoarea de la unu la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, analizez dacă identificarea electronică a clientului este sigură și dacă nu există posibilitatea ca datele să fi fost folosite de altă persoană. În mediul digital, transferul și multiplicarea datelor pot crea confuzii, iar atribuirea faptei trebuie dovedită cu certitudine. Lipsa unui traseu clar al tranzacției sau existența unor breșe de securitate poate genera îndoială rezonabilă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-251">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 251 – Acceptarea operațiunilor financiare efectuate în mod fraudulos</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Acceptarea unei operațiuni de retragere de numerar, încărcare sau descărcare a unui instrument de monedă electronică ori de transfer de fonduri, cunoscând că este efectuată prin folosirea unui instrument de plată electronică falsificat sau utilizat fără consimțământul titularului său, se pedepsește cu închisoarea de la unu la 5 ani.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează acceptarea uneia dintre operațiunile prevăzute în alin. (1), cunoscând că este efectuată prin utilizarea neautorizată a oricăror date de identificare sau prin utilizarea de date de identificare fictive.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare vizează demonstrarea lipsei cunoștinței cu privire la proveniența frauduloasă a operațiunii. Dacă clientul a primit sumele sau a participat la tranzacții în context obișnuit de afaceri, fără indicii clare de fraudă, nu poate fi reținută intenția. În plus, verific dacă s-au respectat procedurile bancare care ar fi trebuit să detecteze și să blocheze tranzacția suspectă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-252">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 252 – Sancționarea tentativei</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracțiunile prevăzute în prezentul capitol se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi arăta că acțiunile clientului nu au depășit faza actelor pregătitoare și că acestea nu sunt incriminate. Dacă intenția infracțională nu a fost dovedită și există explicații alternative pentru comportament, tentativa nu poate fi reținută.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-256-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 256¹ – Faptele care au produs consecințe deosebit de grave</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Dacă faptele prevăzute la art. 228, 229, 233, 234, 235, 239, 242, 244, 245, 247, art. 249-251 au produs consecințe deosebit de grave, limitele speciale ale pedepsei prevăzute de lege se majorează cu jumătate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se va concentra pe contestarea cuantumului prejudiciului și a metodei de calcul. Dacă se poate demonstra că paguba este sub pragul de 2.000.000 lei sau că evaluarea nu este susținută de documente și expertize corecte, agravanta nu se aplică. Voi solicita expertize independente pentru recalcularea pagubei.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-289">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 289 – Luarea de mită</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta funcționarului public care, direct ori indirect, pentru sine sau pentru altul, pretinde ori primește bani sau alte foloase care nu i se cuvin ori acceptă promisiunea unor astfel de foloase, în legătură cu îndeplinirea, neîndeplinirea, urgentarea ori întârzierea îndeplinirii unui act ce intră în îndatoririle sale de serviciu sau în legătură cu îndeplinirea unui act contrar acestor îndatoriri, se pedepsește cu închisoare de la 3 la 10 ani și interzicerea exercitării dreptului de a ocupa o funcție publică ori de a exercita profesia sau activitatea în executarea căreia a săvârșit fapta.</p>
                      <p>(2) Fapta prevăzută în alin. (1), săvârșită de una dintre persoanele prevăzute în art. 175 alin. (2), constituie infracțiune numai când este comisă în legătură cu neîndeplinirea, întârzierea îndeplinirii unui act privitor la îndatoririle sale legale sau în legătură cu efectuarea unui act contrar acestor îndatoriri.</p>
                      <p>(3) Banii, valorile sau orice alte bunuri primite sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se axează pe lipsa legăturii cauzale între foloasele primite și atribuțiile de serviciu. Dacă banii au fost primiți ca împrumut, cadou personal sau plată pentru alt tip de serviciu privat, nu se poate vorbi de mită. De asemenea, voi analiza dacă există provocare din partea organelor de urmărire penală, caz în care fapta poate fi dezincriminată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-290">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 290 – Darea de mită</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Promisiunea, oferirea sau darea de bani ori alte foloase, în condițiile arătate în art. 289, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
                      <p>(2) Fapta prevăzută în alin. (1) nu constituie infracțiune atunci când mituitorul a fost constrâns prin orice mijloace de către cel care a luat mita.</p>
                      <p>(3) Mituitorul nu se pedepsește dacă denunță fapta mai înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta.</p>
                      <p>(4) Banii, valorile sau orice alte bunuri date se restituie persoanei care le-a dat, dacă acestea au fost date în cazul prevăzut în alin. (2) sau date după denunțul prevăzut în alin. (3).</p>
                      <p>(5) Banii, valorile sau orice alte bunuri oferite sau date sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, primul aspect pe care îl explorez este constrângerea – dacă există dovezi că plata a fost făcută sub presiune, atunci fapta nu este incriminată. De asemenea, pot analiza dacă există oportunitatea de a invoca denunțul anterior sesizării oficiale, ceea ce ar înlătura răspunderea penală. Este important să demonstrez că banii nu au fost destinați influențării unui act de serviciu, ci aveau o altă natură (ex.: datorie personală, avans comercial).</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-291">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 291 – Traficul de influență</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Pretinderea, primirea ori acceptarea promisiunii de bani sau alte foloase, direct sau indirect, pentru sine sau pentru altul, săvârșită de către o persoană care are influență sau lasă să se creadă că are influență asupra unui funcționar public și care promite că îl va determina pe acesta să îndeplinească, să nu îndeplinească, să urgenteze ori să întârzie îndeplinirea unui act ce intră în îndatoririle sale de serviciu sau să îndeplinească un act contrar acestor îndatoriri, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
                      <p>(2) Banii, valorile sau orice alte bunuri primite sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se concentrează pe faptul că influența reală asupra funcționarului public trebuie dovedită. Dacă clientul nu avea în realitate acces la decizia funcționarului, fapta poate fi reclasificată sau chiar înlăturată. O altă linie de apărare este demonstrarea faptului că discuțiile au fost simple exagerări comerciale sau promisiuni fără valoare juridică.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-292">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 292 – Cumpărarea de influență</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Promisiunea, oferirea sau darea de bani ori alte foloase, pentru sine sau pentru altul, direct ori indirect, unei persoane care are influență sau lasă să se creadă că are influență asupra unui funcționar public, pentru a-l determina pe acesta să îndeplinească, să nu îndeplinească, să urgenteze ori să întârzie îndeplinirea unui act ce intră în îndatoririle sale de serviciu sau să îndeplinească un act contrar acestor îndatoriri, se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării unor drepturi.</p>
                      <p>(2) Făptuitorul nu se pedepsește dacă denunță fapta mai înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta.</p>
                      <p>(3) Banii, valorile sau orice alte bunuri se restituie persoanei care le-a dat, dacă au fost date după denunțul prevăzut în alin. (2).</p>
                      <p>(4) Banii, valorile sau orice alte bunuri date sau oferite sunt supuse confiscării, iar dacă acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia principală este să subliniez lipsa intenției clientului de a influența efectiv actul funcționarului – pot demonstra că plățile erau pentru alt scop sau în cadrul unei relații comerciale. Invocarea denunțului anterior sesizării este o soluție directă pentru înlăturarea răspunderii. Voi analiza și dacă persoana „influentă” nu avea în realitate acces la funcționar.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-295">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 295 – Delapidarea</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Însușirea, folosirea sau traficarea de către un funcționar public, în interesul său ori pentru altul, de bani, valori sau alte bunuri pe care le gestionează sau le administrează se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării dreptului de a ocupa o funcție publică.</p>
                      <p>(2) Tentativa se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, verific dacă bunurile au fost efectiv gestionate sau administrate de client în mod oficial. Dacă lipsește această calitate, infracțiunea nu există. De asemenea, pot demonstra că bunurile au fost folosite temporar și restituite sau că nu există dovadă a intenției de însușire definitivă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-297">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 297 – Abuzul în serviciu</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, nu îndeplinește un act sau îl îndeplinește în mod defectuos și prin aceasta cauzează o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane fizice sau ale unei persoane juridice se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării dreptului de a ocupa o funcție publică.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează și fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, îngrădește exercitarea unui drept al unei persoane ori creează pentru aceasta o situație de inferioritate pe temei de rasă, naționalitate, origine etnică, limbă, religie, sex, orientare sexuală, apartenență politică, avere, vârstă, dizabilitate, boală cronică necontagioasă sau infecție HIV/SIDA.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare vizează demonstrarea lipsei intenției directe sau a inexistenței unei pagube concrete. Pot arăta că actul a fost îndeplinit conform procedurilor interne sau că deficiențele invocate au fost minore. Este importantă și verificarea legalității dispozițiilor pe care clientul trebuia să le respecte – dacă norma era neclară, se poate invoca eroarea de drept.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-298">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 298 – Neglijența în serviciu</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Încălcarea din culpă de către un funcționar public a unei îndatoriri de serviciu, prin neîndeplinirea acesteia sau prin îndeplinirea ei defectuoasă, dacă prin aceasta se cauzează o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane fizice sau ale unei persoane juridice, se pedepsește cu închisoarea de la 3 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aici mă concentrez pe lipsa culpei – trebuie dovedit că clientul nu putea anticipa consecințele faptei. Dacă sarcina de serviciu era neclară sau nu îi revenea efectiv, răspunderea penală poate fi exclusă. De asemenea, o pagubă minoră sau lipsa unui prejudiciu cert este un argument puternic.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-300">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 300 – Obstrucționarea justiției</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta persoanei care, prin amenințări sau prin alte mijloace, împiedică ori îngreunează desfășurarea cercetării penale, judecății sau executării unei pedepse, se pedepsește cu închisoarea de la 6 luni la 3 ani sau cu amendă.</p>
                      <p>(2) Cu aceeași pedeapsă se sancționează împiedicarea sau îngreunarea exercitării atribuțiilor de către un organ de urmărire penală, de către un organ de ordine publică sau de către o instanță.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, primul punct este verificarea clarității probelor privind legătura dintre acțiunea clientului și îngreunarea reală a procesului. Dacă actele comise au fost simple reacții emoționale sau neintenționate, se poate susține lipsa elementului subiectiv. Totodată, dacă „amenințările” nu au avut gravitate sau nu au fost percepute serios, acestea pot fi reclasificate ca faptă contravențională.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-306">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 306 – Nedenunțarea</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Fapta persoanei care, luând cunoștință de săvârșirea unei infracțiuni contra vieții, de o infracțiune contra integrității corporale sau sănătății ori de o infracțiune contra libertății persoanei, nu o denunță de îndată autorităților, se pedepsește cu închisoare de la 6 luni la 2 ani sau cu amendă.</p>
                      <p>(2) Nu se pedepsește nedenunțarea săvârșită de soț sau de o rudă apropiată.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, mă bazez pe faptul că obligația de denunțare nu există dacă persoana avea îndoieli rezonabile privind veridicitatea informației sau dacă a crezut că autoritățile știau deja de faptă. În plus, orice relație apropiată cu făptuitorul (inclusiv legături de prietenie puternice) poate fi invocată ca motiv atenuant.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-308">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 308 – Infracțiuni de serviciu comise de alte persoane</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Dispozițiile art. 289–292 și art. 295–297 privind funcționarii publici se aplică în mod corespunzător și faptelor săvârșite de către alte persoane care exercită, permanent sau temporar, cu orice titlu, o însărcinare de orice natură, retribuită sau nu, în serviciul unei persoane fizice dintre cele prevăzute la art. 175 alin. (2), precum și în cadrul oricărei persoane juridice.</p>
                      <p>(2) Limitele speciale ale pedepsei se reduc cu o treime.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Ca avocat, voi verifica dacă persoana acuzată se încadrează efectiv în această categorie „asimilată” funcționarilor publici. Dacă sarcina pe care o îndeplinea nu avea caracter oficial sau public, infracțiunea poate fi exclusă. Reducerea limitelor de pedeapsă cu o treime este un avantaj pe care îl invoc mereu pentru diminuarea consecințelor juridice.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-312">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 312 – Spălarea banilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Schimbarea sau transferul de bunuri, cunoscând că acestea provin din săvârșirea de infracțiuni, în scopul ascunderii sau disimulării originii ilicite a bunurilor ori în scopul de a ajuta persoana care a săvârșit infracțiunea din care provin bunurile să se sustragă de la urmărire, judecată sau executarea pedepsei, se pedepsește cu închisoare de la 3 la 10 ani.</p>
                      <p>(2) Ascunderea ori disimularea adevăratei naturi, a provenienței, a situării, a dispoziției, a circulației sau a proprietății bunurilor ori a altor drepturi asupra acestora, cunoscând că bunurile provin din infracțiuni, se pedepsește cu aceeași pedeapsă.</p>
                      <p>(3) Dobândirea, deținerea sau folosirea de bunuri, cunoscând că acestea provin din săvârșirea de infracțiuni, se pedepsește cu închisoare de la 3 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac elementul esențial al faptei – cunoașterea originii ilicite. Dacă clientul poate arăta că a primit bunurile în cadrul unei tranzacții obișnuite și fără suspiciuni rezonabile, atunci lipsesc elementele constitutive. În plus, trebuie verificată infracțiunea-sursă: dacă aceasta nu este dovedită, spălarea banilor nu poate fi reținută.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-323">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 323 – Falsul material în înscrisuri oficiale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>(1) Falsificarea unui înscris oficial prin contrafacerea scrierii sau a subscrierii ori prin alterarea lui în orice mod, de natură să producă consecințe juridice, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                      <p>(2) Folosirea unui înscris oficial falsificat, cunoscând că este fals, se pedepsește cu aceeași pedeapsă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Ca apărător, caut să demonstrez că modificarea sau întocmirea documentului nu a fost de natură să producă efecte juridice sau că clientul nu a știut că documentul este fals. În multe situații, pot invoca lipsa caracterului oficial al înscrisului sau existența unei erori materiale neintenționate.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-326">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 326 – Falsul în declarații</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Declararea necorespunzătoare a adevărului, făcută unei persoane dintre cele prevăzute la art. 175 sau unei unități în care aceasta își desfășoară activitatea, în vederea producerii unei consecințe juridice, pentru sine sau pentru altul, atunci când, potrivit legii ori împrejurărilor, declarația servește la producerea acelei consecințe, se pedepsește cu închisoare de la 3 luni la 2 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare este să demonstrez că declarația nu a produs și nu putea produce consecințe juridice. Dacă formularea este vagă, interpretabilă sau rezultă dintr-o confuzie, se poate invoca lipsa intenției directe. Este important și să verific dacă organul căruia i s-a dat declarația avea competența legală pentru a o primi.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="art-328">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 328 – Uzurparea de calități oficiale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Folosirea fără drept a unei calități oficiale, în scopul de a produce consecințe juridice, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, verific dacă acțiunea clientului chiar a creat aparența unei funcții oficiale și dacă aceasta a produs consecințe concrete. Dacă utilizarea a fost ocazională, în glumă, sau fără intenția de a induce în eroare, lipsesc elementele constitutive.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Legea nr. 241/2005 pentru prevenirea și combaterea evaziunii fiscale</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="l241-art-3">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 3 – Reținerea și neplata impozitelor și contribuțiilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Constituie infracţiune şi se pedepseşte cu închisoare de la 6 luni la 5 ani fapta contribuabilului care nu reface, cu intenţie sau din culpă, documentele de evidenţă contabilă distruse, în termenul înscris în documentele de control.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, elementul cheie este demonstrarea lipsei intenției sau a culpei în nerefacerea documentelor. Dacă termenul din documentele de control a fost nerezonabil de scurt sau dacă au existat circumstanțe obiective care au împiedicat refacerea (incendiu, inundație, virus informatic), aceasta poate constitui o cauză justificativă. De asemenea, dacă documentele distruse nu erau esențiale pentru determinarea obligațiilor fiscale sau dacă există copii/backup-uri care permit reconstituirea informațiilor, gravitatea faptei poate fi diminuată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-4">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 4 – Reținerea și utilizarea sumelor cu altă destinație</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 6 ani refuzul nejustificat al unei persoane de a prezenta organelor competente documentele legale şi bunurile din patrimoniu, în scopul împiedicării verificărilor financiare, fiscale sau vamale, în termen de cel mult 15 zile de la somaţie.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se concentrează pe caracterul „nejustificat" al refuzului. Dacă clientul a avut motive rezonabile să refuze prezentarea documentelor (lipsă de competență a organului de control, nerespectarea procedurilor legale, documentele nu erau disponibile la momentul somaţiei), refuzul poate fi justificat. De asemenea, termenul de 15 zile poate fi considerat insuficient dacă documentele sunt voluminoase sau dacă necesită timp pentru organizare. Colaborarea ulterioară cu autoritățile și prezentarea voluntară a documentelor demonstrează buna-credință.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-5">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 5 – Împiedicarea verificărilor financiare, fiscale sau vamale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 6 ani împiedicarea, sub orice formă, a organelor competente de a intra, în condiţiile prevăzute de lege, în sedii, incinte ori pe terenuri, cu scopul efectuării verificărilor financiare, fiscale sau vamale.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac elementul „fictiv” – este esențial să demonstrez că operațiunile reflectă tranzacții reale, chiar dacă ulterior acestea au fost contestate fiscal. Lipsa probelor clare din partea acuzării și existența unor documente justificative, chiar imperfecte, pot înclina balanța în favoarea clientului. În plus, dacă diferențele provin din interpretări fiscale diferite, pot invoca lipsa vinovăției penale.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-6">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 6 – Reţinerea şi nevărsarea impozitelor cu reţinere la sursă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 6 ani reţinerea şi nevărsarea, cu intenţie, în cel mult 30 de zile de la scadenţă, a sumelor reprezentând impozite sau contribuţii cu reţinere la sursă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se axează pe demonstrarea lipsei intenției directe de fraudă. Dacă întârzierea la plată a fost cauzată de dificultăți financiare obiective, probleme de lichiditate sau credința rezonabilă că sumele vor fi plătite în timp util, elementul intențional poate lipsi. De asemenea, termenul de 30 de zile poate fi considerat prea scurt în anumite circumstanțe economice. Plata sumelor înainte de finalizarea procesului, chiar cu întârziere, demonstrează buna-credință și poate conduce la soluții favorabile.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-6-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 6¹ – Reținerea, neplata și nereținerea impozitelor și contribuțiilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiuni şi se pedepsesc cu închisoare de la 1 an la 5 ani sau cu amendă reţinerea şi neplata, încasarea şi neplata, în cel mult 60 de zile de la termenul de scadenţă prevăzut de lege, a impozitelor şi/sau contribuţiilor prevăzute în anexa la prezenta lege.</p>
                      <p>(11) Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 5 ani sau cu amendă nereţinerea impozitelor şi/sau contribuţiilor prevăzute în anexa la prezenta lege.</p>
                      <p>(2) Prevederea de la alin. (1) intră în vigoare la data de 1 martie 2022.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare pentru acest nou articol se concentrează pe demonstrarea că reținerea, neplata sau nereținerea nu a fost intenționată. Termenul extins la 60 de zile oferă mai mult timp, dar trebuie demonstrat că dificultățile financiare sau problemele administrative au fost reale. De asemenea, diferențierea dintre „reținerea și neplata", „încasarea și neplata" și „nereținerea" necesită analize specifice pentru fiecare situație. Achitarea sumelor cu dobânzi și penalități poate conduce la reducerea pedepsei sau aplicarea doar a amenzii.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-7">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 7 – Deținerea și circulația timbrelor și formularelor cu regim special</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 5 ani şi interzicerea unor drepturi deţinerea sau punerea în circulaţie, fără drept, a timbrelor, banderolelor ori formularelor tipizate, utilizate în domeniul fiscal, cu regim special.</p>
                      <p>(2) Constituie infracţiune şi se pedepseşte cu închisoare de la 2 la 7 ani şi interzicerea unor drepturi tipărirea, folosirea, deţinerea sau punerea în circulaţie, cu ştiinţă, de timbre, banderole ori formulare tipizate, utilizate în domeniul fiscal, cu regim special, falsificate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Pentru acest articol complex, apărarea se axează pe demonstrarea că deținerea sau circulația timbrelor, banderolelor sau formularelor nu a fost „fără drept". Dacă clientul avea o justificare legală pentru posesia acestora (tranzacții comerciale legitime, activitate autorizată), elementul „fără drept" lipsește. Pentru varianta agravată (falsificare), trebuie contestată „știința" că acestea erau falsificate. Expertiza documentelor poate demonstra că diferențele față de originale sunt minore sau neintenționate.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-8">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 8 – Stabilirea cu rea-credință a impozitelor pentru obținerea de restituiri</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la 3 la 10 ani şi interzicerea unor drepturi sau cu amendă stabilirea cu rea-credinţă de către contribuabil a impozitelor, taxelor sau contribuţiilor, având ca rezultat obţinerea, fără drept, a unor sume de bani cu titlu de rambursări sau restituiri de la bugetul general consolidat ori compensări datorate bugetului general consolidat.</p>
                      <p>(2) Constituie infracţiune şi se pedepseşte cu închisoare de la 5 la 15 ani şi interzicerea unor drepturi sau cu amendă asocierea în vederea săvârşirii faptei prevăzute la alin. (1).</p>
                      <p>(3) Tentativa faptelor prevăzute la alin. (1) şi (2) se pedepseşte.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Acest articol sancționează foarte sever obținerea frauduloasă de restituiri. Apărarea se concentrează pe demonstrarea lipsei „rea-credinței" - dacă contribuabilul a acționat în baza unei interpretări rezonabile a legii sau a unor consultări cu specialiști, elementul subiectiv poate lipsi. De asemenea, trebuie contestată existența „schemei frauduloase" prin demonstrarea că operațiunile au avut substanță economică reală. Pentru varianta de asociere (alin. 2), se contestă existența acordului de voință pentru comiterea infracțiunii și rolul specific al fiecărui participant.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-9">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 9 – Evaziunea fiscală</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiuni de evaziune fiscală şi se pedepsesc cu închisoare de la 3 la 10 ani şi interzicerea unor drepturi sau cu amendă următoarele fapte săvârşite în scopul sustragerii de la îndeplinirea obligaţiilor fiscale:</p>
                      <p>a) ascunderea bunului ori a sursei impozabile sau taxabile;</p>
                      <p>b) omisiunea, în tot sau în parte, a evidenţierii, în actele contabile ori în alte documente legale, a operaţiunilor comerciale efectuate sau a veniturilor realizate;</p>
                      <p>c) evidenţierea, în actele contabile, în factura electronică sau în alte documente legale, a cheltuielilor care nu au la bază operaţiuni reale ori evidenţierea altor operaţiuni fictive;</p>
                      <p>d) alterarea, distrugerea sau ascunderea de acte contabile, memorii ale aparatelor de taxat ori de marcat electronice fiscale sau de alte mijloace de stocare a datelor, inclusiv electronice;</p>
                      <p>e) executarea de evidenţe contabile duble folosindu-se înscrisuri sau alte mijloace de stocare a datelor, inclusiv cele electronice;</p>
                      <p>f) sustragerea de la efectuarea verificărilor financiare, fiscale sau vamale, prin nedeclararea, declararea fictivă ori declararea inexactă cu privire la sediile principale sau secundare ale persoanelor verificate;</p>
                      <p>g) substituirea, degradarea sau înstrăinarea de către debitor ori de către terţe persoane a bunurilor sechestrate în conformitate cu prevederile Codului de procedură fiscală şi ale Codului de procedură penală;</p>
                      <p>h) folosirea de către contribuabil, cu rea-credinţă, a sistemului naţional privind factura electronică RO e-Factura, în vederea creării aparenţei de legalitate a unor operaţiuni fictive sau disimulării circuitului tranzacţional real al bunurilor/serviciilor;</p>
                      <p>i) utilizarea de aparate de marcat electronice fiscale care nu sunt conectate la sistemul informatic naţional de supraveghere şi monitorizare a datelor fiscale, potrivit legii, sau alterarea aparatelor de marcat electronice fiscale pentru netransmiterea unor date fiscale sau transmiterea unor date fiscale nereale.</p>
                      <p>(2) Dacă prin faptele prevăzute la alin. (1) s-a produs un prejudiciu mai mare de 500.000 euro, în echivalentul monedei naţionale, limita minimă a pedepsei prevăzute de lege şi limita maximă a acesteia se majorează cu 3 ani.</p>
                      <p>(3) Dacă prin faptele prevăzute la alin. (1) s-a produs un prejudiciu mai mare de 1.000.000 euro, în echivalentul monedei naţionale, limita minimă a pedepsei prevăzute de lege şi limita maximă a acesteia se majorează cu 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Noul text al art. 9 este mult mai cuprinzător și include elemente moderne (factura electronică, aparate fiscale electronice). Apărarea trebuie să demonstreze că activitățile nu au fost săvârșite „în scopul sustragerii de la îndeplinirea obligaţiilor fiscale". Pentru fiecare literă (a-i), există strategii specifice: pentru operațiuni fictive - demonstrarea substanței economice; pentru alterarea aparatelor fiscale - probleme tehnice neintenționate; pentru sistemul RO e-Factura - erori de utilizare, nu fraudă deliberată. Pragurile majorate (500.000 și 1.000.000 euro) oferă posibilități de negociere pentru prejudicii mai mici.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-9-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 9¹ – Infracțiuni în cadrul schemelor frauduloase transfrontaliere UE</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la 7 la 15 ani şi interzicerea exercitării unor drepturi orice acţiune sau inacţiune comisă în cadrul unor scheme frauduloase cu caracter transfrontalier având ca efect diminuarea cu cel puţin 10.000.000 euro, în echivalentul monedei naţionale, a resurselor bugetului Uniunii Europene, prin:</p>
                      <p>a) utilizarea sau prezentarea de declaraţii sau documente false, incorecte sau incomplete privind TVA;</p>
                      <p>b) nedivulgarea de informaţii privind TVA, atunci când aceste informaţii trebuie divulgate potrivit legii;</p>
                      <p>c) prezentarea de declaraţii corecte privind TVA pentru a masca în mod fraudulos neplata sau constituirea unor drepturi necuvenite la rambursări de TVA.</p>
                      <p>(2) Tentativa la infracţiunea prevăzută la alin. (1) se pedepseşte.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Acest nou articol vizează scheme transfrontaliere cu pragul extrem de ridicat de 10 milioane euro și pedepse severe (7-15 ani). Apărarea se concentrează pe contestarea caracterului „transfrontalier" al schemei și a legăturii cu bugetul UE. Trebuie demonstrat că activitățile nu au fost coordonate la nivel internațional sau că impactul asupra bugetului UE nu poate fi dovedit. Pentru fiecare literă (a-c), se contestă intenția de fraudă și se demonstrează că erorile privind TVA au fost neintenționate sau au rezultat din interpretări diferite ale legislației europene complexe.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-9-2">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 9² – Infracțiuni în cadrul schemelor frauduloase naționale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la 7 la 15 ani şi interzicerea exercitării unor drepturi orice acţiune comisă în cadrul unor scheme frauduloase având ca efect diminuarea cu cel puţin 1.000.000 euro, în echivalentul monedei naţionale, a resurselor bugetului de stat, prin:</p>
                      <p>a) utilizarea sau prezentarea de declaraţii sau documente false, documente electronice false, incorecte sau incomplete privind TVA;</p>
                      <p>b) nedivulgarea în mod intenţionat de informaţii privind TVA, atunci când aceste informaţii trebuie divulgate potrivit legii;</p>
                      <p>c) prezentarea de declaraţii corecte, declaraţii electronice corecte privind TVA pentru a masca în mod fraudulos neplata sau constituirea unor drepturi necuvenite la rambursări de TVA.</p>
                      <p>(2) Tentativa la infracţiunea prevăzută la alin. (1) se pedepseşte.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Similar cu art. 9¹, dar vizând bugetul național cu prag de 1 milion euro. Apărarea se axează pe demonstrarea că „scheme frauduloase" nu au existat - activitățile au fost izolate, nu coordonate. Pentru documentele electronice false, se contestă caracterul „fals" și se demonstrează că au fost erori tehnice sau de transmitere. Termenul „nedivulgarea în mod intenţionat" necesită dovezi clare ale intenției - dacă informațiile au fost omise din neglijență sau din cauza complexității legislației, elementul intențional lipsește.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-9-3">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 9³ – Operațiuni de creditare frauduloase</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Constituie infracţiune şi se pedepseşte cu închisoare de la 3 la 10 ani şi interzicerea unor drepturi sau cu amendă operaţiunea de creditare efectuată în mod direct sau indirect de către orice persoană fizică, având drept scop efectuarea unor plăţi cu sume de bani care provin din omisiunea evidenţierii în actele contabile a operaţiunilor comerciale efectuate şi/sau a veniturilor realizate a unuia sau mai multor contribuabili.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Acest articol sancționează operațiunile de creditare cu bani proveniți din evaziune. Apărarea se concentrează pe demonstrarea că sursa banilor utilizați pentru creditare era legală și că nu exista cunoștința despre proveniența din evaziune fiscală. Dacă creditarea a fost făcută prin intermediul instituțiilor financiare autorizate sau dacă există documente care atestă sursa legală a fondurilor, elementul infracțional poate fi înlăturat. De asemenea, se contestă legătura cauzală directă între omisiunea evidențierii operațiunilor și banii folosiți pentru creditare.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-10">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10 – Cauze de nepedepsire și reducerea pedepsei</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) În cazul săvârşirii unei infracţiuni prevăzute la art. 6¹, 8 sau 9, dacă până la expirarea unui termen de maximum 30 de zile de la finalizarea controlului efectuat de organele competente, în urma căruia se individualizează un prejudiciu datorat bugetului general consolidat de până la 1.000.000 euro, prejudiciul majorat cu 15% din valoarea acestuia, la care se adaugă dobânzile şi penalităţile, este acoperit integral, prin plată efectivă, fapta nu se pedepseşte. În acest caz, organele competente nu sesizează organele de urmărire penală.</p>
                      <p>(2) În cazul săvârşirii unei infracţiuni prevăzute la art. 6¹, 8 sau 9, dacă până la primul termen de judecată prejudiciul cauzat este acoperit integral, prin plată efectivă, limitele pedepsei prevăzute de lege pentru fapta săvârşită se reduc la jumătate. Dacă prejudiciul cauzat şi recuperat în aceste condiţii este de până la 1.000.000 euro inclusiv, în echivalentul monedei naţionale, se poate aplica pedeapsa cu amenda. În cazul săvârşirii unei infracţiuni prevăzute la art. 6¹, 8 sau 9, dacă ulterior primului termen de judecată şi până la judecarea definitivă a cauzei prejudiciul cauzat este acoperit integral, prin plată efectivă, limitele pedepsei prevăzute de lege pentru fapta săvârşită se reduc cu o treime. Prejudiciul se va determina în temeiul unei expertize de specialitate. Suspectul sau inculpatul au dreptul de a participa la efectuarea expertizei. Dispoziţiile art. 172-180 din Codul de procedură penală se aplică în mod corespunzător. Despre dispunerea expertizei va fi încunoştinţat suspectul sau inculpatul, persoană fizică sau persoană juridică, prin reprezentant, după caz, dându-i acestuia timpul necesar pentru exercitarea deplină a drepturilor sale procesuale.</p>
                      <p>(3) În cazul săvârşirii unei infracţiuni prevăzute la art. 6¹, 8 sau 9, prin care s-a cauzat un prejudiciu care nu depăşeşte 1.000.000 euro, în echivalentul monedei naţionale, dacă în cursul urmăririi penale prejudiciul cauzat majorat cu 25% din valoarea acestuia, la care se adaugă dobânzile şi penalităţile, este acoperit integral, prin plată efectivă, fapta nu se pedepseşte, aplicându-se dispoziţiile art. 16 alin. (1) lit. h) din Codul de procedură penală. Dacă în cursul procedurii camerei preliminare sau al judecăţii, până la pronunţarea unei hotărâri în primă instanţă, acelaşi prejudiciu majorat cu 50% din valoarea acestuia, la care se adaugă dobânzile şi penalităţile, este acoperit integral, prin plată efectivă, fapta nu se pedepseşte, aplicându-se dispoziţiile art. 16 alin. (1) lit. h) din Codul de procedură penală. Dacă în cursul judecăţii în apel, până la pronunţarea unei hotărâri judecătoreşti definitive, acelaşi prejudiciu majorat cu 100% din valoarea acestuia, la care se adaugă dobânzile şi penalităţile, este acoperit integral, prin plată efectivă, fapta nu se pedepseşte, aplicându-se dispoziţiile art. 16 alin. (1) lit. h) din Codul de procedură penală.</p>
                      <p>(4) Dispoziţiile prezentului articol se aplică tuturor inculpaţilor chiar dacă nu au contribuit la acoperirea prejudiciului prevăzut la alin. (1) şi (2).</p>
                      <p>(5) Dacă persoana care a săvârşit una dintre infracţiunile prevăzute la art. 6¹, 8 sau 9 aduce la cunoştinţa organelor de urmărire penală sau a organelor fiscale infracţiunea comisă, în timp ce aceasta se află în derulare sau în termen de cel mult un an de la data epuizării activităţii infracţionale şi mai înainte ca organele de urmărire penală să fi fost sesizate cu privire la aceasta şi, ulterior, înlesneşte aflarea adevărului şi tragerea la răspundere penală a unuia sau mai multor participanţi la comiterea infracţiunii, limitele speciale se reduc la jumătate.</p>
                      <p>(6) Dispoziţiile prevăzute la alin. (1) şi (2) nu se aplică dacă făptuitorul a mai săvârşit o infracţiune prevăzută de prezenta lege într-un interval de 5 ani de la comiterea faptei pentru care a beneficiat de prevederile alin. (1) sau (2).</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, mă concentrez pe ideea că acțiunile clientului nu au depășit faza actelor pregătitoare, care, în lipsa unor dispoziții exprese, nu ar fi sancționabile. Dacă prejudiciul nu s-a produs și nu există certitudine că fapta ar fi fost dusă la capăt, se poate invoca lipsa pericolului social concret.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-10-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10¹ – Prescripția răspunderii penale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul infracţiunilor prevăzute de prezenta lege, termenul de prescripţie al răspunderii penale începe să curgă de la data sesizării organului fiscal sau de la data sesizării organului de urmărire penală, dar nu mai târziu de 10 ani de la data comiterii infracţiunii.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Noul art. 10 este extrem de complex și oferă multiple oportunități de evitare a pedepsei prin plată. Strategia mea se concentrează pe: 1) Identificarea rapidă a prejudiciului pentru aplicarea termenului de 30 de zile (alin. 1); 2) Calculul corect al majorărilor (15%, 25%, 50%, 100%) pentru diferitele etape procedurale; 3) Utilizarea dreptului de participare la expertiză pentru contestarea prejudiciului; 4) Aplicarea cauzei de reducere la jumătate pentru informarea voluntară (alin. 5); 5) Verificarea aplicabilității excepției pentru recidivă (alin. 6). Acest articol oferă cele mai mari șanse de soluție favorabilă prin plată integrală și colaborare.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-11">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 11 – Măsuri asigurătorii obligatorii</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul în care s-a săvârşit o infracţiune prevăzută de prezenta lege, luarea măsurilor asigurătorii este obligatorie.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Caracterul obligatoriu al măsurilor asigurătorii înseamnă că acestea se vor dispune aproape automat la începutul anchetei. În apărarea clientului, mă voi concentra pe contestarea proporționalității și necesității acestor măsuri. Voi demonstra că bunurile sechestrate depășesc valoarea prejudiciului estimat sau că sechestrul afectează nejustificat activitatea economică legitimă. De asemenea, voi negocia măsuri alternative (cauțiune bancară, garanții) care să asigure recuperarea prejudiciului fără a paraliza complet activitatea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-12">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 12 – Interdicții pentru condamnați</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Nu pot fi fondatori, administratori, directori sau reprezentanţi legali ai societăţii comerciale, iar dacă au fost alese, sunt decăzute din drepturi, persoanele care au fost condamnate pentru infracţiunile prevăzute de prezenta lege.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această interdicție este o pedeapsă complementară extrem de severă care poate afecta grav viitorul profesional al clientului. În apărarea clientului, voi demonstra că activitatea comercială este esențială pentru susținerea familiei și pentru plata prejudiciului. Voi negocia soluții alternative cum ar fi supraveghere judiciară, limitarea activității la anumite domenii sau impunerea unui administrator extern. Dacă interdicția este pronunțată, voi explora posibilitatea reabilitării judiciare rapide prin demonstrarea unui comportament exemplar și a plății integrale a obligațiilor.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Legea nr. 129/2019 pentru prevenirea și combaterea spălării banilor</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="l129-art-49">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 49 – Infracțiunea de spălare a banilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracţiunea de spălare a banilor şi se pedepseşte cu închisoare de la 3 la 10 ani:</p>
                      <p>a) schimbarea sau transferul de bunuri, cunoscând că provin din săvârşirea de infracţiuni, în scopul ascunderii sau al disimulării originii ilicite a acestor bunuri ori în scopul de a ajuta persoana care a săvârşit infracţiunea din care provin bunurile să se sustragă de la urmărire, judecată sau executarea pedepsei;</p>
                      <p>b) ascunderea ori disimularea adevăratei naturi, a provenienţei, a situării, a dispoziţiei, a circulaţiei sau a proprietăţii bunurilor ori a drepturilor asupra acestora, cunoscând că bunurile provin din săvârşirea de infracţiuni;</p>
                      <p>c) dobândirea, deţinerea sau folosirea de bunuri de către o altă persoană decât subiectul activ al infracţiunii din care provin bunurile, cunoscând că acestea provin din săvârşirea de infracţiuni.</p>
                      <p>(2) Tentativa se pedepseşte.</p>
                      <p>(2¹) Constituie circumstanţă agravantă săvârşirea infracţiunii de spălare a banilor de către una dintre entităţile raportoare prevăzute la art. 5, în exercitarea activităţii sale profesionale.</p>
                      <p>(3) Dacă fapta a fost săvârşită de o persoană juridică, pe lângă pedeapsa amenzii, instanţa aplică, după caz, una sau mai multe dintre pedepsele complementare prevăzute la art. 136 alin. (3) lit. a) -c) din Legea nr. 286/2009, cu modificările şi completările ulterioare.</p>
                      <p>(4) Cunoaşterea provenienţei bunurilor sau scopul urmărit trebuie stabilită/stabilit din circumstanţele faptice obiective.</p>
                      <p>(5) Dispoziţiile alin. (1) - (4) se aplică indiferent dacă infracţiunea din care provine bunul a fost comisă pe teritoriul României sau în alte state membre sau state terţe.</p>
                      <p>(6) Dispoziţiile alin. (1) - (4) se aplică şi infracţiunilor de spălare a banilor săvârşite în afara teritoriului ţării de către un cetăţean român sau de către o persoană juridică română chiar dacă fapta nu este prevăzută ca infracţiune şi de legea penală a ţării unde a fost săvârşită.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Noua legislație aduce clarificări importante și extinde domeniul de aplicare. Apărarea se axează pe lipsa elementului subiectiv - cunoașterea provenienței ilicite trebuie demonstrată prin circumstanțe faptice obiective (alin. 4), nu prin simple prezumții. Pentru lit. c), este esențial că se aplică doar „altei persoane decât subiectul activ" al infracțiunii-sursă. Circumstanța agravantă (alin. 2¹) pentru entitățile raportoare necesită demonstrarea că fapta a fost comisă „în exercitarea activității profesionale". Aplicarea extrateritorială (alin. 5-6) poate fi contestată dacă legătura cu România nu este suficient de strânsă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l129-art-50">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 50 – Măsuri asigurătorii obligatorii</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul în care s-a săvârşit o infracţiune de spălare a banilor sau de finanţare a terorismului, luarea măsurilor asigurătorii este obligatorie, în condiţiile Legii nr. 135/2010 privind Codul de procedură penală, cu modificările şi completările ulterioare.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Caracterul obligatoriu al măsurilor asigurătorii în cazul spălării banilor înseamnă că acestea se vor dispune aproape automat. Strategia de apărare se concentrează pe contestarea proporționalității și necesității măsurilor concrete aplicate. Voi demonstra că bunurile sechestrate depășesc valoarea prejudiciului sau că măsurile afectează nejustificat activitatea economică legitimă. De asemenea, voi invoca respectarea strictă a condițiilor din Codul de procedură penală și voi negocia măsuri alternative care să asigure scopul procesual fără a paraliza complet activitatea clientului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l129-art-51">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 51 – Confiscarea bunurilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) În cazul infracţiunilor de spălare a banilor şi de finanţare a terorismului se aplică dispoziţiile privind confiscarea bunurilor din Legea nr. 286/2009, cu modificările şi completările ulterioare.</p>
                      <p>(2) Dacă bunurile supuse confiscării nu se găsesc, se confiscă echivalentul lor în bani sau bunurile dobândite în locul acestora.</p>
                      <p>(3) Veniturile sau alte beneficii materiale obţinute din bunurile prevăzute la alin. (2) se confiscă.</p>
                      <p>(4) Dacă bunurile supuse confiscării nu pot fi individualizate faţă de bunurile dobândite în mod legal, se confiscă bunuri până la concurenţa valorii bunurilor supuse confiscării.</p>
                      <p>(5) Dispoziţiile alin. (4) se aplică în mod corespunzător şi veniturilor sau altor beneficii materiale obţinute din bunurile supuse confiscării, ce nu pot fi individualizate faţă de bunurile dobândite în mod legal.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Sistemul de confiscare este extrem de cuprinzător și se aplică conform Legii nr. 286/2009. Strategia de apărare se concentrează pe: 1) Demonstrarea că bunurile contestate au proveniență licită și nu pot fi individualizate față de bunurile ilicite (alin. 4-5); 2) Contestarea calculului valorii bunurilor supuse confiscării și a metodologiei de evaluare; 3) Demonstrarea că bunurile nu au legătură directă cu infracțiunea de spălare; 4) Invocarea drepturilor terților de bună-credință care au dobândit bunuri înainte de comiterea infracțiunii. De asemenea, voi contesta confiscarea „echivalentului" (alin. 2) dacă aceasta se bazează pe estimări nejustificate.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Legea nr. 31/1990 privind societățile</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="l31-art-271">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 271 – Declararea necorespunzătoare a capitalului social</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fondatorii, administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care, în prospectele, rapoartele sau comunicările privind constituirea ori funcționarea societății, fac declarații neadevărate sau ascund, cu rea-credință, date esențiale referitoare la situația societății, se pedepsesc cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac ideea de rea-credință – este esențial să demonstrez că eventualele erori din documente provin din neglijență sau interpretări diferite, nu din intenția de a induce în eroare. De asemenea, pot solicita o expertiză contabilă pentru a arăta că datele reflectau realitatea la momentul întocmirii actelor, chiar dacă ulterior situația societății s-a modificat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-272">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 272 – Prezentarea de date false autorităților</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere, precum și lichidatorii care, cu ocazia prezentării situațiilor financiare sau a altor documente către autorități, includ date false ori omit cu rea-credință să includă datele cerute de lege, se pedepsesc cu închisoare de la unu la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare se bazează pe demonstrarea lipsei intenției și pe evidențierea faptului că eventualele omisiuni nu au avut impact semnificativ asupra realității economice a societății. Dacă lipsa unor date a fost cauzată de interpretări contabile diferite sau de neconcordanțe minore, fapta poate fi reîncadrată sau chiar înlăturată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-273">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 273 – Falsificarea documentelor societății</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Orice persoană care falsifică registrele societății, procesele-verbale ale adunărilor generale sau alte documente ale societății, se pedepsește cu închisoare de la 2 la 7 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, verific dacă documentele invocate sunt cu adevărat falsificate sau dacă există doar diferențe de formă ori erori de redactare. Este important de arătat că modificările nu au produs consecințe juridice sau nu au fost făcute cu scop fraudulos. Lipsa unui prejudiciu real este un argument puternic pentru diminuarea răspunderii.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-274">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 274 – Folosirea cu rea-credință a bunurilor societății</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care folosesc cu rea-credință bunurile sau creditul societății într-un scop contrar intereselor acesteia ori în folos propriu sau al altuia, se pedepsesc cu închisoare de la 2 la 7 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se axează pe demonstrarea lipsei caracterului contrar interesului societății – de multe ori, deciziile de afaceri implică riscuri asumate care nu constituie abuz dacă erau justificate economic. Pot arăta că utilizarea bunurilor a urmărit un beneficiu pentru societate, chiar dacă rezultatul nu a fost cel scontat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-275">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 275 – Împrumuturi sau garanții ilegale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care, fără respectarea condițiilor legale, acordă împrumuturi sau constituie garanții folosind bunurile ori creditul societății, se pedepsesc cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Ca apărător, verific dacă actul a încălcat cu adevărat prevederile legale privind împrumuturile și garanțiile sau dacă există interpretări alternative ale normei aplicabile. Dacă tranzacția a fost în interesul societății ori cu aprobarea adunării generale a asociaților/acționarilor, se poate susține inexistența caracterului ilicit.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-276">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 276 – Distribuirea de dividende fictive</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care distribuie dividende, sub orice formă, din profituri fictive sau care nu puteau fi distribuite potrivit legii, se pedepsesc cu închisoare de la 2 la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, analizez modul de calcul al profitului și verific dacă diferențele constatate nu provin din interpretări contabile diferite sau din estimări de lichidități. Dacă administratorul a acționat în baza unor bilanțuri provizorii aprobate de organele competente, lipsa intenției de fraudă poate fi invocată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-277">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 277 – Nerespectarea hotărârilor adunării generale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care nu pun în aplicare hotărârile adunării generale a asociaților/acționarilor se pedepsesc cu închisoare de la o lună la un an sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia mea este să arăt că neexecutarea hotărârii a fost justificată de circumstanțe obiective – de exemplu, imposibilitatea tehnică sau juridică de a pune în aplicare decizia. De asemenea, dacă hotărârea era nelegală sau ar fi produs un prejudiciu, administratorul putea fi chiar obligat să nu o execute.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-278">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 278 – Împiedicarea controlului</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care împiedică sau îngreunează, prin orice mijloace, efectuarea controlului legal asupra societății, se pedepsesc cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi demonstra că eventualele întârzieri sau lipsa unor documente nu au fost cauzate de intenția de a obstrucționa controlul, ci de dificultăți administrative sau de lipsa accesului la arhivă. Dacă există corespondență cu organul de control prin care se solicită reprogramarea, acest lucru dovedește buna-credință.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-279">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 279 – Divulgarea de informații confidențiale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Administratorii, directorii, membrii directoratului sau ai consiliului de supraveghere care divulgă, fără autorizare, date sau informații confidențiale ale societății, se pedepsesc cu închisoare de la 1 la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aici, apărarea se va concentra pe demonstrarea faptului că informațiile divulgate nu aveau caracter confidențial real sau că erau deja publice la momentul comunicării. Dacă divulgarea a fost făcută în interesul societății sau în baza unei obligații legale, caracterul ilicit dispare.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l31-art-280">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 280 – Falsul în documentele societății</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Orice persoană care, cu prilejul întocmirii actelor constitutive sau a altor documente ale societății, folosește acte false ori declară date neadevărate, se pedepsește cu închisoare de la 6 luni la 2 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi insista asupra faptului că eventualele neconcordanțe din documente nu au fost de natură să producă efecte juridice relevante sau că provin din greșeli administrative. Dacă datele pot fi corectate și nu există un prejudiciu concret, se poate cere aplicarea unei sancțiuni mai blânde sau chiar încetarea procesului penal.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Legea nr. 78/2000</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="l78-art-9">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 9 – Infracțiuni asimilate infracțiunilor de corupție</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta persoanei care, în scopul obținerii pentru sine sau pentru altul de bani, bunuri ori alte foloase necuvenite, pretinde, primește ori acceptă promisiunea acestora, direct sau indirect, săvârșită de o persoană care exercită atribuții în cadrul unei persoane juridice, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea exercitării unor drepturi.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac elementul „foloase necuvenite” – dacă beneficiul primit este justificat printr-un contract sau printr-o relație comercială legală, fapta nu mai are caracter penal. De asemenea, voi arăta că discuțiile ori promisiunile invocate nu au produs consecințe concrete și pot fi încadrate ca simple negocieri.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-10">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10 – Infracțiuni economice în cadrul privatizării și subvențiilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>Constituie infracţiuni şi se pedepsesc cu închisoare de la 3 la 10 ani şi interzicerea unor drepturi următoarele fapte, dacă sunt săvârşite în scopul obţinerii pentru sine sau pentru altul de bani, bunuri ori alte foloase necuvenite:</p>
                      <p>a) stabilirea, cu intenţie, a unei valori diminuate, faţă de valoarea comercială reală, a bunurilor aparţinând operatorilor economici la care statul sau o autoritate a administraţiei publice locale este acţionar, comisă în cadrul acţiunii de privatizare ori de executare silită, de reorganizare sau lichidare judiciară ori cu ocazia unei operaţiuni comerciale, ori a bunurilor aparţinând autorităţii publice sau instituţiilor publice, în cadrul unei acţiuni de vânzare a acestora sau de executare silită, săvârşită de cei care au atribuţii de conducere, de administrare, de gestionare, de executare silită, de reorganizare ori lichidare judiciară;</p>
                      <p>b) acordarea de subvenţii cu încălcarea legii sau neurmărirea, conform legii, a respectării destinaţiei subvenţiilor;</p>
                      <p>c) utilizarea subvenţiilor în alte scopuri decât cele pentru care au fost acordate, precum şi utilizarea în alte scopuri a creditelor garantate din fonduri publice sau care urmează să fie rambursate din fonduri publice.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această infracțiune complexă necesită demonstrarea intenției directe de obținere a unui folos necuvenit. În apărare, mă concentrez pe contestarea evaluării bunurilor - dacă expertiza de evaluare poate fi pusă sub semnul întrebării sau dacă prețul stabilit se încadra în limitele unei fluctuații normale de piață, elementul material poate fi înlăturat. Pentru lit. b) și c), voi demonstra că utilizarea subvențiilor a respectat destinația generală a programului sau că modificările au fost făcute cu informarea autorităților competente.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-11">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 11 – Conflictul de interese în activitatea economică</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Fapta persoanei care, având sarcina de a supraveghea, a controla, a reorganiza sau a lichida un operator economic privat, îndeplineşte pentru acesta vreo însărcinare, intermediază ori înlesneşte efectuarea unor operaţiuni comerciale sau financiare ori participă cu capital la un asemenea operator economic, dacă fapta este de natură a-i aduce direct sau indirect un folos necuvenit, constituie infracţiune şi se pedepseşte cu închisoare de la un an la 5 ani şi interzicerea unor drepturi.</p>
                      <p>(2) Dacă fapta prevăzută la alin. (1) a fost săvârşită într-un interval de 5 ani de la încetarea însărcinării, pedeapsa este închisoare de la 6 luni la 3 ani sau amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare se axează pe demonstrarea lipsei caracterului necuvenit al folosului obținut. Dacă activitatea desfășurată de client a fost transparentă, declarată autorităților competente și nu a influențat procesul de supraveghere/control, elementul subiectiv lipsește. Pentru alin. (2), termenul de 5 ani este interpretabil - voi demonstra că activitățile nu au legătură cu informațiile obținute în timpul mandatului anterior sau că nu există un avantaj concurențial real.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-12">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 12 – Operațiuni financiare incompatibile și folosirea informațiilor privilegiate</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>Sunt pedepsite cu închisoarea de la 1 la 5 ani următoarele fapte, dacă sunt săvârşite în scopul obţinerii pentru sine sau pentru altul de bani, bunuri ori alte foloase necuvenite:</p>
                      <p>a) efectuarea de operaţiuni financiare, ca acte de comerţ, incompatibile cu funcţia, atribuţia sau însărcinarea pe care o îndeplineşte o persoană ori încheierea de tranzacţii financiare, utilizând informaţiile obţinute în virtutea funcţiei, atribuţiei sau însărcinării sale;</p>
                      <p>b) folosirea, în orice mod, direct sau indirect, de informaţii ce nu sunt destinate publicităţii ori permiterea accesului unor persoane neautorizate la aceste informaţii.</p>
                      <p>(2) În sensul prezentei legi, operaţiunile financiare constau în operaţiuni care antrenează circulaţia de capital, operaţiuni de bancă, de schimb valutar sau de credit, operaţiuni de plasament, în burse, în asigurări, în plasament mutual ori privitor la conturile bancare şi cele asimilate acestora, tranzacţii comerciale interne şi internaţionale. Pentru a fi efectuate ca acte de comerţ, operaţiunile financiare trebuie să constituie o acţiune de intermediere în circulaţia bunurilor făcută în mod organizat şi sistematic, în scopul obţinerii de profit.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea acestor acuzații, mă concentrez pe demonstrarea că operațiunile financiare nu au caracter sistematic sau organizat (alin. 2), fiind tranzacții izolate fără scop de profit constant. Pentru lit. a), voi arăta că informațiile folosite erau deja publice sau că operațiunile nu au legătură cu funcția deținută. Pentru lit. b), dacă informațiile au fost transmise din eroare sau fără intenția de a produce un avantaj, elementul subiectiv lipsește. De asemenea, voi contesta calificarea unor operațiuni normale ca fiind „incompatibile cu funcția".</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-13">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13 – Folosirea influenței în organizații</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta persoanei care îndeplineşte o funcţie de conducere într-un partid, într-un sindicat sau patronat ori în cadrul unei persoane juridice fără scop patrimonial, de a folosi influenţa ori autoritatea sa în scopul obţinerii pentru sine ori pentru altul de bani, bunuri sau alte foloase necuvenite, se pedepseşte cu închisoare de la unu la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare se bazează pe demonstrarea că activitățile desfășurate au fost în interesul organizației, nu personal. Dacă beneficiul obținut a fost unul transparent, aprobat de organele de conducere sau justificat prin servicii reale prestate organizației, caracterul necuvenit lipsește. De asemenea, voi contesta existența unei influențe reale - dacă funcția deținută era una onorifică sau fără putere de decizie efectivă, elementul material nu poate fi reținut.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-13-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13¹ – Șantajul cu circumstanțe agravante</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul infracţiunii de şantaj, prevăzută de art. 207 din Codul penal, în care este implicată o persoană dintre cele prevăzute la art. 1, limitele speciale ale pedepsei se majorează cu o treime.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această circumstanță agravantă se aplică numai pentru persoanele care intră în categoria subiectelor speciale de la art. 1 din lege. În apărare, voi contesta această calitate sau voi demonstra că fapta nu a fost comisă în legătură cu exercitarea funcției. Dacă şantajul a fost unul "civil" (solicitarea unei plăți datorate), nu se poate aplica această agravantă. De asemenea, majorarea cu o treime trebuie calculată corect în raport cu limitele de bază ale infracțiunii de șantaj.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-13-2">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13² – Abuzul în serviciu cu circumstanțe agravante</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul infracţiunilor de abuz în serviciu sau de uzurpare a funcţiei, dacă funcţionarul public a obţinut pentru sine ori pentru altul un folos necuvenit, limitele speciale ale pedepsei se majorează cu o treime.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Pentru aplicarea acestei agravante, trebuie demonstrat atât abuzul în serviciu de bază, cât și obținerea unui folos necuvenit distinct. În apărare, voi arăta că folosul invocat a fost legal (salariu, diurnă, rambursare de cheltuieli) sau că nu există legătură cauzală între abuzul în serviciu și avantajul obținut. Dacă fapta de bază nu se poate proba, cu atât mai puțin se poate aplica această circumstanță agravantă. De asemenea, voi contesta calculul majorării cu o treime dacă aceasta nu respectă limitele legale ale pedepselor.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-15">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 15 – Tentativa</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracţiunile prevăzute în prezenta secţiune se pedepseşte.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Pentru reținerea tentativei, acuzarea trebuie să demonstreze că clientul a întreprins acte de execuție care să tindă în mod direct spre comiterea infracțiunii. În apărare, voi arăta că actele imputate nu depășesc faza actelor pregătitoare, care în principiu nu sunt pedepsite. Dacă lipsesc probe clare despre intenția definitivă de comitere a infracțiunii sau dacă "renunțarea voluntară" poate fi invocată, tentativa nu se reține.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-16">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 16 – Concursul de norme</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Dacă faptele prevăzute în prezenta secţiune constituie, potrivit Codului penal sau unor legi speciale, infracţiuni mai grave, acestea se pedepsesc în condiţiile şi cu sancţiunile stabilite în aceste legi.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această normă de rezolvare a concursului este favorabilă apărării, întrucât permite aplicarea legii mai ușoare în raport cu fapta concretă. Voi analiza toate încadrările juridice posibile pentru a identifica cele mai favorabile pentru client. Dacă fapta poate fi incriminată atât sub această lege cât și sub Codul penal, se va aplica norma care prevede pedeapsa mai ușoară sau care oferă mai multe posibilități de apărare. Este important să verific dacă nu cumva există o lege specială mai recentă și mai favorabilă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-18-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 18¹ – Infracțiuni privind fondurile europene - obținere frauduloasă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Folosirea sau prezentarea de documente ori declaraţii false, inexacte sau incomplete, dacă fapta are ca rezultat obţinerea pe nedrept sau reţinerea pe nedrept de fonduri ori active din bugetul Uniunii Europene sau bugetele administrate de aceasta ori în numele ei, se pedepseşte cu închisoare de la 2 la 7 ani şi interzicerea exercitării unor drepturi.</p>
                      <p>(2) Cu pedeapsa prevăzută la alin. (1) se sancţionează omisiunea de a furniza, cu ştiinţă, datele cerute potrivit prevederilor legale pentru obţinerea sau reţinerea de fonduri ori active din bugetul Uniunii Europene sau bugetele administrate de aceasta ori în numele ei, dacă fapta are ca rezultat obţinerea pe nedrept sau reţinerea pe nedrept a acestor fonduri ori active.</p>
                      <p>(3) Dacă faptele prevăzute la alin. (1) şi (2) au produs consecinţe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Elementul esențial este rezultatul - obținerea sau reținerea pe nedrept a fondurilor. În apărare, voi demonstra că eventualele inexactități din documente nu au influențat decizia de acordare a finanțării sau că informațiile erau deja cunoscute autorității de management. Pentru alin. (2), omisiunea trebuie să fie "cu știință" - dacă lipsesc probe despre cunoașterea obligației de informare, elementul subiectiv nu este îndeplinit. "Consecințele deosebit de grave" (alin. 3) trebuie interpretate restrictiv - nu orice prejudiciu mare constituie circumstanță agravantă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-18-2">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 18² – Schimbarea destinației fondurilor europene</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Schimbarea, fără respectarea prevederilor legale, a destinaţiei fondurilor sau activelor obţinute ori reţinute din bugetul Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei se pedepseşte cu închisoare de la un an la 5 ani şi interzicerea exercitării unor drepturi.</p>
                      <p>(2) Schimbarea, fără respectarea prevederilor legale, a destinaţiei unui folos legal obţinut, dacă fapta are ca rezultat diminuarea ilegală a resurselor din bugetul Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei, se sancţionează cu pedeapsa prevăzută la alin. (1).</p>
                      <p>(3) Dacă faptele prevăzute la alin. (1) şi (2) au produs consecinţe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> "Schimbarea destinației" trebuie să fie "fără respectarea prevederilor legale" - voi demonstra că modificările au fost făcute conform procedurii de amendare a contractului sau cu informarea autorității de management. Pentru alin. (2), trebuie probată "diminuarea ilegală" a resurselor UE - dacă fondurile au fost cheltuite pentru obiective similare sau complementare proiectului, elementul material lipsește. În multe cazuri, schimbarea destinației poate fi justificată de necesitățile practice ale implementării proiectului, fără intenție frauduloasă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-18-3">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 18³ – Diminuarea ilegală a resurselor UE</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Folosirea sau prezentarea de documente ori declaraţii false, inexacte sau incomplete, care are ca rezultat diminuarea ilegală a resurselor bugetului Uniunii Europene sau ale bugetelor administrate de aceasta ori în numele ei, se pedepseşte cu închisoare de la 2 la 7 ani şi interzicerea exercitării unor drepturi.</p>
                      <p>(2) Cu pedeapsa prevăzută la alin. (1) se sancţionează omisiunea de a furniza, cu ştiinţă, datele cerute potrivit prevederilor legale, dacă fapta are ca rezultat diminuarea ilegală a resurselor bugetului Uniunii Europene sau ale bugetelor administrate de aceasta ori în numele ei.</p>
                      <p>(3) Dacă faptele prevăzute la alin. (1) şi (2) au produs consecinţe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această infracțiune vizează situațiile în care se diminuează veniturile UE (de ex., declararea incorectă a taxelor vamale sau TVA). În apărare, voi demonstra că eventualele erori din declarații nu au avut impact real asupra bugetului UE sau că diminuarea nu este "ilegală" dacă rezultă din aplicarea corectă a unor interpretări rezonabile ale reglementărilor. Pentru omisiunea cu știință (alin. 2), elementul subiectiv trebuie probat cu certitudine - simple presupuneri nu sunt suficiente.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-18-4">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 18⁴ – Tentativa pentru infracțiunile cu fonduri europene</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa infracţiunilor prevăzute la art. 18¹-18³ se pedepseşte.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Pentru infracțiunile cu fonduri europene, tentativa este pedepsită. În apărare, voi demonstra că actele imputate nu au depășit faza pregătitoare sau că nu exista intenția fermă de comitere a infracțiunii. Dacă documentele false au fost întocmite dar nu au fost depuse la autoritate, sau dacă procedura de acordare a fondurilor nu a fost inițiată, se poate invoca lipsa pericolului social concret. "Renunțarea voluntară" poate constitui o cale de apărare eficientă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-18-5">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 18⁵ – Răspunderea conducătorilor de entități</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Încălcarea din culpă de către directorul, administratorul sau persoana cu atribuţii de decizie ori de control în cadrul unui operator economic a unei îndatoriri de serviciu, prin neîndeplinirea acesteia sau îndeplinirea ei defectuoasă, dacă fapta a avut ca rezultat săvârşirea de către o persoană care se află în subordinea sa şi care a acţionat în numele acelui operator economic a uneia dintre infracţiunile prevăzute la art. 18¹-18³ sau săvârşirea unei infracţiuni de corupţie ori de spălare a banilor în legătură cu fondurile Uniunii Europene, se pedepseşte cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Această infracțiune de neglijență în serviciu necesită probe clare despre încălcarea unei îndatoriri concrete de supraveghere. În apărare, voi demonstra că sistemele de control intern erau adecvate și că infracțiunea comisă de subordonat nu putea fi prevăzută sau împiedicată prin măsuri rezonabile. Dacă conducătorul a acționat conform procedurilor interne și a reglementărilor aplicabile, răspunderea culpoasă nu poate fi reținută. De asemenea, voi contesta legătura cauzală între pretinsa neglijență și infracțiunea comisă de subordonat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Codul Vamal</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="cv-art-270">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 270 – Contrabanda</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Introducerea în sau scoaterea din țară, prin orice mijloace, a bunurilor sau mărfurilor, prin alte locuri decât cele stabilite pentru control vamal, constituie infracțiune și se pedepsește cu închisoare de la 2 la 7 ani și confiscarea bunurilor.</p>
                      <p>(2) Constituie, de asemenea, infracțiune introducerea sau scoaterea din țară, prin locurile stabilite pentru control, fără declararea acestora în documentele vamale, dacă valoarea bunurilor depășește limita prevăzută de lege.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, mă concentrez pe demonstrarea lipsei intenției directe – dacă bunurile au fost trecute din eroare, fără scop de fraudă, sau dacă valoarea este sub pragul legal, fapta poate fi reîncadrată ca contravenție. De asemenea, dacă locul de trecere a frontierei era unul folosit din cauza unei situații de urgență sau a indicațiilor autorităților, elementul material poate fi contestat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cv-art-271">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 271 – Tentativa de contrabandă</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracțiunea prevăzută la art. 270 se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia mea este să arăt că acțiunea nu a depășit faza actelor pregătitoare și că nu există probe că bunurile ar fi trecut efectiv frontiera. Dacă autoritățile au intervenit înainte de orice act de trecere, se poate susține lipsa pericolului social concret.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cv-art-272">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 272 – Folosirea documentelor vamale falsificate</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Folosirea la autoritatea vamală a documentelor falsificate sau obținute prin mijloace frauduloase, pentru a induce în eroare asupra naturii, cantității sau valorii mărfurilor, se pedepsește cu închisoare de la 3 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, verific autenticitatea documentelor și demonstrez că eventualele neconcordanțe provin din greșeli administrative sau traduceri incorecte, nu din intenție frauduloasă. Dacă documentul a fost întocmit de un terț, fără știrea clientului, se poate invoca lipsa vinovăției.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cv-art-273">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 273 – Sustragerea de la plata taxelor vamale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Sustragerea de la plata taxelor datorate pentru bunurile introduse sau scoase din țară constituie infracțiune și se pedepsește cu închisoare de la 1 la 5 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, analizez dacă valoarea taxelor este corect calculată și dacă bunurile au fost încadrate corect în nomenclatura vamală. Dacă neplata rezultă dintr-o interpretare greșită a codului tarifar sau dintr-o eroare a comisionarului vamal, răspunderea penală poate fi exclusă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40316320183" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 (31) 632 01 83
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card className="border-accent" aria-labelledby="stats-title">
          <CardHeader className="p-6">
            <h2 id="stats-title" className="text-xl font-medium">Infracțiuni Economice | Statistici în România</h2>
          </CardHeader>
          <CardContent className="space-y-6 [&_p]:text-base [&_li]:text-base">
            <section className="space-y-3">
              <h3 className="text-lg font-semibold">1. Date generale din statistica oficială</h3>
              <p>
                Conform România în cifre 2023, publicat de INS (Institutul Național de Statistică), infracțiunile economice fac parte dintre categoriile indicate în agregatul „infracțiuni care aduc atingere unor relații privind conviețuirea socială”.
                Această consolidare oferă context în raport cu alte grupe de infracțiuni, chiar dacă nu oferă cifre detaliate specifice infracțiunilor economice.
              </p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold">2. Activitatea DIICOT în materia infracțiunilor economico-financiare</h3>
              <p>Raportul de activitate DIICOT pe anul 2024 evidențiază o creștere a volumului cauzelor soluționate:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>2024 - 15.191 cauze soluționate (față de 14.719 în 2023)</li>
                <li>Totodată, separând tipologia cauzelor transfrontaliere, în 2024: 195 cauze privind infracțiuni economico-financiare și contrabandă, dintre care 115 active și 80 pasive.</li>
              </ul>
              <p>Acești indicatori reflectă eforturile în investigarea și soluționarea sistematică a infracțiunilor economice grave.</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold">3. Indicatori comparativi 2023</h3>
              <p>Raportul DIICOT pentru 2023 oferă elemente comparabile:</p>
              <p>165 cauze de infracțiuni economico-financiare și contrabandă (75 active și 90 pasive).</p>
              <p>Comparativ cu 2024, se observă o ușoară creștere a volumului cauzelor soluționate în 2024 versus 2023.</p>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold">Sinteză:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tendință ascendentă: atât în volumul soluțiilor, cât și al cauzelor economico-financiare în 2024 față de 2023.</li>
                <li>Legătură directă cu activitatea DIICOT, indicator esențial în evaluarea capacității instituționale de combatere.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h3 className="text-lg font-semibold">Surse oficiale:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>România în cifre 2023 - INS – referințe agregate infracțiuni economice</li>
                <li>Raport activitate DIICOT 2024 - total cauze soluționate (diicot.ro)</li>
                <li>Raport activitate DIICOT 2024 - cauze economico-financiare și contrabandă (media.dcnews.ro)</li>
                <li>Raport activitate DIICOT 2023 - cauze economico-financiare și contrabandă (ZIUA de Constanța)</li>
              </ul>
            </section>
          </CardContent>
        </Card>

        <EconomicCrimesChart />

      </div>
      </section>
    </>
  );
}
