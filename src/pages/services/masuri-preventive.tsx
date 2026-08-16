import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import { servedAreasSchema } from "@/lib/areaServed";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import GoogleReviewCard from "@/components/services/GoogleReviewCard";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";
import SubServiceLinkButton from "@/components/services/SubServiceLinkButton";
import ServiceFaq from "@/components/services/ServiceFaq";

const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/masuri-preventive";
const TITLE = "Avocat Măsuri Preventive București - Intervenție Imediată | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat măsuri preventive București - reținere, control judiciar, arest la domiciliu, arestare preventivă. 18+ ani experiență. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre controlul judiciar, arestul la domiciliu și arestarea preventivă?",
    a: "Controlul judiciar este o măsură care nu presupune detenția, dar impune obligații și eventuale restricții. Arestul la domiciliu este o măsură privativă de libertate executată în imobilul stabilit. Arestarea preventivă presupune privarea de libertate într-un loc de deținere. Codul de procedură penală include toate aceste măsuri în categoria măsurilor preventive.",
  },
  {
    q: "Cât poate dura reținerea?",
    a: "Reținerea poate fi dispusă pentru cel mult 24 de ore. După expirarea acesteia, persoana nu poate fi ținută în continuare în baza aceleiași măsuri de reținere. Dacă se urmărește aplicarea unei alte măsuri preventive, trebuie respectată procedura prevăzută pentru acea măsură.",
  },
  {
    q: "Cât poate dura arestarea preventivă?",
    a: "În cursul urmăririi penale, arestarea preventivă poate fi dispusă inițial pentru maximum 30 de zile și poate fi prelungită în condițiile legii, fără ca durata totală în această etapă să depășească 180 de zile. Regimul aplicabil în celelalte etape ale procesului penal este distinct.",
  },
  {
    q: "Cum se contestă o măsură preventivă?",
    a: "Depinde de măsura dispusă, de organul care a dispus-o, de actul prin care a fost dispusă și de etapa procesului penal. Art. 204, 205 și 206 CPP reglementează contestațiile împotriva încheierilor privind măsurile preventive în diferitele etape ale procesului, iar art. 213 reglementează calea de atac împotriva controlului judiciar dispus de procuror. Termenele pot fi foarte scurte.",
  },
  {
    q: "Poate fi înlocuită o măsură preventivă cu una mai ușoară?",
    a: "Da, dacă sunt îndeplinite condițiile prevăzute de lege. Art. 242 CPP reglementează atât revocarea măsurilor preventive, cât și înlocuirea unei măsuri cu o măsură mai ușoară. Faptul că această posibilitate există în lege nu înseamnă că orice cerere va fi admisă. Trebuie analizate concret temeiurile măsurii, evoluția cauzei și conduita procesuală.",
  },
  {
    q: "Cine poate dispune arestarea preventivă sau arestul la domiciliu?",
    a: "Arestarea preventivă și arestul la domiciliu sunt măsuri aflate în competența judecătorului sau a instanței, în funcție de etapa procesuală și procedura aplicabilă. Procurorul poate formula propunerea în situațiile prevăzute de lege, însă nu poate dispune el însuși arestarea preventivă.",
  },
  {
    q: "Ce obligații pot fi impuse prin control judiciar?",
    a: "Controlul judiciar presupune obligații prevăzute de art. 215 CPP și poate include, în condițiile legii, restricții suplimentare adaptate cauzei. Pot fi vizate prezentarea la organul judiciar, prezentarea la poliție, schimbarea locuinței, deplasările, contactul cu anumite persoane și anumite activități. Obligațiile exacte trebuie verificate în actul prin care măsura a fost dispusă.",
  },
  {
    q: "Pot ieși din arest la domiciliu pentru muncă sau tratament medical?",
    a: "În situațiile și condițiile prevăzute de lege poate fi solicitată permisiunea de a părăsi imobilul pentru o perioadă determinată și într-un scop justificat. Nu există însă o aprobare automată. Cererea trebuie analizată și argumentată în funcție de circumstanțele concrete.",
  },
  {
    q: "Cât costă un avocat pentru o măsură preventivă?",
    a: "Onorariul depinde de urgență, complexitatea cauzei, volumul documentelor, măsura preventivă, etapa procesuală, activitățile necesare și numărul termenelor. Ofer o primă discuție gratuită pentru evaluarea situației, iar înainte de preluarea mandatului explic onorariul și serviciile incluse.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră?",
    a: "Da. Mă ocup personal de dosar și rămân avocatul tău de contact. Dacă situația necesită colaborarea cu alți profesioniști, coordonez personal strategia de apărare.",
  },
  {
    q: "Poate familia să contacteze avocatul dacă persoana este reținută?",
    a: "Da. Foarte des, în cazul unei rețineri, prima persoană care caută avocatul este un membru al familiei. Spune-mi cine a fost reținut, unde se află, când s-a întâmplat, ce informații ai primit și, dacă știi, ce structură instrumentează dosarul. Nu trebuie să aștepți până când ai toate actele.",
  },
];

