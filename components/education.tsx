"use client"

import { GraduationCap, School, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/i18n/context"

export default function Education() {
    const { t } = useLanguage()

    return (
        <section id="education" className="container max-w-6xl mx-auto py-32 px-4 md:px-6 min-h-[60vh] flex flex-col justify-center border-t border-white/10">

            <div className="flex flex-col space-y-4 mb-20 text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    {t('edu_title')}
                </h2>
            </div>

            {/* Bento Box Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Main Degree (Takes up 2/3 width) */}
                <div className="md:col-span-2 flex flex-col gap-6 p-8 lg:p-10 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3 text-slate-300">
                            <GraduationCap className="h-6 w-6" />
                            <h3 className="text-2xl font-bold text-white tracking-tight">{t('edu_degree')}</h3>
                        </div>
                        <span className="text-sm font-semibold text-slate-500 uppercase tracking-widest whitespace-nowrap">{t('edu_date')}</span>
                    </div>

                    <div className="space-y-4 text-slate-400 font-medium">
                        <div className="flex items-center gap-2">
                            <School className="h-4 w-4 opacity-50" />
                            <span>{t('edu_university')}</span>
                        </div>
                        <p className="leading-relaxed">
                            {t('edu_desc')}
                        </p>
                    </div>

                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-white/10 text-slate-400 bg-transparent px-3 py-1 font-medium">{t('edu_tag_1')}</Badge>
                        <Badge variant="outline" className="border-white/10 text-slate-400 bg-transparent px-3 py-1 font-medium">{t('edu_tag_2')}</Badge>
                        <Badge variant="outline" className="border-white/10 text-slate-400 bg-transparent px-3 py-1 font-medium">{t('edu_tag_3')}</Badge>
                    </div>
                </div>

                {/* Vertical Stack (Takes up 1/3 width) */}
                <div className="md:col-span-1 flex flex-col gap-6">

                    {/* Final Project Bento Cell */}
                    <div className="flex-1 flex flex-col gap-4 p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors justify-center">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-300 mb-2">
                            <BookOpen className="h-4 w-4" />
                        </div>
                        <h4 className="text-xl font-bold text-white tracking-tight">{t('edu_final_proj_title')}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            {t('edu_final_proj_desc')}
                        </p>
                        <div className="mt-2">
                            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                {t('edu_final_proj_status')}
                            </span>
                        </div>
                    </div>

                    {/* GPA Bento Cell */}
                    <div className="flex flex-col gap-2 p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{t('edu_gpa_title')}</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white tracking-tighter">8.40</span>
                            <span className="text-slate-500 font-medium">/ 10</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
