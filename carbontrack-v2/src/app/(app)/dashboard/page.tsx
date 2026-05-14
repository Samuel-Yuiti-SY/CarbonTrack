"use client";

import dynamic from "next/dynamic";
import {
  AlertTriangle,
  BadgeDollarSign,
  Gauge,
  Leaf,
  Target,
  TrendingDown,
  Truck,
} from "lucide-react";
import { KpiCard } from "@/components/common/KpiCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useI18n } from "@/components/providers/I18nProvider";
import {
  dashboardKpis,
  esgGoal,
  recentAlerts,
  recommendations,
  topEmitters,
} from "@/data/dashboard";
import { formatCurrency, formatNumber } from "@/lib/format";

const EmissionsLineChart = dynamic(
  () =>
    import("@/components/charts/EmissionsLineChart").then(
      (module) => module.EmissionsLineChart,
    ),
  { ssr: false, loading: () => <ChartSkeleton /> },
);

const SectorBarChart = dynamic(
  () =>
    import("@/components/charts/SectorBarChart").then(
      (module) => module.SectorBarChart,
    ),
  { ssr: false, loading: () => <ChartSkeleton /> },
);

const ScopeDonutChart = dynamic(
  () =>
    import("@/components/charts/ScopeDonutChart").then(
      (module) => module.ScopeDonutChart,
    ),
  { ssr: false, loading: () => <ChartSkeleton /> },
);

const ReductionAreaChart = dynamic(
  () =>
    import("@/components/charts/ReductionAreaChart").then(
      (module) => module.ReductionAreaChart,
    ),
  { ssr: false, loading: () => <ChartSkeleton /> },
);

export default function DashboardPage() {
  const { locale, t } = useI18n();

  const cards = [
    {
      title: t.dashboard.kpis.monthlyEmissions,
      value: dashboardKpis.monthlyEmissions.value,
      detail: dashboardKpis.monthlyEmissions.detail[locale],
      trend: dashboardKpis.monthlyEmissions.trend,
      icon: Leaf,
      tone: "emerald" as const,
    },
    {
      title: t.dashboard.kpis.reduction,
      value: dashboardKpis.reduction.value,
      detail: dashboardKpis.reduction.detail[locale],
      trend: dashboardKpis.reduction.trend,
      icon: TrendingDown,
      tone: "cyan" as const,
    },
    {
      title: t.dashboard.kpis.quarterlyGoal,
      value: dashboardKpis.quarterlyGoal.value,
      detail: dashboardKpis.quarterlyGoal.detail[locale],
      icon: Target,
      tone: "blue" as const,
    },
    {
      title: t.dashboard.kpis.vehicles,
      value: dashboardKpis.vehicles.value,
      detail: dashboardKpis.vehicles.detail[locale],
      icon: Truck,
      tone: "slate" as const,
    },
    {
      title: t.dashboard.kpis.cost,
      value: formatCurrency(dashboardKpis.cost.value, locale),
      detail: dashboardKpis.cost.detail[locale],
      icon: BadgeDollarSign,
      tone: "cyan" as const,
    },
    {
      title: t.dashboard.kpis.alerts,
      value: dashboardKpis.alerts.value,
      detail: dashboardKpis.alerts.detail[locale],
      icon: AlertTriangle,
      tone: "rose" as const,
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader title={t.dashboard.title} subtitle={t.dashboard.subtitle} />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <KpiCard key={card.title} {...card} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-2">
        <ChartPanel title={t.dashboard.charts.monthly}>
          <EmissionsLineChart />
        </ChartPanel>
        <ChartPanel title={t.dashboard.charts.sector}>
          <SectorBarChart />
        </ChartPanel>
        <ChartPanel title={t.dashboard.charts.scope}>
          <ScopeDonutChart />
        </ChartPanel>
        <ChartPanel title={t.dashboard.charts.reduction}>
          <ReductionAreaChart />
        </ChartPanel>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr_1fr_1.1fr]">
        <SidePanel title={t.dashboard.side.topEmitters}>
          <div className="space-y-3">
            {topEmitters.map((item) => (
              <div
                key={item.name[locale]}
                className="rounded-xl border border-border bg-slate-100/70 p-3 dark:bg-white/5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-foreground">
                      {item.name[locale]}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {item.detail[locale]}
                    </p>
                  </div>
                  <strong className="text-sm text-cyan-600 dark:text-cyan-200">
                    {formatNumber(item.value, locale, 1)}
                  </strong>
                </div>
              </div>
            ))}
          </div>
        </SidePanel>

        <SidePanel title={t.dashboard.side.alerts}>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div
                key={alert.title[locale]}
                className="rounded-xl border border-border bg-slate-100/70 p-3 dark:bg-white/5"
              >
                <p className="font-medium text-foreground">
                  {alert.title[locale]}
                </p>
                <p className="mt-1 text-xs text-muted">{alert.detail[locale]}</p>
              </div>
            ))}
          </div>
        </SidePanel>

        <SidePanel title={t.dashboard.side.recommendations}>
          <div className="space-y-3">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.title[locale]}
                className="rounded-xl border border-border bg-slate-100/70 p-3 dark:bg-white/5"
              >
                <p className="font-medium text-foreground">
                  {recommendation.title[locale]}
                </p>
                <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
                  {recommendation.impact[locale]}
                </p>
              </div>
            ))}
          </div>
        </SidePanel>

        <SidePanel title={t.dashboard.side.esg}>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <StatusBadge label={t.common.onTrack} tone="emerald" />
              <Gauge className="text-emerald-500" size={22} aria-hidden />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">{esgGoal.title[locale]}</span>
                <strong>{esgGoal.progress}%</strong>
              </div>
              <div className="mt-3 h-3 rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                  style={{ width: `${esgGoal.progress}%` }}
                />
              </div>
            </div>
            <p className="text-sm leading-6 text-muted">
              {esgGoal.detail[locale]}
            </p>
          </div>
        </SidePanel>
      </section>
    </div>
  );
}

function ChartPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="glass-panel rounded-2xl p-5">
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      {children}
    </article>
  );
}

function ChartSkeleton() {
  return (
    <div className="grid h-72 w-full place-items-center rounded-2xl border border-dashed border-border bg-slate-100/50 dark:bg-white/5">
      <div className="h-2 w-28 rounded-full bg-slate-300 dark:bg-white/15" />
    </div>
  );
}

function SidePanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      {children}
    </article>
  );
}
