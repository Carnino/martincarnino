"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/lib/i18n/context"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()
    const { t, language, setLanguage } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        setIsOpen(false) // Close menu on click
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
        <div className="fixed top-6 inset-x-0 z-50 flex flex-col items-center pointer-events-none px-4">
            {/* Header Pill */}
            <header className="pointer-events-auto px-5 sm:px-6 flex h-12 items-center justify-between gap-6 rounded-full border border-white/10 bg-background/60 backdrop-blur-md shadow-sm transition-all">
                <div className="font-semibold tracking-tight flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className="hidden sm:inline-block">Martín Carnino</span>
                    <span className="sm:hidden text-lg">MC</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
                    <button onClick={() => scrollToSection('experience')} className="transition-colors hover:text-white text-white/60">{t('nav_experience')}</button>
                    <button onClick={() => scrollToSection('projects')} className="transition-colors hover:text-white text-white/60">{t('nav_projects')}</button>
                    <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-white text-white/60">{t('nav_about')}</button>
                    <Separator orientation="vertical" className="h-4 bg-white/10" />
                    <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-white text-white/60">{t('nav_contact')}</button>
                </nav>

                <div className="flex items-center gap-2 md:gap-0">
                    {/* Language Toggle */}
                    <div className="flex items-center gap-0.5 sm:gap-1 md:pl-3 md:border-l border-white/10 md:ml-2">
                        <button 
                            onClick={() => setLanguage('es')} 
                            className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-1 rounded transition-colors ${language === 'es' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            ES
                        </button>
                        <button 
                            onClick={() => setLanguage('en')} 
                            className={`text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-white/10 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                        >
                            EN
                        </button>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button 
                        className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors text-slate-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Dropdown Menu */}
            <div className={cn(
                "pointer-events-auto md:hidden mt-2 w-full max-w-[200px] overflow-hidden rounded-2xl border border-white/10 bg-background/90 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out origin-top",
                isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 border-transparent"
            )}>
                <nav className="flex flex-col p-2 space-y-1 text-sm font-medium">
                    <button onClick={() => scrollToSection('experience')} className="transition-colors text-white/70 hover:text-white text-left w-full px-4 py-3 rounded-xl hover:bg-white/5 active:bg-white/10">{t('nav_experience')}</button>
                    <button onClick={() => scrollToSection('projects')} className="transition-colors text-white/70 hover:text-white text-left w-full px-4 py-3 rounded-xl hover:bg-white/5 active:bg-white/10">{t('nav_projects')}</button>
                    <button onClick={() => scrollToSection('about')} className="transition-colors text-white/70 hover:text-white text-left w-full px-4 py-3 rounded-xl hover:bg-white/5 active:bg-white/10">{t('nav_about')}</button>
                    <Separator className="bg-white/10 my-1 mx-2 w-auto" />
                    <button onClick={() => scrollToSection('contact')} className="transition-colors text-white/70 hover:text-white text-left w-full px-4 py-3 rounded-xl hover:bg-white/5 active:bg-white/10">{t('nav_contact')}</button>
                </nav>
            </div>
        </div>
    )
}
