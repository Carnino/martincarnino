"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
    const pathname = usePathname()

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container px-4 md:px-6 flex h-14 items-center justify-between max-w-4xl mx-auto">
                <div className="font-bold flex items-center gap-2">
                    <span className="hidden sm:inline-block">Martín Carnino</span>
                    <span className="sm:hidden">MC</span>
                </div>

                <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
                    <button onClick={() => scrollToSection('experience')} className="transition-colors hover:text-foreground/80 text-foreground/60">Experiencia</button>
                    <button onClick={() => scrollToSection('projects')} className="transition-colors hover:text-foreground/80 text-foreground/60">Proyectos</button>
                    <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-foreground/80 text-foreground/60">Perfil</button>
                    <Separator orientation="vertical" className="h-4" />
                    <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-foreground/80 text-foreground/60">Contacto</button>
                </nav>
            </div>
        </header>
    )
}
