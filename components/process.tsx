"use client"

import { useLanguage } from "@/lib/i18n/context"

export default function Process() {
    const { t } = useLanguage()

    return (
        <section id="process" aria-labelledby="process-title" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 border-t">
            <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 md:mb-16">
                <h2 id="process-title" className="lg:col-span-7 text-4xl md:text-6xl font-semibold tracking-[-0.04em]">
                    {t.process.title}
                </h2>
                <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed max-w-[48ch]">{t.process.intro}</p>
            </div>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                {t.process.steps.map((step, i) => (
                    <li key={i} className="relative pt-5">
                        <span aria-hidden data-draw className="absolute inset-x-0 top-0 h-0.5 bg-foreground" />
                        <span className="text-sm tabular-nums text-muted-foreground">{i + 1}</span>
                        <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{step.body}</p>
                    </li>
                ))}
            </ol>
        </section>
    )
}
