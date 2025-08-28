import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader as TableHeaderUI, TableRow } from "@/components/ui/table";
import { Phone } from "lucide-react";
import DrugPenaltiesChart from "@/components/charts/DrugPenaltiesChart";

export default function CauzeDroguri() {
  useSEO({
    title: "Avocat Trafic Droguri București - Bogdan Lamatic",
    description:
      "Apărare profesionistă în dosare DIICOT de trafic de droguri. Avocat Bogdan Lamatic, București - 17 ani experiență în drept penal.",
  });

  useEffect(() => {
    const origin = window.location.origin;
    const url = origin + window.location.pathname;
    const imageUrl = origin + "/lovable-uploads/5a0690ed-7910-4259-948b-3d42e2fe9151.png";
    const title = "Avocat Trafic Droguri București - Bogdan Lamatic";
    const description =
      "Apărare profesionistă în dosare DIICOT de trafic de droguri. Avocat Bogdan Lamatic, București - 17 ani experiență în drept penal.";

    // FAQ JSON-LD
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
            text:
              "Contactează imediat avocatul și nu oferi declarații fără consultanță juridică.",
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
    } as const;

    // LegalService JSON-LD
    const legalServiceData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: title,
      description,
      url,
      areaServed: "București, România",
      telephone: "+40 745 506 443",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Str. Ștefan Stoika nr. 22, bl. 17B, sc. 1, et. 1, ap. 5",
        addressLocality: "București",
        addressCountry: "RO",
      },
      founder: {
        "@type": "Person",
        name: "Bogdan Lamatic",
      },
      sameAs: ["mailto:bogdan.lamatic@yahoo.com"],
    } as const;

    // BreadcrumbList JSON-LD
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: origin + "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Cauze penale privind droguri",
          item: url,
        },
      ],
    } as const;

    // Inject JSON-LD scripts
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.id = "faq-jsonld-droguri";
    faqScript.text = JSON.stringify(faqData);
    document.head.appendChild(faqScript);

    const legalScript = document.createElement("script");
    legalScript.type = "application/ld+json";
    legalScript.id = "legalservice-jsonld-droguri";
    legalScript.text = JSON.stringify(legalServiceData);
    document.head.appendChild(legalScript);

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "breadcrumb-jsonld-droguri";
    breadcrumbScript.text = JSON.stringify(breadcrumbData);
    document.head.appendChild(breadcrumbScript);

    // Open Graph & Twitter meta
    const createdMetaIds: string[] = [];
    const setMeta = (
      id: string,
      attr: "property" | "name",
      attrValue: string,
      content: string
    ) => {
      let el = document.getElementById(id) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.id = id;
        el.setAttribute(attr, attrValue);
        document.head.appendChild(el);
        createdMetaIds.push(id);
      }
      el.setAttribute("content", content);
    };

    setMeta("og-title-droguri", "property", "og:title", title);
    setMeta("og-desc-droguri", "property", "og:description", description);
    setMeta("og-type-droguri", "property", "og:type", "website");
    setMeta("og-url-droguri", "property", "og:url", url);
    setMeta("og-image-droguri", "property", "og:image", imageUrl);

    setMeta("tw-card-droguri", "name", "twitter:card", "summary_large_image");
    setMeta("tw-title-droguri", "name", "twitter:title", title);
    setMeta("tw-desc-droguri", "name", "twitter:description", description);
    setMeta("tw-image-droguri", "name", "twitter:image", imageUrl);

    return () => {
      faqScript.parentNode?.removeChild(faqScript);
      legalScript.parentNode?.removeChild(legalScript);
      breadcrumbScript.parentNode?.removeChild(breadcrumbScript);
      createdMetaIds.forEach((id) => document.getElementById(id)?.remove());
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Avocat Trafic Droguri București - Experiența mea în apărarea clienților în dosare DIICOT
      </h1>
      <p className="mt-2 text-muted-foreground">
        de Bogdan Lamatic, avocat specializat în drept penal și white-collar crime
      </p>

      <div className="mt-4">
        <a href="tel:+40745506443" title="/telefon" aria-label="Apelează acum">
          <Button size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none bg-accent text-accent-foreground hover:opacity-90">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Apelează acum: +40 745 506 443
          </Button>
        </a>
      </div>

      <div className="mt-4">
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
              <BreadcrumbPage>Cauze penale privind droguri</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* H2: Introducere */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">
            De ce este esențial să acționezi rapid în cazurile de trafic de droguri
          </h2>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <p>
            Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 17 ani de experiență în drept penal,
            recunoscut de Legal500 cinci ani consecutiv ca Next Generation Partner în domeniul infracțiunilor
            economice și de corupție.
          </p>
          <p>
            În toată cariera mea, am reprezentat clienți în dosare complexe de trafic de droguri, de la investigații DIICOT până la procese în fața Înaltei Curți de Casație și Justiție.
          </p>
          <p>Știu din practică un adevăr simplu: primele ore după reținere sunt decisive.</p>
          <p>
            În astfel de dosare, fiecare detaliu contează - o interceptare contestată, un mandat de percheziție emis incorect sau lipsa legăturii directe între client și substanțele incriminate pot schimba radical soarta unui proces.
          </p>
        </CardContent>
      </Card>

      {/* H2: Ce înseamnă traficul de droguri */}
      <Card className="mt-8 border-accent">
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
            <a href="tel:+40745506443" title="/telefon" aria-label="Sună acum">
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
                    Art. 2 Cultivarea, producerea, fabricarea, experimentarea, extragerea, prepararea, transformarea, oferirea, punerea în vânzare, vânzarea, distribuirea, livrarea cu orice titlu, trimiterea, transportul, procurarea, cumpărarea, deținerea ori alte operațiuni privind circulația drogurilor de risc, fără drept, se pedepsesc cu închisoare de la 3 la 15 ani și interzicerea unor drepturi. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 5 la 15 ani și interzicerea unor drepturi.
                  </TableCell>
                  <TableCell>
                    Este fundamentul majorității dosarelor de trafic intern. Diferența între droguri de risc și de mare risc este crucială pentru pedeapsa aplicată. Strategia de apărare vizează contestarea încadrării substanței, legalitatea probelor și lipsa intenției de comercializare.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 3 Introducerea sau scoaterea din țară, precum și importul ori exportul de droguri de risc, fără drept, se pedepsesc cu închisoare de la 5 la 15 ani și interzicerea unor drepturi. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 10 la 20 de ani și interzicerea unor drepturi.
                  </TableCell>
                  <TableCell>
                    Reglementează traficul internațional. Apărarea se concentrează pe legalitatea actelor vamale, eventuale provocări ale organelor de anchetă și lipsa dovezilor privind intenția de distribuire.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 4 Cultivarea, producerea, fabricarea, experimentarea, extragerea, prepararea, transformarea, cumpărarea sau deținerea de droguri de risc pentru consum propriu, fără drept, se pedepsește cu închisoare de la 3 luni la 2 ani sau cu amendă. Dacă faptele privesc droguri de mare risc, pedeapsa este închisoarea de la 6 luni la 3 ani.
                  </TableCell>
                  <TableCell>
                    Face diferența între consum și trafic. Reîncadrarea la consum propriu poate reduce drastic pedeapsa. Este o direcție frecvent explorată în apărare.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 5 Punerea la dispoziție, cu știință, cu orice titlu, a unei locuințe sau a unui local ori a oricărui alt loc amenajat, în care are acces publicul, pentru consum ilicit de droguri sau tolerarea consumului ilicit, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea unor drepturi.
                  </TableCell>
                  <TableCell>
                    Am întâlnit cazuri unde simpla tolerare a consumului a dus la dosare penale. Apărarea presupune dovedirea lipsei intenției sau imposibilității de control.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 6 Prescrierea drogurilor de mare risc, cu intenție, de către medic, fără necesitate medicală, se pedepsește cu închisoare de la 1 la 5 ani și interzicerea unor drepturi. Cu aceeași pedeapsă se sancționează eliberarea cu intenție pe baza unei rețete prescrise ilegal sau falsificate. Obținerea prin astfel de rețete se pedepsește cu închisoare de la 1 la 3 ani.
                  </TableCell>
                  <TableCell>
                    Privește circuitul medical și farmaceutic. Apărarea se bazează pe demonstrarea bunei-credințe și pe documente medicale reale care justifică acțiunea.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 7 Administrarea de droguri de mare risc unei persoane, în afara condițiilor legale, se pedepsește cu închisoare de la 1 la 5 ani.
                  </TableCell>
                  <TableCell>
                    Apărarea se bazează pe lipsa probelor privind administrarea efectivă sau necunoașterea naturii substanței.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 8 Furnizarea, în vederea consumului, de inhalanți chimici toxici unui minor se pedepsește cu închisoare de la 6 luni la 2 ani.
                  </TableCell>
                  <TableCell>
                    Nu implică droguri clasice, dar legea sancționează sever. Apărarea urmărește lipsa intenției de a favoriza consumul.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 9 Finanțarea faptelor prevăzute la art. 2-5 se sancționează cu pedepsele prevăzute de lege, limitele acestora majorându-se cu o treime.
                  </TableCell>
                  <TableCell>
                    Se aplică și susținătorilor indirecți. În apărare, probele financiare sunt vitale pentru a demonstra lipsa legăturii cu traficul.
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
                    Este cea mai gravă situație. Apărarea vizează lipsa legăturii cauzale directe între faptă și deces.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 12 Tentativa la infracțiunile prevăzute la art. 2, 3, art. 4 alin. (2), art. 6 alin. (2)-(3), art. 7 și 9 se pedepsește. Se consideră tentativă și producerea sau procurarea mijloacelor ori luarea de măsuri pentru comitere.
                  </TableCell>
                  <TableCell>
                    Legea pedepsește chiar și pregătirea. Apărarea se bazează pe lipsa intenției directe și neproducerea unui rezultat.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 13 Tentativa la infracțiunile prevăzute la art. 2-7, 9 și 10 se pedepsește. Se consideră tentativă și producerea/procurarea mijloacelor ori luarea de măsuri în vederea comiterii.
                  </TableCell>
                  <TableCell>
                    Este o dublare a reglementării tentativei pentru mai multe articole. Apărarea subliniază lipsa unei intenții certe.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 14 Circumstanțe agravante: făptuitor cu autoritate publică; cadru medical; distribuire către minori, bolnavi psihic, persoane în reabilitare; fapte în instituții; folosirea minorilor; droguri amestecate pentru a le crește pericolul.
                  </TableCell>
                  <TableCell>
                    Prezența unei agravante crește semnificativ pedeapsa. Apărarea urmărește dovedirea inexistenței acestor circumstanțe.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 15 Nu se pedepsește persoana care, înainte de urmărirea penală, denunță autorităților participarea sa, permițând identificarea și tragerea la răspundere penală a celorlalți.
                  </TableCell>
                  <TableCell>
                    Autodenunțul este un instrument strategic pentru evitarea pedepsei, util mai ales în faza incipientă a dosarului.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 16 Persoana care denunță și facilitează identificarea altor participanți beneficiază de reducerea la jumătate a limitelor pedepsei.
                  </TableCell>
                  <TableCell>
                    Colaborarea cu autoritățile poate înjumătăți pedeapsa. Trebuie folosită cu atenție pentru a proteja interesele clientului.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Art. 17 Drogurile și alte bunuri rezultate din infracțiuni se confiscă; dacă nu se găsesc, se plătește echivalentul. Se confiscă și banii/valorile dobândite din valorificarea lor.
                  </TableCell>
                  <TableCell>
                    Confiscarea poate afecta grav patrimoniul. În apărare, lupt pentru a dovedi caracterul legal al bunurilor.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <div className="pt-4">
        <a href="tel:+40745506443" aria-label="Sună acum">
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
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Întrebări frecvente din experiența mea</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-base leading-relaxed">
          <div>
            <p className="font-medium">Pot scăpa de închisoare dacă am o cantitate mică?</p>
            <p className="text-muted-foreground">
              Dacă se dovedește că este pentru consum propriu, pedeapsa poate fi redusă sau înlocuită cu măsuri
              alternative.
            </p>
          </div>
          <div>
            <p className="font-medium">Ce fac dacă DIICOT mă cheamă la audieri?</p>
            <p className="text-muted-foreground">
              Mă contactezi imediat și nu dai declarații fără consultanță juridică.
            </p>
          </div>
          <div>
            <p className="font-medium">Se poate schimba încadrarea din trafic în deținere?</p>
            <p className="text-muted-foreground">
              Da, dacă lipsesc probele privind intenția de comercializare.
            </p>
          </div>
        </CardContent>
      </Card>

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
          <p>📞 Telefon: +40 745 506 443</p>
          <p>📧 E-mail: bogdan.lamatic@yahoo.com</p>
        </CardContent>
      </Card>
    </section>
  );
}
