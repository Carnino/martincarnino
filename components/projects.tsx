import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Zap, Server, ArrowUpRight } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Pedidos Frideza",
      description: "Plataforma B2B para gestión de pedidos mayoristas",
      details: [
        "Plataforma integral para automatización de pedidos mayoristas, reduciendo tiempos de procesamiento.",
        "Experiencia personalizada para clientes con catálogos dinámicos y estados de cuenta en tiempo real.",
        "Integración con sistemas ERP existentes para sincronización de stock y facturación.",
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
      link: "#",
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
    },
    {
      title: "CodeGym",
      description: "SaaS de gestión integral para gimnasios",
      details: [
        "Plataforma SaaS que optimiza operaciones diarias para múltiples gimnasios en la región.",
        "Implementación de control de accesos, gestión de membresías y reportes financieros automáticos.",
        "Arquitectura serverless para alta disponibilidad y bajo costo operativo.",
      ],
      tech: ["React", "Firebase", "TailwindCSS", "Cloud Functions"],
      link: "https://teamcodegym.web.app",
      icon: <Zap className="h-6 w-6 text-primary" />,
    },
    {
      title: "GearCode",
      description: "SaaS para centros de atención vehicular",
      details: [
        "Sistema de gestión especializado para talleres y centros de servicio automotriz.",
        "Módulo de turnos, historial vehicular y notificaciones automáticas a clientes.",
        "Desarrollado con enfoque en escalabilidad y seguridad de datos.",
      ],
      tech: ["NextJS", "NestJS", "PostgreSQL", "TypeORM"],
      link: "https://gearcode.vercel.app",
      icon: <Server className="h-6 w-6 text-primary" />,
    },
  ]

  return (
    <section id="projects" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proyectos Destacados
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
          <p className="mt-8 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Selección de desarrollos que demuestran capacidades técnicas y enfoque en soluciones de negocio de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col h-full bg-card border-muted hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-2 group"
            >
              <CardHeader className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {project.icon}
                  </div>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                        <ArrowUpRight className="h-6 w-6" />
                      </Button>
                    </a>
                  )}
                </div>
                <CardTitle className="text-2xl font-bold mb-3 text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow px-8 pb-8">
                <ul className="space-y-4 mb-6">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm md:text-base text-muted-foreground flex items-start gap-3">
                      <div className="mt-2 min-w-[6px] h-1.5 rounded-full bg-primary/60" />
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start px-8 pb-8 pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="bg-transparent border-border/50 text-xs font-medium px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
