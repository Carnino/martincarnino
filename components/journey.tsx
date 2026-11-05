"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Journey() {
    const { t } = useLanguage()

    return (
        <section id="background" aria-labelledby="background-title" className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28 border-t">
            <h2 data-reveal id="background-title" className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] mb-12 md:mb-16">
                {t.journey.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Who */}
                <div className="lg:col-span-4" data-reveal>
                    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-muted">
                        <Image
                            src="/martin.webp"
                            alt={t.journey.photoAlt}
                            fill
                            sizes="(min-width: 1024px) 360px, 90vw"
                            className="object-cover object-top"
                        />
                    </div>
                    <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {t.journey.location}
                    </p>
                    <div className="mt-6 space-y-4 leading-relaxed max-w-sm">
                        {t.journey.bio.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Timeline + tools */}
                <div className="lg:col-span-8">
                    <ol data-reveal-group className="border-t">
                        {t.journey.items.map((item) => (
                            <li key={item.org} className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-8 gap-y-1 border-b py-7">
                                <p className="text-sm tabular-nums text-muted-foreground sm:pt-1">{item.period}</p>
                                <div>
                                    <h3 className="text-xl font-semibold tracking-[-0.02em]">{item.role}</h3>
                                    <p className="text-muted-foreground">{item.org}</p>
                                    <p className="mt-3 leading-relaxed max-w-[60ch]">{item.body}</p>
                                </div>
                            </li>
                        ))}
                    </ol>

                    <h3 className="mt-14 text-xl font-semibold tracking-[-0.02em]">{t.journey.toolsTitle}</h3>
                    <dl data-reveal-group className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                        {t.journey.tools.map((tool) => (
                            <div key={tool.group}>
                                <dt className="text-sm text-muted-foreground">{tool.group}</dt>
                                <dd className="mt-1.5 leading-relaxed">{tool.items.join(", ")}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
