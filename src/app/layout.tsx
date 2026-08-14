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
  alternates: {
    canonical: 'https://sagradocoracao.g12.br',
  },
  applicationName: 'Colégio Sagrado Coração de Jesus',
  category: 'education',
  title: {
    default: 'Colégio Sagrado Coração de Jesus em Rio Grande - RS | Educação Infantil, Fundamental e Médio',
    template: '%s | Colégio Sagrado Coração de Jesus',
  },
  description: 'Colégio Sagrado Coração de Jesus em Rio Grande - RS: Educação Infantil, Ensino Fundamental, Ensino Médio, matrículas abertas, tradição de 70 anos e formação integral.',
  keywords: [
    'Colégio Sagrado Coração de Jesus',
    'Colégio em Rio Grande RS',
    'Escola em Rio Grande RS',
    'Educação Infantil Rio Grande',
    'Ensino Fundamental Rio Grande',
    'Ensino Médio Rio Grande',
    'Matrículas Rio Grande',
    'Escola tradicional Rio Grande',
    'Escola com 70 anos',
    'Colégio Sagrado',
    'Melhor colégio Rio Grande',
  ],
  authors: [{ name: 'Colégio Sagrado Coração de Jesus' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sagradocoracao.g12.br',
    siteName: 'Colégio Sagrado Coração de Jesus',
    title: 'Colégio Sagrado Coração de Jesus em Rio Grande - RS | Educação Infantil, Fundamental e Médio',
    description: 'Educação de qualidade, tradição, acolhimento e formação integral para crianças, jovens e famílias de Rio Grande - RS.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Colégio Sagrado Coração de Jesus em Rio Grande - RS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colégio Sagrado Coração de Jesus',
    description: 'Educação de excelência com 70 anos de tradição em Rio Grande - RS.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': ['School', 'EducationalOrganization'],
    name: 'Colégio Sagrado Coração de Jesus',
    alternateName: 'Colégio Sagrado Coração',
    url: 'https://sagradocoracao.g12.br',
    logo: 'https://sagradocoracao.g12.br/logo.png',
    foundingDate: '1956',
    description: 'Colégio em Rio Grande - RS com Educação Infantil, Ensino Fundamental, Ensino Médio e forte tradição de educação integral.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS, 96211-058',
      addressLocality: 'Rio Grande',
      addressRegion: 'RS',
      postalCode: '96211-058',
      addressCountry: 'BR',
    },
    telephone: '+55-53-3232-5531',
    email: 'secretariacolegiosagrado@gmail.com',
    sameAs: [
      'https://instagram.com/colegiosagradocoracao',
      'https://facebook.com/colegiosagradocoracao',
      'https://youtube.com/@colegiosagradocoracao',
    ],
    areaServed: 'Rio Grande, RS',
    knowsAbout: [
      'Educação Infantil',
      'Ensino Fundamental',
      'Ensino Médio',
      'Matrículas',
      'Formação integral',
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
