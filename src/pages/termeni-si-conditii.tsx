import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
export default function TermeniSiConditii() {
  useSEO({
    title: "Termeni și Condiții – Cabinet Avocat Bogdan Lamatic",
    description: "Termenii și condițiile de utilizare ale site‑ului și regulile serviciilor juridice oferite.",
    alternates: {
      ro: "/termeni-si-conditii",
      en: "/en/terms-and-conditions"
    },
    locale: "ro_RO",
    canonical: "/termeni-si-conditii"
  });
  return <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: typeof window !== "undefined" ? `${window.location.origin}/` : "/"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "Termeni și Condiții",
          item: typeof window !== "undefined" ? `${window.location.origin}/termeni-si-conditii` : "/termeni-si-conditii"
        }]
      })
    }} />

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
          Prezenta pagină stabilește condițiile de utilizare a website‑ului <a href="/" className="underline hover:no-underline">https://avocatpenalbucuresti.ro/</a> (denumit în continuare „Site‑ul") și regulile minime aplicabile interacțiunilor cu Cabinetul Avocat Bogdan Lamatic (denumit „Cabinetul"). Accesând sau utilizând Site‑ul, sunteți de acord cu acești Termeni.
        </p>

        <p className="font-semibold">UTILIZAREA WEBSITE-ULUI</p>
        <p>
          Prin utilizarea Website-ului https://avocatpenalbucuresti.ro/ , veți găsi informații cu privire la echipa Cabinetului de Avocatura Bogdan Lamatic, activitățile desfășurate de avocat Bogdan Lamatic pe piața serviciilor juridice din România, precum și cu privire la practicile acoperite de activitatea echipei Cabinet Avocat Bogdan Lamatic din București. În plus, Website-ul conține știri, articole și alte materiale care pot privi dezvoltări semnificative petrecute sau actualizări înregistrate în legătură cu cadrul legislativ aplicabil în România, jurisprudența europeană sau națională etc.
        </p>
        <p className="font-semibold">PROTECȚIA ÎMPOTRIVA VIRUȘILOR</p>
        <p>Cabinetul depune toate eforturile pentru a verifica și testa materialul oferit de acest Website, în toate etapele de producție. De asemenea, recomandăm utilizatorilor să ruleze un program antivirus pentru toate materialele descărcate de pe Internet. Cabinetul nu poate accepta nicio responsabilitate pentru orice pierdere, întrerupere sau deteriorare a datelor dumneavoastră sau a sistemului dumneavoastră informatic, care poate surveni în timpul navigării pe Website-ul https://avocatpenalbucuresti.ro/.</p>
        <p className="font-semibold">RECUNOAȘTEREA PROPRIETĂȚII</p>
        <p>Site-ul oferă oricăruia dintre utilizatorii săi posibilitatea de a accesa conținutul furnizat pentru utilizarea personală a utilizatorului.</p>
        <p>Prin prezenta recunoașteți și sunteți de acord că Site-ul și Cabinetul Avocat Bogdan Lamatic sunt proprietarii exclusivi al tuturor drepturilor de proprietate intelectuală asupra conținutului Website-ului, inclusiv asupra articolelor, textelor, fotografiilor și ilustrațiilor. De asemenea, sunteți de acord că nu veți utiliza astfel de materiale în niciun fel, cu excepția cazului în care ați primit consimțământul prealabil expres scris din partea Cabinetului de avocatura Bogdan Lamatic.</p>
        <p className="font-semibold">COMENTARII, ÎNTREBĂRI ȘI FEEDBACK</p>
        <p>Dacă trimiteți o solicitare prin e-mail către fie un contact specific, fie o adresă de contact generală identificată în Site, vom utiliza datele dumneavoastră personale obținute din solicitarea dumneavoastră pentru a răspunde la cererea dumneavoastră.</p>
        <p className="font-semibold">PRELUCRAREA DATELOR PERSONALE</p>
        <p>Anumite date personale sunt colectate prin intermediul Site-ului. Detaliile privind prelucrarea acestor date personale sunt disponibile în Politica noastră de confidențialitate.</p>
        <p className="font-semibold">RECRUTARE</p>
        <p>
          Dacă aplicați pentru o poziție la Cabinetul de avocatura Bogdan Lamatic, anunțată în secțiunea Cariere a acestui Website, curriculum vitae-ul dumneavoastră sau alte informații pe care ni le furnizați vor fi utilizate exclusiv pentru prelucrarea aplicației dumneavoastră și în scopuri de recrutare, așa cum este stabilit în Politica de confidențialitate.
        </p>
        <p className="font-semibold">DECLINAREA RESPONSABILITĂȚII</p>
        <p>Informațiile publicate au scop informativ și pot deveni neactuale. Cabinetul nu garantează acuratețea absolută a conținutului și nu răspunde pentru decizii luate exclusiv pe baza acestuia fără consultanță specifică. Website-ul poate conține legături către website-uri și resurse care nu sunt proprietatea noastră. Site-ul și Cabinetul Avocatului Bogdan Lamatic nu au control asupra acestor website-uri și resurselor găsite în acestea și, prin urmare, nu vor fi răspunzători pentru disponibilitatea acestor website-uri, nici pentru conținutul, publicitatea, bunurile, serviciile, informațiile sau alte materiale disponibile pe sau prin aceste website-uri, pentru funcționalitatea sau performanțele acestor website-uri sau pentru încălcarea oricăror drepturi de proprietate intelectuală sau alte drepturi, care survine prin aceste website-uri. Prin accesarea website-urilor indicate confirmați că înțelegeți posibilele consecințe ale intrării pe website-urile indicate și sunteți de acord și acceptați termenii și condițiile menționate mai sus.</p>
        <p>
          Acest Website este furnizat în scopuri informative și nu constituie consiliere juridică și/sau fiscală. Informațiile nu sunt destinate să înlocuiască consilierea juridică din partea unui avocat autorizat în domeniul de practică implicat în cazul dumneavoastră. Relația avocat–client se naște doar după acceptarea expresă a solicitării și semnarea împuternicirii avocațiale/contractului de asistență juridică.
        </p>
        <p className="font-semibold">Servicii și limitări</p>
        <p>
          Serviciile descrise in Site sunt orientative. Cabinetul își rezervă dreptul de a refuza o solicitare, inclusiv în caz de conflict de interese, lipsa disponibilității sau inadvertențe privind obiectul și scopul cererii. Orice estimări de timp sau cost sunt aproximative până la agrearea scrisă.
        </p>
        <p className="font-semibold">Programări și comunicare</p>
        <p>
          Pentru programări și comunicare, utilizați datele publicate în secțiunea Contact sau formularul de contact. Răspunsul este, de regulă, în 24–48h lucrătoare, în funcție de urgență.
        </p>
        <p className="font-semibold">Onorarii și plăți</p>
        <p>
          Onorariile se stabilesc în mod transparent în funcție de complexitatea speței, urgență și resursele implicate. Modalitățile de plată, termenele și eventualele cheltuieli (ex. taxe judiciare, expertize) se prevăd în contractul de asistență juridică.
        </p>
        <p className="font-semibold">Confidențialitate și protecția datelor</p>
        <p>
          Cabinetul respectă confidențialitatea și secretul profesional conform legislației aplicabile (Legea 51/1995, Statutul profesiei). Prelucrarea datelor cu caracter personal se realizează potrivit notei GDPR și politicii de cookies ale Site‑ului.
        </p>
        <p className="font-semibold">Conflicte de interese</p>
        <p>
          Înaintea acceptării unui mandat, Cabinetul efectuează verificări privind potențiale conflicte de interese. Dacă este identificat un conflict, solicitarea poate fi refuzată sau redirecționată.
        </p>
        <p className="font-semibold">Legea aplicabilă și jurisdicția</p>
        <p>
          Acești Termeni se guvernează de legea română. Orice litigiu va fi soluționat de instanțele competente din București, dacă legea nu prevede altfel.
        </p>
        <p className="font-semibold">MODIFICĂRI ALE TERMENILOR ȘI CONDIȚIILOR</p>
        <p>
          În cazul în care Termenii și Condițiile se modifică în orice fel, vom plasa o versiune actualizată pe această pagină. Actualizarea regulată a acestei pagini vă asigură că sunteți mereu la curent cu ce informații colectăm, cum le utilizăm și în ce circumstanțe și, dacă este cazul, dacă le transferăm către alte persoane.
        </p>
        <p className="font-semibold">Contact</p>
        <p>
          Pentru întrebări privind acești Termeni: București, Sector 1, Str. Ștefan Stoika nr. 22, bl. 17B, sc. 1, et. 1, ap. 5 • Tel.: +40 (31) 632 01 83 • E‑mail: contact@avocatpenalbucuresti.ro
        </p>
      </div>

      <section aria-label="Politici conexe" className="mt-10">
        <p className="font-semibold">Politici conexe</p>
        <ul className="list-disc pl-5">
          <li><a href="/gdpr" className="underline hover:no-underline">GDPR – Protecția datelor</a></li>
          <li><a href="/politica-cookies" className="underline hover:no-underline">Politica de Cookie-uri</a></li>
        </ul>
      </section>
    </section>;
}