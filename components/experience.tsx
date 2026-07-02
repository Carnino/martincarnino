"use client"

import Image from "next/image"
import { Briefcase } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { TranslationKey } from "@/lib/i18n/translations"

export default function Experience() {
    const { t } = useLanguage()

    const experiences = [
        {
            company: "CodeGym",
            logo: null,
            dateKey: "exp_codegym_date",
            roleKey: "exp_codegym_role",
            descKey: "exp_codegym_desc",
            respKeys: ["exp_codegym_resp_1", "exp_codegym_resp_2", "exp_codegym_resp_3", "exp_codegym_resp_4"],
        },
        {
            company: "Wayclo",
            logo: "/logo_blanco.png",
            dateKey: "exp_wayclo_date",
            roleKey: "exp_wayclo_role",
            descKey: "exp_wayclo_desc",
            respKeys: ["exp_resp_1", "exp_resp_2", "exp_resp_3", "exp_resp_4"],
        },
    ]

    return (
        <section id="experience" className="container max-w-6xl mx-auto py-32 px-4 md:px-6 border-t border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-white">
                {t('exp_title')}
            </h2>

            <div className="space-y-24">
                {experiences.map((exp, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

                        {/* Left Column: Timeline Info */}
                        <div className="md:col-span-4 flex flex-col items-start">
                            <div className="md:sticky md:top-32 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <span className="text-sm font-semibold text-white tracking-widest uppercase opacity-60">{t(exp.dateKey as TranslationKey)}</span>
                                    {exp.logo ? (
                                        <div className="relative h-10 w-40 my-2">
                                            <Image
                                                src={exp.logo}
                                                alt={exp.company}
                                                fill
                                                className="object-contain object-left"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-2xl font-bold text-white tracking-tight my-2">{exp.company}</span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
                                    <div className="flex items-center gap-2">
                                        <Briefcase className="h-4 w-4 opacity-50" />
                                        <span>{t(exp.roleKey as TranslationKey)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Editorial Description */}
                        <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
                            <div className="flex flex-col gap-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                                    {t(exp.roleKey as TranslationKey)}
                                </h3>
                                <p className="text-lg text-slate-400 font-normal leading-relaxed mb-4">
                                    {t(exp.descKey as TranslationKey)}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-bold text-white tracking-widest uppercase mb-4 opacity-60">{t('exp_key_responsibilities')}</h4>
                                <ul className="space-y-4">
                                    {exp.respKeys.map((respKey) => (
                                        <li key={respKey} className="flex items-start">
                                            <span className="text-emerald-500 mr-3 mt-1 text-lg leading-none">•</span>
                                            <span className="text-slate-300 font-medium">{t(respKey as TranslationKey)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
