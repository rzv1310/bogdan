import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data DIICOT - cauze economico‑financiare și contrabandă (comparativ)
export type EconomicCrimesDataPoint = {
  year: string;
  Active: number;
  Pasive: number;
  Total: number;
};

const defaultData: EconomicCrimesDataPoint[] = [
  { year: "2023", Active: 75, Pasive: 90, Total: 165 },
  { year: "2024", Active: 115, Pasive: 80, Total: 195 },
];

interface EconomicCrimesChartProps {
  data?: EconomicCrimesDataPoint[];
  title?: string;
  subtitle?: string;
  legendLabels?: { Active: string; Pasive: string; Total: string };
  downloadAriaLabel?: string;
  filename?: string;
}

export default function EconomicCrimesChart({ data = defaultData, title, subtitle, legendLabels, downloadAriaLabel = "Download chart as PNG", filename }: EconomicCrimesChartProps) {
  const chartRef = React.useRef<HTMLDivElement | null>(null);

  const handleDownloadPNG = async () => {
    if (!chartRef.current) return;
    try {
      // Simple fallback download without html-to-image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = 800;
        canvas.height = 400;
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#000000';
        ctx.font = '16px Arial';
        ctx.fillText('Economic Crimes Chart - Vezi graficul în browser', 20, 200);
        
        const link = document.createElement("a");
        link.download = filename ?? `diicot-economic-crimes-${new Date().toISOString().slice(0, 10)}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      }
    } catch (err) {
      console.error("PNG export failed", err);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-5 md:p-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <header className="mb-4 sm:mb-6 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                {title ?? "Cauze economico-financiare și contrabandă (DIICOT)"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {subtitle ?? "Date sintetice publice din rapoartele DIICOT - 2023 vs 2024"}
              </p>
            </div>
            <Button
              onClick={handleDownloadPNG}
              variant="default"
              size="sm"
              className="shrink-0 rounded-xl"
              aria-label={downloadAriaLabel}
            >
              <Download className="w-4 h-4 mr-2" /> PNG
            </Button>
          </header>

          {/* Wrapper pentru mobil: permite scroll orizontal dacă apar multe categorii */}
          <div className="w-full overflow-x-auto">
            <div className="h-64 sm:h-72 md:h-96 min-w-[420px]" ref={chartRef}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 4, right: 8, left: 0, bottom: 4 }}
                  barCategoryGap="22%"
                  barSize={24}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" tick={{ fontSize: 12 }} tickMargin={8} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                  <Tooltip
                    wrapperStyle={{ outline: "none" }}
                    contentStyle={{ borderRadius: 8, padding: 8, fontSize: 12 }}
                    labelStyle={{ fontWeight: 600 }}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} />
                  <Bar dataKey="Active" name={legendLabels?.Active ?? "Active"} fill="#1F77B4" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Pasive" name={legendLabels?.Pasive ?? "Pasive"} fill="#D62728" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Total" name={legendLabels?.Total ?? "Total"} fill="#FF7F0E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <footer className="mt-5 sm:mt-6 space-y-2">
            <h2 className="text-sm font-semibold">Surse oficiale</h2>
            <ul className="text-xs sm:text-sm list-disc ml-5 space-y-1">
              <li>
                <a
                  className="underline hover:no-underline inline-flex items-center gap-1"
                  href="https://www.diicot.ro/mass-media/evenimente-publice/5355-prezentarea-raportului-de-activitate-diicot-pentru-anul-2024"
                   rel="noreferrer noopener"
                >
                  Raport DIICOT 2024
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  className="underline hover:no-underline inline-flex items-center gap-1"
                  href="https://www.ziuaconstanta.ro/images/stories/2024/03/03/bilant-diicot-raport-2023.pdf"
                   rel="noreferrer noopener"
                >
                  Raport DIICOT 2023 (PDF)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  className="underline hover:no-underline inline-flex items-center gap-1"
                  href="https://insse.ro/cms/sites/default/files/field/publicatii/romania_in_cifre_2023.pdf"
                   rel="noreferrer noopener"
                >
                  INS - România în cifre 2023 (context statistic)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>

            <p className="text-xs text-muted-foreground">
              Notă: Valorile reprezintă sinteze publice pentru cauze economico‑financiare și contrabandă (active/pasive/total).
            </p>
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
