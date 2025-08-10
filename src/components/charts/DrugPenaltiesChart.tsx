import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import * as htmlToImage from "html-to-image";
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

// Date – pedepse prevăzute de Legea nr. 143/2000
export type DrugPenaltyDataPoint = {
  categorie: string;
  Minim: number;
  Maxim: number;
};

const defaultData: DrugPenaltyDataPoint[] = [
  { categorie: "Droguri de risc", Minim: 2, Maxim: 7 },
  { categorie: "Droguri de mare risc", Minim: 7, Maxim: 15 },
];

interface DrugPenaltiesChartProps {
  data?: DrugPenaltyDataPoint[];
}

export default function DrugPenaltiesChart({ data = defaultData }: DrugPenaltiesChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const tooltipFormatter = (value: number, name: string) => {
    return [`${value} ani`, name] as [string, string];
  };

  const handleDownloadPNG = async () => {
    if (!chartRef.current) return;
    try {
      const dataUrl = await htmlToImage.toPng(chartRef.current, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `pedepse-droguri-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG export failed", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-5 md:p-6">
      <Card className="rounded-2xl shadow-lg">
        <CardContent className="p-4 sm:p-6">
          <header className="mb-4 sm:mb-6 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                Pedepse privind infracțiunile legate de droguri
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                LEGE nr. 58 din 20 martie 2024 pentru completarea Legii nr. 143/2000 privind prevenirea și combaterea traficului și consumului ilicit de droguri, pentru modificarea Legii nr. 194/2011 privind combaterea operațiunilor cu produse susceptibile de a avea efecte psihoactive, altele decât cele prevăzute de acte normative în vigoare, precum și pentru completarea art. 91 alin. (3) din Legea nr. 286/2009 privind Codul penal
              </p>
            </div>
            <Button
              onClick={handleDownloadPNG}
              variant="default"
              size="sm"
              className="shrink-0 rounded-xl"
              aria-label="Descarcă graficul ca PNG"
            >
              <Download className="w-4 h-4 mr-2" /> PNG
            </Button>
          </header>

          <div className="h-64 sm:h-80 w-full" ref={chartRef}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 8, right: 16, left: 0, bottom: 8 }}
                barSize={16}
                barCategoryGap="35%"
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categorie" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} domain={[0, 16]} />
                <Tooltip formatter={tooltipFormatter as unknown as any} />
                <Legend />
                <Bar dataKey="Minim" fill="#FF7F0E" radius={[5, 5, 0, 0]} />
                <Bar dataKey="Maxim" fill="#D62728" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <footer className="mt-5 sm:mt-6 space-y-2">
            <h3 className="text-sm font-semibold">Sursa oficială</h3>
            <ul className="text-xs sm:text-sm list-disc ml-5 space-y-1">
              <li>
                <a
                  className="underline hover:no-underline inline-flex items-center gap-1"
                  href="https://legislatie.just.ro/Public/DetaliiDocument/280178"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  LEGE nr. 58 din 20 martie 2024 – completări și modificări privind prevenirea și combaterea traficului și consumului ilicit de droguri
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground">
              Notă: Valorile sunt exprimate în ani de închisoare, conform pedepsei minime și maxime prevăzute de lege.
            </p>
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
