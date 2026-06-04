import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "MPA Property Services | Управление зданиями на Кипре",
  description:
    "Профессиональное управление зданиями, общими расходами и жилыми комплексами на Кипре.",
  alternates: {
    canonical: "/ru",
    languages: {
      "el-CY": "/",
      en: "/en",
      "ru-RU": "/ru",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "MPA Property Services | Управление зданиями на Кипре",
    description:
      "Профессиональное управление зданиями, общими расходами и жилыми комплексами на Кипре.",
    url: "/ru",
    locale: "ru_RU",
  },
};

export default function RussianHomePage() {
  return <HomePageClient initialLang="ru" />;
}
