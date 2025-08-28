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
    title: "Criminalitate economică | Servicii avocat penal",
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
                    "item": "https://avocatbogdanlamatic.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": "https://avocatbogdanlamatic.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Criminalitate economică",
                    "item": "https://avocatbogdanlamatic.ro/services/criminalitate-economica"
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
                "url": "https://avocatbogdanlamatic.ro/services/criminalitate-economica",
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
                "provider": {
                  "@type": "Attorney",
                  "name": "Bogdan Lamatic",
                  "telephone": "+40745506443"
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
            <BreadcrumbLink href="/" title="/">Acasă</BreadcrumbLink>
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
          <a href="tel:+40745506443" title="/telefon" aria-label="Sună acum">
            <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone /> Sună acum
            </Button>
          </a>
        </div>
        <div className="mt-3 space-y-3 text-base leading-relaxed">
          <p>
            Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 17 ani de experiență în drept penal și specializare recunoscută în white-collar crime - infracțiuni economice comise în mediul profesional sau corporativ. Am reprezentat clienți în dosare complexe de evaziune fiscală, spălare de bani, fraudă, delapidare, corupție și abuz de încredere, atât în fața parchetelor specializate, cât și în instanțele de toate gradele, inclusiv Înalta Curte de Casație și Justiție.
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
                  <a href="tel:+40745506443" title="/telefon" aria-label="Sună acum">
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
                În dosarele de infracțiuni economice, procedurile penale sunt deosebit de complexe și necesită nu doar cunoștințe juridice avansate, ci și o înțelegere profundă a mecanismelor financiare, fiscale și contabile. <br />În cei peste 17 ani de practică, am constatat că succesul într-un astfel de dosar depinde de capacitatea avocatului de a corela legislația penală cu aspectele tehnice ale tranzacțiilor și fluxurilor financiare.
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
              <a href="tel:+40745506443" title="/telefon" aria-label="Vreau avocat!">
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
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
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
                      <p>Reținerea și neplata, în cel mult 30 de zile de la termenul de scadență prevăzut de lege, a sumelor reprezentând impozite sau contribuții cu reținere la sursă se pedepsește cu închisoare de la 1 la 5 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, mă concentrez pe demonstrarea lipsei intenției directe de a sustrage sumele de la plată. Situațiile financiare dificile, blocajul temporar de lichidități sau credința rezonabilă că plata urma să fie efectuată pot fi argumente solide. De asemenea, achitarea sumelor restante înainte de pronunțarea unei hotărâri definitive poate duce la reducerea sau chiar înlăturarea răspunderii penale, potrivit practicii instanțelor.</p>
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
                      <p>Reținerea de către contribuabil a sumelor reprezentând impozite, taxe sau contribuții și utilizarea acestora în alte scopuri decât cele prevăzute de lege se pedepsește cu închisoare de la 1 la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia mea este să demonstrez că folosirea sumelor a fost determinată de circumstanțe excepționale și nu a avut scop fraudulos. Dacă se poate arăta că utilizarea fondurilor a fost temporară și destinată menținerii activității economice (ex.: plata salariilor pentru a evita falimentul), instanța poate considera fapta fără pericol social concret sau poate dispune o soluție mai blândă.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-6">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 6 – Evidențierea în actele contabile a unor cheltuieli fictive</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Evidențierea, în actele contabile, a unor operațiuni fictive ori nereale, având drept consecință reducerea bazei impozabile, se pedepsește cu închisoare de la 2 la 8 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac elementul „fictiv” – este esențial să demonstrez că operațiunile reflectă tranzacții reale, chiar dacă ulterior acestea au fost contestate fiscal. Lipsa probelor clare din partea acuzării și existența unor documente justificative, chiar imperfecte, pot înclina balanța în favoarea clientului. În plus, dacă diferențele provin din interpretări fiscale diferite, pot invoca lipsa vinovăției penale.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-8">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 8 – Sustragerea de la efectuarea verificărilor fiscale</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Refuzul de a prezenta documentele de evidență contabilă sau de a permite accesul organelor fiscale în sediile contribuabilului, în scopul împiedicării verificărilor, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, mă concentrez pe demonstrarea faptului că refuzul nu a avut un scop fraudulos, ci a fost cauzat de lipsa disponibilității documentelor la momentul controlului, neînțelegeri privind competența organelor de control sau probleme administrative. Dacă există corespondență cu autoritățile prin care se solicită amânarea verificării, acest lucru poate arăta buna-credință a clientului.</p>
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
                      <p>(1) Constituie infracțiune de evaziune fiscală și se pedepsește cu închisoare de la 2 la 8 ani și interzicerea unor drepturi orice persoană care:</p>
                      <p>a) ascunde bunul impozabil sau sursa impozabilă;</p>
                      <p>b) omite, în tot sau în parte, evidențierea în actele contabile sau în alte documente legale a operațiunilor comerciale efectuate sau a veniturilor realizate;</p>
                      <p>c) evidențiază în actele contabile operațiuni nereale;</p>
                      <p>d) alterează, distruge sau ascunde documente contabile;</p>
                      <p>e) organizează contabilitate dublă;</p>
                      <p>f) sustrage de la controlul fiscal documentele contabile;</p>
                      <p>g) se sustrage de la plata obligațiilor fiscale prin alte mijloace ilicite.</p>
                      <p>(2) Dacă prin faptele prevăzute la alin. (1) s-a produs un prejudiciu mai mare de 500.000 lei, limitele de pedeapsă se majorează cu 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărarea clientului, analiza se concentrează pe contestarea prejudiciului și a legăturii cauzale dintre fapta imputată și pierderea fiscală. Dacă tranzacțiile au o justificare economică reală sau dacă există documente care, chiar cu erori, reflectă activitatea desfășurată, elementul intențional poate fi înlăturat. Plata integrală a prejudiciului, conform modificărilor legislative, poate conduce la reducerea pedepsei sau chiar la renunțarea la urmărirea penală.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-10">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10 – Tentativa</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracțiunile prevăzute la art. 3–9 se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, mă concentrez pe ideea că acțiunile clientului nu au depășit faza actelor pregătitoare, care, în lipsa unor dispoziții exprese, nu ar fi sancționabile. Dacă prejudiciul nu s-a produs și nu există certitudine că fapta ar fi fost dusă la capăt, se poate invoca lipsa pericolului social concret.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-10-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10¹ – Cauza de nepedepsire</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>În cazul infracțiunilor prevăzute la art. 8 și art. 9, dacă, în cursul urmăririi penale sau al judecății, până la pronunțarea unei hotărâri definitive, inculpatul acoperă integral prejudiciul produs, majorat cu dobânzi și penalități, se aplică pedeapsa amenzii.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aceasta este una dintre cele mai puternice strategii de apărare: obținerea unui raport de evaluare clar al prejudiciului și achitarea integrală a sumei înainte de sentința definitivă. În multe cazuri, această plată poate transforma o pedeapsă cu închisoarea într-o amendă, permițând clientului să evite privarea de libertate.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-11">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 11 – Reducerea pedepsei</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Dacă, înainte de sesizarea organului de urmărire penală, prejudiciul cauzat este acoperit integral, limitele pedepsei se reduc la jumătate.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, acest articol reprezintă un argument decisiv pentru negocierea unei soluții amiabile cu partea vătămată. Demonstrarea bunei-credințe prin plata rapidă a sumei nu doar reduce pedeapsa, ci poate influența și percepția instanței asupra pericolului social al faptei.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-12">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 12 – Excluderea răspunderii penale în cazuri minore</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Nu constituie infracțiune faptele prevăzute la art. 3–9 dacă prejudiciul cauzat este mai mic de 50.000 lei și a fost acoperit integral până la primul termen de judecată.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Ca avocat, primul pas este să solicit o expertiză contabilă independentă pentru a verifica dacă prejudiciul real este sub pragul de 50.000 lei. Dacă acest lucru se confirmă și suma este achitată integral înainte de primul termen, răspunderea penală este exclusă, ceea ce conduce la închiderea dosarului.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l241-art-13">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13 – Circumstanțe atenuante</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Instanța poate reține circumstanțe atenuante dacă inculpatul colaborează cu autoritățile, recunoaște fapta și contribuie la recuperarea prejudiciului.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, pot construi strategia pe colaborarea clientului cu organele fiscale și pe furnizarea de documente suplimentare care să ajute la clarificarea situației. Colaborarea activă, combinată cu recunoașterea parțială sau totală a faptelor, poate conduce la pedepse reduse semnificativ, inclusiv la suspendarea executării acestora.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Infracțiuni Economice – Legea nr. 656/2002 pentru prevenirea și sancționarea spălării banilor</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <Accordion type="single" collapsible className="w-full [&_p]:text-base [&_li]:text-base">
              <AccordionItem value="l656-art-29">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 29 – Infracțiunea de spălare a banilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Constituie infracțiune de spălare a banilor și se pedepsește cu închisoare de la 3 la 10 ani:</p>
                      <p>a) schimbarea sau transferul de bunuri, cunoscând că acestea provin din săvârșirea de infracțiuni, în scopul ascunderii sau disimulării originii ilicite ori pentru a ajuta persoana care a săvârșit infracțiunea-sursă să se sustragă de la urmărire, judecată sau executarea pedepsei;</p>
                      <p>b) ascunderea ori disimularea naturii reale, a provenienței, situării, circulației sau proprietății bunurilor, cunoscând că acestea provin din infracțiuni;</p>
                      <p>c) dobândirea, deținerea sau folosirea de bunuri, cunoscând că acestea provin din infracțiuni.</p>
                      <p>(2) Cunoașterea provenienței ilicite a bunurilor se poate deduce din circumstanțele obiective ale cauzei.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se axează pe lipsa elementului subiectiv – cunoașterea provenienței ilicite trebuie demonstrată, iar simpla prezumție nu este suficientă. Dacă tranzacția a avut o justificare economică rezonabilă și documente suport, se poate susține buna-credință. De asemenea, dacă infracțiunea-sursă nu este dovedită, acuzația de spălare a banilor se prăbușește automat.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l656-art-30">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 30 – Tentativa</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Tentativa la infracțiunea prevăzută la art. 29 se pedepsește.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi argumenta că acțiunile imputate clientului nu au depășit faza actelor pregătitoare și că nu există probe clare privind scopul de disimulare a provenienței bunurilor. Dacă transferul nu s-a realizat sau nu a avut efectul urmărit, tentativa poate fi exclusă ca faptă lipsită de pericol social concret.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l656-art-31">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 31 – Neaplicarea sancțiunilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Nu se aplică sancțiunile prevăzute la art. 29 persoanei care, înainte ca organul de urmărire penală să fi fost sesizat, a informat autoritățile despre faptele comise și a cooperat pentru identificarea și tragerea la răspundere a celorlalți participanți.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Aceasta este o oportunitate importantă pentru client – dacă putem demonstra că a furnizat informații voluntar și înainte de declanșarea oficială a anchetei, atunci răspunderea penală poate fi eliminată. Voi analiza momentul exact al sesizării și voi aduna dovezi că autoritățile au aflat de la client sau cu ajutorul lui.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l656-art-32">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 32 – Confiscarea bunurilor</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Bunurile care au făcut obiectul infracțiunii de spălare a banilor se confiscă, iar dacă acestea nu se mai găsesc, se confiscă echivalentul lor în bani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Chiar și în caz de condamnare, mă voi concentra pe demonstrarea faptului că bunurile respective nu au proveniență ilicită sau că nu există legătură directă cu fapta imputată. În plus, voi verifica dacă bunurile au fost dobândite de la terți de bună-credință, caz în care confiscarea nu se poate dispune.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
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
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
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
                  <h3 className="text-lg font-semibold">Articolul 10 – Folosirea influenței</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta persoanei care, având influență sau lăsând să se creadă că are influență asupra unui funcționar, pretinde ori primește bani sau alte foloase pentru a determina funcționarul să îndeplinească ori să nu îndeplinească un act ce intră în atribuțiile sale, se pedepsește cu închisoare de la 2 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia de apărare este să demonstrez că influența reală nu a existat sau că promisiunea nu a avut scopul de a influența un act oficial. Dacă beneficiul primit a fost pentru alt tip de serviciu (consultantă, intermediere legală), încadrarea juridică poate fi schimbată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-10-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 10¹ – Cumpărarea de influență</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Promisiunea, oferirea sau darea de bani ori alte foloase unei persoane care are influență sau lasă să se creadă că are influență asupra unui funcționar, pentru a-l determina pe acesta să îndeplinească sau să nu îndeplinească un act ce intră în atribuțiile sale, se pedepsește cu închisoare de la 2 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, invoc lipsa intenției de corupere și arăt că plățile au fost făcute în alt scop, fără legătură cu atribuțiile funcționarului. De asemenea, dacă persoana care pretindea influența nu avea, în realitate, capacitatea de a influența funcționarul, elementele constitutive nu sunt îndeplinite.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-12">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 12 – Infracțiuni în legătură cu fondurile europene</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4 space-y-2">
                      <p>(1) Folosirea sau prezentarea de documente ori declarații false, inexacte sau incomplete, care are ca rezultat obținerea pe nedrept de fonduri din bugetul general al Uniunii Europene, se pedepsește cu închisoare de la 2 la 7 ani.</p>
                      <p>(2) Nedeclararea informațiilor cerute de lege pentru obținerea acestor fonduri se pedepsește cu aceeași pedeapsă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se concentrează pe demonstrarea lipsei legăturii directe între documentele contestate și acordarea efectivă a fondurilor. Dacă informațiile erau deja cunoscute autorităților sau erorile sunt minore și nu au influențat decizia de finanțare, elementul material lipsește.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-13">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13 – Deturnarea fondurilor europene</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Folosirea fondurilor din bugetul general al Uniunii Europene în alt scop decât cel pentru care au fost acordate se pedepsește cu închisoare de la 1 la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, voi arăta că modificarea destinației fondurilor a fost făcută cu respectarea procedurilor interne ale proiectului sau cu informarea autorității finanțatoare. Dacă există o interpretare rezonabilă a contractului de finanțare, fapta poate fi considerată nepenală.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-13-1">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 13¹ – Abuzul în serviciu în legătură cu obținerea de foloase</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, îndeplinește un act prin care s-a obținut un folos necuvenit pentru sine ori pentru altul, se pedepsește cu închisoare de la 1 la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, atac noțiunea de „folos necuvenit” – dacă avantajul obținut are o justificare legală (contract, plată datorată, acord aprobat), acesta nu intră în sfera infracțiunii. De asemenea, verific dacă actul contestat a fost efectiv în atribuțiile funcționarului sau dacă era o decizie colectivă, ceea ce poate dilua răspunderea individuală.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-14">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 14 – Conflictul de interese</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, a îndeplinit un act prin care s-a obținut un folos pentru sine, soț, rude sau afini până la gradul al II-lea inclusiv, se pedepsește cu închisoare de la 1 la 5 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Apărarea se axează pe demonstrarea lipsei legăturii dintre act și avantajul obținut, precum și pe argumentul că beneficiul nu este unul „necuvenit”. De asemenea, dacă funcționarul a acționat la recomandarea sau cu aprobarea superiorilor, răspunderea personală poate fi diminuată.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-15">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 15 – Traficul de influență</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Fapta persoanei care pretinde, primește ori acceptă promisiunea de bani sau alte foloase, lăsând să se creadă că are influență asupra unui funcționar public și că îl va determina pe acesta să îndeplinească sau să nu îndeplinească un act, se pedepsește cu închisoare de la 2 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, pot arăta că discuțiile au fost lipsite de caracter concret și nu au produs niciun efect juridic. Dacă beneficiul a fost obținut pentru alte activități legitime (consultantă, intermediere comercială), atunci nu se poate reține infracțiunea de trafic de influență.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-16">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 16 – Cumpărarea de influență</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Promisiunea, oferirea sau darea de bani ori alte foloase unei persoane despre care se afirmă că are influență asupra unui funcționar, pentru a-l determina să îndeplinească sau să nu îndeplinească un act, se pedepsește cu închisoare de la 2 la 10 ani.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Strategia mea este să demonstrez că nu a existat scopul de a influența un funcționar public sau că suma a fost oferită pentru alt serviciu licit. Dacă pretinsa influență era inexistentă sau imposibilă, fapta nu se poate reține.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="l78-art-17">
                <AccordionTrigger className="text-left">
                  <h3 className="text-lg font-semibold">Articolul 17 – Denunțarea</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <div className="rounded-md border border-accent bg-background p-4">
                      <p>Persoana care a săvârșit una dintre faptele prevăzute la art. 9–16 și care, înainte ca organul de urmărire penală să fi fost sesizat, denunță fapta și facilitează tragerea la răspundere penală a celorlalți participanți, beneficiază de reducerea la jumătate a limitelor de pedeapsă.</p>
                    </div>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> În apărare, pot negocia cu clientul folosirea acestei dispoziții ca strategie, în special în dosarele cu mai mulți participanți. Momentul denunțului este crucial – acesta trebuie făcut înainte ca organele să fie sesizate oficial, altfel nu se aplică reducerea.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex justify-center">
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
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
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <Phone /> +40 745 506 443
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
