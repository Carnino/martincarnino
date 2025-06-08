import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Mail, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative">
            <MessageCircle className="inline-block mr-4 h-10 w-10 text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">CONTACTO</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto mb-6" />
          <p className="text-gray-300 text-lg font-mono">
            <span className="text-cyan-400">{"// "}</span>
            ¿Interesado en trabajar juntos? Ejecuta cualquiera de estos comandos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          <a href="mailto:martincarnino2001@gmail.com" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-gray-900/50 border-2 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-600" />
              <CardContent className="p-8 text-center relative z-10">
                <Mail className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-white font-bold mb-3 text-lg sm:text-xl font-mono">EMAIL</h3>
                <p className="text-gray-300 text-sm font-mono break-all">martincarnino2001@gmail.com</p>
                <div className="text-cyan-400 font-mono text-xs mt-2">{"> send_email()"}</div>
              </CardContent>
            </Card>
          </a>

          <a href="https://linkedin.com/in/martin-carnino" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-gray-900/50 border-2 border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600" />
              <CardContent className="p-8 text-center relative z-10">
                <Linkedin className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                <h3 className="text-white font-bold mb-3 text-lg sm:text-xl font-mono">LINKEDIN</h3>
                <p className="text-gray-300 text-sm font-mono">linkedin.com/in/martin-carnino</p>
                <div className="text-blue-400 font-mono text-xs mt-2">{"> connect_linkedin()"}</div>
              </CardContent>
            </Card>
          </a>

          <a href="https://wa.me/543584118627" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-gray-900/50 border-2 border-green-500/30 hover:border-green-400/60 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600" />
              <CardContent className="p-8 text-center relative z-10">
                <Phone className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-white font-bold mb-3 text-lg sm:text-xl font-mono">TELÉFONO</h3>
                <p className="text-gray-300 text-sm font-mono">+54 3584118627</p>
                <div className="text-green-400 font-mono text-xs mt-2">{"> call_phone()"}</div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  )
}
