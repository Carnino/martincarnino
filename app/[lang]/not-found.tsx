"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { pathFor } from "@/lib/i18n/config"
import { Marquee } from "@/components/marquee"

export default function NotFound() {
    const { t, language } = useLanguage()

    return (
        <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
            <div
                aria-hidden
                className="absolute inset-0 -z-10 [background-image:linear-gradient(hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_30%,transparent_80%)]"
            />
            <div className="mx-auto w-full max-w-6xl px-4 md:px-6 pt-6">
                <Link href={pathFor(language)} className="font-semibold tracking-tight text-[15px]">
                    Martín Carnino
                </Link>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
                <p className="font-mono text-sm text-muted-foreground">404</p>
                <h1 className="mt-4 max-w-[16ch] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1] tracking-[-0.045em] text-balance">
                    {t.notFound.title}
                </h1>
                <p className="mt-5 max-w-[44ch] text-lg text-muted-foreground">{t.notFound.body}</p>
                <Link
                    href={pathFor(language)}
                    className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 font-medium text-background transition-opacity hover:opacity-85"
                >
                    <ArrowLeft className="h-4 w-4" />
                    {t.notFound.cta}
                </Link>
            </div>
            <Marquee items={t.hero.marquee} className="border-t py-2 md:py-3" />
        </main>
    )
}
