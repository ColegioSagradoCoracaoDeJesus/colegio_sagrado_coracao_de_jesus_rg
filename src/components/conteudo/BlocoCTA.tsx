import React from 'react'
import { Calendar, PhoneCall, Award, ArrowRight } from 'lucide-react'
import { Botao } from '../ui/Botao'

interface BlocoCTAProps {
  titulo?: string
  subtitulo?: string
  badge?: string
}

export const BlocoCTA: React.FC<BlocoCTAProps> = ({
  titulo = 'Venha Conhecer o Colégio Sagrado Coração de Jesus',
  subtitulo = 'Agende uma visita guiada com a nossa equipe pedagógica e descubra a estrutura e o ambiente de aprendizado onde seu filho vai prosperar.',
  badge = 'Matrículas & Rematrículas Abertas',
}) => {
  return (
    <section className="bg-gradient-to-r from-[#1E3A5F] via-[#152A47] to-[#1E3A5F] text-white py-14 px-4 rounded-lg shadow-xl relative overflow-hidden my-12 border-2 border-[#B8860B]/40">
      {/* Decorative background glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#B8860B]/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 bg-[#B8860B]/25 text-amber-200 border border-[#B8860B]/50 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{badge}</span>
        </div>

        <h2 className="font-display font-bold text-2xl sm:text-4xl leading-tight text-white max-w-2xl mx-auto">
          {titulo}
        </h2>

        <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitulo}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Botao href="/contato#agendar-visita" variant="accent" size="lg">
            <Calendar className="w-5 h-5" />
            <span>Agendar Visita Guiada</span>
          </Botao>
          <Botao href="https://wa.me/555332325531" external variant="white" size="lg">
            <PhoneCall className="w-5 h-5 text-emerald-600" />
            <span>Falar com a Secretaria</span>
          </Botao>
        </div>
      </div>
    </section>
  )
}
