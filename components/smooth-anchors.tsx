"use client"

import { useEffect } from "react"
import { getProject } from "@/lib/projects"

/**
 * Smooth scrolling for in-page section links only (nav, "See projects", "Back to top").
 * Page loads with a #hash and reloads keep the browser's instant jump, which is what makes
 * them land exactly. Project hashes (#botito…) are left to their default behavior: they
 * open the project dialog through the hashchange listener in work.tsx.
 */
export default function SmoothAnchors() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
            const link = (e.target as Element | null)?.closest?.("a[href^='#']") as HTMLAnchorElement | null
            if (!link) return
            const id = link.getAttribute("href")!.slice(1)
            if (id && getProject(id)) return

            const target = id ? document.getElementById(id) : document.documentElement
            if (!target) return
            e.preventDefault()
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
            if (id) {
                target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
                history.pushState(null, "", `#${id}`)
            } else {
                window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
                history.pushState(null, "", window.location.pathname + window.location.search)
            }
            // Move keyboard focus along with the scroll, without a second jump.
            if (id && target instanceof HTMLElement) {
                if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1")
                target.focus({ preventScroll: true })
            }
        }
        document.addEventListener("click", onClick)
        return () => document.removeEventListener("click", onClick)
    }, [])

    return null
}
