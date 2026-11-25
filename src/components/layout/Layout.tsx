import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileConversionBar from "./MobileConversionBar";
import { useSyncLangWithPath } from "@/context/language";

export default function Layout() {
  const location = useLocation();
  useSyncLangWithPath(location.pathname);
  

  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = location.hash ? decodeURIComponent(location.hash.slice(1)) : "";
    if (hash) {
      let tries = 0;
      const id = setInterval(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
          if (++tries > 3) clearInterval(id);
        } else if (++tries > 30) clearInterval(id);
      }, 100);
      return () => clearInterval(id);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [location.pathname, location.hash]);

  const path = location.pathname;
  const isServicePage = path.startsWith("/servicii") || path.startsWith("/en/services");
  const isHomepage = path === "/" || path === "/en";
  const lang = path.startsWith("/en") ? "en" : "ro";

  return (
    <div
      className={`min-h-screen bg-background text-foreground${isServicePage ? " pb-16 md:pb-0" : ""}`}
    >
      <Header />
      <main className={isHomepage ? undefined : "pt-16 md:pt-0"}>
        <Outlet />
      </main>
      <Footer />
      {isServicePage ? <MobileConversionBar lang={lang} /> : <WhatsAppButton />}
    </div>
  );
}
