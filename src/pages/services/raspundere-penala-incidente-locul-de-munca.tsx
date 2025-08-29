import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function RaspunderePenalaMunca() {
  useSEO({
    title: "Răspundere penală pentru incidente la locul de muncă | Avocat drept penal Bogdan Lamatic | București",
    description: "Asistență specializată în cauze penale privind accidentele de muncă și răspunderea penală pentru nerespectarea normelor de securitate.",
    alternates: { ro: "/servicii/raspundere-penala-incidente-locul-de-munca", en: "/en/services/workplace-criminal-liability" },
    canonical: "/servicii/raspundere-penala-incidente-locul-de-munca",
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
              { "@type": "ListItem", position: 1, name: "Acasă", item: typeof window !== "undefined" ? `${window.location.origin}` : "/" },
              { "@type": "ListItem", position: 2, name: "Răspundere penală pentru incidente la locul de muncă", item: typeof window !== "undefined" ? `${window.location.origin}/servicii/raspundere-penala-incidente-locul-de-munca` : "/servicii/raspundere-penala-incidente-locul-de-munca" },
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
            name: "Răspundere penală pentru incidente la locul de muncă",
            url: typeof window !== "undefined" ? `${window.location.origin}/servicii/raspundere-penala-incidente-locul-de-munca` : "/servicii/raspundere-penala-incidente-locul-de-munca",
            areaServed: ["RO", "EU"],
            availableLanguage: ["ro", "en"],
            provider: { "@type": "Person", name: "Bogdan Lamatic", telephone: "+40 745 506 443" },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Răspundere penală pentru incidente la locul de muncă | Avocat drept penal Bogdan Lamatic | București</h1>
        
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
              <BreadcrumbPage>Răspundere penală pentru incidente la locul de muncă</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
          <p>
            În cariera mea de avocat de drept penal, am văzut ce înseamnă să trăiești pe marginea prăpastiei dintre ordine şi haos.
          </p>
          <p>
            În fiecare accident de muncă, în fiecare investigație penală pentru nerespectarea normelor de securitate, există un amestec de responsabilitate, neglijență şi tragedie.
          </p>
          <p>
            Îmi desfășor activitatea în București și mă numesc Bogdan Lamatic – am 18 ani de experiență în drept penal și numeroase cazuri de succes în domeniul white‑collar crime.
          </p>
        </div>

        <div className="mt-6">
          <a href="tel:+40745506443" aria-label="Sună acum">
            <Button variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone /> Sună acum
            </Button>
          </a>
        </div>

        {/* Cadrul general */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Cadrul general al securității şi sănătății în muncă</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              În România, responsabilitatea pentru sănătatea şi securitatea lucrătorilor este reglementată de <strong>Legea nr. 319/2006</strong>, actualizată în 2021.
            </p>
            <p>
              Aceasta prevede că angajatorul trebuie să asigure securitatea şi sănătatea lucrătorilor în toate aspectele legate de muncă, inclusiv atunci când apelează la servicii externe; obligațiile salariaților nu exonerează angajatorul.
            </p>
            <p>În cadrul acestei responsabilități, angajatorul este obligat să ia măsuri pentru:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>asigurarea securității şi protecția sănătății lucrătorilor;</li>
              <li>prevenirea riscurilor profesionale;</li>
              <li>informarea şi instruirea lucrătorilor;</li>
              <li>asigurarea cadrului organizatoric și a mijloacelor necesare;</li>
              <li>adaptarea continuă a acestor măsuri la schimbarea condițiilor.</li>
            </ul>
            <p>
              Legea stabileşte şi principiile generale de prevenire: evitarea riscurilor, evaluarea şi combaterea riscurilor la sursă, adaptarea muncii la om, adaptarea la progresul tehnic, dezvoltarea unei politici de prevenire coerente şi prioritatea protecției colective faţă de protecția individuală.
            </p>
          </CardContent>
        </Card>

        {/* Ce este un accident de muncă */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce este un „accident de muncă"?</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Conform <strong>art. 5 din Legea 319/2006</strong>, accidentul de muncă este „vătămarea violentă a organismului sau intoxicaţia acută profesională care au loc în timpul procesului de muncă ori în îndeplinirea îndatoririlor de serviciu şi care provoacă incapacitate temporară de muncă de cel puţin 3 zile, invaliditate ori deces".
            </p>
            <p>
              Această definiţie include şi accidentele pe traseu, incidentele periculoase şi bolile profesionale. Prin urmare, orice incident serios în legătură cu activitatea profesională poate genera răspunderi multiple, inclusiv penale.
            </p>
          </CardContent>
        </Card>

        {/* Forme de răspundere */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Forme de răspundere în urma incidentelor de muncă</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Legislaţia română distinge între răspunderea disciplinară, contravențională, civilă şi penală. Angajatorii se confruntă adesea cu toate aceste forme simultan.
            </p>
            <p>În calitate de avocat, analizez întotdeauna întregul spectru de riscuri juridice:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Răspunderea disciplinară</strong> – aplicarea de sancțiuni interne salariaților sau managerilor pentru încălcarea regulilor de SSM. Aceasta nu scuteşte angajatorul de celelalte răspunderi.</li>
              <li><strong>Răspunderea civilă</strong> – obligația angajatorului de a despăgubi victima pentru prejudiciul neacoperit prin asigurările sociale sau de sănătate. Legea 319/2006 şi Codul Muncii prevăd că angajatorul rămâne responsabil chiar dacă folosește servicii externe.</li>
              <li><strong>Răspunderea contravențională</strong> – inspectoratele teritoriale de muncă pot aplica amenzi pentru nerespectarea normelor de securitate şi sănătate, chiar dacă nu s‑a produs un accident. În caz de accident grav, amenda poate fi dublată şi combinată cu oprirea activității.</li>
              <li><strong>Răspunderea penală</strong> – intervine atunci când nerespectarea normelor de securitate produce sau creează un pericol iminent de accident ori de boală profesională. Aceasta este cea mai severă formă de răspundere şi va fi detaliată în continuare.</li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA Button after 3rd card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="Vreau avocat - Sună acum">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              Vreau avocat!
            </Button>
          </a>
        </div>

        {/* Răspunderea penală */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Răspunderea penală pentru nerespectarea normelor de securitate</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>În Codul penal există 2 infracțiuni principale legate de securitatea şi sănătatea în muncă:</p>
            
            <h3 className="text-xl font-semibold mt-6">Neluarea măsurilor legale de securitate şi sănătate (art. 349 Cod penal)</h3>
            <p>
              Acest articol sancţionează omisiunea persoanei responsabile de a adopta măsurile legale de securitate şi sănătate dacă se creează un pericol iminent de producere a unui accident sau de îmbolnăvire profesională. Pedeapsa este închisoarea de la 6 luni la 3 ani sau amenda, iar în varianta din culpă se reduce la 3 luni – 1 an. Particularitatea acestei infracțiuni este că se consumă prin simpla omisiune – nu este necesar să se fi produs un accident pentru a fi angajată răspunderea penală.
            </p>

            <h3 className="text-xl font-semibold mt-6">Nerespectarea măsurilor legale de securitate şi sănătate (art. 350 Cod penal)</h3>
            <p>
              Articolul 350 incriminează fapta oricărei persoane de a încălca obligațiile legale privind securitatea şi sănătatea în muncă, dacă prin aceasta se creează un pericol iminent de accident sau de îmbolnăvire. Pedeapsa este similară: 6 luni – 3 ani de închisoare sau amenda. Repunerea în funcțiune a utilajelor sau instalaţiilor fără a elimina deficiențele pentru care s‑au oprit constituie infracțiune. Ca şi la art. 349, dacă fapta este săvârşită din culpă, limitele se reduc la 3 luni – 1 an.
            </p>

            <p>
              Aceste infracţiuni se numesc „de pericol" – legea protejează viaţa şi integritatea lucrătorilor chiar dacă accidentul nu s‑a produs. Ca urmare, procurorii pot deschide dosar penal imediat ce un control constată omisiuni grave de SSM.
            </p>

            <h3 className="text-xl font-semibold mt-6">Răspunderea pentru uciderea sau vătămarea din culpă (art. 192 şi art. 196 Cod penal)</h3>
            <p>
              Dacă un accident de muncă produce decesul sau vătămarea gravă a unui lucrător, intră în discuție infracțiunile de ucidere din culpă profesională şi vătămare corporală din culpă. Uciderea din culpă profesională (art. 192 alin. 2) se comite atunci când o persoană ucide o alta din culpă, ca urmare a nerespectării dispozițiilor legale ori a măsurilor de prevenire pentru exercitarea unei profesii sau meserii. Pedeapsa legală este închisoarea de la 2 la 7 ani, iar dacă fapta produce moartea a 2 sau mai multe persoane, limitele se majorează.
            </p>
            <p>
              În practica penală, aceste infracțiuni apar adesea împreună: procurorul pune în sarcina făptuitorului atât art. 349/350 pentru nerespectarea obligațiilor preventive, cât şi art. 192/196 pentru rezultatul produs.
            </p>

            <h3 className="text-xl font-semibold mt-6">Răspunderea penală a persoanelor juridice</h3>
            <p>
              Codul penal prevede că persoana juridică (cu excepția statului și a autorităților publice) răspunde penal pentru infracțiunile comise în realizarea obiectului de activitate sau în interesul ori în numele său. Această răspundere nu exclude răspunderea penală a persoanei fizice care a contribuit la săvârșirea aceleiași fapte. O societate comercială poate fi inculpată pentru art. 349/350, art. 192 sau art. 196, iar sancțiunile pot include amenda penală, dizolvarea sau suspendarea activității.
            </p>
          </CardContent>
        </Card>

        {/* De ce apar astfel de cazuri */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce apar astfel de cazuri?</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Experiența mea arată că majoritatea accidentelor de muncă nu sunt rodul răutății, ci al indiferenței și al haosului în organizarea responsabilităților.
            </p>
            <p>
              Implementarea constantă a procedurilor de securitate, educarea angajaţilor și investiția în cultura organizațională sunt esențiale.
            </p>
            <p>
              Când managementul tratează securitatea ca pe un „cost" sau o „formalitate", haosul se infiltrează şi generează tragedii.
            </p>
          </CardContent>
        </Card>

        {/* Studii de caz */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Studii de caz</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>În ultimii ani au existat numeroase anchete penale cu repercusiuni serioase:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>O companie de construcţii nu a verificat starea schelelor; un muncitor a căzut şi a decedat. Procurorul a încadrat fapta la art. 192 alin. 2 şi art. 349, trimițând în judecată atât societatea, cât şi responsabilul SSM. În final, compania a primit amendă penală, iar responsabilul a fost condamnat cu suspendare.</li>
              <li>Într‑o fabrică, repornirea unei prese cu defecţiuni înainte de remediere a provocat amputarea braţului unui operator. Fapta a fost încadrată la art. 350 alin. 2 şi art. 196 alin. 3, demonstrând că ignorarea dispozițiilor de oprire poate fi fatală.</li>
              <li>În alt caz, neglijarea instruirii lucrătorilor la un depozit de combustibili a dus la o explozie şi la moartea mai multor persoane. Instanţa a reținut uciderea din culpă profesională, cu o pedeapsă de 4 ani de închisoare cu executare pentru administrator.</li>
            </ul>
            <p>
              Aceste exemple arată că măsurile de prevenire şi respectarea strictă a reglementărilor sunt esențiale. Ele confirmă și interpretarea doctrinară că infracțiunile de la art. 349 şi art. 350 sunt fapte de omisiune, care se consumă când există o stare de pericol iminent, chiar fără producerea accidentului.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 6th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="Vreau avocat - Sună acum">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              Vreau avocat!
            </Button>
          </a>
        </div>

        {/* Obligațiile lucrătorilor */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Obligaţiile lucrătorilor</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Legea nr. 319/2006 stabileşte nu doar obligaţiile angajatorului, ci şi pe cele ale lucrătorilor.
            </p>
            <p>
              Fiecare salariat trebuie să‑şi desfăşoare activitatea în conformitate cu pregătirea şi instrucţiunile primite, astfel încât să nu expună la pericol propria persoană sau alte persoane.
            </p>
            <p>Aceştia au obligaţia să:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>folosească corect maşinile, echipamentele, uneltele şi substanţele periculoase;</li>
              <li>utilizeze şi să returneze echipamentul individual de protecţie;</li>
              <li>nu dezactiveze dispozitivele de siguranţă;</li>
              <li>comunice imediat angajatorului orice situaţie de pericol sau accident;</li>
              <li>coopereze cu inspectorii de muncă;</li>
              <li>respecte legislaţia SSM.</li>
            </ul>
            <p>
              Îndeplinirea acestor obligaţii poate preveni accidentele şi poate reduce propria răspundere penală.
            </p>
          </CardContent>
        </Card>

        {/* Procedura de raportare și cercetare */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Procedura de raportare şi cercetare a accidentelor</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              În cazul unui accident, primul pas este comunicarea imediată. Orice incident definit de lege – de la accidentul care a produs deces sau vătămări, la incidentul periculos ori accidentul de traseu – trebuie comunicat de îndată angajatorului.
            </p>
            <p>
              Dacă printre victime se află lucrători ai altor angajatori, evenimentul trebuie comunicat şi acestora.
            </p>
            <p>
              În accidentele de circulaţie cu victime aflate în îndeplinirea îndatoririlor de serviciu, poliţia rutieră comunică evenimentul la ITM. Comunicarea include datele esenţiale: denumirea angajatorului, locul, data şi ora accidentului, identitatea victimei, împrejurările cunoscute şi consecinţele.
            </p>
            <p>
              Angajatorul trebuie să păstreze starea locului până la sosirea organelor de cercetare, cu excepţia situaţiilor în care menţinerea acestei stări ar genera noi pericole; atunci se fac fotografii şi se întocmeşte un proces‑verbal cu modificările.
            </p>
            <p>
              Cercetarea accidentului are ca scop stabilirea împrejurărilor, cauzelor, reglementărilor încălcate şi a răspunderilor. Pentru accidentele cu incapacitate temporară de muncă, cercetarea este efectuată de o comisie desemnată de angajator, formată din cel puţin 3 persoane – un lucrător desemnat, un reprezentant al serviciului intern sau extern de prevenire.
            </p>
            <p>
              Persoanele implicate în producerea accidentului sau responsabilul SSM nu pot face parte din comisie.
            </p>
            <p>
              În caz de deces, invaliditate evidentă, accident colectiv sau incidente periculoase, cercetarea este realizată de ITM. Termenele de finalizare sunt de 10 zile lucrătoare pentru evenimentele cu incapacitate temporară de muncă şi de 15 zile pentru cele cu deces sau invaliditate.
            </p>
            <p>
              Dosarul de cercetare trebuie să conţină procesul‑verbal de cercetare, nota de constatare la faţa locului, schiţe, fotografii, declaraţii ale victimelor şi martorilor, fişele de instruire SSM şi orice alte documente relevante. Nerespectarea acestei proceduri poate influenţa grav aprecierea vinovăţiei.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 9th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="Vreau avocat - Sună acum">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              Vreau avocat!
            </Button>
          </a>
        </div>

        {/* Compensații și drepturile victimelor */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Compensaţii şi drepturile victimelor</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              În paralel cu răspunderea penală, victimele au dreptul la prestaţii din sistemul asigurărilor de muncă.
            </p>
            <p>
              Indemnizaţia pentru incapacitate temporară se calculează ca medie a câştigurilor brute din ultimele 6 luni, iar pentru salariaţii cu vechime sub 6 luni se calculează pe perioada efectiv lucrată.
            </p>
            <p>
              Compensaţia pentru atingerea integrităţii se stabileşte în funcţie de gravitatea leziunii şi poate ajunge până la 12 salarii de bază minime.
            </p>
            <p>
              În caz de deces, persoanele îndreptăţite (soţul supravieţuitor, copilul, părintele, tutorele sau moştenitorii) primesc o despăgubire unică de 4 salarii medii brute.
            </p>
            <p>
              Victimele pot solicita pensie de invaliditate, iar urmaşii – pensie de urmaş, conform Legii nr. 360/2023.
            </p>
            <p>
              Pentru accidentele produse în străinătate, costurile medicale şi transportul sunt rambursate de instituţia din România atunci când salariatul rămâne supus legislaţiei române.
            </p>
            <p>
              Toate aceste prestaţii nu înlătură dreptul de a cere despăgubiri civile suplimentare.
            </p>
          </CardContent>
        </Card>

        {/* Externalizarea serviciilor SSM */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Externalizarea serviciilor SSM şi răspunderea angajatorului</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Un aspect controversat în practică îl reprezintă externalizarea serviciilor de securitate şi sănătate în muncă.
            </p>
            <p>
              Legea nr. 319/2006 permite angajatorului să apeleze la servicii externe pentru elaborarea planurilor de protecţie şi instruirea salariaţilor.
            </p>
            <p>
              Cu toate acestea, art. 6 alin. (2) stipulează clar că recurgerea la un specialist extern nu îl exonerează de responsabilitatea sa.
            </p>
            <p>
              Procurorii pot atrage răspunderea penală a angajatorului alături de specialistul extern atunci când se constată lipsa sau nepunerea în aplicare a măsurilor SSM.
            </p>
            <p>
              Eu am argumentat în instanță că răspunderea penală este individuală – trebuie imputată o conduită concretă, nu simpla delegare; de aceea, în apărare, analizăm detaliat contractul cu serviciul extern şi nivelul de control exercitat de angajator.
            </p>
            <p>
              Sesizarea Înaltei Curţi pentru dezlegarea chestiunii de drept ar putea clarifica jurisprudenţa.
            </p>
          </CardContent>
        </Card>

        {/* CTA Button after 12th card */}
        <div className="mt-6 text-center">
          <a href="tel:+40745506443" aria-label="Vreau avocat - Sună acum">
            <Button variant="premium" size="lg" className="border border-hero-foreground relative overflow-hidden after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <Phone className="mr-2 h-5 w-5" />
              Vreau avocat!
            </Button>
          </a>
        </div>

        {/* Obligația de asigurare */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Obligaţia de asigurare</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Codul muncii stipulează că angajatorul trebuie să asigure toţi salariaţii pentru riscul de accidente de muncă şi boli profesionale.
            </p>
            <p>
              De asemenea, angajatorul are obligaţia de a organiza instruirea periodică a lucrătorilor, de a controla permanent starea echipamentelor şi de a crea condiţii pentru acordarea primului ajutor şi evacuarea salariaţilor în caz de pericol. Nerespectarea acestor obligaţii poate duce la amenzi contravenţionale şi susţine acuzaţiile penale.
            </p>
          </CardContent>
        </Card>

        {/* Alte riscuri */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Alte riscuri</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Anumite domenii – construcţii, agricultură, industria extractivă, transporturi – prezintă riscuri sporite. Normele metodologice definesc zone cu risc ridicat, în care se impun măsuri suplimentare.
            </p>
            <p>
              Angajatorii cu peste 50 de salariaţi trebuie să constituie comitete de securitate şi sănătate în muncă. Actualizarea periodică a evaluărilor de risc şi adaptarea la progresul tehnic sunt esenţiale.
            </p>
          </CardContent>
        </Card>

        {/* Strategii de prevenție și apărare */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Strategii de prevenţie şi apărare</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>În calitate de avocat penalist, îmi concentrez activitatea pe două direcții complementare:</p>
            
            <h3 className="text-xl font-semibold mt-6">Prevenţia</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizez audituri şi consultanţă în domeniul securităţii; identific riscurile juridice şi ajut companiile să implementeze măsuri conform Legii 319/2006: evaluarea riscurilor, planuri de prevenire, instruire periodică, documentație SSM.</li>
              <li>Promovez o cultură a responsabilității: securitatea nu trebuie văzută ca un cost, ci ca parte din identitatea organizațională. Acceptarea responsabilității pentru binele comun reduce radical probabilitatea accidentelor.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Apărarea în cazul unor investigații penale</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analizez încadrările juridice; multe dosare sunt instrumentate pe baza unor interpretări extinse ale legii, de aceea identific elementele care pot conduce la clasare.</li>
              <li>Susţin diligenţa angajatorului prin documente: instruiri, verificări tehnice, rapoarte către autorităţi.</li>
              <li>Valorific separaţia responsabilităţilor: demonstrăm când infracţiunea este exclusiv rezultatul unei conduite individuale, astfel încât compania să nu fie trasă la răspundere penală.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disciplina și responsabilitatea */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Disciplina şi responsabilitatea</h2>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-3">
            <p>
              Tragediile de muncă ne confruntă cu fragilitatea vieţii şi necesitatea disciplinei.
            </p>
            <p>
              Răspunderea penală pentru incidentele de la locul de muncă nu este doar o sancțiune; este un apel la responsabilitate şi la implementarea de măsuri reale, nu de faţadă.
            </p>
            <p>
              Ca avocat în Bucureşti, cu o carieră consacrată în drept penal şi white‑collar crime, am asistat clienţi corporativi şi persoane fizice în investigaţii complexe, fiind recunoscut de Legal 500 pentru abilitatea de a obţine soluții favorabile.
            </p>
            <p>
              Dacă vă confruntați cu un accident de muncă sau doriți să preveniți un dezastru, sunați‑mă pentru o analiză profundă şi o strategie adaptată situaţiei dvs.
            </p>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
