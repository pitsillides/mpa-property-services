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
    title: "MPA Property Services | Building Management",
    description:
      "Building management, common expenses, maintenance coordination and responsive support for apartment buildings and complexes.",
    url: "/en",
    images: [
      {
        url: "/og-social-preview-en.png",
        width: 1200,
        height: 630,
        alt: "MPA Property Services - Building management and common expenses support",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Building Management",
    description:
      "Building management, common expenses, maintenance coordination and responsive support for apartment buildings and complexes.",
    images: ["/og-social-preview-en.png"],
  },
};

export default function EnglishHomePage() {
  return <HomePageClient initialLang="en" />;
}
