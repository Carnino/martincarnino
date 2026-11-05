"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowUpRight, Instagram, Lock, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { projectImages, projects, type Project } from "@/lib/projects"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { StatusLabel } from "@/components/status-label"

interface ProjectDialogProps {
    project: Project | null
    onOpenChange: (open: boolean) => void
    onNavigate: (project: Project) => void
    /** Element to give focus back to when the dialog closes (the button that opened it). */
    returnFocusTo?: () => HTMLElement | null
}

export function ProjectDialog({ project: requested, onOpenChange, onNavigate, returnFocusTo }: ProjectDialogProps) {
    const { t, language } = useLanguage()
    const [index, setIndex] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    // Keep showing the last project while the dialog animates closed.
    const [shown, setShown] = useState<Project | null>(requested)
    useEffect(() => {
        if (requested) setShown(requested)
    }, [requested])

    useEffect(() => {
        setIndex(0)
        contentRef.current?.scrollTo({ top: 0 })
    }, [requested?.id])

    const project = requested ?? shown
    if (!project) return null

    const images = projectImages(project)
    const current = images[Math.min(index, images.length - 1)]
    const position = projects.findIndex((p) => p.id === project.id)
    const prev = projects[(position - 1 + projects.length) % projects.length]
    const next = projects[(position + 1) % projects.length]
    const isLogo = project.coverKind === "logo" && current.src === project.cover.src

    return (
        <Dialog open={!!requested} onOpenChange={onOpenChange}>
            <DialogContent
                ref={contentRef}
                closeLabel={t.caseStudy.close}
                // Start at the top of the dialog, not on the last focusable button.
                onOpenAutoFocus={(e) => {
                    e.preventDefault()
                    contentRef.current?.focus({ preventScroll: true })
                }}
                onCloseAutoFocus={(e) => {
                    const target = returnFocusTo?.()
                    if (target) {
                        e.preventDefault()
                        target.focus({ preventScroll: true })
                    }
                }}
                // grid children default to min-width:auto; min-w-0 stops the thumbnail row from
                // widening the dialog past the screen on phones.
                className="max-w-5xl w-[calc(100%-1.5rem)] max-h-[92dvh] overflow-y-auto overflow-x-hidden gap-0 p-0 rounded-2xl sm:rounded-2xl border-0 bg-card [&>*]:min-w-0 focus:outline-none focus-visible:outline-none"
            >
                {/* Gallery */}
                <div className="p-2 sm:p-3">
                    <div
                        className="relative flex aspect-[16/10] lg:aspect-[2/1] items-center justify-center overflow-hidden rounded-xl"
                        style={{ backgroundColor: project.panel }}
                    >
                        <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
                            <Image
                                key={current.src}
                                src={current.src}
                                alt={current.alt[language]}
                                width={current.width}
                                height={current.height}
                                sizes="(min-width: 1024px) 960px, 100vw"
                                className={cn(
                                    "max-h-full w-auto object-contain motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300",
                                    isLogo ? "max-w-[60%]" : "max-w-full",
                                    !isLogo && !current.mockup && "rounded-lg shadow-[0_24px_50px_-20px_rgba(0,0,0,0.55)]",
                                )}
                            />
                        </div>
                    </div>

                    {images.length > 1 && (
                        <div className="mt-2 flex gap-2 overflow-x-auto pb-1" role="group" aria-label={t.caseStudy.showImage}>
                            {images.map((image, i) => (
                                <button
                                    key={image.src}
                                    type="button"
                                    onClick={() => setIndex(i)}
                                    aria-pressed={i === index}
                                    aria-label={`${t.caseStudy.showImage}: ${image.alt[language]}`}
                                    className={cn(
                                        "relative h-14 w-24 shrink-0 overflow-hidden rounded-md ring-offset-2 ring-offset-card transition",
                                        i === index ? "ring-2 ring-foreground" : "opacity-60 hover:opacity-100",
                                    )}
                                    style={{ backgroundColor: project.panel }}
                                >
                                    <Image src={image.src} alt="" fill sizes="96px" className="object-contain p-1" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-5 sm:px-8 pt-6 pb-8">
                    <div className="md:col-span-8">
                        <p className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span>{project.sector[language]}</span>
                            <span aria-hidden className="h-3 w-px bg-border" />
                            <StatusLabel status={project.status} />
                        </p>
                        <DialogTitle className="mt-3 text-3xl sm:text-4xl font-semibold tracking-[-0.03em] leading-tight">
                            {project.name}
                        </DialogTitle>
                        <DialogDescription className="mt-2 text-lg text-muted-foreground leading-snug">
                            {project.tagline[language]}
                        </DialogDescription>

                        <div className="mt-6 border-l-2 pl-4" style={{ borderColor: project.panel }}>
                            <p className="text-sm text-muted-foreground">{t.work.needLabel}</p>
                            <p className="mt-1 text-xl font-medium leading-snug tracking-[-0.015em]">{project.need[language]}</p>
                        </div>

                        <h3 className="mt-8 font-semibold">{t.caseStudy.problem}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground max-w-[62ch]">{project.problem[language]}</p>

                        <h3 className="mt-8 font-semibold">{t.caseStudy.built}</h3>
                        <ul className="mt-3 space-y-3 max-w-[62ch]">
                            {project.built[language].map((item) => (
                                <li key={item} className="flex gap-3 leading-relaxed">
                                    <span aria-hidden className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: project.panel }} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="md:col-span-4 md:border-l md:pl-8">
                        <dl className="space-y-6 text-sm">
                            <div>
                                <dt className="text-muted-foreground">{t.caseStudy.role}</dt>
                                <dd className="mt-1 font-medium">{project.role[language]}</dd>
                            </div>
                            <div>
                                <dt className="text-muted-foreground">{t.caseStudy.stack}</dt>
                                <dd className="mt-2 flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className="rounded-md bg-muted px-2 py-1 text-[13px]">
                                            {tech}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                            <div>
                                <dt className="text-muted-foreground">{t.caseStudy.links}</dt>
                                <dd className="mt-2 flex flex-col gap-2">
                                    {project.url ? (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-4 font-medium text-background transition-opacity hover:opacity-85"
                                        >
                                            {t.work.visit}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    ) : (
                                        <p className="flex gap-2 text-muted-foreground leading-relaxed">
                                            <Lock className="mt-0.5 h-4 w-4 shrink-0" />
                                            {t.caseStudy.privateNote}
                                        </p>
                                    )}
                                    {project.demo && (
                                        <>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 font-medium transition-colors hover:border-foreground"
                                            >
                                                <MessageCircle className="h-4 w-4" />
                                                {t.work.tryBot}
                                            </a>
                                            <p className="text-muted-foreground leading-relaxed">{t.work.tryBotNote}</p>
                                        </>
                                    )}
                                    {project.instagram && (
                                        <a
                                            href={project.instagram}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border px-4 font-medium transition-colors hover:border-foreground"
                                        >
                                            <Instagram className="h-4 w-4" />
                                            {t.caseStudy.instagram}
                                        </a>
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </aside>
                </div>

                {/* Prev / next */}
                <nav className="grid grid-cols-2 border-t text-sm">
                    <button
                        type="button"
                        onClick={() => onNavigate(prev)}
                        className="flex items-center gap-3 px-5 sm:px-8 py-5 text-left transition-colors hover:bg-muted"
                    >
                        <ArrowLeft className="h-4 w-4 shrink-0" />
                        <span>
                            <span className="block text-muted-foreground">{t.caseStudy.prev}</span>
                            <span className="font-medium">{prev.name}</span>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => onNavigate(next)}
                        className="flex items-center justify-end gap-3 border-l px-5 sm:px-8 py-5 text-right transition-colors hover:bg-muted"
                    >
                        <span>
                            <span className="block text-muted-foreground">{t.caseStudy.next}</span>
                            <span className="font-medium">{next.name}</span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0" />
                    </button>
                </nav>
            </DialogContent>
        </Dialog>
    )
}
