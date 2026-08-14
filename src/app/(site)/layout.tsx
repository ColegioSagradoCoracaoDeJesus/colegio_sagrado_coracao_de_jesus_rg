import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BotaoWhatsApp } from '@/components/layout/BotaoWhatsApp'
import { AvisoCookies } from '@/components/layout/AvisoCookies'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
      <BotaoWhatsApp />
      <AvisoCookies />
    </div>
  )
}
