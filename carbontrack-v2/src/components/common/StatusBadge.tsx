type StatusBadgeProps = {
  label: string;
  tone?: "emerald" | "cyan" | "amber" | "rose" | "slate";
};

const toneClasses = {
  emerald:
    "border-emerald-500/25 bg-emerald-500/12 text-emerald-700 dark:text-emerald-200",
  cyan: "border-cyan-500/25 bg-cyan-500/12 text-cyan-700 dark:text-cyan-200",
  amber:
    "border-amber-500/25 bg-amber-500/12 text-amber-700 dark:text-amber-200",
  rose: "border-rose-500/25 bg-rose-500/12 text-rose-700 dark:text-rose-200",
  slate:
    "border-slate-500/20 bg-slate-500/10 text-slate-700 dark:text-slate-200",
};

export function StatusBadge({ label, tone = "slate" }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {label}
    </span>
  );
}
