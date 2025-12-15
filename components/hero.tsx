"use client"

import { Button } from "@/components/ui/button"

import { ChevronDown, ArrowRight, Download } from "lucide-react"

interface HeroProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ isVisible, scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-[25%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl opacity-50" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-3xl opacity-50" />
      </div>

      <div
        className={`container mx-auto px-6 pt-20 relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible para nuevos proyectos
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            Desarrollo de Software <br />
            <span className="text-primary">Empresarial & Escalable</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Ingeniero de Software y Consultor IT especializado en construir soluciones digitales robustas.
            Ayudo a empresas a transformar sus operaciones mediante tecnología moderna.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="min-w-[160px] h-12 text-base font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Contactar
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px] h-12 text-base font-medium"
              onClick={() => scrollToSection("projects")}
            >
              Ver Proyectos
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground rounded-full"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
