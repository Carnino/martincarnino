export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background relative z-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Martín Carnino. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
