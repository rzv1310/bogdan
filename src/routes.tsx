import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/layout/Layout";
import RouteErrorBoundary from "./components/RouteErrorBoundary";
import RouteFallback from "./components/RouteFallback";
import { lazyRoute } from "./lib/lazyRoute";


// Everything except the homepage is code-split, so the initial JS payload only
// carries the code needed for the landing page.
const NotFound = lazyRoute(() => import("./pages/NotFound"));
const About = lazyRoute(() => import("./pages/About"));
const Blog = lazyRoute(() => import("./pages/Blog"));
const Contact = lazyRoute(() => import("./pages/Contact"));
const CriminalitateEconomica = lazyRoute(() => import("./pages/services/criminalitate-economica"));
const CoruptieSiFunctiePublica = lazyRoute(
  () => import("./pages/services/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice"),
);
const InvestigatiiCripto = lazyRoute(() => import("./pages/services/investigatii-privind-activele-cripto"));
const CauzeDroguri = lazyRoute(() => import("./pages/services/cauze-penale-privind-droguri"));
const SpalareDeBani = lazyRoute(() => import("./pages/services/spalare-de-bani-si-ascundere-de-bunuri"));
const Malpraxis = lazyRoute(() => import("./pages/services/neglijenta-profesionala-si-malpraxis"));
const InfractiuniRutiere = lazyRoute(() => import("./pages/services/infractiuni-rutiere-cu-victime"));
const RaspunderePenalaMunca = lazyRoute(
  () => import("./pages/services/raspundere-penala-incidente-locul-de-munca"),
);
const ReprezentareaVictimelor = lazyRoute(
  () => import("./pages/services/reprezentarea-victimelor-in-procese-penale"),
);
const UrmarirePenala = lazyRoute(() => import("./pages/services/urmarire-penala"));
const MasuriPreventive = lazyRoute(() => import("./pages/services/masuri-preventive"));
const InfractiuniContraPersoanei = lazyRoute(() => import("./pages/services/infractiuni-contra-persoanei"));
const AudierePolitieParchet = lazyRoute(() => import("./pages/services/audiere-politie-parchet"));
const PerchezitieDomiciliara = lazyRoute(() => import("./pages/services/perchezitie-domiciliara"));
const PerchezitieInformatica = lazyRoute(() => import("./pages/services/perchezitie-informatica"));
const AvocatDiicot = lazyRoute(() => import("./pages/services/avocat-diicot"));
const AvocatDna = lazyRoute(() => import("./pages/services/avocat-dna"));
const CalculatorDespagubiri = lazyRoute(() => import("./pages/CalculatorDespagubiri"));
const ServiciiPage = lazyRoute(() => import("./pages/servicii"));
const TermeniSiConditii = lazyRoute(() => import("./pages/termeni-si-conditii"));
const GDPR = lazyRoute(() => import("./pages/gdpr"));
const PoliticaCookies = lazyRoute(() => import("./pages/politica-cookies"));
const Sitemap = lazyRoute(() => import("./pages/Sitemap"));

