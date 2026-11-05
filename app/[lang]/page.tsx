import { notFound } from "next/navigation"
import { isLanguage } from "@/lib/i18n/config"
import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import Work from "@/components/work"
import Harness from "@/components/harness"
import Process from "@/components/process"
import ScrollAnimations from "@/components/scroll-animations-lazy"
import SmoothAnchors from "@/components/smooth-anchors"
import Journey from "@/components/journey"
import Contact from "@/components/contact"

export default async function Portfolio({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params
    if (!isLanguage(lang)) notFound()

    return (
        <>
            <SiteHeader />
            <main id="content">
                <Hero />
                <Work />
                <Harness />
                <Process />
                <Journey />
                <Contact />
            </main>
            <ScrollAnimations />
            <SmoothAnchors />
        </>
    )
}
