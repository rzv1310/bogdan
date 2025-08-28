import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import MitaBarChart from "@/components/charts/MitaBarChart";

export default function CoruptieSiFunctiePublica() {
  useSEO({
    title: "Infracțiuni de corupție – Avocat Bogdan Lamatic, București",
    description:
      "Apărare în corupție și fapte de serviciu: mită, trafic de influență, abuz în serviciu, DNA. Avocat Bogdan Lamatic, București. Consultanță rapidă.",
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
                    "item": "https://avocatpenalbucuresti.ro/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Servicii",
                    "item": "https://avocatpenalbucuresti.ro/#servicii"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Infracțiuni de corupție și fapte legate de exercitarea funcției publice",
                    "item": "https://avocatpenalbucuresti.ro/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice"
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
                "name": "Servicii avocat infracțiuni de corupție și fapte legate de exercitarea funcției publice",
                "description": "Apărare în corupție și fapte de serviciu: mită, trafic de influență, abuz în serviciu, DNA",
                "url": "https://avocatpenalbucuresti.ro/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice",
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
        Infracțiuni de corupție și fapte legate de exercitarea funcției publice – Avocat Bogdan Lamatic | București
      </h1>

      <div className="space-y-3 text-base leading-relaxed text-muted-foreground">
        <p>
          Sunt avocat în Baroul București din 2007 și coordonez apărarea în dosare de corupție și conexe funcției publice – de la investigație internă, până la verdict definitiv.
        </p>
        <p>
          Am fost recomandat de Legal 500 ca Next Generation Partner (White-Collar Crime) în edițiile 2021–2024 și Rising Star în 2020.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună acum pentru consultanță anticorupție">
          <a href="tel:+40745506443">
            <Phone className="mr-2 h-4 w-4" /> Apelează acum
          </a>
        </Button>
      </div>

      <div className="mt-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Acasă</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span className="text-muted-foreground">Servicii</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Infracțiuni de corupție și fapte legate de exercitarea funcției publice</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Definiții și cadru */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ce înțelegem prin „corupție” vs. „fapte de serviciu”</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <div>
            <p className="font-medium">Corupție (Cap. I, Cod penal)</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Luare de mită (art. 289)</li>
              <li>Dare de mită (art. 290)</li>
              <li>Trafic de influență (art. 291)</li>
              <li>Cumpărare de influență (art. 292)</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Fapte de serviciu (Cap. II, Cod penal)</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Delapidare (art. 295)</li>
              <li>Abuz în serviciu (art. 297)</li>
              <li>Conflict de interese (art. 301)</li>
              <li>Aplicarea art. 308 pentru persoane asimilate funcționarilor publici</li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Cadrul special</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Legea nr. 78/2000 (regim și competențe extinse)</li>
              <li>OUG nr. 43/2002 (DNA)</li>
              <li>Strategia Națională Anticorupție 2021–2025</li>
              <li>Legea avertizorilor nr. 361/2022</li>
              <li>Legea integrității nr. 176/2010 (ANI)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Cum te apăr */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum te apăr, concret</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Evaluare rapidă a încadrărilor și competenței organelor (DNA/parchet):</strong> verific dacă sunt întrunite tipicitatea și condițiile de competență (ex. praguri/criterii din OUG 43/2002, art. 13).
            </li>
            <li>
              <strong>Strategie pe probe sensibile (flag, denunț, filaj, tehnici speciale):</strong> contest legalitatea actelor, a autorizărilor și lanțul de custodie; valorific „cauze de nepedepsire” (ex. denunțul pentru mituitor – art. 290 alin. (3)).
            </li>
            <li>
              <strong>Apărare pe service-offences după jurisprudența CCR:</strong> pentru abuz în serviciu, insist pe condiția „încălcării legii” stabilită prin Deciziile CCR nr. 405/2016 și 392/2017.
            </li>
            <li>
              <strong>Gestionare expunere reputațională și măsuri preventive:</strong> pentru persoane publice, companii și instituții – investigăm intern, corectăm proceduri, pregătim comunicare și cooperare instituțională (DNA/ANI).
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* De ce eu */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">De ce eu</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            Avocat pledant în cauze penale economice, corupție și servicii, inclusiv în fața ÎCCJ, DNA și parchete specializate; experiență cu investigații interne și remedieri de conformitate.
          </p>
          <p>
            Am asistat și reprezentat clienți în cauze de top: acuzații de corupție în achiziții publice de peste 300 mil. EUR; foști demnitari (secretar de stat, parlamentari), primari, companii din energie, logistică, life sciences, transport.
          </p>
          <p>
            Gestionarea cazurilor complexe (cross-border, investigații paralele, recuperare de prejudiciu) face parte din practica mea curentă.
          </p>
        </CardContent>
      </Card>

      {/* Ghid util */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Ghid util – principalele infracțiuni și idei-cheie</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-5">
          <div>
            <h3 className="text-xl font-semibold">1) Corupție (Cap. I CP)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Luare de mită (art. 289 CP):</strong> fapta funcționarului public de a pretinde/primire foloase necuvenite.
              </li>
              <li>
                <strong>Dare de mită (art. 290 CP):</strong> mituitorul nu se pedepsește dacă denunță fapta înainte ca organul de urmărire penală să fie sesizat (alin. 3).
              </li>
              <li>
                <strong>Trafic de influență (art. 291 CP) și cumpărare de influență (art. 292 CP):</strong> tranzacționarea influenței reale/presupuse asupra unui funcționar public.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">2) Fapte de serviciu (Cap. II CP)</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Delapidare (art. 295 CP):</strong> însușire/folosire de bunuri gestionate de funcționar; tentativă pedepsită.
              </li>
              <li>
                <strong>Abuz în serviciu (art. 297 CP):</strong> după CCR, „îndeplinește în mod defectuos” înseamnă prin încălcarea legii; apărarea verifică norma încălcată, prejudiciul și legătura de cauzalitate.
              </li>
              <li>
                <strong>Conflict de interese (art. 301 CP):</strong> act/decizie prin care se obține folos patrimonial pentru sine/rude/afini ori persoane cu care au existat raporturi – sancțiune penală + interzicerea funcției publice.
              </li>
              <li>
                <strong>Art. 308 CP:</strong> extinde aplicarea la persoane asimilate funcționarilor (ex. în serviciul unei persoane juridice).
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">3) Legi speciale & instituții</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Legea 78/2000:</strong> norme speciale anticorupție; corelări frecvente cu art. 289–292 CP și cu abuzul în serviciu (art. 13^2).
              </li>
              <li>
                <strong>OUG 43/2002 (DNA):</strong> stabilește competența DNA pentru corupție, în condițiile art. 13.
              </li>
              <li>
                <strong>Legea 361/2022 (avertizori):</strong> protecție pentru raportări în interes public – utilă în compliance și apărare.
              </li>
              <li>
                <strong>Legea 176/2010 (ANI):</strong> reglementează integritatea, incompatibilități și conflicte de interese în sens administrativ.
              </li>
              <li>
                <strong>SNA 2021–2025:</strong> direcție de politică publică anticorupție.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Cum lucrăm */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Cum lucrăm în dosarul tău</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <ul className="list-disc pl-6 space-y-1">
            <li>Audit juridic al dosarului – verific tipicitate, competență, legalitatea probelor (interceptări, flagrant, percheziții).</li>
            <li>Plan procedural – cereri, excepții, expertize, administrare probatoriu defensiv.</li>
            <li>Strategie de impact redus – când e posibil: schimbare de încadrare, renunțare sau amânare a aplicării pedepsei, acord de recunoaștere.</li>
            <li>Pentru companii/instituții – investigații interne, protecția avertizorilor, training anticorupție și plan de remediere.</li>
          </ul>
          <div className="pt-2">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none" aria-label="Sună pentru consultanță în dosare de corupție">
              <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Linkuri oficiale utile */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Linkuri oficiale utile (text actualizat)</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-5">
          <div>
            <h3 className="text-xl font-semibold">Codul penal (consolidat – Portal Legislativ): articole relevante</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Art. 289 – Luarea de mită | {" "}
                <a className="underline" href="https://lege5.ro/Gratuit/gezdmnrzgi/art-289-luarea-de-mita-codul-penal?dp=gqytsojvgm4dg" target="_blank" rel="noopener noreferrer">lege5.ro</a>
              </li>
              <li>
                Art. 290 – Darea de mită | {" "}
                <a className="underline" href="https://legeaz.net/noul-cod-penal/art-290" target="_blank" rel="noopener noreferrer">legeaz.net</a>
              </li>
              <li>
                Art. 291 – Traficul de influență | {" "}
                <a className="underline" href="https://legeaz.net/noul-cod-penal/art-291" target="_blank" rel="noopener noreferrer">legeaz.net</a>
              </li>
              <li>
                Art. 292 – Cumpărarea de influență | {" "}
                <a className="underline" href="https://lege5.ro/Gratuit/gezdmnrzgi/art-292-cumpararea-de-influenta-codul-penal?dp=gqytsojvgqydk" target="_blank" rel="noopener noreferrer">lege5.ro</a>
              </li>
              <li>
                Art. 295 – Delapidarea | {" "}
                <a className="underline" href="https://coduri.juridice.ro/codul-penal/index.php/2019/09/17/art-295-delapidarea/" target="_blank" rel="noopener noreferrer">coduri.juridice.ro</a>
              </li>
              <li>
                Art. 297 – Abuzul în serviciu | {" "}
                <a className="underline" href="https://legeaz.net/noul-cod-penal/art-297" target="_blank" rel="noopener noreferrer">legeaz.net</a>
              </li>
              <li>
                Art. 301 – Conflictul de interese | {" "}
                <a className="underline" href="https://lege5.ro/gratuit/gezdmnrzgi/art-301-conflictul-de-interese-codul-penal?dp=gqytsojvgq3dk" target="_blank" rel="noopener noreferrer">lege5.ro</a>
              </li>
              <li>
                Art. 308 – Infracțiuni de corupție și serviciu comise de alte persoane | {" "}
                <a className="underline" href="https://sintact.ro/legislatie/monitorul-oficial/codul-penal-din-2009-legea-nr-286-2009-16901302/art-308" target="_blank" rel="noopener noreferrer">sintact.ro</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Legi speciale & instituții</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                Legea nr. 78/2000 | {" "}
                <a className="underline" href="https://www.dna.ro/legislatie.xhtml?sectiune=2&id=12" target="_blank" rel="noopener noreferrer">dna.ro</a>
              </li>
              <li>
                OUG nr. 43/2002 privind DNA | {" "}
                <a className="underline" href="https://legislatie.just.ro/Public/DetaliiDocument/35165" target="_blank" rel="noopener noreferrer">legislatie.just.ro</a>
              </li>
              <li>
                Legea nr. 361/2022 | avertizori în interes public | {" "}
                <a className="underline" href="https://lege5.ro/Gratuit/geztcmrtgu3tm/conditii-lege-361-2022?dp=guytcmjyhazdqma" target="_blank" rel="noopener noreferrer">lege5.ro</a>
              </li>
              <li>
                Legea nr. 176/2010 | integritatea în exercitarea funcțiilor publice | {" "}
                <a className="underline" href="https://legislatie.just.ro/public/detaliidocument/121924" target="_blank" rel="noopener noreferrer">legislatie.just.ro</a>
              </li>
              <li>
                Strategia Națională Anticorupție 2021–2025 (HG nr. 1269/2021) | {" "}
                <a className="underline" href="https://www.just.ro/wp-content/uploads/2021/12/Strategia-Nationala-Anticoruptie-2021-2025.pdf" target="_blank" rel="noopener noreferrer">just.ro</a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* FAQ */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h2 className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente rapide</h2>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-3">
          <ul className="space-y-2">
            <li>
              <strong>Mi s-a propus o „atenție”. Ce fac?</strong> Nu accepta. Dacă ai oferit bani sub presiune, discutăm imediat despre oportunitatea denunțului (art. 290 alin. 3).
            </li>
            <li>
              <strong>Dosarul meu e la DNA. Contează „valoarea”?</strong> Competența poate depinde de natura faptei și criteriile din OUG 43/2002; verificăm exact situația ta.
            </li>
            <li>
              <strong>Am o funcție de conducere într-o companie de stat. Mă afectează art. 308?</strong> Da, norma extinde aplicarea la persoane asimilate – analizăm atribuțiile concrete.
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Contact rapid */}
      <Card className="mt-8 border-accent">
        <CardHeader>
          <h3 className="text-xl font-semibold leading-none tracking-tight">Contact rapid – consultanță inițială</h3>
        </CardHeader>
        <CardContent className="text-base leading-relaxed space-y-2">
          <p>
            📍 București • 📞 <a className="underline" href="tel:+40745506443">0745.506.443</a> • ✉️ <a className="underline" href="mailto:bogdan.lamatic@yahoo.com">bogdan.lamatic@yahoo.com</a>.
            Scrie-mi sau sună pentru evaluarea dosarului tău - răspund prompt și clar!
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild variant="premium">
              <a href="tel:+40745506443"><Phone className="mr-2 h-4 w-4" /> Sună acum</a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:bogdan.lamatic@yahoo.com">Trimite email</a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <MitaBarChart />
      </div>
      </section>
    </>
  );
}
