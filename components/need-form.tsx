"use client"

import { useEffect, useId, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { projects, site } from "@/lib/projects"

function usePrefersReducedMotion() {
    const [reduced, setReduced] = useState(false)
    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)")
        setReduced(query.matches)
        const onChange = () => setReduced(query.matches)
        query.addEventListener("change", onChange)
        return () => query.removeEventListener("change", onChange)
    }, [])
    return reduced
}

/**
 * Types real needs from past projects into the placeholder, one character at a time,
 * while the field is empty and idle. Static first example when motion is reduced.
 */
function useTypedPlaceholder(examples: string[], active: boolean) {
    const reduced = usePrefersReducedMotion()
    // Start empty: the server HTML then has no placeholder to erase once typing begins.
    const [text, setText] = useState("")

    useEffect(() => {
        if (!active || reduced || examples.length === 0) {
            setText(examples[0] ?? "")
            return
        }
        let example = 0
        let length = 0
        let deleting = false
        let timer: ReturnType<typeof setTimeout>

        const tick = () => {
            const full = examples[example]
            if (!deleting) {
                length++
                setText(full.slice(0, length))
                if (length === full.length) {
                    deleting = true
                    timer = setTimeout(tick, 2200)
                    return
                }
                timer = setTimeout(tick, 38)
            } else {
                length -= 2
                setText(full.slice(0, Math.max(0, length)))
                if (length <= 0) {
                    deleting = false
                    length = 0
                    example = (example + 1) % examples.length
                    timer = setTimeout(tick, 350)
                    return
                }
                timer = setTimeout(tick, 16)
            }
        }
        setText("")
        timer = setTimeout(tick, 600)
        return () => clearTimeout(timer)
    }, [active, reduced, examples])

    return text
}

interface NeedFormProps {
    /** "inverted" is for dark bands (the contact section). */
    tone?: "default" | "inverted"
    /** Alignment of the hint line under the field. */
    align?: "left" | "center"
    className?: string
}

export function NeedForm({ tone = "default", align = "left", className }: NeedFormProps) {
    const { t, language } = useLanguage()
    const id = useId()
    const [value, setValue] = useState("")
    const [focused, setFocused] = useState(false)
    const [showEmpty, setShowEmpty] = useState(false)
    const fieldRef = useRef<HTMLTextAreaElement>(null)

    const examples = useRef<Record<string, string[]>>({})
    if (!examples.current[language]) {
        examples.current[language] = projects.map((p) => p.need[language])
    }
    const placeholder = useTypedPlaceholder(examples.current[language], !focused && value === "")

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        const need = value.trim()
        if (!need) {
            setShowEmpty(true)
            fieldRef.current?.focus()
            return
        }
        const message = `${t.need.message}\n\n${need}`
        window.open(`${site.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    }

    const inverted = tone === "inverted"

    return (
        <form onSubmit={submit} className={cn("text-left", className)}>
            <div
                className={cn(
                    "rounded-2xl border p-2 transition-shadow focus-within:ring-2 focus-within:ring-ring",
                    inverted
                        ? "border-background/20 bg-background/[0.06]"
                        : "border-foreground/10 bg-card shadow-[0_1px_0_rgba(0,0,0,0.04),0_24px_60px_-30px_rgba(0,0,0,0.35)]",
                )}
            >
                <label htmlFor={id} className={cn("block px-4 pt-3 text-sm font-medium", inverted ? "text-background/70" : "text-muted-foreground")}>
                    {t.need.label}
                </label>
                <div className="flex flex-col sm:flex-row sm:items-end gap-2">
                    <textarea
                        ref={fieldRef}
                        id={id}
                        rows={2}
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value)
                            if (showEmpty) setShowEmpty(false)
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                e.currentTarget.form?.requestSubmit()
                            }
                        }}
                        placeholder={placeholder}
                        aria-describedby={`${id}-hint`}
                        className={cn(
                            "min-h-[3.5rem] flex-1 resize-none bg-transparent px-4 py-2 text-lg md:text-xl leading-snug outline-none focus-visible:outline-none",
                            inverted ? "placeholder:text-background/45" : "placeholder:text-muted-foreground/70",
                        )}
                    />
                    <button
                        type="submit"
                        className={cn(
                            "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-5 font-medium transition-opacity hover:opacity-85",
                            inverted ? "bg-background text-foreground" : "bg-foreground text-background",
                        )}
                    >
                        {t.need.send}
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
            <p
                id={`${id}-hint`}
                aria-live="polite"
                className={cn(
                    "mt-3 px-1 text-sm",
                    align === "center" && "text-center",
                    showEmpty ? (inverted ? "text-background" : "text-foreground") : inverted ? "text-background/60" : "text-muted-foreground",
                )}
            >
                {showEmpty ? t.need.empty : t.need.hint}
            </p>
        </form>
    )
}
