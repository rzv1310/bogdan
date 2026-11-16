import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicesQuickLinks from "@/components/ServicesQuickLinks";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewStars from "@/components/services/GoogleReviewStars";

const ORIGIN = "https://avocatpenalbucuresti.ro";
const PATH = "/delapidare-universitatea-bucuresti-arestare";
const TITLE = "Dosar de delapidare la Universitatea din București | Avocat Bogdan Lamatic";
const H1 = "Dosarul taxelor de la Universitatea din București: de ce o acuzație de delapidare nu înseamnă automat arestare";
const DESC =
  "Dosarul taxelor de la Universitatea din București: ce trebuie dovedit la delapidare, de ce prejudiciul nu impune arestarea și ce presupune controlul judiciar.";
const CRUMB = "Delapidare la Universitatea din București";

const CP = "https://lege5.ro/Gratuit/gezdmnrzgi/codul-penal-din-2009";
const CPP = "https://lege5.ro/Gratuit/geztkobvha/codul-de-procedura-penala-din-2010";
const UB = "https://unibuc.ro/precizari-ale-universitatii-din-bucuresti-cu-privire-la-informatiile-false-aparute-in-presa-despre-situatia-delapidarii-din-fondurile-universitatii-din-bucuresti/";

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline">{children}</a>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold mb-3 text-foreground">{children}</h2>
);

