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
} from "lucide-react";

// Helper: currency formatter RON
const fmtRON = (n: number) =>
  new Intl.NumberFormat("ro-RO", {
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

export default function CalculatorDespagubiri() {
  useSEO({
    title: "Calculator despăgubiri | Avocat Bogdan Lamatic",
    description: "Pagină calcul despăgubiri - în curând.",
  });

  const [eventType, setEventType] = useState("accident"); // accident | agresiune | altul
  const [ittDays, setIttDays] = useState(0); // zile îngrijiri medicale/ITT
  const [hospDays, setHospDays] = useState(0); // zile spitalizare
  const [disability, setDisability] = useState(0); // % invaliditate permanentă
  const [age, setAge] = useState(35);
  const [psych, setPsych] = useState(3); // 1..5
  const [netIncome, setNetIncome] = useState(5000);
  const [monthsOff, setMonthsOff] = useState(0);
  const [medCosts, setMedCosts] = useState(0);
  const [travelCare, setTravelCare] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);
  const [victimFault, setVictimFault] = useState(0); // %
  const [cap, setCap] = useState(0); // opțional, plafon poliță (RON)
  const [showResults, setShowResults] = useState(false); // control results visibility

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

    // Morale (orientativ, NON-oficial). Formula euristică cu factori de severitate.
    let morale = 3000;
    morale += 200 * clampNum(ittDays, 0, 3650); // 200 RON / zi ITT
    morale += 500 * clampNum(hospDays, 0, 365); // 500 RON / zi spital
    morale += 80000 * (clampNum(disability, 0, 100) / 100); // până la ~80.000 RON pt. 100%
    morale += 3000 * clampNum(psych, 1, 5); // impact psihologic 1..5

    const typeFactor = eventType === "agresiune" ? 1.1 : eventType === "accident" ? 1.0 : 1.0;
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
      <main className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <section className="mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acasă</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Calculator despăgubiri</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </section>

        {/* Hero */}
        <section className="grid grid-cols-1 gap-6 items-start mb-10">
          <div>
            <div className="h-[30px]" aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              Calculator despăgubiri victime accidente
            </h1>
            <p className="mt-3 text-zinc-700">
              Sunt <strong>Bogdan Lamatic</strong>, avocat în Baroul București. Reprezint victimele în procese penale și obțin despăgubiri pentru accidente rutiere, vătămări corporale și accidente de muncă. Recunoscut de Legal 500 ca <em>Next Generation Partner</em> (White-Collar Crime, 2021–2024).
            </p>
            <ul className="mt-4 grid gap-2 text-zinc-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5" /> Strategie penal + civil (parte vătămată / parte civilă)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5" /> Negociere și litigii cu asiguratorii (RCA)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 mt-0.5" /> Expertize medico-legale și accidentologice
              </li>
            </ul>
          </div>
          <div>
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Calculator despăgubiri</h2>
              </div>
              <p className="text-sm text-zinc-600 mb-4 flex items-start gap-2">
                <BadgeInfo className="w-4 h-4 mt-0.5" /> Estimare neoficială, în scop informativ. Sumele reale depind de probe, încadrare juridică și practică judiciară.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-0 shadow-none bg-transparent">
                  <div className="divide-y">
                    <InputRow label="Tip eveniment" hint="Alege scenariul cel mai apropiat">
                      <div className="flex gap-2">
                        {[
                          { id: "accident", label: "Accident rutier", icon: <Car className="w-4 h-4" /> },
                          { id: "agresiune", label: "Agresiune", icon: <Gavel className="w-4 h-4" /> },
                          { id: "altul", label: "Altul" },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setEventType(opt.id)}
                            className={`px-3 py-1.5 rounded-full border text-sm flex items-center gap-1 ${
                              eventType === opt.id
                                ? "bg-zinc-900 text-white border-zinc-900"
                                : "bg-white text-zinc-700"
                            }`}
                          >
                            {opt.icon} {opt.label}
                          </button>
                        ))}
                      </div>
                    </InputRow>

                    <InputRow label="Zile îngrijiri medicale (ITT)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={ittDays}
                        onChange={(e) => setIttDays(clampNum(e.target.value, 0, 3650))}
                      />
                    </InputRow>
                    <InputRow label="Zile spitalizare">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={hospDays}
                        onChange={(e) => setHospDays(clampNum(e.target.value, 0, 365))}
                      />
                    </InputRow>
                    <InputRow label="Invaliditate permanentă (%)">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        className="w-full rounded-xl border p-2"
                        value={disability}
                        onChange={(e) => setDisability(clampNum(e.target.value, 0, 100))}
                      />
                    </InputRow>
                    <InputRow label="Vârsta victimei">
                      <input
                        type="number"
                        min={1}
                        className="w-full rounded-xl border p-2"
                        value={age}
                        onChange={(e) => setAge(clampNum(e.target.value, 1, 120))}
                      />
                    </InputRow>
                    <InputRow label="Impact psihologic (1=mic · 5=major)">
                      <input
                        type="range"
                        min={1}
                        max={5}
                        step={1}
                        className="w-full"
                        style={{ accentColor: "#ff6a00" }}
                        value={psych}
                        onChange={(e) => setPsych(clampNum(e.target.value, 1, 5))}
                      />
                      <div className="text-xs text-zinc-600">Nivel selectat: {psych}</div>
                    </InputRow>
                  </div>
                </Card>

                <Card className="p-0 shadow-none bg-transparent">
                  <div className="divide-y">
                    <InputRow label="Venit net lunar (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={netIncome}
                        onChange={(e) => setNetIncome(clampNum(e.target.value, 0, 1e7))}
                      />
                    </InputRow>
                    <InputRow label="Luni incapacitate muncă">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={monthsOff}
                        onChange={(e) => setMonthsOff(clampNum(e.target.value, 0, 120))}
                      />
                    </InputRow>
                    <InputRow label="Cheltuieli medicale (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={medCosts}
                        onChange={(e) => setMedCosts(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow label="Transport & îngrijire (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={travelCare}
                        onChange={(e) => setTravelCare(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow label="Alte cheltuieli (RON)">
                      <input
                        type="number"
                        min={0}
                        className="w-full rounded-xl border p-2"
                        value={otherCosts}
                        onChange={(e) => setOtherCosts(clampNum(e.target.value, 0, 1e9))}
                      />
                    </InputRow>
                    <InputRow
                      label="Cota de vinovăție a victimei (%)"
                      hint="Dacă există o culpă concurentă a victimei"
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
                      label="Plafon poliță (RON) – opțional"
                      hint="Dacă îl cunoști, introdu limita RCA; estimarea va fi plafonată"
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
                  <RefreshCw className="w-4 h-4" /> Resetează
                </button>
                <button
                  onClick={calculate}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-zinc-900 text-white"
                >
                  Calculează <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          </div>
        </section>

        {/* Results */}
        {showResults && (
          <section id="rezultat" className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="md:col-span-2">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-semibold">Rezultat estimativ</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-sm text-zinc-600">Total despăgubiri (interval)</div>
                  <div className="text-2xl font-bold">
                    {fmtRON(low)} – {fmtRON(high)}
                  </div>
                </div>
                <div className="rounded-xl bg-zinc-50 p-4">
                  <div className="text-sm text-zinc-600">Estimare punct</div>
                  <div className="text-2xl font-bold">{fmtRON(net)}</div>
                </div>
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Daune materiale</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>
                      Cheltuieli medicale + transport + alte: <strong>{fmtRON(medCosts + travelCare + otherCosts)}</strong>
                    </li>
                    <li>
                      Venituri pierdute: <strong>{fmtRON(lostWages)}</strong>
                    </li>
                    <li>
                      Subtotal: <strong>{fmtRON(material)}</strong>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Daune morale (orientativ)</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>ITT: {ittDays} zile · Spital: {hospDays} zile</li>
                    <li>Invaliditate: {disability}% · Impact: {psych}/5</li>
                    <li>
                      Estimare: <strong>{fmtRON(morale)}</strong>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-semibold mb-1">Ajustări</div>
                  <ul className="space-y-1 text-zinc-700">
                    <li>Culpă victimă: {victimFault}%</li>
                    <li>Plafon poliță: {cap > 0 ? fmtRON(cap) : "—"}</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border"
                >
                  <Download className="w-4 h-4" /> Descarcă estimarea (PDF)
                </button>
                <a
                  href="mailto:bogdan.lamatic@yahoo.com"
                  className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-zinc-900 text-white"
                >
                  Trimite-mi pentru evaluare <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Disclaimer: Acest calculator oferă o estimare orientativă, neavând caracter oficial sau de consultanță juridică. Sumele reale depind de probe (acte medicale, expertize), încadrări juridice, culpa părților, limite de răspundere ale asiguratorului și practica instanțelor/ASF. Pentru un calcul exact este necesară analiză individuală.
              </p>
            </Card>
            <div className="space-y-4">
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-semibold">Documente utile</h3>
                </div>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>Acte medicale (cronologic, PDF)</li>
                  <li>Certificat medico-legal (dacă există)</li>
                  <li>Constatare poliție / proces-verbal</li>
                  <li>Poliță RCA și date asigurator</li>
                  <li>Dovezi cheltuieli / venituri pierdute</li>
                </ul>
              </Card>
              <Card>
                <div className="flex items-center gap-2 mb-1">
                  <HeartPulse className="w-5 h-5" />
                  <h3 className="font-semibold">Cazuri acoperite</h3>
                </div>
                <ul className="text-sm text-zinc-700 space-y-1">
                  <li>Accidente rutiere (RCA/CASCO)</li>
                  <li>Vătămări corporale (art. 193–196 CP)</li>
                  <li>Ucidere din culpă (art. 192 CP)</li>
                  <li>Accidente de muncă</li>
                </ul>
              </Card>
            </div>
          </section>
        )}

        {/* Contact (FAQ removed) */}
        <section className="mb-12">
          <Card id="contact">
            <h2 className="text-xl font-semibold mb-2">Contact rapid</h2>
            <p className="text-sm text-zinc-700 mb-3">
              Trimite-mi detaliile esențiale și îți ofer o evaluare inițială.
            </p>
            <div className="grid gap-3">
              <input className="rounded-xl border p-2" placeholder="Nume" />
              <input className="rounded-xl border p-2" placeholder="Email / Telefon" />
              <textarea
                className="rounded-xl border p-2"
                rows={4}
                placeholder="Descrie pe scurt evenimentul (data, locul, ce s-a întâmplat, leziuni)"
              ></textarea>
              <a
                href="mailto:bogdan.lamatic@yahoo.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 bg-zinc-900 text-white"
              >
                Trimite solicitarea <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-zinc-500">
                Prin trimitere, confirmi că ai citit informarea privind prelucrarea datelor.
              </p>
            </div>
          </Card>
        </section>

        {/* CTA */}
        <section className="mb-8">
          <Card className="bg-zinc-900 text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="text-lg font-semibold">Ai nevoie de o estimare profesionistă?</div>
                <div className="text-sm text-zinc-200">
                  Trimit-mi actele – revin cu un plan și un buget clar.
                </div>
              </div>
              <a
                href="mailto:bogdan.lamatic@yahoo.com"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-zinc-900"
              >
                Programează o consultanță <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Card>
        </section>

        {/* Metodă de lucru – mutată la final */}
        <section className="mb-16">
          <Card>
            <h2 className="text-xl font-semibold mb-3">Metoda mea de lucru este următoarea:</h2>
            <ol className="list-decimal pl-5 space-y-2 text-zinc-700">
              <li>
                Realizez o evaluare rapidă a dosarului pentru a stabili încadrările legale și legătura de cauzalitate.
              </li>
              <li>
                Aplic o strategie duală, depunând atât plângere penală, cât și constituindu-mă parte civilă sau acționând separat pe cale civilă.
              </li>
              <li>
                Negociez cu asiguratorul, deschid dosarul de daună și urmăresc lichidarea acestuia.
              </li>
              <li>
                Reprezint clientul în instanță, aducând probe medico-legale, accidentologice și audiind martori.
              </li>
            </ol>
          </Card>
        </section>
      </main>
    </div>
  );
}
