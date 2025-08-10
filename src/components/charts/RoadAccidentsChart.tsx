import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const data = [
  { categorie: "Accidente grave", an2022: 4715, an2023: 4527 },
  { categorie: "Morți", an2022: 1633, an2023: 1545 },
  { categorie: "Răniți grav", an2022: 3695, an2023: 3537 },
  { categorie: "Răniți ușor", an2022: 2076, an2023: 2172 },
];

export default function RoadAccidentsChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-5 md:p-6">
      <Card className="rounded-2xl shadow-lg border-accent">
        <CardHeader>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Accidentele rutiere grave și consecințele lor în 2022 și 2023
          </h2>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="h-64 sm:h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 8 }} barSize={18} barCategoryGap="32%">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categorie" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="an2022" name="2022" fill="hsl(var(--destructive))" radius={[5, 5, 0, 0]}>
                  <LabelList dataKey="an2022" position="top" style={{ fontSize: 12 }} />
                </Bar>
                <Bar dataKey="an2023" name="2023" fill="hsl(var(--primary))" radius={[5, 5, 0, 0]}>
                  <LabelList dataKey="an2023" position="top" style={{ fontSize: 12 }} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-5 sm:mt-6 space-y-2">
            <a
              href="https://politiaromana.ro/files/pages_files/BSR_2024_09.01.2025.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="underline hover:no-underline inline-flex items-start gap-1 text-xs sm:text-sm"
              aria-label="Deschide Buletinul siguranței rutiere - Raport anual 2023 (PDF)"
            >
              <span className="text-xs text-muted-foreground whitespace-pre-line">
                MINISTERUL AFACERILOR INTERNE
                {"\n"}INSPECTORATUL GENERAL AL POLIŢIEI ROMÂNE | Direcţia Rutieră
                {"\n"}Institutul de Cercetare şi Prevenire a Criminalităţii | Buletinul siguranței
                {"\n"}rutiere Raport anual 2023 | București 2024
              </span>
              <ExternalLink className="w-3.5 h-3.5 mt-0.5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
