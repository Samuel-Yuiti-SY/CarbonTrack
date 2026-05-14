"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useI18n } from "@/components/providers/I18nProvider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();

  const isDark = (resolvedTheme ?? "dark") !== "light";
  const nextTheme = isDark ? "light" : "dark";
  const label = isDark ? t.common.light : t.common.dark;

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition hover:border-cyan-300 hover:text-cyan-700 dark:hover:border-cyan-500 dark:hover:text-cyan-200"
      aria-label={`${t.common.theme}: ${label}`}
      title={`${t.common.theme}: ${label}`}
    >
      {isDark ? <Sun size={16} aria-hidden /> : <Moon size={16} aria-hidden />}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
