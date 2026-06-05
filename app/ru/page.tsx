import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Управление зданиями в Никосии и Лимасоле",
  description:
    "Управление зданиями, многоквартирными домами и общими расходами в Никосии и Лимасоле. Офис в Никосии, обслуживание возможно по всему Кипру.",
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
    title: "MPA Property Services | Управление зданиями",
    description:
      "Управление зданиями, общие расходы, координация обслуживания и быстрая поддержка для многоквартирных домов и комплексов.",
    url: "/ru",
    images: [
      {
        url: "/og-social-preview-en.png",
        width: 1200,
        height: 630,
        alt: "MPA Property Services - Building management and common expenses support",
      },
    ],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Управление зданиями",
    description:
      "Управление зданиями, общие расходы, координация обслуживания и быстрая поддержка для многоквартирных домов и комплексов.",
    images: ["/og-social-preview-en.png"],
  },
};

export default function RussianHomePage() {
  return <HomePageClient initialLang="ru" />;
}
