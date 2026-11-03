import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicesQuickLinks from "@/components/ServicesQuickLinks";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewStars from "@/components/services/GoogleReviewStars";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";
import videoAsset from "@/assets/te-suna-politia.mp4.asset.json";
import posterAsset from "@/assets/te-suna-politia-poster.jpg.asset.json";

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
          thumbnailUrl: `${ORIGIN}${posterAsset.url}`,
          contentUrl: `${ORIGIN}${videoAsset.url}`,
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

          <div className="mb-10 flex justify-center">
            <video
              className="w-full max-w-[340px] aspect-[9/16] rounded-2xl shadow-lg bg-black"
              src={videoAsset.url}
              poster={posterAsset.url}
              controls
              playsInline
              preload="none"
              aria-label="Clip video: Te sună poliția? Ce întrebi înainte să mergi la secție"
            />
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

          {/*__SECTIONS__*/}
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
