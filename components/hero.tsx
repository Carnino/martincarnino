"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Code2, MessageCircle, Briefcase, Binary } from "lucide-react"
import { MapPin } from "lucide-react"

interface HeroProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ isVisible, scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div
        className={`container mx-auto px-6 pt-32 sm:pt-28 md:pt-24 lg:pt-20 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-8">
          <div className="text-cyan-400 font-mono text-lg mb-4">{"> Inicializando sistema..."}</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              MARTÍN
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              CARNINO
            </span>
          </h1>

          <div className="font-mono text-lg sm:text-xl md:text-2xl text-green-400 mb-4">
            <span className="text-gray-500">{"class "}</span>
            <span className="text-cyan-400">{"Developer "}</span>
            <span className="text-gray-500">{"extends "}</span>
            <span className="text-green-400">{"FullStack"}</span>
            <span>{"_"}</span>
          </div>

          <div className="flex justify-center mb-6">
            <ChevronDown className="h-8 w-8 text-cyan-400 animate-bounce" />
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            <span className="text-cyan-400 font-mono">{"// "}</span>
            Estudiante avanzado de Ingeniería en Sistemas de Información, actualmente desarrollando el Proyecto Final de
            Carrera. Co-fundador de <span className="text-green-400 font-semibold">CodeGym</span> y{" "}
            <span className="text-green-400 font-semibold">GearCode</span>, con sólida experiencia en desarrollo de
            software empresarial.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-green-600 hover:from-cyan-500 hover:to-green-500 text-black font-bold px-6 py-3 sm:px-8 sm:py-4 relative overflow-hidden group border border-cyan-400/50"
            onClick={() => scrollToSection("contact")}
          >
            <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
            <span className="relative z-10">CONECTAR</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-6 py-3 sm:px-8 sm:py-4 font-bold"
            onClick={() => scrollToSection("projects")}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            <span>VER_PROYECTOS</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto text-sm font-mono">
          <div className="flex items-center justify-center space-x-2 text-gray-400 border border-gray-700/50 rounded-lg p-3 bg-gray-900/30">
            <MapPin className="h-4 w-4 text-cyan-400" />
            <span>Villa María, Córdoba</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400 border border-gray-700/50 rounded-lg p-3 bg-gray-900/30">
            <Code2 className="h-4 w-4 text-green-400" />
            <span>Full Stack Dev</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-gray-400 border border-gray-700/50 rounded-lg p-3 bg-gray-900/30">
            <Binary className="h-4 w-4 text-blue-400" />
            <span>System Engineer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
