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
          <h2>What is a "cookie"?</h2>
          <p>
            A cookie is a small file made up of letters and numbers that will be stored on the computer, device, 
            mobile terminal or other equipment of a user accessing the Internet. The cookie is installed through 
            a request from a web server to a browser (e.g. Internet Explorer, Chrome) and is completely "passive". 
            The cookie does not contain software, viruses or spyware and cannot access information on the user's hard disk.
          </p>
          <p>
            Cookies themselves do not require personal data to be used and, in most cases, 
            do not identify internet users.
          </p>
          <p>
            There are two main categories of cookies. Session cookies are created temporarily in the user's browser 
            subfolder while visiting the Website. After the user leaves the Website, the session cookie is deleted. 
            Persistent cookies remain in the user's browser subfolder and are activated again once the user visits 
            the Website. A persistent cookie remains in the browser subfolder for a period set in the cookie file.
          </p>
        </section>

        <section>
          <h2>Cookie lifetime</h2>
          <p>
            The lifetime of a cookie can vary significantly, depending on the purpose for which it is placed. 
            As mentioned above, some cookies are used exclusively for a single session (session cookies) and are 
            not retained after the user leaves the website, while other cookies are retained and reused each time 
            the user revisits the Website (persistent cookies). However, cookies can be deleted by a user at any 
            time through browser settings.
          </p>
        </section>

        <section>
          <h2>Third-party cookies</h2>
          <p>
            Website content may be provided by third parties or providers (e.g., a video). 
            Such third parties may place cookies on the Website (called "third-party cookies" because 
            they are not placed by this website). Third-party providers must also comply with applicable 
            legal regulations and the Privacy Policy of the Site{" "}
            <a href="https://avocatpenalbucuresti.ro/" className="underline hover:no-underline">
              https://avocatpenalbucuresti.ro/
            </a>{" "}
            and Bogdan Lamatic Law Office.
          </p>
        </section>

        <section>
          <h2>Cookies used by this website</h2>
          <p>
            Your consent applies to the following domains:{" "}
            <a href="https://avocatpenalbucuresti.ro/" className="underline hover:no-underline">
              https://avocatpenalbucuresti.ro/
            </a>
          </p>
          <p>Your current status: Allow all.</p>
        </section>

        <section>
          <h2>Adapting browser settings to cookies</h2>
          <p>
            If the Website visitor is the only person using the device, he/she can set long expiration terms 
            for browsing history. If he/she uses the device together with another person, it is recommended 
            to set the browser to delete browsing data each time the browser is closed.
          </p>
        </section>

        <section>
          <h2>Deleting cookies</h2>
          <p>
            Generally, an application used to access web pages allows the default saving of cookies on the device. 
            These settings can be changed so that automatic cookie management is blocked by the web browser or 
            the user is notified each time cookies are sent to their device.
          </p>
          <p>
            Detailed information about the possibilities and types of cookie management can be found in the 
            application or browser settings. Limiting the use of cookies may affect certain functionalities 
            of the Website.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions regarding this cookie policy, contact us at
            <a href="mailto:contact@avocatpenalbucuresti.ro"> contact@avocatpenalbucuresti.ro</a>.
          </p>
        </section>
        <section aria-label="Related policies" className="mt-10">
          <h2>Related policies</h2>
          <ul>
            <li><a href="/en/terms-and-conditions" className="underline hover:no-underline">Terms and Conditions</a></li>
            <li><a href="/en/gdpr" className="underline hover:no-underline">GDPR - Data Protection</a></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
