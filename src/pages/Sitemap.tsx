import { Link } from "react-router-dom";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";
import { services, servicesEn } from "@/lib/services";
import { mapPathToLang } from "@/lib/routeMap";
import { useSEO } from "@/hooks/useSEO";

export default function Sitemap() {
  const { lang } = useLanguage();
  const t = translations[lang];

  useSEO({
    title: lang === "en" ? "Sitemap - Legal Services Directory | Bogdan Lamatic Law Office" : "Harta site - Directorul serviciilor legale | Cabinet Avocat Bogdan Lamatic",
    description: lang === "en" ? "Complete sitemap of legal services offered by Bogdan Lamatic Law Office in Bucharest. Criminal law, financial crime, drug offenses, malpractice defense." : "Harta completă a serviciilor legale oferite de Cabinet Avocat Bogdan Lamatic din București. Drept penal, criminalitate economică, infracțiuni cu droguri, apărare malpraxis.",
    alternates: {
      ro: "/sitemap",
      en: "/en/sitemap"
    },
    locale: lang === "en" ? "en_US" : "ro_RO",
    canonical: lang === "en" ? "https://avocatbogdanlamatic.ro/en/sitemap" : "https://avocatbogdanlamatic.ro/sitemap"
  });

  const svcList = lang === "en" ? servicesEn : services;

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {lang === "en" ? "Sitemap" : "Harta Site"}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {lang === "en" 
              ? "Complete directory of all pages and legal services offered by Bogdan Lamatic Law Office"
              : "Directorul complet al tuturor paginilor și serviciilor legale oferite de Cabinet Avocat Bogdan Lamatic"
            }
          </p>
        </header>

        <div className="grid gap-12 md:gap-16">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
              {lang === "en" ? "Main Pages" : "Pagini Principale"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="group">
                <Link 
                  to={mapPathToLang("/", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {lang === "en" ? "Home" : "Acasă"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Main page" : "Pagina principală"}
                  </p>
                </Link>
              </div>
              
              <div className="group">
                <Link 
                  to={mapPathToLang("/despre-mine", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {lang === "en" ? "About" : "Despre mine"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Attorney information" : "Informații avocat"}
                  </p>
                </Link>
              </div>

              <div className="group">
                <Link 
                  to={mapPathToLang("/contact", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {t.nav.contact}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Contact information" : "Informații de contact"}
                  </p>
                </Link>
              </div>

              <div className="group">
                <Link 
                  to={mapPathToLang("/blog", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {t.nav.blog}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Legal articles and news" : "Articole juridice și noutăți"}
                  </p>
                </Link>
              </div>

              {lang === "ro" && (
                <div className="group">
                  <Link 
                    to="/calculator-despagubiri" 
                    className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                  >
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      Calculator Despăgubiri
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Calculator pentru despăgubiri
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Legal Services */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
              {lang === "en" ? "Criminal Law Services" : "Servicii Drept Penal"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {svcList.map((service) => {
                const slug = service.to.split("/").pop() || "";
                const serviceKey = slug.replace(/-/g, "");
                const description = (t as any).navServices?.[serviceKey] || service.label;
                
                return (
                  <div key={service.to} className="group">
                    <Link 
                      to={service.to} 
                      className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                    >
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {service.label}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {lang === "en" ? "Specialized legal representation" : "Reprezentare juridică specializată"}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Legal Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
              {lang === "en" ? "Legal Information" : "Informații Legale"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="group">
                <Link 
                  to={mapPathToLang("/termeni-si-conditii", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {lang === "en" ? "Terms and Conditions" : "Termeni și Condiții"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Terms of service" : "Condițiile de utilizare"}
                  </p>
                </Link>
              </div>

              <div className="group">
                <Link 
                  to={mapPathToLang("/gdpr", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    GDPR
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Privacy policy" : "Politica de confidențialitate"}
                  </p>
                </Link>
              </div>

              <div className="group">
                <Link 
                  to={mapPathToLang("/politica-cookies", lang)} 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {lang === "en" ? "Cookie Policy" : "Politica cookies"}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {lang === "en" ? "Cookie usage information" : "Informații despre utilizarea cookie-urilor"}
                  </p>
                </Link>
              </div>
            </div>
          </section>

          {/* Language Switch */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-primary border-b border-primary/30 pb-2">
              {lang === "en" ? "Language" : "Limbă"}
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="group">
                <Link 
                  to="/sitemap" 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    🇷🇴 Română
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Harta site în limba română
                  </p>
                </Link>
              </div>

              <div className="group">
                <Link 
                  to="/en/sitemap" 
                  className="block p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/70 transition-colors"
                >
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    🇬🇧 English
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Sitemap in English language
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {lang === "en" 
              ? "For search engines, visit the " 
              : "Pentru motoarele de căutare, vizitați "
            }
            <a 
              href="/sitemap.xml" 
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              XML sitemap
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}