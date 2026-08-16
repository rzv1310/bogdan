import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { CTA_CLASS } from "@/lib/cta";
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
const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/criminal-investigation";
const TITLE = "Criminal Investigation Lawyer Bucharest - Defense From the First Hour | Bogdan Lamatic";
const DESCRIPTION =
  "Criminal investigation lawyer in Bucharest - defense from the first hour: hearings, detention, pre-trial arrest, searches. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between a suspect and a defendant?",
    a: "A suspect is a person against whom there are indications that they committed the act under investigation (art. 307 Criminal Procedure Code), but criminal proceedings have not yet been formally initiated against them. A defendant is a person against whom criminal proceedings have been formally initiated (art. 309 Criminal Procedure Code) and who becomes a party to the criminal trial, with broader procedural rights.",
  },
  {
    q: "Am I required to appear for a hearing if I receive a summons?",
    a: "Yes, appearing is, in principle, mandatory. Unjustified failure to appear can have consequences, including forced appearance. I recommend contacting me before the scheduled date so we can prepare the statement.",
  },
  {
    q: "Can I refuse to give statements during the criminal investigation?",
    a: "Yes. Suspects and defendants have the right to make no statement at all, without any adverse consequence resulting from this refusal (art. 83 letter a, corroborated with art. 78 of the Criminal Procedure Code). The decision to make a statement or not is always taken based on the defense strategy in the file.",
  },
  {
    q: "How much does a lawyer cost for the criminal investigation phase?",
    a: "The fee depends on the complexity of the case and the stage at which I get involved. I offer a free initial consultation, after which we agree on a transparent estimated fee, set out in full in the contract. Call me at +40 (31) 632 01 83.",
  },
  {
    q: "What happens if I am detained or my pre-trial arrest is proposed?",
    a: "Detention cannot exceed 24 hours. If the prosecutor proposes pre-trial arrest, the case reaches a judge for rights and liberties, where I present concrete defenses to have the proposal rejected or to obtain a less restrictive preventive measure, such as judicial control.",
  },
  {
    q: "Can I have a lawyer even if I have not yet been officially summoned but I know I am targeted in a case?",
    a: "Yes. You can request legal assistance from the earliest stage, before any official summons - this is, in fact, the best moment to build a solid defense.",
  },
  {
    q: "How long does the criminal investigation usually last?",
    a: "The law does not provide a general maximum term for all cases; the duration depends on the complexity of the file, the number of pieces of evidence and the type of offense. I will constantly monitor the status of the file and act to avoid unjustified delays.",
  },
  {
    q: "What happens at the end of the criminal investigation?",
    a: "The prosecutor may order the closing of the case, waiver of criminal prosecution, or referral of the case to trial. Each of these outcomes depends on the evidence gathered and the arguments raised during the investigation - which is why the defense built from the very first hearings has a direct impact on the final outcome.",
  },
  {
    q: "Will you represent me personally or send someone else from the team?",
    a: "I personally handle the file, from the first discussion to the prosecutor's decision and, if necessary, in court. I remain your point-of-contact lawyer throughout the case.",
  },
];

