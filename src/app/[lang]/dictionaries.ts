import "server-only";

const dictionaries = {
  fr: () =>
    import("./dictionaries/fr.json").then((module) => module.default),
  en: () =>
    import("./dictionaries/en.json").then((module) => module.default),
  ar: () =>
    import("./dictionaries/ar.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const locales: Locale[] = ["fr", "en", "ar"];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]();

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
