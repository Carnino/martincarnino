import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
            <GraduationCap className="inline-block mr-4 h-10 w-10 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">EDUCACIÓN</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-gray-900/50 border-2 border-cyan-500/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400" />

            <CardHeader className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-3 font-mono">
                    <span className="block lg:inline">INGENIERÍA_EN_SISTEMAS</span>
                    <span className="block lg:inline">_DE_INFORMACIÓN</span>
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg md:text-xl text-cyan-400 font-mono">
                    UTN_FACULTAD_REGIONAL_VILLA_MARIA
                  </CardDescription>
                </div>
                <Badge className="bg-gradient-to-r from-cyan-600 to-green-600 text-black font-bold px-4 py-2 text-sm">
                  FEB_2020 - ACTUALIDAD
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-cyan-400 font-mono text-sm mb-4">{"> cat education_details.txt"}</div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Mi formación en Ingeniería en Sistemas de Información me ha brindado una base sólida en áreas como desarrollo de software, arquitectura de sistemas y gestión de proyectos. A través de cursos clave y trabajos prácticos, he explorado metodologías ágiles, análisis de sistemas y desarrollo colaborativo, habilidades que aplico en mi Proyecto Final de Carrera. Esta etapa académica ha sido clave para fortalecer mi capacidad de resolver problemas técnicos complejos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
