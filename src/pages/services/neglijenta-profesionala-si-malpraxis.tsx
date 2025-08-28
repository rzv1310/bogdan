import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import MalpraxisChecklistSection from "@/components/services/MalpraxisChecklistSection";

export default function Malpraxis() {
  useSEO({
    title: "Avocat Malpraxis Medical | av. Bogdan Lamatic | Bucuresti | Neglijenta in serviciu",
    description:
      "Avocat malpraxis medical & neglijență în serviciu în București. Evaluare rapidă, strategie integrată civil & penal.",
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
                    "item": "https://avocatbogdanlamatic.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": "https://avocatbogdanlamatic.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Neglijență profesională și malpraxis",
                    "item": "https://avocatbogdanlamatic.ro/services/neglijenta-profesionala-si-malpraxis"
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
                "name": "Servicii avocat neglijență profesională și malpraxis",
                "description": "Avocat malpraxis medical & neglijență în serviciu în București. Evaluare rapidă, strategie integrată civil & penal",
                "url": "https://avocatbogdanlamatic.ro/services/neglijenta-profesionala-si-malpraxis",
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
                  "telephone": "+40745506443"
                }
              })
            }}
          />
        </>
      )}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
        Avocat Malpraxis Medical | av. Bogdan Lamatic | București | Neglijență în serviciu
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Salut! Sunt avocatul Bogdan Lamatic, din Baroul București, cu practică solidă în drept penal (white-collar, infracțiuni de serviciu) și litigii cu componentă medicală (malpraxis, răspundere civilă și penală).
        </p>
        <p>
          Am reprezentat atât inculpați, cât și părți vătămate, inclusiv în dosare complexe cu expertize medico-legale, investigații interne și comisii de malpraxis.
        </p>
        <p>
          Sunt recunoscut de Legal 500 drept “Next Generation Partner” (White-Collar Crime) în edițiile 2021–2024, distincție care reflectă munca mea strategică și rezultatele în cauze dificile.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună acum pentru consultanță malpraxis">
          <a href="tel:+40745506443" title="/telefon">
            <Phone className="mr-2 h-4 w-4" /> Sună acum
          </a>
        </Button>
      </div>

      <div className="mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" title="/">Acasă</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">Servicii</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Neglijență profesională și malpraxis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Ce înseamnă malpraxis medical. Baza legală */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce înseamnă malpraxis medical. Baza legală</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Definiție legală.</strong> Legea sănătății prevede că malpraxisul este eroarea profesională din actul medical/medico-farmaceutic ce produce un prejudiciu pacientului și atrage răspunderea civilă a personalului medical și/sau a furnizorului de servicii/produse medicale. Art. 653, Titlul XVI (fost XV) din Legea nr. 95/2006.
          </p>
          <div>
            <h3 className="text-xl font-semibold">Cine răspunde?</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <strong>Personal medical</strong> (medic, asistent, moașă etc.), pentru erori din neglijență, imprudență ori cunoștințe insuficiente, inclusiv încălcarea confidențialității/consimțământului.
              </li>
              <li>
                <strong>Unitatea sanitară</strong> (publică/privată), pentru infecții nosocomiale, dispozitive/materiale neconforme, folosirea după expirare, lipsa asigurării etc. (Art. 655–657).
              </li>
            </ul>
            <p className="text-muted-foreground mt-2">
              Notă: răspunderea civilă NU exclude răspunderea penală dacă fapta este infracțiune. (Art. 653 alin. 5.)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Când devine fapta penală */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Când fapta devine penală</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>În paralel cu malpraxisul (civil), în anumite situații discutăm fapte penale:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vătămare corporală din culpă – art. 196 Cod penal</strong> (de ex., leziuni grave generate de încălcarea regulilor profesionale). Textul actualizat stabilește condițiile și situațiile când acțiunea penală se pornește din oficiu.
            </li>
            <li>
              <strong>Ucidere din culpă – art. 192 Cod penal</strong> (deces din eroare profesională).
            </li>
            <li>
              <strong>Neglijență în serviciu – art. 298 Cod penal</strong> (fapta funcționarului public care, din culpă, încalcă/nu îndeplinește o atribuție prevăzută de lege și cauzează pagubă ori vătămare de drepturi).
            </li>
            <li>
              <strong>Extindere la mediul privat (art. 308 CP)</strong> – dacă fapta de serviciu e comisă de persoane ce îndeplinesc o însărcinare în cadrul unei persoane juridice/private, se aplică regulile infracțiunilor de serviciu cu reducerea limitelor de pedeapsă.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Procedura administrativă | Comisia de malpraxis */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Procedura administrativă | Comisia de malpraxis</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Sesizarea Comisiei</strong> – poate fi făcută de pacient, aparținător sau succesor (art. 681). Comisia desemnează experți din lista națională, întocmește raport în max. 3 luni și emite decizie; toate părțile primesc raportul.
            </li>
            <li>
              <strong>Contestație</strong> – decizia Comisiei se poate ataca în tribunal – secția civilă în 15 zile de la comunicare (art. 684).
            </li>
            <li>
              <strong>Prescripție</strong> – acțiunile privind actele de malpraxis se prescriu în 3 ani de la producerea prejudiciului (cu excepția faptelor ce sunt infracțiuni). (Art. 688).
            </li>
            <li>
              <strong>Asigurarea obligatorie</strong> – personalul/ unitatea trebuie să aibă poliță de răspundere civilă; omisiunea constituie abatere sancționabilă (art. 689).
            </li>
            <li>
              <strong>Norme metodologice</strong> – detaliază pașii, inclusiv stabilirea vinovăției și cooperarea cu asigurătorii (OMS 482/2007, modificat prin OMS 1411/2016).
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Neglijență în serviciu în sănătate (public vs. privat) */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Neglijență în serviciu în sănătate (public vs. privat)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            <strong>Unități/medici din sistemul public</strong> – pot intra sub incidența art. 298 CP dacă neîndeplinirea/îndeplinirea defectuoasă a unei atribuții prevăzute de lege cauzează pagubă/vătămare de drepturi. (Jurisprudența CCR a consolidat cerința „încălcării legii” pentru faptele de serviciu – Decizia 405/2016 și ulterioare).
          </p>
          <p>
            <strong>Mediul privat</strong> – dacă atribuțiile sunt exercitate în cadrul unei persoane juridice private, se aplică art. 308 CP (infracțiuni de serviciu comise de alte persoane), cu efectul de reducere a limitelor de pedeapsă.
          </p>
          <p>
            <em>Practic:</em> în dosarele clinice, combin adesea latura civilă (despăgubiri) cu latura penală (culpa profesională, neglijența în serviciu), configurând strategia după probatoriu (expertiză medico-legală, ghiduri, protocoale, registrul operațiilor, fișe de observație, trasabilitatea dispozitivelor).
          </p>
        </CardContent>
      </Card>

      {/* Ce fac pentru tine - metodă de lucru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce fac pentru tine - metodă de lucru</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-5">
          <div>
            <h3 className="text-xl font-semibold">Dacă ești pacient/familie (partea vătămată):</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <strong>Audit juridic & medical:</strong> identific rapid abaterea de la standardul profesional și documentez legătura cauzală.
              </li>
              <li>
                <strong>Duble canale:</strong> pornesc procedura la Comisia de malpraxis și, când e cazul, plângere penală (art. 192/196/298 CP).
              </li>
              <li>
                <strong>Despăgubiri:</strong> activez asigurătorul și urmăresc acoperirea integrală a prejudiciilor (tratament, venituri, daune morale). Acest tip de reprezentare face parte din practica mea curentă în apărarea victimelor în cauze penale și de malpraxis.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Dacă ești medic/clinică (apărare):</h3>
            <ul className="mt-2 list-disc pl-6 space-y-2">
              <li>
                <strong>Stabilirea standardului de îngrijire</strong> și a cadrului de competență (inclusiv limite, urgențe).
              </li>
              <li>
                <strong>Gestionarea investigațiilor:</strong> răspunsuri către Comisie/inspectorate, poziții procesuale coerente, protejarea confidențialității.
              </li>
              <li>
                <strong>Strategie penală:</strong> delimitarea culpei profesionale de riscurile inerente actului medical (art. 654 lit. a–b Legea 95/2006).
              </li>
            </ul>
          </div>
          <div className="pt-2">
            <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună pentru consultanță malpraxis">
              <a href="tel:+40745506443" title="/telefon"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
          </div>
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
              <strong>Pot cere despăgubiri fără proces penal?</strong>
              <p className="mt-1">Da. Răspunderea civilă se poate valorifica separat (Comisie + acțiune civilă), independent de penal. (Titlul XVI Legea 95/2006).</p>
            </li>
            <li>
              <strong>Care este termenul de prescripție?</strong>
              <p className="mt-1">De regulă, 3 ani pentru malpraxis pe civil; pentru infracțiuni (ex. art. 192/196 CP) se aplică termenele penale.</p>
            </li>
            <li>
              <strong>Ce se întâmplă dacă unitatea/medicul nu are asigurare?</strong>
              <p className="mt-1">E abatere sancționabilă; răspunderea civilă rămâne, iar despăgubirile pot fi urmărite direct. (Art. 689, 690–691 Legea 95/2006; OMS 482/2007).</p>
            </li>
            <li>
              <strong>Când discutăm „neglijență în serviciu” penal?</strong>
              <p className="mt-1">Când încălcarea unei atribuții prevăzute de lege de către un funcționar public (ex. în unitate publică) cauzează pagubă/vătămare; pentru mediul privat funcționează extinderea din art. 308 CP.</p>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* De ce eu */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce eu</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <p>
            Cazurile mele implică frecvent documentații voluminoase și expertize pluridisciplinare – de la fraudă și anticorupție la malpraxis și accidente de muncă/auto –, cu reprezentare la toate nivelurile (parchete, instanțe până la ÎCCJ, inclusiv DNA/DIICOT/EPPO).
          </p>
          <p>
            Am coordonat investigații interne transfrontaliere și am asistat corporații și persoane fizice în situații cu risc reputațional ridicat.
          </p>
          <p>
            Contact rapid (București): îți ofer o evaluare inițială, plan de acțiune și estimare de buget/termene.
          </p>
        </CardContent>
      </Card>

      {/* Resurse - cheie oficiale */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Resurse - cheie oficiale</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Legea nr. 95/2006 – Titlul XVI (fost XV): definiții, răspunderea personalului/ unităților, consimțământul informat, Comisia de malpraxis, prescripția (art. 653–691).
            </li>
            <li>
              OMS nr. 482/2007 (Norme metodologice), cu modificările OMS 1411/2016. (<a href="https://legislatie.just.ro/public/DetaliiDocument/219432" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
            <li>
              Codul penal: art. 192 (ucidere din culpă), 196 (vătămare din culpă), 298 (neglijență în serviciu), 308 (fapte de serviciu comise de alte persoane). (<a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/80963" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">Portal Legislativ</a>)
            </li>
          </ul>
        </CardContent>
      </Card>
      <MalpraxisChecklistSection />
      </section>
    </>
  );
}
