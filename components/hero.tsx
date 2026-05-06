"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Hero() {
    const { t } = useLanguage()
    
    return (
        <section className="container max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center px-4 md:px-6 relative pt-36 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left Column: Typography & CTAs */}
                <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">

                    <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {t('hero_available')}
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white leading-[1.1]">
                            Martín<br />Carnino
                        </h1>
                        <h2 className="text-xl md:text-2xl text-slate-400 font-medium tracking-tight border-l-2 border-white/20 pl-4 py-1">
                            {t('hero_degree')}<br />
                            {t('hero_role')}
                        </h2>
                    </div>

                    <p className="max-w-xl text-lg text-slate-500 leading-relaxed font-normal">
                        {t('hero_desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                        <Button 
                            size="lg" 
                            className="bg-white text-black hover:bg-slate-200 font-bold px-8 h-12 rounded-full transition-colors w-full sm:w-auto"
                            onClick={() => {
                                const el = document.getElementById('experience');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {t('hero_btn_exp')} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="border-white/20 text-white hover:bg-white/10 font-bold px-8 h-12 rounded-full transition-colors w-full sm:w-auto"
                            onClick={() => {
                                const el = document.getElementById('contact');
                                el?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <FileText className="mr-2 w-4 h-4" /> {t('hero_btn_contact')}
                        </Button>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
                        {/* Decorative Background Element */}
                        <div className="absolute inset-0 bg-white/5 rounded-[3rem] rotate-6 scale-105 transition-transform duration-700 group-hover:rotate-12" />

                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <Image
                                src="/martin.jpg"
                                alt="Martín Carnino"
                                fill
                                priority
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                            {/* Inner gradient for better integration */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
