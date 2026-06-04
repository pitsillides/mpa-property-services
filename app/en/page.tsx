import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "MPA Property Services | Building Management in Cyprus",
  description:
    "Professional building management, common expenses and property services for buildings and residential complexes in Cyprus.",
  alternates: {
    canonical: "/en",
    languages: {
      "el-CY": "/",
      en: "/en",
      "ru-RU": "/ru",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "MPA Property Services | Building Management in Cyprus",
    description:
      "Professional building management, common expenses and property services for buildings and residential complexes in Cyprus.",
    url: "/en",
    locale: "en_US",
  },
};

export default function EnglishHomePage() {
  return <HomePageClient initialLang="en" />;
}
