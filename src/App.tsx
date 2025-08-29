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
import CalculatorDespagubiri from "./pages/CalculatorDespagubiri";
import { LanguageProvider } from "@/context/language";

// EN pages
import EnIndex from "./pages/en";
import HomepageEN from "./pages/en/Homepage";
import ContactEn from "./pages/en/contact";
import BlogEn from "./pages/en/blog";
import FinancialCrimeEn from "./pages/en/services/financial-crime";
import CorruptionPublicOfficeEn from "./pages/en/services/corruption-and-public-office-offenses";
import CryptoInvestigationsEn from "./pages/en/services/crypto-asset-investigations";
import DrugOffensesEn from "./pages/en/services/drug-offenses";
import MoneyLaunderingEn from "./pages/en/services/money-laundering-and-asset-concealment";
import MalpracticeEn from "./pages/en/services/professional-negligence-and-malpractice";
import RoadTrafficEn from "./pages/en/services/road-traffic-offenses";
import WorkplaceLiabilityEn from "./pages/en/services/workplace-criminal-liability";
import VictimRepresentationEn from "./pages/en/services/victim-representation-in-criminal-cases";
import TermsAndConditionsEn from "./pages/en/terms-and-conditions";
import TermeniSiConditii from "./pages/termeni-si-conditii";
import GDPR from "./pages/gdpr";
import PoliticaCookies from "./pages/politica-cookies";
import GDPRen from "./pages/en/gdpr";
import CookiePolicyEn from "./pages/en/cookie-policy";
import Sitemap from "./pages/Sitemap";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/despre-mine" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/calculator-despagubiri" element={<CalculatorDespagubiri />} />
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
              <Route path="/termeni-si-conditii" element={<TermeniSiConditii />} />
              <Route path="/gdpr" element={<GDPR />} />
              <Route path="/politica-cookies" element={<PoliticaCookies />} />
              <Route path="/sitemap.xml" element={<Sitemap />} />

               {/* EN routes */}
               <Route path="/en" element={<EnIndex />}>
                 <Route index element={<HomepageEN />} />
               </Route>
               <Route path="/en/about" element={<About />} />
               <Route path="/en/blog" element={<BlogEn />} />
               <Route path="/en/contact" element={<ContactEn />} />
               <Route path="/en/terms-and-conditions" element={<TermsAndConditionsEn />} />
               <Route path="/en/gdpr" element={<GDPRen />} />
               <Route path="/en/cookie-policy" element={<CookiePolicyEn />} />
               <Route path="/en/services/financial-crime" element={<FinancialCrimeEn />} />
               <Route path="/en/services/corruption-and-public-office-offenses" element={<CorruptionPublicOfficeEn />} />
               <Route path="/en/services/crypto-asset-investigations" element={<CryptoInvestigationsEn />} />
               <Route path="/en/services/drug-offenses" element={<DrugOffensesEn />} />
               <Route path="/en/services/money-laundering-and-asset-concealment" element={<MoneyLaunderingEn />} />
               <Route path="/en/services/professional-negligence-and-malpractice" element={<MalpracticeEn />} />
               <Route path="/en/services/road-traffic-offenses" element={<RoadTrafficEn />} />
               <Route path="/en/services/workplace-criminal-liability" element={<WorkplaceLiabilityEn />} />
               <Route path="/en/services/victim-representation-in-criminal-cases" element={<VictimRepresentationEn />} />
               
               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
               <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
