import type { MetadataRoute } from "next";

const siteUrl = "https://mpapropertyservices.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const homeAlternates = {
    languages: {
      "el-CY": `${siteUrl}/`,
      en: `${siteUrl}/en`,
      "ru-RU": `${siteUrl}/ru`,
      "x-default": `${siteUrl}/`,
    },
  };
  const privacyAlternates = {
    languages: {
      "el-CY": `${siteUrl}/privacy`,
      en: `${siteUrl}/en/privacy`,
      "ru-RU": `${siteUrl}/ru/privacy`,
      "x-default": `${siteUrl}/privacy`,
    },
  };
  const cookiesAlternates = {
    languages: {
      "el-CY": `${siteUrl}/cookies`,
      en: `${siteUrl}/en/cookies`,
      "ru-RU": `${siteUrl}/ru/cookies`,
      "x-default": `${siteUrl}/cookies`,
    },
  };

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: homeAlternates,
    },
    {
      url: `${siteUrl}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: homeAlternates,
    },
    {
      url: `${siteUrl}/ru`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: homeAlternates,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: privacyAlternates,
    },
    {
      url: `${siteUrl}/en/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: privacyAlternates,
    },
    {
      url: `${siteUrl}/ru/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: privacyAlternates,
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: cookiesAlternates,
    },
    {
      url: `${siteUrl}/en/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: cookiesAlternates,
    },
    {
      url: `${siteUrl}/ru/cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
      alternates: cookiesAlternates,
    },
  ];
}
