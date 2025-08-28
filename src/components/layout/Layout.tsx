import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CriticalCSS from "../performance/CriticalCSS";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CriticalCSS />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
