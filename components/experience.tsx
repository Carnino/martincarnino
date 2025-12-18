"use client"

import Image from "next/image"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Code2,
    Server,
    Layers,
    ShieldCheck,
    Workflow,
    LifeBuoy,
    MapPin,
    Calendar,
    Briefcase
} from "lucide-react"

export default function Experience() {
    const responsibilities = [
        {
            icon: Code2,
            title: "Análisis y Desarrollo",
            description: "Diseño e implementación de soluciones de software alineadas con los objetivos de negocio, asegurando código limpio y mantenible."
        },
        {
            icon: Server,
            title: "Infraestructura IT",
            description: "Gestión integral de la infraestructura tecnológica, garantizando la estabilidad operativa y la seguridad de los activos digitales."
        },
        {
            icon: Layers,
            title: "Virtualización VMware",
            description: "Implementación y administración de máquinas virtuales y entornos vSphere para maximizar recursos y escalabilidad."
        },
        {
            icon: ShieldCheck,
            title: "Continuidad del Negocio",
            description: "Configuración de entornos de alta disponibilidad y planes de contingencia para minimizar tiempos de inactividad."
        },
        {
            icon: Workflow,
            title: "Modernización Operativa",
            description: "Integración de mejores prácticas de despliegue y monitoreo para mejorar la eficiencia entre desarrollo y administración."
        },
        {
            icon: LifeBuoy,
            title: "Soporte Especializado",
            description: "Resolución de incidencias complejas en la capa de aplicación e infraestructura, asegurando una experiencia fluida."
        }
    ]

    const stack = ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker"]

    return (
        <section id="experience" className="container mx-auto py-24 px-4 md:px-6 min-h-screen flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-left">
                Experiencia Laboral
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Role Context */}
                <div className="lg:col-span-1">
                    <Card className="h-full border-primary/20 bg-card/50 backdrop-blur-sm sticky top-24">
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Badge variant="default" className="w-fit">
                                    2025 - Presente
                                </Badge>
                                <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                                    Full Time
                                </Badge>
                            </div>

                            {/* Wayclo Logo */}
                            <div className="relative h-8 w-32 my-2">
                                <Image
                                    src="/logo_negro.png"
                                    alt="Wayclo"
                                    fill
                                    className="object-contain object-left dark:hidden"
                                />
                                <Image
                                    src="/logo_blanco.png"
                                    alt="Wayclo"
                                    fill
                                    className="object-contain object-left hidden dark:block"
                                />
                            </div>

                            <CardDescription className="text-lg font-medium text-foreground/90">
                                Consultor IT & Desarrollador
                            </CardDescription>

                            <div className="flex flex-col gap-2 mt-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>Híbrido (Deheza/Rio Cuarto)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>Consultoría & Desarrollo</span>
                                </div>
                            </div>
                        </CardHeader>

                    </Card>
                </div>

                {/* Right Column: Responsibilities Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {responsibilities.map((item, index) => (
                        <Card key={index} className="group hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg bg-card/30">
                            <CardContent className="p-6 space-y-4">
                                <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
