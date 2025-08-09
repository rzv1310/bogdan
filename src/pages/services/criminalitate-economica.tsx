import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function CriminalitateEconomica() {
  useSEO({
    title: "Criminalitate economică | Servicii avocat penal",
    description: "Asistență și reprezentare în cauze de criminalitate economică.",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-2xl font-semibold mb-2">Criminalitate economică</h1>
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
            <BreadcrumbPage>Criminalitate economică</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-6 space-y-8">
        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Text Legal Infracțiuni Economice. Codul Penal</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Infracțiuni contra libertății persoanei</h3>
            <p><strong>Articolul 207.</strong> Șantajul</p>
            <p>(1) Constrângerea unei persoane să dea, să facă, să nu facă sau să sufere ceva, în scopul de a dobândi în mod injust un folos nepatrimonial, pentru sine ori pentru altul, se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează amenințarea cu darea în vileag a unei fapte reale sau imaginare, compromițătoare pentru persoana amenințată ori pentru un membru de familie al acesteia, în scopul prevăzut în alin. (1).</p>
            <p>(3) Dacă faptele prevăzute în alin. (1) și alin. (2) au fost comise în scopul de a dobândi în mod injust un folos patrimonial, pentru sine sau pentru altul, pedeapsa este închisoarea de la 2 la 7 ani.</p>

            <h3 className="text-lg font-semibold">Infracțiuni contra patrimoniului prin nesocotirea încrederii</h3>
            <p><strong>Articolul 239.</strong> Abuzul de încredere prin fraudarea creditorilor</p>
            <p>(1) Fapta debitorului de a înstrăina, ascunde, deteriora sau distruge, în tot sau în parte, valori ori bunuri din patrimoniul său ori de a invoca acte sau datorii fictive în scopul fraudării creditorilor se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează fapta persoanei care, știind că nu va putea plăti, achiziționează bunuri ori servicii producând o pagubă creditorului.</p>
            <p>(3) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>

            <p><strong>Articolul 240.</strong> Bancruta simplă</p>
            <p>(1) Neintroducerea sau introducerea tardivă, de către debitorul persoană fizică ori de reprezentantul legal al persoanei juridice debitoare, a cererii de deschidere a procedurii insolvenței, într-un termen care depășește cu mai mult de 6 luni termenul prevăzut de lege de la apariția stării de insolvență, se pedepsește cu închisoare de la 3 luni la un an sau cu amendă.</p>
            <p>(2) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>

            <p><strong>Articolul 241.</strong> Bancruta frauduloasă</p>
            <p>(1) Fapta persoanei care, în frauda creditorilor: a) falsifică, sustrage sau distruge evidențele debitorului ori ascunde o parte din activul averii acestuia; b) înfățișează datorii inexistente sau prezintă în registrele debitorului, în alt act sau în situația financiară sume nedatorate;                          c) înstrăinează, în caz de insolvență a debitorului, o parte din active se pedepsește cu închisoarea de la 6 luni la 5 ani.</p>
            <p>(2) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>

            <p><strong>Articolul 242.</strong> Gestiunea frauduloasă</p>
            <p>(1) Pricinuirea de pagube unei persoane, cu ocazia administrării sau conservării bunurilor acesteia, de către cel care are ori trebuie să aibă grija administrării sau conservării acelor bunuri se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Când fapta prevăzută în alin. (1) a fost săvârșită de administratorul judiciar, de lichidatorul averii debitorului sau de un reprezentant sau prepus al acestora, pedeapsa este închisoarea de la unu la 5 ani.</p>
            <p>(3) Faptele prevăzute în alin. (1) și alin. (2) săvârșite în scopul de a dobândi un folos patrimonial se pedepsesc cu închisoarea de la 2 la 7 ani.</p>
            <p>(4) Acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate.</p>

            <p><strong>Articolul 244.</strong> Înșelăciunea</p>
            <p>(1) Inducerea în eroare a unei persoane prin prezentarea ca adevărată a unei fapte mincinoase sau ca mincinoasă a unei fapte adevărate, în scopul de a obține pentru sine sau pentru altul un folos patrimonial injust și dacă s-a pricinuit o pagubă, se pedepsește cu închisoarea de la 6 luni la 3 ani.</p>
            <p>(2) Înșelăciunea săvârșită prin folosirea de nume sau calități mincinoase ori de alte mijloace frauduloase se pedepsește cu închisoarea de la unu la 5 ani. Dacă mijlocul fraudulos constituie prin el însuși o infracțiune, se aplică regulile privind concursul de infracțiuni.</p>
            <p>(3) Împăcarea înlătură răspunderea penală.</p>

            <p><strong>Articolul 245.</strong> Înșelăciunea privind asigurările</p>
            <p>(1) Distrugerea, degradarea, aducerea în stare de neîntrebuințare, ascunderea sau înstrăinarea unui bun asigurat împotriva distrugerii, degradării, uzurii, pierderii sau furtului, în scopul de a obține, pentru sine sau pentru altul, suma asigurată, se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Fapta persoanei care, în scopul prevăzut în alin. (1), simulează, își cauzează sau agravează leziuni sau vătămări corporale produse de un risc asigurat se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(3) Împăcarea înlătură răspunderea penală.</p>

            <p><strong>Articolul 246.</strong> Deturnarea licitațiilor publice</p>
            <p>Fapta de a îndepărta, prin constrângere sau corupere, un participant de la o licitație publică ori înțelegerea între participanți pentru a denatura prețul de adjudecare se pedepsește cu închisoarea de la unu la 5 ani.</p>

            <p><strong>Articolul 247.</strong> Exploatarea patrimonială a unei persoane vulnerabile</p>
            <p>(1) Fapta creditorului care, cu ocazia dării cu împrumut de bani sau bunuri, profitând de starea de vădită vulnerabilitate a debitorului, datorată vârstei, stării de sănătate, infirmității ori relației de dependență în care debitorul se află față de el, îl face să constituie sau să transmită, pentru sine sau pentru altul, un drept real ori de creanță de valoare vădit disproporționată față de această prestație se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Punerea unei persoane în stare de vădită vulnerabilitate prin provocarea unei intoxicații cu alcool sau cu substanțe psihoactive în scopul de a o determina să consimtă la constituirea sau transmiterea unui drept real ori de creanță sau să renunțe la un drept, dacă s-a produs o pagubă, se pedepsește cu închisoarea de la 2 la 7 ani.</p>

            <p><strong>Articolul 248.</strong> Sancționarea tentativei</p>
            <p>Tentativa la infracțiunile prevăzute în art. 239 alin. (1), art. 241 și art. 244-247 se pedepsește.</p>

            <h3 className="text-lg font-semibold">Fraude comise prin sisteme informatice și mijloace de plată electronice</h3>
            <p><strong>Articolul 249.</strong> Frauda informatică</p>
            <p>Introducerea, modificarea sau ștergerea de date informatice, restricționarea accesului la aceste date ori împiedicarea în orice mod a funcționării unui sistem informatic, în scopul de a obține un beneficiu material pentru sine sau pentru altul, dacă s-a cauzat o pagubă unei persoane, se pedepsește cu închisoarea de la 2 la 7 ani.</p>

            <p><strong>Articolul 250.</strong> Efectuarea de operațiuni financiare în mod fraudulos</p>
            <p>(1) Efectuarea unei operațiuni de retragere de numerar, încărcare sau descărcare a unui instrument de monedă electronică ori de transfer de fonduri, prin utilizarea, fără consimțământul titularului, a unui instrument de plată electronică sau a datelor de identificare care permit utilizarea acestuia, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează efectuarea uneia dintre operațiunile prevăzute în alin. (1), prin utilizarea neautorizată a oricăror date de identificare sau prin utilizarea de date de identificare fictive.</p>
            <p>(3) Transmiterea neautorizată către altă persoană a oricăror date de identificare, în vederea efectuării uneia dintre operațiunile prevăzute în alin. (1), se pedepsește cu închisoarea de la unu la 5 ani.</p>

            <p><strong>Articolul 251.</strong> Acceptarea operațiunilor financiare efectuate în mod fraudulos</p>
            <p>(1) Acceptarea unei operațiuni de retragere de numerar, încărcare sau descărcare a unui instrument de monedă electronică ori de transfer de fonduri, cunoscând că este efectuată prin folosirea unui instrument de plată electronică falsificat sau utilizat fără consimțământul titularului său, se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează acceptarea uneia dintre operațiunile prevăzute în alin. (1), cunoscând că este efectuată prin utilizarea neautorizată a oricăror date de identificare sau prin utilizarea de date de identificare fictive.</p>

            <p><strong>Articolul 252.</strong> Sancționarea tentativei</p>
            <p>Tentativa la infracțiunile prevăzute în prezentul capitol se pedepsește.</p>

            <p><strong>Articolul 256^1.</strong> Faptele care au produs consecințe deosebit de grave *)</p>
            <p>Dacă faptele prevăzute la art. 228, 229, 233, 234, 235, 239, 242, 244, 245, 247, art. 249-251 au produs consecințe deosebit de grave, limitele speciale ale pedepsei prevăzute de lege se majorează cu jumătate.</p>
            <p>*) Articolul 183. Consecințe deosebit de grave</p>
            <p>Prin consecințe deosebit de grave se înțelege o pagubă materială mai mare de 2.000.000 lei.</p>

            <h3 className="text-lg font-semibold">Infracțiuni de corupție</h3>
            <p><strong>Articolul 289.</strong> Luarea de mită</p>
            <p>(1) Fapta funcționarului public care, direct ori indirect, pentru sine sau pentru altul, pretinde ori primește bani sau alte foloase care nu i se cuvin ori acceptă promisiunea unor astfel de foloase, în legătură cu îndeplinirea, neîndeplinirea, urgentarea ori întârzierea îndeplinirii unui act ce intră în îndatoririle sale de serviciu sau în legătură cu îndeplinirea unui act contrar acestor îndatoriri, se pedepsește cu închisoare de la 3 la 10 ani și interzicerea exercitării dreptului de a ocupa o funcție publică ori de a exercita profesia sau activitatea în executarea căreia a săvârșit fapta.</p>
            <p>(2) Fapta prevăzută în alin. (1), săvârșită de una dintre persoanele prevăzute în art. 175 alin. (2), constituie infracțiune numai când este comisă în legătură cu neîndeplinirea, întârzierea îndeplinirii unui act privitor la îndatoririle sale legale sau în legătură cu efectuarea unui act contrar acestor îndatoriri.</p>
            <p>(3) Banii, valorile sau orice alte bunuri primite sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>

            <p><strong>Articolul 290.</strong> Darea de mită</p>
            <p>(1) Promisiunea, oferirea sau darea de bani ori alte foloase, în condițiile arătate în art. 289, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
            <p>(2) Fapta prevăzută în alin. (1) nu constituie infracțiune atunci când mituitorul a fost constrâns prin orice mijloace de către cel care a luat mita.</p>
            <p>(3) Mituitorul nu se pedepsește dacă denunță fapta mai înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta.</p>
            <p>(4) Banii, valorile sau orice alte bunuri date se restituie persoanei care le-a dat, dacă acestea au fost date în cazul prevăzut în alin. (2) sau date după denunțul prevăzut în alin. (3).</p>
            <p>(5) Banii, valorile sau orice alte bunuri oferite sau date sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>

            <p><strong>Articolul 291.</strong> Traficul de influență</p>
            <p>(1) Pretinderea, primirea ori acceptarea promisiunii de bani sau alte foloase, direct sau indirect, pentru sine sau pentru altul, săvârșită de către o persoană care are influență sau lasă să se creadă că are influență asupra unui funcționar public și care promite că îl va determina pe acesta să îndeplinească, să nu îndeplinească, să urgenteze ori să întârzie îndeplinirea unui act ce intră în îndatoririle sale de serviciu sau să îndeplinească un act contrar acestor îndatoriri, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
            <p>(2) Banii, valorile sau orice alte bunuri primite sunt supuse confiscării, iar când acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>

            <p><strong>Articolul 292.</strong> Cumpărarea de influență</p>
            <p>(1) Promisiunea, oferirea sau darea de bani ori alte foloase, pentru sine sau pentru altul, direct ori indirect, unei persoane care are influență sau lasă să se creadă că are influență asupra unui funcționar public, pentru a-l determina pe acesta să îndeplinească, să nu îndeplinească, să urgenteze ori să întârzie îndeplinirea unui act ce intră în îndatoririle sale de serviciu sau să îndeplinească un act contrar acestor îndatoriri, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea exercitării unor drepturi.</p>
            <p>(2) Făptuitorul nu se pedepsește dacă denunță fapta mai înainte ca organul de urmărire penală să fi fost sesizat cu privire la aceasta.</p>
            <p>(3) Banii, valorile sau orice alte bunuri se restituie persoanei care le-a dat, dacă au fost date după denunțul prevăzut în alin. (2).</p>
            <p>(4) Banii, valorile sau orice alte bunuri date sau oferite sunt supuse confiscării, iar dacă acestea nu se mai găsesc, se dispune confiscarea prin echivalent.</p>

            <h3 className="text-lg font-semibold">Infracțiuni de serviciu</h3>
            <p><strong>Articolul 295.</strong> Delapidarea</p>
            <p>(1) Însușirea, folosirea sau traficarea de către un funcționar public, în interesul său ori pentru altul, de bani, valori sau alte bunuri pe care le gestionează sau le administrează se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării dreptului de a ocupa o funcție publică.</p>
            <p>(2) Tentativa se pedepsește.</p>

            <p><strong>Articolul 297.</strong> Abuzul în serviciu</p>
            <p>(1) Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, nu îndeplinește un act sau îl îndeplinește în mod defectuos și prin aceasta cauzează o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane fizice sau ale unei persoane juridice se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării dreptului de a ocupa o funcție publică.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează și fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, îngrădește exercitarea unui drept al unei persoane ori creează pentru aceasta o situație de inferioritate pe temei de rasă, naționalitate, origine etnică, limbă, religie, sex, orientare sexuală, apartenență politică, avere, vârstă, dizabilitate, boală cronică necontagioasă sau infecție HIV/SIDA.</p>

            <p><strong>Articolul 298.</strong> Neglijența în serviciu</p>
            <p>Încălcarea din culpă de către un funcționar public a unei îndatoriri de serviciu, prin neîndeplinirea acesteia sau prin îndeplinirea ei defectuoasă, dacă prin aceasta se cauzează o pagubă ori o vătămare a drepturilor sau intereselor legitime ale unei persoane fizice sau ale unei persoane juridice, se pedepsește cu închisoare de la 3 luni la 3 ani sau cu amendă.</p>

            <p><strong>Articolul 300.</strong> Uzurparea funcției</p>
            <p>Fapta funcționarului public care, în timpul serviciului, îndeplinește un act ce nu intră în atribuțiile sale, dacă prin aceasta s-a produs una dintre urmările prevăzute în art. 297, se pedepsește cu închisoare de la unu la 5 ani sau cu amendă.</p>

            <p><strong>Articolul 301.</strong> Folosirea funcției pentru favorizarea unor persoane</p>
            <p>(1) Fapta funcționarului public care, în exercitarea atribuțiilor de serviciu, a îndeplinit un act prin care s-a obținut un folos patrimonial pentru sine, pentru soțul său, pentru o rudă ori un afin până la gradul II inclusiv se pedepsește cu închisoarea de la unu la 5 ani și interzicerea exercitării dreptului de a ocupa o funcție publică pe o perioadă de 3 ani.</p>
            <p>(2) Dispozițiile alin. (1) nu se aplică în cazurile în care actul sau decizia se referă la următoarele situații: a) emiterea, aprobarea sau adoptarea actelor normative; b) exercitarea unui drept recunoscut de lege sau în îndeplinirea unei obligații impuse de lege, cu respectarea condițiilor și limitelor prevăzute de aceasta.</p>

            <p><strong>Articolul 306.</strong> Obținerea ilegală de fonduri</p>
            <p>(1) Folosirea ori prezentarea de documente sau date false, inexacte ori incomplete, pentru primirea aprobărilor sau garanțiilor necesare acordării finanțărilor obținute sau garantate din fonduri publice, dacă are ca rezultat obținerea pe nedrept a acestor fonduri, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
            <p>(2) Tentativa se pedepsește.</p>

            <p><strong>Articolul 307.</strong> Deturnarea de fonduri</p>
            <p>(1) Schimbarea destinației fondurilor bănești ori a resurselor materiale alocate unei autorități publice sau instituții publice, fără respectarea prevederilor legale, se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează și schimbarea, fără respectarea prevederilor legale, a destinației fondurilor provenite din finanțările obținute sau garantate din fonduri publice.</p>
            <p>(3) Tentativa se pedepsește.</p>

            <p><strong>Articolul 309.</strong> Faptele care au produs consecințe deosebit de grave *)</p>
            <p>Dacă faptele prevăzute în art. 295, art. 297, art. 298, art. 300, art. 303, art. 304, art. 306 sau art. 307 au produs consecințe deosebit de grave, limitele speciale ale pedepsei prevăzute de lege se majorează cu jumătate.</p>
            <p>*) Articolul 183. Consecințe deosebit de grave</p>
            <p>Prin consecințe deosebit de grave se înțelege o pagubă materială mai mare de 2.000.000 lei.</p>

            <h3 className="text-lg font-semibold">Falsificarea de monede, timbre sau de alte valori</h3>
            <p><strong>Articolul 310.</strong> Falsificarea de monede</p>
            <p>(1) Falsificarea de monedă cu valoare circulatorie se pedepsește cu închisoarea de la 3 la 10 ani și interzicerea exercitării unor drepturi.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează falsificarea unei monede, emise de către autoritățile competente, înainte de punerea oficială în circulație a acesteia.</p>
            <p>(3) Tentativa se pedepsește.</p>

            <p><strong>Articolul 311.</strong> Falsificarea de titluri de credit sau instrumente de plată</p>
            <p>(1) Falsificarea de titluri de credit, titluri sau instrumente pentru efectuarea plăților sau a oricăror altor titluri ori valori asemănătoare se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării unor drepturi.</p>
            <p>(2) Dacă fapta prevăzută în alin. (1) privește un instrument de plată electronică, pedeapsa este închisoarea de la 3 la 10 ani și interzicerea exercitării unor drepturi.</p>
            <p>(3) Tentativa se pedepsește.</p>

            <p><strong>Articolul 312.</strong> Falsificarea de timbre sau efecte poștale</p>
            <p>(1) Falsificarea de timbre de orice fel, mărci poștale, plicuri poștale, cărți poștale sau cupoane răspuns internațional se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Tentativa se pedepsește.</p>

            <p><strong>Articolul 313.</strong> Punerea în circulație de valori falsificate</p>
            <p>(1) Punerea în circulație a valorilor falsificate prevăzute în art. 310-312, precum și primirea, deținerea sau transmiterea acestora, în vederea punerii lor în circulație, se sancționează cu pedeapsa prevăzută de lege pentru infracțiunea de falsificare prin care au fost produse.</p>
            <p>(2) Punerea în circulație a valorilor falsificate prevăzute în art. 310-312, săvârșită de către autor sau un participant la infracțiunea de falsificare, se sancționează cu pedeapsa prevăzută de lege pentru infracțiunea de falsificare prin care au fost produse.</p>
            <p>(3) Repunerea în circulație a uneia dintre valorile prevăzute în art. 310-312, de către o persoană care a constatat, ulterior intrării în posesia acesteia, că este falsificată, se sancționează cu pedeapsa prevăzută de lege pentru infracțiunea de falsificare prin care au fost produse, ale cărei limite speciale se reduc la jumătate.</p>
            <p>(4) Tentativa se pedepsește.</p>

            <p><strong>Articolul 314.</strong> Deținerea de instrumente în vederea falsificării de valori</p>
            <p>(1) Fabricarea, primirea, deținerea sau transmiterea de instrumente sau materiale cu scopul de a servi la falsificarea valorilor sau titlurilor prevăzute în art. 310, art. 311 alin. (1) și art. 312 se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Fabricarea, primirea, deținerea sau transmiterea de echipamente, inclusiv hardware sau software, cu scopul de a servi la falsificarea instrumentelor de plată electronică, se pedepsește cu închisoarea de la 2 la 7 ani.</p>
            <p>(3) Nu se pedepsește persoana care, după comiterea vreuneia dintre faptele prevăzute în alin. (1) sau alin. (2), înainte de descoperirea acestora și înainte de a se fi trecut la săvârșirea faptei de falsificare, predă instrumentele sau materialele deținute autorităților judiciare ori încunoștințează aceste autorități despre existența lor.</p>

            <p><strong>Articolul 315.</strong> Emiterea frauduloasă de monedă</p>
            <p>(1) Confecționarea de monedă autentică prin folosirea de instalații sau materiale destinate acestui scop, cu încălcarea condițiilor stabilite de autoritățile competente sau fără acordul acestora, se pedepsește cu închisoarea de la 2 la 7 ani și interzicerea exercitării unor drepturi.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează punerea în circulație a monedei confecționate în condițiile alin. (1), precum și primirea, deținerea sau transmiterea acesteia, în vederea punerii ei în circulație.</p>
            <p>(3) Tentativa se pedepsește.</p>

            <p><strong>Articolul 316.</strong> Falsificarea de valori străine</p>
            <p>Dispozițiile cuprinse în prezentul capitol se aplică și în cazul când infracțiunea privește monede, timbre, titluri de valoare ori instrumente de plată emise în străinătate.</p>

            <h3 className="text-lg font-semibold">Falsificarea instrumentelor de autentificare sau de marcare</h3>
            <p><strong>Articolul 317.</strong> Falsificarea de instrumente oficiale</p>
            <p>(1) Falsificarea unui sigiliu, a unei ștampile sau a unui instrument de marcare de care se folosesc persoanele prevăzute în art. 176 sau persoanele fizice menționate în art. 175 alin. (2) se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Falsificarea unui sigiliu, a unei ștampile sau a unui instrument de marcare de care se folosesc alte persoane decât cele prevăzute în alin. (1) se pedepsește cu închisoare de la 3 luni la un an sau cu amendă.</p>
            <p>(3) Tentativa se pedepsește.</p>

            <p><strong>Articolul 318.</strong> Folosirea instrumentelor false</p>
            <p>Folosirea instrumentelor false prevăzute în art. 317 se pedepsește cu închisoare de la 3 luni la 3 ani sau cu amendă.</p>

            <p><strong>Articolul 319.</strong> Falsificarea de instrumente de autentificare străine</p>
            <p>Dispozițiile cuprinse în prezentul capitol se aplică și atunci când fapta privește instrumente de autentificare sau de marcare folosite de autoritățile unui stat străin.</p>

            <h3 className="text-lg font-semibold">Falsuri în înscrisuri</h3>
            <p><strong>Articolul 320.</strong> Falsul material în înscrisuri oficiale</p>
            <p>(1) Falsificarea unui înscris oficial, prin contrafacerea scrierii ori a subscrierii sau prin alterarea lui în orice mod, de natură să producă consecințe juridice, se pedepsește cu închisoarea de la 6 luni la 3 ani.</p>
            <p>(2) Falsul prevăzut în alin. (1), săvârșit de un funcționar public în exercițiul atribuțiilor de serviciu, se pedepsește cu închisoarea de la unu la 5 ani și interzicerea exercitării unor drepturi.</p>
            <p>(3) Sunt asimilate înscrisurilor oficiale biletele, tichetele sau orice alte imprimate producătoare de consecințe juridice.</p>
            <p>(4) Tentativa se pedepsește.</p>

            <p><strong>Articolul 321.</strong> Falsul intelectual</p>
            <p>(1) Falsificarea unui înscris oficial cu prilejul întocmirii acestuia, de către un funcționar public aflat în exercitarea atribuțiilor de serviciu, prin atestarea unor fapte sau împrejurări necorespunzătoare adevărului ori prin omisiunea cu știință de a insera unele date sau împrejurări, se pedepsește cu închisoarea de la unu la 5 ani.</p>
            <p>(2) Tentativa se pedepsește.</p>

            <p><strong>Articolul 322.</strong> Falsul în înscrisuri sub semnătură privată</p>
            <p>(1) Falsificarea unui înscris sub semnătură privată prin vreunul dintre modurile prevăzute în art. 320 sau art. 321, dacă făptuitorul folosește înscrisul falsificat ori îl încredințează altei persoane spre folosire, în vederea producerii unei consecințe juridice, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Tentativa se pedepsește.</p>

            <p><strong>Articolul 323.</strong> Uzul de fals</p>
            <p>Folosirea unui înscris oficial ori sub semnătură privată, cunoscând că este fals, în vederea producerii unei consecințe juridice, se pedepsește cu închisoare de la 3 luni la 3 ani sau cu amendă, când înscrisul este oficial, și cu închisoare de la 3 luni la 2 ani sau cu amendă, când înscrisul este sub semnătură privată.</p>

            <p><strong>Articolul 324.</strong> Falsificarea unei înregistrări tehnice</p>
            <p>(1) Falsificarea unei înregistrări tehnice prin contrafacere, alterare ori prin determinarea atestării unor împrejurări necorespunzătoare adevărului sau omisiunea înregistrării unor date sau împrejurări, dacă a fost urmată de folosirea de către făptuitor a înregistrării ori de încredințarea acesteia unei alte persoane spre folosire, în vederea producerii unei consecințe juridice, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
            <p>(2) Cu aceeași pedeapsă se sancționează folosirea unei înregistrări tehnice falsificate în vederea producerii unei consecințe juridice.</p>
            <p>(3) Prin înregistrare tehnică, în sensul prezentului articol, se înțelege atestarea unei valori, greutăți, măsuri ori a desfășurării unui eveniment, realizată, în tot sau în parte, în mod automat, prin intermediul unui dispozitiv tehnic omologat și care este destinată a proba un anumit fapt, în vederea producerii de consecințe juridice.</p>

            <p><strong>Articolul 325.</strong> Falsul informatic</p>
            <p>Fapta de a introduce, modifica sau șterge, fără drept, date informatice ori de a restricționa, fără drept, accesul la aceste date, rezultând date necorespunzătoare adevărului, în scopul de a fi utilizate în vederea producerii unei consecințe juridice, constituie infracțiune și se pedepsește cu închisoarea de la unu la 5 ani.</p>

            <p><strong>Articolul 326.</strong> Falsul în declarații</p>
            <p>(1) Declararea necorespunzătoare a adevărului, făcută unei persoane dintre cele prevăzute în art. 175 sau unei unități în care aceasta își desfășoară activitatea în vederea producerii unei consecințe juridice, pentru sine sau pentru altul, atunci când, potrivit legii ori împrejurărilor, declarația făcută servește la producerea acelei consecințe, se pedepsește cu închisoare de la 6 luni la 2 ani sau cu amendă.</p>
            <p>(2) Fapta prevăzută la alin. (1), săvârșită pentru a ascunde existența unui risc privind infectarea cu o boală infectocontagioasă, se pedepsește cu închisoare de la unu la 5 ani sau cu amendă.</p>

            <p><strong>Articolul 327.</strong> Falsul privind identitatea</p>
            <p>(1) Prezentarea sub o identitate falsă ori atribuirea unei asemenea identități altei persoane, făcută unei persoane dintre cele prevăzute în art. 175 sau transmisă unei unități în care aceasta își desfășoară activitatea prin folosirea frauduloasă a unui act ce servește la identificare, legitimare ori la dovedirea stării civile sau a unui astfel de act falsificat, pentru a induce sau a menține în eroare un funcționar public, în vederea producerii unei consecințe juridice, pentru sine ori pentru altul, se pedepsește cu închisoare de la 6 luni la 3 ani.</p>
            <p>(2) Când prezentarea s-a făcut prin întrebuințarea identității reale a unei persoane, pedeapsa este închisoarea de la unu la 5 ani.</p>
            <p>(3) Încredințarea unui act ce servește la identificare, legitimare ori la dovedirea stării civile spre a fi folosit fără drept se pedepsește cu închisoare de la 3 luni la 2 ani sau cu amendă.</p>

            <p><strong>Articolul 328.</strong> Infracțiuni de fals comise în legătură cu autoritatea unui stat străin</p>
            <p>Dispozițiile cuprinse în prezentul capitol se aplică și atunci când fapta privește acte emise de o autoritate competentă a unui stat străin sau de o organizație internațională instituită printr-un tratat la care România este parte sau declarații ori o identitate asumate în fața acesteia.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Text Legal Infracțiuni Economice. Legea nr. 241/2005</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Articolul 3</strong></p>
            <p>Constituie infracţiune şi se pedepseşte cu închisoare de la 6 luni la 5 ani fapta contribuabilului care nu reface, cu intenţie sau din culpă, documentele de evidenţă contabilă distruse, în termenul înscris în documentele de control.</p>

            <p><strong>Articolul 4</strong></p>
            <p>Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 6 ani refuzul nejustificat al unei persoane de a prezenta organelor competente documentele legale şi bunurile din patrimoniu, în scopul împiedicării verificărilor financiare, fiscale sau vamale, în termen de cel mult 15 zile de la somaţie.</p>

            <p><strong>Articolul 5</strong></p>
            <p>Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 6 ani împiedicarea, sub orice formă, a organelor competente de a intra, în condiţiile prevăzute de lege, în sedii, incinte ori pe terenuri, cu scopul efectuării verificărilor financiare, fiscale sau vamale.</p>

            <p><strong>Articolul 7</strong></p>
            <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la un an la 5 ani şi interzicerea unor drepturi deţinerea sau punerea în circulaţie, fără drept, a timbrelor, banderolelor ori formularelor tipizate, utilizate în domeniul fiscal, cu regim special.</p>
            <p>(2) Constituie infracţiune şi se pedepseşte cu închisoare de la 2 la 7 ani şi interzicerea unor drepturi tipărirea, folosirea, deţinerea sau punerea în circulaţie, cu ştiinţă, de timbre, banderole ori formulare tipizate, utilizate în domeniul fiscal, cu regim special, falsificate.</p>

            <p><strong>Articolul 8</strong></p>
            <p>(1) Constituie infracţiune şi se pedepseşte cu închisoare de la 3 ani la 10 ani şi interzicerea unor drepturi stabilirea cu rea-credinţă de către contribuabil a impozitelor, taxelor sau contribuţiilor, având ca rezultat obţinerea, fără drept, a unor sume de bani cu titlu de rambursări sau restituiri de la bugetul general consolidat ori compensări datorate bugetului general consolidat.</p>
            <p>(2) Constituie infracţiune şi se pedepseşte cu închisoare de la 5 ani la 15 ani şi interzicerea unor drepturi asocierea în vederea săvârşirii faptei prevăzute la alin. (1).</p>
            <p>(3) Tentativa faptelor prevăzute la alin. (1) şi (2) se pedepseşte.</p>

            <p><strong>Articolul 9</strong></p>
            <p>(1) Constituie infracţiuni de evaziune fiscală şi se pedepsesc cu închisoare de la 2 ani la 8 ani şi interzicerea unor drepturi următoarele fapte săvârşite în scopul sustragerii de la îndeplinirea obligaţiilor fiscale: a) ascunderea bunului ori a sursei impozabile sau taxabile;b) omisiunea, în tot sau în parte, a evidenţierii, în actele  contabile ori în alte documente legale, a operaţiunilor comerciale efectuate sau a veniturilor realizate; c) evidenţierea, în actele contabile sau în alte documente legale, a cheltuielilor care nu au la baza operaţiuni reale ori evidenţierea altor operaţiuni fictive; d) alterarea, distrugerea sau ascunderea de acte contabile, memorii ale aparatelor de taxat ori de marcat electronice fiscale sau de alte mijloace de stocare a datelor; e) executarea de evidente contabile duble, folosindu-se înscrisuri sau alte mijloace de stocare a datelor; f) sustragerea de la efectuarea verificărilor financiare, fiscale sau vamale, prin nedeclararea, declararea fictivă ori declararea inexactă cu privire la sediile principale sau secundare ale persoanelor verificate; g) substituirea, degradarea sau înstrăinarea de către debitor ori de către terţe persoane a bunurilor sechestrate în conformitate cu prevederile Codului de procedură fiscală şi ale Codului de procedură penală.</p>
            <p>(2) Dacă prin faptele prevăzute la alin. (1) s-a produs un prejudiciu mai mare de 100.000 euro, în echivalentul monedei naţionale, limita minimă a pedepsei prevăzute de lege şi limita maximă a acesteia se majorează cu 5 ani.</p>
            <p>(3) Dacă prin faptele prevăzute la alin. (1) s-a produs un prejudiciu mai mare de 500.000 euro, în echivalentul monedei naţionale, limita minimă a pedepsei prevăzute de lege şi limita maximă a acesteia se majorează cu 7 ani.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Text Legal Infracțiuni Economice. Legea nr. 656/2002</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Articolul 29</strong></p>
            <p>(1) Constituie infracțiunea de spălare a banilor și se pedepsește cu închisoare de la 3 la 10 ani:</p>
            <p>a) schimbarea sau transferul de bunuri, cunoscând că provin din săvârșirea de infracțiuni, în scopul ascunderii sau al disimulării originii ilicite a acestor bunuri ori în scopul de a ajuta persoana care a săvârșit infracțiunea din care provin bunurile să se sustragă de la urmărire, judecată sau executarea pedepsei; b) ascunderea ori disimularea adevăratei naturi a provenienței, a situării, a dispoziției, a circulației sau a proprietății bunurilor ori a drepturilor asupra acestora, cunoscând că bunurile provin din săvârșirea de infracțiuni; c) dobândirea, deținerea sau folosirea de bunuri, cunoscând că acestea provin din săvârșirea de infracțiuni.</p>
            <p>(2) Tentativa se pedepsește.</p>
            <p>(3) Dacă fapta a fost săvârșită de o persoană juridică, pe lângă pedeapsa amenzii, instanța aplică, după caz, una sau mai multe dintre pedepsele complementare prevăzute la art. 136 alin. (3) lit. a)-c) din Codul penal.</p>
            <p>(4) Cunoașterea provenienței bunurilor sau scopul urmărit poate fi dedusă/dedus din circumstanțele faptice obiective.</p>
            <p>(5) Dispozițiile alin. (1)-(4) se aplică indiferent dacă infracțiunea din care provine bunul a fost comisă pe teritoriul României sau în străinătate.</p>

            <p><strong>Articolul 31 *</strong>)</p>
            <p>(1) Nerespectarea obligațiilor prevăzute la art. 18 constituie infracțiune și se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă, dacă fapta nu constituie o infracțiune mai gravă.</p>
            <p>(2) Dacă fapta prevăzută la alin. (1) a fost săvârșită din culpă, pedeapsa este închisoarea de la 3 luni la 2 ani sau amenda.</p>
            <p>*) Articolul 18</p>
            <p>(1) Persoanele prevăzute la art. 10 aplică, în plus față de măsurile-standard de cunoaștere a clientelei, măsurile suplimentare de cunoaștere a clientelei în următoarele situații care, prin natura lor, pot prezenta un risc sporit de spălare a banilor sau de finanțarea terorismului: a) în cazul persoanelor care nu sunt prezente fizic la efectuarea operațiunilor; b) în cazul relațiilor de corespondent cu instituții de credit din state care nu sunt membre ale Uniunii Europene sau nu aparțin Spațiului Economic European; c) în cazul tranzacțiilor sau relațiilor de afaceri cu persoanele expuse politic, care sunt rezidente într-un alt stat membru al Uniunii Europene sau al Spațiului Economic European ori într-un stat terț.</p>
            <p>(2) Persoanele prevăzute la art. 10 aplică măsurile suplimentare de cunoaștere a clientelei și în alte cazuri decât cele prevăzute la alin. (1), care, prin natura lor, prezintă un risc sporit de spălare a banilor sau de finanțarea terorismului.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Text Legal Infracțiuni Economice. Legea nr. 31/1990</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Articolul 271</strong></p>
            <p>Se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă fondatorul, administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului ori reprezentantul legal al societății care: a) prezintă, cu rea-credință, în prospectele, rapoartele și comunicările adresate publicului, date neadevărate asupra constituirii societății ori asupra condițiilor economice sau juridice ale acesteia ori ascunde, cu rea-credință, în tot sau în parte, asemenea date; b) prezintă, cu rea-credință, acționarilor/asociaților o situație financiară inexactă sau cu date inexacte asupra condițiilor economice sau juridice ale societății, în vederea ascunderii situației ei reale; c) refuză să pună la dispoziția experților, în cazurile și în condițiile prevăzute la art. 26 și 38, documentele necesare sau îi împiedică, cu rea-credință, să îndeplinească însărcinările primite.</p>

            <p><strong>Articolul 272</strong></p>
            <p>(1) Se pedepsește cu închisoare de la 6 luni la 3 ani ori cu amendă fondatorul, administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului ori reprezentantul legal al societății care: a) dobândește, în contul societății, acțiuni ale altor societăți, la un preț pe care îl știe vădit superior valorii lor efective, sau vinde, pe seama societății, acțiuni pe care aceasta le deține, la prețuri despre care are cunoștință că sunt vădit inferioare valorii lor efective, în scopul obținerii, pentru el sau pentru alte persoane, a unui folos în paguba societății; b) folosește, cu rea-credință, bunuri sau creditul de care se bucură societatea, într-un scop contrar intereselor acesteia sau în folosul lui propriu ori pentru a favoriza o altă societate în care are interese direct sau indirect; c) se împrumută, sub orice formă, direct sau printr-o persoană interpusă, de la societatea pe care o administrează, de la o societate controlată de aceasta ori de la o societate care controlează societatea pe care el o administrează, suma împrumutată fiind superioară limitei prevăzute la art. 144^4 alin. (3) lit. a), sau face ca una dintre aceste societăți să îi acorde vreo garanție pentru datorii proprii; d) încalcă dispozițiile art. 183.</p>
            <p>(2) Nu constituie infracțiune fapta prevăzută la alin. (1) lit. b), dacă a fost săvârșită de administratorul, directorul, membrul directoratului ori reprezentantul legal al societății în cadrul unor operațiuni de trezorerie între societate și alte societăți controlate de aceasta sau care o controlează, direct ori indirect.</p>
            <p>(3) Nu constituie infracțiune fapta prevăzută la alin. (1) lit. c), dacă este săvârșită de către o societate comercială ce are calitatea de fondator, iar împrumutul este realizat de la una dintre societățile controlate ori care o controlează pe aceasta, direct sau indirect.</p>

            <p><strong>Articolul 272^1</strong></p>
            <p>Se pedepsește cu închisoare de la un an la 5 ani fondatorul, administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului ori reprezentantul legal al societății care: a) răspândește știri false sau întrebuințează alte mijloace frauduloase care au ca efect mărirea ori scăderea valorii acțiunilor sau a obligațiunilor societății ori a altor titluri ce îi aparțin, în scopul obținerii, pentru el sau pentru alte persoane, a unui folos în paguba societății; b) încasează sau plătește dividende, sub orice formă, din profituri fictive ori care nu puteau fi distribuite în cursul exercițiului financiar pe baza situației financiare interimare șianual, pe baza situațiilor financiare anuale, sau contrar celor rezultate din acestea.</p>

            <p><strong>Articolul 273</strong></p>
            <p>Se pedepsește cu închisoare de la 3 luni la 2 ani ori cu amendă administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului ori reprezentantul legal al societății care: a) emite acțiuni de o valoare mai mică decât valoarea lor legală ori la un preț inferior valorii nominale sau emite noi acțiuni în schimbul aporturilor în numerar, înainte ca acțiunile precedente să fi fost achitate în întregime; b) se folosește, în adunările generale, de acțiunile nesubscrise sau nedistribuite acționarilor; c) acordă împrumuturi sau avansuri asupra acțiunilor societății ori constituie garanții în alte condiții decât cele prevăzute de lege; d) predă titularului acțiunile înainte de termen sau predă acțiuni liberate în total sau în parte, în afară de cazurile stabilite de lege; e) nu respectă dispozițiile legale referitoare la anularea acțiunilor neachitate; f) emite obligațiuni fără respectarea dispozițiilor legale sau acțiuni fără să cuprindă mențiunile cerute de lege.</p>

            <p><strong>Articolul 274</strong></p>
            <p>Se pedepsește cu închisoare de la o lună la un an ori cu amendă administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului ori reprezentantul legal al societății care: a) îndeplinește hotărârile adunării generale referitoare la schimbarea formei societății, la fuziunea ori la divizarea acesteia sau la reducerea capitalului social, înainte de expirarea termenelor prevăzute de lege; b) îndeplinește hotărârile adunării generale referitoare la reducerea capitalului social, fără ca membrii să fi fost executați pentru efectuarea vărsământului datorat ori fără ca aceștia să fi fost scutiți, prin hotărârea adunării generale, de plata vărsămintelor ulterioare; c) îndeplinește hotărârile adunării generale referitoare la schimbarea formei societății, fuziune, divizare, dizolvare, reorganizare sau reducere a capitalului social, fără informarea organului judiciar ori cu încălcarea interdicției stabilite de acesta, în cazul în care față de societatea comercială s-a început urmărirea penală.</p>

            <p><strong>Articolul 275</strong></p>
            <p>(1) Se pedepsește cu închisoare de la o lună la un an ori cu amendă administratorul, directorul general, directorul, membrul consiliului de supraveghere sau al directoratului care: a) încalcă, chiar prin persoane interpuse sau prin acte simulate, dispozițiile art. 144^3; b) nu convoacă adunarea generală în cazurile prevăzute de lege sau încalcă dispozițiile art. 193 alin. (2); c) începe operațiuni în numele unei societăți cu răspundere limitată înainte de a se fi efectuat vărsământul integral al capitalului social; d) emite titluri negociabile reprezentând părți sociale ale unei societăți cu răspundere limitată; e) dobândește acțiuni ale societății în contul acesteia în cazurile interzise de lege.</p>
            <p>(2) Cu pedeapsa prevăzută la alin. (1) se pedepsește și asociatul care încalcă dispozițiile art. 127 sau ale art. 193 alin. (2).</p>

            <p><strong>Articolul 276</strong></p>
            <p>Se pedepsește cu închisoare de la o lună la un an sau cu amendă cenzorul care nu convoacă adunarea generală în cazurile în care este obligat prin lege.</p>

            <p><strong>Articolul 277</strong></p>
            <p>(1) Se pedepsește cu închisoare de la 3 luni la un an ori cu amendă persoana care a acceptat sau a păstrat însărcinarea de cenzor, contrar dispozițiilor art. 161 alin. (2), ori persoana care a acceptat însărcinarea de expert, cu încălcarea dispozițiilor art. 39.</p>
            <p>(2) Hotărârile luate de adunările generale în baza unui raport al unui cenzor sau expert, numit cu încălcarea dispozițiilor art. 161 alin. (2) și ale art. 39, nu pot fi anulate din cauza încălcării dispozițiilor cuprinse în acele articole.</p>
            <p>(3) Cu pedeapsa prevăzută la alin. (1) se pedepsește și fondatorul, administratorul, directorul, directorul executiv sau cenzorul care își exercită funcțiile sau însărcinările cu încălcarea dispozițiilor prezentei legi referitoare la incompatibilitate.</p>

            <p><strong>Articolul 278</strong></p>
            <p>(1) Dispozițiile art. 271-277 se aplică și lichidatorului, în măsura în care se referă la obligații ce intră în cadrul atribuțiilor sale.</p>
            <p>(2) Se pedepsește cu închisoare de la o lună la un an sau cu amendă lichidatorul care face plăți asociaților cu încălcarea dispozițiilor art. 256.</p>

            <p><strong>Articolul 279</strong></p>
            <p>(1) Se pedepsește cu închisoare de la 3 luni la 2 ani ori cu amendă acționarul sau deținătorul de obligațiuni care:</p>
            <p>a) trece acțiunile sau obligațiunile sale pe numele altor persoane, în scopul formării unei majorități în adunarea generală, în detrimentul altor acționari ori deținători de obligațiuni;</p>
            <p>b) votează în adunări generale, în situația prevăzută la lit. a), ca proprietar de acțiuni sau de obligațiuni care în realitate nu îi aparțin;</p>
            <p>c) în schimbul unui folos material necuvenit, se obligă să voteze într-un anumit sens în adunarea generală sau să nu ia parte la vot.</p>
            <p>(2) Determinarea unui acționar sau a unui deținător de obligațiuni ca, în schimbul unui folos material necuvenit, să voteze într-un anumit sens în adunările generale ori să nu ia parte la vot se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>

            <p><strong>Articolul 280^1</strong></p>
            <p>Transmiterea fictivă a părților sociale ori a acțiunilor deținute într-o societate comercială, în scopul săvârșirii unei infracțiuni sau al sustragerii de la urmărirea penală ori în scopul îngreunării acesteia, se pedepsește cu închisoare de la un an la 5 ani.</p>

            <p><strong>Articolul 280^3</strong></p>
            <p>Folosirea, cu știință, a actelor unei societăți radiate, în scopul producerii de consecințe juridice, constituie infracțiune și se pedepsește cu închisoare de la 3 luni la 3 ani sau cu amendă.</p>

            <p><strong>Articolul 281</strong></p>
            <p>Faptele prevăzute în prezentul titlu, dacă, potrivit Codului penal sau unor legi speciale, constituie infracțiuni mai grave, se sancționează cu pedepsele prevăzute de acestea.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="p-6">
            <h2 className="text-xl font-medium">Text Legal Infracțiuni Economice. Legea nr. 78/2000</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-lg font-semibold">Infracțiuni de corupție</h3>
            <p><strong>Articolul 6</strong></p>
            <p>Infracțiunile de luare de mită, prevăzută la art. 289 din Codul penal, dare de mită, prevăzută la art. 290 din Codul penal, trafic de influență, prevăzută la art. 291 din Codul penal, și cumpărare de influență, prevăzută la art. 292 din Codul penal, se pedepsesc potrivit prevederilor acelor texte de lege. Dispozițiile art. 308 din Codul penal se aplică în mod corespunzător.</p>

            <p><strong>Articolul 7</strong></p>
            <p>Faptele de luare de mită sau trafic de influență săvârșite de o persoană care: a) exercită o funcție de demnitate publică; b) este judecător sau procuror; c) este organ de cercetare penală sau are atribuții de constatare ori de sancționare a contravențiilor; d) este una dintre persoanele prevăzute la art. 293 din Codul penal se sancționează cu pedeapsa prevăzută la art. 289 sau 291 din Codul penal, ale cărei limite se majorează cu o treime.</p>

            <h3 className="text-lg font-semibold">Infracțiuni asimilate infracțiunilor de corupție</h3>
            <p><strong>Articolul 10</strong></p>
            <p>Constituie infracțiuni și se pedepsesc cu închisoare de la 3 la 10 ani și interzicerea unor drepturi următoarele fapte, dacă sunt săvârșite în scopul obținerii pentru sine sau pentru altul de bani, bunuri ori alte foloase necuvenite: a) stabilirea, cu intenție, a unei valori diminuate, față de valoarea comercială reală, a bunurilor aparținând operatorilor economici la care statul sau o autoritate a administrației publice locale este acționar, comisă în cadrul acțiunii de privatizare ori de executare silită, de reorganizare sau lichidare judiciară ori cu ocazia unei operațiuni comerciale, ori a bunurilor aparținând autorității publice sau instituțiilor publice, în cadrul unei acțiuni de vânzare a acestora sau de executare silită, săvârșită de cei care au atribuții de conducere, de administrare, de gestionare, de executare silită, de reorganizare ori lichidare judiciară; b) acordarea de subvenții cu încălcarea legii sau neurmărirea, conform legii, a respectării destinației subvențiilor; c) utilizarea subvențiilor în alte scopuri decât cele pentru care au fost acordate, precum și utilizarea în alte scopuri a creditelor garantate din fonduri publice sau care urmează să fie rambursate din fonduri publice.</p>

            <p><strong>Articolul 11</strong></p>
            <p>(1) Fapta persoanei care, având sarcina de a supraveghea, a controla, a reorganiza sau a lichida un operator economic privat, îndeplinește pentru acesta vreo însărcinare, intermediază ori înlesnește efectuarea unor operațiuni comerciale sau financiare ori participă cu capital la un asemenea operator economic, dacă fapta este de natură a-i aduce direct sau indirect un folos necuvenit, constituie infracțiune și se pedepsește cu închisoare de la un an la 5 ani și interzicerea unor drepturi.</p>
            <p>(2) Dacă fapta prevăzută la alin. (1) a fost săvârșită într-un interval de 5 ani de la încetarea însărcinării, pedeapsa este închisoare de la 6 luni la 3 ani sau amendă.</p>

            <p><strong>Articolul 12</strong></p>
            <p>(1) Sunt pedepsite cu închisoarea de la 1 la 5 ani următoarele fapte, dacă sunt săvâarșite în scopul obținerii pentru sine sau pentru altul de bani, bunuri ori alte foloase necuvenite: a) efectuarea de operațiuni financiare, ca acte de comerț, incompatibile cu funcția, atribuția sau însărcinarea pe care o îndeplinește o persoană ori încheierea de tranzacții financiare, utilizând informațiile obținute în virtutea funcției, atribuției sau însărcinării sale; b) folosirea, în orice mod, direct sau indirect, de informații ce nu sunt destinate publicității ori permiterea accesului unor persoane neautorizate la aceste informații.</p>
            <p>(2) În sensul prezentei legi, operațiunile financiare constau în operațiuni care antrenează circulația de capital, operațiuni de bancă, de schimb valutar sau de credit, operațiuni de plasament, în burse, în asigurări, în plasament mutual ori privitor la conturile bancare și cele asimilate acestora, tranzacții comerciale interne și internaționale. Pentru a fi efectuate ca acte de comerț, operațiunile financiare trebuie să constituie o acțiune de intermediere în circulația bunurilor făcută în mod organizat și sistematic, în scopul obținerii de profit.</p>

            <p><strong>Articolul 13</strong></p>
            <p>Fapta persoanei care indeplineste o functie de conducere într-un partid, într-un sindicat sau patronat ori în cadrul unei persoane juridice fără scop patrimonial, de a folosi influența ori autoritatea sa în scopul obtinerii pentru sine ori pentru altul de bani, bunuri sau alte foloase necuvenite, se pedepseste cu inchisoare de la unu la 5 ani.</p>

            <p><strong>Articolul 13^1 *</strong>)</p>
            <p>În cazul infracțiunii de șantaj, prevăzută de art. 207 din Codul penal, în care este implicată o persoană dintre cele prevăzute la art. 1, limitele speciale ale pedepsei se majorează cu o treime.</p>

            <p><strong>Articolul 13^2</strong></p>
            <p>În cazul infracțiunilor de abuz în serviciu sau de uzurpare a funcției, dacă funcționarul public a obținut pentru sine ori pentru altul un folos necuvenit, limitele speciale ale pedepsei se majorează cu o treime.</p>

            <p><strong>Articolul 15</strong></p>
            <p>Tentativa la infracțiunile prevăzute în prezenta secțiune se pedepsește.</p>

            <p>*) Articolul 1</p>
            <p>(1) Prezenta lege instituie măsuri de prevenire, descoperire și sancționare a faptelor de corupție și se aplică următoarelor persoane: a) care exercită o funcție publică, indiferent de modul în care au fost investite, în cadrul autorităților publice sau instituțiilor publice; b) care îndeplinesc, permanent sau temporar, potrivit legii, o funcție sau o însărcinare, în măsura în care participă la luarea deciziilor sau le pot influența, în cadrul serviciilor publice, regiilor autonome, societăților comerciale, companiilor naționale, societăților naționale, unităților cooperatiste sau al altor agenți economici; c) care exercită atribuții de control, potrivit legii;       d) care acordă asistență specializată unităților prevăzute la lit. a) și b), în măsura în care participă la luarea deciziilor sau le pot influența; e) care, indiferent de calitatea lor, realizează, controlează sau acordă asistență specializată, în măsura în care participă la luarea deciziilor sau le pot influența, cu privire la: operațiuni care antrenează circulația de capital, operațiuni de bancă, de schimb valutar sau de credit, operațiuni de plasament, în burse, în asigurări, în plasament mutual ori privitor la conturile bancare și cele asimilate acestora, tranzacții comerciale interne și internaționale; f) care dețin o functie de conducere într-un partid sau într-o formațiune politică, într-un sindicat, într-o organizație patronală ori într-o asociație fără scop lucrativ sau fundație; g) alte persoane fizice decât cele prevăzute la lit. a)-f), în condițiile prevăzute de lege.</p>

            <h3 className="text-lg font-semibold">Infracțiuni împotriva intereselor financiare ale Uniunii Europene</h3>

            <p><strong>Articolul 18^1</strong></p>

            <p>(1) Folosirea sau prezentarea cu rea-credință de documente ori declarații false, inexacte sau incomplete, dacă fapta are ca rezultat obținerea pe nedrept de fonduri din bugetul general al Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea unor drepturi.</p>

            <p>(2) Cu pedeapsa prevăzută la alin. (1) se sancționează omisiunea de a furniza, cu știință, datele cerute potrivit legii pentru obținerea de fonduri din bugetul general al Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei, dacă fapta are ca rezultat obținerea pe nedrept a acestor fonduri.</p>

            <p>(3) Dacă faptele prevăzute la alin. (1) și (2) au produs consecințe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>

            <p><strong>Articolul 18^2</strong></p>

            <p>(1) Schimbarea, fără respectarea prevederilor legale, a destinației fondurilor obținute din bugetul general al Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei se pedepsește cu închisoare de la un an la 5 ani și interzicerea unor drepturi.</p>

            <p>(2) Schimbarea, fără respectarea prevederilor legale, a destinației unui folos legal obținut, dacă fapta are ca rezultat diminuarea ilegală a resurselor din bugetul general al Uniunii Europene sau din bugetele administrate de aceasta ori în numele ei, se sancționează cu pedeapsa prevăzută la alin. (1).</p>

            <p>(3) Dacă faptele prevăzute la alin. (1) și (2) au produs consecințe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>

            <p><strong>Articolul 18^3</strong></p>

            <p>(1) Folosirea sau prezentarea cu rea-credință de documente ori declarații false, inexacte sau incomplete, care are ca rezultat diminuarea ilegală a resurselor ce trebuie virate către bugetul general al Uniunii Europene sau către bugetele administrate de aceasta ori în numele ei, se pedepsește cu închisoare de la 2 la 7 ani și interzicerea unor drepturi.</p>

            <p>(2) Cu pedeapsa prevăzută la alin. (1) se sancționează omisiunea de a furniza, cu știință, datele cerute potrivit legii, dacă fapta are ca rezultat diminuarea ilegală a resurselor ce trebuie virate către bugetul general al Uniunii Europene sau către bugetele administrate de aceasta ori în numele ei.</p>

            <p>(3) Dacă faptele prevăzute la alin. (1) și (2) au produs consecințe deosebit de grave, limitele speciale ale pedepsei se majorează cu jumătate.</p>

            <p><strong>Articolul 18^4</strong></p>

            <p>Tentativa infracțiunilor prevăzute la art. 18^1-18^3 se pedepseste.</p>

            <p><strong>Articolul 18^5</strong></p>

            <p>Încălcarea din culpă de către directorul, administratorul sau persoana cu atribuții de decizie ori de control în cadrul unui operator economic a unei îndatoriri de serviciu, prin neîndeplinirea acesteia sau îndeplinirea ei defectuoasă, dacă fapta a avut ca rezultat săvârșirea de către o persoană care se află în subordinea sa și care a acționat în numele acelui operator economic a uneia dintre infracțiunile prevăzute la art. 18^1 – 18^3 sau săvârșirea unei infracțiuni de corupție ori de spălare a banilor în legătură cu fondurile Uniunii Europene, se pedepsește cu închisoare de la 6 luni la 3 ani sau cu amendă.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
