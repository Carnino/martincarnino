"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText } from "lucide-react"

export default function Hero() {
    return (
        <section className="container max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-6">

            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-background shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500 ring-1 ring-white/10">
                    <Image
                        src="/martin.jpg"
                        alt="Martín Carnino"
                        fill
                        className="object-cover object-top scale-125"
                        priority
                    />
                </div>
                <Badge variant="secondary" className="px-3 py-1 text-sm rounded-full font-normal mx-auto bg-muted hover:bg-muted text-muted-foreground border-border">
                    <span className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Disponible para nuevos proyectos
                    </span>
                </Badge>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground sm:leading-tight">
                    Martín Carnino
                    <span className="block text-xl md:text-3xl text-muted-foreground font-medium mt-2 tracking-normal">
                        Ingeniero en Sistemas / Consultor IT & Desarrollador
                    </span>
                </h1>

                <p className="max-w-[800px] text-lg text-muted-foreground leading-relaxed mx-auto">
                    Ingeniero apasionado por la convergencia entre innovación tecnológica y estrategia de negocio. Especializado en arquitecturas de software robustas, escalables y orientadas a preparar a las empresas para el futuro.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <Button
                    size="lg"
                    className="h-12 px-8 text-base"
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Ver Experiencia <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>

        </section>
    )
}
