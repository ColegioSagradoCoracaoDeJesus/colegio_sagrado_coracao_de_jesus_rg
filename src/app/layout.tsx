import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

// Só carrega o Google Analytics quando um ID real (G-XXXXXXX) estiver
// configurado em NEXT_PUBLIC_GA_ID — o placeholder do .env.local.example
// (G-XXXXXXXXXX) é ignorado de propósito para não mandar dados de teste.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
const isGaConfigured = Boolean(GA_ID && GA_ID !== 'G-XXXXXXXXXX')

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
  metadataBase: new URL('https://colegiosagradocoracaodejesusrg.vercel.app'),
  alternates: {
    canonical: 'https://colegiosagradocoracaodejesusrg.vercel.app',
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
  // BLOQUEIO TEMPORÁRIO DE INDEXAÇÃO: site ainda em fase de testes/produção.
  // Quando estiver pronto para aparecer no Google, trocar os `false` abaixo
  // para `true` (e reverter também src/app/robots.ts).
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://colegiosagradocoracaodejesusrg.vercel.app',
    siteName: 'Colégio Sagrado Coração de Jesus',
    title: 'Colégio Sagrado Coração de Jesus em Rio Grande - RS | Educação Infantil, Fundamental e Médio',
    description: 'Educação de qualidade, tradição, acolhimento e formação integral para crianças, jovens e famílias de Rio Grande - RS.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
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
    url: 'https://colegiosagradocoracaodejesusrg.vercel.app',
    logo: 'https://colegiosagradocoracaodejesusrg.vercel.app/logotipo.png',
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
      'https://instagram.com/colegiosagradorg',
      'https://facebook.com/colegiosagradorg',
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
        {isGaConfigured && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                // Consent Mode: começa negado por padrão (LGPD) — o AvisoCookies.tsx
                // libera ('granted') somente quando a pessoa aceita os cookies.
                gtag('consent', 'default', { analytics_storage: 'denied' });
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  )
}
