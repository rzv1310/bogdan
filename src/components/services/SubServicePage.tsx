import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { servedAreasSchema } from "@/lib/areaServed";
import RelatedServices from "@/components/RelatedServices";
import { ServiceHeroCta } from "@/components/services/ServiceHeroCta";
import LawyerBioBlock from "@/components/services/LawyerBioBlock";
import ServiceFaq from "@/components/services/ServiceFaq";
import WhatsAppDocsCta from "@/components/services/WhatsAppDocsCta";

export interface SubServiceSubsection {
  h3: string;
  paragraphs?: (string | { text: string; bold?: boolean }[])[];
  bullets?: (string | { bold: string; rest: string })[];
  /** Renders a CTA button at the end of the subsection, with this label. */
  cta?: string;
  /** Optional small highlighted callout inside the subsection. */
  callout?: string;
  /** Optional extra className for the callout paragraph. */
  calloutClassName?: string;
  /** Renders a secondary WhatsApp CTA at the end of the subsection. */
  ctaWhatsApp?: boolean;
  /** Custom label for the secondary WhatsApp CTA. */
  ctaWhatsAppLabel?: string;
}

export interface SubServiceSection {
  h2: string;
  paragraphs?: (string | { text: string; bold?: boolean }[])[];
  bullets?: (string | { bold: string; rest: string })[];
  /** Renders a CTA button at the end of the section, with this label. */
  cta?: string;
  /** Optional list of inline service links (text-only when `to` is missing). */
  links?: { label: string; to?: string }[];
  /** Optional small highlighted callout inside the section. */
  callout?: string;
  /** Optional extra className for the callout paragraph. */
  calloutClassName?: string;
  /** Optional extra className applied to the section Card. */
  cardClassName?: string;
  /** Optional subsections rendered as h3 blocks inside the section. */
  subsections?: SubServiceSubsection[];
  /** Renders a secondary WhatsApp CTA at the end of the section. */
  ctaWhatsApp?: boolean;
  /** Custom label for the secondary WhatsApp CTA. */
  ctaWhatsAppLabel?: string;
}

export interface SubServiceFaqItem {
  q: string;
  a: string;
}

export interface SubServiceResource {
  text: string;
  href: string;
  linkLabel: string;
}

export interface SubServicePageData {
  lang: "ro" | "en";
  /** Path of this page, e.g. "/servicii/avocat-dna" */
  path: string;
  /** Path of the RO/EN counterpart */
  altPath: string;
  /** RO path of the pair (used for x-default) */
  roPath: string;
  title: string;
  h1: string;
  description: string;
  keywords: string;
  breadcrumbLabel: string;
  serviceName: string;
  /** Bold-first urgency lines, one sentence per line */
  urgency: string[];
  /** Intro/bio paragraphs, plain text with optional {parentLink} placeholder */
  bio: string[];
  sections: SubServiceSection[];
  faq: SubServiceFaqItem[];
  resources: SubServiceResource[];
  contactText: string;
  /** Link to the parent pillar page */
  parent: { to: string; label: string; breadcrumbLabel: string };
}

