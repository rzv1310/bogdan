import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
