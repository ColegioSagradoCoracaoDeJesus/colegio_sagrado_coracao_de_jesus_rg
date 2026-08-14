'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageSquare, Calendar, GraduationCap, ChevronDown, Clock, Sparkles, BookOpen, PhoneCall } from 'lucide-react'
import { Botao } from '../ui/Botao'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>('inst')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileAccordion = (key: string) => {
    setOpenMobileAccordion(openMobileAccordion === key ? null : key)
  }

  const closeMobileMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md transition-all duration-300">
      {/* Top Header Bar (Compact Utilities) */}
      <div className="bg-[#1E3A5F] text-white text-xs py-1.5 px-4 border-b border-[#152A47]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <a href="https://wa.me/555332325531" target="_blank" rel="noreferrer" className="hover:underline font-semibold">
                WhatsApp Secretaria: (53) 3232-5531
              </a>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento: 07h30 às 17h30</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block bg-[#B8860B]/20 text-amber-200 border border-[#B8860B]/40 px-2.5 py-0.5 rounded text-[11px] font-semibold">
              ✨ 70 Anos Formando Gerações (1956 - 2026)
            </span>
            <Link href="/tecnologia-educacional" className="text-white hover:text-amber-300 underline font-medium text-xs">
              Portal do Aluno / Plataformas
            </Link>
          </div>
        </div>
      </div>

      {/* Main Single-Row Navigation Header */}
      <div className={`max-w-[1280px] mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-3 sm:py-3.5'
      }`}>
        {/* Prominent High-Res Official Logo */}
        <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md py-0.5 shrink-0">
          <Image
            src="/logotipo.png"
            alt="Colégio Sagrado Coração de Jesus - 70 Anos"
            width={460}
            height={120}
            priority
            sizes="(max-width: 640px) 200px, (max-width: 1024px) 260px, 380px"
            className={`w-auto h-auto transition-all duration-300 object-contain group-hover:scale-[1.01] ${
              isScrolled ? 'max-w-[220px] sm:max-w-[300px] md:max-w-[380px]' : 'max-w-[260px] sm:max-w-[380px] md:max-w-[460px]'
            }`}
          />
        </Link>

        {/* Clean Categorized Dropdown Navigation Bar (Single Row) */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-2 xl:gap-4">
          {/* Dropdown 1: Institucional */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                ['/nossa-historia', '/70-anos', '/diferenciais', '/vivencie-o-sagrado'].includes(pathname)
                  ? 'text-[#1E3A5F] bg-slate-100'
                  : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-500" />
              <span>Institucional</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-64 z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 space-y-1">
                <Link
                  href="/nossa-historia"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Nossa História
                </Link>
                <Link
                  href="/escola-em-rio-grande-rs"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Escola em Rio Grande - RS
                </Link>
                <Link
                  href="/70-anos"
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-[#B8860B] font-semibold hover:bg-amber-50"
                >
                  <span>70 Anos (1956 - 2026)</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </Link>
                <Link
                  href="/diferenciais"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Diferenciais Pedagógicos
                </Link>
                <Link
                  href="/vivencie-o-sagrado"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Vivencie o Sagrado
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown 2: Ensino & Câmpus */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                ['/ensino', '/nossa-estrutura', '/locacao-de-espacos'].includes(pathname)
                  ? 'text-[#1E3A5F] bg-slate-100'
                  : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Ensino & Câmpus</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-72 z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 space-y-1">
                <Link
                  href="/ensino"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Modalidades de Ensino
                </Link>
                <Link
                  href="/nossa-estrutura"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Nossa Estrutura & Câmpus
                </Link>
                <Link
                  href="/locacao-de-espacos"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Locação de Ginásio & Auditório
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown 3: Comunicação */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                ['/noticias', '/contato'].includes(pathname)
                  ? 'text-[#1E3A5F] bg-slate-100'
                  : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
              }`}
            >
              <PhoneCall className="w-4 h-4 text-amber-500" />
              <span>Comunicação</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-400" />
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-64 z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-2xl border border-slate-100 p-2 space-y-1">
                <Link
                  href="/noticias"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Aconteceu no Sagrado (Notícias)
                </Link>
                <Link
                  href="/contato"
                  className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Fale Conosco & Localização
                </Link>
              </div>
            </div>
          </div>

          {/* Matrículas CTA */}
          <Link
            href="/matriculas"
            className="px-4 py-2 rounded-lg text-sm font-bold bg-[#1E3A5F] text-white hover:bg-[#152A47] transition-all shadow-md hover:shadow-lg"
          >
            Matrículas 2027
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block lg:hidden xl:block">
            <Botao href="/contato#agendar-visita" variant="accent" size="sm">
              <Calendar className="w-4 h-4" />
              <span>Agende uma Visita</span>
            </Botao>
          </div>

          {/* Mobile Sandwich Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden p-2.5 text-slate-800 hover:text-[#1E3A5F] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end animate-fadeIn">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1E3A5F]" />
                  <span className="font-bold text-slate-900 text-sm">Menu Institucional</span>
                </div>
                <span className="text-xs font-bold bg-[#B8860B] text-white px-2 py-0.5 rounded">70 Anos</span>
              </div>

              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Início
                </Link>

                {/* Mobile Accordion 1: Institucional */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('inst')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Institucional</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'inst' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'inst' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/nossa-historia" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Nossa História</Link>
                      <Link href="/70-anos" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-semibold text-[#B8860B] hover:bg-amber-50 rounded">70 Anos (1956 - 2026)</Link>
                      <Link href="/diferenciais" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Diferenciais Pedagógicos</Link>
                      <Link href="/vivencie-o-sagrado" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Vivencie o Sagrado</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion 2: Ensino & Câmpus */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('ensino')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Ensino & Câmpus</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'ensino' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'ensino' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/ensino" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Modalidades de Ensino</Link>
                      <Link href="/nossa-estrutura" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Nossa Estrutura & Câmpus</Link>
                      <Link href="/locacao-de-espacos" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Locação de Espaços</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion 3: Comunicação */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('comunicacao')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Comunicação</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'comunicacao' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'comunicacao' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/noticias" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Aconteceu no Sagrado (Notícias)</Link>
                      <Link href="/escola-em-rio-grande-rs" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Escola em Rio Grande - RS</Link>
                      <Link href="/contato" onClick={closeMobileMenu} className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Fale Conosco & Localização</Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/matriculas"
                  onClick={closeMobileMenu}
                  className="px-4 py-2.5 rounded-md text-sm font-bold bg-[#1E3A5F] text-white text-center shadow"
                >
                  Matrículas 2027
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t mt-6 flex flex-col gap-3">
              <Botao href="/contato#agendar-visita" variant="accent" fullWidth size="md">
                <Calendar className="w-4 h-4" />
                <span>Agende uma Visita Guiada</span>
              </Botao>
              <Botao href="https://wa.me/555332325531" external variant="outline" fullWidth size="md">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Falar com a Secretaria</span>
              </Botao>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
