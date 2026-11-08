import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicesQuickLinks from "@/components/ServicesQuickLinks";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewStars from "@/components/services/GoogleReviewStars";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";

const VIDEO_URL = "/media/te-suna-politia.mp4";
const POSTER_URL = "/media/te-suna-politia-poster.jpg";
const ORIGIN = "https://avocatpenalbucuresti.ro";
const PATH = "/te-cheama-politia-prin-telefon";
const TITLE = "Te cheamă poliția prin telefon? Ce întrebi și ce drepturi ai";
const DESC =
  "Te-a sunat poliția să mergi la secție? Află când este valabilă citarea telefonică și ce drepturi ai la audiere ca martor, suspect sau persoană vătămată.";

export default function TeCheamaPolitiaPrinTelefon() {
  useSEO({
    title: TITLE,
    description: DESC,
    keywords: "te cheamă poliția prin telefon, citare telefonică, drepturi la audiere, chemat la poliție",
    canonical: PATH,
    locale: "ro_RO",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Resurse", item: `${ORIGIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Te cheamă poliția prin telefon", item: `${ORIGIN}${PATH}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESC,
        inLanguage: "ro-RO",
        datePublished: "2026-11-03",
        dateModified: "2026-11-03",
        mainEntityOfPage: `${ORIGIN}${PATH}`,
        author: { "@type": "Person", name: "Bogdan Lamatic", url: `${ORIGIN}/despre-mine` },
        publisher: { "@id": `${ORIGIN}/#legalservice` },
        video: {
          "@type": "VideoObject",
          name: "Te sună poliția? Pune întrebarea asta înainte să spui „Da, vin”",
          description: "Ce întrebi când te cheamă poliția prin telefon și ce drepturi ai la audiere.",
          thumbnailUrl: `${ORIGIN}${POSTER_URL}`,
          contentUrl: `${ORIGIN}${VIDEO_URL}`,
          uploadDate: "2026-11-03",
          duration: "PT58S",
        },
      },
    ],
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 flex flex-col">
        <article className="max-w-3xl text-zinc-700 leading-relaxed">
          <h1 className="text-2xl font-semibold mb-4 text-foreground">Te sună poliția? Pune întrebarea asta înainte să spui „Da, vin”.</h1>
          <p className="mb-6">
            „Bună ziua, de la poliție. Veniți până la secție, doar să discutăm puțin.” Poate că primul impuls este să iei cheile și să pleci. Sau poate te întrebi dacă trebuie să mergi câtă vreme nu ai primit nimic în scris. Înainte să închizi, pune o întrebare simplă: <strong>„În ce calitate sunt chemat?”</strong> Dacă este vorba despre un dosar penal, răspunsul te ajută să înțelegi de ce se dorește audierea ta și ce drepturi ai când ajungi la secție.
          </p>

          <div className="mb-10 flex flex-col items-center">
            <video
              className="block w-[300px] max-w-full h-auto aspect-[9/16] rounded-2xl shadow-lg bg-black"
              width={720}
              height={1280}
              src={VIDEO_URL}
              poster={POSTER_URL}
              controls
              playsInline
              preload="metadata"
              aria-label="Clip video: Te sună poliția? Ce întrebi înainte să mergi la secție"
            />
            <a
              href="https://share.google/4UIZErr8y5LfJRSTP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 text-sm italic text-muted-foreground hover:underline text-center"
            >
              AVOCAT BOGDAN LAMATIC - DREPT PENAL BUCURESTI
            </a>
          </div>

          <section className="mb-10">
            <Card className="border border-accent p-6">
              <h2 className="text-xl font-semibold mb-3 text-foreground">Ce întrebi când te cheamă poliția prin telefon?</h2>
              <p className="mb-3">
                Poți răspunde firesc: „Îmi spuneți, vă rog, numele dumneavoastră, unitatea de poliție și numărul dosarului? În ce calitate mă chemați și unde trebuie să mă prezint?” Notează adresa exactă, data și ora. Dacă ți se spune doar „lămurim când ajungeți”, poți întreba dacă urmează să fii audiat ca martor, ca suspect ori ca persoană vătămată.
              </p>
              <p>
                Dacă ai dubii că vorbești cu un polițist, caută separat numărul oficial al unității și sună acolo pentru confirmare. Până clarifici cine te-a contactat și în ce scop, poți limita conversația la detaliile prezentării. Nu trebuie să reconstruiești pe loc, din memorie, ordinea unor evenimente doar pentru că interlocutorul a deschis subiectul.
              </p>
            </Card>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Este valabilă citarea telefonică dacă nu ai primit o citație pe hârtie?</h2>
            <p className="mb-3">
              <strong>Da, în procesul penal, citarea se poate face și prin telefon.</strong> Art. 257 alin. (1) din Codul de procedură penală permite citarea prin notă telefonică. Organul judiciar consemnează această modalitate într-un proces-verbal. Așadar, dacă ai fost citat telefonic, poți avea obligația să te prezinți chiar dacă nu ai primit și un plic acasă.
            </p>
            <p>
              Contează însă ce ți s-a comunicat efectiv. Dacă apelantul ți-a spus doar „treceți pe la noi” și a închis fără să stabilească o dată sau un loc, contactează unitatea și cere detaliile chemării. Dacă ai deja o dată stabilită, dar un motiv serios te împiedică să ajungi, anunță organul care te-a citat, explică situația și cere confirmarea unei alte date. Simpla cerere de reprogramare nu schimbă automat termenul. În condițiile art. 265 alin. (1), absența nejustificată a unei persoane citate poate duce la emiterea unui mandat de aducere dacă audierea ori prezența ei este necesară.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ce drepturi ai la audiere ca martor, suspect sau persoană vătămată?</h2>
            <p className="mb-3">
              <strong>Dacă ești chemat ca martor</strong>, regula este să te prezinți și să spui adevărul despre ceea ce cunoști. Poate ai văzut cine era la volan, dar nu și momentul impactului. Spune exact ce ai văzut și precizează ce ai aflat ulterior de la altcineva. Dacă răspunsul la o întrebare ar dezvălui fapte care te-ar incrimina, ai dreptul să nu le declari. Organul judiciar trebuie să îți comunice acest drept înaintea fiecărei audieri. Dacă vii însoțit de avocat, acesta poate asista la audiere, potrivit art. 118.
            </p>
            <p className="mb-3">
              <strong>Dacă ești suspect</strong>, înainte de prima audiere trebuie să afli ce faptă ți se impută și care este încadrarea ei juridică. Poți discuta cu un avocat și poți alege să nu dai declarații. Exercitarea acestui drept nu poate avea consecințe defavorabile pentru tine. Dacă alegi să dai o declarație, ea poate fi folosită ca probă inclusiv împotriva ta. Aceste garanții rezultă din art. 78, 83, 108 și 109.
            </p>
            <p className="mb-3">
              <strong>Dacă ești persoană vătămată</strong>, ai dreptul să fii ascultat, să propui probe și să fii asistat de avocat. De exemplu, dacă ai reclamat o înșelăciune, poți indica mesajele primite și documentele de plată care susțin relatarea ta. Art. 81 și 93 reglementează aceste drepturi.
            </p>
            <p className="mb-3">
              Dacă ai fost chemat la audieri în București și ai nevoie să îți clarifici situația înainte de a da o declarație, îl poți contacta pe <strong>avocatul Bogdan Lamatic</strong> la <a href="tel:+40745506443" className="font-semibold underline">+40 745 506 443</a>. Pentru consultație, pregătește detaliile pe care le-ai notat în timpul apelului și citația, dacă ai primit una.
            </p>
            <p className="text-sm mt-6">
              <em>Sursă legislativă: <a href="https://legislatie.just.ro/Public/DetaliiDocument/120611" target="_blank" rel="noopener noreferrer" className="underline">Codul de procedură penală, Legea nr. 135/2010</a>.</em>
            </p>
          </section>
        </article>

        <section className="mt-6 mb-8 max-w-3xl">
          <WhatsAppDocsCta />
        </section>

        <section className="mb-8">
          <LawyerBioBlock path={PATH} lang="ro" />
          <GoogleReviewStars lang="ro" className="mt-3" />
        </section>

        <section className="mb-12">
          <Button asChild variant="premium" size="lg" className="border border-hero-foreground" aria-label="Sună-mă acum">
            <a href="tel:+40745506443">
              <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Sună-mă acum</span>
            </a>
          </Button>
          <ServicesQuickLinks exclude={["/blog", "/contact"]} />
        </section>

        <section className="order-last mt-8 md:order-first md:mt-0 md:mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="/">Acasă</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="/blog">Resurse</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Te cheamă poliția prin telefon</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
      </main>
    </div>
  );
}
