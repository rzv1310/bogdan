import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";

export default function TermeniSiConditii() {
  useSEO({
    title: "Termeni și Condiții – Cabinet Avocat Bogdan Lamatic",
    description: "Termenii și condițiile de utilizare ale site‑ului și regulile serviciilor juridice oferite.",
    alternates: { ro: "/termeni-si-conditii", en: "/en/terms-and-conditions" },
    locale: "ro_RO",
    canonical: "/termeni-si-conditii",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: typeof window !== "undefined" ? `${window.location.origin}/` : "/" },
              { "@type": "ListItem", position: 2, name: "Termeni și Condiții", item: typeof window !== "undefined" ? `${window.location.origin}/termeni-si-conditii` : "/termeni-si-conditii" },
            ],
          }),
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Termeni și Condiții</h1>

      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Termeni și Condiții</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed">
        <p>
          Prezenta pagină stabilește condițiile de utilizare a site‑ului avocat‑drept‑penal.ro (denumit în continuare „Site‑ul”) și regulile
          minime aplicabile interacțiunilor cu Cabinetul Avocat Bogdan Lamatic (denumit „Cabinetul”). Accesând sau utilizând Site‑ul, sunteți de acord cu acești Termeni.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Domeniu de aplicare</h2>
        <p>
          Site‑ul are caracter informativ. Conținutul nu reprezintă consultanță juridică și nu creează o relație avocat–client. O astfel de relație se naște doar după acceptarea
          expresă a solicitării și semnarea împuternicirii avocațiale/contractului de asistență juridică.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Servicii și limitări</h2>
        <p>
          Serviciile descrise pe Site sunt orientative. Cabinetul își rezervă dreptul de a refuza o solicitare, inclusiv în caz de conflict de interese, lipsa disponibilității
          sau inadvertențe privind obiectul și scopul cererii. Orice estimări de timp sau cost sunt aproximative până la agrearea scrisă.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Programări și comunicare</h2>
        <p>
          Pentru programări și comunicare, utilizați datele publicate în secțiunea Contact sau formularul de contact. Răspunsul este, de regulă, în 24–48h lucrătoare, în funcție de urgență.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Onorarii și plăți</h2>
        <p>
          Onorariile se stabilesc în mod transparent în funcție de complexitatea speței, urgență și resursele implicate. Modalitățile de plată, termenele și eventualele cheltuieli
          (ex. taxe judiciare, expertize) se prevăd în contractul de asistență juridică.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Confidențialitate și protecția datelor</h2>
        <p>
          Cabinetul respectă confidențialitatea și secretul profesional conform legislației aplicabile (Legea 51/1995, Statutul profesiei). Prelucrarea datelor cu caracter personal se realizează
          potrivit notei GDPR și politicii de cookies ale Site‑ului.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Conflicte de interese</h2>
        <p>
          Înaintea acceptării unui mandat, Cabinetul efectuează verificări privind potențiale conflicte de interese. Dacă este identificat un conflict, solicitarea poate fi refuzată sau redirecționată.
        </p>

        <h2 className="text-2xl font-semibold mt-8">7. Excluderea răspunderii</h2>
        <p>
          Informațiile publicate au scop informativ și pot deveni neactuale. Cabinetul nu garantează acuratețea absolută a conținutului și nu răspunde pentru decizii luate exclusiv pe baza acestuia
          fără consultanță specifică. Linkurile către site‑uri terțe nu implică asumarea conținutului acestora.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Proprietate intelectuală</h2>
        <p>
          Conținutul Site‑ului (texte, imagini, grafică) aparține Cabinetului, cu excepțiile menționate, și este protejat de lege. Reproducerea sau utilizarea este permisă doar cu citarea sursei
          și/sau cu acordul prealabil, acolo unde este cazul.
        </p>

        <h2 className="text-2xl font-semibold mt-8">9. Legea aplicabilă și jurisdicția</h2>
        <p>
          Acești Termeni se guvernează de legea română. Orice litigiu va fi soluționat de instanțele competente din București, dacă legea nu prevede altfel.
        </p>

        <h2 className="text-2xl font-semibold mt-8">10. Modificări</h2>
        <p>
          Cabinetul poate actualiza periodic Termenii. Versiunea curentă se aplică din momentul publicării pe Site. Vă recomandăm să verificați această pagină la intervale rezonabile.
        </p>

        <h2 className="text-2xl font-semibold mt-8">11. Contact</h2>
        <p>
          Pentru întrebări privind acești Termeni: București, Sector 1, Str. Ștefan Stoika nr. 22, bl. 17B, sc. 1, et. 1, ap. 5 • Tel.: +40 745 506 443 • E‑mail: bogdan.lamatic@yahoo.com
        </p>
      </div>

      <section aria-label="Politici conexe" className="mt-10">
        <h2 className="text-xl font-semibold">Politici conexe</h2>
        <ul className="list-disc pl-5">
          <li><a href="/gdpr" className="underline hover:no-underline">GDPR – Protecția datelor</a></li>
          <li><a href="/politica-cookies" className="underline hover:no-underline">Politica de Cookie-uri</a></li>
        </ul>
      </section>
    </section>
  );
}
