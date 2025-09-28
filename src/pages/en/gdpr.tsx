import { useSEO } from "@/hooks/useSEO";

export default function GDPRen() {
  useSEO({
    title: "GDPR - Data Protection | Bogdan Lamatic Law Office",
    description: "Learn how we collect, use, and protect your personal data in accordance with GDPR.",
    alternates: { ro: "/gdpr", en: "/en/gdpr", xDefault: "/en/gdpr" },
    locale: "en_US",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/en" },
      { "@type": "ListItem", position: 2, name: "GDPR", item: "/en/gdpr" },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">GDPR - Data Protection</h1>
        <nav aria-label="breadcrumb" className="mt-2 text-sm opacity-80">
          <ol className="flex gap-2">
            <li>
              <a href="/en" className="underline hover:no-underline">Home</a>
            </li>
            <li>/</li>
            <li aria-current="page">GDPR</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>Personal Data We Process</h2>
          <p>
            For the purposes of the Processing stipulated in point III below, we process your personal data, hereinafter referred to as the "Personal data". The personal data will include, as appropriate, both your Personal information, and the Special categories of personal data, as defined hereinafter. The "Personal information" means: your name and surname, date and place of birth, job title and name of the company/ entity you belong to, postal address including home address, business address, telephone number, mobile phone number, fax number and email address and other similar data in respect to you, payments carried out, requests and projects, information collected from public sources and databases, information on relevant and important litigation or other court actions initiated against you or by you against one of your third party affiliates, IP address, other personal data regarding your preferences, which may be relevant for any purposes regarding the performance of our services, details and information about your visits to our offices, as well as other data related to interaction with us.
          </p>
          <p>
            In addition, in the course of our activities, we may process the following Special categories of personal data about you, such as: personal identification number, Identity Card series and number, data on your political opinions, data on your health, data on union membership and data relating to criminal convictions and offences.
          </p>
          <p>
            We shall collect your Personal data directly from you, in certain circumstances, including:
          </p>
          <ul>
            <li>When you request legal, tax, insolvency related consultancy or representation from our behalf;</li>
            <li>When you navigate, request information or interact on our website;</li>
            <li>When you render or offer yourself to render services for us;</li>
            <li>When you willingly communicate us, for any reason, your Personal data.</li>
          </ul>
          <p>
            In certain circumstances, we collect your Personal data from a third party source. For example, we can collect Personal data from your employer, other companies or individuals with which/whom you are connected, governmental agencies, credit bureaus, information or services providers or from public archives.
          </p>
        </section>

        <section>
          <h2>Purposes of Processing</h2>
          <p>We process of your Personal data to the extent allowed or required by the applicable law for the following purposes:</p>
          <ul>
            <li>Communication with you, in order to permanently inform you about the development of the requested service, analysis and improvement of your services and communications to you, provision of legal consultancy, including tax and insolvency related consultancy or of other services and other measures which you could have requested, including legal representation before the courts of law, arbitral tribunals or other competent authorities;</li>
            <li>Management and administration of the business relationship between you and Bogdan Lamatic Law Office, including payments processing, accounting, audit, invoicing and collection, assistance services;</li>
            <li>Compliance with our legal obligations (such as the obligations to keep records), obligations to review the compliance or to record (such as pursuant to the commercial sanctioning and embargo laws, antitrust laws, for fighting money laundering purposes, financial review and compliance, for purposes of preventing and identifying fraud and crimes), which may include automated checks of your Personal data against the applicable lists of persons subject to sanctions and your contacting to confirm your identity, in the event of a possible positive result, or registration of the interaction we had with you, which could be relevant for compliance purposes;</li>
            <li>Protection of safety and management of the access to our headquarters, IT and communication systems, online platforms, websites and other systems, prevention and detection of security threats, frauds or other criminal activities;</li>
            <li>To provide assurance, monitoring and assessment of the compliance with our policies and standards, in order to identify the persons authorised to perform transactions on behalf of our clients, our services beneficiaries, suppliers and/or providers;</li>
            <li>To provide compliance with the court judgements and application and/or defence of our legal rights; and</li>
            <li>For any purpose related and/or additional to any of the above.</li>
          </ul>
          <p>
            In respect of the marketing related communications, we will make available to you, if required by the law, such information only after you select this option to receive such communications and we will provide you the possibility to unsubscribe at any time, if you no longer want to receive marketing related communications from us. We will not use your Personal data when making automated decisions which may affect you or create profiles, other than those described above.
          </p>
        </section>

        <section>
          <h2>Grounds for Your Personal Data Processing</h2>
          <p>Any operation which is the equivalent of a Processing of your Personal data shall be carried out based on one or several of the legal grounds described below:</p>
          <ul>
            <li>The Processing is based on your consent as legal ground for collecting, storing and using your Personal data, as allowed by the applicable law;</li>
            <li>The Processing is required for the performance of an agreement to which you are a part, or, such Processing is required for entering into an agreement with you;</li>
            <li>The Processing is required for the compliance with a legal obligation;</li>
            <li>The Processing is required to protect your vital interests or those of another individual;</li>
            <li>The Processing is required for the legitimate interests of Bogdan Lamatic Law Office or of a third party, unless your interests and rights and freedoms prevail over such interests. We use your Personal data for our legitimate interests, namely, to exercise our obligations and rights deriving from an agreement concluded with your company/ entity, in order to improve our performance and the working method and for administrative and fraud detection purposes.</li>
          </ul>
          <p>
            If the applicable legal provisions required your prior and explicit consent for the Processing of some Special categories of personal data, we shall process such data only based on your prior and explicit consent.
          </p>
          <p>
            We may choose to withdraw your consent in respect of the marketing materials at any time, simply by accessing the "unsubscribe" link in the foot note of every newsletter or invite to events.
          </p>
        </section>

        <section>
          <h2>Data Transfers, Recipients and Legal Grounds for Such Transfers</h2>
          <p>While performing our activity, we may send your Personal data to:</p>
          <ul>
            <li>Lawyers, other legal professionals, including mediators, notaries, bailiffs, consultants or experts involved in your case, if such data transmission is required due to the subject matter of your case;</li>
            <li>Courts of law, law enforcement authorities, regulatory authorities or lawyers or other individuals, if this proves to be necessary in a justified manner, in order to establish, exercise or defend a right in court or a natural right, or for an alternative and confidential resolution of disputes;</li>
            <li>Foreign law firms with a view to obtaining foreign legal advice when such advice is required to resolve the mandate entrusted by you or your company;</li>
            <li>Companies providing services related to anti-money laundering controls, credit risk mitigation and for other purposes related to fraud and crime prevention and to companies rendering similar services, including financial institutions, credit reporting agencies and regulatory authorities that such data are shared with;</li>
            <li>Any third party towards which we assign or novate any rights or obligations under the law.</li>
          </ul>
          <p>
            Furthermore, we may transfer your Personal data to our processors, mainly to the service providers within or outside Bogdan Lamatic Law Office, with a view to the Processing of your Personal data for the authorised purposes, on our behalf and strictly based on our instructions. Bogdan Lamatic Law Office will maintain the control over your Personal data and will use appropriate safeguards, as provided under the applicable law, to ensure the integrity and security of your Personal data in relation with those processors.
          </p>
          <p>
            Otherwise, we will transmit your Personal data only when instructed or authorized by you in this respect or when this is required under the applicable law or by requests from the judicial or public authorities.
          </p>
          <p>
            We may transfer your Personal data abroad. Certain recipients of your Personal data may be located in countries for which the European Commission has not issued a decision regarding the provision of an adequate level of data protection, namely: the United States of America or some of the countries outside Europe.
          </p>
          <p>
            Certain recipients outside the European Economic Area ("EEA") are certified under the privacy agreement concluded between Europe and USA called "EU-US Privacy Shield", while others are located in countries for which the European Commission issued compliance decisions [Andorra, Argentina, Canada (for private organizations subject to the Personal information protection and electronic documents act), Switzerland, Faroe Islands, Guernsey, Israel, Isle of Man, Jersey and New Zealand]. In each case, the transfer is recognized as providing an adequate level of data protection from the perspective of the European data protection law (Article 45 of GDPR).
          </p>
          <p>
            We may conclude data transfer agreements based on the Standard Contractual Clauses (European Commission Decision 2010/87/EU and/or European Commission Decision 2004/915/EC) pursuant to Article 46 (5) GDPR or by using other appropriate means, making sure that all other recipients outside the EEA will provide an adequate level of data protection for Personal data and that there are adequate technical and organizational security measures to protect Personal data against accidental or unlawful destruction, accidental loss or alteration, unauthorized disclosure or access and against all other unlawful Processing methods.
          </p>
        </section>

        <section>
          <h2>Security of Your Personal Data</h2>
          <p>
            Bogdan Lamatic Law Office has implemented appropriate technical and organizational measures in order to maintain the privacy and security of your Personal data in line with the internal procedures on storage, dissemination and access to Personal data. The Personal data may be kept either stored on our Personal data technological systems or on paper.
          </p>
        </section>

        <section>
          <h2>Retention Period</h2>
          <p>
            Personal data processed for the purposes specified herein shall be retained only as long as it may be necessary during your relation with Bogdan Lamatic Law Office, as well as subsequently for the retention periods required under the applicable law. Should any legal proceedings be initiated, the Personal data are retained until the end of such proceedings, including throughout any period of appeal or extraordinary appeal, and subsequently erased or archived, as provided under the applicable law.
          </p>
          <p>
            In principle, your Personal data will be kept for as long as it is required or permitted under the applicable law. Subsequently, after the expiry of such periods or upon your exercise of one of your rights, as provided under the law, we will remove/erase your Personal data from our systems and records and/or will take any actions for their redaction so that you may no longer be identified based thereon.
          </p>
        </section>

        <section>
          <h2>Your Legal Rights</h2>
          <p>
            If you expressed your consent with respect to the Processing activities, you may withdraw such consent at any time with future effects. Such withdrawal will not affect the legality of the Processing prior to the withdrawal of your consent. As a general rule, if you withdraw your consent, Bogdan Lamatic Law Office will no longer allow the Processing of your Personal data and will take any appropriate actions to erase any records containing your Personal data. However, if the Processing is mandatory for the provision of Bogdan Lamatic Cabinet de Avocat services and the Processing may be performed on other legal bases stipulated by the applicable legal provisions, Bogdan Lamatic Cabinet de Avocat shall proceed to such Processing and will notify you in this respect.
          </p>
          <p>Under the applicable laws, you have the following rights:</p>
          <ul>
            <li><strong>Right of access:</strong> You have the right to be informed, upon request, as to whether or not your Personal data are being processed, and, where that is the case, to request access to the Personal data. The access information includes, inter alia, the purposes of the Processing, the categories of Personal data concerned, and the recipients or categories of recipients to whom your Personal data have been or will be disclosed. You have the right to obtain a copy of your Personal data processed. For any additional copies, we may charge a reasonable fee based on administrative costs.</li>
            <li><strong>Right to rectification:</strong> You have the right to have your inaccurate Personal data rectified. Depending on the purposes of the Processing, you have the right to have your incomplete Personal data completed, including by means of providing a supplementary statement.</li>
            <li><strong>Right to erasure ("the right to be forgotten"):</strong> You have the right to ask us to erase your Personal data.</li>
            <li><strong>Right to restriction of Processing:</strong> You have the right to request the restriction of your Personal data Processing. In this case, the respective data will be marked and may be processed by us for certain purposes only.</li>
            <li><strong>Right to data portability:</strong> You have the right to receive your Personal data provided to us in a structured, commonly used and machine-readable format and you have the right to transmit those Personal data to another entity without hindrance from us.</li>
            <li><strong>Right to object:</strong> You have the right to object, on grounds relating to your particular situation, at any time to the Processing of your Personal data by us and we can be required to no longer process your Personal data. If you have a right to object and you exercise this right, your Personal data will no longer be processed for such purposes by us. Exercising this right will not incur any costs. Such right may be cancelled, in particular, if the Processing of your Personal data is necessary to take steps prior to entering into a contract or to perform a contract already concluded.</li>
          </ul>
          <p>
            You may exercise any of the abovementioned rights and receive more information on such rights by submitting to us, in our capacity as data controller, a written application at the address: Cabinet Avocat Bogdan Lamatic, Strada Colonel Stefan Stoika 22, Bucuresti 012244.
          </p>
          <p>
            You also have the right to file a complaint with the National Authority for the Supervision of Personal Data Processing.
          </p>
        </section>

        <section>
          <h2>Versions of This Privacy Policy</h2>
          <p>
            This Privacy policy shall become effective as of 16 august 2025.
          </p>
          <p>
            This Privacy policy may be updated from time to time. Any updated version shall become effective as of the date of its publication on Bogdan Lamatic Cabinet de Avocat website or as of the date it is notified to you in any way.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For any questions about your personal data, contact us at
            <a href="mailto:contact@avocatpenalbucuresti.ro"> contact@avocatpenalbucuresti.ro</a>.
          </p>
        </section>
        <section aria-label="Related policies" className="mt-10">
          <h2>Related policies</h2>
          <ul>
            <li><a href="/en/terms-and-conditions" className="underline hover:no-underline">Terms and Conditions</a></li>
            <li><a href="/en/cookie-policy" className="underline hover:no-underline">Cookie Policy</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
