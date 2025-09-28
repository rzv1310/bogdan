import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";

export default function TermsAndConditionsEn() {
  useSEO({
    title: "Terms and Conditions – Attorney Bogdan Lamatic",
    description: "Website terms of use and rules for the legal services offered.",
    alternates: { en: "/en/terms-and-conditions", ro: "/termeni-si-conditii" },
    locale: "en_US",
    canonical: "/en/terms-and-conditions",
  });

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: typeof window !== "undefined" ? `${window.location.origin}/en` : "/en" },
              { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: typeof window !== "undefined" ? `${window.location.origin}/en/terms-and-conditions` : "/en/terms-and-conditions" },
            ],
          }),
        }}
      />

      <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Terms and Conditions</h1>

      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/en">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Terms and Conditions</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-base leading-relaxed">
        <p>
          This page sets the terms of use of the website <a href="/en" className="underline hover:no-underline">https://avocatpenalbucuresti.ro/</a> (the "Website") and the minimum rules applicable to interactions with the Law Office of Attorney Bogdan Lamatic (the "Law Office"). By accessing or using the Website, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8">WEBSITE USAGE</h2>
        <p>
          By using the Website https://avocatpenalbucuresti.ro/, you will find information about the team of the Bogdan Lamatic Law Office, the activities carried out by attorney Bogdan Lamatic on the Romanian legal services market, as well as about the practices covered by the activity of the Bogdan Lamatic Law Office team from Bucharest. In addition, the Website contains news, articles and other materials that may concern significant developments that have occurred or updates recorded in connection with the applicable legislative framework in Romania, European or national jurisprudence, etc.
        </p>

        <h2 className="text-2xl font-semibold mt-8">VIRUS PROTECTION</h2>
        <p>
          The Bogdan Lamatic Law Office makes every effort to verify and test the material provided by this Website, at all stages of production. We also recommend that users run an antivirus program for all materials downloaded from the Internet. The Bogdan Lamatic Law Office cannot accept any responsibility for any loss, interruption or damage to your data or computer system that may occur while browsing the Website https://avocatpenalbucuresti.ro/.
        </p>

        <h2 className="text-2xl font-semibold mt-8">ACKNOWLEDGMENT OF OWNERSHIP</h2>
        <p>
          The Website offers any of its users the possibility to access the content provided for the personal use of the user.
        </p>
        <p>
          You hereby acknowledge and agree that https://avocatpenalbucuresti.ro/ and the Bogdan Lamatic Law Office are the exclusive owners of all intellectual property rights over the Website content, including articles, texts, photographs and illustrations. You also agree that you will not use such materials in any way, except if you have received prior express written consent from the Bogdan Lamatic Law Office.
        </p>

        <h2 className="text-2xl font-semibold mt-8">COMMENTS, QUESTIONS AND FEEDBACK</h2>
        <p>
          If you send a request by email to either a specific contact or a general contact address identified on the Website https://avocatpenalbucuresti.ro/, we will use your personal data obtained from your request to respond to your request.
        </p>

        <h2 className="text-2xl font-semibold mt-8">PERSONAL DATA PROCESSING</h2>
        <p>
          Certain personal data is collected through the Website. Details regarding the processing of this personal data are available in our Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8">RECRUITMENT</h2>
        <p>
          If you apply for a position at the Bogdan Lamatic Law Office, advertised in the Careers section of this Website, your CV or other information you provide to us will be used exclusively for processing your application and for recruitment purposes, as set out in the Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8">DISCLAIMER</h2>
        <p>
          Information published is for informational purposes and may become outdated. The Law Office does not guarantee the absolute accuracy of the content and is not responsible for decisions made exclusively on its basis without specific consultation. The Website may contain links to websites and resources that are not our property. https://avocatpenalbucuresti.ro/ and the Bogdan Lamatic Law Office have no control over these websites and the resources found in them and, therefore, will not be responsible for the availability of these websites, nor for the content, advertising, goods, services, information or other materials available on or through these websites, for the functionality or performance of these websites or for the violation of any intellectual property rights or other rights, which arise through these websites. By accessing the indicated websites you confirm that you understand the possible consequences of entering the indicated websites and agree and accept the terms and conditions mentioned above.
        </p>
        <p>
          This Website is provided for informational purposes and does not constitute legal and/or tax advice. The information is not intended to replace legal advice from a licensed attorney in the field of practice involved in your case. The attorney–client relationship is created only after express acceptance of the request and signing of the power of attorney/legal assistance contract.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Services and limitations</h2>
        <p>
          Services described on the Website are indicative. The Law Office reserves the right to refuse a request, including in case of conflict of interest, lack of availability or inadvertencies regarding the object and purpose of the request. Any time or cost estimates are approximate until written agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Appointments and communication</h2>
        <p>
          For appointments and communication, use the data published in the Contact section or the contact form. The response is, as a rule, within 24–48 working hours, depending on urgency.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Fees and payments</h2>
        <p>
          Fees are set transparently according to case complexity, urgency and resources involved. Payment methods, deadlines and any expenses (e.g. court fees, expert reports) are provided in the legal assistance contract.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Confidentiality and data protection</h2>
        <p>
          The Law Office respects confidentiality and professional secrecy according to applicable legislation (Law 51/1995, Professional Statute). Personal data processing is carried out according to the GDPR notice and the Website's cookie policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Conflicts of interest</h2>
        <p>
          Before accepting a mandate, the Law Office performs checks regarding potential conflicts of interest. If a conflict is identified, the request may be refused or redirected.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by Romanian law. Any dispute will be resolved by the competent courts of Bucharest, unless the law provides otherwise.
        </p>

        <h2 className="text-2xl font-semibold mt-8">TERMS AND CONDITIONS CHANGES</h2>
        <p>
          In case the Terms and Conditions are modified in any way, we will place an updated version on this page. Regular updating of this page ensures that you are always aware of what information we collect, how we use it and under what circumstances and, if applicable, whether we transfer it to other persons.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Contact</h2>
        <p>
          For questions about these Terms: Bucharest, 1st District, 22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5 • Tel.: +40 (31) 632 01 83 • E‑mail: contact@avocatpenalbucuresti.ro
        </p>

        <h3 className="text-xl font-semibold mt-6">Related policies</h3>
        <ul className="list-disc pl-5 mt-2">
          <li><a href="/en/gdpr" className="underline hover:no-underline">GDPR – Data Protection</a></li>
          <li><a href="/en/cookie-policy" className="underline hover:no-underline">Cookie Policy</a></li>
        </ul>
      </div>
    </section>
  );
}