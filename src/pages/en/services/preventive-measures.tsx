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

const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services/preventive-measures";
const TITLE = "Preventive Measures Lawyer Bucharest - Immediate Intervention | Bogdan Lamatic";
const DESCRIPTION =
  "Preventive measures lawyer Bucharest - police custody, judicial control, house arrest, pre-trial detention. 18+ years of experience. Call now!";

const FAQ = [
  {
    q: "What is the difference between judicial control, house arrest and pre-trial detention?",
    a: "Judicial control does not involve detention, but imposes obligations and possible restrictions. House arrest is a custodial measure served at a designated address. Pre-trial detention means deprivation of liberty in a detention facility. The Criminal Procedure Code includes all of these among preventive measures.",
  },
  {
    q: "How long can police custody last?",
    a: "Police custody may be ordered for no more than 24 hours. Once it expires, the person cannot be held further on the basis of the same custody measure. If another preventive measure is sought, the procedure provided for that measure must be followed.",
  },
  {
    q: "How long can pre-trial detention last?",
    a: "During the criminal investigation, pre-trial detention may initially be ordered for up to 30 days and may be extended under the conditions of the law, without the total duration at this stage exceeding 180 days. The rules applicable at the other stages of the criminal trial are distinct.",
  },
  {
    q: "How is a preventive measure challenged?",
    a: "It depends on the measure ordered, the authority that ordered it, the act by which it was ordered and the stage of the proceedings. Articles 204, 205 and 206 of the Criminal Procedure Code govern appeals against rulings on preventive measures at the different stages, while Article 213 governs the remedy against judicial control ordered by the prosecutor. The deadlines can be very short.",
  },
  {
    q: "Can a preventive measure be replaced with a lighter one?",
    a: "Yes, if the conditions provided by law are met. Article 242 of the Criminal Procedure Code governs both the revocation of preventive measures and the replacement of a measure with a lighter one. The fact that this possibility exists does not mean any request will be granted. The grounds of the measure, the development of the case and the procedural conduct must be analysed concretely.",
  },
  {
    q: "Who can order pre-trial detention or house arrest?",
    a: "Pre-trial detention and house arrest fall within the competence of the judge or the court, depending on the procedural stage and the applicable procedure. The prosecutor may make a proposal in the situations provided by law, but cannot order pre-trial detention himself.",
  },
  {
    q: "What obligations can be imposed through judicial control?",
    a: "Judicial control involves the obligations provided by Article 215 of the Criminal Procedure Code and may include, under the conditions of the law, additional restrictions adapted to the case. These may concern appearing before the judicial authority, reporting to the police, changing residence, travel, contact with certain persons and certain activities. The exact obligations must be checked in the act ordering the measure.",
  },
  {
    q: "Can I leave house arrest for work or medical treatment?",
    a: "In the situations and under the conditions provided by law, permission may be requested to leave the premises for a determined period and for a justified purpose. There is no automatic approval. The request must be analysed and argued according to the concrete circumstances.",
  },
  {
    q: "How much does a lawyer cost for a preventive measure?",
    a: "The fee depends on urgency, the complexity of the case, the volume of documents, the preventive measure, the procedural stage, the activities required and the number of hearings. I offer a first free discussion to assess the situation, and before taking on the mandate I explain the fee and the services included.",
  },
  {
    q: "Will you personally represent me?",
    a: "Yes. I handle the case personally and remain your point-of-contact lawyer. If the situation requires cooperation with other professionals, I personally coordinate the defence strategy.",
  },
  {
    q: "Can the family contact the lawyer if the person is in police custody?",
    a: "Yes. Very often, in a custody situation, the first person to look for a lawyer is a family member. Tell me who was taken into custody, where they are, when it happened, what information you received and, if you know it, which authority is handling the case. You do not have to wait until you have all the documents.",
  },
];

