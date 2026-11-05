"use client"

import { createContext, useCallback, useContext } from "react"
import { useRouter } from "next/navigation"
import { translations, type Dictionary, type Language } from "./translations"
import { pathFor } from "./config"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * The language comes from the URL ("/" English, "/es" Spanish) and is rendered on the server,
 * so every visitor and every crawler gets the right language in the first HTML.
 */
export function LanguageProvider({ language, children }: { language: Language; children: React.ReactNode }) {
    const router = useRouter()

    const setLanguage = useCallback(
        (lang: Language) => {
            if (lang === language) return
            // Same section, other language: keep the scroll position and any #hash.
            router.push(pathFor(lang) + window.location.hash, { scroll: false })
        },
        [language, router],
    )

    return <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
