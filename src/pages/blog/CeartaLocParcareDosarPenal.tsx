import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServicesQuickLinks from "@/components/ServicesQuickLinks";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewStars from "@/components/services/GoogleReviewStars";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";

const YT_ID = "2wDfRSde0PA";
const ORIGIN = "https://avocatpenalbucuresti.ro";
const PATH = "/cearta-loc-parcare-dosar-penal";
const TITLE = "Ceartă pentru un loc de parcare - când riști dosar penal";
const DESC =
  "Un conflict pentru un loc de parcare poate ajunge la dosar penal. Află ce spune legea despre amenințări, lovire și distrugerea mașinii.";
const LAW_URL = "https://legislatie.just.ro/Public/DetaliiDocument/109855";

export default function CeartaLocParcareDosarPenal() {
  useSEO({
    title: TITLE,
    description: DESC,
    keywords: "ceartă pentru un loc de parcare, conflict parcare dosar penal, amenințare, lovire, distrugere mașină",
    canonical: PATH,
    locale: "ro_RO",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: `${ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Resurse", item: `${ORIGIN}/blog` },
          { "@type": "ListItem", position: 3, name: "Ceartă pentru un loc de parcare", item: `${ORIGIN}${PATH}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: TITLE,
        description: DESC,
        inLanguage: "ro-RO",
        datePublished: "2026-11-06",
        dateModified: "2026-11-06",
        mainEntityOfPage: `${ORIGIN}${PATH}`,
        author: { "@type": "Person", name: "Bogdan Lamatic", url: `${ORIGIN}/despre-mine` },
        publisher: { "@id": `${ORIGIN}/#legalservice` },
        citation: {
          "@type": "Legislation",
          name: "Legea nr. 286/2009 privind Codul penal",
          url: LAW_URL,
        },
        video: {
          "@type": "VideoObject",
          name: "Un loc de parcare. O reacție. Un posibil dosar penal.",
          description: "Când o ceartă pentru un loc de parcare poate ajunge la dosar penal.",
          thumbnailUrl: `https://i.ytimg.com/vi/${YT_ID}/hqdefault.jpg`,
          embedUrl: `https://www.youtube.com/embed/${YT_ID}`,
          contentUrl: `https://www.youtube.com/shorts/${YT_ID}`,
          uploadDate: "2026-11-06",
        },
      },
    ],
  });

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 flex flex-col">
        <article className="max-w-3xl text-zinc-700 leading-relaxed">
          <h1 className="text-2xl font-semibold mb-4 text-foreground">Cearta pentru un loc de parcare poate ajunge la dosar penal. Când depășești limita?</h1>
          <p className="mb-3">
            Ajungi acasă și găsești locul de parcare ocupat. Îi ceri șoferului să mute mașina, primești un răspuns agresiv și discuția escaladează. În câteva secunde, apar amenințări, o îmbrânceală sau o lovitură în portieră.
          </p>
          <p className="mb-6">
            <strong>O ceartă pentru un loc de parcare poate avea consecințe penale, în funcție de cuvintele rostite, gesturile făcute și urmările lor.</strong> Faptul că ai dreptate în privința parcării nu îți dă dreptul să ameninți, să lovești ori să distrugi bunurile altcuiva.
          </p>

          <div className="mb-10 flex justify-center">
            <div className="w-[300px] max-w-full aspect-[9/16] rounded-2xl shadow-lg bg-black overflow-hidden">
              <iframe
                className="w-full h-full"
                width={300}
                height={533}
                src={`https://www.youtube-nocookie.com/embed/${YT_ID}`}
                title="Clip video: Un loc de parcare. O reacție. Un posibil dosar penal."
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Când poate fi o amenințare infracțiune?</h2>
            <p className="mb-3">
              Expresii precum „îți sparg mașina” sau „te bat când te prind” pot intra în sfera <Link to="/servicii/lipsire-de-libertate-amenintare" className="underline">infracțiunii de amenințare</Link>, dacă sunt îndeplinite condițiile art. 206 din Codul penal.
            </p>
            <p className="mb-3">
              Legea privește amenințarea cu o infracțiune sau cu o faptă păgubitoare împotriva persoanei ori a altcuiva, atunci când aceasta este de natură să producă teamă. Contează contextul, tonul, gesturile și relația dintre cei implicați. Explicația „am spus-o la nervi” nu înlătură automat răspunderea penală.
            </p>
            <p>
              Dacă ai fost amenințat, notează cât mai exact ce s-a spus și cine a asistat. Păstrează mesajele și înregistrările existente în forma lor originală.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">O îmbrânceală sau o palmă poate duce la dosar penal?</h2>
            <p className="mb-3">
              <strong>Chiar și un singur gest violent poate avea relevanță penală.</strong> Art. 193 sancționează <Link to="/servicii/loviri-vatamare-corporala" className="underline">lovirea și alte violențe</Link> care provoacă suferințe fizice. O îmbrânceală care produce durere poate fi analizată în acest cadru, chiar dacă persoana nu prezintă leziuni vizibile.
            </p>
            <p className="mb-3">
              Pentru forma prevăzută la art. 193 alin. (1), pedeapsa este închisoarea de la 6 luni la 3 ani sau amenda. Dacă sunt provocate leziuni traumatice evaluate la cel mult 90 de zile de îngrijiri medicale, limitele sunt de la un an la 5 ani sau amendă.
            </p>
            <p>
              Săvârșirea faptei în public constituie o împrejurare agravantă prevăzută expres de lege. Încadrarea depinde însă de locul și circumstanțele concrete ale incidentului.
            </p>
          </section>

          <section className="mb-10">
            <Card className="border border-accent p-6">
              <h2 className="text-xl font-semibold mb-3 text-foreground">Ce se întâmplă dacă zgârii mașina sau îi rupi oglinda?</h2>
              <p className="mb-3">
                Zgârierea intenționată a caroseriei, spargerea unui geam ori ruperea unei oglinzi pot constitui distrugere, potrivit art. 253 din Codul penal.
              </p>
              <p className="mb-3">
                Pentru forma de bază, legea prevede închisoare de la 3 luni la 2 ani sau amendă. Faptul că autoturismul ocupa abuziv un loc de parcare nu justifică deteriorarea lui.
              </p>
              <p>
                Fotografiază poziția mașinii și eventualele indicatoare, păstrează documentele privind dreptul de folosință asupra locului și sesizează autoritatea competentă sau administratorul parcării, după situație.
              </p>
            </Card>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Când intervine tulburarea ordinii și liniștii publice?</h2>
            <p className="mb-3">
              Un conflict desfășurat în public poate atrage și aplicarea art. 371, dacă amenințările, atingerile grave aduse demnității ori violențele tulbură ordinea și liniștea publică.
            </p>
            <p>
              <strong>Simpla existență a unei dispute într-o parcare nu stabilește automat această infracțiune.</strong> Sunt importante comportamentul participanților și efectele produse. Pentru violențele împotriva persoanelor sau bunurilor care îndeplinesc condițiile articolului, pedeapsa este închisoarea de la un an la 5 ani.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ce faci după un conflict în parcare?</h2>
            <p className="mb-3">
              Îndepărtează-te dacă situația escaladează și apelează 112 dacă există un pericol imediat. Dacă ai fost rănit, solicită îngrijiri medicale și păstrează documentele primite.
            </p>
            <p className="mb-3">
              Notează ora, locul, succesiunea faptelor și datele martorilor. Identifică eventualele camere de supraveghere și semnalează rapid existența lor poliției, deoarece imaginile pot fi suprascrise.
            </p>
            <p>
              Dacă ai fost reclamat, pregătește o cronologie exactă a incidentului și păstrează probele care pot clarifica situația. Discută cu un avocat despre calitatea în care ești chemat și drepturile tale înaintea audierii.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3 text-foreground">Ai nevoie de un avocat penal în București?</h2>
            <p className="mb-3">
              Dacă un conflict pentru un loc de parcare a ajuns la amenințări, violență sau o plângere penală, o consultație te poate ajuta să înțelegi situația juridică și pașii următori.
            </p>
            <p>
              Contactează-l pe <strong>avocatul Bogdan Lamatic</strong> la <a href="tel:+40745506443" className="font-semibold underline">+40 745 506 443</a>. Pregătește documentele primite de la poliție, fotografiile, mesajele și informațiile despre martori, pentru o analiză a împrejurărilor concrete.
            </p>
            <h3 className="text-base font-semibold mt-6 mb-2 text-foreground">Surse legislative</h3>
            <p className="text-sm">
              <em>Legea nr. 286/2009 privind Codul penal, cu modificările și completările ulterioare - art. 184, art. 193, art. 206, art. 253 și art. 371. Textul oficial este disponibil pe <a href={LAW_URL} target="_blank" rel="noopener noreferrer" className="underline">Portalul Legislativ al Ministerului Justiției</a>.</em>
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
              <BreadcrumbItem><BreadcrumbPage>Ceartă pentru un loc de parcare</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
      </main>
    </div>
  );
}
