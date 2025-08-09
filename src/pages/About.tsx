import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // SEO
  useSEO({
    title: lang === "en" ? "About me | Attorney Bogdan Lamatic" : "Despre mine | Avocat Bogdan Lamatic",
    description:
      lang === "en"
        ? "About me – Europass CV of attorney Bogdan Lamatic: experience, recognitions, publications."
        : "Despre avocat Bogdan Lamatic – informații, experiență și prezentare profesională.",
  });

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bogdan-Constantin Lamatic",
    jobTitle: "Attorney",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bucharest",
      addressRegion: "1st District",
      streetAddress: "22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5",
      addressCountry: "RO",
    },
    email: "mailto:bogdan.lamatic@yahoo.com",
    telephone: "+40 745 506 443",
    nationality: "Romanian",
    birthDate: "1983-07-19",
    memberOf: [
      { "@type": "Organization", name: "Bucharest Bar" },
      { "@type": "Organization", name: "Romanian Lawyers Union" }
    ],
    url: typeof window !== "undefined" ? window.location.href : undefined,
  } as const;

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <h1 className="sr-only">{lang === "en" ? "About me" : t.nav.about}</h1>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{lang === "en" ? "Home" : "Acasă"}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{lang === "en" ? "About me" : t.nav.about}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* EN: Europass CV */}
      {lang === "en" ? (
        <main className="mt-6 space-y-8">
          <header>
            <p className="text-sm text-muted-foreground">Curriculum vitae – Europass</p>
            <h2 className="text-2xl font-semibold tracking-tight">About me – Europass CV</h2>
          </header>

          <section aria-labelledby="personal-info" className="grid gap-4">
            <h3 id="personal-info" className="text-xl font-medium">Personal information</h3>
            <dl className="grid gap-2 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-muted-foreground">Name/Surname</dt>
                <dd className="font-medium">Lamatic Bogdan-Constantin</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Address</dt>
                <dd className="font-medium">Bucharest, 1st District, 22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Telephone</dt>
                <dd className="font-medium">0745.506.443</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">E-mail</dt>
                <dd className="font-medium">bogdan.lamatic@yahoo.com</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Nationality</dt>
                <dd className="font-medium">Romanian</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Birth date</dt>
                <dd className="font-medium">19.07.1983</dd>
              </div>
              <div>
                <dt className="text-sm text-muted-foreground">Sex</dt>
                <dd className="font-medium">Male</dd>
              </div>
            </dl>
          </section>

          <section aria-labelledby="recognition" className="grid gap-4">
            <h3 id="recognition" className="text-xl font-medium">Recognition</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Legal500 – Rising Star – 2020 Edition (White-Collar Crime)</li>
              <li>Legal500 – Next Generation Partner – 2021 Edition (White-Collar Crime)</li>
              <li>Legal500 – Next Generation Partner – 2022 Edition (White-Collar Crime)</li>
              <li>Legal500 – Next Generation Partner – 2023 Edition (White-Collar Crime)</li>
              <li>Legal500 – Next Generation Partner – 2024 Edition (White-Collar Crime)</li>
            </ul>
          </section>

          <section aria-labelledby="memberships" className="grid gap-4">
            <h3 id="memberships" className="text-xl font-medium">Memberships</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Member of Bucharest Bar</li>
              <li>Member of Romanian Lawyers Union</li>
            </ul>
          </section>

          <section aria-labelledby="employment" className="grid gap-4">
            <h3 id="employment" className="text-xl font-medium">Employment record</h3>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Wolf Theiss - Societate civila de avocati, Bucharest, Romania</h4>
              <p className="text-sm text-muted-foreground">Law firm, White collar crime, Compliance, Corporate Investigation, Civil and Commercial law, Litigations</p>
              <p className="mt-1">Period: 2022 – 2025</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">„Enache Pirtea & Asociatii” S.p.a.r.l., 32nd Ion Negulici, 1st District, Bucharest, Romania</h4>
              <p className="text-sm text-muted-foreground">Law firm, White collar crime, Civil and Commercial law, Litigations</p>
              <p className="mt-1">Period: 2020 – 2022</p>
              <p>Position: Partner</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">„Musat & Associates” S.p.a.r.l., 43rd Aviatorilor Boulevard, 1st District, Bucharest, Romania</h4>
              <p className="text-sm text-muted-foreground">Law firm, White collar crime, Civil and Commercial law, Litigations</p>
              <p className="mt-1">Period: 2013 – 2020</p>
              <p>Position: 2013 - 2015: Senior Associate; 2016 - 2020: Managing Associate</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Serban & Associates Law firm, Bucharest</h4>
              <p className="text-sm text-muted-foreground">Law firm, White collar crime</p>
              <p className="mt-1">Period: 2010 – 2013</p>
              <p>Position: Senior Associate</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Cristina Trelea Law Office, Bucharest</h4>
              <p className="text-sm text-muted-foreground">Law Office</p>
              <p className="mt-1">Period: 2007 – 2010</p>
              <p>Position: Associate</p>
            </article>
            <article className="rounded-md border p-4">
              <h4 className="font-semibold">Sova & Associates Law Firm, Bucharest</h4>
              <p className="text-sm text-muted-foreground">Law firm</p>
              <p className="mt-1">Period: January 2007 – November 2007</p>
              <p>Position: Associate</p>
            </article>
          </section>

          <section aria-labelledby="relevant-record" className="grid gap-4">
            <h3 id="relevant-record" className="text-xl font-medium">Relevant professional record</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>Advising a global private equity fund in a sensitive internal fraud in one of its subsidiaries in Romania and related investigation matter on, inter alia, limiting several companies' and shareholders' potential exposures, combined with complex assistance on asset recovery, white collar crime and several compliance processes.</li>
              <li>Advising a large European investment fund in relation to its proposed acquisition of an over 100 MW renewable project and on assessing ongoing asset recovery and white-collar crime angles thereto relevant for the acquisition and for structuring the acquisition.</li>
              <li>Advising a large European energy group in relation to an internal review and related asset recovery and other white-collar crime angles concerning possible frauds and other irregularities.</li>
              <li>Advising and assisting a leading international logistic group on various internal investigations, compliance and remedial steps concerning subsidiaries in Romania and the CEE region. We have helped the client in successfully designing and implementing steps to safeguarding the group from several material risks in several jurisdictions.</li>
              <li>Advising Health Tech Media GmbH, a company which enables Health & Health Tech Companies to target their audience & gain new customers through high engagement platforms, on an internal fraud and related white collar crime and investigations matter on looking the internal fraud, asset recovery angles and other white-collar crime angles. The matter combines complex local white-collar crime and asset recovery angles with cross-border, international legal angles too. Also, our team has been adding further value by coordinating for the client non-legal expertise (e.g. tax, accounting, IT), thus saving time and resources for the client from this perspective too.</li>
              <li>Advising an international engineering, technology and infrastructure group on a sensitive internal corporate investigation and in investigations conducted by authorities in several jurisdictions. The matter is complex due to several compliance, white-collar crime, regulatory, operational and cross-border cooperation angles. Also, the matter entails liaising with authorities and several regulators in several jurisdictions.</li>
              <li>Advising a leading listed energy player in a very sensitive internal fraud and related investigation matter on, inter alia, limiting the companies' and the shareholders' potential exposure, combined with complex assistance on asset recovery, white collar crime and several compliance processes for assessing, structuring of data accessing, data processing, cybercrime, asset tracing or contractual matters.</li>
              <li>Advising an international shipping group in a complex internal review and related corporate investigation steps on possible issues around several compliance and white-collar crime angles. The matter entailed a quick reaction and structuring of the internal investigation and immediate assistance from several areas (e.g. Compliance, Investigations, White-Collar Crime, Data Protection, Corporate M&A, Employment, etc.), which has differentiated our team from other firms.</li>
              <li>Advising a European life science group on steps of an internal investigation concerning its subsidiaries. We have successfully addressed several compliance and white-collar crime angles, as well as structured and implemented remedial steps to successfully safeguard the group from several material risks in Romania and other jurisdictions. The matter also involved interaction with several authorities and other teams in several jurisdictions.</li>
              <li>Assisting the leading power company in front of the criminal investigation authorities in relation to various types of crimes, perpetrated against the company or, allegedly, by company employees (including the recovery of the related prejudices).</li>
              <li>Representing an aviation authority, in the criminal file investigated by the Prosecutors’ Office with the High Court of Cassation and Justice, in relation to an aviation accident which took place in January 2014, in Romania.</li>
              <li>Assisting and representing the leading player on the Romanian energy and gas market, in various complex criminal files, both in front of the criminal investigation authorities and of the Criminal Courts of Law, involving also complex settlements of damages claims.</li>
              <li>Representing a global corporation (based in Spain), leader in the manufacture and supply of high-tech, rolling stock and rail solutions, in connection to corruption charges against public authority officials regarding public acquisitions in excess of over EUR 300 million.</li>
              <li>Representing one of the world’s leading financial services providers, regarding a multidisciplinary project for debt recovery, relating to a wide aria of disputes including insolvency and white collar crime investigations.</li>
              <li>Retained by one of the Romanian industrial giants, specialized in consulting and trade services for industrial building objectives, mainly for the metallurgical industry, representing its interests before the criminal investigation authorities, regarding an alleged fiscal fraud exceeding EUR 2,500,000.</li>
              <li>Providing legal assistance and representation for one of the largest Romanian insurance companies, before the criminal investigation authorities and Courts of law in order to recover or mitigate the value of the insurance claims to be paid.</li>
              <li>Representing a pension fund in relation to criminal complaints submitted by former business partners.</li>
              <li>Providing legal assistance to the leading energy distribution company in relation to internal investigations of its employees, activities and procedures regarding the status of confidential or secret data and information.</li>
              <li>Assisting and representing a private Romanian company, specialized in the import and distribution of metal products for construction, before the criminal investigation authorities.</li>
              <li>Assisting a specialized medical care services supplier in internal investigations regarding potential corruption or illicit practices.</li>
              <li>Members from the Board of a state-owned media company in connection with charges of abuse of office related to the purchase of Radio Chisinau based in the Rep. Moldavia, consisting in over-evaluated prices paid for the shares which allegedly caused a prejudice exceeding EUR 650,000 public funds.</li>
              <li>Assisting and representing a former State Secretary with the Ministry of Transportation, in relation to active bribery charges linked to payments of EUR 2 million.</li>
              <li>Assisting and representing a key figure politician (former member of the Chamber of Deputies, former vice-minister and former vice-mayor) investigated in relation to charges of corruption (misuse of influence) regarding his candidacy to mayor of Bucharest.</li>
              <li>Assisting and representing a municipality mayor in relation to charges of abuse of office resulting in a significant prejudice to the city budget.</li>
              <li>Assisting and representing a former municipality mayor, investigated and tried for abuse of power regarding allocation of local subsidies and financing in excess of EUR 400,000.</li>
              <li>Assisting and representing a Romanian business man in front of the criminal investigation authorities and Court of law in a case involving the creation of an organized criminal group of some 30 private persons and high-ranked public officials in order to perpetrate economic crimes relating to producing and selling oil products, the claimed prejudice exceeding EUR 50,000,000.</li>
              <li>Assisting and representing the General Manager of a national chain of drugstores in a criminal investigation for possible embezzlement of public funding and subsidies for medicines, as well as forgery of documents, resulting in a prejudice of over EUR 4,000,000.</li>
              <li>Assisting and representing a former State representative with an international financial organization regarding active corruption charges in relation to court officials and judges, in order to obtain a favorable court decision.</li>
            </ul>
          </section>

          <section aria-labelledby="publications" className="grid gap-4">
            <h3 id="publications" className="text-xl font-medium">Publications</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
              <li>
                Newest EU sanctions against Russia target military capabilities, propaganda tools and more, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/newest-eu-sanctions-against-russia-target-military-capabilities-propaganda-tools-and-more/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Revised and improved whistleblowing law adopted in Romania, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/revised-and-improved-whistleblowing-law-adopted-in-romania/?trk=public_post-text" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Wolf Theiss Corporate Investigations Guide 2022, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/corporate-investigations-guide/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Developments on whistleblowers’ protection in Romania, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/developments-on-whistleblowers-protection-in-romania/" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                EU sanctions against Russia and updates to compliance programmes, 2022, Wolf Theiss, {" "}
                <a href="https://www.wolftheiss.com/insights/eu-sanctions-against-russia-and-updates-to-compliance-programmes/?trk=public_post_share-upda" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Article on Whistleblowing Directive, 2023, Bizlawyer.ro, {" "}
                <a href="https://www.bizlawyer.ro/stiri/piata-avocaturii/totul-despre-modul-de-aplicare-a-legii-privind-protectia-avertizorilor-in-intere" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>
                Article on Theoretical and practical aspects related to preventive measures in the old and current Code of Criminal Procedure, 2023, Juridice.ro, {" "}
                <a href="https://www.juridice.ro/695393/aspecte-teoretice-si-practice-legate-de-masurile-preventive-in-vechiul-si-actualul-cod-de-procedu" target="_blank" rel="noopener noreferrer" className="text-primary underline">link</a>
              </li>
              <li>Various client alerts and articles on criminal law, compliance and whistleblower law topics.</li>
            </ul>
          </section>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        </main>
      ) : (
        <main className="mt-6">
          <h2 className="text-2xl font-semibold tracking-tight">Despre mine</h2>
          <p className="mt-2 text-muted-foreground">Secțiunea în limba română va fi completată curând.</p>
        </main>
      )}
    </section>
  );
}

