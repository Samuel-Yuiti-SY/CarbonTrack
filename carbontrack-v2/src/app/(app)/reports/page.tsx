"use client";

import { Download, FileText, Play, TrendingDown } from "lucide-react";
import { DataTable, type DataTableColumn } from "@/components/common/DataTable";
import { KpiCard } from "@/components/common/KpiCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/components/providers/I18nProvider";
import {
  executiveSummary,
  reportPeriods,
  reportRows,
  type ReportRow,
} from "@/data/reports";
import { formatNumber } from "@/lib/format";

export default function ReportsPage() {
  const { locale, t } = useI18n();

  const columns: DataTableColumn<ReportRow>[] = [
    {
      key: "category",
      header: t.reports.category,
      render: (row) => <span className="font-medium">{row.category[locale]}</span>,
    },
    { key: "current", header: t.reports.current, render: (row) => row.current },
    {
      key: "variation",
      header: t.reports.variation,
      render: (row) => (
        <span
          className={
            row.variation.startsWith("+")
              ? "font-semibold text-rose-600"
              : "font-semibold text-slate-950"
          }
        >
          {row.variation}
        </span>
      ),
    },
    { key: "action", header: t.reports.action, render: (row) => row.action[locale] },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader
        title={t.reports.title}
        subtitle={t.reports.subtitle}
        action={
          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300">
              <Play size={16} aria-hidden />
              {t.common.generate}
            </button>
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-card px-5 text-sm font-semibold text-foreground">
              <Download size={16} aria-hidden />
              {t.common.exportPdf}
            </button>
          </div>
        }
      />

      <section className="glass-panel rounded-2xl p-4">
        <label className="flex max-w-sm flex-col gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {t.common.period}
          <select className="h-11 rounded-xl border border-border bg-card px-3 text-sm font-medium normal-case tracking-normal text-foreground">
            {reportPeriods.map((period) => (
              <option key={period.id} value={period.id}>
                {period.label[locale]}
              </option>
            ))}
          </select>
        </label>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard
          title={t.reports.total}
          value={`${formatNumber(executiveSummary.total, locale)} tCO2e`}
          detail={reportPeriods[0].label[locale]}
          icon={FileText}
          tone="yellow"
        />
        <KpiCard
          title={t.reports.reduction}
          value={`${formatNumber(executiveSummary.reduction, locale, 1)}%`}
          detail={t.common.onTrack}
          trend="-16.2%"
          icon={TrendingDown}
          tone="black"
        />
        <article className="rounded-2xl border border-border bg-card p-5 shadow-sm md:col-span-2">
          <h2 className="text-base font-semibold">{t.reports.executive}</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted">{t.reports.mainSource}</dt>
              <dd className="mt-1 font-semibold">
                {executiveSummary.mainSource[locale]}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">{t.reports.recommendation}</dt>
              <dd className="mt-1 leading-6 text-foreground">
                {executiveSummary.recommendation[locale]}
              </dd>
            </div>
          </dl>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">{t.reports.tableTitle}</h2>
        <DataTable
          columns={columns}
          data={reportRows}
          getRowKey={(row) => row.id}
        />
      </section>
    </div>
  );
}
