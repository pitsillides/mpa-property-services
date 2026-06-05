import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Διαχείριση Κτιρίων σε Λευκωσία & Λεμεσό",
  description:
    "Με έδρα τη Λευκωσία, η MPA Property Services αναλαμβάνει διαχείριση κτιρίων, πολυκατοικιών και κοινοχρήστων σε Λευκωσία και Λεμεσό, με παγκύπρια εξυπηρέτηση.",
  alternates: {
    canonical: "/",
    languages: {
      "el-CY": "/",
      en: "/en",
      "ru-RU": "/ru",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "MPA Property Services | Διαχείριση Κτιρίων",
    description:
      "Διαχείριση κτιρίων, κοινόχρηστα, συντονισμός συντήρησης και άμεση υποστήριξη για πολυκατοικίες και συγκροτήματα.",
    url: "/",
    images: [
      {
        url: "/og-social-preview-en.png",
        width: 1200,
        height: 630,
        alt: "MPA Property Services - Building management and common expenses support",
      },
    ],
    locale: "el_CY",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Διαχείριση Κτιρίων",
    description:
      "Διαχείριση κτιρίων, κοινόχρηστα, συντονισμός συντήρησης και άμεση υποστήριξη για πολυκατοικίες και συγκροτήματα.",
    images: ["/og-social-preview-en.png"],
  },
};

export default function HomePage() {
  return <HomePageClient initialLang="gr" />;
}
