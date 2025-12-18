"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
    return (
        <section id="education" className="container max-w-5xl mx-auto py-24 px-4 md:px-6 min-h-screen flex flex-col justify-center">

            <div className="flex flex-col space-y-4 mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Formación Académica</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">

                {/* Degree Card */}
                <div className="relative group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm relative z-10 transition-colors hover:border-primary/50">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <CardTitle className="text-2xl">Ingeniería en Sistemas</CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground/80 mt-1">
                                Universidad Tecnológica Nacional (UTN)
                            </CardDescription>
                            <Badge variant="secondary" className="w-fit mt-2">2020 - Presente</Badge>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Award className="w-4 h-4" /> Promedio
                                </span>
                                <span className="font-bold text-xl">8.4</span>
                            </div>
                            <div className="p-3 bg-muted/50 rounded-lg">
                                <span className="text-muted-foreground text-sm block mb-1 flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> Estado Actual
                                </span>
                                <span className="font-medium text-foreground">Esperando fecha para rendir Proyecto Final</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Final Project Card */}
                <div className="relative group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm relative z-10 transition-colors hover:border-blue-500/50">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                                <div className="w-6 h-6 text-blue-500 font-bold text-xl">CD</div>
                            </div>
                            <CardTitle className="text-2xl">Chief Dashboard</CardTitle>
                            <CardDescription className="text-lg font-medium text-foreground/80 mt-1">
                                Proyecto Final de Carrera
                            </CardDescription>
                            <Badge variant="outline" className="w-fit mt-2 border-blue-500/30 text-blue-500">IA & Data Analytics</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                Plataforma de IA que permite a tomadores de decisiones chatear con sus bases de datos PostgreSQL mediante lenguaje natural para obtener métricas en tiempo real.
                            </p>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    )
}
