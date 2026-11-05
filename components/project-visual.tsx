"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/projects"
import { useLanguage } from "@/lib/i18n/context"

interface ProjectVisualProps {
    project: Project
    /** "card" shows the overlay and lifts the cover on hover of a parent `.group`. */
    variant?: "card" | "hero"
    priority?: boolean
    className?: string
    sizes?: string
    /** No panel color of its own: for use inside a container that already has it. */
    bare?: boolean
}

const lift = "motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out"

/**
 * A project's cover set on a panel of its brand color: an inset browser screenshot bleeding
 * off the bottom-right edge, a device mockup, a centered logo or a full-bleed photo, plus an
 * optional second visual (a chat card, a phone) floating over it.
 */
export function ProjectVisual({ project, variant = "card", priority, className, sizes, bare }: ProjectVisualProps) {
    const { language } = useLanguage()
    const { cover, overlay, coverKind } = project

    return (
        <div
            className={cn("relative isolate overflow-hidden rounded-2xl aspect-[16/11]", className)}
            style={bare ? undefined : { backgroundColor: project.panel }}
        >
            {coverKind === "photo" && (
                <Image
                    src={cover.src}
                    alt={cover.alt[language]}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className={cn("object-cover motion-safe:group-hover:scale-[1.03]", lift, "motion-safe:duration-700")}
                />
            )}

            {coverKind === "logo" && (
                <div className="absolute inset-0 flex items-center justify-center p-[14%]">
                    <Image
                        src={cover.src}
                        alt={cover.alt[language]}
                        width={cover.width}
                        height={cover.height}
                        priority={priority}
                        className={cn("w-full max-w-[440px] h-auto drop-shadow-[0_2px_0_rgba(0,0,0,0.15)] motion-safe:group-hover:scale-[1.03]", lift)}
                    />
                </div>
            )}

            {coverKind === "device" && (
                <div className="absolute inset-x-[2%] top-[4%] bottom-[10%] flex items-center justify-center" data-parallax={variant === "card" ? "3" : undefined}>
                    <Image
                        src={cover.src}
                        alt={cover.alt[language]}
                        width={cover.width}
                        height={cover.height}
                        priority={priority}
                        sizes={sizes}
                        className={cn("max-h-full w-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] motion-safe:group-hover:-translate-y-1.5", lift)}
                    />
                </div>
            )}

            {coverKind === "screenshot" && (
                <div className="absolute left-[7%] top-[9%] w-[106%]" data-parallax={variant === "card" ? "4" : undefined}>
                    <div
                        className={cn(
                            "overflow-hidden rounded-tl-[12px] bg-white shadow-[0_30px_70px_-28px_rgba(0,0,0,0.6)] ring-1 ring-black/10 motion-safe:group-hover:-translate-y-1.5",
                            lift,
                        )}
                    >
                        <Image
                            src={cover.src}
                            alt={cover.alt[language]}
                            width={cover.width}
                            height={cover.height}
                            priority={priority}
                            sizes={sizes}
                            className="block w-full h-auto"
                        />
                    </div>
                </div>
            )}

            {overlay && variant === "card" && (
                <div
                    className={cn(
                        "absolute z-10 motion-safe:group-hover:-translate-y-3",
                        lift,
                        overlay.kind === "card" &&
                            "right-[5%] bottom-[7%] w-[40%] overflow-hidden rounded-lg ring-1 ring-black/10 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.6)]",
                        overlay.kind === "device" && "right-[-3%] bottom-[-8%] w-[46%] drop-shadow-[0_24px_30px_rgba(0,0,0,0.45)]",
                        // A phone: dark bezel around a mobile screenshot
                        overlay.kind === "phone" &&
                            "right-[6%] bottom-[-18%] w-[22%] rounded-[clamp(1rem,2.4vw,2.2rem)] bg-[#0c0d10] p-[1.1%] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
                    )}
                >
                    <Image
                        src={overlay.src}
                        alt={overlay.alt[language]}
                        width={overlay.width}
                        height={overlay.height}
                        sizes="(min-width: 1024px) 24vw, 40vw"
                        className={cn("block w-full h-auto", overlay.kind === "phone" && "rounded-[clamp(0.8rem,2vw,1.8rem)]")}
                    />
                </div>
            )}
        </div>
    )
}
