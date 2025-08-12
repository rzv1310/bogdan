import { useSEO } from "@/hooks/useSEO";

export default function CookiePolicyEn() {
  useSEO({
    title: "Cookie Policy | Bogdan Lamatic Law Office",
    description: "Details about the cookies we use, their purposes, and how you can manage your preferences.",
    alternates: { ro: "/politica-cookies", en: "/en/cookie-policy", xDefault: "/en/cookie-policy" },
    locale: "en_US",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/en" },
      { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "/en/cookie-policy" },
    ],
  };

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
        <nav aria-label="breadcrumb" className="mt-2 text-sm opacity-80">
          <ol className="flex gap-2">
            <li>
              <a href="/en" className="underline hover:no-underline">Home</a>
            </li>
            <li>/</li>
            <li aria-current="page">Cookie Policy</li>
          </ol>
        </nav>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </header>

      <article className="prose prose-neutral max-w-none">
        <section>
          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help the website work properly,
            enable analytics, and improve your browsing experience.
          </p>
        </section>

        <section>
          <h2>2. Types of cookies used</h2>
          <ul>
            <li>Strictly necessary cookies for site functionality;</li>
            <li>Performance and analytics cookies (e.g., traffic and usage behavior);</li>
            <li>Functionality cookies (user preferences).</li>
          </ul>
        </section>

        <section>
          <h2>3. Third-party cookies</h2>
          <p>
            Some third-party services may set their own cookies (e.g., analytics services). We do not control third-party
            cookies and encourage you to check their policies.
          </p>
        </section>

        <section>
          <h2>4. Managing cookies</h2>
          <p>
            You can configure your browser to block or warn you about cookies. Disabling certain cookies may impact site functionality.
          </p>
        </section>

        <section>
          <h2>5. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be published on this page.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            For questions regarding this cookie policy, contact us at
            <a href="mailto:bogdan.lamatic@yahoo.com"> bogdan.lamatic@yahoo.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
