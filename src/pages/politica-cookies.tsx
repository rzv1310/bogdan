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
              <a href="/" className="underline hover:no-underline">Acasă</a>
            </li>
            <li>/</li>
            <li aria-current="page">Politica de Cookie-uri</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>Ce este un "cookie"?</h2>
          <p>
            Cookie-ul este un fișier mic, format din litere și numere care va fi stocat pe computerul, dispozitivul, 
            terminalul mobil sau alte echipamente ale unui utilizator care accesează Internetul. Cookie-ul este instalat 
            printr-o cerere a serverului web de la un browser (de ex. Internet Explorer, Chrome) și este complet "pasiv". 
            Cookie-ul nu conține software, viruși sau spyware și nu poate accesa informațiile de pe hard disk-ul utilizatorului.
          </p>
          <p>
            Cookie-urile în sine nu solicită date personale pentru a fi utilizate și, în majoritatea cazurilor, 
            nu identifică utilizatorii de internet.
          </p>
          <p>
            Există două categorii principale de cookie-uri. Cookie-urile de sesiune sunt create temporar în subfolderul 
            browserului utilizatorului în timpul vizitării Website-ului. După ce utilizatorul părăsește Website-ul, 
            cookie-ul de sesiune este șters. Cookie-urile persistente rămân în subfolderul browserului utilizatorului 
            și sunt activate din nou odată ce utilizatorul vizitează Website-ul. Un cookie persistent rămâne în 
            subfolderul browserului pentru o perioadă stabilită în fișierul cookie-ului.
          </p>
        </section>

        <section>
          <h2>Durata de viață a unui cookie</h2>
          <p>
            Durata de viață a unui cookie poate varia semnificativ, în funcție de scopul pentru care este plasat. 
            Așa cum este menționat mai sus, unele cookie-uri sunt folosite exclusiv pentru o singură sesiune 
            (cookie-uri de sesiune) și nu sunt păstrate după ce utilizatorul părăsește website-ul, în timp ce 
            alte cookie-uri sunt păstrate și refolosite de fiecare dată când utilizatorul revizitează Website-ul 
            (cookie-uri persistente). Cu toate acestea, cookie-urile pot fi șterse de un utilizator în orice moment 
            prin intermediul setărilor browserului.
          </p>
        </section>

        <section>
          <h2>Cookie-uri terțe părți</h2>
          <p>
            Conținutul Website-ului poate fi furnizat prin terțe părți sau furnizori (de ex., un video). 
            Astfel de terțe părți pot plasa cookie-uri pe Website (numite "cookie-uri terțe părți", deoarece 
            nu sunt plasate de acest website). De asemenea, furnizorii terțe părți trebuie să se conformeze 
            reglementărilor legale în vigoare și cu Politica de Confidențialitate a Site-ului{" "}
            <a href="https://avocatpenalbucuresti.ro/" className="underline hover:no-underline">
              https://avocatpenalbucuresti.ro/
            </a>{" "}
            și Cabinetului de Avocatura Bogdan Lamatic.
          </p>
        </section>

        <section>
          <h2>Cookie-uri folosite de acest website</h2>
          <p>
            Consimțământul dumneavoastră se aplică următoarelor domenii:{" "}
            <a href="https://avocatpenalbucuresti.ro/" className="underline hover:no-underline">
              https://avocatpenalbucuresti.ro/
            </a>
          </p>
          <p>Starea dumneavoastră actuală: Permite toate.</p>
        </section>

        <section>
          <h2>Adaptarea setărilor browserului la cookie-uri</h2>
          <p>
            Dacă vizitatorul Website-ului este singura persoană care folosește dispozitivul, el/ea poate stabili 
            termeni de expirare lungi pentru istoricul de navigare. Dacă el/ea folosește dispozitivul împreună cu 
            o altă persoană, se recomandă să seteze browserul astfel încât să șteargă datele de navigare de fiecare 
            dată când browserul este închis.
          </p>
        </section>

        <section>
          <h2>Ștergerea cookie-urilor</h2>
          <p>
            În general, o aplicație folosită pentru a accesa paginile web permite salvarea implicită a cookie-urilor 
            pe dispozitiv. Aceste setări pot fi modificate astfel încât gestionarea automată a cookie-urilor să fie 
            blocată de browserul web sau utilizatorul să fie informat de fiecare dată când cookie-urile sunt trimise 
            la dispozitivul său.
          </p>
          <p>
            Informații detaliate despre posibilitățile și tipurile de gestionare a cookie-urilor pot fi găsite în 
            setările aplicației sau browserului. Limitarea folosirii cookie-urilor poate afecta anumite funcționalități 
            ale Website-ului.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pentru întrebări legate de politica de cookie-uri, scrie-ne la
            <a href="mailto:contact@avocatpenalbucuresti.ro"> contact@avocatpenalbucuresti.ro</a>.
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
