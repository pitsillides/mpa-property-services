import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Building Management in Cyprus",
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
    images: ["/og-image.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Building Management in Cyprus",
    description:
      "Professional building management, common expenses and property services for buildings and residential complexes in Cyprus.",
    images: ["/og-image.png"],
  },
};

export default function EnglishHomePage() {
  return <HomePageClient initialLang="en" />;
}
