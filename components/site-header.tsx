"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Menu, MessageCircle, Moon, Sun, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import type { Language } from "@/lib/i18n/translations"
import { site } from "@/lib/projects"

const SECTIONS = ["work", "ai", "process", "background", "contact"] as const

function useActiveSection() {
    const [active, setActive] = useState<string | null>(null)

    useEffect(() => {
        let frame = 0
        const update = () => {
            frame = 0
            // The current section is the last one whose top has passed a line 35% down the viewport.
            // Above the first section (the hero) nothing is highlighted.
            const line = window.innerHeight * 0.35
            let current: string | null = null
            for (const id of SECTIONS) {
                const el = document.getElementById(id)
                if (el && el.getBoundingClientRect().top <= line) current = id
            }
            // At the very bottom the last section may never reach the line.
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                current = SECTIONS[SECTIONS.length - 1]
            }
            setActive(current)
        }
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update)
        }
        update()
        window.addEventListener("scroll", onScroll, { passive: true })
        window.addEventListener("resize", onScroll)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener("scroll", onScroll)
            window.removeEventListener("resize", onScroll)
        }
    }, [])

    return active
}

function LanguageSwitch() {
    const { language, setLanguage, t } = useLanguage()
    const options: Language[] = ["en", "es"]

    return (
        <div role="group" aria-label={t.nav.language} className="flex items-center rounded-full border p-0.5 text-xs font-semibold">
            {options.map((lang) => (
                <button
                    key={lang}
                    type="button"
                    onClick={() => setLanguage(lang)}
                    aria-pressed={language === lang}
                    className={cn(
                        "h-7 min-w-9 rounded-full px-2 uppercase transition-colors",
                        language === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {lang}
                </button>
            ))}
        </div>
    )
}

function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme()
    const { t } = useLanguage()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const isDark = mounted && resolvedTheme === "dark"
    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={isDark ? t.nav.toLight : t.nav.toDark}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:text-foreground"
        >
            {mounted ? isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" /> : <span className="h-4 w-4" />}
        </button>
    )
}

export default function SiteHeader() {
    const { t } = useLanguage()
    const active = useActiveSection()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open])

    const links = [
        { id: "work", label: t.nav.work },
        { id: "ai", label: t.nav.ai },
        { id: "process", label: t.nav.process },
        { id: "background", label: t.nav.journey },
        { id: "contact", label: t.nav.contact },
    ]

    return (
        <header
            className={cn(
                "sticky top-0 z-40 border-b transition-colors duration-300",
                scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent bg-background",
            )}
        >
            <a
                href="#content"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
            >
                {t.skip}
            </a>

            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
                <a href="#" aria-label={t.nav.home} className="font-semibold tracking-tight text-[15px]">
                    Martín Carnino
                </a>

                <nav aria-label="Main" className="hidden md:block">
                    <ul className="flex items-center gap-1 text-sm">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    aria-current={active === link.id ? "true" : undefined}
                                    className={cn(
                                        "relative rounded-full px-3 py-2 transition-colors",
                                        active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                                    )}
                                >
                                    {link.label}
                                    <span
                                        aria-hidden
                                        className={cn(
                                            "absolute inset-x-3 -bottom-px h-px bg-foreground transition-opacity",
                                            active === link.id ? "opacity-100" : "opacity-0",
                                        )}
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <div className="hidden sm:flex items-center gap-2">
                        <LanguageSwitch />
                        <ThemeSwitch />
                    </div>
                    <a
                        href={site.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-85"
                    >
                        <MessageCircle className="h-4 w-4" />
                        {t.nav.whatsapp}
                    </a>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                        className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border"
                    >
                        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            <div id="mobile-menu" hidden={!open} className="md:hidden border-t">
                <nav aria-label="Menu" className="mx-auto max-w-6xl px-4 py-3">
                    <ul className="flex flex-col">
                        {links.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center justify-between py-3 text-lg font-medium border-b last:border-b-0"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between gap-3 pt-4 pb-2">
                        <div className="flex items-center gap-2">
                            <LanguageSwitch />
                            <ThemeSwitch />
                        </div>
                        <a
                            href={site.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 items-center gap-2 rounded-full bg-foreground px-4 text-sm font-medium text-background"
                        >
                            <MessageCircle className="h-4 w-4" />
                            {t.nav.whatsapp}
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}
