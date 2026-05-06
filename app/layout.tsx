import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martín Carnino | Systems Engineer',
  description: 'Proyectos y experiencia de Martín Carnino',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
