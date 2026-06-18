import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { copy, type Copy, type Locale } from "./copy";

type LocaleContextValue = {
  locale: Locale;
  t: Copy;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const locale: Locale = location.pathname === "/he" || location.pathname.startsWith("/he/") ? "he" : "en";
  const t = copy[locale];

  return <LocaleContext.Provider value={{ locale, t }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
