import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { services } from "@/lib/services";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Col 1: Contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground"><Link to="/" className="hover:underline">Cabinet Avocat Bogdan Lamatic</Link></h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Adresă:</span>{" "}
                <span>Bucharest, 1st District, 22nd Stefan Stoika Street, bl. 17B, sc. 1, et. 1, ap. 5</span>
              </li>
              <li>
                <span className="text-muted-foreground">Telefon:</span>{" "}
                <a href="tel:+40745506443" className="text-primary underline hover:no-underline">+40 745 506 443</a>
              </li>
              <li>
                <span className="text-muted-foreground">E-mail:</span>{" "}
                <a href="mailto:bogdan.lamatic@yahoo.com" className="text-primary underline hover:no-underline">bogdan.lamatic@yahoo.com</a>
              </li>
              <li>
                <span className="text-muted-foreground">Website:</span>{" "}
                <a href="https://avocat-drept-penal.ro" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">avocat-drept-penal.ro</a>
              </li>
              <li>
                <span className="text-muted-foreground">Program:</span>{" "}
                <span>Luni - Vineri: 08-18</span>
              </li>
            </ul>
          </section>

          {/* Col 2: Servicii */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Servicii</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:underline">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3: Utile */}
          <nav aria-labelledby="footer-utile">
            <h2 id="footer-utile" className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">Utile</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline">Blog</Link>
              </li>
              <li>
                <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SAL</a>
              </li>
              <li>
                <a href="https://consumer-redress.ec.europa.eu/index_ro" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SOL</a>
              </li>
              <li>
                <Link to="/termeni-si-conditii" className="hover:underline">Termeni și Condiții</Link>
              </li>
              <li>
                <Link to="/gdpr" className="hover:underline">GDPR</Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="hover:underline">Politica cookies</Link>
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
