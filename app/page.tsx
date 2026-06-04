import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Διαχείριση κτιρίων στην Κύπρο",
  description:
    "Επαγγελματική διαχείριση κτιρίων, κοινοχρήστων και συγκροτημάτων στην Κύπρο.",
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
    title: "MPA Property Services | Διαχείριση κτιρίων στην Κύπρο",
    description:
      "Επαγγελματική διαχείριση κτιρίων, κοινοχρήστων και συγκροτημάτων στην Κύπρο.",
    url: "/",
    locale: "el_CY",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Διαχείριση κτιρίων στην Κύπρο",
    description:
      "Επαγγελματική διαχείριση κτιρίων, κοινοχρήστων και συγκροτημάτων στην Κύπρο.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return <HomePageClient initialLang="gr" />;
}
