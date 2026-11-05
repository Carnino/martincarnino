import type { Metadata, Viewport } from "next"
import "../globals.css"
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { LanguageProvider } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { defaultLanguage, isLanguage, languages, pathFor, siteUrl } from "@/lib/i18n/config"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { site } from "@/lib/projects"

const sans = Schibsted_Grotesk({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
})

const mono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    display: "swap",
})

type Params = Promise<{ lang: string }>

export function generateStaticParams() {
    return languages.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { lang: raw } = await params
    const lang = isLanguage(raw) ? raw : defaultLanguage
    const { title, description } = translations[lang].meta
    return {
        metadataBase: new URL(siteUrl),
        title,
        description,
        authors: [{ name: "Martín Carnino" }],
        alternates: {
            canonical: pathFor(lang),
            languages: { en: pathFor("en"), es: pathFor("es"), "x-default": pathFor("en") },
        },
        openGraph: {
            type: "profile",
            url: pathFor(lang),
            locale: lang === "es" ? "es_AR" : "en_US",
            alternateLocale: lang === "es" ? ["en_US"] : ["es_AR"],
            title,
            description,
            siteName: "Martín Carnino",
        },
        twitter: { card: "summary_large_image", title, description },
    }
}

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#EFF1F4" },
        { media: "(prefers-color-scheme: dark)", color: "#101216" },
    ],
}

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martín Carnino",
    url: siteUrl,
    jobTitle: "Systems Engineer & AI Specialist",
    address: { "@type": "PostalAddress", addressLocality: "Río Cuarto", addressRegion: "Córdoba", addressCountry: "AR" },
    alumniOf: "Universidad Tecnológica Nacional, Facultad Regional Villa María",
    worksFor: { "@type": "Organization", name: "Wayclo", url: site.wayclo },
    email: `mailto:${site.email}`,
    sameAs: [site.linkedin, site.github],
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Params }>) {
    const { lang: raw } = await params
    // Unknown first segments (e.g. /foo) still render the 404 page in the default language.
    const lang = isLanguage(raw) ? raw : defaultLanguage

    return (
        <html lang={lang} suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
            <body className="font-sans">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <LanguageProvider language={lang}>
                        {children}
                        <Toaster position="bottom-center" />
                    </LanguageProvider>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
