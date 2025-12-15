import { Target, Zap, Rocket } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre Mí
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Text Content */}
            <div className="flex-1 space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Mi Perfil Professional
              </h3>
              <div className="text-muted-foreground text-xl md:text-2xl leading-relaxed space-y-8 font-light">
                <p>
                  Soy un ingeniero apasionado por la convergencia entre innovación tecnológica y estrategia de negocio.
                  Me especializo en arquitecturas de software que no solo resuelven problemas actuales, sino que preparan a las empresas para el futuro.
                </p>
                <p>
                  Con un enfoque centrado en la calidad y la escalabilidad, transformo ideas complejas en productos digitales robustos,
                  priorizando siempre la excelencia técnica y la experiencia del usuario final.
                </p>
              </div>
            </div>

            {/* Features Column */}
            <div className="w-full lg:w-auto flex flex-col gap-6 lg:min-w-[400px]">
              <div className="group flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Visión Estratégica</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Desarrollo soluciones alineadas con los objetivos de crecimiento empresarial.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Zap className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Alto Rendimiento</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Optimización obsesiva para garantizar velocidad y eficiencia.
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-6 p-6 rounded-2xl border border-transparent hover:border-border/50 hover:bg-muted/30 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Rocket className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Innovación Continua</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Adopción temprana de tecnologías emergentes y mejores prácticas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
