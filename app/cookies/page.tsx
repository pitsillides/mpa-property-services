import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for MPA Property Services Ltd, including necessary, analytics and marketing cookies.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPolicyPage() {
  return <PolicyPage kind="cookies" />;
}
