import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award, ChevronRight, ExternalLink } from 'lucide-react'
import { DEFAULT_SITE_SETTINGS } from '@/lib/sanity/queries'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#152A47] text-slate-200 pt-14 pb-8 border-t-4 border-[#B8860B]">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-700/60">
          {/* Col 1: Colégio Info & 70 Anos Seal */}
          <div className="space-y-4">
            <div className="bg-white/95 p-3 rounded-xl shadow-md border-2 border-[#B8860B] inline-block max-w-[260px]">
              <Image
                src="/logotipo.png"
                alt="Colégio Sagrado Coração de Jesus - 70 Anos"
                width={260}
                height={64}
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Há 70 anos formando gerações com excelência acadêmica, acolhimento humano, ética e valores cristãos em Rio Grande - RS.
            </p>

            <div className="p-3.5 rounded-lg bg-[#1E3A5F]/60 border border-[#B8860B]/40 flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-400 shrink-0" />
              <div className="text-xs">
                <p className="font-bold text-amber-200">Jubileu de Vinho — 70 Anos</p>
                <p className="text-slate-300">1956 - 2026 | Uma história viva de educação e valores.</p>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
              <span>Navegação Rápida</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/nossa-historia" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nossa História & Missão</span>
                </Link>
              </li>
              <li>
                <Link href="/escola-em-rio-grande-rs" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Escola em Rio Grande - RS</span>
                </Link>
              </li>
              <li>
                <Link href="/ensino" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Modalidades de Ensino</span>
                </Link>
              </li>
              <li>
                <Link href="/70-anos" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-medium text-amber-300">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Comemoração dos 70 Anos</span>
                </Link>
              </li>
              <li>
                <Link href="/diferenciais" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nossos Diferenciais</span>
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Aconteceu no Sagrado (Notícias)</span>
                </Link>
              </li>
              <li>
                <Link href="/locacao-de-espacos" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Locação de Ginásio & Auditório</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal do Aluno & Matrículas */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
              <span>Acesso & Matrículas</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/matriculas" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-semibold text-amber-400">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Matrículas & Rematrículas</span>
                </Link>
              </li>
              <li>
                <Link href="/tecnologia-educacional" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Acesso ao Diário Escola</span>
                </Link>
              </li>
              <li>
                <Link href="/tecnologia-educacional" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Plataforma Iônica</span>
                </Link>
              </li>
              <li>
                <Link href="/nossa-estrutura" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Conheça Nossa Estrutura</span>
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                  <span>Política de Privacidade (LGPD)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato & Atendimento */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4 flex items-center gap-2 border-b border-slate-700 pb-2">
              <span>Atendimento & Secretaria</span>
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{DEFAULT_SITE_SETTINGS.endereco}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="flex flex-col">
                  {DEFAULT_SITE_SETTINGS.telefones.map((tel, idx) => (
                    <a key={idx} href={`tel:${tel.replace(/\D/g, '')}`} className="hover:underline text-slate-200">
                      {tel}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${DEFAULT_SITE_SETTINGS.email}`} className="hover:underline truncate text-slate-200">
                  {DEFAULT_SITE_SETTINGS.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{DEFAULT_SITE_SETTINGS.horarioAtendimento}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & LGPD notice */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 text-center md:text-left">
          <p>© {new Date().getFullYear()} Colégio Sagrado Coração de Jesus. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/politica-de-privacidade" className="hover:text-amber-400 underline">
              Política de Privacidade
            </Link>
            <span>•</span>
            <Link href="/studio" target="_blank" className="hover:text-amber-400 underline flex items-center gap-1">
              <span>Área Restrita (Sanity CMS)</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
