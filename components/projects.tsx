"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { TranslationKey } from "@/lib/i18n/translations"

export default function Projects() {
    const { t } = useLanguage()

    // Featured Project
    const featuredProject = {
        title: t('proj_1_title' as TranslationKey),
        desc: t('proj_1_desc' as TranslationKey),
        tech: ["Next.js", "Google Cloud Platform", "Tailwind CSS"],
        img: "/gpsprop.png",
        locked: false,
        link: "https://www.gpsprop.com.ar",
    }

    // Standard Projects
    const projects = [
        {
            title: t('proj_2_title' as TranslationKey),
            desc: t('proj_2_desc' as TranslationKey),
            tech: ["React", "Express", "TypeScript", "PostgreSQL", "Docker", "AI Agents", "MCP"],
            img: "/chief-dashboard.png",
            locked: true,
            link: "#",
        },
        {
            title: t('proj_3_title' as TranslationKey),
            desc: t('proj_3_desc' as TranslationKey),
            tech: ["NextJS", "NestJS", "PostgreSQL"],
            img: "/gearcode.png",
            locked: false,
            link: "https://gearcode.vercel.app",
        },
        {
            title: t('proj_4_title' as TranslationKey),
            desc: t('proj_4_desc' as TranslationKey),
            tech: ["JavaScript", "Firebase", "HTML/CSS"],
            img: "/codegym.png",
            locked: false,
            link: "https://teamcodegym.web.app",
        },
        {
            title: t('proj_5_title' as TranslationKey),
            desc: t('proj_5_desc' as TranslationKey),
            tech: ["Next.js", "Tailwind", "Firebase"],
            img: "/frideza.png",
            locked: true,
            link: "#",
        }
    ]

    return (
        <section id="projects" className="container max-w-6xl mx-auto py-32 px-4 md:px-6 border-t border-white/10">

            <div className="flex flex-col space-y-4 mb-20 text-left">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    {t('proj_title')}
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl font-normal">
                    {t('proj_desc')}
                </p>
            </div>

            <div className="space-y-24">
                {[featuredProject, ...projects].map((project, i) => {
                    const isEven = i % 2 === 0;
                    return (
                        <div key={i} className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center">

                            {/* Image Section */}
                            <div className={`w-full md:w-1/2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/10 ${!isEven ? 'md:order-last' : ''}`}>
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                />
                                {project.locked && (
                                    <div className="absolute top-6 right-6 z-10 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10">
                                        <Lock className="w-4 h-4 text-slate-300" />
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">{project.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed font-normal">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-[11px] font-semibold text-slate-300 border border-white/10 bg-white/[0.02] px-3 py-1.5 rounded-full uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="pt-6">
                                    {!project.locked ? (
                                        <a href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="inline-block">
                                            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-colors font-bold text-sm tracking-wide">
                                                {t('proj_btn_view')} <ArrowUpRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </a>
                                    ) : (
                                        <div className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/10 text-slate-500 font-bold text-sm tracking-wide bg-white/[0.01]">
                                            <Lock className="w-4 h-4" /> {t('proj_btn_locked')}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}
