import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, ExternalLink, Zap, Server } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "CodeGym",
      description: "Plataforma SaaS de gestión integral para gimnasios",
      details: [
        "Co-desarrollé y lancé plataforma SaaS optimizando operaciones para gimnasios de la región",
        "Lideré el diseño técnico e implementación utilizando tecnologías modernas",
        "Gestioné relaciones con clientes, brindando soporte técnico y capacitación",
      ],
      tech: ["Vanilla", "Firebase", "TailwindCSS", "FirestoreDB"],
      link: "https://teamcodegym.web.app",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "GearCode",
      description: "Plataforma SaaS para centros de atención vehicular",
      details: [
        "Co-desarrollé y lancé plataforma SaaS para centros de atención vehicular",
        "Lideré el diseño técnico e implementación garantizando escalabilidad y mantenibilidad",
        "Gestioné relaciones con clientes, logrando alta satisfacción del usuario",
      ],
      tech: ["NextJS", "NestJS", "PostgreSQL", "TypeORM"],
      link: "https://gearcode.vercel.app",
      icon: <Server className="h-6 w-6" />,
    },
  ]

  return (
    <section id="projects" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
            <Briefcase className="inline-block mr-4 h-10 w-10 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">PROYECTOS</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-gray-900/50 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400" />

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-cyan-400">{project.icon}</div>
                    <CardTitle className="text-xl sm:text-2xl text-white font-mono">{project.title}</CardTitle>
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <CardDescription className="text-gray-300 text-lg font-mono">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  {project.details.map((detail, i) => (
                    <div key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-green-400 mr-3 font-mono">{">"}</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-gray-800/80 text-white border border-cyan-500/50 font-mono hover:bg-gray-700/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
