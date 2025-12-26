"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, ArrowUpRight, Github, ExternalLink } from "lucide-react"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

export default function Projects() {
    // Featured Project
    const featuredProject = {
        title: "Chief Dashboard",
        desc: "Plataforma de Inteligencia Artificial que revoluciona la toma de decisiones. Permite a los directivos interactuar con sus bases de datos PostgreSQL mediante lenguaje natural. Utiliza una arquitectura avanzada basada en agentes (MCP) para generar métricas, gráficos y análisis en tiempo real.",
        tech: ["React", "Express", "TypeScript", "PostgreSQL", "Docker", "AI Agents", "MCP"],
        img: "/chief-dashboard.png",
        locked: true,
        link: "#",
    }

    // Standard Projects
    const projects = [
        {
            title: "GearCode",
            desc: "SaaS integral para la gestión de talleres mecánicos. Control total de vehículos, clientes, stock, órdenes de trabajo y facturación.",
            tech: ["NextJS", "NestJS", "PostgreSQL"],
            img: "/gearcode.png",
            locked: false,
            link: "https://gearcode.vercel.app",
        },
        {
            title: "CodeGym",
            desc: "Software de gestión para centros de fitness. Administración de socios, membresías, control de accesos y reportes financieros.",
            tech: ["JavaScript", "Firebase", "HTML/CSS"],
            img: "/codegym.png",
            locked: false,
            link: "https://teamcodegym.web.app",
        },
        {
            title: "Pedidos Frideza",
            desc: "Gestion de pedidos, productos, clientes, reportes y rutas logísticas.",
            tech: ["Next.js", "Tailwind", "Firebase"],
            img: "/frideza.png",
            locked: true,
            link: "#",
        }
    ]

    return (
        <section id="projects" className="container max-w-7xl mx-auto py-24 px-4 md:px-6">

            <div className="flex flex-col space-y-4 mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <Badge variant="outline" className="w-fit mx-auto mb-2 text-primary border-primary/20 bg-primary/5 px-4 py-1 rounded-full uppercase tracking-[0.2em] text-[10px] font-black">
                    Portafolio
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                    <span className="text-gradient">Proyectos Destacados</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium opacity-80">
                    Transformando ideas complejas en soluciones digitales efectivas.
                </p>
            </div>

            <div className="space-y-12">

                {/* 1. FEATURED PROJECT (Horizontal Layout) */}
                <div className="group rounded-3xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm overflow-hidden hover:shadow-[0_0_40px_rgba(0,0,0,0.4)] transition-all duration-700 hover:border-primary/40">
                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative h-64 md:h-auto overflow-hidden bg-slate-800">
                            <Image
                                src={featuredProject.img}
                                alt={featuredProject.title}
                                fill
                                className="object-cover transition-all duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 contrast-75 group-hover:contrast-100 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
                        </div>

                        {/* Content Section */}
                        <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Badge variant="default" className="bg-primary/90 hover:bg-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Proyecto Estrella</Badge>
                                    {featuredProject.locked && (
                                        <Badge variant="outline" className="text-slate-400 border-slate-700/50 gap-1 bg-slate-800/30 rounded-full text-[10px]">
                                            <Lock className="w-3 h-3" /> Privado
                                        </Badge>
                                    )}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">{featuredProject.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed font-medium opacity-90">
                                    {featuredProject.desc}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {featuredProject.tech.map((t) => (
                                    <span key={t} className="text-xs font-semibold text-primary/70 bg-primary/5 border border-primary/10 px-2 py-1 rounded-md uppercase tracking-wide">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Button disabled={featuredProject.locked} variant={featuredProject.locked ? "outline" : "default"} className="gap-2 h-11 px-8 rounded-2xl font-bold uppercase text-[10px] tracking-widest transition-all duration-500">
                                    {featuredProject.locked ? (
                                        <>
                                            <Lock className="w-4 h-4" /> Acceso Restringido
                                        </>
                                    ) : (
                                        <>
                                            Ver Proyecto <ArrowUpRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. STANDARD PROJECTS GRID (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <Card key={i} className="group overflow-hidden border-slate-700/50 bg-slate-900/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-2xl flex flex-col rounded-[2rem]">
                            {/* Image Header */}
                            <div className="relative aspect-video overflow-hidden bg-slate-800 border-b border-slate-700/50">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-all duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 contrast-50 group-hover:contrast-100 opacity-40 group-hover:opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                                {project.locked && (
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="bg-slate-950/80 backdrop-blur-sm p-2 rounded-full border border-slate-700/50 shadow-sm">
                                            <Lock className="w-4 h-4 text-slate-400" />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <CardHeader className="pb-2 p-8">
                                <CardTitle className="text-2xl font-bold text-white tracking-tight">
                                    {project.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="pb-4 px-8 flex-grow">
                                <p className="text-slate-400 text-sm leading-relaxed font-medium opacity-80">
                                    {project.desc}
                                </p>
                            </CardContent>

                            <CardFooter className="flex flex-col items-start gap-6 p-8 pt-0">
                                <div className="flex flex-wrap gap-2 w-full">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="outline" className="text-[9px] bg-slate-800/30 font-bold text-slate-400 border-slate-700/30 uppercase tracking-tighter rounded-md px-2 py-0.5">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="w-full">
                                    {!project.locked ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                            <Button variant="outline" className="w-full rounded-2xl border-slate-700 group-hover:bg-primary group-hover:text-white transition-all duration-500 font-bold uppercase text-[10px] tracking-widest h-11">
                                                Visitar <ExternalLink className="w-3 h-3 ml-2" />
                                            </Button>
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-2 text-slate-500 font-bold uppercase text-[10px] tracking-widest px-1">
                                            <Lock className="w-3 h-3" /> Código Privado
                                        </div>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
