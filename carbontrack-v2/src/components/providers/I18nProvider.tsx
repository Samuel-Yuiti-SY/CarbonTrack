"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { messages, type Locale, type Messages } from "@/messages";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};
const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "carbontrack-locale";
const LOCALE_CHANGED = "carbontrack-locale-change";

function readLocale(): Locale {
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt";
}
function subscribe(notify: () => void) {
  window.addEventListener("storage", notify);
  window.addEventListener(LOCALE_CHANGED, notify);
  return () => {
    window.removeEventListener("storage", notify);
    window.removeEventListener(LOCALE_CHANGED, notify);
  };
}
function setLocale(locale: Locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
  window.dispatchEvent(new Event(LOCALE_CHANGED));
}
function serverLocale(): Locale {
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readLocale, serverLocale);
  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);
  const value = useMemo(
    () => ({ locale, setLocale, t: messages[locale] }),
    [locale],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
}
