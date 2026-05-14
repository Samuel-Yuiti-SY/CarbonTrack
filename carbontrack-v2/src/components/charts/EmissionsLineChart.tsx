"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { monthlyEmissions } from "@/data/dashboard";
import { useI18n } from "@/components/providers/I18nProvider";

export function EmissionsLineChart() {
  const { locale } = useI18n();
  const data = monthlyEmissions.map((item) => ({
    month: item.month[locale],
    emissions: item.emissions,
    target: item.target,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <LineChart data={data} margin={{ left: -18, right: 8, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(148, 163, 184, 0.25)",
              background: "rgba(15, 23, 42, 0.92)",
              color: "#f8fafc",
            }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#111111"
            strokeDasharray="4 4"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#FFD700"
            strokeWidth={3}
            dot={{ r: 4, fill: "#FFD700", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
