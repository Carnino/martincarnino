"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Contact() {
    return (
        <section id="contact" className="container max-w-4xl mx-auto py-20 px-4 md:px-6 min-h-screen flex flex-col justify-center">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="space-y-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Contacto</h2>
                        <p className="text-muted-foreground text-lg">
                            ¿Tenés un proyecto en mente? Hablemos.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <a href="mailto:martin.c@wayclo.tech" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <Mail className="w-4 h-4" />
                            </Button>
                            martin.c@wayclo.tech
                        </a>
                        <a href="https://www.linkedin.com/in/martin-carnino/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                            linkedin.com/in/martin-carnino
                        </a>
                        <a href="https://github.com/Carnino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                            <Button variant="outline" size="icon" className="h-9 w-9">
                                <Github className="w-4 h-4" />
                            </Button>
                            github.com/Carnino
                        </a>
                    </div>
                </div>

                <Card className="border-border/60 shadow-sm">
                    <CardHeader className="text-center pb-2">
                        <CardTitle className="text-xl">Chat Directo</CardTitle>
                        <CardDescription>
                            La forma más rápida de contactarme.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center pb-6">
                        <Button size="lg" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white" asChild>
                            <a href="https://wa.me/5493584118627" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-2 h-5 w-5" />
                                Contactar por WhatsApp
                            </a>
                        </Button>
                    </CardContent>
                </Card>

            </div>
        </section>
    )
}
