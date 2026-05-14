import type { Locale } from "@/messages";

const localeMap = {
  pt: "pt-BR",
  en: "en-US",
} satisfies Record<Locale, string>;

export function formatNumber(value: number, locale: Locale, digits = 0) {
  return new Intl.NumberFormat(localeMap[locale], {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);
}

export function formatCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(localeMap[locale], {
    style: "currency",
    currency: locale === "pt" ? "BRL" : "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(value: string, locale: Locale) {
  return new Intl.DateTimeFormat(localeMap[locale], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}
