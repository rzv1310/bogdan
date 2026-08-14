import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";

const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/masuri-preventive";
const TITLE = "Avocat Măsuri Preventive București – Intervenție Imediată | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat măsuri preventive București - reținere, control judiciar, arest la domiciliu, arestare preventivă. 18+ ani experiență. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre control judiciar, arest la domiciliu și arestare preventivă?",
    a: "Toate trei limitează libertatea persoanei cercetate, dar în grade diferite: controlul judiciar impune doar anumite obligații (fără privare de libertate), arestul la domiciliu obligă la rămânerea la adresa indicată, iar arestarea preventivă înseamnă privare efectivă de libertate, într-un loc de detenție.",
  },
  {
    q: "Cât poate dura arestarea preventivă în cursul urmăririi penale?",
    a: "Este dispusă inițial pentru cel mult 30 de zile și poate fi prelungită, tot cu câte cel mult 30 de zile, până la un total maxim de 180 de zile în cursul urmăririi penale.",
  },
  {
    q: "Cum se contestă o măsură preventivă?",
    a: "Prin contestație formulată împotriva încheierii judecătorului de drepturi și libertăți, care se soluționează, de regulă, în termen de 5 zile de la înregistrare (art. 204 CPP). Termenele sunt scurte, motiv pentru care reacția rapidă contează enorm.",
  },
  {
    q: "Poate fi înlocuită o măsură preventivă cu una mai ușoară?",
    a: "Da. Măsura preventivă poate fi înlocuită sau revocată, din oficiu ori la cerere, atunci când temeiurile care au determinat-o au încetat sau au apărut împrejurări noi (art. 242 CPP).",
  },
  {
    q: "Cine poate dispune arestarea preventivă sau arestul la domiciliu?",
    a: "Doar un judecător - judecătorul de drepturi și libertăți în cursul urmăririi penale, judecătorul de cameră preliminară sau instanța de judecată, ulterior. Nici procurorul, nici poliția nu pot dispune singuri aceste măsuri.",
  },
  {
    q: "Ce obligații pot fi impuse printr-un control judiciar?",
    a: "De regulă: prezentarea periodică la organul judiciar, interdicția de a părăsi localitatea sau țara fără încuviințare, interdicția de a lua legătura cu anumite persoane sau alte obligații stabilite expres, proporțional cu fapta cercetată.",
  },
  {
    q: "Cât costă un avocat pentru contestarea unei măsuri preventive?",
    a: "Onorariul depinde de urgență, complexitatea dosarului și etapa procesuală. Ofer o primă discuție gratuită pentru evaluarea situației și un tarif estimativ transparent. Sunați-mă la +40 (31) 632 01 83.",
  },
  {
    q: "Pot ieși din arest la domiciliu pentru muncă sau tratament medical?",
    a: "În anumite condiții, judecătorul poate permite excepții de la obligația de a rămâne la domiciliu, dacă acestea sunt justificate și solicitate corespunzător.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră la termenele privind măsura preventivă?",
    a: "Da, mă ocup personal de dosar, de la prima discuție până la soluționarea definitivă a măsurii preventive, rămânând avocatul dumneavoastră de contact pe tot parcursul cauzei.",
  },
];

const CTA_CLASS =
  "relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none";

