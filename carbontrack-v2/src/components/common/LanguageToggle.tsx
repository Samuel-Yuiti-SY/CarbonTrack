"use client";

import { Languages } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import type { Locale } from "@/messages";

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n();

  const nextLocale: Locale = locale === "pt" ? "en" : "pt";

  return (
    <button
      type="button"
      onClick={() => setLocale(nextLocale)}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-foreground shadow-sm transition hover:border-yellow-400 hover:bg-yellow-50"
      aria-label={`${t.common.language}: ${nextLocale.toUpperCase()}`}
      title={`${t.common.language}: ${nextLocale.toUpperCase()}`}
    >
      <Languages size={16} aria-hidden />
      <span>{locale.toUpperCase()}</span>
    </button>
  );
}
