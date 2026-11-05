"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { ArrowUpRight, Mail, MessageCircle, Moon, Sun } from "lucide-react"
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

/** Where the menu circle grows from: the center of the menu button (top-right of the header). */
const MENU_ORIGIN = "calc(100% - 34px) 32px"

/** Two lines that rotate into an X. */
function MenuIcon({ open }: { open: boolean }) {
    return (
        <span aria-hidden className="relative block h-3 w-4">
            <span
                className={cn(
                    "absolute left-0 top-0.5 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
                    open && "translate-y-[3.25px] rotate-45",
                )}
            />
            <span
                className={cn(
                    "absolute bottom-0.5 left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-300 ease-out motion-reduce:transition-none",
                    open && "-translate-y-[3.25px] -rotate-45",
                )}
            />
        </span>
    )
}

export default function SiteHeader() {
    const { t } = useLanguage()
    const active = useActiveSection()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const toggleRef = useRef<HTMLButtonElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // Lock/unlock page scroll. Unlocking is also called synchronously when a menu link is
    // clicked, so the smooth scroll to the section isn't blocked by a still-locked page.
    const lockScroll = (locked: boolean) => {
        document.documentElement.style.overflow = locked ? "hidden" : ""
    }

    const close = useCallback((returnFocus = true) => {
        lockScroll(false)
        setOpen(false)
        if (returnFocus) toggleRef.current?.focus({ preventScroll: true })
    }, [])

    useEffect(() => {
        if (!open) return
        lockScroll(true)

        // Focus the first link once the menu is on screen.
        const frame = requestAnimationFrame(() => menuRef.current?.querySelector<HTMLElement>("a, button")?.focus({ preventScroll: true }))

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault()
                close()
                return
            }
            // Keep Tab inside the menu (plus the toggle button that closes it).
            if (e.key === "Tab" && menuRef.current) {
                const focusables = [
                    toggleRef.current,
                    ...menuRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
                ].filter(Boolean) as HTMLElement[]
                const first = focusables[0]
                const last = focusables[focusables.length - 1]
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault()
                    last.focus()
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault()
                    first.focus()
                }
            }
        }
        // The menu is mobile-only: if the viewport grows past it, close it.
        const desktop = window.matchMedia("(min-width: 768px)")
        const onResize = () => desktop.matches && close(false)

        window.addEventListener("keydown", onKey)
        desktop.addEventListener("change", onResize)
        return () => {
            cancelAnimationFrame(frame)
            window.removeEventListener("keydown", onKey)
            desktop.removeEventListener("change", onResize)
            lockScroll(false)
        }
    }, [open, close])

    const links = [
        { id: "work", label: t.nav.work },
        { id: "ai", label: t.nav.ai },
        { id: "process", label: t.nav.process },
        { id: "background", label: t.nav.journey },
        { id: "contact", label: t.nav.contact },
    ]

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-40 border-b transition-colors duration-300",
                    open
                        ? "border-transparent bg-transparent"
                        : scrolled
                          ? "border-border bg-background/85 backdrop-blur-md"
                          : "border-transparent bg-background",
                )}
            >
                <a
                    href="#content"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
                >
                    {t.skip}
                </a>

                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 md:px-6">
                    <a href="#" aria-label={t.nav.home} onClick={() => open && close(false)} className="font-semibold tracking-tight text-[15px]">
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
                            ref={toggleRef}
                            type="button"
                            onClick={() => (open ? close() : setOpen(true))}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                            className={cn(
                                "md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300",
                                open && "border-foreground bg-foreground text-background",
                            )}
                        >
                            <MenuIcon open={open} />
                        </button>
                    </div>
                </div>
            </header>

            {/*
              Full-screen mobile menu. Lives outside <header> on purpose: the header's
              backdrop-filter would otherwise become the containing block of this fixed layer.
              It grows as a circle from the menu button (clip-path) and shrinks back into it.
            */}
            <div
                ref={menuRef}
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label={t.nav.menu}
                inert={!open}
                className={cn(
                    "fixed inset-0 z-30 flex flex-col bg-background pt-16 md:hidden",
                    "motion-reduce:!transition-none",
                    open
                        ? "visible [transition:clip-path_650ms_cubic-bezier(0.7,0,0.2,1),visibility_0s]"
                        : "invisible [transition:clip-path_500ms_cubic-bezier(0.7,0,0.2,1),visibility_0s_linear_500ms]",
                )}
                style={{ clipPath: open ? `circle(150% at ${MENU_ORIGIN})` : `circle(0% at ${MENU_ORIGIN})` }}
            >
                <nav aria-label={t.nav.menu} className="flex-1 overflow-y-auto px-6 pt-8">
                    <ul>
                        {links.map((link, i) => (
                            <li key={link.id} className="overflow-hidden border-b border-border/60">
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => close(false)}
                                    aria-current={active === link.id ? "true" : undefined}
                                    className={cn(
                                        "flex items-center justify-between gap-4 py-3 text-[clamp(2.25rem,10.5vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.04em]",
                                        "transition-transform duration-700 ease-[cubic-bezier(0.2,0.7,0.1,1)] motion-reduce:transition-none",
                                        open ? "translate-y-0" : "translate-y-full",
                                        active === link.id ? "text-foreground" : "text-foreground/70",
                                    )}
                                    style={{ transitionDelay: open ? `${180 + i * 60}ms` : "0ms" }}
                                >
                                    {link.label}
                                    {active === link.id && <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full bg-live" />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div
                    className={cn(
                        "border-t px-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
                        "transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none",
                        open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
                    )}
                    style={{ transitionDelay: open ? "460ms" : "0ms" }}
                >
                    <p className="text-sm text-muted-foreground">{t.nav.menuContact}</p>
                    <div className="mt-3 grid grid-cols-1 gap-2">
                        <a
                            href={site.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-12 items-center justify-between rounded-2xl bg-foreground px-5 font-medium text-background"
                        >
                            <span className="inline-flex items-center gap-2">
                                <MessageCircle className="h-4 w-4" />
                                {t.nav.whatsapp}
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <a href={`mailto:${site.email}`} className="inline-flex h-12 min-w-0 items-center gap-2 rounded-2xl border px-5 font-medium">
                            <Mail className="h-4 w-4 shrink-0" />
                            <span className="truncate">{site.email}</span>
                        </a>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <LanguageSwitch />
                        <ThemeSwitch />
                    </div>
                </div>
            </div>
        </>
    )
}