function CallCta({ label = "Sună acum" }: { label?: string }) {
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

export default function MasuriPreventive() {
  useSEO({
    canonical: "/servicii/masuri-preventive",
    locale: "ro_RO",
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
          { "@type": "ListItem", position: 2, name: "Servicii", item: "https://avocatpenalbucuresti.ro/#servicii" },
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
      <h1 className="text-2xl font-semibold mb-4">
        Avocat Măsuri Preventive București – Intervenție Imediată | Bogdan Lamatic
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Sunt Bogdan Lamatic, avocat în Baroul București, cu peste 18 ani de experiență în drept penal. Intervin ca avocat de măsuri preventive în București în cazuri de reținere, control judiciar, control judiciar pe cauțiune, arest la domiciliu și arestare preventivă, din prima oră în care măsura este propusă sau dispusă, de regulă ca urmare a unei{" "}
          <Link to="/servicii/urmarire-penala" className="text-primary underline underline-offset-2">
            măsuri apărute în faza de urmărire penală
          </Link>
          .
        </p>
        <p>
          <strong>O măsură preventivă îți poate limita libertatea, mișcarea sau activitatea profesională încă din faza de urmărire penală, înainte de orice condamnare.</strong> De aceea, prezența unui avocat exact în momentul în care măsura este propusă - nu ulterior - poate face diferența între respingerea propunerii, o măsură mai ușoară sau menținerea celei mai severe variante.
        </p>
        <p>
          Sunt recunoscut de Legal 500 ca „Next Generation Partner” (White-Collar Crime) 2021–2024 și am reprezentat clienți în fața judecătorilor de drepturi și libertăți, a judecătorilor de cameră preliminară și a instanțelor de judecată, în dosare aflate sub control judiciar, arest la domiciliu sau arestare preventivă.
        </p>
      </div>

      <CallCta />

      <p className="mt-3 text-sm text-muted-foreground">
        <span className="text-yellow-400" aria-hidden="true">★★★★★</span> 5,0 din 27 de recenzii Google
      </p>

      <div className="mt-6">
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
              <BreadcrumbPage>Măsuri preventive</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Ce sunt măsurile preventive */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Ce sunt măsurile preventive și cine le poate dispune
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Măsurile preventive sunt instrumente procesuale prin care organele judiciare limitează libertatea sau mișcarea unei persoane pe durata procesului penal, atunci când există probe sau indicii temeinice că a comis o infracțiune și când măsura este necesară pentru buna desfășurare a procesului, pentru a împiedica sustragerea de la urmărire penală sau judecată, ori pentru a preveni o nouă infracțiune (art. 202 CPP). Orice măsură preventivă trebuie să fie <strong>proporțională</strong> cu gravitatea acuzației. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
          </p>
          <p>Codul de procedură penală prevede cinci categorii de măsuri preventive (art. 202 alin. 4 CPP):</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Reținerea</strong> - dispusă de organul de cercetare penală sau de procuror, doar în cursul urmăririi penale, pentru cel mult 24 de ore.</li>
            <li><strong>Controlul judiciar</strong> - poate fi dispus de procuror sau de judecătorul de drepturi și libertăți, cu o serie de obligații pe care persoana cercetată trebuie să le respecte.</li>
            <li><strong>Controlul judiciar pe cauțiune</strong> - similar controlului judiciar, condiționat de depunerea unei sume de bani stabilite de instanță.</li>
            <li><strong>Arestul la domiciliu</strong> - dispus doar de judecător, cu obligația de a rămâne la adresa indicată, cu excepțiile permise expres.</li>
            <li><strong>Arestarea preventivă</strong> - cea mai severă măsură, dispusă doar de judecător, pentru cel mult 30 de zile inițial, cu posibilitatea prelungirii, în cursul urmăririi penale, până la un total de cel mult 180 de zile.</li>
          </ol>
          <p>
            Ca avocat de măsuri preventive, intervin la fiecare dintre aceste etape - de la audierea în fața procurorului, până la contestarea încheierii judecătorului de drepturi și libertăți.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* Cum te apăr la fiecare măsură */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te apăr la fiecare dintre cele 5 măsuri preventive</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Reținere.</strong> Sunt prezent alături de tine încă din momentul reținerii, verific legalitatea acesteia și pregătesc, dacă e cazul, apărarea pentru audierea din fața procurorului privind eventuala propunere de arestare preventivă. Reținerea nu poate depăși 24 de ore.
          </p>
          <p>
            <strong>Control judiciar.</strong> Analizez obligațiile impuse (interdicția de a părăsi localitatea/țara, prezentarea periodică la organul judiciar etc.), verific dacă sunt proporționale cu fapta reținută în sarcina ta și, atunci când există temei, cer ridicarea sau modificarea unora dintre ele.
          </p>
          <p>
            <strong>Control judiciar pe cauțiune.</strong> Te asist în stabilirea și negocierea cuantumului cauțiunii și în demersurile pentru înlocuirea unei măsuri mai severe (arest la domiciliu sau arestare preventivă) cu această variantă.
          </p>
          <p>
            <strong>Arest la domiciliu.</strong> Formulez apărări pentru evitarea acestei măsuri sau, dacă a fost deja dispusă, cer înlocuirea ei cu o măsură mai ușoară, respectiv reglementarea corectă a excepțiilor de la obligația de a rămâne la domiciliu (de exemplu, pentru muncă sau tratament medical, unde legea o permite).
          </p>
          <p>
            <strong>Arestare preventivă.</strong> Este măsura care necesită cea mai rapidă intervenție. Formulez apărări în fața judecătorului de drepturi și libertăți încă de la propunerea inițială, contest prelungirile (art. 204 CPP) și cer, atunci când există temei, înlocuirea cu o măsură neprivativă de libertate.
          </p>
          <CallCta />
        </CardContent>
      </Card>

      {/* Metodă de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut | Metodă de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>A) Intervenție rapidă la propunerea măsurii.</strong> Din momentul în care afli despre o propunere de măsură preventivă, mă implic imediat în pregătirea apărării - analizez actele dosarului la care am acces și identific argumentele relevante pentru respingerea sau atenuarea propunerii.
          </p>
          <p>
            <strong>B) Verificarea condițiilor legale.</strong> Verific dacă sunt îndeplinite condițiile generale (art. 202 CPP) și cele specifice fiecărei măsuri, precum și dacă măsura solicitată este proporțională cu fapta și cu circumstanțele personale.
          </p>
          <p>
            <strong>C) Contestarea și cererile de înlocuire.</strong> Formulez contestații împotriva încheierilor prin care se dispune sau se prelungește o măsură preventivă (art. 204 CPP) și cereri de revocare sau înlocuire cu o măsură mai ușoară, ori de câte ori temeiurile inițiale au încetat sau au apărut împrejurări noi (art. 242 CPP).
          </p>
          <p>
            <strong>D) Reprezentare pe toată durata măsurii.</strong> Monitorizez respectarea termenelor legale, verific periodic dacă mai subzistă temeiurile măsurii și reacționez imediat la orice propunere de prelungire, până la finalizarea urmăririi penale sau a procesului.
          </p>
          <CallCta label="Vreau avocat!" />
        </CardContent>
      </Card>

      {/* Riscuri */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">
            Ce riști fără avocat la luarea sau prelungirea unei măsuri preventive
          </h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Poți primi o măsură mai severă decât era necesar</strong>, dacă nimeni nu argumentează în fața judecătorului o variantă proporțională (control judiciar în loc de arest la domiciliu, de exemplu).
            </li>
            <li>
              <strong>Poți rata termenul de contestație.</strong> Contestația împotriva încheierii privind măsura preventivă se soluționează rapid, de regulă în 5 zile de la înregistrare (art. 204 CPP) - fără reprezentare, poți pierde această fereastră.
            </li>
            <li>
              <strong>Poți respecta inutil obligații excesive</strong> dintr-un control judiciar, atunci când nimeni nu a cerut, la momentul potrivit, adaptarea sau ridicarea lor.
            </li>
            <li>
              <strong>Poți sta arestat preventiv mai mult decât este necesar</strong>, dacă temeiurile inițiale au încetat, dar nimeni nu formulează la timp o cerere de revocare sau înlocuire.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Pași practici */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pașii practici, în funcție de măsura care ți se aplică</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Ai fost reținut și urmează audierea privind o eventuală arestare preventivă.</strong> Sună-mă imediat - reținerea durează maximum 24 de ore, iar pregătirea apărării pentru audierea din fața judecătorului de drepturi și libertăți trebuie făcută cât mai repede.
          </p>
          <p>
            <strong>Ți s-a comunicat o propunere de arestare preventivă sau de arest la domiciliu.</strong> Contactează-mă înainte de termenul fixat pentru soluționarea propunerii - acesta este momentul cel mai important pentru a evita măsura privativă de libertate.
          </p>
          <p>
            <strong>Ești deja sub control judiciar și consideri că unele obligații sunt excesive.</strong> Putem analiza situația ta concretă și formula o cerere de modificare sau ridicare a obligațiilor care nu mai sunt necesare.
          </p>
          <p>
            <strong>Vrei să contești o măsură deja dispusă sau prelungită.</strong> Verific termenul de contestație rămas și pregătesc, dacă mai este posibil, calea de atac corespunzătoare (art. 204 CPP).
          </p>
          <CallCta />
        </CardContent>
      </Card>

      {/* De ce să mă alegi */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce să mă alegi</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Am peste 18 ani de experiență în drept penal și sunt recunoscut de Legal 500 timp de cinci ani consecutivi ca Next Generation Partner. Am reprezentat clienți la toate cele cinci tipuri de măsuri preventive, în dosare aflate în fața Poliției, Parchetelor, DNA, DIICOT și instanțelor de toate gradele.
          </p>
          <p>
            <strong>Mă ocup personal de fiecare dosar.</strong> Nu trimit un coleg în locul meu la audieri sau la termenele privind măsurile preventive - rămân avocatul tău de contact pe tot parcursul cauzei, cu discreție absolută.
          </p>
          <p>
            <strong>Sunt disponibil aproape non-stop.</strong> Propunerile de măsuri preventive nu așteaptă un program de birou, de aceea pot fi contactat de la ora 6 dimineața până seara târziu, inclusiv în weekend.
          </p>
          <CallCta label="Vreau avocat!" />
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
                <p className="mt-1">
                  {item.q.startsWith("Cât costă") ? (
                    <>
                      Onorariul depinde de urgență, complexitatea dosarului și etapa procesuală. Ofer o primă discuție gratuită pentru evaluarea situației și un tarif estimativ transparent. Sunați-mă la{" "}
                      <a href="tel:+40316320183" className="text-primary underline underline-offset-2">+40 (31) 632 01 83</a>.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Evaluare inițială gratuită</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Dacă ție sau unei persoane apropiate i se propune sau i s-a dispus deja o măsură preventivă, timpul contează. Sună-mă acum pentru o evaluare inițială gratuită și află imediat care sunt pașii următori.
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
              Codul de procedură penală - Titlul V, Măsurile preventive și alte măsuri procesuale (art. 202–242 CPP), inclusiv reținerea, controlul judiciar, controlul judiciar pe cauțiune, arestul la domiciliu și arestarea preventivă. (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Codul de procedură penală - calea de atac împotriva încheierilor privind măsurile preventive (art. 204 CPP). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Codul de procedură penală - încetarea de drept, revocarea și înlocuirea măsurilor preventive (art. 241–242 CPP). (<a href={LEGISLATIE} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
