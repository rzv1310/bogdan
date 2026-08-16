import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/urmarire-penala";
const TITLE = "Avocat Urmărire Penală București - Apărare din Prima Oră | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat urmărire penală București - apărare din prima oră: audieri, reținere, arestare preventivă, percheziții. 18+ ani experiență. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre suspect și inculpat?",
    a: "Suspectul este persoana față de care există indicii că a comis fapta cercetată (art. 307 CPP), dar împotriva sa nu s-a pus încă în mișcare acțiunea penală. Inculpatul este persoana față de care s-a dispus punerea în mișcare a acțiunii penale (art. 309 CPP) și care devine parte în procesul penal, cu drepturi procesuale mai extinse.",
  },
  {
    q: "Sunt obligat să mă prezint la audiere dacă primesc o citație?",
    a: "Da, prezentarea este, în principiu, obligatorie. Neprezentarea nejustificată poate avea consecințe, inclusiv aducerea silită. Recomand să mă contactați înainte de data fixată, pentru pregătirea declarației.",
  },
  {
    q: "Pot refuza să dau declarații pe parcursul urmăririi penale?",
    a: "Da. Suspectul și inculpatul au dreptul de a nu da nicio declarație, fără nicio consecință defavorabilă din acest refuz (art. 83 lit. a, coroborat cu art. 78 CPP). Decizia de a declara sau nu se ia întotdeauna în funcție de strategia de apărare din dosar.",
  },
  {
    q: "Cât costă un avocat pentru faza de urmărire penală?",
    a: "Onorariul depinde de complexitatea cauzei și de etapa în care intervin. Ofer o primă discuție gratuită, în urma căreia stabilim un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la +40 (31) 632 01 83.",
  },
  {
    q: "Ce se întâmplă dacă sunt reținut sau se propune arestarea mea preventivă?",
    a: "Reținerea nu poate depăși 24 de ore. Dacă procurorul propune arestarea preventivă, cauza ajunge în fața unui judecător de drepturi și libertăți, unde formulez apărări concrete pentru respingerea propunerii sau pentru o măsură preventivă mai puțin restrictivă, precum controlul judiciar.",
  },
  {
    q: "Pot avea avocat chiar dacă nu am fost încă citat oficial, dar știu că sunt vizat într-un dosar?",
    a: "Da. Puteți solicita asistență juridică din faza incipientă, înainte de orice citație oficială - este, de altfel, momentul cel mai potrivit pentru a construi o apărare solidă.",
  },
  {
    q: "Cât durează, de regulă, urmărirea penală?",
    a: "Legea nu prevede un termen maxim general pentru toate cazurile; durata depinde de complexitatea dosarului, numărul probelor și tipul infracțiunii. Voi urmări permanent stadiul dosarului și voi acționa pentru evitarea tergiversărilor nejustificate.",
  },
  {
    q: "Ce se întâmplă la finalul urmăririi penale?",
    a: "Procurorul poate dispune clasarea cauzei, renunțarea la urmărirea penală sau trimiterea dosarului în judecată. Fiecare dintre aceste soluții depinde de probele administrate și de argumentele aduse pe parcursul anchetei - motiv pentru care apărarea construită încă din primele audieri contează direct asupra rezultatului final.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră sau trimiteți pe altcineva din echipă?",
    a: "Mă ocup personal de dosar, de la prima discuție până la soluția procurorului și, dacă e cazul, în instanță. Rămân avocatul dumneavoastră de contact pe tot parcursul cauzei.",
  },
];

function CallCta({ label = "Sună-mă acum!" }: { label?: string }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-3">
      <Button asChild variant="premium" size="lg" className={CTA_CLASS} aria-label={`${label} - avocat urmărire penală`}>
        <a href="tel:+40316320183">
          <Phone className="mr-2 h-4 w-4" /> {label}
        </a>
      </Button>
    </div>
  );
}

const LEGISLATIE = "https://legislatie.just.ro/Public/DetaliiDocument/185907";

