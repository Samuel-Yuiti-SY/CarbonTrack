"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "next-themes";
import { useI18n } from "@/components/providers/I18nProvider";
import { sectorEmissions } from "@/data/dashboard";

export function SectorBarChart() {
  const { locale } = useI18n();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const axisColor = isDark ? "#ffffff" : "#4b5563";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(75, 85, 99, 0.16)";
  const tooltipBackground = isDark ? "rgba(17, 17, 17, 0.95)" : "rgba(255, 255, 255, 0.98)";
  const tooltipText = isDark ? "#ffffff" : "#374151";
  const data = sectorEmissions.map((item) => ({
    sector: item.sector[locale],
    emissions: item.emissions,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <BarChart data={data} margin={{ left: -18, right: 8, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="sector"
            tickLine={false}
            axisLine={false}
            tick={{ fill: axisColor, fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: axisColor, fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255, 215, 0, 0.16)" }}
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(255, 215, 0, 0.35)",
              background: tooltipBackground,
              color: tooltipText,
            }}
            labelStyle={{ color: tooltipText }}
            itemStyle={{ color: tooltipText }}
          />
          <Bar dataKey="emissions" fill="#FFD700" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
