import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

export default function GDPR() {
  useSEO({
    title: "GDPR – Protecția datelor | Cabinet Avocat Bogdan Lamatic",
    description: "Află cum colectăm, folosim și protejăm datele tale personale conform GDPR.",
    alternates: { ro: "/gdpr", en: "/en/gdpr", xDefault: "/gdpr" },
    locale: "ro_RO",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "/" },
      { "@type": "ListItem", position: 2, name: "GDPR", item: "/gdpr" },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">GDPR – Protecția datelor</h1>
        <nav aria-label="breadcrumb" className="mt-2 text-sm opacity-80">
          <ol className="flex gap-2">
            <li>
              <Link to="/" className="underline hover:no-underline">Acasă</Link>
            </li>
            <li>/</li>
            <li aria-current="page">GDPR</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>1. Introducere</h2>
          <p>
            Respectăm confidențialitatea și protecția datelor cu caracter personal. Această politică explică ce
            date colectăm, în ce scop, temeiurile legale aplicabile, precum și drepturile tale în conformitate cu
            Regulamentul (UE) 2016/679 (GDPR).
          </p>
        </section>

        <section>
          <h2>2. Date pe care le colectăm</h2>
          <ul>
            <li>Date de contact (nume, e-mail, telefon) transmise prin formulare sau comunicări directe;</li>
            <li>Date tehnice (adresă IP, tipul dispozitivului, pagini vizitate) colectate prin cookie-uri;</li>
            <li>Alte informații furnizate voluntar în scopul consultanței juridice.</li>
          </ul>
        </section>

        <section>
          <h2>3. Temeiul legal și scopurile prelucrării</h2>
          <ul>
            <li>Executarea unui contract sau demersuri pre-contractuale la cererea ta;</li>
            <li>Interes legitim (ex.: asigurarea securității site-ului, prevenirea abuzurilor);</li>
            <li>Consimțământ (ex.: cookie-uri de analiză, comunicări comerciale – unde este cazul);</li>
            <li>Obligații legale aplicabile profesiei de avocat.</li>
          </ul>
        </section>

        <section>
          <h2>4. Durata stocării</h2>
          <p>
            Păstrăm datele doar cât timp este necesar pentru scopurile indicate mai sus sau conform termenelor legale
            aplicabile obligațiilor profesionale ale avocatului.
          </p>
        </section>

        <section>
          <h2>5. Drepturile tale</h2>
          <p>Ai următoarele drepturi conform GDPR:</p>
          <ul>
            <li>Dreptul de acces, rectificare și ștergere;</li>
            <li>Dreptul la restricționare sau opoziție la prelucrare;</li>
            <li>Dreptul la portabilitatea datelor;</li>
            <li>Dreptul de a-ți retrage consimțământul atunci când prelucrarea se bazează pe acesta;</li>
            <li>Dreptul de a depune o plângere la ANSPDCP.</li>
          </ul>
        </section>

        <section>
          <h2>6. Dezvăluirea și transferul datelor</h2>
          <p>
            Putem partaja datele cu furnizori care ne sprijină în operarea site-ului (ex.: găzduire, analitice),
            doar în baza unor garanții adecvate și strict necesar. Nu transferăm date în afara SEE fără măsuri de
            protecție conforme GDPR.
          </p>
        </section>

        <section>
          <h2>7. Securitate</h2>
          <p>
            Implementăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele împotriva accesului
            neautorizat, pierderii sau divulgării.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            Pentru orice întrebări privind datele tale personale, ne poți contacta la
            <a href="mailto:bogdan.lamatic@yahoo.com"> bogdan.lamatic@yahoo.com</a>.
          </p>
        </section>
        <section aria-label="Politici conexe" className="mt-10">
          <h2>Politici conexe</h2>
          <ul>
            <li><a href="/termeni-si-conditii" className="underline hover:no-underline">Termeni și Condiții</a></li>
            <li><a href="/politica-cookies" className="underline hover:no-underline">Politica de Cookie-uri</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
