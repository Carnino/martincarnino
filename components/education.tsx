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
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white italic">
                    <span className="text-gradient">Formación Académica</span>
                </h2>
                <p className="text-slate-400 text-lg font-medium opacity-80">Base teórica sólida aplicada a la innovación.</p>
            </div>

            <div className="relative group">
                {/* Subtle background glow */}
                <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Card className="relative overflow-hidden glass-card rounded-[2rem]">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
                    />

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700/50">

                        {/* Left: University */}
                        <div className="p-8 md:p-12 space-y-6 relative group/item">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover/item:opacity-10 transition-opacity">
                                <GraduationCap className="w-24 h-24" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <Badge variant="secondary" className="mb-2 bg-slate-800/80 text-slate-300 border-slate-700/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">2020 - Presente</Badge>
                                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">Ingeniería en Sistemas de Información</h3>
                                <p className="text-xl text-primary font-semibold tracking-tight opacity-90">Universidad Tecnológica Nacional (UTN)</p>

                                <div className="pt-4 space-y-3">
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <BookOpen className="w-4 h-4 text-primary/80" />
                                        </div>
                                        <span className="text-sm">Promedio Académico: <strong className="text-white">8.4</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Calendar className="w-4 h-4 text-primary/80" />
                                        </div>
                                        <span className="text-sm">Estado: <span className="text-white font-medium">Esperando fecha de Final</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Final Project */}
                        <div className="p-8 md:p-12 space-y-6 bg-slate-800/5 relative group/item">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover/item:opacity-10 transition-opacity text-primary">
                                <BrainCircuit className="w-24 h-24" />
                            </div>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/5 px-2 py-0.5 text-[9px] uppercase font-black tracking-widest">Proyecto Final</Badge>
                                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/5 px-2 py-0.5 text-[9px] uppercase font-black tracking-widest">I.A. & NLP</Badge>
                                </div>

                                <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">Chief Dashboard</h3>
                                <p className="text-lg text-slate-400 leading-relaxed font-normal opacity-80">
                                    Plataforma inteligente que revoluciona el análisis de datos. Permite a los directivos interactuar con bases de datos SQL mediante lenguaje natural.
                                </p>

                                <ul className="space-y-2 pt-2">
                                    <li className="flex items-center gap-3 text-xs text-slate-300 font-bold uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
