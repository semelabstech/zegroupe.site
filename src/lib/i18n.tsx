"use client";

import { createContext, useContext, useEffect } from "react";
import type { Dictionary } from "@/app/[lang]/dictionaries";

type I18nContextType = {
  dict: Dictionary;
  lang: string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function LanguageProvider({
  dict,
  lang,
  children,
}: {
  dict: Dictionary;
  lang: string;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ dict, lang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}

export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  return null;
}
