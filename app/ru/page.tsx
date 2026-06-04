import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Управление зданиями на Кипре",
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
    images: ["/og-image.png"],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Управление зданиями на Кипре",
    description:
      "Профессиональное управление зданиями, общими расходами и жилыми комплексами на Кипре.",
    images: ["/og-image.png"],
  },
};

export default function RussianHomePage() {
  return <HomePageClient initialLang="ru" />;
}
