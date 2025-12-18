"use client"

import {
    Code2,
    Database,
    Server,
    Globe,
    Layout,
    Box,
    Cloud,
    Terminal,
    Layers
} from "lucide-react"

export default function TechStack() {
    const skills = [
        { name: "Next.js", icon: Globe },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: Terminal },
        { name: "NestJS", icon: Server },
        { name: "PostgreSQL", icon: Database },
        { name: "Tailwind CSS", icon: Layout },
        { name: "Docker", icon: Box },
        { name: "VMware", icon: Cloud }, // Highlighted skill
        { name: "Node.js", icon: Layers },
    ]

    return (
        <section className="w-full border-y border-border/40 bg-muted/20 backdrop-blur-sm overflow-hidden py-6">
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Marquee Container */}
                <div className="flex w-max animate-marquee">
                    {/* First Loop */}
                    <div className="flex items-center gap-12 px-6">
                        {skills.map((skill, i) => (
                            <div key={`s1-${i}`} className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors cursor-default">
                                <skill.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                                <span className="text-lg font-medium whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Loop (Duplicate for seamless scroll) */}
                    <div className="flex items-center gap-12 px-6">
                        {skills.map((skill, i) => (
                            <div key={`s2-${i}`} className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors cursor-default">
                                <skill.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                                <span className="text-lg font-medium whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    {/* Third Loop (To be safe on wide screens) */}
                    <div className="flex items-center gap-12 px-6">
                        {skills.map((skill, i) => (
                            <div key={`s3-${i}`} className="flex items-center gap-3 text-muted-foreground group hover:text-foreground transition-colors cursor-default">
                                <skill.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                                <span className="text-lg font-medium whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
