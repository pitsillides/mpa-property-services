import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности MPA Property Services Ltd и использование данных, отправленных через сайт.",
  alternates: {
    canonical: "/ru/privacy",
    languages: {
      "el-CY": "/privacy",
      en: "/en/privacy",
      "ru-RU": "/ru/privacy",
      "x-default": "/privacy",
    },
  },
};

export default function RussianPrivacyPage() {
  return <PolicyPage kind="privacy" initialLang="ru" />;
}
