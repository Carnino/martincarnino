"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function About() {
    const { t } = useLanguage()
    
    return (
        <section id="about" className="container max-w-6xl mx-auto py-32 px-4 md:px-6 min-h-[70vh] flex flex-col justify-center border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Left Column: Quote/Manifesto */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                    <h2 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
                        dangerouslySetInnerHTML={{ __html: t('about_quote') }}
                    />
                </div>

                {/* Right Column: Details & Philosophy */}
                <div className="lg:col-span-6 flex flex-col gap-8 md:pl-12 lg:border-l border-white/10">
                    <div className="space-y-6 text-lg text-slate-400 font-normal leading-relaxed">
                        <p>
                            {t('about_desc_1')}
                        </p>
                        <p>
                            {t('about_desc_2')}
                        </p>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-bold tracking-widest text-white uppercase opacity-60">{t('about_location_title')}</span>
                            <div className="flex items-center gap-2 text-slate-300 font-medium">
                                <span>{t('about_location_city')}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
