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
          This page sets the terms of use of the website https://avocatpenalbucuresti.ro/ (the “Website”) and the basic rules governing interactions with the Law Office of Attorney Bogdan Lamatic (the “Law Office”). By accessing or using the Website, you agree to these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Scope</h2>
        <p>
          The Website is informational only. Its content does not constitute legal advice and does not create an attorney–client relationship. Such relationship arises only after express acceptance of the mandate and signing of the power of attorney/legal services agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Services and limitations</h2>
        <p>
          Services described on the Website are indicative. The Law Office reserves the right to decline a request, including for conflicts of interest, lack of availability or inconsistencies regarding the requested scope. Any time or cost estimates are approximate until agreed in writing.
        </p>

        <h2 className="text-2xl font-semibold mt-8">3. Appointments and communication</h2>
        <p>
          For appointments and communication, use the details published on the Contact page or the contact form. Typical response time is 24–48 business hours, depending on urgency.
        </p>

        <h2 className="text-2xl font-semibold mt-8">4. Fees and payments</h2>
        <p>
          Fees are set transparently based on case complexity, urgency and resources involved. Payment methods, deadlines and any expenses (e.g., court fees, expert reports) are set out in the legal services agreement.
        </p>

        <h2 className="text-2xl font-semibold mt-8">5. Confidentiality and data protection</h2>
        <p>
          The Law Office respects confidentiality and attorney–client privilege under applicable law. Personal data is processed according to the GDPR notice and the Website’s cookie policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8">6. Conflicts of interest</h2>
        <p>
          Prior to accepting a mandate, the Law Office performs conflict checks. If a conflict is identified, the request may be declined or referred.
        </p>

        <h2 className="text-2xl font-semibold mt-8">7. Disclaimer</h2>
        <p>
          Information published is for general purposes and may become outdated. The Law Office does not warrant absolute accuracy and is not liable for decisions made solely on its basis without specific legal advice. Links to third‑party websites do not imply endorsement.
        </p>

        <h2 className="text-2xl font-semibold mt-8">8. Intellectual property</h2>
        <p>
          Website content (texts, images, charts) belongs to the Law Office, unless otherwise stated, and is protected by law. Reproduction or use is allowed only with source citation and/or prior consent where applicable.
        </p>

        <h2 className="text-2xl font-semibold mt-8">9. Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by Romanian law. Disputes shall be settled by the competent courts of Bucharest, unless mandatory law provides otherwise.
        </p>

        <h2 className="text-2xl font-semibold mt-8">10. Changes</h2>
        <p>
          The Law Office may update these Terms periodically. The current version applies from publication on the Website. Please review this page from time to time.
        </p>

        <h2 className="text-2xl font-semibold mt-8">11. Contact</h2>
        <p>
          For questions about these Terms: Bucharest, 1st District, 22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5 • Tel.: +40 (31) 632 01 83 • E‑mail: contact@avocatpenalbucuresti.ro
        </p>
      </div>

      <section aria-label="Related policies" className="mt-10">
        <h2 className="text-xl font-semibold">Related policies</h2>
        <ul className="list-disc pl-5">
          <li><a href="/en/gdpr" className="underline hover:no-underline">GDPR – Data Protection</a></li>
          <li><a href="/en/cookie-policy" className="underline hover:no-underline">Cookie Policy</a></li>
        </ul>
      </section>
    </section>
  );
}
