import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileConversionBar from "./MobileConversionBar";

export default function Layout() {
  const location = useLocation();
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Immediate scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      
      // Additional scroll for mobile devices with a small delay
      const timeoutId = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 100);
      
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname]);

  const path = location.pathname;
  const isServicePage = path.startsWith("/servicii") || path.startsWith("/en/services");
  const lang = path.startsWith("/en") ? "en" : "ro";

  return (
    <div
      className={`min-h-screen bg-background text-foreground${isServicePage ? " pb-16 md:pb-0" : ""}`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      {isServicePage ? <MobileConversionBar lang={lang} /> : <WhatsAppButton />}
    </div>
  );
}
