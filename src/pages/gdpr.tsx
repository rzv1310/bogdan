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
              <a href="/" className="underline hover:no-underline">Acasă</a>
            </li>
            <li>/</li>
            <li aria-current="page">GDPR</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>I. DATELE PERSONALE PE CARE LE PRELUCRĂM</h2>
          <p>
            În scopurile Prelucrării stipulate în punctul III de mai jos, prelucrăm datele dumneavoastră personale, denumite în continuare "Datele personale". Datele personale vor include, după caz, atât Informațiile dumneavoastră personale, cât și Categoriile speciale de date personale, astfel cum sunt definite în continuare.
          </p>
          <p>
            "Informațiile personale" înseamnă: numele și prenumele dumneavoastră, data și locul nașterii, titlul postului și numele companiei/entității din care faceți parte, adresa poștală incluzând adresa de domiciliu, adresa de serviciu, numărul de telefon, numărul de telefon mobil, numărul de fax și adresa de e-mail și alte date similare cu privire la dumneavoastră, plățile efectuate, cererile și proiectele, informațiile colectate din surse publice și baze de date, informații privind litigiile relevante și importante sau alte acțiuni în instanță inițiate împotriva dumneavoastră sau de către dumneavoastră împotriva unuia dintre afiliații dumneavoastră terți, adresa IP, alte date personale privind preferințele dumneavoastră, care pot fi relevante pentru orice scopuri referitoare la prestarea serviciilor noastre, detalii și informații despre vizitele dumneavoastră la birourile noastre, precum și alte date legate de interacțiunea cu noi.
          </p>
          <p>
            În plus, în cursul activităților noastre, putem prelucra următoarele Categorii speciale de date personale despre dumneavoastră, precum: codul numeric personal, seria și numărul cărții de identitate, date privind opiniile dumneavoastră politice, date privind sănătatea dumneavoastră, date privind apartenența la sindicate și date referitoare la condamnări penale și infracțiuni.
          </p>
        </section>

        <section>
          <h2>II. COLECTAREA DATELOR PERSONALE</h2>
          <p>Vom colecta Datele dumneavoastră personale direct de la dumneavoastră, în anumite circumstanțe, incluzând:</p>
          <ul>
            <li>Când solicitați consultanță juridică, fiscală, în domeniul insolvenței sau reprezentare din partea noastră;</li>
            <li>Când navigați, solicitați informații sau interacționați pe website-ul nostru;</li>
            <li>Când prestați sau vă oferiți să prestați servicii pentru noi;</li>
            <li>Când ne comunicați în mod voluntar, din orice motiv, Datele dumneavoastră personale.</li>
          </ul>
          <p>
            În anumite circumstanțe, colectăm Datele dumneavoastră personale de la o sursă terță. De exemplu, putem colecta Date personale de la angajatorul dumneavoastră, alte companii sau persoane cu care sunteți conectat(ă), agenții guvernamentale, birouri de credit, furnizori de informații sau servicii sau din arhive publice.
          </p>
        </section>

        <section>
          <h2>III. SCOPURILE PRELUCRĂRII</h2>
          <p>Prelucrăm Datele dumneavoastră personale în măsura permisă sau cerută de legea aplicabilă pentru următoarele scopuri:</p>
          <ul>
            <li>Comunicarea cu dumneavoastră, în vederea informării permanente despre dezvoltarea serviciului solicitat, analiza și îmbunătățirea serviciilor dumneavoastră și comunicărilor către dumneavoastră, furnizarea de consultanță juridică, inclusiv consultanță fiscală și în domeniul insolvenței sau a altor servicii și alte măsuri pe care le-ați putea solicita, inclusiv reprezentarea juridică în fața instanțelor de judecată, tribunalelor arbitrale sau altor autorități competente;</li>
            <li>Gestionarea și administrarea relației de afaceri dintre dumneavoastră și Cabinetul de Avocatura Bogdan Lamatic, inclusiv procesarea plăților, contabilitatea, auditul, facturarea și colectarea, serviciile de asistență;</li>
            <li>Respectarea obligațiilor noastre legale (precum obligațiile de a păstra evidențe), obligațiilor de a revizui conformitatea sau de a înregistra (precum în conformitate cu legile privind sancțiunile comerciale și embargoul, legile antitrust, în scopul combaterii spălării banilor, revizuirea financiară și conformitatea, în scopul prevenirii și identificării fraudelor și crimelor), care pot include verificări automate ale Datelor dumneavoastră personale în raport cu listele aplicabile de persoane supuse sancțiunilor și contactarea dumneavoastră pentru confirmarea identității, în cazul unui posibil rezultat pozitiv, sau înregistrarea interacțiunii pe care am avut-o cu dumneavoastră, care ar putea fi relevantă în scopuri de conformitate;</li>
            <li>Protecția siguranței și gestionarea accesului la sediul nostru, sisteme IT și de comunicare, platforme online, website-uri și alte sisteme, prevenirea și detectarea amenințărilor la securitate, fraudelor sau altor activități criminale;</li>
            <li>Pentru a asigura monitorizarea și evaluarea conformității cu politicile și standardele noastre, în vederea identificării persoanelor autorizate să efectueze tranzacții în numele clienților noștri, beneficiarilor serviciilor noastre, furnizorilor și/sau prestatorilor;</li>
            <li>Pentru a asigura respectarea hotărârilor judecătorești și aplicarea și/sau apărarea drepturilor noastre legale; și</li>
            <li>Pentru orice scop legat și/sau adițional la oricare dintre cele de mai sus.</li>
          </ul>
          <p>
            Cu privire la comunicările legate de marketing, vă vom pune la dispoziție, dacă este cerut de lege, astfel de informații doar după ce selectați această opțiune pentru a primi astfel de comunicări și vă vom oferi posibilitatea de a vă dezabona în orice moment, dacă nu mai doriți să primiți comunicări legate de marketing din partea noastră. Nu vom folosi Datele dumneavoastră personale atunci când luăm decizii automate care vă pot afecta sau creează profiluri, altele decât cele descrise mai sus.
          </p>
        </section>

        <section>
          <h2>IV. TEMEIURILE PENTRU PRELUCRAREA DATELOR DUMNEAVOASTRĂ PERSONALE</h2>
          <p>Orice operațiune care echivalează cu o Prelucrare a Datelor dumneavoastră personale se va efectua pe baza unuia sau mai multor temeiuri legale descrise mai jos:</p>
          <ul>
            <li>Prelucrarea se bazează pe consimțământul dumneavoastră ca temei legal pentru colectarea, stocarea și utilizarea Datelor dumneavoastră personale, astfel cum este permis de legea aplicabilă;</li>
            <li>Prelucrarea este necesară pentru îndeplinirea unui contract la care sunteți parte, sau, o astfel de Prelucrare este necesară pentru încheierea unui contract cu dumneavoastră;</li>
            <li>Prelucrarea este necesară pentru respectarea unei obligații legale;</li>
            <li>Prelucrarea este necesară pentru protejarea intereselor vitale ale dumneavoastră sau ale altei persoane;</li>
            <li>Prelucrarea este necesară pentru interesele legitime ale Cabinetului Avocat Bogdan Lamatic sau ale unei terțe părți, cu excepția cazului în care interesele, drepturile și libertățile dumneavoastră prevalează asupra acestor interese. Folosim Datele dumneavoastră personale pentru interesele noastre legitime, și anume, pentru a exercita obligațiile și drepturile noastre derivând dintr-un contract încheiat cu compania/entitatea dumneavoastră, în vederea îmbunătățirii performanței noastre și a metodei de lucru și în scopuri administrative și de detectare a fraudelor.</li>
          </ul>
          <p>
            Dacă dispozițiile legale aplicabile cer consimțământul dumneavoastră prealabil și explicit pentru Prelucrarea unor Categorii speciale de date personale, vom prelucra astfel de date doar pe baza consimțământului dumneavoastră prealabil și explicit.
          </p>
          <p>
            Puteți alege să vă retrageți consimțământul cu privire la materialele de marketing în orice moment, pur și simplu accesând linkul "dezabonează-te" din nota de subsol a fiecărei buletine informative sau invitații la evenimente.
          </p>
        </section>

        <section>
          <h2>V. TRANSFERURILE DE DATE, DESTINATARII ȘI TEMEIURILE LEGALE</h2>
          <p>În timpul desfășurării activității noastre, putem trimite Datele dumneavoastră personale către:</p>
          <ul>
            <li>Avocați, alți profesioniști din domeniul juridic, inclusiv mediatori, notari, executori judecătorești, consultanți sau experți implicați în cazul dumneavoastră, dacă o astfel de transmitere de date este necesară datorită obiectului cazului dumneavoastră;</li>
            <li>Instanțe de judecată, autorități de aplicare a legii, autorități de reglementare sau avocați sau alte persoane, dacă acest lucru se dovedește necesar într-un mod justificat, pentru a stabili, exercita sau apăra un drept în instanță sau un drept natural, sau pentru o rezolvare alternativă și confidențială a disputelor;</li>
            <li>Firme de avocatură străine în vederea obținerii de consiliere juridică străină atunci când astfel de consiliere este necesară pentru rezolvarea mandatului încredințat de dumneavoastră sau compania dumneavoastră;</li>
            <li>Companii care furnizează servicii legate de controalele anti-spălare de bani, atenuarea riscului de credit și pentru alte scopuri legate de prevenirea fraudelor și crimelor și către companii care prestează servicii similare, inclusiv instituții financiare, agenții de raportare creditară și autorități de reglementare cu care astfel de date sunt partajate;</li>
            <li>Orice terță parte către care cedăm sau novăm orice drepturi sau obligații în temeiul legii.</li>
          </ul>
          <p>
            În plus, putem transfera Datele dumneavoastră personale către procesatorii noștri, în principal către furnizorii de servicii din cadrul sau din afara Cabinetului Avocat Bogdan Lamatic, în vederea Prelucrării Datelor dumneavoastră personale pentru scopurile autorizate, în numele nostru și strict pe baza instrucțiunilor noastre. Cabinetul de Avocat Bogdan Lamatic va menține controlul asupra Datelor dumneavoastră personale și va folosi garanții adecvate, astfel cum sunt prevăzute în legea aplicabilă, pentru a asigura integritatea și securitatea Datelor dumneavoastră personale în relația cu acei procesatori.
          </p>
          <p>
            În rest, vom transmite Datele dumneavoastră personale doar când suntem instruiți sau autorizați de către dumneavoastră în acest sens sau când acest lucru este cerut în temeiul legii aplicabile sau prin cereri din partea autorităților judiciare sau publice.
          </p>
          <p>
            Putem transfera Datele dumneavoastră personale în străinătate. Anumiți destinatari ai Datelor dumneavoastră personale pot fi localizați în țări pentru care Comisia Europeană nu a emis o decizie privind furnizarea unui nivel adecvat de protecție a datelor, și anume: Statele Unite ale Americii sau unele dintre țările din afara Europei.
          </p>
          <p>
            Anumiți destinatari din afara Spațiului Economic European ("SEE") sunt certificați în cadrul acordului de confidențialitate încheiat între Europa și SUA numit "EU-US Privacy Shield", în timp ce alții sunt localizați în țări pentru care Comisia Europeană a emis decizii de conformitate [Andorra, Argentina, Canada (pentru organizațiile private supuse Legii privind protecția informațiilor personale și documentele electronice), Elveția, Insulele Feroe, Guernsey, Israel, Insula Man, Jersey și Noua Zeelandă]. În fiecare caz, transferul este recunoscut ca oferind un nivel adecvat de protecție a datelor din perspectiva dreptului european privind protecția datelor (Articolul 45 din GDPR).
          </p>
          <p>
            Putem încheia acorduri de transfer de date bazate pe Clauzele Contractuale Standard (Decizia Comisiei Europene 2010/87/EU și/sau Decizia Comisiei Europene 2004/915/EC) în conformitate cu Articolul 46 (5) GDPR sau prin folosirea altor mijloace adecvate, asigurându-ne că toți ceilalți destinatari din afara SEE vor oferi un nivel adecvat de protecție a datelor pentru Datele personale și că există măsuri de securitate tehnice și organizaționale adecvate pentru a proteja Datele personale împotriva distrugerii accidentale sau ilegale, pierderii accidentale sau alterării, dezvăluirii sau accesului neautorizat și împotriva tuturor celorlalte metode de Prelucrare ilegale.
          </p>
        </section>

        <section>
          <h2>VI. SECURITATEA DATELOR DUMNEAVOASTRĂ PERSONALE</h2>
          <p>
            Cabinetul de Avocat Bogdan Lamatic a implementat măsuri tehnice și organizaționale adecvate pentru a menține confidențialitatea și securitatea Datelor dumneavoastră personale în conformitate cu procedurile interne privind stocarea, diseminarea și accesul la Datele personale. Datele personale pot fi păstrate fie stocate în sistemele noastre tehnologice de Date personale, fie pe hârtie.
          </p>
        </section>

        <section>
          <h2>VII. PERIOADA DE PĂSTRARE</h2>
          <p>
            Datele personale prelucrate pentru scopurile specificate aici vor fi păstrate doar atât timp cât poate fi necesar în timpul relației dumneavoastră cu Cabinetul de Avocatura Bogdan Lamatic, precum și ulterior pentru perioadele de păstrare cerute în temeiul legii aplicabile. În cazul în care sunt inițiate proceduri judiciare, Datele personale sunt păstrate până la sfârșitul acestor proceduri, inclusiv pe parcursul oricărei perioade de apel sau apel extraordinar, și ulterior șterse sau arhivate, astfel cum este prevăzut în legea aplicabilă.
          </p>
          <p>
            În principiu, Datele dumneavoastră personale vor fi păstrate atât timp cât este necesar sau permis în temeiul legii aplicabile. Ulterior, după expirarea acestor perioade sau în urma exercitării unuia dintre drepturile dumneavoastră, astfel cum este prevăzut în lege, vom elimina/șterge Datele dumneavoastră personale din sistemele și înregistrările noastre și/sau vom lua orice acțiuni pentru redactarea lor astfel încât să nu mai puteți fi identificat(ă) pe baza lor.
          </p>
        </section>

        <section>
          <h2>VIII. DREPTURILE DUMNEAVOASTRĂ LEGALE</h2>
          <p>
            Dacă v-ați exprimat consimțământul cu privire la activitățile de Prelucrare, puteți retrage acest consimțământ în orice moment cu efecte viitoare. O astfel de retragere nu va afecta legalitatea Prelucrării anterioare retragerii consimțământului dumneavoastră. Ca regulă generală, dacă vă retrageți consimțământul, Cabinetul Avocatului Bogdan Lamatic nu va mai permite Prelucrarea Datelor dumneavoastră personale și va lua orice acțiuni adecvate pentru a șterge orice înregistrări conținând Datele dumneavoastră personale. Cu toate acestea, dacă Prelucrarea este obligatorie pentru furnizarea serviciilor Cabinetului de Avocatura Bogdan Lamatic și Prelucrarea poate fi efectuată pe alte baze legale stipulate de dispozițiile legale aplicabile, Cabinetul de Avocat Bogdan Lamatic va proceda la o astfel de Prelucrare și vă va notifica în acest sens.
          </p>
          <p>În temeiul legilor aplicabile, aveți următoarele drepturi:</p>
          <ul>
            <li><strong>Dreptul de acces:</strong> Aveți dreptul să fiți informat(ă), la cerere, dacă Datele dumneavoastră personale sunt sau nu prelucrate și, în cazul în care este cazul, să solicitați accesul la Datele personale. Informațiile de acces includ, printre altele, scopurile Prelucrării, categoriile de Date personale în cauză și destinatarii sau categoriile de destinatari cărora Datele dumneavoastră personale au fost sau vor fi dezvăluite. Aveți dreptul să obțineți o copie a Datelor dumneavoastră personale prelucrate. Pentru orice copii suplimentare, putem percepe o taxă rezonabilă bazată pe costurile administrative.</li>
            <li><strong>Dreptul la rectificare:</strong> Aveți dreptul ca Datele dumneavoastră personale inexacte să fie rectificate. În funcție de scopurile Prelucrării, aveți dreptul ca Datele dumneavoastră personale incomplete să fie completate, inclusiv prin furnizarea unei declarații suplimentare.</li>
            <li><strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Aveți dreptul să ne cereți să vă ștergem Datele personale.</li>
            <li><strong>Dreptul la restricționarea Prelucrării:</strong> Aveți dreptul să solicitați restricționarea Prelucrării Datelor dumneavoastră personale. În acest caz, respectivele date vor fi marcate și pot fi prelucrate de noi doar pentru anumite scopuri.</li>
            <li><strong>Dreptul la portabilitatea datelor:</strong> Aveți dreptul să primiți Datele dumneavoastră personale furnizate nouă într-un format structurat, utilizat în mod obișnuit și care poate fi citit automat și aveți dreptul să transmiteți aceste Date personale către o altă entitate fără impedimente din partea noastră.</li>
            <li><strong>Dreptul la opoziție:</strong> Aveți dreptul să vă opuneți, pe motive legate de situația dumneavoastră particulară, în orice moment Prelucrării Datelor dumneavoastră personale de către noi și ni se poate cere să nu mai prelucrăm Datele dumneavoastră personale. Dacă aveți dreptul la opoziție și exercitați acest drept, Datele dumneavoastră personale nu vor mai fi prelucrate pentru astfel de scopuri de către noi. Exercitarea acestui drept nu va implica costuri. Acest drept poate fi anulat, în special, dacă Prelucrarea Datelor dumneavoastră personale este necesară pentru a lua măsuri înainte de încheierea unui contract sau pentru a executa un contract deja încheiat.</li>
          </ul>
          <p>
            Puteți exercita oricare dintre drepturile menționate mai sus și puteți primi mai multe informații despre astfel de drepturi prin trimiterea către noi, în calitatea noastră de operator de date, a unei cereri scrise la adresa: Cabinet Avocat Bogdan Lamatic, Strada Colonel Stefan Stoika 22, Bucuresti 012244.
          </p>
          <p>
            De asemenea, aveți dreptul să depuneți o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal.
          </p>
        </section>

        <section>
          <h2>IX. VERSIUNILE ACESTEI POLITICI DE CONFIDENȚIALITATE</h2>
          <p>
            Această Politică de confidențialitate va intra în vigoare începând cu 16 decembrie 2024.
          </p>
          <p>
            Această Politică de confidențialitate poate fi actualizată din când în când. Orice versiune actualizată va intra în vigoare începând cu data publicării sale pe website-ul <a href="/" className="underline hover:no-underline">https://avocatpenalbucuresti.ro/</a> sau începând cu data la care vă este notificată în orice mod.
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
