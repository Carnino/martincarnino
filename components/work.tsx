"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ArrowUpRight, Lock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { getProject, isLightPanel, projects, type Project } from "@/lib/projects"
import { ProjectVisual } from "@/components/project-visual"
import { ProjectDialog } from "@/components/project-dialog"

function clearHash() {
    history.replaceState(null, "", window.location.pathname + window.location.search)
}

/**
 * One card per project, in the project's brand color, led by the need it solved.
 * The cards are sticky on any screen at least 700px tall (phones included), so each one
 * slides over the previous; GSAP (when it loads) also scales the covered card back.
 * On phones the card is compact (visual on top, no stack list) so it fits one screen.
 * On short screens, or without JS, it is a plain readable list.
 */
function ProjectCard({ project, index, total, onOpen }: { project: Project; index: number; total: number; onOpen: () => void }) {
    const { t, language } = useLanguage()
    const light = isLightPanel(project)

    return (
        <article
            id={project.id}
            data-stack-card
            aria-labelledby={`${project.id}-name`}
            className={cn(
                "relative overflow-hidden rounded-[24px] lg:rounded-[28px] scroll-mt-20",
                "sticky top-[4.5rem] lg:top-20 [@media(max-height:699px)]:static",
                "lg:h-[calc(100svh-6.5rem)] lg:min-h-[600px] lg:max-h-[860px]",
                light ? "text-[#121417]" : "text-white",
            )}
            style={{ backgroundColor: project.panel, zIndex: index + 1 }}
        >
            <div className="grid h-full grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 p-4 sm:p-8 lg:p-12">
                <div className="lg:col-span-5 flex flex-col">
                    <div className={cn("flex flex-wrap items-center justify-between gap-3 text-sm", light ? "text-black/65" : "text-white/75")}>
                        <span className="tabular-nums">
                            {String(index + 1).padStart(2, "0")} {t.work.of} {String(total).padStart(2, "0")}
                        </span>
                        <span className="inline-flex items-center gap-2">
                            {project.sector[language]}
                            <span aria-hidden className="h-3 w-px bg-current opacity-40" />
                            <span className="inline-flex items-center gap-1.5">
                                <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", project.status === "live" ? "bg-current" : "border border-current")} />
                                {t.work.status[project.status]}
                            </span>
                        </span>
                    </div>

                    <div className="mt-5 sm:mt-8 lg:mt-auto">
                        <p className={cn("text-sm", light ? "text-black/65" : "text-white/75")}>{t.work.needLabel}</p>
                        <p className="mt-1.5 sm:mt-2 text-[clamp(1.6rem,3.2vw,2.9rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance">
                            {project.need[language]}
                        </p>
                    </div>

                    <div className={cn("mt-5 border-t pt-4 sm:mt-8 sm:pt-6", light ? "border-black/15" : "border-white/20")}>
                        <h3 id={`${project.id}-name`} className="text-2xl font-semibold tracking-[-0.02em]">
                            {project.name}
                        </h3>
                        <p className={cn("mt-1 text-[15px] sm:text-base leading-snug text-pretty", light ? "text-black/75" : "text-white/80")}>{project.tagline[language]}</p>
                        <p className={cn("mt-3 hidden sm:block text-sm", light ? "text-black/60" : "text-white/65")}>{project.stack.join(", ")}</p>

                        <div className="mt-4 sm:mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                            <button
                                type="button"
                                onClick={onOpen}
                                className={cn(
                                    "inline-flex h-11 items-center rounded-full px-5 text-sm font-medium transition-transform motion-safe:hover:-translate-y-0.5",
                                    light ? "bg-[#121417] text-white" : "bg-white text-[#121417]",
                                )}
                            >
                                {t.work.viewCase}
                                <span className="sr-only">: {project.name}</span>
                            </button>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={t.work.tryBotNote}
                                    className={cn(
                                        "inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium transition-colors",
                                        light ? "border-black/25 hover:bg-black/5" : "border-white/40 hover:bg-white/10",
                                    )}
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-60 motion-safe:animate-ping" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                                    </span>
                                    {t.work.tryBot}
                                </a>
                            )}
                            {project.url ? (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm font-medium underline decoration-current/40 underline-offset-4 hover:decoration-current"
                                >
                                    {t.work.visit}
                                    <span className="sr-only">: {project.name}</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            ) : (
                                <span className={cn("inline-flex items-center gap-1.5 text-sm", light ? "text-black/65" : "text-white/75")}>
                                    <Lock className="h-3.5 w-3.5" />
                                    {t.work.privateLink}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onOpen}
                    tabIndex={-1}
                    aria-hidden
                    className="group order-first lg:order-none lg:col-span-7 block self-center text-left"
                >
                    <ProjectVisual
                        project={project}
                        bare
                        sizes="(min-width: 1024px) 680px, 100vw"
                        className={light ? "bg-black/[0.07]" : "bg-black/[0.14]"}
                    />
                </button>
            </div>
        </article>
    )
}

export default function Work() {
    const { t } = useLanguage()
    const [openId, setOpenId] = useState<string | null>(null)
    const opener = useRef<HTMLElement | null>(null)

    // Deep links: /#botito opens that project; going Back to a URL without it closes it.
    useEffect(() => {
        const sync = () => {
            const id = window.location.hash.slice(1)
            setOpenId(getProject(id) ? id : null)
        }
        sync()
        window.addEventListener("hashchange", sync)
        return () => window.removeEventListener("hashchange", sync)
    }, [])

    const open = useCallback((project: Project) => {
        // Remember what opened it (the card's "View details"), to return focus there on close.
        const active = document.activeElement
        if (active instanceof HTMLElement && active !== document.body && !active.closest("[role=dialog]")) {
            opener.current = active
        } else if (!document.querySelector("[role=dialog]")) {
            opener.current = document.querySelector<HTMLElement>(`#${project.id} button:not([tabindex="-1"])`)
        }
        setOpenId(project.id)
        history.replaceState(null, "", `#${project.id}`)
    }, [])

    return (
        <section id="work" aria-labelledby="work-title" className="mx-auto max-w-[1400px] px-3 sm:px-4 md:px-6 py-20 md:py-28">
            <div data-reveal className="mx-auto max-w-6xl px-1 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 md:mb-16">
                <h2 id="work-title" className="lg:col-span-7 text-5xl md:text-7xl font-semibold tracking-[-0.045em]">
                    {t.work.title}
                </h2>
                <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed max-w-[48ch]">{t.work.intro}</p>
            </div>

            {/* The gap is scroll "dwell": each card stays fully in view for a while (30vh on
                phones, 40vh on desktop) before the next one starts sliding over it. */}
            <div className="flex flex-col gap-[30vh] lg:gap-[40vh] [@media(max-height:699px)]:gap-4">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} total={projects.length} onOpen={() => open(project)} />
                ))}
            </div>

            <ProjectDialog
                project={openId ? getProject(openId) ?? null : null}
                onOpenChange={(isOpen) => {
                    if (!isOpen) {
                        setOpenId(null)
                        clearHash()
                    }
                }}
                onNavigate={open}
                returnFocusTo={() => opener.current}
            />
        </section>
    )
}
