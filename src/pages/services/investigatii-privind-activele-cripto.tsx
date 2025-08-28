import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import EthereumCard from "@/components/crypto/EthereumCard";
import PhoneLoader from "@/components/crypto/PhoneLoader";
import { PDFDownloadLink } from "@react-pdf/renderer";
import AnafCryptoChecklist from "@/components/pdf/AnafCryptoChecklist";

export default function InvestigatiiCripto() {
  useSEO({
    title: "Avocat Crypto – Investigații cripto și blockchain | București",
    description:
      "Avocat Bogdan Lamatic – investigații criptoactive și blockchain: fraudă, cybercrime, AML, MiCA/TFR, fiscalitate. Asistență pentru persoane fizice și companii.",
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
                    "name": "Investigații privind activele cripto",
                    "item": "https://avocatpenalbucuresti.ro/services/investigatii-privind-activele-cripto"
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
                "name": "Servicii avocat investigații privind activele cripto",
                "description": "Investigații criptoactive și blockchain: fraudă, cybercrime, AML, MiCA/TFR, fiscalitate",
                "url": "https://avocatpenalbucuresti.ro/services/investigatii-privind-activele-cripto",
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
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <header className="mb-6">
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
              <BreadcrumbPage>Investigații privind activele cripto</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
          Avocat Crypto | Investigații privind criptomonede și blockchain | Bogdan Lamatic, București | NFT | Smart Contracts
        </h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Sunt Bogdan Lamatic, avocat în Baroul București (din 2007), cu practică aprofundată în white-collar crime, investigații corporative și compliance.
          <br />
          Am reprezentat clienți în dosare complexe, cu elemente transfrontaliere, cooperare inter-autorități și probatoriu digital, inclusiv în investigații privind criptoactive (custodie, tranzacții, KYC/AML, fraudă informatică, spălare a banilor).
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
            <a href="tel:+40745506443" aria-label="Sună acum">
              <Phone className="mr-2" /> Sună acum
            </a>
          </Button>
        </div>
      </header>

      <div className="mt-8 flex justify-center">
        <EthereumCard />
      </div>

      {/* Ce tipuri de spețe crypto gestionez */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              Ce tipuri de spețe crypto gestionez
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fraudă & înșelăciune cu criptoactive</strong>: rug-pulls, promisiuni investiționale mincinoase, scheme de tip „trader garantat”, phishing, conturi/clienți „mule”. (art. 244 CP – înșelăciunea; art. 249 CP – frauda informatică).
              </li>
              <li>
                <strong>Cybercrime & acces neautorizat</strong>: compromitere conturi exchange/wallet, folosirea de malware sau dispozitive pentru a fura chei private. (art. 360–365 CP – acces ilegal, interceptare, alterarea datelor, operațiuni ilegale cu dispozitive).
              </li>
              <li>
                <strong>Spălare a banilor/AML</strong>: conversii cripto-fiat, layering prin mixere, structuri cu companii off-shore; raportări către ONPCSB, blocări de conturi, înghețări de active. (Legea 129/2019, ghidurile ONPCSB).
              </li>
              <li>
                <strong>Conformare MiCA & Travel Rule (TFR) pentru companii</strong>: white paper, autorizare CASP, proceduri KYC/Tx-monitoring, cerințe de informații la transferuri. (Reg. (UE) 2023/1114 – MiCA; Reg. (UE) 2023/1113 – TFR).
              </li>
              <li>
                <strong>Fiscalitate persoane fizice</strong>: declararea câștigurilor din „transfer de monedă virtuală”, impozit 10%, prag neimpozabil anual 600 lei, CASS la praguri—conform ANAF (broșură/ghid).
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Cum abordez un dosar cu criptomonede */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              Cum abordez un dosar cu criptomonede
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Freeze & trace</strong>: mă ocup de ordonanțe de înghețare (conturi/portofele), notificări către platforme, chain-analytics, corelări KYC/Tx-hash.
              </li>
              <li>
                <strong>Încadrare juridică</strong>: delimitez înșelăciune vs. fraudă informatică vs. spălare a banilor + posibile infracțiuni informatice; stabilesc concurs/continuitate (utile hotărâri pe art. 244/360).
              </li>
              <li>
                <strong>Probațiune digitală</strong>: extrag dovezi cu chain of custody din exchange-uri, blockchain explorers, device forensics; verific integritatea datelor (art. 362 CP).
              </li>
              <li>
                <strong>Cooperare internațională</strong>: rogatorii, e-CODEX, e-EDES, echipe comune de anchetă (JIT) – instrumente folosite curent de parchete (MP).
              </li>
              <li>
                <strong>Reparația prejudiciului</strong>: acțiuni civile paralele, asset recovery/sechestru și executare.
              </li>
            </ul>
            <div className="pt-2">
              <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                <a href="tel:+40745506443" aria-label="Sună acum pentru consultanță crypto">
                  <Phone className="mr-2" /> Sună pentru consultanță
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Servicii pentru persoane fizice & companii */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              Servicii pentru persoane fizice & companii
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-base leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold">Persoane fizice</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  Apărare în dosare penale (escrocherii cripto, acces neautorizat, AML), redactare plângeri penale, constituire parte civilă.
                </li>
                <li>
                  Fiscalitate: calculare corectă a venitului din transfer de monedă virtuală și completarea Declarației unice.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Companii/CASP/Web3</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Gap assessment MiCA/TFR, politici KYC/AML, monitorizare tranzacții.</li>
                <li>Suport autorizare/înregistrare, proceduri operaționale, playbook de incident.</li>
                <li>Traininguri pentru echipe de risc/conformitate; coordonare multi-jurisdicțională.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* De ce eu */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">De ce eu</CardTitle>
          </CardHeader>
          <CardContent className="text-base leading-relaxed">
            <p>
              Am gestionat investigații interne urgente (fraudă, asset recovery, cyber, date), apărare penală în cauze cu prejudicii mari, inclusiv cu autorități specializate (DNA/DIICOT/EPPO), și proiecte de conformare (whistleblowing, AML).
              <br />
              Experiența esta atât contencioasă, cât și preventivă, cu accent pe rezultate și confidențialitate.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Carduri personalizate și loader apel */}
      <div className="mt-8 flex justify-center">
        <PhoneLoader />
      </div>

      {/* Instrumente legale */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Instrumente legale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <div>
              <p className="font-semibold">Codul penal (infracțiuni utile în context crypto)</p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  Art. 244 – Înșelăciunea (util la promisiuni mincinoase/ICO frauduloase).{" "}
                  <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocument/244415" target="_blank" rel="noopener noreferrer">link</a>
                </li>
                <li>
                  Art. 249 – Frauda informatică (modificarea/ștergerea datelor, blocarea accesului, împiedicarea funcționării unui sistem pentru obținerea de folos).{" "}
                  <a className="underline underline-offset-4" href="https://lege5.ro/Gratuit/gezdmnrzgi/art-249-frauda-informatica-codul-penal" target="_blank" rel="noopener noreferrer">link</a>
                </li>
                <li>
                  Art. 360–365 – Infracțiuni contra siguranței și integrității sistemelor și datelor informatice (acces ilegal, interceptare, alterare date, operațiuni cu dispozitive).{" "}
                  <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocument/223635" target="_blank" rel="noopener noreferrer">link</a>
                </li>
              </ul>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Legea 129/2019 (AML/CFT) – obligații KYC, raportare, măsuri pe risc; ONPCSB publică ghiduri pentru criptoactive și Travel Rule. {" "}
                <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/216157" target="_blank" rel="noopener noreferrer">lege</a>{" "}
                | {" "}
                <a className="underline underline-offset-4" href="https://www.onpcsb.ro/ro/a/157/ghiduri/manuale" target="_blank" rel="noopener noreferrer">ghiduri</a>
              </li>
              <li>
                MiCA – Regulamentul (UE) 2023/1114: cadru uniform pentru emitenți și CASP; aplicabil integral din 30 decembrie 2024. {" "}
                <a className="underline underline-offset-4" href="https://eur-lex.europa.eu/eli/reg/2023/1114/oj/eng" target="_blank" rel="noopener noreferrer">EUR-Lex</a>{" "}
                | {" "}
                <a className="underline underline-offset-4" href="https://asfromania.ro/ro/a/2795/informare-de-presa:-reglementarea-pietelor-criptoactivelor" target="_blank" rel="noopener noreferrer">Informare ASF</a>
              </li>
              <li>
                TFR – Travel Rule: Reg. (UE) 2023/1113 – transferuri însoțite de info plătitor/beneficiar; ghid ONPCSB. {" "}
                <a className="underline underline-offset-4" href="https://eur-lex.europa.eu/legal-content/RO/TXT/PDF/?uri=CELEX:32023R1113" target="_blank" rel="noopener noreferrer">EUR-Lex</a>{" "}
                | {" "}
                <a className="underline underline-offset-4" href="https://www.onpcsb.ro/ro/a/157/ghiduri/manuale" target="_blank" rel="noopener noreferrer">Ghid ONPCSB</a>
              </li>
              <li>
                Poziții instituționale: BNR – riscuri privind „monedele virtuale”; ASF – comunicări MiCA / FinTech. {" "}
                <a className="underline underline-offset-4" href="https://asfromania.ro/ro/a/2795/informare-de-presa:-reglementarea-pietelor-criptoactivelor" target="_blank" rel="noopener noreferrer">ASF</a>
              </li>
              <li>
                Fiscalitate – ANAF: broșură oficială privind veniturile din criptomonede. {" "}
                <a className="underline underline-offset-4" href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/Brosusa_Criptomonede_2023.pdf" target="_blank" rel="noopener noreferrer">Broșură ANAF</a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Linkuri oficiale utile */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Linkuri oficiale utile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-base leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold">Codul penal – articole relevante</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  Art. 244 – Înșelăciunea (site oficial). {" "}
                  <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocument/244415" target="_blank" rel="noopener noreferrer">link</a>
                </li>
                <li>
                  Art. 249 – Frauda informatică (text actualizat). {" "}
                  <a className="underline underline-offset-4" href="https://lege5.ro/Gratuit/gezdmnrzgi/art-249-frauda-informatica-codul-penal?dp=gqytsojvga3tc" target="_blank" rel="noopener noreferrer">link</a>
                </li>
                <li>
                  Art. 360–365 – Infracțiuni informatice (acces ilegal, interceptare, alterarea datelor, operațiuni cu dispozitive). {" "}
                  <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocument/223635" target="_blank" rel="noopener noreferrer">link</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">AML – România</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  Legea 129/2019 – prevenirea și combaterea spălării banilor și finanțării terorismului (Portal legislativ). {" "}
                  <a className="underline underline-offset-4" href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/216157" target="_blank" rel="noopener noreferrer">link</a>
                </li>
                <li>
                  ONPCSB – Ghid criptoactive (indicatori de suspiciune & tipologii) + Ghid Travel Rule (Reg. 2023/1113). {" "}
                  <a className="underline underline-offset-4" href="https://www.onpcsb.ro/uploads/articole/attachments/67eb8f930d612007345948.pdf" target="_blank" rel="noopener noreferrer">pdf</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Reglementări UE aplicabile în România</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  MiCA – Reg. (UE) 2023/1114 (EUR-Lex) & Informare ASF. {" "}
                  <a className="underline underline-offset-4" href="https://www.onpcsb.ro/uploads/articole/attachments/67eb8f930d612007345948.pdf" target="_blank" rel="noopener noreferrer">ONPCSB</a>{" "}
                  | {" "}
                  <a className="underline underline-offset-4" href="https://asfromania.ro/ro/a/2795/informare-de-presa:-reglementarea-pietelor-criptoactivelor" target="_blank" rel="noopener noreferrer">ASF</a>
                </li>
                <li>
                  TFR – Reg. (UE) 2023/1113 („Travel Rule”) – text oficial. {" "}
                  <a className="underline underline-offset-4" href="https://eur-lex.europa.eu/legal-content/RO/TXT/PDF/?uri=CELEX:32023R1113" target="_blank" rel="noopener noreferrer">EUR-Lex</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Fiscalitate – ANAF</h3>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  Broșură ANAF – Venituri din criptomonede (impozit 10%, prag 600 lei/an, exemple, declarația unică). {" "}
                  <a className="underline underline-offset-4" href="https://static.anaf.ro/static/10/Anaf/AsistentaContribuabili_r/Brosusa_Criptomonede_2023.pdf" target="_blank" rel="noopener noreferrer">link</a>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Întrebări frecvente */}
      <section className="mt-8">
        <Card className="border-accent">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Întrebări frecvente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <div>
              <p className="font-semibold">Este „crypto” legal în România?</p>
              <p className="text-muted-foreground">
                Da, nu este mijloc legal de plată, dar deținerea/tranzacționarea sunt permise; se aplică MiCA/TFR, Legea 129/2019, Codul penal și Codul fiscal; autoritățile (BNR/ASF/ONPCSB/ANAF) au roluri distincte.
              </p>
            </div>
            <div>
              <p className="font-semibold">Mă poate ajuta un avocat să recuperez fonduri?</p>
              <p className="text-muted-foreground">
                Da—acționez simultan pe penal (plângere, măsuri asiguratorii) și civil (pretenții), folosesc cereri către exchange-uri, chain analytics și cooperare internațională (e-CODEX/e-EDES).
              </p>
            </div>
            <div>
              <p className="font-semibold">Sunt antreprenor crypto—ce trebuie să fac „ieri”?</p>
            <p className="text-muted-foreground">
              Faceți gap-assessment MiCA/TFR, KYC pe risc, verificare sancțiuni, proceduri incident-response, training personal, și pregătirea documentației pentru autorizații/înregistrări.
              <br />
              ASF a indicat necesitatea cadrului național de competențe.
            </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact rapid */}
      <section className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Contact rapid – consultanță inițială</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p>
              București • Telefon: <a className="underline underline-offset-4" href="tel:+40745506443">+40 745 506 443</a> • Email: {" "}
              <a className="underline underline-offset-4" href="mailto:office@lamatic.ro">office@lamatic.ro</a>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="premium">
                <a href="tel:+40745506443"><Phone className="mr-2" /> Sună acum</a>
              </Button>
              <Button asChild variant="outline">
                <a href="mailto:office@lamatic.ro">Trimite email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Checklist fiscal ANAF - PDF */}
      <section className="mt-8">
        <Card className="border-accent bg-accent text-accent-foreground">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              Checklist fiscal ANAF - crypto (persoană fizică)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <PDFDownloadLink document={<AnafCryptoChecklist />} fileName="checklist-anaf-cripto-2025.pdf">
              {({ loading }) => (
                <Button disabled={loading} variant="light" size="lg">
                  {loading ? "Pregătesc PDF..." : "Descarcă PDF Gratuit"}
                </Button>
              )}
            </PDFDownloadLink>
          </CardContent>
        </Card>
      </section>

      </main>
    </>
  );
}