export default function DelapidareUniversitateaBucuresti() {
  useSEO({
    title: TITLE,
    description: DESC,
    keywords: "delapidare Universitatea din București, dosar delapidare, arestare preventivă, control judiciar, art. 295 Cod penal, avocat delapidare",
    canonical: PATH,
    locale: "ro_RO",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Resurse", item: `${ORIGIN}/blog` },
          { "@type": "ListItem", position: 3, name: CRUMB, item: `${ORIGIN}${PATH}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: H1,
        description: DESC,
        inLanguage: "ro-RO",
        datePublished: "2026-11-16",
        dateModified: "2026-11-16",
        mainEntityOfPage: `${ORIGIN}${PATH}`,
        author: { "@type": "Person", name: "Bogdan Lamatic", url: `${ORIGIN}/despre-mine` },
        publisher: { "@id": `${ORIGIN}/#legalservice` },
        citation: [
          { "@type": "Legislation", name: "Codul penal", url: CP },
          { "@type": "Legislation", name: "Codul de procedură penală", url: CPP },
        ],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 flex flex-col">
        <article className="max-w-3xl text-zinc-700 leading-relaxed">
          <h1 className="text-2xl font-semibold mb-4 text-foreground">{H1}</h1>
          <p className="mb-3">
            <strong>Procurorii au cerut arestarea preventivă a două dintre persoanele cercetate în dosarul presupusei delapidări de la Universitatea din București. Judecătoria Sectorului 5 a respins propunerea și a dispus control judiciar, potrivit informațiilor comunicate de Parchet și publicate pe 11 noiembrie 2026. Prejudiciul invocat de anchetatori depășește 1,6 milioane de lei.</strong>
          </p>
          <p className="mb-10">
            Decizia pune în discuție o diferență esențială: existența unei acuzații penale și necesitatea arestării sunt chestiuni juridice distincte. Valoarea prejudiciului contează, dar nu înlocuiește condițiile legale pentru privarea de libertate.
          </p>

          <section className="mb-10">
            <H2>Ce se cunoaște despre ancheta din București</H2>
            <p className="mb-3">
              Potrivit Parchetului de pe lângă Judecătoria Sectorului 5, trei persoane sunt cercetate pentru delapidare, fals intelectual, uz de fals și fals informatic, în formă continuată. Anchetatorii susțin că acestea și-ar fi însușit taxe achitate de studenți, anulând chitanțe și omițând înregistrarea operațiunilor.
            </p>
            <p className="mb-3">
              Propunerea de arestare pentru două inculpate a fost formulată pe 6 noiembrie. Instanța a ales controlul judiciar. Pentru a treia persoană, procurorii au dispus aceeași măsură preventivă.
            </p>
            <p className="mb-3">
              În <Ext href={UB}>precizările publicate pe 13 noiembrie</Ext>, Universitatea a arătat că persoanele vizate au lucrat la Casierie, nu ca secretare. Instituția afirmă că neregulile au fost descoperite prin verificări interne și că niciun student nu a fost afectat.
            </p>
            <p>
              Sursele consultate nu prezintă motivarea judecătorului. Prin urmare, nu putem afirma de ce a fost respinsă concret propunerea și nici că soluția relatată este definitivă.
            </p>
          </section>

          <section className="mb-10">
            <H2>Ce trebuie demonstrat într-o acuzație de delapidare</H2>
            <p className="mb-3">
              <Ext href={CP}>Art. 295 din Codul penal</Ext> incriminează însușirea, folosirea sau traficarea, în interes propriu ori pentru altul, a banilor, valorilor sau bunurilor gestionate ori administrate de un funcționar public. Pentru această formă, legea prevede închisoare de la 2 la 7 ani și interzicerea exercitării dreptului de a ocupa o funcție publică.
            </p>
            <p className="mb-3">
              În analiza unei asemenea acuzații contează atribuțiile efective ale persoanei, accesul la bani și documente, operațiunile imputate și probele care le leagă de aceasta. Un deficit contabil nu explică, singur, cine l-a produs și prin ce conduită.
            </p>
            <p>
              Într-un dosar cu mai multe persoane, apărarea trebuie să poată verifica separat faptele atribuite fiecăreia. <strong>Art. 5 alin. (2) din Codul de procedură penală</strong> obligă organele de urmărire penală să administreze probe atât în favoarea, cât și în defavoarea suspectului sau inculpatului.
            </p>
          </section>

          <section className="mb-10">
            <H2>De ce prejudiciul nu face arestarea obligatorie</H2>
            <p className="mb-3">
              <Ext href={CPP}>Art. 202 alin. (1) și (3) din Codul de procedură penală</Ext> cere ca măsura preventivă să fie necesară pentru unul dintre scopurile prevăzute de lege și proporțională cu gravitatea acuzației.
            </p>
            <p className="mb-3">
              Scopurile sunt asigurarea bunei desfășurări a procesului, împiedicarea sustragerii de la urmărire sau judecată și prevenirea săvârșirii unei alte infracțiuni. <strong>Arestarea preventivă nu este o pedeapsă aplicată înaintea judecății.</strong>
            </p>
            <p className="mb-3">
              <Ext href={CPP}>Art. 223 din Codul de procedură penală</Ext> reglementează condițiile speciale. Printre situațiile relevante se află fuga sau pregătirile de sustragere, încercarea de influențare a martorilor ori de distrugere a probelor și presiunile asupra persoanei vătămate.
            </p>
            <p className="mb-3">
              Distinct, alin. (2) permite arestarea pentru anumite infracțiuni, inclusiv pentru cele care ating pragul legal de pedeapsă, dacă evaluarea împrejurărilor arată că privarea de libertate este necesară pentru înlăturarea unei stări de pericol pentru ordinea publică. Judecătorul trebuie să examineze gravitatea și circumstanțele faptei, antecedentele și împrejurările referitoare la persoana inculpatului.
            </p>
            <p>
              Așadar, <strong>cuantumul mare al prejudiciului poate conta în evaluare, dar nu produce automat un mandat de arestare</strong>. Necesitatea măsurii trebuie justificată în cazul concret.
            </p>
          </section>

          <section className="mb-10">
            <H2>Respingerea arestării nu înseamnă achitare</H2>
            <p className="mb-3">
              Conform <Ext href={CPP}>art. 227 din Codul de procedură penală</Ext>, judecătorul respinge propunerea dacă nu sunt îndeplinite condițiile <Link to="/servicii/masuri-preventive" className="underline">arestării preventive</Link>. Dacă sunt întrunite cerințele legale, poate dispune o altă măsură, inclusiv controlul judiciar.
            </p>
            <p className="mb-3">
              Această soluție privește măsura preventivă. Nu tranșează vinovăția și nu închide ancheta.
            </p>
            <p>
              În același timp, persoana cercetată nu trebuie să demonstreze că este nevinovată pentru a beneficia de prezumția de nevinovăție. <Ext href={CPP}>Art. 4 din Codul de procedură penală</Ext> o protejează până la stabilirea vinovăției printr-o hotărâre penală definitivă.
            </p>
          </section>

          <section className="mb-10">
            <H2>Ce obligații presupune controlul judiciar</H2>
            <p className="mb-3">Controlul judiciar permite continuarea cercetărilor fără încarcerare, dar impune obligații.</p>
            <p className="mb-2">
              Potrivit <Ext href={CPP}>art. 215 din Codul de procedură penală</Ext>, inculpatul trebuie:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>să se prezinte la organul judiciar ori de câte ori este chemat;</li>
              <li>să anunțe imediat schimbarea locuinței;</li>
              <li>să respecte programul de prezentare la poliția desemnată cu supravegherea.</li>
            </ul>
            <p>
              Pot fi impuse și obligații suplimentare, precum limitarea deplasărilor. Acestea trebuie verificate în actul prin care s-a dispus măsura; nu pot fi deduse dintr-o știre.
            </p>
          </section>

          <section className="mb-10">
            <H2>Ce poate verifica apărarea înaintea unei decizii de arestare</H2>
            <p className="mb-3">
              Într-un dosar de delapidare, apărarea poate analiza documentele contabile, atribuțiile de serviciu, accesul la aplicațiile de gestiune și modul de calcul al prejudiciului. Separat, poate contesta argumentele pentru care acuzarea consideră necesară privarea de libertate.
            </p>
            <p className="mb-3">
              La soluționarea propunerii de arestare, asistența avocatului este obligatorie. <Ext href={CPP}>Art. 225 din Codul de procedură penală</Ext> prevede și posibilitatea avocatului de a studia dosarul, la cerere. Inculpatul are dreptul să nu dea declarații.
            </p>
            <p>
              În cazul Universității din București, informația confirmată este respingerea propunerii de arestare și alegerea controlului judiciar pentru două dintre inculpate. Motivele concrete aparțin hotărârii judecătorești, nu presupunerilor făcute pornind de la valoarea prejudiciului.
            </p>
          </section>

          <Card className="mb-10 border border-accent bg-[#faf0e6] p-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ești cercetat pentru delapidare sau ai fost chemat la audieri?</h2>
            <p className="mb-5">
              Discută cu avocatul Bogdan Lamatic despre acuzație, documentele relevante și opțiunile de apărare înainte de audiere.
            </p>
            <Button asChild variant="premium" size="lg" className="border border-hero-foreground" aria-label="Solicită o consultație">
              <a href="tel:+40745506443">
                <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Solicită o consultație</span>
              </a>
            </Button>
          </Card>
        </article>

        <section className="mb-8">
          <LawyerBioBlock path={PATH} lang="ro" />
          <GoogleReviewStars lang="ro" className="mt-3" />
        </section>

        <section className="mb-12">
          <ServicesQuickLinks exclude={["/blog", "/contact"]} />
        </section>

        <section className="order-last mt-8 md:order-first md:mt-0 md:mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Acasă</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/blog">Resurse</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>{CRUMB}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
      </main>
    </div>
  );
}
