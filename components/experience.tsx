"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Experience() {
    return (
        <section id="experience" className="container max-w-4xl mx-auto py-20 px-4 md:px-6 min-h-screen flex flex-col justify-center">
            <div className="flex flex-col space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Experiencia Laboral</h2>
            </div>

            <Card className="border-border/60 shadow-sm">
                <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div className="space-y-1">
                            <CardTitle className="text-xl">Consultor IT & Desarrollador</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                                Wayclo
                            </CardDescription>
                        </div>
                        <Badge variant="secondary" className="w-fit font-normal">
                            2025 - Presente
                        </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-muted-foreground pt-1">
                        <span>Hibrido (Deheza/Rio Cuarto)</span>
                        <span>Full Time</span>
                    </div>
                </CardHeader>

                <Separator className="mb-4 mx-6 w-auto" />

                <CardContent className="space-y-6">
                    <ul className="grid gap-3 text-sm text-foreground/90">
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Análisis y Desarrollo de Sistemas:</strong> Diseño e implementación de soluciones de software alineadas con los objetivos de negocio, asegurando código limpio y mantenible.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Administración y Optimización de Entornos IT:</strong> Gestión integral de la infraestructura tecnológica, garantizando la estabilidad operativa y la seguridad de los activos digitales.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Especialización en Virtualización con VMware:</strong> Implementación y administración de máquinas virtuales y entornos vSphere para maximizar el aprovechamiento de recursos de hardware y facilitar la escalabilidad.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Aseguramiento de la Continuidad del Negocio:</strong> Configuración de entornos de alta disponibilidad y planes de contingencia para minimizar tiempos de inactividad.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Modernización de Procesos Operativos:</strong> Integración de mejores prácticas de despliegue y monitoreo para mejorar la eficiencia entre el desarrollo y la administración de sistemas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span><strong>Soporte Técnico de Segundo/Tercer Nivel:</strong> Resolución de incidencias complejas en la capa de aplicación e infraestructura, asegurando una experiencia de usuario fluida.</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </section>
    )
}
