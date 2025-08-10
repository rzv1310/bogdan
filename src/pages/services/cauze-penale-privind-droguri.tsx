import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

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
        <a href="tel:+40745506443" aria-label="Apelează acum">
          <Button size="lg" className="bg-accent text-accent-foreground hover:opacity-90">
            <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
            Apelează acum: +40 745 506 443
          </Button>
        </a>
      </div>

      <div className="mt-4">
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
        </CardContent>
      </Card>

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
