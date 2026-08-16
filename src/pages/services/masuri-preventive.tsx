import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewCard from "@/components/services/GoogleReviewCard";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";
import SubServiceLinkButton from "@/components/services/SubServiceLinkButton";
import ServiceFaq from "@/components/services/ServiceFaq";

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
          <span className="block font-semibold mt-2">Dacă ție sau unei persoane apropiate vi s-a comunicat că urmează o măsură preventivă sau măsura a fost deja dispusă, timpul disponibil pentru pregătirea apărării poate fi foarte scurt.</span>
        </p>
      </div>

      <ServiceHeroCta lang="ro" ariaLabel="Sună-mă acum! - avocat măsuri preventive" />

      <LawyerBioBlock path="/servicii/masuri-preventive" lang="ro" />

      <ServiceSubServices path="/servicii/masuri-preventive" />

      {/* USP - mă ocup personal */}
      <div className="mt-10 md:mt-12 rounded-lg border-l-4 border-accent bg-accent/10 px-5 py-4">
        <p className="text-lg font-semibold text-foreground">Mă ocup personal de dosarul tău</p>
        <p className="mt-1 text-base leading-relaxed text-foreground">Nu ești preluat și apoi trimis automat la alt avocat. Mă ocup personal de strategie și de momentele esențiale ale mandatului.</p>
      </div>

      {/* Ce fac imediat după ce mă contactezi - 4 pași */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce fac imediat după ce mă contactezi</h2>
        </CardHeader>
        <CardContent className="pb-5">
          <p className="text-base leading-relaxed text-black mb-5">
            Nu trebuie să cunoști Codul de procedură penală. Spune-mi ce s-a întâmplat.
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-black">
            <li>
              <strong>Clarific situația</strong> - ce s-a întâmplat, unde este persoana, ce termen urmează.
            </li>
            <li>
              <strong>Verific actele</strong> - ordonanță, încheiere, citație și documentele disponibile.
            </li>
            <li>
              <strong>Evaluez riscul</strong> - ce măsură poate fi dispusă și ce argumente există.
            </li>
            <li>
              <strong>Pregătesc apărarea</strong> - contestare, respingere, revocare sau măsură mai ușoară.
            </li>
          </ol>
          <CallCta label="Sună acum - 031 632 01 83" />
        </CardContent>
      </Card>

      <GoogleReviewCard
        lang="ro"
        reviewText={`Dosar penal complicat, cu acuzații serioase. Domnul avocat Lamatic a identificat rapid punctele slabe ale dosarului și a gestionat totul cu fermitate. Disponibil oricând, explică totul clar, calm și realist, fără promisiuni false.\nRezultatul a fost mult peste ce speram.`}
      />

      {/* În ce situație te afli acum */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">În ce situație te afli acum?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4 pb-5">
          {PROBLEMS.map((item) => (
            <div key={item.to} className="space-y-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-foreground">{item.lead}</p>
              <p className="text-muted-foreground">{item.text}</p>
              <SubServiceLinkButton to={item.to}>{item.linkLabel}</SubServiceLinkButton>
            </div>
          ))}
          <div className="rounded-lg border border-accent bg-[#faf0e6] px-5 py-4">
            <h3 className="text-lg font-semibold">Nu știi dacă este reținere, control judiciar sau propunere de arestare?</h3>
            <p className="mt-1">Nu trebuie să cunoști termenii juridici. Spune-mi ce s-a întâmplat și îți spun ce trebuie verificat imediat.</p>
            <CallCta label="Sună acum - 031 632 01 83" />
          </div>
        </CardContent>
      </Card>

      {/* Ce trebuie să îmi spui */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce trebuie să îmi spui sau să îmi trimiți</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3 pb-5">
          <p className="font-semibold">Spune-mi 3 lucruri:</p>
          <p>unde este persoana · ce s-a întâmplat · când este următorul termen</p>
          <p className="font-semibold pt-2">Dacă le ai, trimite:</p>
          <p>ordonanța · încheierea · citația · actele de la Poliție/Parchet</p>
          <p className="font-semibold text-foreground pt-2">Nu ai toate documentele? Sună oricum.</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <WhatsAppDocsCta lang="ro" variant="green" />
          </div>
        </CardContent>
      </Card>

      {/* De ce să mă alegi */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să mă alegi pentru o măsură preventivă</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>
            <strong>18+ ani de experiență în drept penal.</strong> Am reprezentat clienți în cauze penale și în relația cu organele judiciare relevante, iar practica mea include dosare de white-collar crime și investigații complexe.
          </p>
          <p>
            <strong>Recunoaștere Legal 500 - White-Collar Crime - Next Generation Partners - România.</strong>
          </p>
          <div className="rounded-lg border border-accent bg-[#faf0e6] px-5 py-4">
            <p className="text-foreground"><span className="font-semibold">Mă ocup personal de dosarul tău.</span> Nu preiau dosarul pentru ca apoi să fii trimis automat la alt avocat. Mă ocup personal de strategie și de momentele esențiale ale mandatului.</p>
          </div>
          <p>
            <strong>Program extins și intervenție în situații urgente.</strong> Luni - Vineri: 06:00 - 22:00, Sâmbătă - Duminică: 09:00 - 20:00. Dacă este vorba despre reținere, audiere urgentă, percheziție, propunere de arestare sau un termen apropiat privind o măsură preventivă, sună-mă direct.
          </p>
          <p>
            <strong>Discreție și confidențialitate.</strong> Discuțiile cu avocatul și informațiile primite în exercitarea profesiei sunt protejate de regulile privind secretul profesional.
          </p>
          <CallCta label="Sună acum - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* Riscuri */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce riști dacă nu reacționezi la timp</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <ul className="list-disc pl-6 space-y-2">
            <li>Poți pierde un termen de 48 de ore.</li>
            <li>Poate fi dispusă sau menținută o măsură mai severă.</li>
            <li>Poți rămâne cu restricții care îți afectează munca și deplasările.</li>
            <li>Situația personală și profesională se poate complica rapid.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Ce sunt măsurile preventive */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce sunt măsurile preventive și în ce scop pot fi luate</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>Măsurile preventive sunt măsuri procesuale care pot restrânge libertatea sau exercitarea unor drepturi pe durata procesului penal. Pot fi luate numai în condițiile prevăzute de lege.</p>
          <p>
            Art. 202 CPP stabilește cadrul general, inclusiv necesitatea existenței unei suspiciuni rezonabile și cerința ca măsura să fie necesară pentru scopurile procesuale prevăzute de lege și proporțională cu gravitatea acuzației. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
          </p>
          <p>În esență, măsurile preventive urmăresc buna desfășurare a procesului penal, împiedicarea sustragerii de la urmărire penală sau judecată și prevenirea săvârșirii unei alte infracțiuni. Măsura concretă trebuie analizată prin raportare la situația individuală a cauzei.</p>
          <p className="font-semibold">Codul de procedură penală prevede 5 măsuri preventive: reținerea, controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu și arestarea preventivă.</p>
        </CardContent>
      </Card>


      {/* Metodă de lucru */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut - metoda mea de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
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
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pași practici în funcție de situația ta</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
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
          <CallCta label="Sună acum - 031 632 01 83" />
        </CardContent>
      </Card>

      {/* FAQ */}
      <ServiceFaq
        title="Întrebări frecvente despre măsurile preventive"
        ordered
        items={FAQ.map((item) => ({ q: item.q, a: item.a }))}
      />

      {/* Ai nevoie de ajutor acum */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ai nevoie de ajutor acum?</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
          <p>Dacă ție sau unei persoane apropiate i s-a dispus reținerea, i se propune sau i s-a dispus arestarea preventivă, i s-a impus control judiciar, are probleme cu obligațiile acestuia, este în arest la domiciliu, i-a fost prelungită o măsură ori vrea să conteste, să solicite revocarea sau înlocuirea cu o măsură mai puțin severă, nu trebuie să știi singur ce cerere trebuie formulată.</p>
          <p>Spune-mi ce s-a întâmplat și verificăm ce opțiuni procedurale există în situația concretă.</p>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact - evaluare inițială gratuită</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4 pb-5">
          <p className="font-semibold">Dacă este o situație urgentă, spune de la început: „Este vorba despre o măsură preventivă.”</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum - 031 632 01 83</a>
            </Button>
            <WhatsAppDocsCta lang="ro" />
            <Button asChild variant="outline">
              <Link to="/contact">Trimite-mi actele pe email</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resurse oficiale */}
      <Card className="mt-12 md:mt-16 border-accent">
        <CardHeader className="pb-3">
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse oficiale</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2 pb-5">
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
