import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LanguageProvider } from "@/context/language";
import Layout from "./components/layout/Layout";

// Performance optimization: Lazy load all pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));
const CriminalitateEconomica = lazy(() => import("./pages/services/criminalitate-economica"));
const CoruptieSiFunctiePublica = lazy(() => import("./pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice"));
const InvestigatiiCripto = lazy(() => import("./pages/services/investigatii-privind-activele-cripto"));
const CauzeDroguri = lazy(() => import("./pages/services/cauze-penale-privind-droguri"));
const SpalareDeBani = lazy(() => import("./pages/services/spalare-de-bani-si-ascundere-de-bunuri"));
const Malpraxis = lazy(() => import("./pages/services/neglijenta-profesionala-si-malpraxis"));
const InfractiuniRutiere = lazy(() => import("./pages/services/infractiuni-rutiere-cu-victime"));
const RaspunderePenalaMunca = lazy(() => import("./pages/services/raspundere-penala-incidente-locul-de-munca"));
const ReprezentareaVictimelor = lazy(() => import("./pages/services/reprezentarea-victimelor-in-procese-penale"));
const CalculatorDespagubiri = lazy(() => import("./pages/CalculatorDespagubiri"));
const TermeniSiConditii = lazy(() => import("./pages/termeni-si-conditii"));
const GDPR = lazy(() => import("./pages/gdpr"));
const PoliticaCookies = lazy(() => import("./pages/politica-cookies"));

// EN pages
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

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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
          <Suspense fallback={<PageLoader />}>
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

               {/* EN routes */}
               <Route path="/en" element={<EnIndex />}>
                 <Route index element={<Index />} />
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
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
