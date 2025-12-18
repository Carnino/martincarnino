"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Lock, ArrowUpRight } from "lucide-react"

export default function Projects() {
    const projects = [
        {
            title: "Pedidos Frideza",
            desc: "Plataforma para gestión de pedidos en frigorifico. Gestion de pedidos, productos, clientes, reportes y rutas logísticas.",
            tech: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
            img: "/frideza.png",
            locked: true,
            link: "#"
        },
        {
            title: "CodeGym",
            desc: "SaaS de gestión integral para gimnasios. Control integral del gimnasio, desde clientes, planes, pagos, reportes y estadísticas.",
            tech: ["JavaScript", "CSS", "HTML", "Firebase", "Cloud Functions"],
            img: "/codegym.png",
            locked: false,
            link: "https://teamcodegym.web.app"
        },
        {
            title: "GearCode",
            desc: "SaaS para centros de atención vehicular (talleres). Control integral de clientes, vehiculos, stock, ventas y reportes.",
            tech: ["NextJS", "NestJS", "PostgreSQL", "TypeORM"],
            img: "/gearcode.png", // Reuse generic SaaS image or placeholder if specific one missing
            locked: false,
            link: "https://gearcode.vercel.app"
        },
        {
            title: "Chief Dashboard",
            desc: "Plataforma de IA que permite a tomadores de decisiones chatear con sus propias bases de datos PostgreSQL mediante consultas en lenguaje natural y obtener metricas y graficos en tiempo real.",
            tech: ["React", "Express", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker", "MCP"],
            img: "/chief-dashboard.png",
            locked: true,
            link: "#"
        }
    ]

    return (
        <section id="projects" className="container max-w-6xl mx-auto py-24 px-4 md:px-6 min-h-screen flex flex-col justify-center">

            <div className="flex flex-col space-y-4 mb-20 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Proyectos Destacados</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Una selección de soluciones tecnológicas desarrolladas para resolver problemas reales.
                </p>
            </div>

            <div className="space-y-32">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`
                            flex flex-col gap-10 items-center 
                            ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                            animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both
                        `}
                        style={{ animationDelay: `${i * 150}ms` }}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-2xl bg-muted/30">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />

                                {project.locked && (
                                    <div className="absolute top-4 right-4">
                                        <Badge variant="secondary" className="backdrop-blur-md bg-background/50 border-white/10 text-xs font-medium">
                                            <Lock className="w-3 h-3 mr-1" /> Privado
                                        </Badge>
                                    </div>
                                )}
                            </div>

                            {/* Decorative Elements */}
                            <div className={`
                                absolute -z-10 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl 
                                ${i % 2 === 0 ? '-bottom-10 -left-10' : '-bottom-10 -right-10'}
                            `} />
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 space-y-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                    <div className="h-px bg-border flex-1 ml-4" />
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="outline" className="text-xs py-1 px-3 border-primary/20 bg-primary/5 text-primary">
                                        {t}
                                    </Badge>
                                ))}
                            </div>

                            <div className="pt-4">
                                {project.locked ? (
                                    <Button disabled variant="ghost" className="pl-0 text-muted-foreground cursor-not-allowed">
                                        <Lock className="w-4 h-4 mr-2" /> Acceso Restringido
                                    </Button>
                                ) : (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button variant="default" className="group">
                                            Visitar Proyecto
                                            <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
