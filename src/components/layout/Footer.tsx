import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { services, servicesEn } from "@/lib/services";
import { mapPathToLang } from "@/lib/routeMap";
import { Linkedin, Twitter, Instagram, Facebook, Music, Pin } from "lucide-react";

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
        <div className="grid gap-8 md:grid-cols-4">
          {/* Col 1: Contact */}
          <section aria-labelledby="footer-contact">
            <h2 id="footer-contact" className="text-sm font-semibold tracking-wide uppercase"><Link to={mapPathToLang("/", lang)} className="hover:underline">{lang === "en" ? "Criminal Defense Lawyer Bucharest Bogdan Lamatic" : "Avocat Drept Penal Bucuresti Bogdan Lamatic"}</Link></h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span>{lang === "en" ? "Address:" : "Adresă:"}</span>{" "}
                <a href="https://www.google.com/maps?cid=17818591254142574295" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">{lang === "en" ? "Strada Colonel Stefan Stoika 22, Bucuresti 012244" : "Strada Colonel Stefan Stoika 22, București 012244"}</a>
              </li>
              <li>
                <span>{lang === "en" ? "Telephone:" : "Telefon:"}</span>{" "}
                <a href="tel:+40316320183" className="underline hover:no-underline">+40 (31) 632 01 83</a>
              </li>
              <li>
                <span>{lang === "en" ? "Email:" : "E-mail:"}</span>{" "}
                <a href="mailto:contact@avocatpenalbucuresti.ro" className="underline hover:no-underline">contact@avocatpenalbucuresti.ro</a>
              </li>
              <li>
                <span>Website:</span>{" "}
                <a href="https://avocatpenalbucuresti.ro/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">avocatpenalbucuresti.ro</a>
              </li>
              <li>
                <span>{lang === "en" ? "Hours:" : "Program:"}</span>{" "}
                <span>{lang === "en" ? "Monday - Friday: 06-22, Saturday - Sunday: 09-20" : "Luni - Vineri: 06-22, Sâmbătă - Duminică: 09-20"}</span>
              </li>
            </ul>
            
            {/* Google Maps */}
            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82397.0866811247!2d25.984249105775728!3d44.42358247088336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c1d1905a29%3A0xf7485a56b50cded7!2sAvocat%20Drept%20Penal%20Bucuresti%20Bogdan%20Lamatic!5e1!3m2!1sro!2sro!4v1758693746846!5m2!1sro!2sro" 
                className="w-full h-48 md:h-64 rounded border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === "en" ? "Office Location" : "Locația biroului"}
              />
            </div>
          </section>

          {/* Col 2: Social Media */}
          <section aria-labelledby="footer-social">
            <h2 id="footer-social" className="text-sm font-semibold tracking-wide uppercase">
              {lang === "en" ? "Follow Us" : "Urmărește-ne"}
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <a 
                href="https://www.linkedin.com/in/bogdan-lamatic/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/BogdanLamatic" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="https://www.instagram.com/avocat_bogdan_lamatic/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.facebook.com/avocatpenalbucuresti" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@avocat_bogdan_lamatic" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-primary transition-colors"
              >
                <Music size={24} />
              </a>
              <a 
                href="https://ro.pinterest.com/avocatpenalbucuresti/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-primary transition-colors"
              >
                <Pin size={24} />
              </a>
            </div>
          </section>

          {/* Col 3: Servicii */}
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="text-sm font-semibold tracking-wide uppercase">
              {lang === "en" ? "Criminal Defense Attorney Services" : "Arii de practică"}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {svcList.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className="hover:underline">
                    {labelFor(s.to, s.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4: Utile */}
          <nav aria-labelledby="footer-utile">
            <h2 id="footer-utile" className="text-sm font-semibold tracking-wide uppercase">{lang === "en" ? "Useful" : "Utile"}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to={mapPathToLang("/contact", lang)} className="hover:underline">{t.nav.contact}</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/blog", lang)} className="hover:underline">{t.nav.blog}</Link>
              </li>
              <li>
                <a href="https://reclamatiisal.anpc.ro/" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SAL</a>
              </li>
              <li>
                <a href="https://consumer-redress.ec.europa.eu/index_ro" target="_blank" rel="noopener noreferrer" className="hover:underline">ANPC-SOL</a>
              </li>
              <li>
                <Link to={mapPathToLang("/termeni-si-conditii", lang)} className="hover:underline">{lang === "en" ? "Terms and Conditions" : "Termeni și Condiții"}</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/gdpr", lang)} className="hover:underline">GDPR</Link>
              </li>
              <li>
                <Link to={mapPathToLang("/politica-cookies", lang)} className="hover:underline">{lang === "en" ? "Cookie Policy" : "Politica cookies"}</Link>
              </li>
              <li>
                <Link to="/sitemap.xml" className="hover:underline">Sitemap</Link>
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
