import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Building Management in Nicosia & Limassol",
  description:
    "Nicosia-based building management, apartment block management and common expenses services for Nicosia and Limassol, with support available across Cyprus.",
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
    title: "MPA Property Services | Building Management in Nicosia & Limassol",
    description:
      "Professional building management, apartment block management and common expenses services in Nicosia and Limassol, with island-wide support where needed.",
    url: "/en",
    images: ["/og-social-preview.png"],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Building Management in Nicosia & Limassol",
    description:
      "Nicosia-based building management, apartment block management and common expenses services for Nicosia and Limassol.",
    images: ["/og-social-preview.png"],
  },
};

export default function EnglishHomePage() {
  return <HomePageClient initialLang="en" />;
}
