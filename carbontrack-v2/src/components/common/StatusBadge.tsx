type StatusBadgeProps = {
  label: string;
  tone?: "yellow" | "black" | "amber" | "rose" | "slate";
};

const toneClasses = {
  yellow: "border-yellow-500/40 bg-yellow-200 text-slate-950",
  black: "border-slate-950 bg-slate-950 text-white",
  amber: "border-amber-500/25 bg-amber-500/12 text-amber-700",
  rose: "border-rose-500/25 bg-rose-500/12 text-rose-700",
  slate: "border-slate-500/20 bg-slate-500/10 text-slate-700",
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
