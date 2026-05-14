import type { LucideIcon } from "lucide-react";

type KpiCardProps = {
  title: string;
  value: string;
  detail: string;
  trend?: string;
  icon: LucideIcon;
  tone?: "yellow" | "black" | "slate" | "rose";
};

const toneClasses = {
  yellow: "from-yellow-400/40 text-slate-950",
  black: "from-slate-950/12 text-slate-950",
  slate: "from-slate-500/14 text-slate-700",
  rose: "from-rose-500/16 text-rose-700",
};

export function KpiCard({
  title,
  value,
  detail,
  trend,
  icon: Icon,
  tone = "yellow",
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
          <span className="rounded-full bg-yellow-200 px-2.5 py-1 font-medium text-slate-950">
            {trend}
          </span>
        ) : null}
      </div>
    </article>
  );
}
