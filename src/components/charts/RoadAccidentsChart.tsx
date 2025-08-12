import React, { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import * as htmlToImage from "html-to-image";
import { useIsMobile } from "@/hooks/use-mobile";
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

export type RoadAccidentDataPoint = {
  categorie: string;
  an2022: number;
  an2023: number;
};

const defaultData: RoadAccidentDataPoint[] = [
  { categorie: "Morți", an2022: 1633, an2023: 1545 },
  { categorie: "Răniți grav", an2022: 3695, an2023: 3537 },
  { categorie: "Răniți ușor", an2022: 2076, an2023: 2172 },
];

export default function RoadAccidentsChart({ data = defaultData, title }: { data?: RoadAccidentDataPoint[]; title?: string }) {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();

  // Custom label renderers to reduce overlap between series labels
  const renderLabel2022 = (props: any) => {
    const { x, y, value, width } = props;
    const cx = (x ?? 0) + (width ?? 0) / 2;
    return (
      <text
        x={cx}
        y={y}
        dy={isMobile ? -18 : -14}
        textAnchor="middle"
        fontSize={isMobile ? 11 : 12}
        fill="hsl(var(--foreground))"
      >
        {value}
      </text>
    );
  };

  const renderLabel2023 = (props: any) => {
    const { x, y, value, width } = props;
    const cx = (x ?? 0) + (width ?? 0) / 2;
    return (
      <text
        x={cx + (isMobile ? 6 : 8)}
        y={y}
        dy={isMobile ? -4 : -2}
        textAnchor="middle"
        fontSize={isMobile ? 11 : 12}
        fill="hsl(var(--foreground))"
      >
        {value}
      </text>
    );
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
      link.download = `accidente-rutiere-2022-2023-${new Date().toISOString().slice(0, 10)}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("PNG export failed", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-5 md:p-6">
      <Card className="rounded-2xl shadow-lg border-accent">
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              {title ?? "Accidentele rutiere grave și consecințele lor în 2022 și 2023"}
            </h2>
            <Button
              onClick={handleDownloadPNG}
              variant="default"
              size="sm"
              className="shrink-0 rounded-xl"
              aria-label="Descarcă graficul ca PNG"
            >
              <Download className="w-4 h-4 mr-2" /> PNG
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="h-64 sm:h-80 w-full" ref={chartRef}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: isMobile ? 24 : 16, right: 1, left: 15, bottom: isMobile ? 36 : 8 }} barSize={18} barCategoryGap="32%">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="categorie" interval={0} tick={{ fontSize: isMobile ? 10 : 12 }} angle={isMobile ? -35 : 0} textAnchor={isMobile ? "end" : "middle"} tickMargin={isMobile ? 8 : 5} height={isMobile ? 56 : 30} />
                <YAxis allowDecimals={false} domain={[0, 'dataMax + 250']} tick={{ fontSize: isMobile ? 10 : 12 }} width={isMobile ? 28 : 40} tickMargin={isMobile ? 2 : 8} />
                <Tooltip />
                <Legend />
                <Bar dataKey="an2022" name="2022" fill="#D62728" radius={[5, 5, 0, 0]}>
                  <LabelList dataKey="an2022" content={renderLabel2022} />
                </Bar>
                <Bar dataKey="an2023" name="2023" fill="#FF7F0E" radius={[5, 5, 0, 0]}>
                  <LabelList dataKey="an2023" content={renderLabel2023} />
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
