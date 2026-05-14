"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTheme } from "next-themes";
import { scopeDistribution } from "@/data/dashboard";

export function ScopeDonutChart() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const colors = isDark
    ? ["#FFD700", "#FFE169", "#FFFFFF"]
    : ["#FFD700", "#F4B400", "#9CA3AF"];
  const tooltipBackground = isDark ? "rgba(17, 17, 17, 0.95)" : "rgba(255, 255, 255, 0.98)";
  const tooltipText = isDark ? "#ffffff" : "#374151";

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
                border: "1px solid rgba(255, 215, 0, 0.35)",
                background: tooltipBackground,
                color: tooltipText,
              }}
              labelStyle={{ color: tooltipText }}
              itemStyle={{ color: tooltipText }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {scopeDistribution.map((item, index) => (
          <div
            key={item.scope}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-yellow-50 px-3 py-2 text-sm dark:border-white/15 dark:bg-white/10"
          >
            <span className="flex items-center gap-2 text-muted dark:text-white">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
              {item.scope}
            </span>
            <strong className="text-foreground dark:text-white">{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
