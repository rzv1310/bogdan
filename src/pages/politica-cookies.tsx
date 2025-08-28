import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";

export default function PoliticaCookies() {
  useSEO({
    title: "Politica de Cookie-uri | Cabinet Avocat Bogdan Lamatic",
    description: "Informații despre cookie-urile utilizate, scopurile lor și cum îți poți gestiona preferințele.",
    alternates: { ro: "/politica-cookies", en: "/en/cookie-policy", xDefault: "/politica-cookies" },
    locale: "ro_RO",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: "/" },
      { "@type": "ListItem", position: 2, name: "Politica cookie-uri", item: "/politica-cookies" },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Politica de Cookie-uri</h1>
        <nav aria-label="breadcrumb" className="mt-2 text-sm opacity-80">
          <ol className="flex gap-2">
            <li>
              <Link to="/" className="underline hover:no-underline">Acasă</Link>
            </li>
            <li>/</li>
            <li aria-current="page">Politica de Cookie-uri</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>1. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere mici text stocate pe dispozitivul tău când vizitezi un site. Ele ajută la
            funcționarea corectă a site-ului, la analiză și la îmbunătățirea experienței de navigare.
          </p>
        </section>

        <section>
          <h2>2. Tipuri de cookie-uri utilizate</h2>
          <ul>
            <li>Cookie-uri strict necesare pentru funcționarea site-ului;</li>
            <li>Cookie-uri de performanță și analiză (ex.: trafic și comportament de utilizare);</li>
            <li>Cookie-uri de funcționalitate (preferințe utilizator).</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookie-uri terțe</h2>
          <p>
            Anumite servicii terțe pot seta cookie-uri proprii (ex.: servicii de analiză). Nu controlăm cookie-urile
            terților; te încurajăm să consulți politicile acestora.
          </p>
        </section>

        <section>
          <h2>4. Cum poți controla cookie-urile</h2>
          <p>
            Poți configura browserul să blocheze sau să te avertizeze despre cookie-uri. Dezactivarea anumitor cookie-uri
            poate afecta funcționalitatea site-ului.
          </p>
        </section>

        <section>
          <h2>5. Modificări ale politicii</h2>
          <p>
            Putem actualiza această politică periodic. Orice modificări vor fi publicate pe această pagină.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            Pentru întrebări legate de politica de cookie-uri, scrie-ne la
            <a href="mailto:bogdan.lamatic@yahoo.com"> bogdan.lamatic@yahoo.com</a>.
          </p>
        </section>
        <section aria-label="Politici conexe" className="mt-10">
          <h2>Politici conexe</h2>
          <ul>
            <li><a href="/termeni-si-conditii" className="underline hover:no-underline">Termeni și Condiții</a></li>
            <li><a href="/gdpr" className="underline hover:no-underline">GDPR – Protecția datelor</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
