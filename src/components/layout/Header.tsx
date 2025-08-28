import * as React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";

import { services, servicesEn } from "@/lib/services";
import { mapPathToLang } from "@/lib/routeMap";

// Safe Navigation Menu Component with fallback
function SafeNavigationMenu({ children }: { children: React.ReactNode }) {
  try {
    const {
      NavigationMenu,
      NavigationMenuList,
      NavigationMenuItem,
      NavigationMenuTrigger,
      NavigationMenuContent,
      NavigationMenuLink,
    } = require("@/components/ui/navigation-menu");
    
    return React.createElement(NavigationMenu, {}, children);
  } catch (error) {
    console.error('NavigationMenu not available, using fallback:', error);
    return React.createElement('div', { className: 'flex items-center gap-2' }, children);
  }
}

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const svcList = lang === "en" ? servicesEn : services;

  const labelFor = (path: string, fallback: string) => {
    const slug = path.split("/").pop() || "";
    return (t as any).navServices?.[slug] ?? fallback;
  };

  const switchLang = (target: "ro" | "en") => {
    if (target === lang) return;
    setLang(target);
    const to = mapPathToLang(pathname, target);
    navigate(to);
  };

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="relative mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to={mapPathToLang("/", lang)} title="/" className="flex flex-col items-center leading-none text-center select-none">
          <span className="block ml-1 font-inter font-light text-[10px] md:text-xs uppercase tracking-wide text-muted-foreground">
            {lang === "ro" ? "CABINET AVOCAT" : "LAW OFFICE"}
          </span>
          <span className="block mt-1 md:mt-0 font-signature italic text-base md:text-xl leading-none">Bogdan Lamatic</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <SafeNavigationMenu>
            <div className="relative group">
              <Button variant="ghost" className="px-3 py-2 text-base">
                {t.nav.services}
              </Button>
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block z-50">
                <ul className="grid gap-1 p-3 w-[480px] sm:w-[560px] bg-popover text-popover-foreground shadow-md rounded-md border">
                  {svcList.map((s) => (
                    <li key={s.to}>
                      <Link 
                        to={s.to} 
                        title={
                          s.to.includes("cauze-penale-privind-droguri") ? "/avocat-droguri" :
                          s.to.includes("criminalitate-economica") ? "/criminalitate-economica" :
                          s.to.includes("infractiuni-de-coruptie") ? "/coruptie" :
                          s.to.includes("infractiuni-rutiere") ? "/avocat-accidente-rutiere" :
                          s.to.includes("investigatii-privind-activele-cripto") ? "/avocat-criptomonede" :
                          s.to.includes("neglijenta-profesionala-si-malpraxis") ? "/avocat-malpraxis" :
                          s.to.includes("raspundere-penala-incidente") ? "/avocat-incidente-de-munca" :
                          s.to.includes("reprezentarea-victimelor") ? "/avocat-victime" :
                          s.to.includes("spalare-de-bani") ? "/avocat-spalare-bani" : ""
                        } 
                        className="block rounded-md px-3 py-2 hover:bg-muted text-sm leading-snug"
                      >
                        {labelFor(s.to, s.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SafeNavigationMenu>
          <NavLink to={mapPathToLang("/despre-mine", lang)} title="/despre-mine" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}>{t.nav.about}</NavLink>
          <NavLink to={mapPathToLang("/contact", lang)} title="/contact" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}>{t.nav.contact}</NavLink>

          {/* Language selector (desktop) */}
          <div className="ml-3 pl-3 border-l flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className={lang === "ro" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
              aria-label="Schimbă limba în română"
              aria-pressed={lang === "ro"}
              onClick={() => switchLang("ro")}
            >
              RO
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className={lang === "en" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
              aria-label="Schimbă limba în engleză"
              aria-pressed={lang === "en"}
              onClick={() => switchLang("en")}
            >
              EN
            </Button>
          </div>
        </div>

        {/* Mobile language buttons on the right + hamburger centered */}
        <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <Button
            size="sm"
            variant="ghost"
            className={lang === "ro" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
            aria-label="Schimbă limba în română"
            aria-pressed={lang === "ro"}
            onClick={() => switchLang("ro")}
          >
            RO
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className={lang === "en" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
            aria-label="Schimbă limba în engleză"
            aria-pressed={lang === "en"}
            onClick={() => switchLang("en")}
          >
            EN
          </Button>
        </div>
        
        {/* Mobile menu button - centered */}
        <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            className="p-2 rounded-sm text-foreground"
            aria-label="Meniu"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={22} strokeWidth={2} />
          </button>
          
          {/* Mobile dropdown menu */}
          {mobileMenuOpen && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-background border rounded-md shadow-lg z-50">
              <div className="p-4">
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to={mapPathToLang("/despre-mine", lang)}
                      className="block p-2 hover:bg-muted rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.about}
                    </Link>
                  </li>
                  <li>
                    <div>
                      <button
                        className="w-full text-left p-2 hover:bg-muted rounded flex justify-between items-center"
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <span>{t.nav.services}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <ul className="mt-1 space-y-1 pl-4">
                          {svcList.map((s) => (
                            <li key={s.to}>
                              <Link 
                                to={s.to}
                                className="block p-2 text-sm hover:bg-muted rounded leading-snug"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setServicesOpen(false);
                                }}
                              >
                                {labelFor(s.to, s.label)}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                  <li>
                    <Link 
                      to={mapPathToLang("/blog", lang)}
                      className="block p-2 hover:bg-muted rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.blog}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={mapPathToLang("/contact", lang)}
                      className="block p-2 hover:bg-muted rounded"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t.nav.contact}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
