"use client"

import {
    Code2,
    Database,
    Cloud,
    Terminal,
    Layers,
    BrainCircuit,
    Workflow,
    KanbanSquare
} from "lucide-react"

import { useLanguage } from "@/lib/i18n/context"

export default function TechStack() {
    const { t } = useLanguage()
    
    const skills = [
        { name: "Next.js", icon: Code2 },
        { name: "Google Cloud Platform", icon: Cloud },
        { name: "LLMs", icon: BrainCircuit },
        { name: "MCP", icon: Workflow },
        { name: "Databases", icon: Database },
        { name: "Jira", icon: KanbanSquare },
        { name: "Bash", icon: Terminal },
        { name: "VMware vSphere Suite", icon: Layers },
    ]

    return (
        <section className="w-full border-y border-white/5 bg-transparent overflow-hidden py-8">
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee Container */}
                <div className="flex w-max animate-marquee">
                    {/* First Loop */}
                    <div className="flex items-center gap-16 px-8">
                        {skills.map((skill, i) => (
                            <div key={`s1-${i}`} className="flex items-center gap-3 text-slate-500 group hover:text-white transition-colors cursor-default">
                                <skill.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                                <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Loop (Duplicate for seamless scroll) */}
                    <div className="flex items-center gap-16 px-8">
                        {skills.map((skill, i) => (
                            <div key={`s2-${i}`} className="flex items-center gap-3 text-slate-500 group hover:text-white transition-colors cursor-default">
                                <skill.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                                <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    
                    {/* Third Loop (Safety for wide screens) */}
                    <div className="flex items-center gap-16 px-8">
                        {skills.map((skill, i) => (
                            <div key={`s3-${i}`} className="flex items-center gap-3 text-slate-500 group hover:text-white transition-colors cursor-default">
                                <skill.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                                <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
