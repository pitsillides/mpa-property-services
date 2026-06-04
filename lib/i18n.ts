export type Lang = "gr" | "en" | "ru";

export type LocalizedText = Record<Lang, string>;

export const htmlLangByLang: Record<Lang, string> = {
  gr: "el-CY",
  en: "en",
  ru: "ru",
};

export function pick(lang: Lang, text: LocalizedText) {
  return text[lang] ?? text.en;
}
