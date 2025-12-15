import {
  Code2,
  Server,
  Database,
  Cloud,
  Layout,
  Smartphone,
  GitBranch,
  Terminal,
  Cpu,
  Globe,
  Layers,
  Box
} from "lucide-react"

export default function Skills() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-8 h-8 text-blue-400" />,
      description: "Creación de interfaces modernas y responsivas.",
      skills: [
        { name: "React", icon: <Code2 className="w-5 h-5" /> },
        { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
        { name: "TypeScript", icon: <Code2 className="w-5 h-5" /> },
        { name: "Tailwind CSS", icon: <Layout className="w-5 h-5" /> },
        { name: "Framer Motion", icon: <Layers className="w-5 h-5" /> },
      ]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="w-8 h-8 text-green-400" />,
      description: "Arquitecturas robustas y escalables.",
      skills: [
        { name: "Node.js", icon: <Server className="w-5 h-5" /> },
        { name: "Express", icon: <Box className="w-5 h-5" /> },
        { name: "NestJS", icon: <Layers className="w-5 h-5" /> },
        { name: "Python", icon: <Code2 className="w-5 h-5" /> },
        { name: "REST APIs", icon: <Globe className="w-5 h-5" /> },
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      description: "Gestión de datos e infraestructura.",
      skills: [
        { name: "PostgreSQL", icon: <Database className="w-5 h-5" /> },
        { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
        { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
        { name: "Docker", icon: <Box className="w-5 h-5" /> },
        { name: "Git", icon: <GitBranch className="w-5 h-5" /> },
      ]
    },
    {
      title: "Architecture & Soft Skills",
      icon: <Cpu className="w-8 h-8 text-orange-400" />,
      description: "Liderazgo y buenas prácticas.",
      skills: [
        { name: "System Design", icon: <Layout className="w-5 h-5" /> },
        { name: "Clean Code", icon: <Code2 className="w-5 h-5" /> },
        { name: "Agile / Scrum", icon: <Terminal className="w-5 h-5" /> },
        { name: "Team Lead", icon: <Smartphone className="w-5 h-5" /> },
      ]
    },
  ]

  return (
    <section id="skills" className="min-h-screen py-20 flex flex-col justify-center relative z-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Stack Tecnológico
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-secondary/10 hover:bg-secondary/30 border border-border/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-background rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 border border-border/50">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background/50 hover:bg-background border border-transparent hover:border-border transition-all text-sm font-medium text-muted-foreground hover:text-foreground hover:shadow-sm"
                  >
                    <span className="text-primary/70 shrink-0">{skill.icon}</span>
                    <span className="truncate">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
