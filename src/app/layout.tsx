import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sagradocoracao.g12.br'),
  title: {
    default: 'Colégio Sagrado Coração de Jesus | 70 Anos de Excelência Educacional',
    template: '%s | Colégio Sagrado Coração de Jesus',
  },
  description: 'Há 70 anos formando gerações com excelência acadêmica, acolhimento humano e valores cristãos em Rio Grande - RS. Matrículas e Rematrículas abertas.',
  keywords: [
    'Colégio Sagrado Coração de Jesus',
    'Escola Rio Grande',
    'Educação Infantil Rio Grande',
    'Ensino Fundamental Rio Grande',
    'Ensino Médio Rio Grande',
    'Escola 70 Anos Rio Grande',
    'Matrículas Escolares Rio Grande',
  ],
  
  authors: [{ name: 'Colégio Sagrado Coração de Jesus' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sagradocoracao.g12.br',
    siteName: 'Colégio Sagrado Coração de Jesus',
    title: 'Colégio Sagrado Coração de Jesus | 70 Anos de Excelência Educacional',
    description: 'Há 70 anos formando gerações com excelência, acolhimento e valores em Rio Grande - RS.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Fachada e Comemoração dos 70 anos do Colégio Sagrado Coração de Jesus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colégio Sagrado Coração de Jesus',
    description: '70 Anos de excelência, acolhimento e valores na formação de jovens.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: 'Colégio Sagrado Coração de Jesus',
    alternateName: 'Colégio Sagrado Coração',
    url: 'https://sagradocoracao.g12.br',
    logo: 'https://sagradocoracao.g12.br/logo.png',
    foundingDate: '1956',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS, 96211-058',
      addressLocality: 'Rio Grande',
      addressRegion: 'RS',
      postalCode: '96211-058',
      addressCountry: 'BR',
    },
    telephone: '+55-53-3232-5531',
    email: 'secretariasagradorg@gmail.com',
    sameAs: [
      'https://instagram.com/colegiosagradorg',
      'https://facebook.com/colegiosagradorg',
    ],
  }

  return (
    <html lang="pt-BR" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
