"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"

export default function Experience() {
    const { t } = useLanguage()
    
    return (
        <section id="experience" className="container max-w-6xl mx-auto py-32 px-4 md:px-6 min-h-[80vh] flex flex-col justify-center border-t border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                {/* Left Column: Title & Timeline Info */}
                <div className="md:col-span-4 flex flex-col items-start">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                        {t('exp_title')}
                    </h2>

                    <div className="sticky top-32 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-sm font-semibold text-white tracking-widest uppercase opacity-60">{t('exp_wayclo_date')}</span>
                            <div className="relative h-10 w-40 my-2">
                                <Image
                                    src="/logo_blanco.png"
                                    alt="Wayclo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4 opacity-50" />
                                <span>{t('exp_wayclo_role')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Editorial Description */}
                <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                            {t('exp_wayclo_role')}
                        </h3>
                        <p className="text-lg text-slate-400 font-normal leading-relaxed mb-4">
                            {t('exp_wayclo_desc')}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4 opacity-60">{t('exp_key_responsibilities')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-3 mt-1 text-lg leading-none">•</span>
                                <span className="text-slate-300 font-medium">{t('exp_resp_1')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-3 mt-1 text-lg leading-none">•</span>
                                <span className="text-slate-300 font-medium">{t('exp_resp_2')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-3 mt-1 text-lg leading-none">•</span>
                                <span className="text-slate-300 font-medium">{t('exp_resp_3')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-emerald-500 mr-3 mt-1 text-lg leading-none">•</span>
                                <span className="text-slate-300 font-medium">{t('exp_resp_4')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
