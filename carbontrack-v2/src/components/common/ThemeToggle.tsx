"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useI18n } from "@/components/providers/I18nProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const isDark = resolvedTheme === "dark";
  const nextTheme = isDark ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-300 dark:hover:text-slate-950"
      aria-label={`${t.common.theme}: ${isDark ? t.common.light : t.common.dark}`}
      title={`${t.common.theme}: ${isDark ? t.common.light : t.common.dark}`}
    >
      {isDark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
      <span className="hidden sm:inline">
        {isDark ? t.common.light : t.common.dark}
      </span>
    </button>
  );
}
