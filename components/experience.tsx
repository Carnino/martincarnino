"use client"

import Image from "next/image"
import { Calendar, MapPin, CheckCircle2, Code2, Server, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                        Experiencia Profesional
                    </h2>
                    <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Wayclo Experience Row */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start justify-center group">

                        {/* Logo Column */}
                        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col items-center lg:items-start p-8 bg-background/50 rounded-2xl border border-border/50">
                            <div className="relative w-56 h-20 mb-6 grayscale group-hover:grayscale-0 transition-all duration-300">
                                <Image
                                    src="/logo_blanco.png"
                                    alt="Wayclo Logo"
                                    fill
                                    className="object-contain invert dark:invert-0"
                                    priority
                                />
                            </div>
                            <div className="w-full flex flex-col gap-4 text-sm text-muted-foreground border-t border-border/50 pt-6">
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2 font-medium">
                                        <Calendar className="w-4 h-4 text-primary" /> Período
                                    </span>
                                    <span>2023 - Presente</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center gap-2 font-medium">
                                        <MapPin className="w-4 h-4 text-primary" /> Ubicación
                                    </span>
                                    <span>Remoto</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 space-y-8 pt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/50 pb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-foreground">
                                        IT Consultant & Developer
                                    </h3>
                                    <h4 className="text-xl text-primary font-medium mt-2">Wayclo Agency</h4>
                                </div>
                                <Badge variant="secondary" className="w-fit px-6 py-2 text-base font-medium">
                                    Full Time Position
                                </Badge>
                            </div>

                            <div className="prose prose-lg prose-invert max-w-none text-muted-foreground space-y-6">
                                <p className="leading-relaxed text-lg">
                                    Lidero la transformación digital y el desarrollo técnico de soluciones empresariales, actuando como puente entre los requisitos d negocio y la implementación tecnológica. Mi rol es fundamental para garantizar que las soluciones entregadas no solo funcionen, sino que escalen y aporten valor real a largo plazo.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="space-y-4">
                                        <h5 className="text-foreground font-semibold flex items-center gap-2">
                                            <Code2 className="w-5 h-5 text-primary" /> Responsabilidades Clave
                                        </h5>
                                        <ul className="space-y-3 list-none pl-0">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Arquitectura de sistemas cloud-native escalables.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Liderazgo técnico y mentoring de equipos de desarrollo.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                <span>Definición de stack tecnológico y estándares de código.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h5 className="text-foreground font-semibold flex items-center gap-2">
                                            <Server className="w-5 h-5 text-primary" /> Impacto Tecnológico
                                        </h5>
                                        <ul className="space-y-3 list-none pl-0">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                                <span>Reducción del 40% en tiempos de despliegue mediante CI/CD.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                                <span>Optimización de 99.9% de uptime en servicios críticos.</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                                <span>Migración exitosa a arquitecturas Serverless.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border/50">
                                    <h5 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Tech Ecosystem</h5>
                                    <div className="flex flex-wrap gap-3">
                                        {["Next.js", "React", "Node.js", "AWS", "Docker", "PostgreSQL", "Tailwind CSS", "TypeScript"].map((tech) => (
                                            <Badge key={tech} variant="outline" className="px-3 py-1 border-primary/20 text-foreground/80">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
