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

const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/masuri-preventive";
const TITLE = "Avocat Măsuri Preventive București - Intervenție Imediată | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat măsuri preventive București - reținere, control judiciar, arest la domiciliu, arestare preventivă. 18+ ani experiență. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre controlul judiciar, arestul la domiciliu și arestarea preventivă?",
    a: "Controlul judiciar este o măsură care nu presupune detenția, dar impune obligații și eventuale restricții. Arestul la domiciliu este o măsură privativă de libertate executată în imobilul stabilit. Arestarea preventivă presupune privarea de libertate într-un loc de deținere. Codul de procedură penală include toate aceste măsuri în categoria măsurilor preventive.",
  },
  {
    q: "Cât poate dura reținerea?",
    a: "Reținerea poate fi dispusă pentru cel mult 24 de ore. După expirarea acesteia, persoana nu poate fi ținută în continuare în baza aceleiași măsuri de reținere. Dacă se urmărește aplicarea unei alte măsuri preventive, trebuie respectată procedura prevăzută pentru acea măsură.",
  },
  {
    q: "Cât poate dura arestarea preventivă?",
    a: "În cursul urmăririi penale, arestarea preventivă poate fi dispusă inițial pentru maximum 30 de zile și poate fi prelungită în condițiile legii, fără ca durata totală în această etapă să depășească 180 de zile. Regimul aplicabil în celelalte etape ale procesului penal este distinct.",
  },
  {
    q: "Cum se contestă o măsură preventivă?",
    a: "Depinde de măsura dispusă, de organul care a dispus-o, de actul prin care a fost dispusă și de etapa procesului penal. Art. 204, 205 și 206 CPP reglementează contestațiile împotriva încheierilor privind măsurile preventive în diferitele etape ale procesului, iar art. 213 reglementează calea de atac împotriva controlului judiciar dispus de procuror. Termenele pot fi foarte scurte.",
  },
  {
    q: "Poate fi înlocuită o măsură preventivă cu una mai ușoară?",
    a: "Da, dacă sunt îndeplinite condițiile prevăzute de lege. Art. 242 CPP reglementează atât revocarea măsurilor preventive, cât și înlocuirea unei măsuri cu o măsură mai ușoară. Faptul că această posibilitate există în lege nu înseamnă că orice cerere va fi admisă. Trebuie analizate concret temeiurile măsurii, evoluția cauzei și conduita procesuală.",
  },
  {
    q: "Cine poate dispune arestarea preventivă sau arestul la domiciliu?",
    a: "Arestarea preventivă și arestul la domiciliu sunt măsuri aflate în competența judecătorului sau a instanței, în funcție de etapa procesuală și procedura aplicabilă. Procurorul poate formula propunerea în situațiile prevăzute de lege, însă nu poate dispune el însuși arestarea preventivă.",
  },
  {
    q: "Ce obligații pot fi impuse prin control judiciar?",
    a: "Controlul judiciar presupune obligații prevăzute de art. 215 CPP și poate include, în condițiile legii, restricții suplimentare adaptate cauzei. Pot fi vizate prezentarea la organul judiciar, prezentarea la poliție, schimbarea locuinței, deplasările, contactul cu anumite persoane și anumite activități. Obligațiile exacte trebuie verificate în actul prin care măsura a fost dispusă.",
  },
  {
    q: "Pot ieși din arest la domiciliu pentru muncă sau tratament medical?",
    a: "În situațiile și condițiile prevăzute de lege poate fi solicitată permisiunea de a părăsi imobilul pentru o perioadă determinată și într-un scop justificat. Nu există însă o aprobare automată. Cererea trebuie analizată și argumentată în funcție de circumstanțele concrete.",
  },
  {
    q: "Cât costă un avocat pentru o măsură preventivă?",
    a: "Onorariul depinde de urgență, complexitatea cauzei, volumul documentelor, măsura preventivă, etapa procesuală, activitățile necesare și numărul termenelor. Ofer o primă discuție gratuită pentru evaluarea situației, iar înainte de preluarea mandatului explic onorariul și serviciile incluse.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră?",
    a: "Da. Mă ocup personal de dosar și rămân avocatul tău de contact. Dacă situația necesită colaborarea cu alți profesioniști, coordonez personal strategia de apărare.",
  },
  {
    q: "Poate familia să contacteze avocatul dacă persoana este reținută?",
    a: "Da. Foarte des, în cazul unei rețineri, prima persoană care caută avocatul este un membru al familiei. Spune-mi cine a fost reținut, unde se află, când s-a întâmplat, ce informații ai primit și, dacă știi, ce structură instrumentează dosarul. Nu trebuie să aștepți până când ai toate actele.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Sună-mă acum!" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - avocat măsuri preventive`}>
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
    title: "Reținere 24 ore",
    lead: "Ai fost reținut sau o persoană apropiată se află la Poliție ori Parchet?",
    text: "Primele ore pot include audieri și decizii importante privind măsurile care urmează. Reținerea poate fi dispusă pentru cel mult 24 de ore.",
    linkLabel: "Reținere 24 ore - ce trebuie făcut imediat",
    to: "/servicii/retinere-24-ore",
  },
  {
    title: "Arest preventiv",
    lead: "Procurorul solicită arestarea preventivă sau măsura a fost deja dispusă?",
    text: "Apărarea trebuie pregătită în raport cu motivele concrete invocate pentru privarea de libertate, situația probatorie și posibilitatea aplicării unei măsuri mai puțin severe.",
    linkLabel: "Arest preventiv - apărare, contestație și înlocuirea măsurii",
    to: "/servicii/arest-preventiv",
  },
  {
    title: "Control judiciar",
    lead: "Ai restricții privind deplasările, contactul cu anumite persoane sau activitatea profesională?",
    text: "Trebuie analizat dacă obligațiile sunt necesare și proporționale și dacă există motive pentru modificarea, revocarea sau înlocuirea măsurii.",
    linkLabel: "Control judiciar - obligații, contestare și revocare",
    to: "/servicii/control-judiciar",
  },
  {
    title: "Arest la domiciliu",
    lead: "Ești în arest la domiciliu sau această măsură urmează să fie discutată?",
    text: "În funcție de situație, pot fi analizate contestarea măsurii, înlocuirea cu una mai puțin severă sau cererile privind părăsirea imobilului în cazurile permise de lege.",
    linkLabel: "Arest la domiciliu - contestație, permisiuni și înlocuire",
    to: "/servicii/arest-la-domiciliu",
  },
];

export default function MasuriPreventive() {
  useSEO({
    canonical: "/servicii/masuri-preventive",
    locale: "ro_RO",
    alternates: { ro: "/servicii/masuri-preventive", en: "/en/services/preventive-measures", xDefault: "/servicii/masuri-preventive" },
    title: TITLE,
    description: DESCRIPTION,
    keywords: "avocat măsuri preventive, avocat măsuri preventive București",
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
          { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/servicii" },
          { "@type": "ListItem", position: 3, name: "Măsuri preventive", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Avocat măsuri preventive București - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: servedAreasSchema,
        availableLanguage: ["ro", "en"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Strada Colonel Stefan Stoika 22",
          addressLocality: "București",
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
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/servicii">Servicii</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Măsuri preventive</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">Avocat pentru măsuri preventive în București</h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>Ai fost reținut, ești sub control judiciar sau urmează o propunere de arestare preventivă?</strong></span>
          <span className="block">O măsură preventivă îți poate limita libertatea, deplasările, activitatea profesională și viața de familie înainte de existența unei condamnări.</span>
          <span className="block underline">Dacă ție sau unei persoane apropiate vi s-a comunicat că urmează o măsură preventivă sau măsura a fost deja dispusă, timpul disponibil pentru pregătirea apărării poate fi foarte scurt.</span>
        </p>
      </div>

      <ServiceHeroCta lang="ro" ariaLabel="Sună-mă acum! - avocat măsuri preventive" />

      <p className="mt-3 text-sm text-muted-foreground">
        5,0 <span className="text-yellow-400" aria-hidden="true">★★★★★</span> din 27 de recenzii Google
      </p>
      <ServiceSubServices path="/servicii/masuri-preventive" />

      <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal. Intervin în situații privind reținerea pentru maximum 24 de ore, arestarea preventivă, controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu, prelungirea sau menținerea unei măsuri, contestarea acesteia, revocarea sau înlocuirea ei cu una mai puțin severă, de regulă în contextul unei{" "}
          <Link to="/servicii/urmarire-penala" className="text-primary underline underline-offset-2">
            faze de urmărire penală
          </Link>
          .
        </p>
        <p>
          Sunt listat în prezent de Legal 500 în categoria Next Generation Partners - White-Collar Crime. Am reprezentat clienți în fața judecătorului de drepturi și libertăți, a judecătorului de cameră preliminară și a instanțelor de judecată.
        </p>
      </div>

      {/* Ai una dintre aceste probleme */}
      <Card className="mt-12 md:mt-14 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ai una dintre aceste probleme?</h2>
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
            <h3 className="text-lg font-semibold">Nu știi exact ce măsură se discută?</h3>
            <p className="mt-1">Nu trebuie să cunoști denumirea juridică exactă.</p>
            <p>Spune-mi ce s-a întâmplat, unde se află persoana și ce informații ai primit de la Poliție, Parchet sau instanță.</p>
            <CallCta label="Sună acum - 031 632 01 83" />
          </div>
        </CardContent>
      </Card>

      {/* Ce se întâmplă acum */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce se întâmplă acum?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ai fost reținut sau o persoană apropiată a fost reținută</h3>
            <p>Reținerea este o măsură preventivă privativă de libertate care se poate dispune pentru cel mult 24 de ore. În acest interval pot avea loc audieri și alte acte procedurale importante.</p>
            <p>În funcție de dosar, după reținere poate intra în discuție o altă măsură preventivă, inclusiv controlul judiciar, arestul la domiciliu sau arestarea preventivă. De aceea, este preferabil ca strategia de apărare să fie analizată înainte de luarea următoarei decizii.</p>
            <p>Dacă persoana reținută este un membru al familiei sau o persoană apropiată, mă poți contacta și tu. Spune-mi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>numele persoanei;</li>
              <li>unde se află;</li>
              <li>la ce secție de Poliție, Parchet sau structură a fost dusă;</li>
              <li>când a avut loc reținerea;</li>
              <li>ce informații ai primit până acum;</li>
              <li>dacă știi când urmează audierea sau prezentarea în fața judecătorului.</li>
            </ul>
            <p>Nu este necesar să ai toate documentele pentru a mă contacta.</p>
            <CallCta label="A fost dispusă reținerea - Sună acum" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Urmează o propunere de arestare preventivă</h3>
            <p>Acesta este unul dintre momentele în care pregătirea rapidă a apărării este esențială. Arestarea preventivă este cea mai severă dintre măsurile preventive prevăzute de Codul de procedură penală.</p>
            <p>În cursul urmăririi penale, măsura poate fi dispusă inițial pentru cel mult 30 de zile, iar prelungirile sunt supuse condițiilor și limitelor prevăzute de lege. Durata totală în această fază nu poate depăși 180 de zile.</p>
            <p>Analizez:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>motivele concrete invocate pentru arestare;</li>
              <li>condițiile generale ale măsurilor preventive;</li>
              <li>condițiile speciale ale arestării preventive;</li>
              <li>probele relevante disponibile;</li>
              <li>existența riscurilor procesuale invocate;</li>
              <li>circumstanțele personale, familiale și profesionale;</li>
              <li>proporționalitatea măsurii;</li>
              <li>posibilitatea aplicării unei măsuri mai puțin severe.</li>
            </ul>
            <p>Obiectivul apărării poate fi, în funcție de situația concretă: respingerea propunerii, aplicarea controlului judiciar, aplicarea arestului la domiciliu sau o altă soluție permisă de lege.</p>
            <CallCta label="Urmează propunerea de arestare - Sună acum" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ești deja sub control judiciar</h3>
            <p>Controlul judiciar nu presupune detenția, dar poate avea un impact real asupra vieții de zi cu zi. Pot exista obligații referitoare la:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>prezentarea la organul judiciar;</li>
              <li>prezentarea la organul de poliție desemnat cu supravegherea;</li>
              <li>schimbarea locuinței;</li>
              <li>deplasarea în anumite limite teritoriale;</li>
              <li>contactul cu anumite persoane;</li>
              <li>exercitarea anumitor activități, atunci când o asemenea obligație este stabilită în condițiile legii.</li>
            </ul>
            <p>Conținutul controlului judiciar este reglementat de art. 215 CPP. Faptul că o obligație a fost stabilită nu înseamnă că ea trebuie să rămână automat neschimbată indiferent de evoluția dosarului.</p>
            <p>Analizez dacă măsura mai este necesară, dacă obligațiile sunt proporționale, dacă au apărut împrejurări noi, dacă anumite restricții pot fi modificate și dacă există temei pentru revocarea sau înlocuirea măsurii.</p>
            <CallCta label="Analizează obligațiile din controlul judiciar" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ești în arest la domiciliu</h3>
            <p>Arestul la domiciliu este o măsură preventivă privativă de libertate. În cursul urmăririi penale poate fi luat pentru cel mult 30 de zile, cu posibilitatea prelungirii în condițiile prevăzute de lege, iar durata maximă în această fază este de 180 de zile.</p>
            <p>Dacă măsura este deja dispusă, analizăm:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dacă există o cale de atac disponibilă;</li>
              <li>dacă măsura mai este necesară;</li>
              <li>dacă poate fi înlocuită cu una mai puțin severă;</li>
              <li>dacă există împrejurări noi;</li>
              <li>dacă este necesară formularea unei cereri pentru părăsirea temporară a imobilului într-o situație permisă de lege.</li>
            </ul>
            <CallCta label="Sunt în arest la domiciliu - Vreau să verific opțiunile" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Ești deja arestat preventiv</h3>
            <p>Faptul că arestarea preventivă a fost dispusă nu înseamnă că analiza apărării s-a încheiat. În funcție de etapa dosarului pot deveni relevante:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>contestația;</li>
              <li>apărarea împotriva prelungirii măsurii;</li>
              <li>verificarea periodică a măsurii;</li>
              <li>revocarea;</li>
              <li>înlocuirea cu o măsură preventivă mai puțin severă.</li>
            </ul>
            <p>Codul de procedură penală permite revocarea măsurii atunci când au încetat temeiurile care au determinat-o sau au apărut împrejurări noi relevante și reglementează și înlocuirea cu o măsură mai ușoară atunci când condițiile legale sunt îndeplinite.</p>
            <CallCta label="Măsura a fost deja dispusă - Verifică opțiunile" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Vrei să contești o măsură preventivă</h3>
            <p className="text-foreground"><strong>Nu amâna verificarea termenului.</strong></p>
            <p>În materia măsurilor preventive există termene procedurale foarte scurte. Pentru contestațiile reglementate de art. 204-206 CPP, termenul este de 48 de ore de la pronunțare sau, după caz, de la comunicare. Și împotriva ordonanței procurorului prin care se dispune controlul judiciar există o cale specifică de atac, reglementată de art. 213 CPP.</p>
            <p>De aceea, primul lucru pe care îl verific este: ce măsură a fost dispusă, prin ce act, de către cine, în ce etapă se află dosarul, când a fost pronunțată soluția, când a fost comunicată și ce termen procedural este aplicabil situației concrete.</p>
            <CallCta label="Vreau să verific termenul" />
          </div>
        </CardContent>
      </Card>

      {/* Ce fac imediat după ce mă contactezi */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce fac imediat după ce mă contactezi</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Nu trebuie să cunoști Codul de procedură penală și nici să știi ce cerere trebuie formulată. Spune-mi ce s-a întâmplat.</p>
          <p>
            <strong>1. Clarific situația.</strong> Stabilesc unde se află persoana, dacă are calitatea de suspect sau inculpat, ce măsură a fost discutată, propusă sau dispusă, cine a dispus-o sau cine o solicită, în ce etapă se află dosarul, când este următoarea audiere sau termen și dacă există un termen procedural în curs.
          </p>
          <p>
            <strong>2. Analizez actele disponibile.</strong> Verific documentele pe care le ai și, în limitele accesului permis de lege, actele relevante ale dosarului. Identific acuzația, motivele măsurii, argumentele procurorului, situația procesuală și elementele care pot fi folosite în apărare.
          </p>
          <p>
            <strong>3. Evaluez riscul procedural.</strong> Analizez condițiile legale aplicabile măsurii și circumstanțele concrete ale clientului. Contează inclusiv natura acuzației, probele, conduita procesuală, antecedentele relevante, situația familială și profesională, legăturile cu comunitatea, evoluția anchetei și riscurile invocate de acuzare.
          </p>
          <p>
            <strong>4. Construiesc apărarea.</strong> În funcție de situație, strategia poate urmări evitarea unei măsuri preventive, respingerea propunerii de arestare, menținerea persoanei în libertate, aplicarea unei măsuri mai puțin severe, contestarea măsurii dispuse, modificarea unor obligații, revocarea sau înlocuirea acesteia. Nicio soluție nu poate fi garantată.
          </p>
          <CallCta label="Sună acum - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* Ce trebuie să îmi spui */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce trebuie să îmi spui sau să îmi trimiți</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Pentru a înțelege cât mai repede situația, spune-mi de la început:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>numele persoanei vizate;</li>
            <li>unde se află în acest moment;</li>
            <li>dacă a fost reținută;</li>
            <li>ce calitate are în dosar, dacă o cunoști;</li>
            <li>ce măsură i s-a propus sau dispus;</li>
            <li>ce instituție instrumentează dosarul;</li>
            <li>când este următoarea audiere sau termen;</li>
            <li>când a fost pronunțată sau comunicată soluția, dacă există.</li>
          </ul>
          <p>Dacă le ai, trimite-mi ordonanța, încheierea instanței, citația, documentele primite de la Poliție sau Parchet, actele referitoare la măsura preventivă și orice alt document relevant.</p>
          <p>Nu aștepta să strângi toate actele înainte să mă contactezi. În special în cazul unei rețineri sau al unui termen apropiat, informațiile pe care le ai deja pot fi suficiente pentru prima discuție.</p>
        </CardContent>
      </Card>

      {/* De ce să mă alegi */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să mă alegi pentru o măsură preventivă</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>18+ ani de experiență în drept penal.</strong> Am reprezentat clienți în cauze penale și în relația cu organele judiciare relevante, iar practica mea include dosare de white-collar crime și investigații complexe.
          </p>
          <p>
            <strong>Recunoaștere Legal 500 - White-Collar Crime.</strong> Legal 500 îl include în prezent pe Bogdan Lamatic în categoria Next Generation Partners - White-Collar Crime, România. Experiența într-un dosar penal nu înseamnă doar cunoașterea textului de lege, ci capacitatea de a identifica rapid ce contează procedural și probator atunci când timpul este limitat.
          </p>
          <p>
            <strong>Mă ocup personal de dosarul tău.</strong> Mă ocup personal de strategie și de reprezentarea pentru care am preluat mandatul și rămân avocatul tău de contact. Dacă particularitățile cauzei necesită colaborarea cu alți profesioniști, coordonez personal apărarea.
          </p>
          <p>
            <strong>Program extins și intervenție în situații urgente.</strong> Luni - Vineri: 06:00 - 22:00, Sâmbătă - Duminică: 09:00 - 20:00. Pentru urgențe penale există și disponibilitate în afara programului obișnuit, în funcție de situație. Dacă este vorba despre reținere, audiere urgentă, percheziție, propunere de arestare sau un termen apropiat privind o măsură preventivă, sună direct.
          </p>
          <p>
            <strong>Discreție și confidențialitate.</strong> Discuțiile cu avocatul și informațiile primite în exercitarea profesiei sunt protejate de regulile privind secretul profesional.
          </p>
          <CallCta label="Vorbește direct cu avocatul Bogdan Lamatic" />
        </CardContent>
      </Card>

      {/* Riscuri */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce riști dacă nu reacționezi la timp</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>O măsură preventivă nu trebuie tratată ca o simplă formalitate procedurală. Poate produce efecte reale înainte ca dosarul penal să fie soluționat definitiv.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Poate fi dispusă o măsură mai severă.</strong> Atunci când există argumente pentru o măsură mai puțin restrictivă, acestea trebuie identificate și prezentate în momentul procesual potrivit.
            </li>
            <li>
              <strong>Poți pierde un termen procedural scurt.</strong> În materia măsurilor preventive există situații în care termenul pentru formularea căii de atac este de doar 48 de ore.
            </li>
            <li>
              <strong>Poți continua să respecți obligații care ar putea fi modificate.</strong> Controlul judiciar poate afecta deplasările, călătoriile, activitatea profesională, relația cu anumite persoane și modul în care îți organizezi viața de zi cu zi.
            </li>
            <li>
              <strong>O măsură privativă de libertate poate continua deși situația dosarului s-a schimbat.</strong> Codul de procedură penală reglementează revocarea și înlocuirea măsurilor preventive atunci când sunt îndeplinite condițiile legale.
            </li>
            <li>
              <strong>Efectele nu sunt doar juridice.</strong> O măsură preventivă poate influența direct libertatea, familia, locul de muncă, administrarea unei afaceri, călătoriile, relațiile profesionale, reputația și capacitatea de a continua anumite activități.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Ce sunt măsurile preventive */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce sunt măsurile preventive și în ce scop pot fi luate</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Măsurile preventive sunt măsuri procesuale care pot restrânge libertatea sau exercitarea unor drepturi pe durata procesului penal. Pot fi luate numai în condițiile prevăzute de lege.</p>
          <p>
            Art. 202 CPP stabilește cadrul general, inclusiv necesitatea existenței unei suspiciuni rezonabile și cerința ca măsura să fie necesară pentru scopurile procesuale prevăzute de lege și proporțională cu gravitatea acuzației. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
          </p>
          <p>În esență, măsurile preventive urmăresc buna desfășurare a procesului penal, împiedicarea sustragerii de la urmărire penală sau judecată și prevenirea săvârșirii unei alte infracțiuni. Măsura concretă trebuie analizată prin raportare la situația individuală a cauzei.</p>
        </CardContent>
      </Card>

      {/* Cele 5 măsuri preventive */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Care sunt cele 5 măsuri preventive</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-6">
          <div className="space-y-2">
            <p>Codul de procedură penală prevede cinci măsuri preventive: reținerea, controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu și arestarea preventivă.</p>
            <p>Trei sunt privative de libertate - reținerea, arestul la domiciliu și arestarea preventivă - iar două sunt restrictive de drepturi - controlul judiciar și controlul judiciar pe cauțiune.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Reținerea - maximum 24 de ore</h3>
            <p>Reținerea este o măsură preventivă privativă de libertate. În cursul urmăririi penale, aceasta poate fi dispusă pentru cel mult 24 de ore. Durata redusă nu înseamnă însă că această etapă este lipsită de importanță, pentru că în acest interval pot avea loc acte procedurale care influențează ceea ce urmează.</p>
            <p>În funcție de situația concretă, pot interveni pentru consultanță juridică imediată, asistență la audieri, analiza situației procesuale, verificarea documentelor disponibile, pregătirea poziției procesuale și pregătirea apărării pentru eventuala solicitare a unei alte măsuri preventive.</p>
            <Link to="/servicii/retinere-24-ore" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Reținere 24 ore - drepturi, asistență avocat și ce urmează <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Controlul judiciar</h3>
            <p>Controlul judiciar este o măsură preventivă neprivativă de libertate. Persoana rămâne în libertate, dar trebuie să respecte obligațiile stabilite de organul judiciar competent. Art. 215 CPP reglementează conținutul controlului judiciar și obligațiile care pot fi impuse.</p>
            <p>Analizez motivele pentru care a fost dispusă măsura, obligațiile stabilite, impactul lor concret, proporționalitatea restricțiilor, evoluția dosarului și eventualele împrejurări noi. În funcție de situație, pot fi analizate calea de atac, modificarea obligațiilor, eliminarea anumitor restricții, revocarea sau înlocuirea măsurii.</p>
            <Link to="/servicii/control-judiciar" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Control judiciar - obligații, plângere, modificare și revocare <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Controlul judiciar pe cauțiune</h3>
            <p>Controlul judiciar pe cauțiune este reglementat distinct de Codul de procedură penală și presupune, pe lângă obligațiile specifice controlului judiciar, constituirea unei cauțiuni în condițiile stabilite de lege. Informațiile despre această procedură sunt integrate în pagina dedicată controlului judiciar.</p>
            <p>Într-o asemenea situație analizez, după caz: condițiile măsurii, oportunitatea acesteia în raport cu alte măsuri, obligațiile impuse, cauțiunea, situația materială relevantă și posibilitatea folosirii unei măsuri neprivative de libertate în locul uneia mai severe, atunci când cadrul legal și situația concretă permit această argumentație.</p>
            <Link to="/servicii/control-judiciar" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Control judiciar și control judiciar pe cauțiune <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Arestul la domiciliu</h3>
            <p>Arestul la domiciliu este o măsură preventivă privativă de libertate. Persoana trebuie să rămână în imobilul în care execută măsura și să respecte obligațiile stabilite, cu excepțiile permise de lege sau aprobate de organul judiciar competent. În cursul urmăririi penale poate fi dispus pentru cel mult 30 de zile, iar durata maximă în această etapă poate ajunge, prin prelungiri succesive în condițiile legii, la 180 de zile.</p>
            <p>În funcție de momentul în care mă contactezi, pregătesc apărarea împotriva luării măsurii, analizez calea de atac disponibilă, solicit înlocuirea cu o măsură mai puțin severă atunci când există temei, analizez posibilitatea revocării și formulez cereri privind părăsirea imobilului atunci când există un motiv justificat.</p>
            <Link to="/servicii/arest-la-domiciliu" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Arest la domiciliu - contestație, permisiuni, revocare și înlocuire <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">5. Arestarea preventivă</h3>
            <p>Arestarea preventivă este cea mai severă măsură preventivă prevăzută de Codul de procedură penală. În cursul urmăririi penale poate fi dispusă de judecător pentru o perioadă de cel mult 30 de zile și poate fi prelungită în condițiile legii, durata totală în această fază neputând depăși 180 de zile.</p>
            <p>Intervenția poate începe încă din momentul în care există o propunere de arestare. După dispunerea măsurii pot deveni relevante contestația, opoziția la prelungire, verificările periodice, revocarea sau înlocuirea măsurii.</p>
            <Link to="/servicii/arest-preventiv" className="inline-flex items-center gap-1 text-primary underline underline-offset-2">
              Arest preventiv - propunere, contestație, prelungire și înlocuire <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Metodă de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut - metoda mea de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A. Intervenție rapidă.</strong> Primul obiectiv este să stabilim exact ce s-a întâmplat, ce urmează, când urmează, ce acte există și ce termen procedural trebuie respectat. Nu aștept ca dosarul să ajungă într-o etapă mai avansată pentru a identifica riscurile care există deja.
          </p>
          <p>
            <strong>B. Verificarea condițiilor legale.</strong> Analizez condițiile generale prevăzute de art. 202 CPP și regulile speciale aplicabile măsurii respective. Verific dacă măsura este permisă de lege, justificată de circumstanțele cauzei, necesară, proporțională și susținută de motive concrete.
          </p>
          <p>
            <strong>C. Contestație, revocare sau înlocuire.</strong> Codul de procedură penală reglementează distinct căile de atac privind măsurile preventive în urmărirea penală (art. 204 CPP), în camera preliminară (art. 205 CPP) și în judecată (art. 206 CPP). Pentru controlul judiciar dispus de procuror există reglementarea specifică a art. 213 CPP, iar revocarea și înlocuirea sunt reglementate de art. 242 CPP.
          </p>
          <p>
            <strong>D. Reprezentare pe durata măsurii.</strong> Urmăresc evoluția dosarului, termenele, modificările situației probatorii, schimbarea circumstanțelor personale, menținerea sau dispariția temeiurilor invocate și posibilitatea modificării, revocării sau înlocuirii măsurii.
          </p>
        </CardContent>
      </Card>

      {/* Pași practici */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pași practici în funcție de situația ta</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Ai fost reținut.</strong> Sună imediat. Reținerea nu poate depăși 24 de ore, iar în acest interval pot avea loc acte procedurale importante.
          </p>
          <p>
            <strong>Ai aflat că procurorul solicită arestarea preventivă.</strong> Contactează-mă înainte de termen, dacă acest lucru este posibil. Apărarea poate fi pregătită mai bine înainte ca judecătorul să decidă.
          </p>
          <p>
            <strong>Ești deja sub control judiciar.</strong> Trimite-mi ordonanța sau încheierea, obligațiile stabilite, data la care măsura a fost luată sau prelungită și problema concretă pe care una dintre obligații ți-o creează.
          </p>
          <p>
            <strong>Ești în arest la domiciliu.</strong> Trimite încheierea și explică-mi problema concretă. Putem analiza atât continuarea măsurii, cât și eventualele cereri justificate privind părăsirea imobilului.
          </p>
          <p>
            <strong>Ești arestat preventiv.</strong> Spune-mi când a fost luată măsura, dacă urmează o prelungire, în ce etapă se află dosarul și ce documente ai.
          </p>
          <p>
            <strong>Măsura a fost dispusă sau prelungită recent.</strong> Spune-mi data și ora pronunțării sau comunicării. În anumite proceduri termenul de atac este de numai 48 de ore.
          </p>
          <CallCta label="Verifică acum ce opțiuni ai" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente despre măsurile preventive</h2>
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

      {/* Ai nevoie de ajutor acum */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ai nevoie de ajutor acum?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Dacă ție sau unei persoane apropiate i s-a dispus reținerea, i se propune sau i s-a dispus arestarea preventivă, i s-a impus control judiciar, are probleme cu obligațiile acestuia, este în arest la domiciliu, i-a fost prelungită o măsură ori vrea să conteste, să solicite revocarea sau înlocuirea cu o măsură mai puțin severă, nu trebuie să știi singur ce cerere trebuie formulată.</p>
          <p>Spune-mi ce s-a întâmplat și verificăm ce opțiuni procedurale există în situația concretă.</p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact - evaluare inițială gratuită</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>Bogdan Lamatic - avocat drept penal, București. Telefon: 031 632 01 83.</p>
          <p>Program: Luni - Vineri: 06:00 - 22:00; Sâmbătă - Duminică: 09:00 - 20:00.</p>
          <p>Dacă este o situație urgentă, spune de la început: „Este vorba despre o măsură preventivă.”</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună-mă acum</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Trimite solicitarea și actele</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resurse oficiale */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse oficiale</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>Informațiile juridice de pe această pagină se raportează la dispozițiile Codului de procedură penală privind măsurile preventive.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>art. 202 CPP - scopul, condițiile generale și categoriile măsurilor preventive;</li>
            <li>art. 204 CPP - calea de atac în cursul urmăririi penale;</li>
            <li>art. 205 CPP - calea de atac în camera preliminară;</li>
            <li>art. 206 CPP - calea de atac în cursul judecății;</li>
            <li>art. 209 CPP - reținerea;</li>
            <li>art. 211-215 CPP - controlul judiciar;</li>
            <li>art. 216-217 CPP - controlul judiciar pe cauțiune;</li>
            <li>art. 218-222 CPP - arestul la domiciliu;</li>
            <li>art. 223 și urm. CPP - arestarea preventivă;</li>
            <li>art. 241-242 CPP - încetarea de drept, revocarea și înlocuirea măsurilor preventive.</li>
          </ul>
          <p>
            (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
          </p>
        </CardContent>
      </Card>

      <RelatedServices current="/servicii/masuri-preventive" />
    </section>
  );
}
