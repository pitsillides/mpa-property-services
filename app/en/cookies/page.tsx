import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for MPA Property Services Ltd, including necessary, analytics and marketing cookies.",
  alternates: {
    canonical: "/en/cookies",
    languages: {
      "el-CY": "/cookies",
      en: "/en/cookies",
      "ru-RU": "/ru/cookies",
      "x-default": "/cookies",
    },
  },
};

export default function EnglishCookiesPolicyPage() {
  return <PolicyPage kind="cookies" initialLang="en" />;
}
