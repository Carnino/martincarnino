"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Add form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contacto
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente o querés mejorar tu infraestructura tecnológica? Hablemos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-stretch">

          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div className="bg-secondary/10 p-10 rounded-3xl border border-border/50 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">Información</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-background rounded-2xl shadow-sm border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hola@martincarnino.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        hola@martincarnino.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="p-4 bg-background rounded-2xl shadow-sm border border-border/50 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Ubicación</p>
                      <p className="text-lg font-medium text-foreground">Villa María, Córdoba</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-border/50">
                <p className="text-xl font-bold text-foreground mb-6">Redes Sociales</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-background rounded-2xl shadow-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://github.com/martincarnino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-background rounded-2xl shadow-sm border border-border/50 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 transition-all duration-300"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-card rounded-3xl border border-border shadow-lg p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-8 h-full flex flex-col justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-medium text-foreground uppercase tracking-wider pl-1">
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-14 px-6 rounded-xl bg-background/50 border-input focus-visible:ring-primary text-base"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-medium text-foreground uppercase tracking-wider pl-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="hola@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-14 px-6 rounded-xl bg-background/50 border-input focus-visible:ring-primary text-base"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-medium text-foreground uppercase tracking-wider pl-1">
                  Asunto
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Consulta sobre desarrollo..."
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-14 px-6 rounded-xl bg-background/50 border-input focus-visible:ring-primary text-base"
                  required
                />
              </div>

              <div className="space-y-3 flex-grow flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-foreground uppercase tracking-wider pl-1">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Detalles del proyecto..."
                  value={formData.message}
                  onChange={handleChange}
                  className="flex-grow min-h-[200px] p-6 rounded-xl bg-background/50 border-input focus-visible:ring-primary text-base resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 transition-all duration-300">
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

