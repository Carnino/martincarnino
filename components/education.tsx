"use client"

import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, BrainCircuit, Calendar } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="container max-w-5xl mx-auto py-24 px-4 md:px-6">

            <div className="flex flex-col space-y-4 mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Formación Académica</h2>
                <p className="text-muted-foreground text-lg">Base teórica sólida aplicada a la innovación.</p>
            </div>

            <div className="relative">
                {/* Decorative Background for the container */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-[2rem] blur-xl opacity-50" />

                <Card className="relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-xl rounded-[2rem]">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
                    />

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/50">

                        {/* Left: University */}
                        <div className="p-8 md:p-12 space-y-6 relative group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <GraduationCap className="w-24 h-24" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <Badge variant="secondary" className="mb-2">2020 - Presente</Badge>
                                <h3 className="text-3xl font-bold">Ingeniería en Sistemas de Información</h3>
                                <p className="text-xl text-primary font-medium">Universidad Tecnológica Nacional (UTN)</p>

                                <div className="pt-4 space-y-3">
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        <span>Promedio Académico: <strong className="text-foreground">8.4</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <span>Estado: <span className="text-foreground">Esperando fecha de Final</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Final Project */}
                        <div className="p-8 md:p-12 space-y-6 bg-muted/10 relative group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <BrainCircuit className="w-24 h-24" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="outline" className="border-blue-500/30 text-blue-500">Proyecto Final</Badge>
                                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-500">I.A. & NLP</Badge>
                                </div>

                                <h3 className="text-3xl font-bold">Chief Dashboard</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Plataforma inteligente que revoluciona el análisis de datos. Permite a los directivos interactuar con bases de datos SQL mediante lenguaje natural.
                                </p>

                                <ul className="space-y-2 pt-2">
                                    <li className="flex items-center gap-2 text-sm text-foreground/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        Arquitectura basada en Agentes (MCP)
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </Card>
            </div>
        </section>
    )
}
