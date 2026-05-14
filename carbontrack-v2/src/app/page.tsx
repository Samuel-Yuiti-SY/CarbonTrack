"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  Leaf,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useI18n } from "@/components/providers/I18nProvider";

export default function Home() {
  const { t } = useI18n();

  return (
    <main className="min-h-dvh overflow-hidden bg-background text-foreground">
      <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-sm font-black text-slate-950">
            CT
          </span>
          <span>
            <span className="block text-base font-semibold">
              {t.common.product}
            </span>
            <span className="block text-xs text-muted">v2 SaaS demo</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <section className="relative border-y border-border">
        <div className="absolute inset-0 subtle-grid opacity-45" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/82 to-background/45" />
        <DashboardPreview />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-200">
              {t.landing.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.common.product} — {t.landing.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
              {t.landing.description}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              {t.landing.portfolio}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/15 transition hover:scale-[1.01]"
              >
                {t.common.accessDemo}
                <ArrowRight size={17} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:border-emerald-400"
              >
                {t.nav.about}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {t.landing.benefits.map((benefit) => (
          <article
            key={benefit}
            className="rounded-2xl border border-border bg-card p-5 shadow-sm"
          >
            <CheckCircle2
              className="mb-4 text-emerald-500"
              size={22}
              aria-hidden
            />
            <p className="text-sm leading-6 text-muted">{benefit}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function DashboardPreview() {
  const { t } = useI18n();

  return (
    <div
      className="pointer-events-none absolute inset-y-6 right-[-8rem] z-0 hidden w-[48rem] rotate-[-2deg] rounded-[2rem] border border-border bg-card/78 p-5 opacity-80 shadow-2xl backdrop-blur-xl lg:block"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {t.landing.previewTitle}
          </p>
          <p className="text-xs text-muted">{t.landing.previewSubtitle}</p>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-200">
          {t.landing.previewGoal} 78%
        </span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { icon: Gauge, label: t.landing.previewMetric, value: "1,032" },
          { icon: Leaf, label: t.landing.previewReduction, value: "16.2%" },
          { icon: ShieldCheck, label: t.landing.previewSources, value: "8" },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border border-border bg-background/70 p-4"
            >
              <Icon className="text-cyan-500" size={19} aria-hidden />
              <strong className="mt-4 block text-2xl text-foreground">
                {item.value}
              </strong>
              <span className="text-xs text-muted">{item.label}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-5 grid grid-cols-[1fr_15rem] gap-4">
        <div className="rounded-2xl border border-border bg-background/70 p-4">
          <div className="flex h-52 items-end gap-3">
            {[68, 62, 58, 52, 49, 44, 38].map((height, index) => (
              <span
                key={height + index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-500 to-cyan-400"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[LineChart, BarChart3, Leaf].map((Icon, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background/70 p-4"
            >
              <Icon className="text-emerald-500" size={18} aria-hidden />
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-2 rounded-full bg-cyan-400"
                  style={{ width: `${86 - index * 18}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
