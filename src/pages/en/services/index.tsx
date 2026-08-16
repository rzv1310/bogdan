
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Briefcase } from "lucide-react";
import { servedAreasSchema } from "@/lib/areaServed";
import { enServiceGroups } from "@/lib/serviceGroups";

const PAGE_URL = "https://avocatpenalbucuresti.ro/en/services";
const TITLE = "Criminal Law Services Bucharest - Attorney Bogdan Lamatic";
const DESCRIPTION =
  "Criminal defense services in Bucharest: financial crime, corruption, money laundering, crypto investigations, drug offenses, road traffic offenses, malpractice, workplace accidents and victim representation.";

