import React, { useRef, useCallback, useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { toPng } from "html-to-image";
import { OptimizedChart } from "./OptimizedChart";

/**
 * Grafic bară - "Inculpați trimiși în judecată" pentru:
 *  - Luare de mită (art. 289)
 *  - Dare de mită (art. 290)
 * Anii: 2023, 2024
 * Cifre exacte din rapoartele Ministerului Public (MP):
 *  - Art. 289: 2023→107, 2024→125
 *  - Art. 290: 2023→154, 2024→200
 *
 * Notă: Poți furniza linkuri exacte către PDF-urile MP prin props `source2023` și `source2024`.
 */

export default function MitaBarChart({
  source2023 = "https://www.mpublic.ro/sites/default/files/PDF/raport_activitate_2023.pdf",
  source2024 = "https://www.mpublic.ro/sites/default/files/PDF/raport_activitate_2024.pdf",
  title,
  labels,
  subtitle,
  downloadLabel = "PNG",
  downloadAriaLabel = "Download chart as PNG",
  filename,
}: {
  source2023?: string;
  source2024?: string;
  title?: string;
  labels?: { luare: string; dare: string };
  subtitle?: string;
  downloadLabel?: string;
  downloadAriaLabel?: string;
  filename?: string;
}) {
  const data = [
    { year: "2023", luare: 107, dare: 154 },
    { year: "2024", luare: 125, dare: 200 },
  ];

  const effectiveLabelMap = {
    luare: labels?.luare ?? "Luare de mită (art. 289)",
    dare: labels?.dare ?? "Dare de mită (art. 290)",
  } as const;

  const figRef = useRef<HTMLElement | null>(null);
  const [downloading, setDownloading] = useState(false);
  const handleDownload = useCallback(async () => {
    if (!figRef.current) return;
    try {
      setDownloading(true);
      const dataUrl = await toPng(figRef.current, {
        backgroundColor: '#ffffff',
        pixelRatio: 2,
        cacheBust: true,
        filter: (node) => !(node instanceof HTMLElement && (node as HTMLElement).dataset && (node as HTMLElement).dataset.exportIgnore === 'true'),
      });
      const link = document.createElement('a');
      link.download = filename ?? 'inculpati-trimisi-in-judecata-luare-dare-mita-art-289-290-2023-2024.png';
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error('Export PNG failed', e);
    } finally {
      setDownloading(false);
    }
  }, []);

  return (
    <figure ref={figRef}       className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
      aria-labelledby="mita-title"
    >
      <header className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h2 id="mita-title" className="text-xl md:text-2xl font-semibold">
            {title ?? "Inculpați trimiși în judecată pentru luare / dare de mită (art. 289-290 CP), 2023 - 2024"}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {subtitle ?? "Date oficiale din rapoartele anuale ale Ministerului Public."}
          </p>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          data-export-ignore="true"
          className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-black text-black hover:bg-gray-50 transition disabled:opacity-60 disabled:cursor-not-allowed"
          aria-busy={downloading}
          aria-label={downloadAriaLabel}
          disabled={downloading}
        >
          {downloading ? 'Se generează…' : (
          <>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.007 4.007a1 1 0 0 1-1.414 0L7.279 11.707a1 1 0 0 1 1.414-1.414L11 12.586V4a1 1 0 0 1 1-1z"/>
              <path d="M5 19a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"/>
            </svg>
            <span>{downloadLabel}</span>
          </>
        )}
        </button>
      </header>

      {/* Legendă personalizată - ordinea cerută */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-2 text-xs sm:text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-3.5 h-3.5 rounded-sm" style={{ background: '#ff7a00' }} />
          {effectiveLabelMap.luare}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="inline-block w-3.5 h-3.5 rounded-sm" style={{ background: '#dc2626' }} />
          {effectiveLabelMap.dare}
        </span>
      </div>

      <OptimizedChart className="h-[240px] sm:h-[300px] md:h-[360px]">
        {useMemo(() => (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barGap={8}
              barCategoryGap={20}
              margin={{ top: 20, right: 24, left: 8, bottom: 8 }}
            >
              <defs>
                <linearGradient id="gradLuare" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff7a00" stopOpacity={0.98} />
                  <stop offset="100%" stopColor="#ff7a00" stopOpacity={0.78} />
                </linearGradient>
                <linearGradient id="gradDare" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#dc2626" stopOpacity={0.98} />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity={0.78} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" tickLine={false} axisLine={{ stroke: "#e5e7eb" }} />
              <YAxis allowDecimals={false} tickLine={false} axisLine={{ stroke: "#e5e7eb" }} />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.04)" }}
                formatter={(value: number, name: string) => [value, (effectiveLabelMap as Record<string, string>)[name] ?? name]}
              />
              

              <Bar dataKey="luare" name="luare" fill="url(#gradLuare)" radius={[8, 8, 0, 0]}>
                <LabelList dataKey="luare" position="top" formatter={(v: number) => v} className="fill-current" />
              </Bar>
              <Bar dataKey="dare" name="dare" fill="url(#gradDare)" radius={[8, 8, 0, 0]}>
                <LabelList dataKey="dare" position="top" formatter={(v: number) => v} className="fill-current" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ), [data, effectiveLabelMap])}
      </OptimizedChart>

      <figcaption className="mt-4 text-xs text-gray-600">
        Sursa: Ministerul Public - Rapoarte de activitate {" "}
        <a className="underline underline-offset-4" href={source2023} target="_blank" rel="noreferrer">
          2023
        </a>{" "}
        și {" "}
        <a className="underline underline-offset-4" href={source2024} target="_blank" rel="noreferrer">
          2024
        </a>.
      </figcaption>
    </figure>
  );
}

const labelMap = {
  luare: "Luare de mită (art. 289)",
  dare: "Dare de mită (art. 290)",
};
