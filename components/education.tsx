import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "Ingeniería en Sistemas de Información",
      institution: "Universidad Tecnológica Nacional",
      location: "Villa María, Córdoba",
      year: "2018 - Presente",
      status: "Cursando proyecto final",
      description:
        "Formación integral en ciencias de la ingeniería, desarrollo de software, gestión de proyectos y bases de datos. Promedio destacado y participación en grupos de investigación.",
    },
    {
      degree: "Bachiller en Economía y Administración",
      institution: "Instituto de Educación Media Dr. Arturo Oñativia",
      location: "Salta, Argentina",
      year: "2015",
      status: "Completado",
      description: "Formación secundaria con orientación en gestión y economía.",
    },
  ]

  return (
    <section id="education" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Formación Académica
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-20">
          {education.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-[200px_auto_1fr] gap-4 md:gap-12 group">

              {/* Date Column (Desktop) */}
              <div className="hidden md:flex flex-col items-end py-1">
                <Badge variant="outline" className="border-primary/20 text-primary font-mono text-sm px-4 py-1.5">
                  {item.year}
                </Badge>
                <span className="text-sm text-muted-foreground font-medium flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  {item.status}
                </span>
              </div>

              {/* Timeline Column */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-background border-4 border-primary z-10 -my-1.5 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                <div className="w-px h-full bg-border/50 -mt-1 group-last:hidden" />
              </div>

              {/* Content Column */}
              <div className="group-last:pb-0">
                {/* Mobile Date Header */}
                <div className="md:hidden flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary/20 text-primary font-mono text-xs">
                    {item.year}
                  </Badge>
                  <span className="text-xs text-muted-foreground font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                  {item.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-base text-muted-foreground mb-4">
                  <span className="font-medium text-foreground/90">{item.institution}</span>
                  <span className="hidden sm:inline text-border">•</span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    {item.location}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
