"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased font-sans relative">

      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#ffffff15_1px,transparent_1px)]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f615,transparent)]"></div>
      </div>

      <Navbar />
      <div className="space-y-0 pb-20">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  )
}
