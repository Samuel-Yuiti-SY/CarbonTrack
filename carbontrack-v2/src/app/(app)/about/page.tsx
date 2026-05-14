"use client";

import {
  Brain,
  CheckCircle2,
  Code2,
  Lightbulb,
  Rocket,
  Target,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { useI18n } from "@/components/providers/I18nProvider";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-6">
      <SectionHeader title={t.about.title} subtitle={t.about.subtitle} />

      <section className="grid gap-4 lg:grid-cols-2">
        <InfoPanel icon={Target} title={t.about.problemTitle}>
          {t.about.problem}
        </InfoPanel>
        <InfoPanel icon={Lightbulb} title={t.about.solutionTitle}>
          {t.about.solution}
        </InfoPanel>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <ListPanel icon={Code2} title={t.about.technologiesTitle} items={t.about.technologies} />
        <ListPanel icon={CheckCircle2} title={t.about.featuresTitle} items={t.about.features} />
        <ListPanel icon={Rocket} title={t.about.nextTitle} items={t.about.next} />
      </section>

      <section className="glass-panel rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-yellow-300/45 text-slate-950">
            <Brain size={22} aria-hidden />
          </span>
          <div>
            <h2 className="text-xl font-semibold">{t.about.learningsTitle}</h2>
            <p className="mt-3 max-w-4xl leading-7 text-muted">
              {t.about.learnings}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Icon className="text-yellow-500" size={24} aria-hidden />
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mt-3 leading-7 text-muted">{children}</p>
    </article>
  );
}

function ListPanel({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <Icon className="text-yellow-500" size={24} aria-hidden />
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle2
              className="mt-0.5 shrink-0 text-yellow-500"
              size={16}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
