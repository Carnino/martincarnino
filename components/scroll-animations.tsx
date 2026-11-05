"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Scroll choreography for the whole page, driven by data attributes:
 *
 *   data-reveal          fades and lifts in once, the first time it scrolls into view
 *   data-reveal-group    its direct children reveal one after another
 *   data-parallax="n"    drifts n% vertically while it crosses the viewport (scrubbed)
 *   data-draw            scales in from the left (rules and dividers)
 *
 * Flash safety: nothing is hidden by CSS or on the server. Elements are only hidden by GSAP,
 * after hydration, and only if they are still below the fold. Anything already on screen
 * (hash deep links, reloads mid-page) is left alone, so it never blinks out and back in.
 * With reduced motion, no animation is created at all.
 */
export default function ScrollAnimations() {
    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add({ motion: "(prefers-reduced-motion: no-preference)", stacked: "(min-height: 700px)" }, (context) => {
            const { motion, stacked } = context.conditions as { motion: boolean; stacked: boolean }
            if (!motion) return
            const offscreen = (el: Element) => !ScrollTrigger.isInViewport(el, 0.05)

            // Single elements
            const reveal = gsap.utils.toArray<HTMLElement>("[data-reveal]").filter(offscreen)
            if (reveal.length) gsap.set(reveal, { autoAlpha: 0, y: 28 })
            ScrollTrigger.batch(reveal, {
                start: "top 88%",
                once: true,
                onEnter: (batch) =>
                    gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.08, overwrite: true }),
            })

            // Groups: children in sequence
            gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
                const children = Array.from(group.children).filter(offscreen)
                if (!children.length) return
                gsap.set(children, { autoAlpha: 0, y: 20 })
                ScrollTrigger.create({
                    trigger: group,
                    start: "top 85%",
                    once: true,
                    onEnter: () =>
                        gsap.to(children, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.07, overwrite: true }),
                })
            })

            // Rules that draw in
            const draw = gsap.utils.toArray<HTMLElement>("[data-draw]").filter(offscreen)
            if (draw.length) gsap.set(draw, { scaleX: 0, transformOrigin: "left center" })
            ScrollTrigger.batch(draw, {
                start: "top 90%",
                once: true,
                onEnter: (batch) => gsap.to(batch, { scaleX: 1, duration: 0.9, ease: "power3.inOut", stagger: 0.12, overwrite: true }),
            })

            // Parallax (scrubbed, never hides anything)
            gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
                const amount = Number(el.dataset.parallax) || 6
                gsap.fromTo(
                    el,
                    { yPercent: amount },
                    {
                        yPercent: -amount,
                        ease: "none",
                        scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: 0.6 },
                    },
                )
            })

            // Marquee: endless loop whose speed and direction follow the scroll.
            gsap.utils.toArray<HTMLElement>("[data-marquee]").forEach((marquee) => {
                const track = marquee.querySelector<HTMLElement>("[data-marquee-track]")
                if (!track) return
                const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 38, repeat: -1 })
                // Start deep into the timeline so reversing never runs past the beginning.
                loop.totalTime(loop.duration() * 100)
                ScrollTrigger.create({
                    trigger: marquee,
                    start: "top bottom",
                    end: "bottom top",
                    onUpdate: (self) => {
                        const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 350, 6)
                        gsap.to(loop, { timeScale: self.direction * boost, duration: 0.2, overwrite: true })
                        gsap.to(loop, { timeScale: self.direction, duration: 1.2, delay: 0.25, ease: "power2.out" })
                    },
                })
            })

            // Stacked project cards (sticky on screens at least 700px tall): the covered card
            // recedes as the next one slides over it.
            const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]")
            if (stacked) {
                cards.slice(0, -1).forEach((card, i) => {
                    gsap.to(card, {
                        scale: 0.96,
                        transformOrigin: "50% 0%",
                        ease: "none",
                        scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top top+=80", scrub: true },
                    })
                })
            }

            // Safety net: whatever is still hidden when the page bottom is reached gets shown.
            ScrollTrigger.create({
                trigger: document.documentElement,
                start: "bottom bottom+=2",
                once: true,
                onEnter: () => {
                    if (reveal.length) gsap.to(reveal, { autoAlpha: 1, y: 0, duration: 0.4, overwrite: "auto" })
                    if (draw.length) gsap.to(draw, { scaleX: 1, duration: 0.4, overwrite: "auto" })
                },
            })
        })

        // Layout settles after fonts and images; recompute trigger positions then.
        const refresh = () => ScrollTrigger.refresh()
        document.fonts?.ready.then(refresh)
        window.addEventListener("load", refresh)
        return () => {
            window.removeEventListener("load", refresh)
            mm.revert()
        }
    })

    return null
}
