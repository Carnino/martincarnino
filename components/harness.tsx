"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"

/** One line of the illustrative agent trace, tied to the harness step that produces it. */
interface TraceLine {
    step: number
    time: string
    tag: string
    detail: string
    result: string
}

const TRACE: TraceLine[] = [
    { step: 0, time: "10:42:01.112", tag: "webhook", detail: "POST /api/whatsapp/webhook", result: "signature ✓" },
    { step: 1, time: "10:42:01.118", tag: "tenant", detail: 'phone_number_id → agency "alvarez"', result: "scoped client" },
    { step: 2, time: "10:42:01.121", tag: "dedupe", detail: "wamid.HBgNNTQ5MzU4…", result: "new · stored" },
    { step: 3, time: "10:42:01.904", tag: "audio", detail: "voice note 0:14 → whisper", result: "transcribed" },
    { step: 3, time: "", tag: "", detail: "“Hola! ¿Tienen algún 2 ambientes en alquiler con cochera?”", result: "" },
    { step: 4, time: "10:42:06.410", tag: "debounce", detail: "3 messages in 4.1 s", result: "→ 1 turn" },
    { step: 5, time: "10:42:06.455", tag: "context", detail: "tone · lead · active listings · visits · calendar", result: "rebuilt" },
    { step: 6, time: "10:42:07.802", tag: "tool", detail: "buscarPropiedades({ op: alquiler, amb: 2, cochera: true })", result: "3 matches · 92% 81% 74%" },
    { step: 6, time: "10:42:09.120", tag: "tool", detail: 'solicitarVisita({ id: "p3", cuando: "viernes 17:00" })', result: "id ✓ · date resolved" },
    { step: 7, time: "10:42:09.388", tag: "handoff", detail: "viewing created as pending", result: "advisor notified" },
    { step: 7, time: "10:42:09.402", tag: "reply", detail: "sent via WhatsApp Cloud API", result: "✓✓" },
]

