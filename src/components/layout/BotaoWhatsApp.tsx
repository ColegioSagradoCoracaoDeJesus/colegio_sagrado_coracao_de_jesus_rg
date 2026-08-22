'use client'

import React from 'react'
import { MessageSquare } from 'lucide-react'
import { DEFAULT_SITE_SETTINGS } from '@/lib/sanity/queries'

interface BotaoWhatsAppProps {
  whatsappNumber?: string
}

export const BotaoWhatsApp: React.FC<BotaoWhatsAppProps> = ({ whatsappNumber = DEFAULT_SITE_SETTINGS.whatsapp }) => {
  const message = encodeURIComponent('Olá! Vim através do site oficial do Colégio Sagrado Coração de Jesus e gostaria de mais informações.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar conosco via WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <MessageSquare className="w-6 h-6 shrink-0 fill-current" />
      <span className="hidden sm:inline-block font-bold text-xs sm:text-sm tracking-wide">Fale no WhatsApp</span>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
      </span>
    </a>
  )
}
