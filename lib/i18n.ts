export type Lang = "gr" | "en" | "ru";

export type LocalizedText = Record<Lang, string>;

export const htmlLangByLang: Record<Lang, string> = {
  gr: "el-CY",
  en: "en",
  ru: "ru",
};

export const urlPrefixByLang: Record<Lang, string> = {
  gr: "",
  en: "/en",
  ru: "/ru",
};

export const languagesByHrefLang: Record<string, string> = {
  "el-CY": "/",
  en: "/en",
  "ru-RU": "/ru",
  "x-default": "/",
};

export function localizePath(pathname: string, lang: Lang) {
  const pathWithoutLang = pathname.replace(/^\/(en|ru)(?=\/|$)/, "") || "/";
  const normalizedPath = pathWithoutLang === "/" ? "" : pathWithoutLang;

  return `${urlPrefixByLang[lang]}${normalizedPath}` || "/";
}

export function localizedHomePath(lang: Lang, hash?: string) {
  const basePath = urlPrefixByLang[lang] || "/";
  const normalizedBase = basePath === "/" ? "/" : basePath;

  return hash ? `${normalizedBase}#${hash}` : normalizedBase;
}

export function pick(lang: Lang, text: LocalizedText) {
  return text[lang] ?? text.en;
}
