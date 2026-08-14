import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/context/language";
import { useSEO } from "@/hooks/useSEO";
import { services, servicesEn } from "@/lib/services";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const en = lang === "en";

  useSEO({
    title: en
      ? "Page not found (404) | Attorney Bogdan Lamatic"
      : "Pagina nu a fost găsită (404) | Avocat Bogdan Lamatic",
    description: en
      ? "The requested page does not exist. Use the links below to reach the main pages of the site."
      : "Pagina căutată nu există. Folosește linkurile de mai jos pentru a ajunge la paginile principale ale site-ului.",
    robotsDirectives: "noindex, follow",
    locale: en ? "en_US" : "ro_RO",
  });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const mainRo = [
    { label: "Acasă", to: "/" },
    { label: "Despre mine", to: "/despre-mine" },
    { label: "Contact", to: "/contact" },
    { label: "Blog", to: "/blog" },
    { label: "Calculator despăgubiri", to: "/calculator-despagubiri" },
    { label: "Harta site", to: "/harta-site" },
  ];

  const mainEn = [
    { label: "Home", to: "/en" },
    { label: "About me", to: "/en/about" },
    { label: "Contact", to: "/en/contact" },
    { label: "Blog", to: "/en/blog" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 md:px-6 py-12">
      <p className="text-sm font-semibold tracking-widest text-accent uppercase">404</p>
      <h1 className="mt-2 text-2xl font-semibold">
        {en ? "Page not found" : "Pagina nu a fost găsită"}
      </h1>
      <p className="mt-3 text-muted-foreground max-w-2xl">
        {en
          ? "The page you are looking for does not exist or has been moved. Below are the most important pages of the site."
          : "Pagina căutată nu există sau a fost mutată. Mai jos găsești cele mai importante pagini ale site-ului."}
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-lg font-semibold">{en ? "Main pages" : "Pagini principale"}</h2>
          <ul className="mt-3 space-y-2">
            {(en ? mainEn : mainRo).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 text-lg font-semibold">{en ? "Romanian version" : "Versiunea în engleză"}</h2>
          <ul className="mt-3 space-y-2">
            {(en ? mainRo : mainEn).map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:underline text-muted-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">{en ? "Services" : "Servicii"}</h2>
          <ul className="mt-3 space-y-2">
            {(en ? servicesEn : services).map((service) => (
              <li key={service.to}>
                <Link to={service.to} className="hover:underline">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default NotFound;
