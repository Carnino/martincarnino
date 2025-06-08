import { Card, CardContent } from "@/components/ui/card"
import { User, Target, Zap, Rocket } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
            <User className="inline-block mr-4 h-10 w-10 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">SOBRE_MÍ</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-2 border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400" />

            <CardContent className="p-6 sm:p-8 relative z-10">
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-4">{"> cat about.txt"}</div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Apasionado por la tecnología y la innovación, me especializo en crear soluciones web full-stack que combinan calidad, escalabilidad y un diseño eficiente. Mi experiencia en proyectos empresariales me ha enseñado a aplicar buenas prácticas de ingeniería de software y a enfocarme en los detalles que marcan la diferencia.
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Busco integrarme a equipos tecnológicos innovadores donde pueda aportar valor desde la ingeniería,
                    la gestión y el desarrollo de sistemas.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-600/10 to-cyan-800/10 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
                    <Target className="h-8 w-8 text-cyan-400 mb-3" />
                    <h3 className="text-white font-bold mb-2">ENFOQUE</h3>
                    <p className="text-gray-400 text-sm">Soluciones escalables y mantenibles</p>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                    <Zap className="h-8 w-8 text-green-400 mb-3" />
                    <h3 className="text-white font-bold mb-2">EXPERIENCIA</h3>
                    <p className="text-gray-400 text-sm">Desarrollo empresarial y startups</p>
                  </div>
                  <div className="p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                    <Rocket className="h-8 w-8 text-blue-400 mb-3" />
                    <h3 className="text-white font-bold mb-2">INNOVACIÓN</h3>
                    <p className="text-gray-400 text-sm">Tecnologías modernas y emergentes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
