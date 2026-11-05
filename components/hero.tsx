"use client"

import { Fragment } from "react"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { NeedForm } from "@/components/need-form"
import { Marquee } from "@/components/marquee"

const enter = "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:fill-mode-both"

export default function Hero() {
    const { t } = useLanguage()

    return (
        <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden">
            {/* Engineering-paper grid, faded toward the edges */}
            <div
                aria-hidden
                className="absolute inset-0 -z-10 [background-image:linear-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_30%,transparent_80%)]"
            />

            <div className="flex flex-1 flex-col items-center justify-center px-4 md:px-6 py-10 md:py-12 text-center">
                <p className={cn("mb-6 flex flex-col sm:flex-row items-center justify-center gap-x-2.5 gap-y-0.5 text-muted-foreground", enter)}>
                    <span className="font-semibold text-foreground">Martín Carnino</span>
                    <span aria-hidden className="hidden sm:inline-block h-3 w-px bg-border" />
                    <span>{t.hero.role}</span>
                </p>

                <h1 className="mx-auto max-w-[20ch] text-[clamp(2.6rem,6.6vw,6rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-balance">
                    {/* One line per sentence, words numbered across both for the stagger */}
                    {t.hero.title.split(/(?<=\.)\s+/).map((sentence, s, sentences) => {
                        const offset = sentences.slice(0, s).reduce((n, prev) => n + prev.split(" ").length, 0)
                        return (
                            <span key={s} className="block">
                                {sentence.split(" ").map((word, i, words) => (
                                    <Fragment key={i}>
                                        <span className="word-mask">
                                            <span style={{ "--i": offset + i } as React.CSSProperties}>{word}</span>
                                        </span>
                                        {i < words.length - 1 && " "}
                                    </Fragment>
                                ))}
                            </span>
                        )
                    })}
                </h1>

                <p className={cn("mx-auto mt-7 max-w-[46ch] text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty", enter, "motion-safe:delay-500")}>
                    {t.hero.body}
                </p>

                <NeedForm align="center" className={cn("mx-auto mt-8 w-full max-w-3xl", enter, "motion-safe:delay-700")} />

                <a
                    href="#work"
                    className={cn(
                        "mt-4 inline-flex items-center gap-1.5 py-2 text-sm font-medium underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground",
                        enter,
                        "motion-safe:delay-1000",
                    )}
                >
                    {t.hero.ctaWork}
                    <ArrowDown className="h-4 w-4" />
                </a>
            </div>

            <Marquee items={t.hero.marquee} className="border-t py-2 md:py-3" />
        </section>
    )
}
