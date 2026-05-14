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
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.22)" />
          <XAxis dataKey="month" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} unit="%" />
          <Tooltip
            contentStyle={{
              borderRadius: 14,
              border: "1px solid rgba(148, 163, 184, 0.25)",
              background: "rgba(15, 23, 42, 0.92)",
              color: "#f8fafc",
            }}
          />
          <Area
            type="monotone"
            dataKey="reduction"
            stroke="#111111"
            strokeWidth={3}
            fill="url(#reductionGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
