"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { DataTable, type DataTableColumn } from "@/components/common/DataTable";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useI18n } from "@/components/providers/I18nProvider";
import { emissions, type EmissionRecord, type EmissionStatus } from "@/data/emissions";
import { formatDate, formatNumber } from "@/lib/format";
import type { Messages } from "@/messages";

const statusTone: Record<EmissionStatus, "yellow" | "amber" | "rose"> = {
  onTrack: "yellow",
  attention: "amber",
  critical: "rose",
};

export default function EmissionsPage() {
  const { locale, t } = useI18n();
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState("all");
  const [scope, setScope] = useState("all");
  const [status, setStatus] = useState<EmissionStatus | "all">("all");

  const sectors = useMemo(
    () => Array.from(new Set(emissions.map((item) => item.sector[locale]))),
    [locale],
  );

  const filteredData = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return emissions.filter((item) => {
      const matchesSearch = [
        item.source[locale],
        item.sector[locale],
        item.scope,
        getStatusLabel(item.status, t),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
      const matchesSector = sector === "all" || item.sector[locale] === sector;
      const matchesScope = scope === "all" || item.scope === scope;
      const matchesStatus = status === "all" || item.status === status;

      return matchesSearch && matchesSector && matchesScope && matchesStatus;
    });
  }, [locale, search, sector, scope, status, t]);

  const columns: DataTableColumn<EmissionRecord>[] = [
    {
      key: "date",
      header: t.emissions.date,
      render: (row) => formatDate(row.date, locale),
    },
    {
      key: "source",
      header: t.emissions.source,
      render: (row) => (
        <span className="font-medium text-foreground">{row.source[locale]}</span>
      ),
    },
    {
      key: "sector",
      header: t.emissions.sector,
      render: (row) => row.sector[locale],
    },
    {
      key: "scope",
      header: t.emissions.scope,
      render: (row) => row.scope,
    },
    {
      key: "amount",
      header: t.emissions.amount,
      align: "right",
      render: (row) => formatNumber(row.amount, locale, 1),
    },
    {
      key: "status",
      header: t.emissions.status,
      render: (row) => (
        <StatusBadge
          label={getStatusLabel(row.status, t)}
          tone={statusTone[row.status]}
        />
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader title={t.emissions.title} subtitle={t.emissions.subtitle} />

      <section className="glass-panel rounded-2xl p-4">
        <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <label className="relative">
            <Search
              size={16}
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t.emissions.searchPlaceholder}
              className="h-11 w-full rounded-xl border border-border bg-card pl-9 pr-4 text-sm text-foreground placeholder:text-muted"
            />
          </label>
          <FilterSelect
            label={t.common.sector}
            value={sector}
            onChange={setSector}
            options={[
              { label: t.common.all, value: "all" },
              ...sectors.map((item) => ({ label: item, value: item })),
            ]}
          />
          <FilterSelect
            label={t.common.scope}
            value={scope}
            onChange={setScope}
            options={[
              { label: t.common.all, value: "all" },
              { label: "Scope 1", value: "Scope 1" },
              { label: "Scope 2", value: "Scope 2" },
              { label: "Scope 3", value: "Scope 3" },
            ]}
          />
          <FilterSelect
            label={t.common.status}
            value={status}
            onChange={(value) => setStatus(value as EmissionStatus | "all")}
            options={[
              { label: t.common.all, value: "all" },
              { label: t.common.onTrack, value: "onTrack" },
              { label: t.common.attention, value: "attention" },
              { label: t.common.critical, value: "critical" },
            ]}
          />
        </div>
      </section>

      <DataTable
        columns={columns}
        data={filteredData}
        getRowKey={(row) => row.id}
        emptyMessage={t.common.noResults}
      />
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="relative flex flex-col gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-xl border border-border bg-card px-3 text-sm font-medium normal-case tracking-normal text-foreground"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function getStatusLabel(
  status: EmissionStatus,
  t: Messages,
) {
  const labels = {
    onTrack: t.common.onTrack,
    attention: t.common.attention,
    critical: t.common.critical,
  };

  return labels[status];
}
