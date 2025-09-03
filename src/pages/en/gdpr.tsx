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
          <h2>1. Introduction</h2>
          <p>
            We respect your privacy and the protection of personal data. This policy explains what data we collect,
            for what purposes, the legal bases we rely on, and your rights under EU Regulation 2016/679 (GDPR).
          </p>
        </section>

        <section>
          <h2>2. Data we collect</h2>
          <ul>
            <li>Contact details (name, email, phone) submitted via forms or direct communication;</li>
            <li>Technical data (IP address, device type, pages visited) collected through cookies;</li>
            <li>Other information voluntarily provided for legal assistance.</li>
          </ul>
        </section>

        <section>
          <h2>3. Legal basis and purposes</h2>
          <ul>
            <li>Performance of a contract or pre-contractual steps at your request;</li>
            <li>Legitimate interests (e.g., site security, abuse prevention);</li>
            <li>Consent (e.g., analytics cookies, commercial communications where applicable); and</li>
            <li>Legal obligations applicable to the legal profession.</li>
          </ul>
        </section>

        <section>
          <h2>4. Retention</h2>
          <p>
            We keep data only as long as necessary for the purposes above or as required by laws governing the legal profession.
          </p>
        </section>

        <section>
          <h2>5. Your rights</h2>
          <p>You have the following rights under GDPR:</p>
          <ul>
            <li>Right of access, rectification, and erasure;</li>
            <li>Right to restriction or objection to processing;</li>
            <li>Right to data portability;</li>
            <li>Right to withdraw consent where processing is based on consent; and</li>
            <li>Right to lodge a complaint with the supervisory authority.</li>
          </ul>
        </section>

        <section>
          <h2>6. Disclosure and transfers</h2>
          <p>
            We may share data with providers supporting our site (e.g., hosting, analytics) under appropriate safeguards and only when necessary.
            We do not transfer data outside the EEA without GDPR-compliant protections.
          </p>
        </section>

        <section>
          <h2>7. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect data against unauthorized access, loss, or disclosure.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
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
