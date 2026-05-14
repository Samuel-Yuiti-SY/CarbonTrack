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
import { useI18n } from "@/components/providers/I18nProvider";
import { sectorEmissions } from "@/data/dashboard";

export function SectorBarChart() {
  const { locale } = useI18n();
  const data = sectorEmissions.map((item) => ({
    sector: item.sector[locale],
    emissions: item.emissions,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <BarChart data={data} margin={{ left: -18, right: 8, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.18)" />
          <XAxis
            dataKey="sector"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <Tooltip
            cursor={{ fill: "rgba(255, 215, 0, 0.16)" }}
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(255, 215, 0, 0.35)",
              background: "rgba(17, 17, 17, 0.95)",
              color: "#f8fafc",
            }}
            labelStyle={{ color: "#ffffff" }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Bar dataKey="emissions" fill="#FFD700" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
