import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";
import { MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicesQuickLinks from "@/components/ServicesQuickLinks";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewStars from "@/components/services/GoogleReviewStars";

const ORIGIN = "https://avocatpenalbucuresti.ro";
const PATH = "/protest-bucuresti-amenda-sau-dosar-penal";
const TITLE = "Protest București: amendă sau dosar penal? | Avocat Bogdan Lamatic";
const H1 = "Doi participanți imobilizați la protestul din București: care este diferența dintre amendă și dosar penal?";
const DESC =
  "Imobilizat sau amendat la protestul din Parcul Izvor? Diferența dintre amendă, reținere și dosar penal, drepturile tale și termenul de contestare de 15 zile.";
const CRUMB = "Protest București: amendă sau dosar penal";

const CONSTITUTIE = "https://lege5.ro/Gratuit/gy3donjs/constitutia-din-1991";
const OG2 = "https://lege5.ro/Gratuit/gm2dmmbu/ordonanta-nr-2-2001-privind-regimul-juridic-al-contraventiilor";
const L61 = "https://lege5.ro/Gratuit/gm3dcnzsgyyq/art-2-lege-61-1991?dp=gmytaobvgaztsni";
const L218 = "https://lege5.ro/Gratuit/gm3deojzgy4a/legea-nr-218-2002-privind-organizarea-si-functionarea-politiei-romane";
const CPP = "https://lege5.ro/Gratuit/geztkobvha/codul-de-procedura-penala-din-2010";

const WA_ANALIZA = `https://wa.me/40745506443?text=${encodeURIComponent("Bună ziua, am fost amendat după un protest în București și aș dori o analiză a procesului-verbal.")}`;
const WA_CONSULT = `https://wa.me/40745506443?text=${encodeURIComponent("Bună ziua, aș dori o consultație privind o situație apărută după un protest în București.")}`;

const Ext = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="underline">{children}</a>
);

