"use client"

import { useState } from "react"
import { ArrowUp, Check, Copy, Github, Linkedin, Mail } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/lib/i18n/context"
import { site } from "@/lib/projects"
import { NeedForm } from "@/components/need-form"

export default function Contact() {
    const { t } = useLanguage()
    const [copied, setCopied] = useState(false)

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(site.email)
            setCopied(true)
            toast.success(t.contact.copied)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            toast(`${t.contact.copyFailed} ${site.email}`)
        }
    }

    return (
        <>
            <section id="contact" aria-labelledby="contact-title" className="bg-foreground text-background">
                <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
                    <h2 data-reveal id="contact-title" className="max-w-[16ch] text-5xl md:text-7xl font-semibold tracking-[-0.045em] leading-[1.02] text-balance">
                        {t.contact.title}
                    </h2>
                    <p data-reveal className="mt-6 max-w-[52ch] text-lg leading-relaxed text-background/70">{t.contact.body}</p>

                    <div data-reveal className="mt-10 max-w-3xl">
                        <NeedForm tone="inverted" />
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                        <div className="inline-flex h-14 items-stretch overflow-hidden rounded-full border border-background/25">
                            <a
                                href={`mailto:${site.email}`}
                                className="inline-flex min-w-0 flex-1 items-center gap-2 px-6 font-medium transition-colors hover:bg-background/10"
                            >
                                <Mail className="h-5 w-5 shrink-0" />
                                <span className="truncate">{site.email}</span>
                            </a>
                            <button
                                type="button"
                                onClick={copyEmail}
                                aria-label={t.contact.copy}
                                title={t.contact.copy}
                                className="inline-flex w-14 shrink-0 items-center justify-center border-l border-background/25 transition-colors hover:bg-background/10"
                            >
                                {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-background/70">
                        <span>{t.contact.elsewhere}</span>
                        <a
                            href={site.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-background underline decoration-background/30 underline-offset-4 hover:decoration-background"
                        >
                            <Linkedin className="h-4 w-4" />
                            LinkedIn
                        </a>
                        <a
                            href={site.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-background underline decoration-background/30 underline-offset-4 hover:decoration-background"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </a>
                    </p>
                </div>
            </section>

            <footer className="bg-foreground text-background/60 border-t border-background/15">
                <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-4 md:px-6 py-8 text-sm">
                    <a
                        href={site.wayclo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 transition-colors hover:text-background"
                    >
                        {t.contact.partOf}
                        {/* Footer is always dark (inverted in dark mode), so pick the logo that contrasts. */}
                        <img src="/wayclo-white.png" alt="Wayclo" width={120} height={32} loading="lazy" decoding="async" className="h-4 w-auto opacity-90 dark:hidden" />
                        <img src="/wayclo-black.png" alt="Wayclo" width={120} height={32} loading="lazy" decoding="async" className="hidden h-4 w-auto opacity-90 dark:block" />
                    </a>
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <span suppressHydrationWarning>
                            © {new Date().getFullYear()} {t.contact.rights}
                        </span>
                        <a href="#" className="inline-flex items-center gap-1.5 py-2 transition-colors hover:text-background">
                            {t.contact.top}
                            <ArrowUp className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
