"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"


export default function About() {
    return (
        <section id="about" className="container max-w-5xl mx-auto py-24 px-4 md:px-6 min-h-screen flex flex-col justify-center">

            <div className="flex flex-col space-y-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Sobre Mí</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            <div className="w-full flex justify-center">
                <Card className="border-border/60 bg-card/50 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-500 max-w-4xl w-full">
                    <CardHeader>
                        <CardTitle className="text-2xl">Perfil Profesional</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Ingeniero apasionado por diseñar la convergencia perfecta entre la innovación tecnológica y la estrategia de negocio. Mi enfoque no se limita a escribir código, sino a construir arquitecturas de software robustas y escalables que actúan como el motor de crecimiento para empresas preparadas para el futuro.
                        </p>
                        <p>
                            Con una mentalidad orientada a la excelencia técnica y la experiencia del usuario (UX), me especializo en transformar problemas complejos en soluciones digitales eficientes. Actualmente, estoy potenciando mi expertise en el ecosistema IT mediante la virtualización avanzada y soluciones críticas de VMware, con el objetivo de optimizar la infraestructura empresarial, reducir la deuda técnica y maximizar la resiliencia operativa en entornos de alta demanda.
                        </p>
                        <div className="flex items-center gap-2 pt-2">
                            <Badge variant="secondary" className="text-sm px-3 py-1">📍 General Deheza, Córdoba</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
