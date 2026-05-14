"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { scopeDistribution } from "@/data/dashboard";

const colors = ["#FFD700", "#111111", "#B8B8B8"];

export function ScopeDonutChart() {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_160px] md:items-center">
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
          <PieChart>
            <Pie
              data={scopeDistribution}
              dataKey="value"
              nameKey="scope"
              innerRadius={72}
              outerRadius={104}
              paddingAngle={4}
            >
              {scopeDistribution.map((item, index) => (
                <Cell key={item.scope} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: 14,
                border: "1px solid rgba(148, 163, 184, 0.25)",
                background: "rgba(15, 23, 42, 0.92)",
                color: "#f8fafc",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {scopeDistribution.map((item, index) => (
          <div
            key={item.scope}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-yellow-50 px-3 py-2 text-sm"
          >
            <span className="flex items-center gap-2 text-muted">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {item.scope}
            </span>
            <strong className="text-foreground">{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
