import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReprezentareaVictimelor() {
  useSEO({
    title: "Avocat despăgubiri victime accidente / vătămări corporale | av. Bogdan Lamatic, București",
    description:
      "Reprezentare victime în procese penale. Despăgubiri pentru accidente rutiere și vătămări corporale. Evaluare rapidă și strategie completă!",
  });

  return (
    <>
      {/* JSON-LD Structured Data */}
      {typeof window !== "undefined" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Acasă",
                    "item": typeof window !== "undefined" ? `${window.location.origin}/` : "https://avocatpenalbucuresti.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": typeof window !== "undefined" ? `${window.location.origin}/#servicii` : "https://avocatpenalbucuresti.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Reprezentarea victimelor în procese penale",
                    "item": typeof window !== "undefined" ? `${window.location.origin}/services/reprezentarea-victimelor-in-procese-penale` : "https://avocatpenalbucuresti.ro/services/reprezentarea-victimelor-in-procese-penale"
                  }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                "name": "Servicii avocat reprezentarea victimelor în procese penale",
                "description": "Reprezentare victime în procese penale. Despăgubiri pentru accidente rutiere și vătămări corporale",
                "url": typeof window !== "undefined" ? `${window.location.origin}/services/reprezentarea-victimelor-in-procese-penale` : "https://avocatpenalbucuresti.ro/services/reprezentarea-victimelor-in-procese-penale",
                "areaServed": [
                  {
                    "@type": "Country",
                    "name": "România"
                  },
                  {
                    "@type": "Place",
                    "name": "Uniunea Europeană"
                  }
                ],
                "availableLanguage": ["ro", "en"],
                "provider": {
                  "@type": "Attorney",
                  "name": "Bogdan Lamatic",
                  "telephone": "+40 (31) 632 01 83"
                }
              })
            }}
          />
        </>
      )}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Avocat despăgubiri victime accidente / vătămări corporale | av. Bogdan Lamatic, București
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Sunt avocatul Bogdan Lamatic, din Baroul București. Reprezint victimele în procese penale și obțin despăgubiri pentru accidente rutiere, vătămări corporale, accidente de muncă sau alte fapte penale.
        </p>
        <p>
          Am pledat la toate nivelurile – de la parchete până la Înalta Curte - inclusiv în cauze complexe, cu expertize medico-legale și negocieri cu asigurătorii.
        </p>
        <p>
          Sunt recomandat de Legal 500 ca „Next Generation Partner” (White-Collar Crime) 2021–2024, distincție care reflectă rigoarea și rezultatele în dosare dificile.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună acum pentru consultanță victime">
          <a href="tel:+40316320183">
            <Phone className="mr-2 h-4 w-4" /> Sună acum
          </a>
        </Button>
      </div>

      <div className="mt-6">
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
              <BreadcrumbPage>Reprezentarea victimelor în procese penale</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Ce cazuri preiau */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce cazuri preiau</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Accidente rutiere (RCA/CASCO, vătămări, deces).</strong> Coordonez investigația penală și acțiunea civilă pentru victime și familii: stabilire vinovăție, constituire ca parte civilă, calculul despăgubirilor materiale și morale, negocieri cu asigurătorul RCA conform Legii 132/2017 și normelor ASF. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/190029" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>, <a href="https://asfromania.ro/ro/a/153/legisla%C8%9Bie-rca" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">ASF</a>)
            </li>
            <li>
              <strong>Vătămări corporale și loviri.</strong> Intervin în dosare ce privesc loviri/violențe (art. 193 CP) și vătămare corporală (art. 194 CP) – inclusiv forme agravate sau situațiile în care acțiunea penală se pornește din oficiu potrivit modificărilor legislative recente. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/275633" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              <strong>Vătămare/ucidere din culpă.</strong> Reprezint victimele (ori familiile) în cazuri de vătămare din culpă (art. 196 CP) și ucidere din culpă (art. 192 CP) – deseori corelate cu încălcări ale regulilor de circulație (OUG 195/2002; HG 1391/2006). (<a href="https://lege5.ro/gratuit/gezdmnrzgi/art-196-vatamarea-corporala-din-culpa-codul-penal?dp=gqytsojugyzte" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Lege5</a>, <a href="https://legislatie.just.ro/Public/DetaliiDocument/223635" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              <strong>Accidente de muncă / răspundere angajator.</strong> Acopăr latura penală și civilă (despăgubiri, venituri pierdute, îngrijire, reparația integrală). Experiența mea include litigii penale cu componentă tehnică și probatoriu amplu.
            </li>
            <li>
              <strong>Asistență pentru drepturile victimei.</strong> Configurez strategia de parte vătămată / parte civilă, valorificând drepturile prevăzute de Codul de procedură penală (art. 84–85 CPP – consultarea dosarului, formularea de cereri/excepții, adresarea de întrebări, administrarea probelor). (<a href="https://legislatie.just.ro/Public/DetaliiDocument/185907" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Cum te ajut | Metodă de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te ajut | Metodă de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-4">
          <div>
            <p>
              <strong>A) Evaluare juridico-factică (rapidă).</strong> Analizez actele medicale, constatările Poliției, declarații, imagistică, devize/bonuri, pentru a fixa legătura de cauzalitate și încadrarea corectă (CP/CPP).
            </p>
          </div>
          <div>
            <p>
              <strong>B) Strategie procesuală duală.</strong>
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <strong>Penal:</strong> plângere/completări probatorii, solicitare expertize (medico-legală, accidentologică), valorificarea drepturilor procesuale (art. 81 CPP).
              </li>
              <li>
                <strong>Civil:</strong> constituire parte civilă în procesul penal sau acțiune separată; cuantific daune materiale (cheltuieli, venituri pierdute, îngrijiri) și morale, cu suport probator complet. (<a href="https://legislatie.just.ro/Public/DetaliiDocument/185907" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
              </li>
            </ul>
          </div>
          <div>
            <p>
              <strong>C) Negocierea cu asigurătorul RCA.</strong> Deschid și urmăresc dosarul de daună conform Legii 132/2017 și Normei 20/2017 (avizare, constatare, lichidare), negociez și valorific soluția cea mai avantajoasă (plată directă/decontare). (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/190029" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </p>
          </div>
          <div>
            <p>
              <strong>D) Reprezentare în instanță.</strong> Pledez pentru reparația integrală și susțin probele tehnice/medico-legale. Practica mea include spețe tehnice, cu acte voluminoase și multiple părți, la toate nivelurile de jurisdicție.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Ce despăgubiri poți obține */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce despăgubiri poți obține</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Daune materiale:</strong> tratamente, recuperare, dispozitive medicale, transport, îngrijire, venituri pierdute/capacitate de muncă, adaptare locuință/auto.
            </li>
            <li>
              <strong>Daune morale:</strong> suferință, afectarea vieții personale/familiale; în caz de deces – pentru aparținători.
            </li>
            <li>
              <strong>Dobânzi/actualizări:</strong> conform normelor aplicabile și jurisprudenței; pot negocia plăți în tranșe sau tranzacții prealabile.
            </li>
            <li>
              <strong>De la cine?</strong> făptuitor, asigurătorul RCA (dacă e accident rutier), angajator (accidente de muncă), alți responsabili civilmente. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/190029" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
          <p className="pt-2">
            <Link
              to="/calculator-despagubiri"
              className="inline-flex items-center gap-2 rounded-md border-2 border-accent bg-accent text-primary-foreground px-3 py-1.5 text-[19px] font-normal hover:opacity-90 transition-colors"
              aria-label="Deschide calculatorul de despăgubiri"
            >
              <Calculator className="h-4 w-4" aria-hidden="true" />
              Calculator despăgubiri
            </Link>
          </p>
        </CardContent>
      </Card>

      {/* Pașii practici după accident / agresiune */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Pașii practici după accident / agresiune</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Asistență medicală & documente:</strong> ia toate actele medicale +, la nevoie, certificat medico-legal.
            </li>
            <li>
              <strong>Sesizează autoritățile:</strong> Poliție/Parchet; în accidente – reguli din OUG 195/2002 + HG 1391/2006. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/74028" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              <strong>Deschide dosar RCA:</strong> avizare promptă, acte doveditoare (constatare, devize, dovezi cheltuieli). (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/190029" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              <strong>Consultă un avocat:</strong> te reprezint ca persoană vătămată/parte civilă și calibrez cererile de despăgubiri în raport cu probele și legea. (<a href="https://legislatie.just.ro/Public/DetaliiDocument/185907" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* De ce eu */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce eu</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Din 2007, am lucrat în echipe de penal și litigii, cu proiecte complexe (accidente aviatice, energie, infrastructură, asigurări), coordonând investigații, recuperări de prejudicii și dosare în fața DNA, DIICOT, EPPO și ÎCCJ.
          </p>
          <p>
            Experiența mea cu reprezentarea victimelor include obținerea de despăgubiri substanțiale și încheierea unor tranzacții rapide, atunci când servesc cel mai bine interesul clientului.
          </p>
        </CardContent>
      </Card>

      {/* Întrebări frecvente */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>E obligatoriu să merg în proces penal pentru despăgubiri?</strong>
              <p className="mt-1">Nu neapărat. Pot cere despăgubiri în procesul penal ca parte civilă sau separat, pe civil – aleg strategia optimă pentru timp și rezultat.</p>
            </li>
            <li>
              <strong>Ce termen am pentru pretenții?</strong>
              <p className="mt-1">Termenele decurg din natura faptei (penal/civil) și din prescripțiile incidente; în accidente rutiere acționăm rapid și avizăm RCA fără întârzieri.</p>
            </li>
            <li>
              <strong>Ce înseamnă că „asigurătorul plătește”?</strong>
              <p className="mt-1">La accidente rutiere, RCA acoperă prejudiciul dovedit al terților; asigurătorul are obligații clare de constatare și lichidare a daunelor.</p>
            </li>
            <li>
              <strong>Pot participa activ la urmărirea penală?</strong>
              <p className="mt-1">Da. Ca persoană vătămată/parte civilă ai dreptul să consulți dosarul, să formulezi cereri și să pui întrebări martorilor/expertului (art. 81, 84–85 CPP).</p>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Contact | Evaluare inițială */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact | Evaluare inițială</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Îți ofer o evaluare inițială și un plan de acțiune (probe, încadrări, pași RCA/instanță). Sunt bazat în București, dar lucrez național.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40316320183"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:contact@avocatpenalbucuresti.ro">Trimite email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Resurse oficiale (linkuri utile) */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse oficiale (linkuri utile)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Cod penal – art. 192, 193, 194, 196. (<a href="https://legislatie.just.ro/Public/DetaliiDocument/223635" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>, <a href="https://lege5.ro/gratuit/gezdmnrzgi/art-196-vatamarea-corporala-din-culpa-codul-penal?dp=gqytsojugyzte" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Lege5</a>)
            </li>
            <li>
              Cod procedură penală – art. 84–85; drepturile persoanei vătămate/partii civile; jurisprudență CCR pe art. 81. (<a href="https://legislatie.just.ro/Public/DetaliiDocument/185907" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              OUG 195/2002 + HG 1391/2006 – circulație rutieră și regulament. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/74028" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Legea 132/2017 + Norma ASF 20/2017 – RCA, dosar daună, limite și proceduri. (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/190029" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>, <a href="https://asfromania.ro/ro/a/153/legisla%C8%9Bie-rca" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">ASF</a>)
            </li>
            <li>
              Legea 211/2004 (protecția victimelor infracțiunilor). (<a href="https://legislatie.just.ro/Public/DetaliiDocument/52468" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      </section>
    </>
  );
}
