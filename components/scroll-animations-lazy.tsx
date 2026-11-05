"use client"

import dynamic from "next/dynamic"

// GSAP is not needed for the first paint: load it in its own chunk after hydration.
// Safe because nothing is hidden until GSAP itself runs (see scroll-animations.tsx).
// If the chunk fails to load (flaky network, ad blocker), render nothing instead of
// letting the error take down the page: the content never depends on these animations.
const ScrollAnimations = dynamic(
    () => import("@/components/scroll-animations").catch(() => ({ default: () => null })),
    { ssr: false },
)

export default function ScrollAnimationsLazy() {
    return <ScrollAnimations />
}
