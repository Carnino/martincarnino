"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Layout, Server, Terminal, Box } from "lucide-react"

export default function About() {
    return (
        <section id="about" className="container max-w-5xl mx-auto py-24 px-4 md:px-6 min-h-screen flex flex-col justify-center">

            <div className="flex flex-col space-y-4 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Experiencia & Tecnología</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>

            <Tabs defaultValue="bio" className="w-full">
                <div className="flex justify-center mb-8">
                    <TabsList className="grid w-full max-w-[400px] grid-cols-2">
                        <TabsTrigger value="bio">Bio</TabsTrigger>
                        <TabsTrigger value="tech">Tech Stack</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="bio" className="mt-0 focus-visible:ring-0 outline-none">
                    <Card className="border-border/60 bg-card/50 backdrop-blur-sm animate-in fade-in zoom-in-95 duration-500">
                        <CardHeader>
                            <CardTitle className="text-2xl">Sobre Mí</CardTitle>
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
                </TabsContent>

                <TabsContent value="tech" className="mt-0 focus-visible:ring-0 outline-none">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-in fade-in zoom-in-95 duration-500">

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                                <Layout className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">Frontend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Next.js</Badge>
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">Tailwind</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                                <Server className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">Backend</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">NestJS</Badge>
                                    <Badge variant="outline">Node.js</Badge>
                                    <Badge variant="outline">Express</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                                <Database className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">Data</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">PostgreSQL</Badge>
                                    <Badge variant="outline">Firebase</Badge>
                                    <Badge variant="outline">TypeORM</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                                <Code2 className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">Languages</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">TypeScript</Badge>
                                    <Badge variant="outline">JavaScript</Badge>
                                    <Badge variant="outline">HTML/CSS</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors">
                            <CardHeader className="pb-2">
                                <Box className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">DevOps</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Docker</Badge>
                                    <Badge variant="outline">Git</Badge>
                                    <Badge variant="outline">VMware</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-card/50 border-border/60 hover:border-primary/50 transition-colors col-span-2 md:col-span-1">
                            <CardHeader className="pb-2">
                                <Terminal className="w-8 h-8 text-primary mb-2" />
                                <CardTitle className="text-lg">Tools</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">VS Code</Badge>
                                    <Badge variant="outline">Postman</Badge>
                                    <Badge variant="outline">Figma</Badge>
                                </div>
                            </CardContent>
                        </Card>

                    </div>
                </TabsContent>
            </Tabs>
        </section>
    )
}
