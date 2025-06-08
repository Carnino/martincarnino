import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Globe, Server, Database, GitBranch, Target, Shield } from "lucide-react"

export default function Skills() {
  const skills = {
    frontend: ["NextJS", "Astro", "TailwindCSS", "ShadCN", "TypeScript"],
    backend: ["NestJS (Node)", "FastAPI (Python)", "Spring Boot (Java)", "Express"],
    database: ["PostgreSQL", "MongoDB", "FirestoreDB", "MySQL"],
    devops: ["Firebase", "GitHub", "Wireshark", "Packet Tracer"],
  }

  return (
    <section id="skills" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
            <Cpu className="inline-block mr-4 h-10 w-10 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              <span className="block sm:inline">HABILIDADES</span>
              <span className="block sm:inline">_TÉCNICAS</span>
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-gray-900/50 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-cyan-400 text-xl font-mono flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                FRONTEND
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-cyan-600/20 text-cyan-300 hover:bg-cyan-600/30 border border-cyan-500/30 font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-green-400 text-xl font-mono flex items-center">
                <Server className="mr-2 h-5 w-5" />
                BACKEND
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-green-600/20 text-green-300 hover:bg-green-600/30 border border-green-500/30 font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-blue-400 text-xl font-mono flex items-center">
                <Database className="mr-2 h-5 w-5" />
                DATABASE
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30 font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-2 border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-purple-400 text-xl font-mono flex items-center">
                <GitBranch className="mr-2 h-5 w-5" />
                DEVOPS
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {skills.devops.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-600/20 text-purple-300 hover:bg-purple-600/30 border border-purple-500/30 font-mono text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fundamentos de Ingeniería */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent font-mono">
              <span className="block sm:inline">FUNDAMENTOS_DE</span>
              <span className="block sm:inline">_INGENIERÍA</span>
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900/50 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-cyan-400 font-mono flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  PRINCIPIOS_SOLID
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 text-sm">
                  Implementación de principios SOLID en arquitecturas de software para crear sistemas mantenibles y
                  escalables.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-green-400 font-mono flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  PATRONES_DE_DISEÑO
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 text-sm">
                  Aplicación de patrones de diseño para soluciones escalables y reutilizables en diferentes contextos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-blue-400 font-mono flex items-center">
                  <GitBranch className="mr-2 h-5 w-5" />
                  COLABORACIÓN
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-300 text-sm">
                  Prácticas de desarrollo colaborativo y control de versiones para equipos distribuidos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
