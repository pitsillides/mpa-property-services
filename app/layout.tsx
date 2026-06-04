import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://mpapropertyservices.com";
const siteName = "MPA Property Services";
const siteDescription =
  "Επαγγελματικές υπηρεσίες διαχείρισης κτιρίων, συγκροτημάτων και κοινοχρήστων στην Κύπρο.";

export const metadata: Metadata = {
  title: {
    default: "MPA Property Services | Διαχείριση κτιρίων στην Κύπρο",
    template: "%s | MPA Property Services",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  keywords: [
    "MPA Property Services",
    "property management Cyprus",
    "building management Cyprus",
    "common expenses Cyprus",
    "διαχείριση κτιρίων Κύπρος",
    "κοινόχρηστα Κύπρος",
    "διαχείριση πολυκατοικιών",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Property Management",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "MPA Property Services | Διαχείριση κτιρίων στην Κύπρο",
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MPA Property Services - Building management in Cyprus",
      },
    ],
    locale: "el_CY",
    alternateLocale: ["en_US", "ru_RU"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPA Property Services | Building Management in Cyprus",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/og-image.png`,
  description: siteDescription,
  telephone: ["+35770088832", "+35796848481"],
  email: "services@mpa.cy",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Santa Rosa 1",
    postalCode: "2035",
    addressLocality: "Strovolos",
    addressRegion: "Nicosia",
    addressCountry: "CY",
  },
  areaServed: {
    "@type": "Country",
    name: "Cyprus",
  },
  sameAs: [
    "https://www.facebook.com/mpapropertyservices",
    "https://www.instagram.com/mpa_services/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+35796848481",
    email: "services@mpa.cy",
    contactType: "customer service",
    areaServed: "CY",
    availableLanguage: ["Greek", "English", "Russian"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el-CY">
      <head>
        <meta name="theme-color" content="#12133c" />
      </head>
      <body className="min-h-screen bg-slate-50 antialiased overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
