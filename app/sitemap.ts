import type { MetadataRoute } from "next"
import { pathFor, siteUrl } from "@/lib/i18n/config"

export default function sitemap(): MetadataRoute.Sitemap {
    const languages = { en: `${siteUrl}${pathFor("en")}`, es: `${siteUrl}${pathFor("es")}` }
    return (["en", "es"] as const).map((lang) => ({
        url: `${siteUrl}${pathFor(lang)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: lang === "en" ? 1 : 0.9,
        alternates: { languages },
    }))
}
