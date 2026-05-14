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
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.22)" />
          <XAxis dataKey="sector" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip
            cursor={{ fill: "rgba(20, 184, 166, 0.08)" }}
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(148, 163, 184, 0.25)",
              background: "rgba(15, 23, 42, 0.92)",
              color: "#f8fafc",
            }}
          />
          <Bar dataKey="emissions" fill="#06b6d4" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