export default function Harness() {
    const { t } = useLanguage()
    const steps = t.harness.steps
    const [active, setActive] = useState(0)
    const stepRefs = useRef<(HTMLLIElement | null)[]>([])

    // Desktop: scrollytelling. Each step is a tall block; the one crossing the middle of the
    // viewport becomes active while the trace stays pinned (CSS sticky, no scroll hijacking).
    // Mobile: steps work as an accordion and the trace sits below.
    useEffect(() => {
        const desktop = window.matchMedia("(min-width: 1024px)")
        let observer: IntersectionObserver | null = null
        const setup = () => {
            observer?.disconnect()
            observer = null
            if (!desktop.matches) return
            observer = new IntersectionObserver(
                (entries) => {
                    for (const entry of entries) {
                        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step))
                    }
                },
                { rootMargin: "-45% 0px -45% 0px" },
            )
            stepRefs.current.forEach((el) => el && observer!.observe(el))
        }
        setup()
        desktop.addEventListener("change", setup)
        return () => {
            desktop.removeEventListener("change", setup)
            observer?.disconnect()
        }
    }, [])

    const select = (index: number) => {
        const next = (index + steps.length) % steps.length
        setActive(next)
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        if (window.matchMedia("(min-width: 1024px)").matches) {
            stepRefs.current[next]?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" })
        } else {
            // Accordion: the open step above may have collapsed, so bring the new one back into view.
            requestAnimationFrame(() => stepRefs.current[next]?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" }))
        }
    }
    const go = (delta: number) => select(active + delta)

    return (
        <section
            id="ai"
            aria-labelledby="ai-title"
            className="bg-[#0F1216] text-[#E6E8EB] [--trace-accent:#3DDC97] border-y border-white/10"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
                <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12 md:mb-16">
                    <h2 id="ai-title" className="lg:col-span-7 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.02] text-balance">
                        {t.harness.title}
                    </h2>
                    <p className="lg:col-span-5 text-lg leading-relaxed text-[#E6E8EB]/65 max-w-[52ch]">{t.harness.intro}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Steps */}
                    <ol className="lg:col-span-5 border-t border-white/10 lg:border-t-0">
                                {steps.map((step, i) => {
                            const isActive = i === active
                            return (
                                <li
                                    key={i}
                                    ref={(el) => {
                                        stepRefs.current[i] = el
                                    }}
                                    data-step={i}
                                    className={cn(
                                        "border-b border-white/10 lg:flex lg:min-h-[48vh] lg:flex-col lg:justify-center lg:border-b-0 transition-opacity duration-500",
                                        isActive ? "lg:opacity-100" : "lg:opacity-35",
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => select(i)}
                                        aria-expanded={isActive}
                                        aria-controls={`harness-step-${i}`}
                                        className="flex w-full items-baseline gap-4 py-4 text-left lg:py-2"
                                    >
                                        <span
                                            className={cn(
                                                "w-6 shrink-0 font-mono text-sm tabular-nums transition-colors",
                                                isActive ? "text-[var(--trace-accent)]" : "text-[#E6E8EB]/60",
                                            )}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className={cn("text-xl lg:text-3xl font-semibold tracking-[-0.02em] transition-colors", isActive ? "text-[#E6E8EB]" : "text-[#E6E8EB]/55 hover:text-[#E6E8EB] lg:text-[#E6E8EB]")}>
                                            {step.title}
                                        </span>
                                    </button>
                                    <div id={`harness-step-${i}`} className={cn("pb-5 pl-10 pr-2", isActive ? "block" : "hidden lg:block")}>
                                        <p className="leading-relaxed text-[#E6E8EB]/75 max-w-[52ch] lg:text-lg">{step.body}</p>
                                        {/* Mobile: this step's trace lines right under it (the full trace is desktop only) */}
                                        <div className="lg:hidden mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40 font-mono text-[12px] leading-relaxed">
                                            {TRACE.filter((line) => line.step === i).map((line, k) => (
                                                <div key={k} className="border-l-2 border-[var(--trace-accent)] px-3 py-1.5">
                                                    {line.tag && <span className="text-[var(--trace-accent)]">{line.tag} </span>}
                                                    <span className={cn("break-words text-[#E6E8EB]", !line.tag && "italic")}>{line.detail}</span>
                                                    {line.result && <span className="block text-[#E6E8EB]/65">{line.result}</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>

                    {/* Trace */}
                    <div className="hidden lg:block lg:col-span-7">
                        <div className="lg:sticky lg:top-[max(6rem,calc(50svh-15rem))]">
                            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
                                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
                                    <span className="font-mono text-xs text-[#E6E8EB]/60">{t.harness.traceTitle}</span>
                                    <span className="font-mono text-xs tabular-nums text-[#E6E8EB]/60">
                                        {t.harness.step} {active + 1} {t.harness.of} {steps.length}
                                    </span>
                                </div>
                                <ol className="py-3 font-mono text-[12.5px] leading-relaxed">
                                    {TRACE.map((line, i) => {
                                        const state = line.step === active ? "current" : line.step < active ? "done" : "pending"
                                        return (
                                            <li key={i}>
                                                <button
                                                    type="button"
                                                    tabIndex={-1}
                                                    onClick={() => setActive(line.step)}
                                                    className={cn(
                                                        "grid w-full grid-cols-[4.5rem_1fr] sm:grid-cols-[6.75rem_4.5rem_1fr_auto] gap-x-3 border-l-2 px-4 py-1 text-left transition-colors duration-300",
                                                        state === "current" && "border-[var(--trace-accent)] bg-white/[0.06] text-[#E6E8EB]",
                                                        state === "done" && "border-transparent text-[#E6E8EB]/60",
                                                        state === "pending" && "border-transparent text-[#E6E8EB]/40",
                                                    )}
                                                >
                                                    <span className="hidden sm:block tabular-nums">{line.time}</span>
                                                    <span className={cn(state === "current" && "text-[var(--trace-accent)]")}>{line.tag}</span>
                                                    <span className={cn("break-words", !line.tag && "italic col-start-2 sm:col-start-3")}>{line.detail}</span>
                                                    <span className="col-start-2 sm:col-start-auto sm:text-right">{line.result}</span>
                                                </button>
                                            </li>
                                        )
                                    })}
                                </ol>
                                <div className="flex items-center justify-between border-t border-white/10 px-2 py-2">
                                    <button
                                        type="button"
                                        onClick={() => go(-1)}
                                        className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm text-[#E6E8EB]/75 transition-colors hover:bg-white/5 hover:text-[#E6E8EB]"
                                    >
                                        <ArrowLeft className="h-4 w-4" />
                                        {t.harness.prev}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => go(1)}
                                        className="inline-flex h-9 items-center gap-2 rounded-lg px-3 text-sm text-[#E6E8EB]/75 transition-colors hover:bg-white/5 hover:text-[#E6E8EB]"
                                    >
                                        {t.harness.next}
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-[#E6E8EB]/60">{t.harness.traceNote}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
