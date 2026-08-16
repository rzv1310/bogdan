import React, { useMemo, useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Calculator,
  ShieldCheck,
  FileText,
  Gavel,
  Car,
  HeartPulse,
  BadgeInfo,
  Download,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import ServicesQuickLinks from "@/components/ServicesQuickLinks";
// Helper: currency formatter RON
const fmtRON = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "RON",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round((n as number) || 0)));

const clampNum = (v: number | string, min = 0, max = 1e12) => {
  const n = Number(v);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n, min), max);
};

type InputRowProps = {
  label: string;
  hint?: string;
  children: React.ReactNode;
};

const InputRow: React.FC<InputRowProps> = ({ label, children, hint }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-2 py-2">
    <label className="text-sm md:text-base font-medium text-zinc-800 pt-2">{label}</label>
    <div className="md:col-span-2 flex flex-col gap-1">
      {children}
      {hint && <p className="text-xs text-zinc-500">{hint}</p>}
    </div>
  </div>
);

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = "",
  ...props
}) => (
  <div {...props} className={`rounded-2xl shadow-lg bg-white p-5 md:p-7 ${className}`}>{children}</div>
);

export default function CompensationCalculator() {
  useSEO({
    keywords: "compensation calculator romania, damages calculator criminal case",
    schemas: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://avocatpenalbucuresti.ro/en" },
          { "@type": "ListItem", position: 2, name: "Compensation Calculator", item: "https://avocatpenalbucuresti.ro/en/compensation-calculator" },
        ],
      },
    ],
    title: "Compensation Calculator | Attorney Bogdan Lamatic",
    description: "Estimate compensation for accidents and injuries. Informative, non-official calculator by attorney Bogdan Lamatic, representing victims in criminal cases.",
    canonical: "/en/compensation-calculator",
    alternates: { ro: "/calculator-despagubiri", en: "/en/compensation-calculator", xDefault: "/calculator-despagubiri" },
    locale: "en_GB",
  });

  const [eventType, setEventType] = useState("accident"); // accident | assault | other
  const [ittDays, setIttDays] = useState(0); // days of medical care
  const [hospDays, setHospDays] = useState(0); // hospitalization days
  const [disability, setDisability] = useState(0); // permanent disability %
  const [age, setAge] = useState(35);
  const [psych, setPsych] = useState(3); // 1..5
  const [netIncome, setNetIncome] = useState(5000);
  const [monthsOff, setMonthsOff] = useState(0);
  const [medCosts, setMedCosts] = useState(0);
  const [travelCare, setTravelCare] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);
  const [victimFault, setVictimFault] = useState(0); // %
  const [cap, setCap] = useState(0); // optional insurance policy cap (RON)
  const [showResults, setShowResults] = useState(false); // control results visibility
  const isMobile = useIsMobile();

  const reset = () => {
    setEventType("accident");
    setIttDays(0);
    setHospDays(0);
    setDisability(0);
    setAge(35);
    setPsych(3);
    setNetIncome(5000);
    setMonthsOff(0);
    setMedCosts(0);
    setTravelCare(0);
    setOtherCosts(0);
    setVictimFault(0);
    setCap(0);
    setShowResults(false); // hide results on reset
  };

  const calculate = () => {
    setShowResults(true); // show results when calculate is clicked
  };

  const { material, lostWages, morale, gross, net, low, high } = useMemo(() => {
    const _med = clampNum(medCosts);
    const _travel = clampNum(travelCare);
    const _other = clampNum(otherCosts);
    const _lost = clampNum(netIncome) * clampNum(monthsOff);

    const material = _med + _travel + _other + _lost;

    // Non-pecuniary damages (indicative, NON-official). Heuristic formula with severity factors.
    let morale = 3000;
    morale += 200 * clampNum(ittDays, 0, 3650); // RON 200 / day of medical care
    morale += 500 * clampNum(hospDays, 0, 365); // RON 500 / hospitalization day
    morale += 80000 * (clampNum(disability, 0, 100) / 100); // up to ~RON 80,000 for 100%
    morale += 3000 * clampNum(psych, 1, 5); // psychological impact 1..5

    const typeFactor = eventType === "assault" ? 1.1 : eventType === "accident" ? 1.0 : 1.0;
    const ageFactor = age < 18 ? 1.2 : age <= 35 ? 1.1 : age <= 60 ? 1.0 : 0.9;
    morale *= typeFactor * ageFactor;

    const gross = material + morale;
    const adj = gross * (1 - clampNum(victimFault, 0, 100) / 100);
    const net = cap > 0 ? Math.min(adj, cap) : adj;

    return {
      material,
      lostWages: _lost,
      morale,
      gross,
      net,
      low: net * 0.8,
      high: net * 1.2,
    };
  }, [
    medCosts,
    travelCare,
    otherCosts,
    netIncome,
    monthsOff,
    ittDays,
    hospDays,
    disability,
    psych,
    eventType,
    age,
    victimFault,
    cap,
  ]);

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12 flex flex-col">

        {/* Hero */}
        <section className="grid grid-cols-1 gap-6 items-start mb-10">
          <div>
            <div className="h-[30px]" aria-hidden="true" />
            <h1 className="text-2xl font-semibold">
              Compensation Calculator for Accident Victims
            </h1>
            <p className="mt-3 text-zinc-700">
              I am <strong>Bogdan Lamatic</strong>, attorney with the Bucharest Bar. I represent victims in criminal proceedings and <Link to="/en/services/victim-representation-in-criminal-cases" className="underline decoration-accent decoration-2 underline-offset-2 text-current">obtain compensation for road accidents</Link>, bodily harm and workplace accidents. Recognized by Legal 500 as a <em>Next Generation Partner</em> (White-Collar Crime).
            </p>
            <ul className="mt-4 grid gap-2 text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent" /> Combined criminal and civil strategy (injured party / civil party)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent" /> Negotiation and litigation with insurers (motor liability insurance)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent" /> Forensic and accident reconstruction expertise
              </li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="premium" size="lg" className="border border-hero-foreground" aria-label="Call now">
                <a href="tel:+40316320183">
                  <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Call now</span>
                </a>
              </Button>
            </div>
          </div>
          <div>
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Compensation Calculator</h2>
              </div>
              <p className="text-sm text-zinc-600 mb-4 flex items-start gap-2">
                <BadgeInfo className="w-4 h-4 mt-0.5" /> Non-official estimate, for informational purposes only. Actual amounts depend on evidence, legal classification and case law.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-0 shadow-none bg-transparent">
                  <div className="divide-y">
                    <InputRow label="Type of event" hint="Choose the closest scenario">
                      <div className="flex gap-2">
                        {[
                          { id: "accident", label: "Road accident", icon: <Car className="w-4 h-4" /> },
                          { id: "assault", label: "Assault", icon: <Gavel className="w-4 h-4" /> },
                          { id: "other", label: "Other" },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setEventType(opt.id)}
                            className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-1 ${
                              eventType === opt.id
                                ? "bg-accent text-accent-foreground border-accent"
                                : "bg-white text-zinc-700"
                            }`}
                          >
                            {opt.icon} {opt.label}
                          </button>
                        ))}
                      </div>
                    </InputRow>

                    <InputRow label="Days of medical care">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={ittDays}
                        onChange={(e) => setIttDays(clampNum(e.target.value, 0, 3650))}
                      />
                    </InputRow>
                    <InputRow label="Hospitalization days">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={hospDays}
                        onChange={(e) => setHospDays(clampNum(e.target.value, 0, 365))}
                      />
                    </InputRow>
                    <InputRow label="Permanent disability (%)">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className="w-full rounded-xl border p-2"
                        value={disability}
                        onChange={(e) => setDisability(clampNum(e.target.value, 0, 100))}
                      />
                    </InputRow>
                    <InputRow label="Victim's age">
                      <input
                        type="number"
                        min={1}
                        className="w-full rounded-xl border p-2"
                        value={age}
                        onChange={(e) => setAge(clampNum(e.target.value, 1, 120))}
                      />
                    </InputRow>
                    <InputRow label="Psychological impact (1=low . 5=major)">
                      <input
                        type="range"
                        min={1}
                        max={5}
                        step={1}
                        className="w-full accent-[hsl(var(--accent))]"
                        value={psych}
                        onChange={(e) => setPsych(clampNum(e.target.value, 1, 5))}
                      />
                      <div className="text-xs text-zinc-600">Selected level: {psych}</div>
                    </InputRow>
                  </div>
                </Card>

                <Card className="p-0 shadow-none bg-transparent">
                  <div className="divide-y">
                    <InputRow label="Monthly net income (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={netIncome}
                        onChange={(e) => setNetIncome(clampNum(e.target.value, 0, 1e7))}
                      />
                    </InputRow>
                    <InputRow label="Months unable to work">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={monthsOff}
                        onChange={(e) => setMonthsOff(clampNum(e.target.value, 0, 120))}
                      />
                    </InputRow>
                    <InputRow label="Medical expenses (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={medCosts}
                        onChange={(e) => setMedCosts(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow label="Transport & care (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={travelCare}
                        onChange={(e) => setTravelCare(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow label="Other expenses (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={otherCosts}
                        onChange={(e) => setOtherCosts(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow
                      label="Victim's share of fault (%)"
                      hint="If there is contributory negligence by the victim"
                    >
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className="w-full rounded-xl border p-2"
                        value={victimFault}
                        onChange={(e) => setVictimFault(clampNum(e.target.value, 0, 100))}
                      />
                    </InputRow>
                    <InputRow
                      label="Policy cap (RON) - optional"
                      hint="If you know it, enter the insurance limit; the estimate will be capped"
                    >
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={cap}
                        onChange={(e) => setCap(clampNum(e.target.value, 0, 1e12))}
                      />
                    </InputRow>
                  </div>
                </Card>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border"
                >
                  <RefreshCw className="w-4 h-4" /> Reset
                </button>
                <button
                  onClick={calculate}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Calculate <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Results */}
        {showResults && (
          <section id="result" className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Estimated result</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-sm text-zinc-600">Total compensation (range)</div>
                  <div className="text-2xl font-bold">
                    {fmtRON(low)} - {fmtRON(high)}
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-sm text-zinc-600 flex items-center gap-2">
                    Estimate
                    {isMobile ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <button type="button" aria-label="Estimate information" className="inline-flex">
                            <BadgeInfo className="w-4 h-4 text-accent" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent className="max-w-xs text-sm">
                          Material and non-pecuniary damages, adjusted for the fault percentage and capped at the policy limit (if any).
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <TooltipProvider delayDuration={300}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <BadgeInfo className="w-4 h-4 text-accent" aria-label="Estimate information" />
                          </TooltipTrigger>
                          <TooltipContent>
                            Material and non-pecuniary damages, adjusted for the fault percentage and capped at the policy limit (if any).
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>
                  <div className="text-2xl font-bold">{fmtRON(net)}</div>
                  {!isMobile && (
                    <div className="text-xs text-zinc-500 mt-1">Reference value; the range on the left is +/-20% around it.</div>
                  )}
                </div>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Material damages</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>
                      Medical + transport + other expenses: <strong>{fmtRON(medCosts + travelCare + otherCosts)}</strong>
                    </li>
                    <li>
                      Lost income: <strong>{fmtRON(lostWages)}</strong>
                    </li>
                    <li>
                      Subtotal: <strong>{fmtRON(material)}</strong>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Non-pecuniary damages (indicative)</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>Medical care: {ittDays} days . Hospital: {hospDays} days</li>
                    <li>Disability: {disability}% . Impact: {psych}/5</li>
                    <li>
                      Estimate: <strong>{fmtRON(morale)}</strong>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Adjustments</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>Victim's fault: {victimFault}%</li>
                    <li>Policy cap: {cap > 0 ? fmtRON(cap) : "-"}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border"
                >
                  <Download className="w-4 h-4" /> Download the estimate (PDF)
                </button>
                <a
                  href="mailto:contact@avocatpenalbucuresti.ro"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Send it to me for evaluation <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Disclaimer: This calculator provides an indicative estimate and does not constitute an official assessment or legal advice. Actual amounts depend on evidence (medical records, expert reports), legal classification, the parties' fault, the insurer's liability limits, and court/regulator practice. An individual analysis is required for an accurate calculation.
              </p>
            </Card>
            <div className="space-y-4">
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-semibold">Useful documents</h3>
                </div>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>Medical records (chronological, PDF)</li>
                  <li>Forensic medical certificate (if any)</li>
                  <li>Police report / incident report</li>
                  <li>Motor liability policy and insurer details</li>
                  <li>Proof of expenses / lost income</li>
                </ul>
              </Card>
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <HeartPulse className="w-5 h-5" />
                  <h3 className="font-semibold">Cases covered</h3>
                </div>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>Road accidents (motor liability/CASCO)</li>
                  <li>Bodily harm (Criminal Code art. 193-196)</li>
                  <li>Manslaughter (Criminal Code art. 192)</li>
                  <li>Workplace accidents</li>
                </ul>
              </Card>
            </div>
          </section>
        )}

        {/* Contact (FAQ removed) */}
        <section className="mb-12">
          <Card id="contact" className="border border-accent">
            <h2 className="text-xl font-semibold mb-2">Quick contact</h2>
            <p className="text-sm text-zinc-700 mb-3">
              Send me the essential details and I will provide an initial assessment.
            </p>
            <div className="grid gap-3">
              <input className="rounded-xl border p-2" placeholder="Name" />
              <input className="rounded-xl border p-2" placeholder="Email / Phone" />
              <textarea
                className="rounded-xl border p-2"
                rows={4}
                placeholder="Briefly describe the event (date, place, what happened, injuries)"
              ></textarea>
              <a
                href="mailto:contact@avocatpenalbucuresti.ro"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Send the request <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-zinc-500">
                By submitting, you confirm that you have read the data processing notice.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <Card className="bg-zinc-900 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Need a professional estimate?</div>
                <div className="text-sm text-zinc-200">
                  Send me the documents - I will come back with a clear plan and budget.
                </div>
              </div>
              <a
                href="mailto:contact@avocatpenalbucuresti.ro"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-zinc-900"
              >
                Schedule a consultation <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </section>

        {/* Working method - moved to the end */}
        <section className="mb-16">
          <Card className="border border-accent">
            <h2 className="text-xl font-semibold mb-3">My working method is as follows:</h2>
            <ol className="list-decimal pl-5 space-y-2 text-zinc-700">
              <li>
                I carry out a quick assessment of the file to establish the legal classification and the causal link.
              </li>
              <li>
                I apply a dual strategy, filing a criminal complaint while also joining as a civil party or acting separately through civil proceedings.
              </li>
              <li>
                I negotiate with the insurer, open the claim file and follow up on its settlement.
              </li>
              <li>
                I represent the client in court, bringing forensic and accident reconstruction evidence and examining witnesses.
              </li>
            </ol>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center mb-12">
          <Button asChild variant="premium" size="lg" className="border border-hero-foreground" aria-label="Call now">
            <a href="tel:+40316320183">
              <span className="inline-flex items-center gap-2"><Phone className="w-5 h-5" /> Call now</span>
            </a>
          </Button>
              <ServicesQuickLinks lang="en" />
</section>
        {/* Breadcrumb */}
        <section className="order-last mt-8 md:order-first md:mt-0 md:mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/en">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/en/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Compensation Calculator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>
      </main>
    </div>
  );
}
