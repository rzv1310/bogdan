import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";

import RelatedServices from "@/components/RelatedServices";
import ServiceSubServices from "@/components/services/ServiceSubServices";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
const PAGE_URL = "https://avocatpenalbucuresti.ro/servicii/urmarire-penala";
const TITLE = "Avocat Urmărire Penală București - Apărare din Prima Oră | Bogdan Lamatic";
const DESCRIPTION =
  "Avocat urmărire penală București - apărare din prima oră: audieri, reținere, arestare preventivă, percheziții. 18+ ani experiență. Sună acum!";

const FAQ = [
  {
    q: "Care este diferența dintre suspect și inculpat?",
    a: "Suspectul este persoana față de care există indicii că a comis fapta cercetată (art. 307 CPP), dar împotriva sa nu s-a pus încă în mișcare acțiunea penală. Inculpatul este persoana față de care s-a dispus punerea în mișcare a acțiunii penale (art. 309 CPP) și care devine parte în procesul penal, cu drepturi procesuale mai extinse.",
  },
  {
    q: "Sunt obligat să mă prezint la audiere dacă primesc o citație?",
    a: "Da, prezentarea este, în principiu, obligatorie. Neprezentarea nejustificată poate avea consecințe, inclusiv aducerea silită. Recomand să mă contactați înainte de data fixată, pentru pregătirea declarației.",
  },
  {
    q: "Pot refuza să dau declarații pe parcursul urmăririi penale?",
    a: "Da. Suspectul și inculpatul au dreptul de a nu da nicio declarație, fără nicio consecință defavorabilă din acest refuz (art. 83 lit. a, coroborat cu art. 78 CPP). Decizia de a declara sau nu se ia întotdeauna în funcție de strategia de apărare din dosar.",
  },
  {
    q: "Cât costă un avocat pentru faza de urmărire penală?",
    a: "Onorariul depinde de complexitatea cauzei și de etapa în care intervin. Ofer o primă discuție gratuită, în urma căreia stabilim un tarif estimativ transparent, prevăzut integral în contract. Sunați-mă la +40 (31) 632 01 83.",
  },
  {
    q: "Ce se întâmplă dacă sunt reținut sau se propune arestarea mea preventivă?",
    a: "Reținerea nu poate depăși 24 de ore. Dacă procurorul propune arestarea preventivă, cauza ajunge în fața unui judecător de drepturi și libertăți, unde formulez apărări concrete pentru respingerea propunerii sau pentru o măsură preventivă mai puțin restrictivă, precum controlul judiciar.",
  },
  {
    q: "Pot avea avocat chiar dacă nu am fost încă citat oficial, dar știu că sunt vizat într-un dosar?",
    a: "Da. Puteți solicita asistență juridică din faza incipientă, înainte de orice citație oficială - este, de altfel, momentul cel mai potrivit pentru a construi o apărare solidă.",
  },
  {
    q: "Cât durează, de regulă, urmărirea penală?",
    a: "Legea nu prevede un termen maxim general pentru toate cazurile; durata depinde de complexitatea dosarului, numărul probelor și tipul infracțiunii. Voi urmări permanent stadiul dosarului și voi acționa pentru evitarea tergiversărilor nejustificate.",
  },
  {
    q: "Ce se întâmplă la finalul urmăririi penale?",
    a: "Procurorul poate dispune clasarea cauzei, renunțarea la urmărirea penală sau trimiterea dosarului în judecată. Fiecare dintre aceste soluții depinde de probele administrate și de argumentele aduse pe parcursul anchetei - motiv pentru care apărarea construită încă din primele audieri contează direct asupra rezultatului final.",
  },
  {
    q: "Mă reprezentați chiar dumneavoastră sau trimiteți pe altcineva din echipă?",
    a: "Mă ocup personal de dosar, de la prima discuție până la soluția procurorului și, dacă e cazul, în instanță. Rămân avocatul dumneavoastră de contact pe tot parcursul cauzei.",
  },
];

