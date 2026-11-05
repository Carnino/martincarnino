"use client"

import { Fragment } from "react"
import { cn } from "@/lib/utils"

/**
 * Oversized capability band. The markup is static (readable without JS); GSAP, when it
 * loads, scrolls the track in a loop and lets scroll velocity speed it up and reverse it.
 * The track holds two copies so the -50% loop is seamless.
 */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
    const sequence = (copy: number) => (
        <div className="flex shrink-0 items-center" aria-hidden={copy > 0}>
            {items.map((item, i) => (
                <Fragment key={`${copy}-${i}`}>
                    <span
                        className={cn(
                            "whitespace-nowrap px-[0.18em]",
                            i % 2 === 1 && "text-transparent [-webkit-text-stroke:0.022em_hsl(var(--foreground))]",
                        )}
                    >
                        {item}
                    </span>
                    <span aria-hidden className="mx-[0.12em] inline-block h-[0.14em] w-[0.14em] shrink-0 rounded-full bg-foreground" />
                </Fragment>
            ))}
        </div>
    )

    return (
        <div data-marquee className={cn("overflow-hidden select-none", className)}>
            <p className="sr-only">{items.join(", ")}</p>
            <div
                aria-hidden
                data-marquee-track
                className="flex w-max text-[clamp(3rem,8vw,7.25rem)] font-semibold leading-[1.05] tracking-[-0.045em] will-change-transform"
            >
                {sequence(0)}
                {sequence(1)}
            </div>
        </div>
    )
}
