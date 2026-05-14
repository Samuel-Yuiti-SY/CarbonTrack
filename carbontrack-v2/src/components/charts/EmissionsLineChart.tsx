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
import { useTheme } from "next-themes";
import { monthlyEmissions } from "@/data/dashboard";
import { useI18n } from "@/components/providers/I18nProvider";

export function EmissionsLineChart() {
  const { locale } = useI18n();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const axisColor = isDark ? "#ffffff" : "#4b5563";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(75, 85, 99, 0.16)";
  const tooltipBackground = isDark ? "rgba(17, 17, 17, 0.95)" : "rgba(255, 255, 255, 0.98)";
  const tooltipText = isDark ? "#ffffff" : "#374151";
  const data = monthlyEmissions.map((item) => ({
    month: item.month[locale],
    emissions: item.emissions,
    target: item.target,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <LineChart data={data} margin={{ left: -18, right: 8, top: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="month"
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
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(255, 215, 0, 0.35)",
              background: tooltipBackground,
              color: tooltipText,
            }}
            labelStyle={{ color: tooltipText }}
            itemStyle={{ color: tooltipText }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke={isDark ? "#ffffff" : "#9ca3af"}
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
