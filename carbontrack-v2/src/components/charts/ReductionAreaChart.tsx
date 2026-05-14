"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useI18n } from "@/components/providers/I18nProvider";
import { reductionEvolution } from "@/data/dashboard";

export function ReductionAreaChart() {
  const { locale } = useI18n();
  const data = reductionEvolution.map((item) => ({
    month: item.month[locale],
    reduction: item.reduction,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
        <AreaChart data={data} margin={{ left: -18, right: 8, top: 10 }}>
          <defs>
            <linearGradient id="reductionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD700" stopOpacity={0.55} />
              <stop offset="95%" stopColor="#FFD700" stopOpacity={0.04} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.18)" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            unit="%"
            tick={{ fill: "#ffffff", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(255, 215, 0, 0.35)",
              background: "rgba(17, 17, 17, 0.95)",
              color: "#f8fafc",
            }}
            labelStyle={{ color: "#ffffff" }}
            itemStyle={{ color: "#ffffff" }}
          />
          <Area
            type="monotone"
            dataKey="reduction"
            stroke="#FFD700"
            strokeWidth={3}
            fill="url(#reductionGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
