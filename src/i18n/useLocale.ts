import { createContext, useContext, createElement, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import type { Copy, Locale } from "./types";
import { copyEn } from "./copy.en";
import { copyHe } from "./copy.he";

const copies: Record<Locale, Copy> = {
  en: copyEn,
  he: copyHe,
};

type LocaleContextValue = {
  locale: Locale;
  t: Copy;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale: Locale =
    location.pathname === "/he" || location.pathname.startsWith("/he/") ? "he" : "en";
  const t = copies[locale];

  return createElement(LocaleContext.Provider, { value: { locale, t } }, children);
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
