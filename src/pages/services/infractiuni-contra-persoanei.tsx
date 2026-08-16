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
import ServiceFaq from "@/components/services/ServiceFaq";
const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/infractiuni-contra-persoanei";
const TITLE = "Avocat Infracțiuni Contra Persoanei București - Apăr Libertatea și Reputația Ta | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat infracțiuni contra persoanei București - violență, amenințare, vătămare corporală, infracțiuni sexuale. Experiență 18+ ani. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre lovire și vătămare corporală?",
    a: "Lovirea sau alte violențe (art. 193 CP) presupune, de regulă, o suferință fizică fără zile de îngrijiri medicale semnificative, în timp ce vătămarea corporală (art. 194 CP) implică o formă agravată, cu consecințe mai grave asupra sănătății victimei - încadrarea corectă influențează direct gravitatea acuzației.",
  },
  {
    q: "Se poate retrage o plângere pentru violență sau amenințare?",
    a: "Pentru unele fapte din această categorie, acțiunea penală se pune în mișcare la plângerea prealabilă a persoanei vătămate, iar retragerea plângerii sau împăcarea părților poate duce la încetarea procesului penal. Depinde de fapta concretă și de stadiul procesual - o analizez punctual pentru fiecare caz.",
  },
  {
    q: "Ce se întâmplă dacă am primit un ordin de protecție?",
    a: "Ordinul de protecție impune obligații și interdicții (de exemplu, distanța față de victimă) care trebuie respectate imediat. Există posibilitatea de a-l contesta sau de a solicita modificarea lui, în condițiile legii.",
  },
  {
    q: "Pot fi arestat preventiv pentru o acuzație de violență în familie sau infracțiune sexuală?",
    a: "Da, în funcție de gravitatea faptei și de circumstanțe, procurorul poate propune o măsură preventivă, inclusiv arestarea preventivă. Intervin imediat pentru a formula apărări solide încă din faza propunerii.",
  },
  {
    q: "Cât costă un avocat pentru o cauză de infracțiuni contra persoanei?",
    a: "Onorariul depinde de complexitatea cauzei și de etapa procesuală. Ofer o primă discuție gratuită pentru evaluarea situației și un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la +40 (31) 632 01 83.",
  },
  {
    q: "Sunt acuzat pe nedrept - ce pot face?",
    a: "Contactați-mă imediat. Voi analiza plângerea, probele existente și declarațiile, voi contesta elementele neîntemeiate și voi construi o apărare bazată pe fapte, martori și expertize, acolo unde este cazul.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră la audieri și în instanță?",
    a: "Da, mă ocup personal de dosar, de la prima discuție până la soluția finală, rămânând avocatul dumneavoastră de contact pe tot parcursul cauzei.",
  },
];

