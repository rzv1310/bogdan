import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useLanguage } from "@/context/language";
import { translations } from "@/lib/translations";

const services = [
  { label: "Criminalitate economică", to: "/servicii/criminalitate-economica" },
  { label: "Infracțiuni de corupție și fapte legate de exercitarea funcției publice", to: "/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice" },
  { label: "Investigații privind activele cripto", to: "/servicii/investigatii-privind-activele-cripto" },
  { label: "Cauze penale privind droguri", to: "/servicii/cauze-penale-privind-droguri" },
  { label: "Dosare de spălare de bani și ascundere de bunuri", to: "/servicii/spalare-de-bani-si-ascundere-de-bunuri" },
  { label: "Neglijență profesională și malpraxis", to: "/servicii/neglijenta-profesionala-si-malpraxis" },
  { label: "Infracțiuni rutiere cu victime", to: "/servicii/infractiuni-rutiere-cu-victime" },
  { label: "Răspundere penală pentru incidente la locul de muncă", to: "/servicii/raspundere-penala-incidente-locul-de-munca" },
  { label: "Reprezentarea victimelor în procese penale", to: "/servicii/reprezentarea-victimelor-in-procese-penale" },
];

export default function Header() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const labelFor = (path: string, fallback: string) => {
    const slug = path.split("/").pop() || "";
    return (t as any).navServices?.[slug] ?? fallback;
  };
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="relative mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-signature italic text-lg md:text-xl leading-tight md:leading-normal">
          {t.brand}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3">{t.nav.services}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-1 p-3 w-[480px] sm:w-[560px] bg-popover text-popover-foreground shadow-md rounded-md relative z-50">
                    {services.map((s) => (
                      <li key={s.to}>
                        <NavigationMenuLink asChild>
                          <Link to={s.to} className="block rounded-md px-3 py-2 hover:bg-muted text-sm leading-snug">
                            {labelFor(s.to, s.label)}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavLink to="/despre-mine" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}>{t.nav.about}</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}>{t.nav.contact}</NavLink>

          {/* Language selector (desktop) */}
          <div className="ml-3 pl-3 border-l flex items-center gap-1">
            <Button
              size="sm"
              variant="ghost"
              className={lang === "ro" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
              aria-label="Schimbă limba în română"
              aria-pressed={lang === "ro"}
              onClick={() => setLang("ro")}
            >
              RO
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className={lang === "en" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
              aria-label="Schimbă limba în engleză"
              aria-pressed={lang === "en"}
              onClick={() => setLang("en")}
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
            onClick={() => setLang("ro")}
          >
            RO
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className={lang === "en" ? "bg-accent text-accent-foreground hover:bg-accent/90" : undefined}
            aria-label="Schimbă limba în engleză"
            aria-pressed={lang === "en"}
            onClick={() => setLang("en")}
          >
            EN
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <button
              className="md:hidden p-2 rounded-sm text-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              aria-label="Meniu"
              type="button"
            >
              <Menu size={22} strokeWidth={2} />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t.nav.menu}</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 pb-6">
              <ul className="space-y-1">
                <li>
                  <DrawerClose asChild>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link to="/despre-mine">{t.nav.about}</Link>
                    </Button>
                  </DrawerClose>
                </li>
                <li>
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between">
                        <span>{t.nav.services}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <ul className="mt-1 space-y-1 pl-3 border-l">
                        {services.map((s) => (
                          <li key={s.to}>
                            <DrawerClose asChild>
                              <Button asChild variant="ghost" className="w-full justify-start text-left">
                                <Link to={s.to}>{labelFor(s.to, s.label)}</Link>
                              </Button>
                            </DrawerClose>
                          </li>
                        ))}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link to="/blog">{t.nav.blog}</Link>
                    </Button>
                  </DrawerClose>
                </li>
                <li>
                  <DrawerClose asChild>
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link to="/contact">{t.nav.contact}</Link>
                    </Button>
                  </DrawerClose>
                </li>
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
}
