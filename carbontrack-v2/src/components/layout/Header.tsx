"use client";

import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/common/LanguageToggle";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useI18n } from "@/components/providers/I18nProvider";
import type { Messages } from "@/messages";

type HeaderProps = {
  onMenuClick: () => void;
};

const routeKeys: Record<string, keyof Messages["nav"]> = {
  "/dashboard": "dashboard",
  "/emissions": "emissions",
  "/fleet": "fleet",
  "/reports": "reports",
  "/settings": "settings",
  "/about": "about",
};

export function Header({ onMenuClick }: HeaderProps) {
  const { t } = useI18n();
  const pathname = usePathname();
  const activeKey = routeKeys[pathname] ?? "dashboard";

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground lg:hidden"
            aria-label={t.common.openMenu}
          >
            <Menu size={18} aria-hidden />
          </button>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-300">
              {t.common.version}
            </p>
            <p className="truncate text-sm text-muted">{t.nav[activeKey]}</p>
          </div>
        </div>

        <div className="hidden min-w-0 flex-1 justify-center px-6 md:flex">
          <label className="relative w-full max-w-md">
            <Search
              size={16}
              aria-hidden
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              placeholder={t.common.search}
              className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted"
            />
          </label>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