// EN pages
const EnIndex = lazyRoute(() => import("./pages/en"));
const HomepageEN = lazyRoute(() => import("./pages/en/Homepage"));
const ContactEn = lazyRoute(() => import("./pages/en/contact"));
const BlogEn = lazyRoute(() => import("./pages/en/blog"));
const FinancialCrimeEn = lazyRoute(() => import("./pages/en/services/financial-crime"));
const CorruptionPublicOfficeEn = lazyRoute(
  () => import("./pages/en/services/corruption-and-public-office-offenses"),
);
const CryptoInvestigationsEn = lazyRoute(() => import("./pages/en/services/crypto-asset-investigations"));
const DrugOffensesEn = lazyRoute(() => import("./pages/en/services/drug-offenses"));
const MoneyLaunderingEn = lazyRoute(
  () => import("./pages/en/services/money-laundering-and-asset-concealment"),
);
const MalpracticeEn = lazyRoute(
  () => import("./pages/en/services/professional-negligence-and-malpractice"),
);
const RoadTrafficEn = lazyRoute(() => import("./pages/en/services/road-traffic-offenses"));
const WorkplaceLiabilityEn = lazyRoute(() => import("./pages/en/services/workplace-criminal-liability"));
const VictimRepresentationEn = lazyRoute(
  () => import("./pages/en/services/victim-representation-in-criminal-cases"),
);
const EnServicesPage = lazyRoute(() => import("./pages/en/services"));
const TermsAndConditionsEn = lazyRoute(() => import("./pages/en/terms-and-conditions"));
const GDPRen = lazyRoute(() => import("./pages/en/gdpr"));
const CookiePolicyEn = lazyRoute(() => import("./pages/en/cookie-policy"));
const SitemapEn = lazyRoute(() => import("./pages/en/sitemap"));
const CriminalInvestigationEn = lazyRoute(() => import("./pages/en/services/criminal-investigation"));
const PreventiveMeasuresEn = lazyRoute(() => import("./pages/en/services/preventive-measures"));
const OffensesAgainstPersonsEn = lazyRoute(() => import("./pages/en/services/offenses-against-persons"));
const PoliceQuestioningEn = lazyRoute(() => import("./pages/en/services/police-prosecutor-questioning"));
const HomeSearchEn = lazyRoute(() => import("./pages/en/services/home-search"));
const ComputerSearchEn = lazyRoute(() => import("./pages/en/services/computer-search"));
const DiicotLawyerEn = lazyRoute(() => import("./pages/en/services/diicot-lawyer"));
const DnaLawyerEn = lazyRoute(() => import("./pages/en/services/dna-lawyer"));
const CompensationCalculatorEn = lazyRoute(() => import("./pages/en/compensation-calculator"));

export default function AppRoutes() {
  return (
    <RouteErrorBoundary>
    <Suspense fallback={<RouteFallback />}>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/despre-mine" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/calculator-despagubiri" element={<CalculatorDespagubiri />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicii" element={<ServiciiPage />} />
          <Route path="/servicii/urmarire-penala" element={<UrmarirePenala />} />
          <Route path="/servicii/masuri-preventive" element={<MasuriPreventive />} />
          <Route path="/servicii/infractiuni-contra-persoanei" element={<InfractiuniContraPersoanei />} />
          <Route path="/servicii/audiere-politie-parchet" element={<AudierePolitieParchet />} />
          <Route path="/servicii/perchezitie-domiciliara" element={<PerchezitieDomiciliara />} />
          <Route path="/servicii/perchezitie-informatica" element={<PerchezitieInformatica />} />
          <Route path="/servicii/avocat-diicot" element={<AvocatDiicot />} />
          <Route path="/servicii/avocat-dna" element={<AvocatDna />} />
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
          <Route path="/harta-site" element={<Sitemap />} />

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
          <Route path="/en/sitemap" element={<SitemapEn />} />
          <Route path="/en/compensation-calculator" element={<CompensationCalculatorEn />} />
          <Route path="/en/services" element={<EnServicesPage />} />
          <Route path="/en/services/criminal-investigation" element={<CriminalInvestigationEn />} />
          <Route path="/en/services/preventive-measures" element={<PreventiveMeasuresEn />} />
          <Route path="/en/services/offenses-against-persons" element={<OffensesAgainstPersonsEn />} />
          <Route path="/en/services/police-prosecutor-questioning" element={<PoliceQuestioningEn />} />
          <Route path="/en/services/home-search" element={<HomeSearchEn />} />
          <Route path="/en/services/computer-search" element={<ComputerSearchEn />} />
          <Route path="/en/services/diicot-lawyer" element={<DiicotLawyerEn />} />
          <Route path="/en/services/dna-lawyer" element={<DnaLawyerEn />} />
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
  );
}
