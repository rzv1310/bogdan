import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from "@/components/ui/table";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import DrugPenaltiesChart from "@/components/charts/DrugPenaltiesChart";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
export default function CauzeDroguri() {
  const SITE = "https://avocatpenalbucuresti.ro";
  const pageUrl = `${SITE}/servicii/cauze-penale-privind-droguri`;
  const pageTitle = "Avocat Trafic Droguri București - Bogdan Lamatic";
  const pageDescription =
    "Apărare profesionistă în dosare DIICOT de trafic de droguri. Avocat Bogdan Lamatic, București - 18 ani experiență în drept penal.";

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Ce pedepse există pentru traficul de droguri în România?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "În funcție de tipul substanței, pedepsele sunt între 2 și 7 ani pentru droguri de risc și între 7 și 15 ani pentru droguri de mare risc, conform Legii nr. 143/2000.",
        },
      },
      {
        "@type": "Question",
        name: "Pot scăpa de închisoare dacă am asupra mea o cantitate mică?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Dacă se dovedește că este pentru consum propriu, instanța poate dispune pedepse mai mici sau măsuri alternative.",
        },
      },
      {
        "@type": "Question",
        name: "Ce trebuie să fac dacă DIICOT mă cheamă la audieri?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contactează imediat avocatul și nu oferi declarații fără consultanță juridică.",
        },
      },
      {
        "@type": "Question",
        name: "Care sunt cele mai comune droguri în dosarele DIICOT?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Canabis, ecstasy și amfetamine la droguri de risc, iar cocaina, heroina și LSD la droguri de mare risc.",
        },
      },
      {
        "@type": "Question",
        name: "Cât durează un proces de trafic de droguri?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Durata poate varia de la câteva luni la câțiva ani, în funcție de complexitatea probelor și de etapele procedurale.",
        },
      },
    ],
  };

  const legalServiceData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
    areaServed: "București, România",
    telephone: "+40 (31) 632 01 83",
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
    founder: {
      "@type": "Person",
      name: "Bogdan Lamatic",
    },
    sameAs: ["mailto:contact@avocatpenalbucuresti.ro"],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/servicii" },
      { "@type": "ListItem", position: 3, name: "Cauze penale privind droguri", item: pageUrl },
    ],
  };

  useSEO({
    keywords: "avocat trafic droguri bucuresti, avocat droguri bucuresti, trafic droguri DIICOT, droguri de mare risc",
    canonical: "/servicii/cauze-penale-privind-droguri",
    alternates: {
      ro: "/servicii/cauze-penale-privind-droguri",
      en: "/en/services/drug-offenses",
      xDefault: "/servicii/cauze-penale-privind-droguri",
    },
    locale: "ro_RO",
    title: pageTitle,
    description: pageDescription,
    schemas: [breadcrumbData, legalServiceData, faqData],
  });

  return (
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
            <BreadcrumbPage>Cauze penale privind droguri</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Avocat Trafic Droguri București - Experiența mea în apărarea clienților în dosare DIICOT
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>În dosarele de droguri, primele ore după reținere sunt decisive.</strong></span>
          <span className="block">Fiecare detaliu contează - o interceptare contestată, un mandat de percheziție emis incorect sau lipsa legăturii directe între client și substanțele incriminate pot schimba radical soarta unui proces.</span>
        </p>
      </div>

      <ServiceHeroCta lang="ro" ariaLabel="Sună acum - avocat cauze penale privind droguri" />

      <LawyerBioBlock path="/servicii/cauze-penale-privind-droguri" lang="ro" />
      </div>

      <ServiceSubServices path="/servicii/cauze-penale-privind-droguri" />

      {/* H2: Ce înseamnă traficul de droguri */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Ce înseamnă traficul de droguri în legislația românească</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            Potrivit Legii nr. 143/2000 (
            <a
              href="https://legislatie.just.ro/Public/DetaliiDocument/23629"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              text integral
            </a>
            ), traficul de droguri include producerea, fabricarea, transportul, vânzarea, distribuirea și deținerea de
            substanțe interzise în scopul comercializării.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Trafic de droguri</strong> - activitate organizată cu scop de distribuire.
            </li>
            <li>
              <strong>Deținere pentru consum propriu</strong> - faptă distinctă, cu pedepse mai reduse.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Chart: Pedepse privind infracțiunile legate de droguri */}
      <div className="mt-8">
        <DrugPenaltiesChart />
      </div>

      {/* H3: Droguri de mare risc */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Drogurile de mare risc</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            În dosarele pe care le-am gestionat ca avocat specializat în infracțiuni cu droguri, drogurile de mare risc
            au atras pedepse severe: 7-15 ani de închisoare. Cele mai frecvente substanțe sunt:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Heroină</strong> - foarte adictivă, frecvent asociată cu rețele internaționale.
            </li>
            <li>
              <strong>Cocaină</strong> - drog de lux, deseori descoperit în traficul prin aeroporturi sau porturi.
            </li>
            <li>
              <strong>LSD</strong> - halucinogen puternic, vândut sub formă de timbre impregnate.
            </li>
            <li>
              <strong>Metamfetamină</strong> - drog sintetic cu efecte devastatoare și risc ridicat de dependență.
            </li>
          </ul>
          <p>
            Cazurile implicând droguri de mare risc sunt tratate cu maximă severitate de instanțe și necesită o strategie juridică solidă și rapidă.
          </p>
          <p>În astfel de cazuri, fiecare detaliu procedural contează.</p>
          <p>Nu de puține ori am obținut rezultate favorabile prin contestarea probelor obținute ilegal.</p>
        </CardContent>
      </Card>

      {/* H3: Droguri de risc */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Drogurile de risc</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            Pentru drogurile de risc, legea prevede pedepse între 2 și 7 ani de închisoare. Cele mai des întâlnite sunt:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Canabis</strong> - cea mai răspândită substanță, sub formă de muguri uscați sau ulei.
            </li>
            <li>
              <strong>Ecstasy (MDMA)</strong> - pastile colorate, populare în cluburi și festivaluri.
            </li>
            <li>
              <strong>Amfetamine</strong> - stimulente sintetice, folosite atât recreațional, cât și pentru performanță.
            </li>
          </ul>
          <p>
            Chiar dacă pedepsele sunt mai mici, instanțele tratează aceste cazuri cu aceeași seriozitate, mai ales dacă
            există indicii de distribuire.
          </p>
        </CardContent>
      </Card>

      {/* H2: Pedepse și consecințe */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Pedepse și consecințe juridice</h2>
        </CardHeader>
        <CardContent className="space-y-3 text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>2-7 ani - droguri de risc.</li>
            <li>7-15 ani - droguri de mare risc.</li>
          </ul>
          <p>
            Factorii agravanti - implicarea minorilor, organizarea în grup sau tranzacțiile internaționale - cresc semnificativ pedeapsa.
          </p>
          <p>
            Consecințele se extind dincolo de închisoare: cazier, interdicții de călătorie, pierderea locului de muncă, afectarea reputației.
          </p>
        </CardContent>
      </Card>

      {/* H2: Cum îmi apăr clienții */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Cum îmi apăr clienții în dosarele de trafic de droguri</h2>
        </CardHeader>
        <CardContent className="space-y-3 text-base leading-relaxed">
          <p>În fiecare dosar de trafic de droguri pe care îl preiau în București:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Verific legalitatea probelor (mandate, interceptări, percheziții) - dacă au fost obținute prin mijloace
              autorizate.
            </li>
            <li>
              Analizez dosarul DIICOT în detaliu - de la procese-verbale până la rapoarte toxicologice.
            </li>
            <li>
              Identific puncte slabe în acuzare - lipsa legăturii directe între client și substanțele incriminate - și
              solicit probe suplimentare.
            </li>
            <li>Negociez cu procurorii DIICOT pentru încadrări juridice mai favorabile.</li>
            <li>Asigur apărarea la toate instanțele, inclusiv la Înalta Curte.</li>
          </ul>
          <div className="pt-4">
            <a href="tel:+40316320183" aria-label="Sună acum">
              <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                <Phone /> Sună acum
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Legea 143/2000 - Tabel articole */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Legea nr. 143/2000 privind prevenirea și combaterea traficului și consumului ilicit de droguri</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeaderUI>
                <TableRow>
                  <TableHead className="w-1/3">Articol</TableHead>
                  <TableHead>Comentariul meu</TableHead>
                </TableRow>
              </TableHeaderUI>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 2 -</strong></p>
                      <p>Cultivarea, producerea, fabricarea, experimentarea, extragerea, prepararea, transformarea, oferirea, punerea în vânzare, vânzarea, distribuirea, livrarea cu orice titlu, trimiterea, transportul, procurarea, cumpărarea, deținerea ori alte operațiuni privind circulația drogurilor de risc, fără drept, se pedepsesc cu închisoare de la 3 la 15 ani și interzicerea unor drepturi. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 5 la 15 ani și interzicerea unor drepturi.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Acest articol este fundamentul majorității dosarelor de trafic de droguri. Diferența crucială între droguri de risc și de mare risc determină pedeapsa aplicată. În apărare, contest încadrarea substanței prin expertize independente, verific legalitatea probelor (mandate, percheziții, interceptări) și demonstrez lipsa intenției de comercializare pentru a reîncadra fapta la consum propriu. Fiecare verb de acțiune din articol trebuie probat distinct de acuzare.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 3 -</strong></p>
                      <p>Introducerea sau scoaterea din țară, precum și importul ori exportul de droguri de risc, fără drept, se pedepsesc cu închisoare de la 5 la 15 ani și interzicerea unor drepturi. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 10 la 20 de ani și interzicerea unor drepturi.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Reglementează traficul transfrontalier de droguri, cu pedepse foarte severe - până la 20 de ani pentru droguri de mare risc. În apărare, verific legalitatea controalelor vamale, contestez mandatele de percheziție, analizez dacă au existat provocări ale organelor de anchetă și demonstrez lipsa intenției de distribuire. Multe dosare se bazează pe interceptări sau colaboratori, care pot fi contestate procedural.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 4 -</strong></p>
                      <p>Cultivarea, producerea, fabricarea, experimentarea, extragerea, prepararea, transformarea, cumpărarea sau deținerea de droguri de risc pentru consum propriu, fără drept, se pedepsește cu închisoare de la 3 luni la 2 ani sau cu amendă. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 6 luni la 3 ani.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Articolul esențial care face diferența între consum și trafic. Reîncadrarea de la art. 2 la art. 4 poate reduce pedeapsa de la 15 ani la maximum 3 ani. În apărare, demonstrez că substanțele erau destinate exclusiv consumului propriu prin analiza cantităților, lipsa echipamentelor de împachetare/cântărire, absența comunicărilor cu potențiali cumpărători și probe despre dependența clientului.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 5 Punerea la dispoziție, cu știință, cu orice titlu, a unei locuințe sau a unui local ori a oricărui alt loc amenajat, în care are acces publicul, pentru consum ilicit de droguri sau tolerarea consumului ilicit, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea unor drepturi.
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Incriminează furnizarea de spații pentru consum. Am văzut dosare unde proprietarii de apartamente sau locuri publice au fost acuzați doar pentru că știau de consumul de droguri. În apărare, demonstrez lipsa intenției de a facilita consumul, imposibilitatea controlului total asupra spațiului sau necunoașterea activităților ilicite. Simpla tolerare pasivă nu constituie infracțiune.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 6 -</strong></p>
                      <p>Prescrierea drogurilor de mare risc, cu intenție, de către medic, fără necesitate medicală, se pedepsește cu închisoare de la 1 la 5 ani și interzicerea unor drepturi. Cu aceeași pedeapsă se sancționează eliberarea cu intenție pe baza unei rețete prescrise ilegal sau falsificate. Obținerea prin astfel de rețete se pedepsește cu închisoare de la 1 la 3 ani.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Vizează circuitul medical fraudulos - medici care prescriu ilegal și pacienți care obțin substanțe prin rețete false. În apărare pentru medici, demonstrez existența unei necesități medicale reale și buna-credință. Pentru pacienți, combat știința despre caracterul fals al rețetei și demonstrez necesitatea medicală autentică. Documentația medicală detaliată este crucială în astfel de cazuri.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 7 -</strong></p>
                      <p>Administrarea de droguri de mare risc unei persoane, în afara condițiilor legale, se pedepsește cu închisoare de la 1 la 5 ani.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Infracțiunea de administrare directă de droguri altei persoane. În apărare, contest probele privind administrarea efectivă - de multe ori acuzarea se bazează pe declarații contradictorii ale martorilor. Demonstrez că persoana și-a autoadministrat substanța, că clientul nu cunoștea natura exactă a substanței sau că administrarea a avut loc în context medical justificat.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 8 -</strong></p>
                      <p>Furnizarea, în vederea consumului, de inhalanți chimici toxici unui minor se pedepsește cu închisoare de la 6 luni la 2 ani.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Protejează minorii de substanțele toxice (spray-uri, solventi etc.), nu doar drogurile clasice. În apărare, demonstrez că substanțele nu erau destinate consumului ca stupefiante, că vânzarea avea alt scop legitim (uz casnic, profesional) sau că vânzătorul nu știa că sunt destinate inhalării de către minori. Verificarea vârstei cumpărătorului poate fi un argument în apărare.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 9 Finanțarea faptelor prevăzute la art. 2-5 se sancționează cu pedepsele prevăzute de lege, limitele acestora majorându-se cu o treime.
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Se aplică și susținătorilor indirecți. În apărare, probele financiare sunt vitale pentru a demonstra lipsa legăturii cu traficul.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 10 Îndemnul la consum ilicit de droguri de mare risc, prin orice mijloace, se pedepsește cu închisoare de la 6 luni la 3 ani.
                  </TableCell>
                  <TableCell>
                    Chiar și simpla instigare fără consum efectiv este incriminată. Contest interpretarea afirmațiilor ca „îndemn” penal.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 11 Dacă faptele prevăzute la art. 2, 6-8 și 10 au avut ca urmare moartea victimei, pedeapsa este închisoare de la 15 la 25 de ani și interzicerea unor drepturi.
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Este cea mai gravă situație. Apărarea vizează lipsa legăturii cauzale directe între faptă și deces.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 12 Tentativa la infracțiunile prevăzute la art. 2, 3, art. 4 alin. (2), art. 6 alin. (2)-(3), art. 7 și 9 se pedepsește. Se consideră tentativă și producerea sau procurarea mijloacelor ori luarea de măsuri pentru comitere.
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Legea pedepsește chiar și pregătirea. Apărarea se bazează pe lipsa intenției directe și neproducerea unui rezultat.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 13. -</strong></p>
                      <p>(1) Cu privire la infracţiunile cuprinse în prezentul capitol, pe lângă situaţiile prevăzute în Codul penal, constituie circumstanţe agravante următoarele situaţii:</p>
                      <p>a) persoana care a comis infracţiunea îndeplinea o funcţie ce implică exerciţiul autorităţii publice, iar fapta a fost comisă în exercitarea acestei funcţii;</p>
                      <p>b) fapta a fost comisă de un cadru medical sau de o persoană care are, potrivit legii, atribuţii în lupta împotriva drogurilor;</p>
                      <p>c) drogurile au fost trimise sau livrate, distribuite sau oferite unui minor, unui bolnav psihic, unei persoane aflate într-un program terapeutic ori s-au efectuat alte asemenea activităţi interzise de lege cu privire la una dintre aceste persoane ori dacă fapta a fost comisă într-o instituţie sau unitate medicală, de învăţământ, militară, loc de detenţie, centre de asistenţă socială, de reeducare sau instituţie medical-educativă, locuri în care elevii, studenţii şi tinerii desfăşoară activităţi educative, sportive, sociale ori în apropierea acestora;</p>
                      <p>d) folosirea minorilor în săvârşirea faptelor prevăzute la art. 2-10;</p>
                      <p>e) drogurile au fost amestecate cu alte substanţe care le-au mărit pericolul pentru viaţa şi integritatea persoanelor.</p>
                      <p>(2) În cazul circumstanţei agravante prevăzute la alin. (1) lit. c), referitoare la săvârşirea faptelor într-o instituţie de învăţământ ori în locuri în care elevii, studenţii şi tinerii desfăşoară activităţi educative, sportive, sociale sau în apropierea acestora, la maximul special prevăzut de lege se poate adăuga un spor care nu poate depăşi 5 ani, în cazul închisorii, sau maximul general, în cazul amenzii.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Circumstanțele agravante majorează semnificativ pedeapsa și pot dubla termenul de închisoare. În apărare, combat aplicarea acestor circumstanțe prin demonstrarea că: funcția nu a fost exercitată în comiterea faptei, clientul nu știa că beneficiarii erau minori/bolnavi psihic, locația nu se încadrează în zonele protejate enumerate de lege, sau că substanțele nu au fost amestecate intenționat pentru creșterea pericolului.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 14. -</strong></p>
                      <p>Nu se pedepseşte persoana care a comis una dintre infracţiunile prevăzute la art. 2-9 şi care, mai înainte de a fi începută urmărirea penală, denunţă autorităţilor participarea sa la comiterea infracţiunii, contribuind astfel la identificarea şi tragerea la răspundere penală a autorului sau a celorlalţi participanţi.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Autodenunțul este o cauză de neimputabilitate care poate salva clientul de pedepsă dacă este aplicat corect. Strategia presupune timing perfect - trebuie făcut înainte de începerea urmăririi penale și să contribuie real la identificarea altor participanți. Această opțiune trebuie analizată cu atenție pentru că poate compromite și alte persoane din anturajul clientului.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 15. -</strong></p>
                      <p>Persoana care a comis una dintre infracţiunile prevăzute la art. 2-9, iar în timpul urmăririi penale denunţă şi facilitează identificarea şi tragerea la răspundere penală a altor persoane care au săvârşit infracţiuni legate de droguri beneficiază de reducerea la jumătate a limitelor pedepsei prevăzute de lege.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Colaborarea cu autoritățile în timpul urmăririi penale poate înjumătăți pedeapsa. Această opțiune trebuie evaluată strategic - clientul trebuie să ofere informații substanțiale care să ducă la identificarea și condamnarea altor persoane. Beneficiul este mai mic decât la autodenunț, dar rămâne o alternativă viabilă când autodenunțul nu mai este posibil.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 15¹. -</strong></p>
                      <p>Nu se poate dispune suspendarea executării pedepsei sub supraveghere în cazul infracţiunilor prevăzute la art. 2 alin. (2) şi art. 3 alin. (2).</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Pentru infracțiunile grave cu droguri de mare risc (art. 2 alin. 2 și art. 3 alin. 2), legea interzice suspendarea cu supraveghere. Aceasta înseamnă că pedepsele se execută efectiv în închisoare. În astfel de cazuri, apărarea se concentrează pe reîncadrarea la infracțiuni mai puțin grave care permit suspendarea sau pe obținerea circumstanțelor atenuante.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 16. -</strong></p>
                      <p>(1) Drogurile şi alte bunuri care au făcut obiectul infracţiunilor prevăzute la art. 2-9 se confiscă, iar dacă acestea nu se găsesc, condamnatul este obligat la plata echivalentului lor în bani.</p>
                      <p>(2) Se confiscă, de asemenea, banii, valorile sau orice alte bunuri dobândite prin valorificarea drogurilor şi a altor bunuri prevăzute la alin. (1).</p>
                      <p>(3) Sumele rezultate din valorificarea bunurilor confiscate şi banii confiscaţi, conform alin. (1) şi (2), constituie venituri ale bugetului de stat şi se evidenţiază în cont separat în bugetul de stat.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Confiscarea este obligatorie și poate afecta grav patrimoniul clientului. În apărare, combat confiscarea prin demonstrarea că bunurile au proveniență legală, că nu există legătură directă cu infracțiunea sau că valorile au fost dobândite anterior și independent de activitatea infracțională. Plata echivalentului în bani poate ruina financiar o familie, de aceea este esențial să contest această măsură.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 17. -</strong></p>
                      <p>(1) Drogurile ridicate în vederea confiscării se distrug potrivit art. 574 lit. d) din Codul de procedură penală. Păstrarea de contraprobe este obligatorie.</p>
                      <p>(2) Sunt exceptate de la distrugere:</p>
                      <p>a) medicamentele utilizabile, care au fost remise farmaciilor sau unităţilor spitaliceşti, după avizul prealabil al Direcţiei farmaceutice şi dispozitive medicale din cadrul Ministerului Sănătăţii;</p>
                      <p>b) plantele şi substanţele utilizabile în industria farmaceutică sau în altă industrie, în funcţie de natura acestora, care au fost remise unui operator economic public sau privat, autorizat să le utilizeze ori să le exporte;</p>
                      <p>c) unele cantităţi corespunzătoare, care vor fi păstrate în scop didactic şi de cercetare ştiinţifică sau au fost remise instituţiilor care deţin câini şi alte animale de depistare a drogurilor, pentru pregătirea şi menţinerea antrenamentului acestora, cu respectarea dispoziţiilor legale.</p>
                      <p>(3) Distrugerea drogurilor se efectuează periodic, prin incinerare sau prin alte mijloace adecvate, de către o societate reglementată de Legea nr. 31/1990, republicată, cu modificările şi completările ulterioare, autorizată, în prezenţa unei comisii formate din judecătorul delegat cu executarea, câte un reprezentant al Agenţiei Naţionale Antidrog, al Ministerului Mediului şi Schimbărilor Climatice, un specialist din cadrul formaţiunii centrale specializate în prevenirea şi combaterea traficului şi consumului ilicit de droguri din Inspectoratul General al Poliţiei Române şi gestionarul camerei de corpuri delicte a aceleiaşi unităţi. În cazul în care distrugerea nu are loc în circumscripţia instanţei de executare, din comisie face parte judecătorul delegat cu executarea de la instanţa corespunzătoare în grad în circumscripţia căreia are loc distrugerea. Un exemplar al procesului-verbal se trimite instanţei de executare.</p>
                      <p>(4) Bunurile şi mijloacele folosite la fabricarea ilicită a drogurilor pot fi folosite în scop didactic, prin punerea lor la dispoziţia unităţilor de pregătire a organelor de aplicare a legii sau prin folosirea lor în campanii de conştientizare a riscurilor asociate consumului de droguri.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Procedura de distrugere a drogurilor trebuie respectată riguros pentru a evita contestații procedurale. În apărare, verific dacă au fost păstrate contraprobe suficiente pentru expertize suplimentare, dacă comisia de distrugere a fost constituită legal și dacă procesul-verbal respectă cerințele legale. Orice neregulă procedurală poate vicia probele și afecta acuzarea.</p>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="space-y-2">
                      <p><strong>Art. 18. -</strong></p>
                      <p>În cazul în care un consumator este condamnat la pedeapsa închisorii pentru săvârşirea unei alte infracţiuni decât cele prevăzute la art. 4, instanţa poate dispune includerea acestuia într-un program terapeutic derulat în sistemul penitenciar.</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="rounded-md bg-accent text-accent-foreground p-4">
                      <p><strong>Comentariul meu:</strong> Programele terapeutice în sistemul penitenciar pot oferi o alternativă mai bună decât închisoarea clasică pentru consumatori. În apărare, solicit aplicarea acestei măsuri pentru clienții cu probleme de dependență, demonstrând că reabilitarea este mai eficientă decât pedepsirea pură. Aceasta poate influența pozitiv și durata efectivă a detenției.</p>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="pt-4">
        <a href="tel:+40316320183" aria-label="Sună acum">
          <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
            <Phone /> Sună acum
          </Button>
        </a>
      </div>

      {/* H2: Statistici România */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Statistici recente privind traficul de droguri în România</h2>
        </CardHeader>
        <CardContent className="space-y-2 text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>În 2024 au fost instrumentate peste 4.200 de dosare de trafic de droguri.</li>
            <li>Peste 60% au implicat canabis, urmat de cocaină și heroină.</li>
            <li>Cele mai multe cazuri s-au înregistrat în București și județele de frontieră.</li>
            <li>Drogurile sintetice, precum metamfetamina, au înregistrat o creștere alarmantă.</li>
          </ul>
        </CardContent>
      </Card>

      {/* H2: Statistici Europa */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Statistici recente privind traficul de droguri în Europa</h2>
        </CardHeader>
        <CardContent className="space-y-2 text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-1">
            <li>În 2023 au fost confiscate peste 300 tone de cocaină în UE.</li>
            <li>Spania, Belgia și Olanda sunt principalele puncte de intrare pe piața europeană.</li>
            <li>Piața de amfetamine și metamfetamină este în creștere în Europa Centrală și de Est.</li>
            <li>Traficul prin darknet complică semnificativ anchetele.</li>
          </ul>
        </CardContent>
      </Card>

      {/* H2: Întrebări frecvente */}
      <ServiceFaq
        title="Întrebări frecvente din experiența mea"
        items={[
          {
            q: "Pot scăpa de închisoare dacă am o cantitate mică?",
            a: "Dacă se dovedește că este pentru consum propriu, pedeapsa poate fi redusă sau înlocuită cu măsuri alternative.",
          },
          {
            q: "Ce fac dacă DIICOT mă cheamă la audieri?",
            a: "Mă contactezi imediat și nu dai declarații fără consultanță juridică.",
          },
          {
            q: "Se poate schimba încadrarea din trafic în deținere?",
            a: "Da, dacă lipsesc probele privind intenția de comercializare.",
          },
        ]}
      />

      {/* H2: Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Contact direct</h2>
        </CardHeader>
        <CardContent className="space-y-2 text-base leading-relaxed">
          <p>
            Dacă ești anchetat sau inculpat într-un dosar de trafic de droguri în București sau oriunde în România, nu amâna momentul de a solicita ajutor profesionist.
          </p>
          <p>
            Experiența mea în dosare penale complexe îți poate oferi șansa unei apărări eficiente și strategice.
          </p>
          <p>📍 Adresă: Str. Ștefan Stoika nr. 22, bl. 17B, sc. 1, et. 1, ap. 5, Sector 1, București</p>
          <p>📞 Telefon: +40 (31) 632 01 83</p>
          <p>📧 E-mail: contact@avocatpenalbucuresti.ro</p>
        </CardContent>
      </Card>
      <RelatedServices current="/servicii/cauze-penale-privind-droguri" />

    </section>
  );
}
