import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function MoneyLaunderingEn() {
  useSEO({
    title: "Money laundering & asset concealment | Defense - Bogdan Lamatic",
    description: "Defense in money laundering and asset concealment cases.",
    alternates: { en: "/en/services/money-laundering-and-asset-concealment", ro: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
    locale: "en_US",
    canonical: "/en/services/money-laundering-and-asset-concealment",
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
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Money laundering and asset concealment", item: typeof window !== "undefined" ? `${window.location.origin}/en/services/money-laundering-and-asset-concealment` : "/en/services/money-laundering-and-asset-concealment" },
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
            "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html",
            name: "Defense in money laundering and asset concealment",
            url: typeof window !== "undefined" ? `${window.location.origin}/en/services/money-laundering-and-asset-concealment` : "/en/services/money-laundering-and-asset-concealment",
            areaServed: ["RO", "EU"],
            availableLanguage: ["en", "ro"],
            address: {
              "@type": "PostalAddress",
              streetAddress: "Strada Colonel Stefan Stoika 22",
              addressLocality: "București",
              addressRegion: "Bucuresti",
              postalCode: "012244",
              addressCountry: "RO",
              url: "https://www.google.com/maps?cid=17818591254142574295"
            },
            hasMap: "https://www.google.com/maps?cid=17818591254142574295",
            provider: { "@type": "Person", name: "Bogdan Lamatic", "@id": "https://s3.amazonaws.com/slstacks/avocatpenalbucuresti/id.html", telephone: "+40 (31) 632 01 83" },
            telephone: "+40 (31) 632 01 83",
          }),
        }}
      />

      <main className="mx-auto max-w-6xl px-4 md:px-6 py-8">
        <header className="mb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Money laundering offense | Asset concealment – my experience as a lawyer (Bogdan Lamatic, Bucharest)</h1>
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
                <BreadcrumbPage>Money laundering and asset concealment</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        {/* Intro + CTA */}
        <section className="mt-4 border border-accent rounded-md p-4">
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
              <a href="tel:+40316320183" aria-label="Call now">
                <Phone className="mr-2" /> Call now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:contact@avocatpenalbucuresti.ro" aria-label="Email us">
                <Mail className="mr-2" /> Email us
              </a>
            </Button>
          </div>
          <div className="mt-3 space-y-3 text-base leading-relaxed">
            <p>
              I chose to practice business criminal law because it is one of the few fields where facts, money and intent intertwine in a way that directly shapes people’s lives.
            </p>
            <p>
              Every white‑collar crime case I take confirms that no two stories are alike, and the path to a fair outcome starts with understanding the legal context and the moral responsibilities of those involved.
            </p>
            <p className="bg-accent text-accent-foreground rounded-md px-3 py-2">
              As a lawyer with the Bucharest Bar, specialized in money laundering and asset concealment, I share key landmarks to navigate the current legislation and prepare your defense.
            </p>
          </div>
        </section>

        {/* What constitutes money laundering */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">What constitutes the offense of money laundering</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Law 129/2019 criminalizes money laundering (art. 49) in three alternative forms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Converting or transferring assets derived from crime to conceal their illicit origin or help the perpetrator evade prosecution.</li>
              <li>Concealing or disguising the nature, origin, location, disposition, movement or ownership of assets, knowing they derive from crimes. This is commonly referred to as “asset concealment.”</li>
              <li>
                Acquiring, possessing, or using assets while knowing they come from crimes. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=cuprins%3A%281,entităților%20raportoare%20să%20aplice%20măsuri" target="_blank" rel="noopener noreferrer" className="underline">(art. 49 Law 129/2019)</a>
              </li>
            </ul>
            <p>
              For individuals, the penalty ranges from 3 to 10 years’ imprisonment; attempts are punished with lower limits. Legal entities face fines and complementary sanctions (dissolution, suspension of activity etc.). Amendments in 2021 (Law 102/2021) clarified extraterritorial applicability to Romanian entities committing laundering abroad.
            </p>

            <h3 className="text-xl font-semibold mt-4">Updates introduced by Law 86/2025</h3>
            <p>
              In May 2025, Law 86/2025 amended Law 129/2019, tightening reporting entities’ obligations and restricting public access to UBO registers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Mandatory identification of the customer and beneficial owner for all transactions; entities must verify identity and monitor business relationships and transactions to detect unusual operations. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=articolul%2016%2C%20alineatul%20,entităților%20raportoare%20să%20aplice%20măsuri" target="_blank" rel="noopener noreferrer" className="underline">(art. 16)</a>
              </li>
              <li>No simplified due diligence when there is suspicion of ML/TF.</li>
              <li>Suspicious transaction reporting is mandatory when a Politically Exposed Person (PEP) is the beneficiary of a life insurance policy and there are grounds for suspicion.</li>
              <li>
                Access to UBO registers is granted only to persons/organizations demonstrating a legitimate interest; only limited data is displayed and access is subject to an administrative fee. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=19%2C%20alineatul%20%288,%C3%AEntre%C8%9Binere%20%C8%99i%20dezvoltare%20a%20registrului" target="_blank" rel="noopener noreferrer" className="underline">(art. 19 para. 8)</a>
              </li>
              <li>
                Record-keeping: reporting entities must retain supporting documents and transaction records for five years and ensure periodic staff training. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=Entitățile%20raportoare%20au%20obligația%20de,%C8%99i%20de%20organismele%20de%20autoreglementare" target="_blank" rel="noopener noreferrer" className="underline">(ONPCSB obligations)</a>
              </li>
              <li>
                Supervision of associations and foundations: the Romanian FIU (ONPCSB) supervises their activity on a risk basis and may request information on structure and management. <a href="https://legislatie.just.ro/Public/DetaliiDocumentAfis/298293#:~:text=26,tipurile%20de%20asocia%C8%9Bii%20%C8%99i%20funda%C8%9Bii" target="_blank" rel="noopener noreferrer" className="underline">(art. 26)</a>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* “Asset concealment” vs other offenses */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">“Asset concealment” vs other offenses</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <h3 className="text-xl font-semibold">1) Handling/receiving stolen goods (art. 270 Criminal Code)</h3>
            <p>
              Receiving, acquiring, transforming or selling an asset known to originate from a crime. Punished with 1–5 years or a fine; the accessory’s sentence cannot exceed the author’s, and acts by family members are not punished. <a href="https://www.dreptonline.ro/legislatie/codul_penal_2009.php#:~:text=Art,de%20familie%20nu%20se%20pedepseste" target="_blank" rel="noopener noreferrer" className="underline">(art. 270 CC)</a> Unlike laundering, it does not require concealment.
            </p>

            <h3 className="text-xl font-semibold">2) Abuse of trust by defrauding creditors (art. 239 CC)</h3>
            <p>
              The debtor alienates, hides, damages or destroys assets, or invokes fictitious acts/debts to defraud creditors; also punished is acquiring goods/services knowing payment will not be possible. Typically relates to insolvency and debtor‑creditor relations, not laundering.
            </p>

            <h3 className="text-xl font-semibold">3) Fraudulent bankruptcy (art. 241 CC)</h3>
            <p>
              In fraud of creditors: falsifying, removing or destroying records; hiding assets; inventing debts; or alienating assets in insolvency. Punished with 6 months–5 years, initiated upon prior complaint.
            </p>

            <h3 className="text-xl font-semibold">4) Tax evasion (Law 241/2005)</h3>
            <p>
              Frequently a predicate to laundering. Art. 9 lists offenses and penalties (2–8 years or fine): concealing taxable goods/sources, omitting commercial entries, double bookkeeping, fictitious expenses. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=Constituie%20infrac%C8%9Biuni%20de%20evaziune%20fiscal%C4%83,f" target="_blank" rel="noopener noreferrer" className="underline">(Law 241/2005)</a> If the damage exceeds 100,000/500,000 EUR, limits increase. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=la%20alin.%20%281%29%20s,8%20alin" target="_blank" rel="noopener noreferrer" className="underline">(increases)</a>
            </p>

            <p>
              When concealing assets/taxable sources aims to avoid taxes, it may constitute tax evasion and, later, a predicate to laundering. Detailed analysis of economic activity and accounting records is essential.
            </p>
          </CardContent>
        </Card>

        {/* Precautionary measures, seizure and confiscation */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Precautionary measures, seizure and confiscation</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Romanian law mandates confiscation of assets used for, intended for, or derived from ML offenses; equivalent value is confiscated if assets cannot be identified. Art. 50 of Law 129/2019 provides for seizure.
            </p>
            <p>
              In May 2025, Law 70/2025 amended the Criminal Procedure Code to clarify seizure procedure and parties’ rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Prosecutor, preliminary chamber judge or court may order measures to prevent hiding, destruction or alienation of assets subject to special/extended confiscation. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=,a%20reparării%20pagubei%20produse%20prin" target="_blank" rel="noopener noreferrer" className="underline">(Law 70/2025)</a>
              </li>
              <li>
                New paragraphs (6^1 – 6^4): during the investigation, measures are ordered by the prosecutor; notified immediately to the suspect and civil party; if the civil party’s request is rejected, the decision is communicated without delay. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=patru%20noi%20alineate%2C%20alin.%20%286%5E1%29,cu%20următorul%20cuprins" target="_blank" rel="noopener noreferrer" className="underline">(paras. 6^1–6^4)</a>
              </li>
              <li>
                The decision is pronounced in chambers, without summoning the parties; proceedings are urgent and the prosecutor’s participation is mandatory. <a href="https://www.universuljuridic.ro/cod-de-procedura-penala-modificari-legea-nr-70-2025/#:~:text=%286,Participarea%20procurorului%20este%20obligatorie" target="_blank" rel="noopener noreferrer" className="underline">(procedure)</a>
              </li>
              <li>Defendant, prosecutor and civil party may challenge the measure within 48 hours before the issuing court.</li>
            </ul>
            <p>
              In practice, effective defense means promptly documenting the lawful origin of assets and challenging disproportionate measures.
            </p>
          </CardContent>
        </Card>

        {/* Why distinctions matter */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Why distinctions between offenses matter</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              Confusing laundering with handling stolen goods, abuse of trust or fraudulent bankruptcy can be fatal in court. Each has distinct elements.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Laundering involves intentional concealment/integration of illicit assets; for lit. (c) (acquiring/using), the offender must be different from the author of the predicate offense.</li>
              <li>Handling stolen goods punishes receiving or selling the asset knowing its illicit origin, without concealment.</li>
              <li>Abuse of trust and fraudulent bankruptcy are tied to debtor‑creditor relations and insolvency procedures.</li>
            </ul>
            <p>
              Accurate qualification drives the defense strategy, evidence required and procedural objections. My role is to demonstrate when conduct is actually handling or bankruptcy, reducing the risk of disproportionate sanctions.
            </p>
          </CardContent>
        </Card>

        {/* How I approach a case */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">How I approach a money laundering/asset concealment case</h2>
          </CardHeader>
          <CardContent className="space-y-4 text-base leading-relaxed">
            <h3 className="text-xl font-semibold">1) Fact assessment and flow mapping</h3>
            <p>Identify predicate offenses (fraud, tax evasion, corruption etc.) and analyze financial flows, including blockchain/virtual asset transactions. A mere transfer or formal change is not automatically “laundering.”</p>
            <h3 className="text-xl font-semibold">2) Differentiated defense strategy</h3>
            <p>By legal qualification: for laundering – focus on knowledge of illicit origin and link to the predicate; for handling – lack of concealment; for bankruptcy/abuse – real insolvency and actual fraud.</p>
            <h3 className="text-xl font-semibold">3) Managing precautionary measures</h3>
            <p>Challenge grounds, proportionality and scope of seizure; provide asset documentation. The law allows lifting/narrowing measures where they paralyze economic activity. The 2025 procedure gives the civil party an active role and rights to challenge.</p>
            <h3 className="text-xl font-semibold">4) Evidence litigation and procedural exceptions</h3>
            <p>Exclude illegally obtained evidence, verify chain of custody and wiretap legality; challenge overbroad interpretations of “beneficial owner” and KYC procedures.</p>
            <h3 className="text-xl font-semibold">5) Remedies and compliance</h3>
            <p>For regulated sectors (finance, real estate, crypto), implement compliance with Law 129/2019 and FIU guidance: KYC policies, processes for UBOs, staff training and audits; negotiate with authorities where appropriate.</p>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Frequently asked questions</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>
              <strong>Is a conviction for the predicate offense required?</strong> Not necessarily. It suffices to prove assets come from a criminal offense (not a contravention) and that the defendant knew this. <a href="https://legislatie.just.ro/Public/DetaliiDocument/239926#:~:text=Constituie%20infrac%C8%9Biuni%20de%20evaziune%20fiscal%C4%83,f" target="_blank" rel="noopener noreferrer" className="underline">(reference)</a>
            </p>
            <p>
              <strong>Can the author of the predicate also be charged with laundering?</strong> Yes. For art. 49 (a) and (b), the offender need not be a different person; only for (c) (acquiring/using) must it be a third party.
            </p>
            <p>
              <strong>Can seizures and garnishments be lifted if they paralyze activity?</strong> Yes. Courts must respect proportionality; under the 2025 amendments, measures can be challenged and narrowed when they disproportionately affect economic activity.
            </p>
          </CardContent>
        </Card>

        {/* Conclusion + CTA */}
        <Card className="mt-8 border-accent">
          <CardHeader>
            <h2 className="text-2xl font-semibold leading-none tracking-tight">Conclusion</h2>
          </CardHeader>
          <CardContent className="space-y-3 text-base leading-relaxed">
            <p>ML/asset concealment files are not mere financial equations; beyond numbers, they involve moral responsibility, trust in business relations and a balance between asset protection and the rule of law.</p>
            <p>Effective defense blends technical analysis of financial flows with a legal strategy tailored to each count and careful management of precautionary measures.</p>
            <p>If you are under investigation, act quickly: document the lawful origin of assets, consult a specialist and prepare your defense early in the investigation.</p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button asChild variant="premium" size="lg" className="relative overflow-hidden border border-hero-foreground after:content-[''] after:absolute after:inset-[2px] after:rounded-md after:border after:border-hero-foreground after:pointer-events-none">
                <a href="tel:+40316320183" aria-label="Call now for a confidential review">
                  <Phone className="mr-2" /> Call now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:contact@avocatpenalbucuresti.ro" aria-label="Email for an appointment">
                  <Mail className="mr-2" /> Email us
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
