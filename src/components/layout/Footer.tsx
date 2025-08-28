import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { services, servicesEn } from "@/lib/services";
import { mapPathToLang } from "@/lib/routeMap";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const labelFor = (path: string, fallback: string) => {
    const slug = path.split("/").pop() || "";
    return (t as any).navServices?.[slug] ?? fallback;
  };
  const svcList = lang === "en" ? servicesEn : services;
  return (
    <footer className="relative border-t overflow-hidden bg-black text-white font-extralight font-inter">
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Col 1: Contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold tracking-wide uppercase"><Link to={mapPathToLang("/", lang)} title="/" className="hover:underline">{lang === "en" ? "Bogdan Lamatic Law Office" : "Cabinet Avocat Bogdan Lamatic"}</Link></h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span>{lang === "en" ? "Address:" : "Adresă:"}</span>{" "}
                <span>{lang === "en" ? "Strada Colonel Stefan Stoika 22, Bucuresti 012244" : "Strada Colonel Stefan Stoika 22, București 012244"}</span>
              </li>
              <li>
                <span>{lang === "en" ? "Telephone:" : "Telefon:"}</span>{" "}
                <a href="tel:+40745506443" title="/telefon" className="underline hover:no-underline">+40 745 506 443</a>
              </li>
              <li>
                <span>{lang === "en" ? "Email:" : "E-mail:"}</span>{" "}
                <a href="mailto:bogdan.lamatic@yahoo.com" title="/email" className="underline hover:no-underline">bogdan.lamatic@yahoo.com</a>
              </li>
              <li>
                <span>Website:</span>{" "}
                <a href="https://avocatpenalbucuresti.ro/" title="/avocat-penal-bucuresti" className="underline hover:no-underline">avocatpenalbucuresti.ro</a>
              </li>
              <li>
                <span>{lang === "en" ? "Hours:" : "Program:"}</span>{" "}
                <span>{lang === "en" ? "Monday - Friday: 08-18" : "Luni - Vineri: 08-18"}</span>
              </li>
            </ul>
          </section>

          {/* Col 2: Servicii */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold tracking-wide uppercase">
              {lang === "en" ? "Criminal Law Attorney Services Bucharest" : "Servicii Avocat Drept Penal Bucuresti"}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {svcList.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} title={
                    s.to.includes("cauze-penale-privind-droguri") ? "/avocat-droguri" :
                    s.to.includes("criminalitate-economica") ? "/criminalitate-economica" :
                    s.to.includes("infractiuni-de-coruptie") ? "/coruptie" :
                    s.to.includes("infractiuni-rutiere") ? "/avocat-accidente-rutiere" :
                    s.to.includes("investigatii-privind-activele-cripto") ? "/avocat-criptomonede" :
                    s.to.includes("neglijenta-profesionala-si-malpraxis") ? "/avocat-malpraxis" :
                    s.to.includes("raspundere-penala-incidente") ? "/avocat-incidente-de-munca" :
                    s.to.includes("reprezentarea-victimelor") ? "/avocat-victime" :
                    s.to.includes("spalare-de-bani") ? "/avocat-spalare-bani" : ""
                  } className="hover:underline">
                    {labelFor(s.to, s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Utile */}
          <nav aria-labelledby="footer-utile">
            <h2 id="footer-utile" className="text-sm font-semibold tracking-wide uppercase">{lang === "en" ? "Useful" : "Utile"}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to={mapPathToLang("/contact", lang)} title="/contact" className="hover:underline">{t.nav.contact}</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/blog", lang)} title="/blog" className="hover:underline">{t.nav.blog}</Link>
              </li>
              <li>
                <a href="https://reclamatiisal.anpc.ro/" title="/anpc" rel="noopener noreferrer" className="hover:underline">ANPC-SAL</a>
              </li>
              <li>
                <a href="https://consumer-redress.ec.europa.eu/index_ro" title="/anpc" rel="noopener noreferrer" className="hover:underline">ANPC-SOL</a>
              </li>
              <li>
                <Link to={mapPathToLang("/termeni-si-conditii", lang)} title="/termeni-si-conditii" className="hover:underline">{lang === "en" ? "Terms and Conditions" : "Termeni și Condiții"}</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/gdpr", lang)} title="/gdpr" className="hover:underline">GDPR</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/politica-cookies", lang)} title="/cookies" className="hover:underline">{lang === "en" ? "Cookie Policy" : "Politica cookies"}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t">
          <p className="text-xs">
            © {new Date().getFullYear()} Bogdan Lamatic. {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
