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
    title: "MPA Property Services | Управление зданиями в Никосии и Лимасоле",
    description:
      "Управление зданиями, многоквартирными домами и общими расходами в Никосии и Лимасоле, с возможностью обслуживания по всему Кипру.",
    url: "/ru",
    images: ["/og-social-preview.png"],
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Управление зданиями в Никосии и Лимасоле",
    description:
      "Управление зданиями, многоквартирными домами и общими расходами в Никосии и Лимасоле.",
    images: ["/og-social-preview.png"],
  },
};

export default function RussianHomePage() {
  return <HomePageClient initialLang="ru" />;
}