export default function UrmarirePenala() {
  useSEO({
    canonical: "/servicii/urmarire-penala",
    locale: "ro_RO",
    alternates: { ro: "/servicii/urmarire-penala", en: "/en/services/criminal-investigation", xDefault: "/servicii/urmarire-penala" },
    title: TITLE,
    description: DESCRIPTION,
    keywords: "avocat urmărire penală, avocat dosar penal, avocat faza de urmărire penală",
    robotsDirectives: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: "https://avocatpenalbucuresti.ro/" },
          { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/servicii" },
          { "@type": "ListItem", position: 3, name: "Urmărire penală", item: PAGE_URL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "Avocat urmărire penală București - Bogdan Lamatic",
        description: DESCRIPTION,
        url: PAGE_URL,
        areaServed: [
          { "@type": "Country", name: "România" },
          { "@type": "Place", name: "Uniunea Europeană" },
        ],
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
      <Breadcrumb className="mb-4 mt-3 md:mt-0">
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
            <BreadcrumbPage>Urmărire penală</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-2xl font-semibold mb-4">
        Avocat Urmărire Penală București - Apărare din Prima Oră a Anchetei
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground">
          <span className="block"><strong>În faza de urmărire penală, primele ore contează cel mai mult!</strong></span>
          <span className="block">Ce declari, ce semnezi și cum reacționezi în primele 24 de ore pot decide dacă dosarul se închide rapid sau se transformă într-un proces lung.</span>
          <span className="block">Nu aștepta prima chemare a organelor de urmarire penală ca să ceri ajutor.</span>
        </p>
      </div>

      <ServiceHeroCta lang="ro" ariaLabel="Sună-mă acum! - avocat urmărire penală" />

      <LawyerBioBlock path="/servicii/urmarire-penala" lang="ro" />

      <ServiceSubServices path="/servicii/urmarire-penala" />

      {/* Ce fac pentru tine */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce fac pentru tine în faza de urmărire penală</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Asistență și reprezentare la audieri</strong> - la Poliție, Parchet, DNA, DIICOT sau Parchetul European, ca avocat al suspectului sau al inculpatului (art. 78, art. 83 CPP). Te pregătesc înainte de audiere și sunt prezent efectiv, pentru ca nicio declarație să nu fie dată fără o strategie clară în spate.
            </li>
            <li>
              <strong>Apărare în caz de reținere sau arestare preventivă.</strong> Intervin imediat dacă ești reținut (art. 209-210 CPP) sau dacă procurorul propune arestarea preventivă (art. 223 și urm. CPP), formulând apărări încă din fața judecătorului de drepturi și libertăți.
            </li>
            <li>
              <strong>Contestarea măsurilor preventive.</strong> Atac controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu sau arestarea preventivă (art. 211-222 CPP) și cer înlocuirea sau revocarea lor ori de câte ori condițiile legale o permit. <a href="/servicii/masuri-preventive" className="text-primary underline underline-offset-2">Citește mai multe despre măsurile preventive</a>.
            </li>
            <li>
              <strong>Prezență la percheziții</strong> - domiciliare, informatice sau corporale (art. 157 și urm. CPP) - pentru a verifica legalitatea mandatului și a modului în care este efectuată percheziția.
            </li>
            <li>
              <strong>Acces la dosar și formulare de cereri, plângeri, excepții.</strong> Consult dosarul de urmărire penală (art. 94 CPP), formulez cereri de probe, excepții de nelegalitate și plângeri împotriva actelor procurorului atunci când este cazul.
            </li>
            <li>
              <strong>Negociere cu procurorul și soluții alternative.</strong> Analizez, în funcție de caz, posibilitatea unei renunțări la urmărirea penală (art. 318 CPP), a unei clasări (art. 314-315 CPP) sau a unui acord de recunoaștere a vinovăției (art. 478-488 CPP), atunci când servesc interesul tău.
            </li>
          </ol>
          <CallCta />
        </CardContent>
      </Card>

      {/* Cum te ajut */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut | Metodă de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A) Intervenție rapidă.</strong> Din momentul în care mă suni, evaluez situația: ai fost citat, reținut, percheziționat sau doar anunțat verbal? Stabilim imediat pașii următori, inclusiv dacă e nevoie de prezența mea de urgență.
          </p>
          <p>
            <strong>B) Strategie de apărare de la prima declarație.</strong> Analizez actul de sesizare, încadrarea juridică și probele existente, apoi stabilim împreună ce declari, ce nu declari și ce cereri formulăm încă din faza incipientă (art. 83 CPP).
          </p>
          <p>
            <strong>C) Contestarea măsurilor și verificarea legalității probelor.</strong> Verific respectarea drepturilor procesuale, legalitatea percheziției, a interceptărilor sau a altor mijloace de probă, și formulez plângeri sau excepții acolo unde există nereguli.
          </p>
          <p>
            <strong>D) Reprezentare completă până la soluția procurorului.</strong> Te reprezint personal pe tot parcursul urmăririi penale, indiferent dacă aceasta se finalizează prin clasare, renunțare la urmărire sau trimitere în judecată - și continui apărarea, fără întrerupere, dacă dosarul ajunge în instanță.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* De ce riști */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce riști dacă mergi singur la audiere</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Declarațiile date fără avocat pot fi folosite împotriva ta</strong> pe tot parcursul procesului penal, chiar dacă ulterior le nuanțezi sau le retragi.
            </li>
            <li>
              <strong>Nu știi ce ai voie să nu spui.</strong> Ai dreptul la tăcere, fără nicio consecință defavorabilă (art. 83 lit. a CPP) - dar puțini oameni cunosc exact cum și când să îl exercite.
            </li>
            <li>
              <strong>Poți rata termene esențiale</strong> pentru plângeri, cereri de probe sau contestarea unor măsuri, pentru că legea nu așteaptă până angajezi un avocat.
            </li>
            <li>
              <strong>Nu poți verifica singur legalitatea unei percheziții sau a unei rețineri</strong> - o neregulă procedurală necontestată la timp se poate „acoperi” ulterior.
            </li>
          </ul>
          <p>
            Un avocat de urmărire penală nu înseamnă că ai ceva de ascuns - înseamnă că cineva îți verifică fiecare pas, în timp real, cât încă mai poate schimba ceva.
          </p>
        </CardContent>
      </Card>

      {/* Pașii practici */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pașii practici, în funcție de situația ta</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Ai primit o citație de la Poliție sau Parchet.</strong> Nu ignora citația - lipsa nejustificată poate atrage consecințe. Sună-mă înainte de data audierii, ca să pregătim împreună declarația și să stabilim ce documente trebuie să ai la tine.
          </p>
          <p>
            <strong>Tu sau cineva apropiat a fost reținut.</strong> Contactează-mă imediat, indiferent de oră - reținerea durează maximum 24 de ore, iar timpul de reacție contează enorm. Ofer un număr de telefon accesibil de dimineața devreme până seara târziu, exact pentru astfel de situații.
          </p>
          <p>
            <strong>Urmează sau a avut loc o percheziție la tine acasă sau la firmă.</strong> Cere să vezi mandatul de percheziție înainte de a permite accesul, dacă e posibil, și sună-mă cât mai repede - pot fi prezent sau te pot îndruma telefonic pas cu pas.
          </p>
          <p>
            <strong>Ai aflat că ești vizat într-un dosar penal, dar nu ai fost încă citat oficial.</strong> Nu aștepta citația. O evaluare preventivă a situației tale îmi permite să pregătesc apărarea din timp, nu în ultimul moment.
          </p>
        </CardContent>
      </Card>

      {/* De ce să mă alegi */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să mă alegi</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Am peste 18 ani de experiență în drept penal și sunt recunoscut de Legal 500 timp de cinci ani consecutivi ca Next Generation Partner. Am reprezentat clienți în dosare de urmărire penală de toate tipurile - de la cauze simple, la anchete complexe instrumentate de DNA, DIICOT sau Parchetul European.
          </p>
          <p>
            <strong>Mă ocup personal de fiecare dosar.</strong> Nu trimit un coleg în locul meu la audieri sau la instanță - rămân avocatul tău de contact pe tot parcursul cauzei, cu discreție absolută.
          </p>
          <p>
            <strong>Sunt disponibil aproape non-stop.</strong> Situațiile de urmărire penală nu respectă un program de birou, de aceea pot fi contactat de la ora 6 dimineața până seara târziu, inclusiv în weekend.
          </p>
          <CallCta />
        </CardContent>
      </Card>

      {/* Ce este urmărirea penală */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Ce este urmărirea penală și de ce ai nevoie de avocat din prima fază
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Urmărirea penală este etapa în care organele de urmărire penală (poliție, procuror) strâng probe pentru a stabili dacă s-a comis o infracțiune și cine este responsabil. Ea începe, potrivit art. 305 din Codul de procedură penală, printr-o ordonanță de începere a urmăririi penale „cu privire la faptă”, iar atunci când există indicii că o anumită persoană a comis fapta, aceasta capătă <strong>calitatea de suspect</strong> (art. 307 CPP). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
          </p>
          <p>
            Mulți oameni cred că au nevoie de avocat abia „dacă se ajunge la proces”. În realitate, exact <strong>faza de urmărire penală este momentul în care se construiește sau se pierde apărarea</strong>: declarațiile date fără avocat, probele necontestate la timp sau termenele ratate pentru plângeri pot cântări decisiv mai târziu, în instanță.
          </p>
          <p>
            Ca avocat de urmărire penală, intervin din prima etapă pentru a-ți proteja drepturile, a verifica legalitatea probelor și a construi o strategie coerentă înainte ca dosarul să avanseze.
          </p>
        </CardContent>
      </Card>

      {/* FAQ */}
      <ServiceFaq
        title="Întrebări frecvente despre urmărirea penală"
        ordered
        items={FAQ.map((item) => ({
          q: item.q,
          a: item.q.startsWith("Cât costă") ? (
            <>
              Onorariul depinde de complexitatea cauzei și de etapa în care intervin. Ofer o primă discuție gratuită, în urma căreia stabilim un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la{" "}
              <a href="tel:+40316320183" className="text-primary underline underline-offset-2">+40 (31) 632 01 83</a>.
            </>
          ) : (
            item.a
          ),
        }))}
      />

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Evaluare inițială gratuită</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Situația ta din faza de urmărire penală nu poate aștepta. Sună-mă acum pentru o evaluare inițială gratuită și află imediat care sunt pașii următori pentru apărarea ta.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className={CTA_CLASS}>
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">Trimite email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resurse oficiale */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse oficiale (linkuri utile)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Codul de procedură penală - Titlul I, Urmărirea penală (art. 285-341), inclusiv dispozițiile privind drepturile suspectului și inculpatului (art. 78, art. 83). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Codul de procedură penală - măsurile preventive: reținerea, controlul judiciar, arestul la domiciliu, arestarea preventivă (art. 202-241 CPP). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Codul de procedură penală - acordul de recunoaștere a vinovăției (art. 478-488 CPP). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <RelatedServices current="/servicii/urmarire-penala" />

    </section>
  );
}
