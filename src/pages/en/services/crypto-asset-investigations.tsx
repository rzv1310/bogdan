import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EthereumCard from "@/components/crypto/EthereumCard";
import PhoneLoader from "@/components/crypto/PhoneLoader";

export default function CryptoInvestigationsEn() {
  useSEO({
    title: "Crypto lawyer | Investigations into cryptocurrencies and blockchain | Bogdan Lamatic, Bucharest | NFT | Smart contracts",
    description: "Blockchain, fraud, cybercrime, AML, MiCA/TFR compliance.",
    alternates: { en: "/en/services/crypto-asset-investigations", ro: "/servicii/investigatii-privind-activele-cripto" },
    locale: "en_US",
    canonical: "/en/services/crypto-asset-investigations",
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Investigations regarding crypto assets",
                item:
                  typeof window !== "undefined"
                    ? `${window.location.origin}/en/services/crypto-asset-investigations`
                    : "/en/services/crypto-asset-investigations",
              },
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
            name: "Investigations regarding crypto assets",
            url:
              typeof window !== "undefined"
                ? `${window.location.origin}/en/services/crypto-asset-investigations`
                : "/en/services/crypto-asset-investigations",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            provider: {
              "@type": "Person",
              name: "Bogdan Lamatic",
              telephone: "+40 745 506 443",
            },
            telephone: "+40 745 506 443",
          }),
        }}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/en">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <span className="text-muted-foreground">Services</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Investigations regarding crypto assets</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Crypto lawyer | Investigations into cryptocurrencies and blockchain | Bogdan Lamatic, Bucharest | NFT | Smart contracts</h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            I am Bogdan Lamatic, attorney at the Bucharest Bar (since 2007), with deep practice in white-collar crime,
            internal investigations and compliance. I have represented clients in complex, cross-border matters with
            digital evidence and inter-authority cooperation, including crypto cases (custody, transactions, KYC/AML,
            cyber fraud, money laundering).
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40745506443" aria-label="Call now">
                <Phone className="mr-2" /> Call now
              </a>
            </Button>
          </div>
        </header>

        <div className="mt-8 flex justify-center">
          <EthereumCard />
        </div>

        {/* What types of crypto matters I handle */}
        <section className="mt-8">
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                Types of crypto cases I handle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Fraud & deceit with crypto assets</strong>: rug pulls, false investment promises, guaranteed trader schemes,
                  phishing, mule accounts. (Art. 244 – deceit; Art. 249 – computer fraud)
                </li>
                <li>
                  <strong>Cybercrime & unauthorized access</strong>: compromised exchange/wallet accounts, malware or devices used to
                  steal private keys. (Art. 360–365 CP)
                </li>
                <li>
                  <strong>Money laundering/AML</strong>: crypto-fiat conversions, mixers, off-shore structures; reports to FIU, account
                  freezes, asset seizures. (Law 129/2019)
                </li>
                <li>
                  <strong>MiCA & Travel Rule (TFR) compliance for companies</strong>: white paper, CASP authorization, KYC/Tx-monitoring,
                  information requirements for transfers. (EU Reg. 2023/1114 – MiCA; EU Reg. 2023/1113 – TFR)
                </li>
                <li>
                  <strong>Tax for individuals</strong>: declaring income from virtual currency transfers; thresholds and CASS rules (ANAF guide).
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How I approach a crypto case */}
        <section className="mt-8">
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                How I approach a crypto case
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-base leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Freeze & trace</strong>: freezing orders (accounts/wallets), notices to platforms, chain analytics, KYC/Tx-hash
                  correlation.
                </li>
                <li>
                  <strong>Legal qualification</strong>: delimiting deceit vs. computer fraud vs. money laundering; concurrency and
                  continued offense.
                </li>
                <li>
                  <strong>Digital evidence</strong>: evidence extraction with chain of custody from exchanges, blockchain explorers,
                  device forensics; integrity verification (Art. 362 CP).
                </li>
                <li>
                  <strong>International cooperation</strong>: MLA, e-CODEX, JIT – tools often used by prosecutors.
                </li>
                <li>
                  <strong>Recovering damages</strong>: parallel civil action, asset recovery/seizure and enforcement.
                </li>
              </ul>
              <div className="pt-2">
                <Button asChild variant="premium" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                  <a href="tel:+40745506443" aria-label="Call now for crypto advice">
                    <Phone className="mr-2" /> Call for advice
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Individuals & companies */}
        <section className="mt-8">
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-base leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold">Individuals</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li>Defense in criminal cases (crypto scams, unauthorized access, AML), criminal complaints, civil claims.</li>
                  <li>Tax: proper calculation and reporting of income from virtual currency transfers.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Companies/CASP/Web3</h3>
                <ul className="mt-2 list-disc pl-6 space-y-2">
                  <li>MiCA/TFR gap assessment, KYC/AML policies, transaction monitoring.</li>
                  <li>Authorization/registration support, operating procedures, incident playbooks.</li>
                  <li>Training for risk/compliance teams; multi-jurisdiction coordination.</li>
                </ul>
              </div>
            </CardContent>
        </Card>
        </section>

        <section className="mt-8">
          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base leading-relaxed">
              <div>
                <p className="font-semibold">Is “crypto” legal in Romania?</p>
                <p className="text-muted-foreground">
                  Yes. It is not legal tender, but holding/trading is allowed; MiCA/TFR, Law 129/2019, the Criminal Code and the Tax Code apply; authorities (NBR/ASF/FIU/ANAF) have distinct roles.
                </p>
              </div>
              <div>
                <p className="font-semibold">Can a lawyer help me recover funds?</p>
                <p className="text-muted-foreground">
                  Yes — I act both criminally (complaint, precautionary measures) and civilly (claims), use requests to exchanges, chain analytics and international cooperation (e-CODEX/e-EDES).
                </p>
              </div>
              <div>
                <p className="font-semibold">I’m a crypto entrepreneur — what should I have done “yesterday”?</p>
                <p className="text-muted-foreground">
                  Do a MiCA/TFR gap assessment, risk-based KYC, sanctions screening, incident-response procedures, staff training, and prepare documentation for authorizations/registrations. The ASF has signaled the need for a national competence framework.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="mt-8 flex justify-center">
          <PhoneLoader />
        </div>
      </main>
    </>
  );
}
