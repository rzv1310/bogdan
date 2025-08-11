import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { services } from "@/lib/services";
import { Squares } from "@/components/ui/squares-background";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const labelFor = (path: string, fallback: string) => {
    const slug = path.split("/").pop() || "";
    return (t as any).navServices?.[slug] ?? fallback;
  };
  return (
    <footer className="relative border-t overflow-hidden">
      <div className="absolute inset-0">
        <Squares direction="diagonal" speed={0.5} squareSize={40} borderColor="#333" hoverFillColor="#222" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Col 1: Contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground"><Link to="/" className="hover:underline">{lang === "en" ? "Bogdan Lamatic Law Office" : "Cabinet Avocat Bogdan Lamatic"}</Link></h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">{lang === "en" ? "Address:" : "Adresă:"}</span>{" "}
                <span>Bucharest, 1st District, 22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5</span>
              </li>
              <li>
                <span className="text-muted-foreground">{lang === "en" ? "Telephone:" : "Telefon:"}</span>{" "}
                <a href="tel:+40745506443" className="text-primary underline hover:no-underline">+40 745 506 443</a>
              </li>
              <li>
                <span className="text-muted-foreground">{lang === "en" ? "Email:" : "E-mail:"}</span>{" "}
                <a href="mailto:bogdan.lamatic@yahoo.com" className="text-primary underline hover:no-underline">bogdan.lamatic@yahoo.com</a>
              </li>
              <li>
                <span className="text-muted-foreground">Website:</span>{" "}
                <a href="https://avocat-drept-penal.ro" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">avocat-drept-penal.ro</a>
              </li>
              <li>
                <span className="text-muted-foreground">{lang === "en" ? "Hours:" : "Program:"}</span>{" "}
                <span>{lang === "en" ? "Monday - Friday: 08-18" : "Luni - Vineri: 08-18"}</span>
              </li>
            </ul>
          </section>

          {/* Col 2: Servicii */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">{t.nav.services}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:underline">
                    {labelFor(s.to, s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Utile */}
          <nav aria-labelledby="footer-utile">
            <h2 id="footer-utile" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">{lang === "en" ? "Useful" : "Utile"}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:underline">{t.nav.contact}</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">{t.nav.blog}</Link>
              </li>
              <li>
                <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SAL</a>
              </li>
              <li>
                <a href="https://consumer-redress.ec.europa.eu/index_ro" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SOL</a>
              </li>
              <li>
                <Link to="/termeni-si-conditii" className="hover:underline">{lang === "en" ? "Terms and Conditions" : "Termeni și Condiții"}</Link>
              </li>
              <li>
                <Link to="/gdpr" className="hover:underline">GDPR</Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="hover:underline">{lang === "en" ? "Cookie Policy" : "Politica cookies"}</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Bogdan Lamatic. {t.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
