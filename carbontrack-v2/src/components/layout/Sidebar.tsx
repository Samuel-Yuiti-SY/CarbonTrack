"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FileText,
  Gauge,
  Info,
  Settings,
  Truck,
  X,
} from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";

const navItems = [
  { href: "/dashboard", key: "dashboard", icon: Gauge },
  { href: "/emissions", key: "emissions", icon: BarChart3 },
  { href: "/fleet", key: "fleet", icon: Truck },
  { href: "/reports", key: "reports", icon: FileText },
  { href: "/settings", key: "settings", icon: Settings },
  { href: "/about", key: "about", icon: Info },
] as const;

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/50 transition lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-card/95 px-4 py-4 shadow-2xl backdrop-blur transition-transform lg:sticky lg:top-0 lg:h-dvh lg:translate-x-0 lg:shadow-none ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between gap-3 px-2">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <Image
              src="/logo.png"
              alt="CarbonTrack"
              width={142}
              height={60}
              className="h-11 w-auto"
              priority
            />
            <span className="sr-only">{t.common.product}</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted lg:hidden"
            aria-label={t.common.closeMenu}
          >
            <X size={17} aria-hidden />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-yellow-300/45 text-foreground ring-1 ring-yellow-400"
                    : "text-muted hover:bg-yellow-100 hover:text-foreground"
                }`}
              >
                <Icon size={18} aria-hidden />
                {t.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="rounded-2xl border border-border bg-yellow-50 p-4 text-sm">
          <p className="font-semibold text-foreground">{t.common.demoBadge}</p>
          <p className="mt-2 leading-6 text-muted">
            {t.common.updated} - Vercel ready
          </p>
        </div>
      </aside>
    </>
  );
}
