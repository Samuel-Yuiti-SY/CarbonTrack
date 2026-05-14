import type { LucideIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string;
  detail: string;
  trend?: string;
  icon: LucideIcon;
  tone?: "emerald" | "cyan" | "blue" | "slate" | "rose";
};

const toneClasses = {
  emerald: "from-emerald-500/18 text-emerald-700 dark:text-emerald-200",
  cyan: "from-cyan-500/18 text-cyan-700 dark:text-cyan-200",
  blue: "from-blue-500/18 text-blue-700 dark:text-blue-200",
  slate: "from-slate-500/14 text-slate-700 dark:text-slate-200",
  rose: "from-rose-500/16 text-rose-700 dark:text-rose-200",
};

export function KpiCard({
  title,
  value,
  detail,
  trend,
  icon: Icon,
  tone = "emerald",
}: KpiCardProps) {
  return (
    <article className="glass-panel rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted">{title}</p>
          <strong className="mt-3 block text-2xl font-semibold tracking-tight text-foreground">
            {value}
          </strong>
        </div>
        <span
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br to-transparent ${toneClasses[tone]}`}
        >
          <Icon size={21} aria-hidden />
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-sm">
        <span className="text-muted">{detail}</span>
        {trend ? (
          <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 font-medium text-emerald-700 dark:text-emerald-200">
            {trend}
          </span>
        ) : null}
      </div>
    </article>
  );
}
