"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, Language, TranslationKey } from './translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey, params?: Record<string, string>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Hydration mismatch avoidance
        setMounted(true);
        const stored = localStorage.getItem('portfolio_lang') as Language;
        if (stored === 'es' || stored === 'en') {
            setLanguage(stored);
        } else {
            // Auto detect from browser
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'en') {
                setLanguage('en');
                localStorage.setItem('portfolio_lang', 'en');
            }
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('portfolio_lang', lang);
    };

    const t = (key: TranslationKey, params?: Record<string, string>): string => {
        let text = translations[language][key] || translations['es'][key] || key;
        
        if (params) {
            Object.entries(params).forEach(([paramKey, value]) => {
                text = text.replace(`{${paramKey}}`, value);
            });
        }
        
        return text;
    };

    // Prevent hydration mismatch by rendering default on server, then updating
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: 'es', setLanguage: handleSetLanguage, t }}>
                <div style={{ visibility: 'hidden' }}>{children}</div>
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
