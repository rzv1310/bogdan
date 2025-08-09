import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CriminalitateEconomica from "./pages/services/criminalitate-economica";
import CoruptieSiFunctiePublica from "./pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice";
import InvestigatiiCripto from "./pages/services/investigatii-privind-activele-cripto";
import CauzeDroguri from "./pages/services/cauze-penale-privind-droguri";
import SpalareDeBani from "./pages/services/spalare-de-bani-si-ascundere-de-bunuri";
import Malpraxis from "./pages/services/neglijenta-profesionala-si-malpraxis";
import InfractiuniRutiere from "./pages/services/infractiuni-rutiere-cu-victime";
import RaspunderePenalaMunca from "./pages/services/raspundere-penala-incidente-locul-de-munca";
import ReprezentareaVictimelor from "./pages/services/reprezentarea-victimelor-in-procese-penale";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/despre-mine" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servicii/criminalitate-economica" element={<CriminalitateEconomica />} />
            <Route path="/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice" element={<CoruptieSiFunctiePublica />} />
            <Route path="/servicii/investigatii-privind-activele-cripto" element={<InvestigatiiCripto />} />
            <Route path="/servicii/cauze-penale-privind-droguri" element={<CauzeDroguri />} />
            <Route path="/servicii/spalare-de-bani-si-ascundere-de-bunuri" element={<SpalareDeBani />} />
            <Route path="/servicii/neglijenta-profesionala-si-malpraxis" element={<Malpraxis />} />
            <Route path="/servicii/infractiuni-rutiere-cu-victime" element={<InfractiuniRutiere />} />
            <Route path="/servicii/raspundere-penala-incidente-locul-de-munca" element={<RaspunderePenalaMunca />} />
            <Route path="/servicii/reprezentarea-victimelor-in-procese-penale" element={<ReprezentareaVictimelor />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
