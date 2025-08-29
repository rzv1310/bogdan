import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useSEO } from "@/hooks/useSEO";
import { Phone, Mail } from "lucide-react";

export default function SpalareDeBani() {
  useSEO({
    title: "Spălare de bani și ascundere de bunuri | Avocat drept penal Bogdan Lamatic - Bucuresti",
    description: "Apărare în dosare de spălare de bani și ascundere de bunuri.",
    alternates: {
      ro: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
      en: "/en/services/money-laundering-and-asset-concealment",
    },
    canonical: "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: typeof window !== "undefined" ? `${window.location.origin}/` : "/" },
              { "@type": "ListItem", position: 2, name: "Servicii", item: typeof window !== "undefined" ? `${window.location.origin}/#servicii` : "/#servicii" },
              { "@type": "ListItem", position: 3, name: "Spălare de bani și ascundere de bunuri", item: typeof window !== "undefined" ? `${window.location.origin}/servicii/spalare-de-bani-si-ascundere-de-bunuri` : "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Apărare în dosare de spălare de bani și ascundere de bunuri",
            url: typeof window !== "undefined" ? `${window.location.origin}/servicii/spalare-de-bani-si-ascundere-de-bunuri` : "/servicii/spalare-de-bani-si-ascundere-de-bunuri",
            areaServed: ["RO", "EU"],
            availableLanguage: ["ro", "en"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Infracțiune spălare de bani | Ascundere de bunuri - experiența mea ca avocat (Bogdan Lamatic, București)</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">Servicii</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Dosare de spălare de bani și ascundere de bunuri</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Intro + CTA */}
        <section className="mt-4 border border-accent rounded-md p-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40745506443" aria-label="Sună acum">
                <Phone className="mr-2" /> Sună acum
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="mailto:office@lamatic.ro" aria-label="Trimite email">
                <Mail className="mr-2" /> Trimite email
              </a>
            </Button>
          </div>
          <div className="mt-3 space-y-3 text-base leading-relaxed">
            <p>
              Am ales să practic dreptul penal al afacerilor pentru că este unul dintre puținele domenii în care faptele, banii și intențiile se împletesc într-un mod care afectează direct destinele oamenilor.
            </p>
            <p>
              Fiecare dosar de „white‑collar crime” pe care îl preiau îmi confirmă că nu există două povești identice, iar drumul spre o soluție justă începe de la înțelegerea contextului legal și a responsabilităților morale ale celor implicați.
            </p>
            <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
              În calitate de avocat în Baroul București, specializat în spălare de bani și ascunderea de bunuri, vă împărtășesc câteva repere esențiale pentru a naviga prin legislația actuală și pentru a vă pregăti apărarea.
            </p>
          </div>
        </section>

        {/* Ce reprezintă infracțiunea de spălare a banilor */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce reprezintă infracțiunea de spălare a banilor</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Legea nr. 129/2019 incriminează spălarea banilor (articolul 49) în trei forme alternative:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Schimbarea sau transferul bunurilor provenite din infracțiuni cu scopul de a ascunde originea ilicită sau de a ajuta făptuitorul să evite urmărirea penală.
              </li>
              <li>
                Ascunderea ori disimularea naturii, provenienței, situației, circulației sau proprietății bunurilor, știind că provin din infracțiuni. Aceasta este componenta care, în limbaj obișnuit, apare sub denumirea de „ascundere de bunuri”.
              </li>
              <li>
                Dobândirea, deținerea ori folosirea bunurilor știind că provin din infracțiuni. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=cuprins%3A%281,entităților%20raportoare%20să%20aplice%20măsuri" target="_blank" rel="noopener noreferrer" className="underline">(art. 49 Legea 129/2019)</a>
              </li>
            </ul>
            <p>
              Pentru persoanele fizice pedeapsa este între 3 și 10 ani de închisoare, iar tentativa se sancționează cu limite reduse. Pentru persoanele juridice se pot aplica amenzi și sancțiuni complementare (dizolvarea, suspendarea activității etc.). Modificările din 2021 (Legea 102/2021) au clarificat că aceste sancțiuni se aplică și entităților române care comit spălarea banilor în afara României.
            </p>

            <h3 className="text-xl font-semibold mt-4">Noutăți aduse de Legea 86/2025</h3>
            <p>
              În mai 2025 a fost adoptată Legea 86/2025, care modifică Legea 129/2019. Aceasta înăsprește obligațiile instituțiilor raportoare și limitează accesul public la registrele beneficiarilor reali:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Identificarea clientului și a beneficiarului real este obligatorie pentru toate tranzacțiile; entitățile raportoare trebuie să verifice identitatea clienților și să monitorizeze relațiile de afaceri și tranzacțiile pentru a depista operațiunile neobișnuite. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=articolul%2016%2C%20alineatul%20,entităților%20raportoare%20să%20aplice%20măsuri" target="_blank" rel="noopener noreferrer" className="underline">(art. 16)</a>
              </li>
              <li>
                Măsuri simplificate de cunoaștere a clientelei nu pot fi aplicate atunci când există suspiciuni de spălare a banilor sau de finanțare a terorismului.
              </li>
              <li>
                Raportarea tranzacțiilor suspecte este obligatorie când beneficiarul este o persoană expusă public (PEP) într-o poliță de asigurare de viață și există motive de suspiciune.
              </li>
              <li>
                Accesul la registrele beneficiarilor reali este permis doar persoanelor sau organizațiilor cu interes legitim; se afișează numai date limitate, iar accesul se face online contra unei taxe administrative. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=19%2C%20alineatul%20%288,%C3%AEntre%C8%9Binere%20%C8%99i%20dezvoltare%20a%20registrului" target="_blank" rel="noopener noreferrer" className="underline">(art. 19 alin. 8)</a>
              </li>
              <li>
                Înregistrarea și păstrarea documentelor: entitățile raportoare păstrează documentele justificative și evidențele tranzacțiilor timp de 5 ani și asigură instruirea periodică a angajaților. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=Entitățile%20raportoare%20au%20obligația%20de,%C8%99i%20de%20organismele%20de%20autoreglementare" target="_blank" rel="noopener noreferrer" className="underline">(obligații ONPCSB)</a>
              </li>
              <li>
                Supravegherea asociațiilor și fundațiilor: ONPCSB supraveghează, pe bază de risc, activitatea acestor entități și poate solicita informații privind structura și conducerea lor. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=26,tipurile%20de%20asocia%C8%9Bii%20%C8%99i%20funda%C8%9Bii" target="_blank" rel="noopener noreferrer" className="underline">(art. 26)</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* „Ascunderea de bunuri” vs. alte infracțiuni */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">„Ascunderea de bunuri” vs. alte infracțiuni</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <h3 className="text-xl font-semibold">1. Tăinuirea (art. 270 Cod penal)</h3>
            <p>
              Tăinuirea se referă la primirea, dobândirea, transformarea sau valorificarea unui bun despre care se știe că provine dintr-o infracțiune. Fapta se sancționează cu închisoare de la 1 la 5 ani sau cu amendă; pedeapsa tăinuitorului nu poate depăși pedeapsa autorului, iar tăinuirea săvârșită de un membru al familiei nu se pedepsește. <a href="https://www.dreptonline.ro/legislatie/codul_penal_2009.php#:~:text=Art,de%20familie%20nu%20se%20pedepseste" target="_blank" rel="noopener noreferrer" className="underline">(art. 270 CP)</a> Spre deosebire de spălarea banilor, tăinuirea nu cere disimularea originii bunului.
            </p>

            <h3 className="text-xl font-semibold">2. Abuzul de încredere prin fraudarea creditorilor (art. 239 Cod penal)</h3>
            <p>
              Implică înstrăinarea, ascunderea, deteriorarea sau distrugerea bunurilor ori invocarea de acte sau datorii fictive pentru a frauda creditorii; pedeapsa este închisoarea de la 6 luni la 3 ani sau amendă. Se pedepsește și achiziția de bunuri/servicii știind că plata nu va fi posibilă. Infracțiunea diferă de spălarea banilor prin raportarea la insolvență și raportul debitor‑creditor.
            </p>

            <h3 className="text-xl font-semibold">3. Bancruta frauduloasă (art. 241 Cod penal)</h3>
            <p>
              Intervine când, în frauda creditorilor, se falsifică, sustrag sau distrug evidențe, se ascunde activul ori se înființează datorii inexistente sau se înstrăinează active în caz de insolvență; pedeapsa este închisoarea de la 6 luni la 5 ani, cu plângere prealabilă.
            </p>

            <h3 className="text-xl font-semibold">4. Evaziunea fiscală (Legea nr. 241/2005)</h3>
            <p>
              Frecvent „faptă‑sursă” pentru spălarea banilor. Art. 9 stabilește faptele și pedepsele (2–8 ani sau amendă), precum: ascunderea bunului ori a sursei impozabile, omisiunea evidențierii operațiunilor, evidențe duble sau cheltuieli fictive. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=Constituie%20infrac%C8%9Biuni%20de%20evaziune%20fiscal%C4%83,f" target="_blank" rel="noopener noreferrer" className="underline">(Legea 241/2005)</a> Pentru prejudicii peste 100.000/500.000 euro, limitele se majorează. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=la%20alin.%20%281%29%20s,8%20alin" target="_blank" rel="noopener noreferrer" className="underline">(majorări)</a>
            </p>

            <p>
              Atunci când ascunderea bunului sau a sursei impozabile urmărește sustragerea de la plata taxelor, fapta poate constitui evaziune fiscală și, ulterior, predicate pentru spălarea banilor. Analiza detaliată a activităților economice și a documentelor contabile este esențială.
            </p>
          </CardContent>
        </Card>

        {/* Măsuri asigurătorii, sechestru și confiscare */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Măsuri asigurătorii, sechestru și confiscare</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Legislația românească impune confiscarea bunurilor folosite, destinate sau provenite din infracțiuni de spălare a banilor, iar echivalentul valoric este confiscat dacă bunurile nu pot fi identificate. Art. 50 din Legea 129/2019 prevede instituirea sechestrului.
            </p>
            <p>
              În mai 2025, Codul de procedură penală a fost modificat prin Legea 70/2025 pentru a clarifica procedura sechestrului și drepturile părților:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Procurorul, judecătorul de cameră preliminară sau instanța pot lua măsuri asigurătorii pentru a evita ascunderea, distrugerea sau înstrăinarea bunurilor ce pot face obiectul confiscării speciale ori extinse. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=,a%20reparării%20pagubei%20produse%20prin" target="_blank" rel="noopener noreferrer" className="underline">(Legea 70/2025)</a>
              </li>
              <li>
                Noi alineate (6^1 – 6^4): în cursul urmăririi penale măsurile se dispun de procuror prin ordonanță; se comunică imediat suspectului și părții civile; dacă cererea părții civile e respinsă, decizia se comunică de îndată. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=patru%20noi%20alineate%2C%20alin.%20%286%5E1%29,cu%20următorul%20cuprins" target="_blank" rel="noopener noreferrer" className="underline">(alin. 6^1–6^4)</a>
              </li>
              <li>
                Hotărârea se pronunță în camera de consiliu, fără citarea părților; judecata este de urgență, iar participarea procurorului este obligatorie. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=%286,Participarea%20procurorului%20este%20obligatorie" target="_blank" rel="noopener noreferrer" className="underline">(procedură)</a>
              </li>
              <li>
                Inculpatul, procurorul și partea civilă pot contesta măsura în 48 de ore; contestația se depune la instanța care a dispus sechestrul.
              </li>
            </ul>
            <p>
              În practică, o apărare eficientă presupune prezentarea documentelor care atestă proveniența licită a bunurilor și contestarea imediată a măsurilor disproporționate.
            </p>
          </CardContent>
        </Card>

        {/* De ce contează delimitarea */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce contează delimitarea între infracțiuni</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Confuzia între spălare de bani, tăinuire, abuz de încredere și bancrută frauduloasă poate fi fatală într‑un proces penal. Fiecare infracțiune are elemente constitutive diferite:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Spălarea banilor presupune disimulare/inserare a bunurilor provenite ilicit în circuitul licit; pentru lit. c) (dobândire/folosire) făptuitorul trebuie să fie diferit de autorul faptei‑sursă.</li>
              <li>Tăinuirea sancționează primirea sau valorificarea bunului știind că provine dintr‑o infracțiune, fără disimulare.</li>
              <li>Abuzul de încredere și bancruta frauduloasă privesc relația debitor‑creditor și insolvența.</li>
            </ul>
            <p>
              Delimitarea exactă determină strategia de apărare, probele necesare și eventualele excepții procedurale. Rolul meu este să arăt când conduita calificată drept „spălare” este, de fapt, tăinuire sau bancrută, reducând astfel riscul unor sancțiuni disproporționate.
            </p>
          </CardContent>
        </Card>

        {/* Cum abordez un dosar */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum abordez un dosar de spălare de bani și ascundere de bunuri</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <h3 className="text-xl font-semibold">1. Evaluarea faptelor și cartografierea fluxurilor</h3>
            <p>Identific faptele‑sursă (fraudă, evaziune, corupție etc.) și analizez fluxurile financiare, inclusiv tranzacții pe blockchain/cripto. Un simplu transfer sau o schimbare formală nu înseamnă automat „spălare”.</p>
            <h3 className="text-xl font-semibold">2. Strategia de apărare diferențiată</h3>
            <p>În funcție de încadrare: pentru spălare – standardul probator al cunoașterii originii ilicite și legătura cu fapta‑sursă; pentru tăinuire – lipsa disimulării; pentru bancrută/abuz – existența reală a insolvenței și a scopului fraudulos.</p>
            <h3 className="text-xl font-semibold">3. Gestionarea măsurilor asigurătorii</h3>
            <p>Atac proporționalitatea și obiectul sechestrului, oferind documentația patrimonială necesară; legea permite ridicarea/restrângerea când activitatea economică e paralizată. Noua procedură (Legea 70/2025) conferă părții civile un rol activ și drepturi de contestație.</p>
            <h3 className="text-xl font-semibold">4. Litigiul probelor și excepțiile procedurale</h3>
            <p>Exclud probele obținute ilegal, verific lanțul de custodie și legalitatea interceptărilor; contest interpretările excesive privind „beneficiarul real” și KYC.</p>
            <h3 className="text-xl font-semibold">5. Remedii și conformare</h3>
            <p>Pentru sectoare reglementate (finanțe, imobiliare, cripto), implementez conformarea cu Legea 129/2019 și normele ONPCSB: politici KYC, procese interne pentru beneficiarii reali, instruirea angajaților, auditul tranzacțiilor suspecte; negocieri cu autoritățile când este util.</p>
          </CardContent>
        </Card>

        {/* Întrebări frecvente */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              <strong>Trebuie să existe o condamnare pentru fapta‑sursă?</strong> Nu neapărat. E suficient să se dovedească faptul că bunurile provin dintr‑o infracțiune și că inculpatul cunoștea această proveniență. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=Constituie%20infrac%C8%9Biuni%20de%20evaziune%20fiscal%C4%83,f" target="_blank" rel="noopener noreferrer" className="underline">(referință)</a>
            </p>
            <p>
              <strong>Autorul faptei‑sursă poate fi acuzat și de spălare a banilor?</strong> Da. Pentru art. 49 lit. a) și b) nu se cere ca făptuitorul să fie diferit; pentru lit. c) este necesar un terț.
            </p>
            <p>
              <strong>Se pot ridica sechestrul și poprirea dacă paralizează activitatea?</strong> Da. Instanța trebuie să respecte principiul proporționalității; potrivit modificărilor din 2025, măsurile pot fi contestate și restrânse dacă afectează disproporționat activitatea economică.
            </p>
          </CardContent>
        </Card>

        {/* Concluzie + CTA final */}
        <Card className="mt-8 border-accent">
          {/* Removed header as requested */}
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Dosarele de spălare de bani și ascundere de bunuri nu sunt simple ecuații financiare.
            </p>
            <p>
              O apărare eficientă combină analiza tehnică a fluxurilor financiare cu o strategie juridică adaptată fiecărui capăt de acuzare și o gestiune atentă a măsurilor asigurătorii.
            </p>
            <p>
              Dacă sunteți vizat de o anchetă, acționați rapid: documentați proveniența bunurilor, consultați un specialist și pregătiți strategia încă din faza de urmărire penală.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                <a href="tel:+40745506443" aria-label="Sună acum pentru analiză confidențială">
                  <Phone className="mr-2" /> Sună acum
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
