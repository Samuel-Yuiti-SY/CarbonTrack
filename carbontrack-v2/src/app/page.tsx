"use client";

import Image from "next/image";
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
          <Image
            src="/logo.png"
            alt="CarbonTrack"
            width={142}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <section className="relative border-y border-border bg-gradient-to-br from-yellow-200 via-white to-background dark:from-yellow-500/25 dark:via-card dark:to-background">
        <div className="absolute inset-0 subtle-grid opacity-50" aria-hidden />
        <DashboardPreview />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-yellow-400 bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
              {t.landing.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.common.product} - {t.landing.title}
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
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-yellow-700/20 transition hover:bg-yellow-300"
              >
                {t.common.accessDemo}
                <ArrowRight size={17} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition hover:border-yellow-400 hover:bg-yellow-50"
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
              className="mb-4 text-yellow-500"
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
      className="pointer-events-none absolute inset-y-6 right-[-8rem] z-0 hidden w-[48rem] rotate-[-2deg] rounded-[2rem] border border-border bg-card/88 p-5 opacity-95 shadow-2xl backdrop-blur-xl lg:block"
      aria-hidden
    >
      <div className="flex items-center justify-between border-b border-border pb-4">
        <Image
          src="/logo.png"
          alt=""
          width={142}
          height={60}
          className="h-10 w-auto"
        />
        <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-semibold text-slate-950">
          {t.landing.previewGoal} 78%
        </span>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_12rem] gap-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {t.landing.previewTitle}
          </p>
          <p className="text-xs text-muted">{t.landing.previewSubtitle}</p>
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
                  className="rounded-2xl border border-border bg-background/80 p-4"
                >
                  <Icon className="text-yellow-600 dark:text-yellow-300" size={19} aria-hidden />
                  <strong className="mt-4 block text-2xl text-foreground">
                    {item.value}
                  </strong>
                  <span className="text-xs text-muted">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <Image
          src="/caminhoneiro.png"
          alt=""
          width={220}
          height={220}
          className="h-48 w-48 rounded-full object-contain"
        />
      </div>
      <div className="mt-5 grid grid-cols-[1fr_15rem] gap-4">
        <div className="rounded-2xl border border-border bg-background/80 p-4">
          <div className="flex h-52 items-end gap-3">
            {[68, 62, 58, 52, 49, 44, 38].map((height, index) => (
              <span
                key={height + index}
                className="flex-1 rounded-t-xl bg-gradient-to-t from-yellow-500 to-yellow-300"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {[LineChart, BarChart3, Leaf].map((Icon, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-background/80 p-4"
            >
              <Icon className="text-yellow-600" size={18} aria-hidden />
              <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-white/15">
                <div
                  className="h-2 rounded-full bg-yellow-400"
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