export default function ProtestBucurestiAmendaDosarPenal() {
  useSEO({
    title: TITLE,
    description: DESC,
    keywords: "protest București amendă, imobilizat la protest, contestare amendă protest, reținere 24 ore, dosar penal protest, Parcul Izvor",
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
          { "@type": "Legislation", name: "Constituția României", url: CONSTITUTIE },
          { "@type": "Legislation", name: "OG nr. 2/2001 privind regimul juridic al contravențiilor", url: OG2 },
          { "@type": "Legislation", name: "Legea nr. 61/1991", url: L61 },
          { "@type": "Legislation", name: "Legea nr. 218/2002 privind organizarea și funcționarea Poliției Române", url: L218 },
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
            <strong>Doi participanți la protestul din Parcul Izvor, din 14 noiembrie 2026, au fost imobilizați de jandarmi, potrivit informațiilor comunicate de instituție și relatate de Radio România Actualități. Autoritățile au anunțat sancționarea contravențională pentru un comportament descris drept agresiv verbal. Relatarea nu confirmă reținerea penală sau arestarea celor doi.</strong>
          </p>
          <p className="mb-3">
            Distincția contează. O persoană imobilizată la un protest nu devine, prin acest fapt, vinovată de o infracțiune. Iar explicația oferită public de autorități poate fi verificată și contestată prin mijloacele prevăzute de lege.
          </p>
          <p className="mb-3">
            În informațiile citate nu sunt prezentate procesele-verbale, cuvintele exacte imputate participanților sau punctul lor de vedere. Aceste lipsuri nu permit o concluzie despre legalitatea fiecărei intervenții.
          </p>
          <p className="mb-10 border border-[#e8d9c5] rounded-md p-4 bg-[#faf0e6]">
            <strong>Participanții au dreptul să ceară justificarea măsurilor luate împotriva lor, să conteste sancțiunile și să beneficieze de apărare.</strong>
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Dreptul la protest este punctul de plecare</h2>
            <p className="mb-3">
              <Ext href={CONSTITUTIE}>Articolul 39 din Constituție</Ext> protejează libertatea întrunirilor pașnice și fără arme. Exprimarea nemulțumirii față de autorități nu este, în sine, o faptă ilegală.
            </p>
            <p className="mb-3">
              În cazul unei sancțiuni, trebuie identificată conduita concretă a persoanei. Formula „agresiv verbal”, folosită într-o comunicare publică, nu înlocuiește descrierea faptei și indicarea temeiului legal.
            </p>
            <p>
              Potrivit <Ext href={OG2}>art. 16 alin. (1) din OG nr. 2/2001</Ext>, procesul-verbal trebuie să descrie fapta, data, ora, locul și împrejurările relevante, precum și actul normativ care o sancționează. Aceste informații îi permit persoanei să înțeleagă acuzația și să se apere.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Amenda contravențională nu este o condamnare penală</h2>
            <p className="mb-3">
              <Ext href={L61}>Art. 2 pct. 1 din Legea nr. 61/1991</Ext> sancționează anumite injurii, expresii jignitoare sau vulgare și amenințări săvârșite în public, în condițiile descrise de lege, dacă faptele nu constituie infracțiuni.
            </p>
            <p className="mb-3">
              Această prevedere nu permite sancționarea oricărei critici adresate unui reprezentant al statului. Trebuie analizate expresiile folosite, contextul și îndeplinirea condițiilor legale. Nu rezultă din relatarea citată că acesta este articolul aplicat efectiv celor doi participanți.
            </p>
            <p>
              O amendă contravențională se poate contesta. Nu reprezintă o condamnare penală și nu trebuie confundată cu amenda penală.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Imobilizarea, conducerea la sediu și reținerea sunt măsuri diferite</h2>
            <div className="overflow-x-auto mb-3">
              <table className="w-full text-sm border border-border bg-background">
                <thead>
                  <tr className="bg-[#faf0e6] text-left">
                    <th className="p-3 border-b border-border font-semibold text-foreground">Măsura</th>
                    <th className="p-3 border-b border-border font-semibold text-foreground">Ce înseamnă</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border-b border-border font-semibold">Imobilizarea</td><td className="p-3 border-b border-border">O intervenție fizică. Nu dovedește existența unei infracțiuni și nu echivalează, singură, cu reținerea penală.</td></tr>
                  <tr><td className="p-3 border-b border-border font-semibold">Conducerea la sediul poliției</td><td className="p-3 border-b border-border">O măsură pentru verificări, în condițiile legii. Nu este automat reținere pentru 24 de ore.</td></tr>
                  <tr><td className="p-3 border-b border-border font-semibold">Reținerea</td><td className="p-3 border-b border-border">O măsură preventivă într-un proces penal, dispusă de organul de cercetare penală sau de procuror, pentru cel mult 24 de ore.</td></tr>
                  <tr><td className="p-3 font-semibold">Arestarea preventivă</td><td className="p-3">O măsură decisă de judecător, în condiții distincte. Nu poate fi dispusă de jandarmul aflat la protest.</td></tr>
                </tbody>
              </table>
            </div>
            <p>
              Distincțiile rezultă din <Ext href={L218}>art. 36 din Legea nr. 218/2002</Ext> și din <Ext href={CPP}>art. 209 și 223 din Codul de procedură penală</Ext>. Ele nu stabilesc ce s-a întâmplat concret cu cei doi participanți, dincolo de informațiile publicate.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Dacă ești condus la sediul poliției, ai drepturi înainte de orice acuzație penală</h2>
            <p className="mb-3">
              Pentru măsura dispusă de polițist în baza <strong>art. 36 din Legea nr. 218/2002</strong>, verificările trebuie făcute imediat, în cel mult <strong>8 ore de la începerea deplasării</strong>. Dacă identitatea nu poate fi stabilită, durata totală poate ajunge la cel mult <strong>12 ore</strong>.
            </p>
            <p className="mb-3">
              Acestea sunt limite maxime, nu perioade care trebuie consumate integral. Polițistul trebuie să permită plecarea imediat după finalizarea activităților, dacă nu există un alt temei legal de privare de libertate.
            </p>
            <p className="mb-2">
              <Ext href={L218}>Art. 38 din aceeași lege</Ext> prevede, între altele, dreptul:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>să afli motivele conducerii la sediu și drepturile tale;</li>
              <li>să fii asistat de avocat și să comunici confidențial cu acesta;</li>
              <li>să nu dai declarații fără avocat, cu excepțiile legale privind identificarea și înlăturarea unui pericol iminent;</li>
              <li>să soliciți informarea unui membru al familiei;</li>
              <li>să fii consultat de un medic;</li>
              <li>să contești măsura în condițiile legii.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Reținerea pentru 24 de ore nu este o pedeapsă pentru comportamentul de la protest</h2>
            <p className="mb-3">
              Conform <Ext href={CPP}>art. 202 și 209 din Codul de procedură penală</Ext>, <Link to="/servicii/masuri-preventive" className="underline">reținerea</Link> presupune condiții legale: o suspiciune rezonabilă privind săvârșirea unei infracțiuni, necesitatea măsurii și proporționalitatea acesteia.
            </p>
            <p className="mb-3">
              Persoanei trebuie să i se comunice infracțiunea de care este suspectată și motivele reținerii. Audierea prealabilă presupune prezența unui avocat ales sau din oficiu, iar persoana își păstrează dreptul de a nu da declarații.
            </p>
            <p className="mb-3">
              Arestarea preventivă presupune o decizie judecătorească. În cursul urmăririi penale, procurorul formulează propunerea, iar judecătorul verifică îndeplinirea condițiilor. Asistența avocatului este obligatorie, potrivit <Ext href={CPP}>art. 224-226 din Codul de procedură penală</Ext>.
            </p>
            <p>
              Nici existența unui dosar penal, nici luarea unei măsuri preventive nu înlătură prezumția de nevinovăție, garantată de <strong>art. 4 din Codul de procedură penală</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ai primit amendă? Termenul de contestare este de 15 zile</h2>
            <p className="mb-3">
              <Ext href={OG2}>Art. 31-32 din OG nr. 2/2001</Ext> permit formularea plângerii contravenționale în <strong>15 zile de la înmânarea sau comunicarea procesului-verbal</strong>.
            </p>
            <p className="mb-3">
              Plângerea se poate depune la judecătoria de la locul presupusei contravenții sau la judecătoria de la domiciliul persoanei sancționate. Plângerea suspendă executarea, în condițiile art. 32 alin. (3). Instanța verifică legalitatea și temeinicia procesului-verbal, potrivit art. 34.
            </p>
            <p className="mb-2">Pentru pregătirea apărării:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>păstrează procesul-verbal și dovada datei comunicării;</li>
              <li>salvează filmările originale, inclusiv secvențele dinaintea intervenției;</li>
              <li>notează datele martorilor și cronologia faptelor;</li>
              <li>cere consemnarea obiecțiunilor tale în procesul-verbal, drept prevăzut de <strong>art. 16 alin. (7) din OG nr. 2/2001</strong>.</li>
            </ul>
          </section>

          <aside className="mb-10 rounded-lg border border-border bg-background p-5">
            <p className="font-semibold text-foreground mb-2">Consideri că ai fost amendat pe nedrept?</p>
            <p className="text-sm mb-4">Solicită o analiză a procesului-verbal pentru a afla ce motive de contestare pot exista în cazul tău.</p>
            <WhatsAppDocsCta href={WA_ANALIZA} rel="nofollow noopener noreferrer" label="Solicită analiza procesului-verbal" />
          </aside>

          <section className="mb-10">
            <p className="mb-3">
              În cazul protestului din 14 noiembrie, informațiile publicate nu sunt suficiente pentru a declara intervenția legală sau abuzivă. Tocmai de aceea, versiunea participanților, imaginile complete și actele întocmite contează.
            </p>
            <p>
              <strong>O sancțiune aplicată la protest nu este ultimul cuvânt. Persoana vizată are dreptul să ceară instanței verificarea ei.</strong>
            </p>
          </section>

          <Card className="mb-10 border border-accent bg-[#faf0e6] p-6">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ai fost amendat sau chemat la audieri după un protest în București?</h2>
            <p className="mb-5">
              Află ce poți contesta și cum îți poți pregăti apărarea. Discută cu avocatul Bogdan Lamatic despre situația ta și documentele primite.
            </p>
            <Button asChild variant="premium" size="lg" className="border border-hero-foreground" aria-label="Discută cu un avocat">
              <a href="tel:+40745506443">
                <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Discută cu un avocat</span>
              </a>
            </Button>
            <p className="mt-3 text-sm">
              <a href={WA_CONSULT} target="_blank" rel="nofollow noopener noreferrer" className="underline">Solicită o consultație pe WhatsApp</a>
            </p>
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
