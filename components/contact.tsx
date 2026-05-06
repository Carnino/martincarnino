"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Contact() {
    const { t } = useLanguage()
    
    return (
        <section id="contact" className="w-full bg-white/[0.02] border-t border-white/10 mt-32 py-32 px-4 md:px-6 flex flex-col items-center text-center">

            {/* Massive Call to Action */}
            <div className="flex flex-col items-center max-w-4xl w-full">
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-500 mb-8">
                    {t('contact_available')}
                </p>
                
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-12 hover:scale-105 transition-transform duration-500 cursor-default">
                    {t('contact_title')}
                </h2>

                <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mb-16 leading-relaxed">
                    {t('contact_desc')}
                </p>

                {/* Main Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-24">
                    <a href="https://wa.me/5493584110368" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto h-14 px-10 bg-white text-black hover:bg-slate-200 font-bold text-sm rounded-full transition-colors">
                            <MessageSquare className="mr-2 h-5 w-5" />
                            {t('contact_btn_wpp')}
                        </Button>
                    </a>
                    
                    <a href="mailto:carninomartin@gmail.com" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 border-white/20 text-white hover:bg-white/[0.05] font-bold text-sm rounded-full transition-colors">
                            <Mail className="mr-2 h-5 w-5" />
                            {t('contact_btn_email')}
                        </Button>
                    </a>

                    <a href="https://www.linkedin.com/in/martin-carnino/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 border-white/20 text-white hover:bg-white/[0.05] font-bold text-sm rounded-full transition-colors">
                            <Linkedin className="mr-2 h-5 w-5" />
                            {t('contact_btn_linkedin')}
                        </Button>
                    </a>
                </div>
            </div>

            {/* Subtle Wayclo Integration Footer */}
            <div className="w-full max-w-6xl border-t border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
                <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">{t('contact_powered')}</span>
                        <div className="relative h-6 w-24 opacity-80 hover:opacity-100 transition-opacity">
                            <a href="https://wayclo.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="/logo_blanco.png"
                                    alt="Wayclo Logo"
                                    className="object-contain object-left w-full h-full"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block h-10 w-[1px] bg-white/10 mx-2" />
                    <p className="text-sm text-slate-400 max-w-sm hidden md:block">
                        {t('contact_powered_desc')}
                    </p>
                </div>

                <div className="text-sm text-slate-500 font-medium flex items-center gap-4">
                    <a href="https://github.com/martincarnino1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <span>{t('contact_copyright', { year: new Date().getFullYear().toString() })}</span>
                </div>
            </div>

        </section>
    )
}
