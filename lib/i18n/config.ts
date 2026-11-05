import type { Language } from "./translations"

export const languages: Language[] = ["en", "es"]
export const defaultLanguage: Language = "en"

export const isLanguage = (value: string | undefined): value is Language => languages.includes(value as Language)

/** Public path of each language: English lives at "/", Spanish at "/es". */
export const pathFor = (lang: Language) => (lang === defaultLanguage ? "/" : `/${lang}`)

/**
 * Absolute site URL, for metadata, the sitemap and social images. Set NEXT_PUBLIC_SITE_URL
 * once the custom domain exists; on Vercel it falls back to the production domain.
 */
export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
