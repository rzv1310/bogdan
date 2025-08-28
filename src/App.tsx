import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "@/context/language";

// Eager load critical pages for maximum stability
import Index from "./pages/Index";
import Layout from "./components/layout/Layout";

// Eager load main service pages for reliability
import CriminalitateEconomica from "./pages/services/criminalitate-economica";
import CoruptieSiFunctiePublica from "./pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice";
import InvestigatiiCripto from "./pages/services/investigatii-privind-activele-cripto";
import CauzeDroguri from "./pages/services/cauze-penale-privind-droguri";
import SpalareDeBani from "./pages/services/spalare-de-bani-si-ascundere-de-bunuri";
import Malpraxis from "./pages/services/neglijenta-profesionala-si-malpraxis";
import InfractiuniRutiere from "./pages/services/infractiuni-rutiere-cu-victime";
import RaspunderePenalaMunca from "./pages/services/raspundere-penala-incidente-locul-de-munca";
import ReprezentareaVictimelor from "./pages/services/reprezentarea-victimelor-in-procese-penale";

// Lazy load only non-critical pages
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const CalculatorDespagubiri = lazy(() => import("./pages/CalculatorDespagubiri"));
const TermeniSiConditii = lazy(() => import("./pages/termeni-si-conditii"));
const GDPR = lazy(() => import("./pages/gdpr"));
const PoliticaCookies = lazy(() => import("./pages/politica-cookies"));

// Lazy load English pages
const EnIndex = lazy(() => import("./pages/en"));
const ContactEn = lazy(() => import("./pages/en/contact"));
const BlogEn = lazy(() => import("./pages/en/blog"));
const FinancialCrimeEn = lazy(() => import("./pages/en/services/financial-crime"));
const CorruptionPublicOfficeEn = lazy(() => import("./pages/en/services/corruption-and-public-office-offenses"));
const CryptoInvestigationsEn = lazy(() => import("./pages/en/services/crypto-asset-investigations"));
const DrugOffensesEn = lazy(() => import("./pages/en/services/drug-offenses"));
const MoneyLaunderingEn = lazy(() => import("./pages/en/services/money-laundering-and-asset-concealment"));
const MalpracticeEn = lazy(() => import("./pages/en/services/professional-negligence-and-malpractice"));
const RoadTrafficEn = lazy(() => import("./pages/en/services/road-traffic-offenses"));
const WorkplaceLiabilityEn = lazy(() => import("./pages/en/services/workplace-criminal-liability"));
const VictimRepresentationEn = lazy(() => import("./pages/en/services/victim-representation-in-criminal-cases"));
const TermsAndConditionsEn = lazy(() => import("./pages/en/terms-and-conditions"));
const GDPRen = lazy(() => import("./pages/en/gdpr"));
const CookiePolicyEn = lazy(() => import("./pages/en/cookie-policy"));

// Loading component for lazy routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-pulse text-muted-foreground">Se încarcă...</div>
  </div>
);
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
              <Route path="/despre-mine" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
              <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
              <Route path="/calculator-despagubiri" element={<Suspense fallback={<PageLoader />}><CalculatorDespagubiri /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
              <Route path="/servicii/criminalitate-economica" element={<CriminalitateEconomica />} />
              <Route path="/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice" element={<CoruptieSiFunctiePublica />} />
              <Route path="/servicii/investigatii-privind-activele-cripto" element={<InvestigatiiCripto />} />
              <Route path="/servicii/cauze-penale-privind-droguri" element={<CauzeDroguri />} />
              <Route path="/servicii/spalare-de-bani-si-ascundere-de-bunuri" element={<SpalareDeBani />} />
              <Route path="/servicii/neglijenta-profesionala-si-malpraxis" element={<Malpraxis />} />
              <Route path="/servicii/infractiuni-rutiere-cu-victime" element={<InfractiuniRutiere />} />
              <Route path="/servicii/raspundere-penala-incidente-locul-de-munca" element={<RaspunderePenalaMunca />} />
              <Route path="/servicii/reprezentarea-victimelor-in-procese-penale" element={<ReprezentareaVictimelor />} />
              <Route path="/termeni-si-conditii" element={<Suspense fallback={<PageLoader />}><TermeniSiConditii /></Suspense>} />
              <Route path="/gdpr" element={<Suspense fallback={<PageLoader />}><GDPR /></Suspense>} />
              <Route path="/politica-cookies" element={<Suspense fallback={<PageLoader />}><PoliticaCookies /></Suspense>} />

               {/* EN routes */}
               <Route path="/en" element={<Suspense fallback={<PageLoader />}><EnIndex /></Suspense>} />
               <Route path="/en/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
               <Route path="/en/blog" element={<Suspense fallback={<PageLoader />}><BlogEn /></Suspense>} />
               <Route path="/en/contact" element={<Suspense fallback={<PageLoader />}><ContactEn /></Suspense>} />
               <Route path="/en/terms-and-conditions" element={<Suspense fallback={<PageLoader />}><TermsAndConditionsEn /></Suspense>} />
               <Route path="/en/gdpr" element={<Suspense fallback={<PageLoader />}><GDPRen /></Suspense>} />
               <Route path="/en/cookie-policy" element={<Suspense fallback={<PageLoader />}><CookiePolicyEn /></Suspense>} />
               <Route path="/en/services/financial-crime" element={<Suspense fallback={<PageLoader />}><FinancialCrimeEn /></Suspense>} />
               <Route path="/en/services/corruption-and-public-office-offenses" element={<Suspense fallback={<PageLoader />}><CorruptionPublicOfficeEn /></Suspense>} />
               <Route path="/en/services/crypto-asset-investigations" element={<Suspense fallback={<PageLoader />}><CryptoInvestigationsEn /></Suspense>} />
               <Route path="/en/services/drug-offenses" element={<Suspense fallback={<PageLoader />}><DrugOffensesEn /></Suspense>} />
               <Route path="/en/services/money-laundering-and-asset-concealment" element={<Suspense fallback={<PageLoader />}><MoneyLaunderingEn /></Suspense>} />
               <Route path="/en/services/professional-negligence-and-malpractice" element={<Suspense fallback={<PageLoader />}><MalpracticeEn /></Suspense>} />
               <Route path="/en/services/road-traffic-offenses" element={<Suspense fallback={<PageLoader />}><RoadTrafficEn /></Suspense>} />
               <Route path="/en/services/workplace-criminal-liability" element={<Suspense fallback={<PageLoader />}><WorkplaceLiabilityEn /></Suspense>} />
               <Route path="/en/services/victim-representation-in-criminal-cases" element={<Suspense fallback={<PageLoader />}><VictimRepresentationEn /></Suspense>} />
               
               {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
               <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
