import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BotaoWhatsApp } from '@/components/layout/BotaoWhatsApp'
import { AvisoCookies } from '@/components/layout/AvisoCookies'
import { getSiteSettings } from '@/lib/sanity/queries'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  // Buscado uma única vez aqui e repassado como prop — assim telefone,
  // WhatsApp, endereço e redes sociais editados no Sanity (documento
  // "Configurações Globais do Site") passam a valer em todas as páginas.
  const settings = await getSiteSettings()

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      <Header whatsappNumber={settings.whatsapp} />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer settings={settings} />
      <BotaoWhatsApp whatsappNumber={settings.whatsapp} />
      <AvisoCookies />
    </div>
  )
}
