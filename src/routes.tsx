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
const DetinereDroguriConsumPropriu = lazyRoute(
  () => import("./pages/services/detinere-droguri-consum-propriu"),
);
const GrupInfractionalOrganizat = lazyRoute(
  () => import("./pages/services/grup-infractional-organizat"),
);
const TraficInternationalDeDroguri = lazyRoute(
  () => import("./pages/services/trafic-international-de-droguri"),
);

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
const Retinere24Ore = lazyRoute(() => import("./pages/services/retinere-24-ore"));
const ArestPreventiv = lazyRoute(() => import("./pages/services/arest-preventiv"));
const ControlJudiciar = lazyRoute(() => import("./pages/services/control-judiciar"));
const ArestLaDomiciliu = lazyRoute(() => import("./pages/services/arest-la-domiciliu"));
const EvaziuneFiscala = lazyRoute(() => import("./pages/services/evaziune-fiscala"));
const InselaciuneFrauda = lazyRoute(() => import("./pages/services/inselaciune-frauda"));
const Delapidare = lazyRoute(() => import("./pages/services/delapidare"));
const FalsSiUzDeFals = lazyRoute(() => import("./pages/services/fals-si-uz-de-fals"));
const BancrutaFrauduloasa = lazyRoute(() => import("./pages/services/bancruta-frauduloasa"));
const FraudaInformatica = lazyRoute(() => import("./pages/services/frauda-informatica"));
const FonduriEuropene = lazyRoute(() => import("./pages/services/fonduri-europene"));
const TaxEvasionEn = lazyRoute(() => import("./pages/en/services/tax-evasion"));
const FraudAndDeceptionEn = lazyRoute(() => import("./pages/en/services/fraud-and-deception"));
const EmbezzlementEn = lazyRoute(() => import("./pages/en/services/embezzlement"));
const ForgeryEn = lazyRoute(() => import("./pages/en/services/forgery-and-use-of-forgery"));
const FraudulentBankruptcyEn = lazyRoute(() => import("./pages/en/services/fraudulent-bankruptcy"));
const ComputerFraudEn = lazyRoute(() => import("./pages/en/services/computer-fraud"));
const EuFundsFraudEn = lazyRoute(() => import("./pages/en/services/eu-funds-fraud"));
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
const DrugPossessionPersonalUseEn = lazyRoute(
  () => import("./pages/en/services/drug-possession-personal-use"),
);
const OrganizedCrimeGroupEn = lazyRoute(
  () => import("./pages/en/services/organized-crime-group"),
);
const SechestruAsigurator = lazyRoute(() => import("./pages/services/sechestru-asigurator"));
const Confiscare = lazyRoute(() => import("./pages/services/confiscare"));
const AssetFreezingOrderEn = lazyRoute(() => import("./pages/en/services/asset-freezing-order"));
const ConfiscationEn = lazyRoute(() => import("./pages/en/services/confiscation"));
const InternationalDrugTraffickingEn = lazyRoute(
  () => import("./pages/en/services/international-drug-trafficking"),
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
const DareLuareDeMita = lazyRoute(() => import("./pages/services/dare-luare-de-mita"));
const TraficDeInfluenta = lazyRoute(() => import("./pages/services/trafic-de-influenta"));
const AbuzInServiciu = lazyRoute(() => import("./pages/services/abuz-in-serviciu"));
const NeglijentaInServiciu = lazyRoute(() => import("./pages/services/neglijenta-in-serviciu"));
const ConflictDeInterese = lazyRoute(() => import("./pages/services/conflict-de-interese"));
const BriberyGivingAndTakingEn = lazyRoute(() => import("./pages/en/services/bribery-giving-and-taking"));
const InfluencePeddlingEn = lazyRoute(() => import("./pages/en/services/influence-peddling"));
const AbuseOfOfficeEn = lazyRoute(() => import("./pages/en/services/abuse-of-office"));
const NegligenceInOfficeEn = lazyRoute(() => import("./pages/en/services/negligence-in-office"));
const ConflictOfInterestEn = lazyRoute(() => import("./pages/en/services/conflict-of-interest"));
const OffensesAgainstPersonsEn = lazyRoute(() => import("./pages/en/services/offenses-against-persons"));
const PoliceQuestioningEn = lazyRoute(() => import("./pages/en/services/police-prosecutor-questioning"));
const HomeSearchEn = lazyRoute(() => import("./pages/en/services/home-search"));
const ComputerSearchEn = lazyRoute(() => import("./pages/en/services/computer-search"));
const DiicotLawyerEn = lazyRoute(() => import("./pages/en/services/diicot-lawyer"));
const DnaLawyerEn = lazyRoute(() => import("./pages/en/services/dna-lawyer"));
const PoliceCustody24HoursEn = lazyRoute(() => import("./pages/en/services/police-custody-24-hours"));
const PreTrialDetentionEn = lazyRoute(() => import("./pages/en/services/pre-trial-detention"));
const JudicialControlEn = lazyRoute(() => import("./pages/en/services/judicial-control"));
const HouseArrestEn = lazyRoute(() => import("./pages/en/services/house-arrest"));
const CompensationCalculatorEn = lazyRoute(() => import("./pages/en/compensation-calculator"));
const AlcoolLaVolan = lazyRoute(() => import("./pages/services/alcool-la-volan"));
const DrunkDrivingEn = lazyRoute(() => import("./pages/en/services/drunk-driving"));
const DroguriLaVolan = lazyRoute(() => import("./pages/services/droguri-la-volan"));
const DrugDrivingEn = lazyRoute(() => import("./pages/en/services/drug-driving"));
const ParasireaLoculuiAccidentului = lazyRoute(() => import("./pages/services/parasirea-locului-accidentului"));
const LeavingAccidentSceneEn = lazyRoute(() => import("./pages/en/services/leaving-the-accident-scene"));
const RefuzPrelevareProbe = lazyRoute(() => import("./pages/services/refuz-prelevare-probe-biologice"));
const RefusalBiologicalSamplesEn = lazyRoute(() => import("./pages/en/services/refusal-to-provide-biological-samples"));
const ConducereFaraPermis = lazyRoute(() => import("./pages/services/conducere-fara-permis"));
const DrivingWithoutLicenceEn = lazyRoute(() => import("./pages/en/services/driving-without-a-licence"));
const AccidentRutierCuVictime = lazyRoute(() => import("./pages/services/accident-rutier-cu-victime"));
const RoadAccidentWithVictimsEn = lazyRoute(() => import("./pages/en/services/road-accident-with-victims"));
const DespagubiriAccidentRutier = lazyRoute(() => import("./pages/services/despagubiri-accident-rutier"));
const RoadAccidentCompensationEn = lazyRoute(() => import("./pages/en/services/road-accident-compensation"));
const DespagubiriVatamareCorporala = lazyRoute(() => import("./pages/services/despagubiri-vatamare-corporala"));
const BodilyInjuryCompensationEn = lazyRoute(() => import("./pages/en/services/bodily-injury-compensation"));
const LoviriVatamareCorporala = lazyRoute(() => import("./pages/services/loviri-vatamare-corporala"));
const ViolentaDomestica = lazyRoute(() => import("./pages/services/violenta-domestica"));
const LipsireDeLibertateAmenintare = lazyRoute(() => import("./pages/services/lipsire-de-libertate-amenintare"));
const SantajHartuire = lazyRoute(() => import("./pages/services/santaj-hartuire"));
const ViolAgresiuneSexuala = lazyRoute(() => import("./pages/services/viol-agresiune-sexuala"));
const OmorUcidereDinCulpa = lazyRoute(() => import("./pages/services/omor-ucidere-din-culpa"));
const AssaultAndBodilyInjuryEn = lazyRoute(() => import("./pages/en/services/assault-and-bodily-injury"));
const DomesticViolenceEn = lazyRoute(() => import("./pages/en/services/domestic-violence"));
const UnlawfulDetentionAndThreatsEn = lazyRoute(() => import("./pages/en/services/unlawful-detention-and-threats"));
const BlackmailAndHarassmentEn = lazyRoute(() => import("./pages/en/services/blackmail-and-harassment"));
const RapeAndSexualAssaultEn = lazyRoute(() => import("./pages/en/services/rape-and-sexual-assault"));
const HomicideAndManslaughterEn = lazyRoute(() => import("./pages/en/services/homicide-and-manslaughter"));

// Malpractice sub-services
const DespagubiriMalpraxisMedical = lazyRoute(() => import("./pages/services/despagubiri-malpraxis-medical"));
const RaspunderePenalaMedic = lazyRoute(() => import("./pages/services/raspundere-penala-medic"));
const ComisiaDeMalpraxis = lazyRoute(() => import("./pages/services/comisia-de-malpraxis"));
const VatamareCorporalaDinCulpaMedicala = lazyRoute(() => import("./pages/services/vatamare-corporala-din-culpa-medicala"));
const UcidereDinCulpaMedicala = lazyRoute(() => import("./pages/services/ucidere-din-culpa-medicala"));
const PlangereColegiulMedicilor = lazyRoute(() => import("./pages/services/plangere-colegiul-medicilor"));
const MalpraxisStomatologic = lazyRoute(() => import("./pages/services/malpraxis-stomatologic"));
const MedicalMalpracticeCompensationEn = lazyRoute(() => import("./pages/en/services/medical-malpractice-compensation"));
const DoctorCriminalLiabilityEn = lazyRoute(() => import("./pages/en/services/doctor-criminal-liability"));
const MalpracticeCommitteeEn = lazyRoute(() => import("./pages/en/services/malpractice-committee"));
const MedicalNegligenceBodilyInjuryEn = lazyRoute(() => import("./pages/en/services/medical-negligence-bodily-injury"));
const MedicalNegligenceManslaughterEn = lazyRoute(() => import("./pages/en/services/medical-negligence-manslaughter"));
const ComplaintCollegeOfPhysiciansEn = lazyRoute(() => import("./pages/en/services/complaint-college-of-physicians"));
const DentalMalpracticeEn = lazyRoute(() => import("./pages/en/services/dental-malpractice"));


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
          <Route path="/servicii/retinere-24-ore" element={<Retinere24Ore />} />
          <Route path="/servicii/arest-preventiv" element={<ArestPreventiv />} />
          <Route path="/servicii/control-judiciar" element={<ControlJudiciar />} />
          <Route path="/servicii/arest-la-domiciliu" element={<ArestLaDomiciliu />} />
          <Route path="/servicii/criminalitate-economica" element={<CriminalitateEconomica />} />
          <Route path="/servicii/infractiuni-de-coruptie-si-fapte-legate-de-exercitarea-functiei-publice" element={<CoruptieSiFunctiePublica />} />
          <Route path="/servicii/investigatii-privind-activele-cripto" element={<InvestigatiiCripto />} />
          <Route path="/servicii/cauze-penale-privind-droguri" element={<CauzeDroguri />} />
          <Route path="/servicii/detinere-droguri-consum-propriu" element={<DetinereDroguriConsumPropriu />} />
          <Route path="/servicii/grup-infractional-organizat" element={<GrupInfractionalOrganizat />} />
          <Route path="/servicii/trafic-international-de-droguri" element={<TraficInternationalDeDroguri />} />
          <Route path="/servicii/sechestru-asigurator" element={<SechestruAsigurator />} />
          <Route path="/servicii/confiscare" element={<Confiscare />} />
          <Route path="/servicii/alcool-la-volan" element={<AlcoolLaVolan />} />
          <Route path="/servicii/droguri-la-volan" element={<DroguriLaVolan />} />
          <Route path="/servicii/parasirea-locului-accidentului" element={<ParasireaLoculuiAccidentului />} />
          <Route path="/servicii/refuz-prelevare-probe-biologice" element={<RefuzPrelevareProbe />} />
          <Route path="/servicii/conducere-fara-permis" element={<ConducereFaraPermis />} />
          <Route path="/servicii/accident-rutier-cu-victime" element={<AccidentRutierCuVictime />} />

          <Route path="/servicii/spalare-de-bani-si-ascundere-de-bunuri" element={<SpalareDeBani />} />
          <Route path="/servicii/neglijenta-profesionala-si-malpraxis" element={<Malpraxis />} />
          <Route path="/servicii/infractiuni-rutiere-cu-victime" element={<InfractiuniRutiere />} />
          <Route path="/servicii/raspundere-penala-incidente-locul-de-munca" element={<RaspunderePenalaMunca />} />
          <Route path="/servicii/reprezentarea-victimelor-in-procese-penale" element={<ReprezentareaVictimelor />} />
          <Route path="/servicii/despagubiri-accident-rutier" element={<DespagubiriAccidentRutier />} />
          <Route path="/servicii/despagubiri-vatamare-corporala" element={<DespagubiriVatamareCorporala />} />
          <Route path="/servicii/loviri-vatamare-corporala" element={<LoviriVatamareCorporala />} />
          <Route path="/servicii/violenta-domestica" element={<ViolentaDomestica />} />
          <Route path="/servicii/lipsire-de-libertate-amenintare" element={<LipsireDeLibertateAmenintare />} />
          <Route path="/servicii/santaj-hartuire" element={<SantajHartuire />} />
          <Route path="/servicii/viol-agresiune-sexuala" element={<ViolAgresiuneSexuala />} />
          <Route path="/servicii/omor-ucidere-din-culpa" element={<OmorUcidereDinCulpa />} />
          <Route path="/servicii/evaziune-fiscala" element={<EvaziuneFiscala />} />
          <Route path="/servicii/inselaciune-frauda" element={<InselaciuneFrauda />} />
          <Route path="/servicii/delapidare" element={<Delapidare />} />
          <Route path="/servicii/fals-si-uz-de-fals" element={<FalsSiUzDeFals />} />
          <Route path="/servicii/bancruta-frauduloasa" element={<BancrutaFrauduloasa />} />
          <Route path="/servicii/frauda-informatica" element={<FraudaInformatica />} />
          <Route path="/servicii/fonduri-europene" element={<FonduriEuropene />} />
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
          <Route path="/servicii/dare-luare-de-mita" element={<DareLuareDeMita />} />
          <Route path="/servicii/trafic-de-influenta" element={<TraficDeInfluenta />} />
          <Route path="/servicii/abuz-in-serviciu" element={<AbuzInServiciu />} />
          <Route path="/servicii/neglijenta-in-serviciu" element={<NeglijentaInServiciu />} />
          <Route path="/servicii/conflict-de-interese" element={<ConflictDeInterese />} />
          <Route path="/en/services/bribery-giving-and-taking" element={<BriberyGivingAndTakingEn />} />
          <Route path="/en/services/influence-peddling" element={<InfluencePeddlingEn />} />
          <Route path="/en/services/abuse-of-office" element={<AbuseOfOfficeEn />} />
          <Route path="/en/services/negligence-in-office" element={<NegligenceInOfficeEn />} />
          <Route path="/en/services/conflict-of-interest" element={<ConflictOfInterestEn />} />
          <Route path="/en/services/offenses-against-persons" element={<OffensesAgainstPersonsEn />} />
          <Route path="/en/services/police-prosecutor-questioning" element={<PoliceQuestioningEn />} />
          <Route path="/en/services/home-search" element={<HomeSearchEn />} />
          <Route path="/en/services/computer-search" element={<ComputerSearchEn />} />
          <Route path="/en/services/diicot-lawyer" element={<DiicotLawyerEn />} />
          <Route path="/en/services/dna-lawyer" element={<DnaLawyerEn />} />
          <Route path="/en/services/police-custody-24-hours" element={<PoliceCustody24HoursEn />} />
          <Route path="/en/services/pre-trial-detention" element={<PreTrialDetentionEn />} />
          <Route path="/en/services/judicial-control" element={<JudicialControlEn />} />
          <Route path="/en/services/house-arrest" element={<HouseArrestEn />} />
          <Route path="/en/services/financial-crime" element={<FinancialCrimeEn />} />
          <Route path="/en/services/tax-evasion" element={<TaxEvasionEn />} />
          <Route path="/en/services/fraud-and-deception" element={<FraudAndDeceptionEn />} />
          <Route path="/en/services/embezzlement" element={<EmbezzlementEn />} />
          <Route path="/en/services/forgery-and-use-of-forgery" element={<ForgeryEn />} />
          <Route path="/en/services/fraudulent-bankruptcy" element={<FraudulentBankruptcyEn />} />
          <Route path="/en/services/computer-fraud" element={<ComputerFraudEn />} />
          <Route path="/en/services/eu-funds-fraud" element={<EuFundsFraudEn />} />
          <Route path="/en/services/corruption-and-public-office-offenses" element={<CorruptionPublicOfficeEn />} />
          <Route path="/en/services/crypto-asset-investigations" element={<CryptoInvestigationsEn />} />
          <Route path="/en/services/drug-offenses" element={<DrugOffensesEn />} />
          <Route path="/en/services/drug-possession-personal-use" element={<DrugPossessionPersonalUseEn />} />
          <Route path="/en/services/organized-crime-group" element={<OrganizedCrimeGroupEn />} />
          <Route path="/en/services/international-drug-trafficking" element={<InternationalDrugTraffickingEn />} />
          <Route path="/en/services/asset-freezing-order" element={<AssetFreezingOrderEn />} />
          <Route path="/en/services/confiscation" element={<ConfiscationEn />} />

          <Route path="/en/services/money-laundering-and-asset-concealment" element={<MoneyLaunderingEn />} />
          <Route path="/en/services/professional-negligence-and-malpractice" element={<MalpracticeEn />} />
          <Route path="/en/services/road-traffic-offenses" element={<RoadTrafficEn />} />
          <Route path="/en/services/drunk-driving" element={<DrunkDrivingEn />} />
          <Route path="/en/services/drug-driving" element={<DrugDrivingEn />} />
          <Route path="/en/services/leaving-the-accident-scene" element={<LeavingAccidentSceneEn />} />
          <Route path="/en/services/refusal-to-provide-biological-samples" element={<RefusalBiologicalSamplesEn />} />
          <Route path="/en/services/driving-without-a-licence" element={<DrivingWithoutLicenceEn />} />
          <Route path="/en/services/road-accident-with-victims" element={<RoadAccidentWithVictimsEn />} />
          <Route path="/en/services/workplace-criminal-liability" element={<WorkplaceLiabilityEn />} />
          <Route path="/en/services/victim-representation-in-criminal-cases" element={<VictimRepresentationEn />} />
          <Route path="/en/services/road-accident-compensation" element={<RoadAccidentCompensationEn />} />
          <Route path="/en/services/bodily-injury-compensation" element={<BodilyInjuryCompensationEn />} />
          <Route path="/en/services/assault-and-bodily-injury" element={<AssaultAndBodilyInjuryEn />} />
          <Route path="/en/services/domestic-violence" element={<DomesticViolenceEn />} />
          <Route path="/en/services/unlawful-detention-and-threats" element={<UnlawfulDetentionAndThreatsEn />} />
          <Route path="/en/services/blackmail-and-harassment" element={<BlackmailAndHarassmentEn />} />
          <Route path="/en/services/rape-and-sexual-assault" element={<RapeAndSexualAssaultEn />} />
          <Route path="/en/services/homicide-and-manslaughter" element={<HomicideAndManslaughterEn />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
    </RouteErrorBoundary>

  );
}
