"use client";

import { useState } from "react";
import { Building2, CheckCircle2, Globe2, Save } from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/components/providers/I18nProvider";

export default function SettingsPage() {
  const { locale, t } = useI18n();
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-6">
      <SectionHeader title={t.settings.title} subtitle={t.settings.subtitle} />

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-300/45 text-slate-950">
              <Building2 size={20} aria-hidden />
            </span>
            <h2 className="text-lg font-semibold">{t.settings.company}</h2>
          </div>
          <div className="grid gap-4">
            <Field label={t.settings.companyName} defaultValue="CarbonTrack Demo Labs" />
            <Field
              label={t.settings.industry}
              defaultValue={locale === "pt" ? "Logistica e operacoes" : "Logistics and operations"}
            />
            <Field label={t.settings.country} defaultValue={locale === "pt" ? "Brasil" : "Brazil"} />
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-yellow-300/45 text-slate-950">
              <Globe2 size={20} aria-hidden />
            </span>
            <h2 className="text-lg font-semibold">{t.settings.preferences}</h2>
          </div>
          <div className="grid gap-4">
            <PreferenceRow label={t.common.language}>
              <LanguageToggle />
            </PreferenceRow>
            <PreferenceRow label={t.common.theme}>
              <span className="rounded-full bg-yellow-300 px-3 py-1 text-sm font-semibold text-slate-950">
                CarbonTrack original
              </span>
            </PreferenceRow>
            <Field label={t.settings.measureUnit} defaultValue="tCO2e" />
            <Field label={t.settings.monthlyGoal} defaultValue="980 tCO2e" />
          </div>
        </section>
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-yellow-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
        >
          <Save size={16} aria-hidden />
          {t.common.save}
        </button>
        {saved ? (
          <p className="flex items-center gap-2 text-sm text-slate-950">
            <CheckCircle2 size={16} aria-hidden />
            {t.settings.saved}
          </p>
        ) : null}
      </div>
    </div>
  );
}

function Field({ label, defaultValue }: { label: string; defaultValue: string }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
      {label}
      <input
        defaultValue={defaultValue}
        className="h-11 rounded-xl border border-border bg-background px-3 text-sm text-foreground"
      />
    </label>
  );
}

function PreferenceRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background px-3 py-3">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </div>
  );
}
