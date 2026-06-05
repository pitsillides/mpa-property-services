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
    title: "MPA Property Services | Διαχείριση κτιρίων σε Λευκωσία & Λεμεσό",
    description:
      "Διαχείριση κτιρίων, πολυκατοικιών και κοινοχρήστων με έδρα τη Λευκωσία, ενεργή παρουσία σε Λευκωσία και Λεμεσό, και δυνατότητα παγκύπριας εξυπηρέτησης.",
    url: "/",
    locale: "el_CY",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Διαχείριση κτιρίων σε Λευκωσία & Λεμεσό",
    description:
      "Με έδρα τη Λευκωσία, αναλαμβάνουμε διαχείριση κτιρίων, πολυκατοικιών και κοινοχρήστων σε Λευκωσία και Λεμεσό.",
    images: ["/og-social-preview.png"],
  },
};

export default function HomePage() {
  return <HomePageClient initialLang="gr" />;
}
