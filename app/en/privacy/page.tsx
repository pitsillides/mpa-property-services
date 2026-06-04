import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for MPA Property Services Ltd and the use of website contact details.",
  alternates: {
    canonical: "/en/privacy",
    languages: {
      "el-CY": "/privacy",
      en: "/en/privacy",
      "ru-RU": "/ru/privacy",
      "x-default": "/privacy",
    },
  },
};

export default function EnglishPrivacyPage() {
  return <PolicyPage kind="privacy" initialLang="en" />;
}
