"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useI18n } from "@/components/providers/I18nProvider";
import { monthlyEmissions, dashboardKpis } from "@/data/dashboard";

export default function Home() {
  const { t, locale } = useI18n();
  return (
    <div className="carbon-home">
      <a className="carbon-skip" href="#main">
        {locale === "pt" ? "Ir para o conteúdo" : "Skip to content"}
      </a>
      <header className="carbon-width carbon-site-header">
        <Link href="/" aria-label="CarbonTrack">
          <Image
            src="/logo.png"
            alt="CarbonTrack"
            width={142}
            height={60}
            priority
            className="carbon-logo"
          />
        </Link>
        <nav
          aria-label={
            locale === "pt" ? "Navegação principal" : "Main navigation"
          }
        >
          <Link href="/about">{t.nav.about}</Link>
          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </header>
      <main id="main">
        <section className="carbon-width carbon-hero">
          <div className="carbon-intro">
            <p className="carbon-eyebrow">
              CARBONTRACK /{" "}
              {locale === "pt"
                ? "INTELIGÊNCIA AMBIENTAL"
                : "ENVIRONMENTAL INTELLIGENCE"}
            </p>
            <h1>{t.landing.title}</h1>
            <p className="carbon-lead">{t.landing.description}</p>
            <Link className="carbon-primary" href="/dashboard">
              {t.common.accessDemo}
              <ArrowRight size={18} aria-hidden />
            </Link>
            <p className="carbon-disclosure">{t.landing.portfolio}</p>
            <div className="carbon-links">
              <Link href="/emissions">
                {t.nav.emissions}
                <ArrowUpRight size={15} aria-hidden />
              </Link>
              <Link href="/fleet">
                {t.nav.fleet}
                <ArrowUpRight size={15} aria-hidden />
              </Link>
              <Link href="/reports">
                {t.nav.reports}
                <ArrowUpRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
          <section className="carbon-chart" aria-labelledby="chart-title">
            <div className="carbon-chart-top">
              <h2 id="chart-title">{t.dashboard.charts.monthly}</h2>
              <span>{t.landing.previewSubtitle}</span>
            </div>
            <div className="carbon-metric">
              <strong>{dashboardKpis.monthlyEmissions.value}</strong>
              <span>{t.landing.previewMetric}</span>
            </div>
            <div
              className="carbon-bars"
              role="img"
              aria-label={monthlyEmissions
                .map((m) => `${m.month[locale]}: ${m.emissions} tCO2e`)
                .join("; ")}
            >
              {monthlyEmissions.map((month, index) => (
                <div className="carbon-bar-column" key={month.month.en}>
                  <span className="carbon-bar-value">
                    {new Intl.NumberFormat(
                      locale === "pt" ? "pt-BR" : "en-US",
                    ).format(month.emissions)}
                  </span>
                  <div
                    className={`carbon-bar ${index === monthlyEmissions.length - 1 ? "carbon-bar-current" : ""}`}
                    style={{ height: `${(month.emissions / 1400) * 170}px` }}
                  />
                  <span className="carbon-bar-month">
                    {month.month[locale]}
                  </span>
                </div>
              ))}
            </div>
            <div className="carbon-chart-footer">
              <span>{t.common.demoBadge}</span>
              <Link href="/dashboard" aria-label={t.common.viewDashboard}>
                <ArrowRight size={20} aria-hidden />
              </Link>
            </div>
          </section>
        </section>
        <section className="carbon-features">
          <div className="carbon-width">
            <div className="carbon-section-title">
              <p className="carbon-eyebrow">
                {locale === "pt"
                  ? "DA MEDIÇÃO À LEITURA DOS DADOS"
                  : "FROM MEASUREMENT TO DATA INSIGHTS"}
              </p>
              <h2>
                {locale === "pt"
                  ? "Uma operação. Diferentes perspectivas."
                  : "One operation. Different perspectives."}
              </h2>
            </div>
            <ol>
              {t.landing.benefits.map((benefit, index) => (
                <li key={benefit}>
                  <span>0{index + 1}</span>
                  <p>{benefit}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <footer className="carbon-width carbon-footer">
        <p>CarbonTrack · {t.common.demoBadge}</p>
        <Link href="/about">
          {t.nav.about}
          <ArrowUpRight size={14} aria-hidden />
        </Link>
      </footer>
    </div>
  );
}
