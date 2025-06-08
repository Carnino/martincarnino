"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Geometric Background Elements - Simplified */}
        <div className="fixed inset-0 z-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-500/30 rotate-45" />
          <div className="absolute bottom-40 left-20 w-40 h-40 border border-blue-500/30 rotate-45" />
          <div className="absolute bottom-20 right-40 w-28 h-28 border border-purple-500/30 rotate-12" />
        </div>

        <Header activeSection={activeSection} scrollToSection={scrollToSection} />

        <main>
          <Hero isVisible={isVisible} scrollToSection={scrollToSection} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
