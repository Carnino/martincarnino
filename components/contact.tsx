"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle, ArrowRight, Users, Zap, ShieldCheck } from "lucide-react"
import Image from "next/image"

export default function Contact() {
    return (
        <section id="contact" className="container max-w-6xl mx-auto py-24 px-4 md:px-6">

            <div className="flex flex-col space-y-4 mb-20 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight pb-2 text-white italic">
                    <span className="text-gradient">Hagamos realidad tu visión</span>
                </h2>
                <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium opacity-80">
                    Ya sea un desarrollo a medida o una transformación digital completa, tengo la solución.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                {/* Left: Personal & Direct Contact */}
                <div className="flex flex-col gap-6">
                    <Card className="h-full glass-card relative overflow-hidden group rounded-3xl">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-primary/20" />

                        <div className="p-8 md:p-10 space-y-8 relative z-10 h-full flex flex-col justify-between">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-white tracking-tight">Contacto Directo</h3>
                                <p className="text-slate-400 leading-relaxed font-medium opacity-90">
                                    Estoy disponible para discutir nuevas oportunidades, consultoría técnica o simplemente para conectar.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a href="https://wa.me/5493584118627" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-base h-12 shadow-[0_0_20px_rgba(37,211,102,0.2)] rounded-2xl transition-all duration-500">
                                        <MessageCircle className="mr-2 h-5 w-5" />
                                        Hablar por WhatsApp
                                    </Button>
                                </a>

                                <div className="grid grid-cols-2 gap-3 mt-2">
                                    <a href="mailto:martin.c@wayclo.tech" className="w-full">
                                        <Button variant="outline" className="w-full h-11 border-slate-700 hover:border-primary hover:text-primary transition-all rounded-2xl bg-slate-800/20 font-bold uppercase text-[10px] tracking-widest">
                                            <Mail className="mr-2 h-4 w-4" /> Email
                                        </Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/martin-carnino/" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="outline" className="w-full h-11 border-slate-700 hover:border-blue-500 hover:text-blue-500 transition-all rounded-2xl bg-slate-800/20 font-bold uppercase text-[10px] tracking-widest">
                                            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right: Wayclo Corporate Integration */}
                <div className="flex flex-col gap-6">
                    <Card className="h-full border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/20 relative overflow-hidden group border-l-4 border-l-primary/60 rounded-3xl">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                        </div>

                        <div className="p-8 md:p-10 space-y-8 relative z-10">

                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">Potenciado por</p>

                                    {/* Logo Integration (Unified) */}
                                    <div className="relative h-12 w-48">
                                        <Image
                                            src="/logo_blanco.png"
                                            alt="Wayclo Logo"
                                            fill
                                            className="object-contain object-left scale-110"
                                        />
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl font-medium text-slate-200 leading-relaxed tracking-tight">
                                ¿Necesitás más que un freelancer? Junto a <strong>Wayclo</strong>, ofrezco la potencia de un equipo completo de desarrollo.
                            </p>

                            <ul className="grid gap-5 pt-2">
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <span className="text-slate-400 font-semibold text-sm">Equipo multidisciplinario escalable</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <span className="text-slate-400 font-semibold text-sm">Ejecución End-to-End de alta velocidad</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <span className="text-slate-400 font-semibold text-sm">Arquitectura y seguridad empresarial</span>
                                </li>
                            </ul>

                            <a href="https://wayclo.tech" target="_blank" rel="noopener noreferrer" className="inline-block pt-4 w-full">
                                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl h-12 shadow-xl backdrop-blur-sm transition-all duration-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                                    Conocer Wayclo <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                                </Button>
                            </a>
                        </div>
                    </Card>
                </div>

            </div>
        </section>
    )
}
