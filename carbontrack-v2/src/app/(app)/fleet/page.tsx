"use client";

import { AlertTriangle, Gauge, Route, Truck } from "lucide-react";
import { DataTable, type DataTableColumn } from "@/components/common/DataTable";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatusBadge } from "@/components/common/StatusBadge";
import { useI18n } from "@/components/providers/I18nProvider";
import { fleet, type FleetStatus, type FleetVehicle } from "@/data/fleet";
import { formatNumber } from "@/lib/format";
import type { Messages } from "@/messages";

const fleetTone: Record<FleetStatus, "yellow" | "amber" | "rose"> = {
  efficient: "yellow",
  attention: "amber",
  critical: "rose",
};

export default function FleetPage() {
  const { locale, t } = useI18n();

  const columns: DataTableColumn<FleetVehicle>[] = [
    {
      key: "plate",
      header: t.fleet.plate,
      render: (row) => <span className="font-semibold">{row.plate}</span>,
    },
    { key: "model", header: t.fleet.model, render: (row) => row.model },
    { key: "route", header: t.fleet.route, render: (row) => row.route[locale] },
    {
      key: "km",
      header: t.fleet.km,
      align: "right",
      render: (row) => formatNumber(row.km, locale),
    },
    {
      key: "consumption",
      header: t.fleet.consumption,
      align: "right",
      render: (row) => `${formatNumber(row.consumption, locale)} L`,
    },
    {
      key: "emission",
      header: t.fleet.emission,
      align: "right",
      render: (row) => formatNumber(row.emission, locale, 1),
    },
    {
      key: "status",
      header: t.fleet.status,
      render: (row) => (
        <StatusBadge
          label={getFleetStatus(row.status, t)}
          tone={fleetTone[row.status]}
        />
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader title={t.fleet.title} subtitle={t.fleet.subtitle} />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {fleet.map((vehicle) => {
          const highEmission = vehicle.status === "critical";

          return (
            <article
              key={vehicle.id}
              className={`rounded-2xl border bg-card p-5 shadow-sm ${
                highEmission
                  ? "border-rose-400/50 ring-2 ring-rose-500/10"
                  : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300/45 text-slate-950">
                  <Truck size={22} aria-hidden />
                </span>
                <StatusBadge
                  label={getFleetStatus(vehicle.status, t)}
                  tone={fleetTone[vehicle.status]}
                />
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">{vehicle.plate}</h2>
                <p className="mt-1 text-sm text-muted">{vehicle.model}</p>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <p className="flex items-center gap-2 text-muted">
                  <Route size={16} aria-hidden />
                  {vehicle.route[locale]}
                </p>
                <p className="flex items-center gap-2 text-muted">
                  <Gauge size={16} aria-hidden />
                  {formatNumber(vehicle.km, locale)} km ·{" "}
                  {formatNumber(vehicle.emission, locale, 1)} tCO2e
                </p>
                {highEmission ? (
                  <p className="flex items-center gap-2 rounded-xl bg-rose-500/10 px-3 py-2 text-rose-700">
                    <AlertTriangle size={16} aria-hidden />
                    {t.fleet.highEmission}
                  </p>
                ) : null}
              </div>
            </article>
          );
        })}
      </section>

      <DataTable
        columns={columns}
        data={fleet}
        getRowKey={(row) => row.id}
      />
    </div>
  );
}

function getFleetStatus(status: FleetStatus, t: Messages) {
  const labels = {
    efficient: t.fleet.efficiency,
    attention: t.common.attention,
    critical: t.common.critical,
  };

  return labels[status];
}
