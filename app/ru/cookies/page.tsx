import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Политика cookies",
  description:
    "Политика cookies MPA Property Services Ltd: необходимые, аналитические и маркетинговые cookies.",
  alternates: {
    canonical: "/ru/cookies",
    languages: {
      "el-CY": "/cookies",
      en: "/en/cookies",
      "ru-RU": "/ru/cookies",
      "x-default": "/cookies",
    },
  },
};

export default function RussianCookiesPolicyPage() {
  return <PolicyPage kind="cookies" initialLang="ru" />;
}
