import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/offenses-against-persons";
const TITLE = "Offenses Against Persons Lawyer Bucharest - Defending Your Freedom and Reputation | Bogdan Lamatic";
const DESCRIPTION =
  "Offenses against persons lawyer Bucharest - assault, threats, bodily harm, sexual offenses. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between assault and bodily harm?",
    a: "Assault or other acts of violence (art. 193 Criminal Code) generally involves physical suffering without significant days of medical care, while bodily harm (art. 194 Criminal Code) is an aggravated form, with more serious consequences to the victim's health - the correct legal classification directly influences the seriousness of the charge.",
  },
  {
    q: "Can a complaint for violence or threats be withdrawn?",
    a: "For some offenses in this category, criminal proceedings are initiated only upon the prior complaint of the injured person, and withdrawing the complaint or a settlement between the parties can lead to termination of the criminal proceedings. It depends on the specific offense and the procedural stage - I analyze this individually for each case.",
  },
  {
    q: "What happens if I received a protection order?",
    a: "A protection order imposes obligations and restrictions (for example, keeping a distance from the victim) that must be complied with immediately. There is a possibility to challenge it or request its modification, under the conditions set by law.",
  },
  {
    q: "Can I be held in pre-trial detention for a domestic violence or sexual offense accusation?",
    a: "Yes, depending on the seriousness of the act and the circumstances, the prosecutor may propose a preventive measure, including pre-trial detention. I step in immediately to build a solid defense from the moment the measure is proposed.",
  },
  {
    q: "How much does a lawyer cost for an offenses against persons case?",
    a: "The fee depends on the complexity of the case and the procedural stage. I offer a free initial discussion to assess your situation and a transparent estimated fee, fully set out in the contract. Call me at +40 (31) 632 01 83.",
  },
  {
    q: "I am wrongly accused - what can I do?",
    a: "Contact me immediately. I will review the complaint, the existing evidence and statements, challenge the unfounded elements and build a defense based on facts, witnesses and expert reports where relevant.",
  },
  {
    q: "Will you personally represent me at hearings and in court?",
    a: "Yes, I handle the case personally, from the first discussion to the final outcome, remaining your point of contact throughout the case.",
  },
];

