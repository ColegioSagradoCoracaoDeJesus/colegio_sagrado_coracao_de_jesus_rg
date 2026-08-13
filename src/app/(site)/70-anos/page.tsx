import React from 'react'
import Image from 'next/image'
import { Award, Calendar, Heart, Ticket, Sparkles, CheckCircle2, ChevronRight, MessageSquare, HelpCircle } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { ItemLinhaDoTempo } from '@/components/conteudo/ItemLinhaDoTempo'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getLinhaDoTempo, getDepoimentos } from '@/lib/sanity/queries'

export const metadata = {
  title: '70 Anos do Colégio Sagrado Coração de Jesus | Jubileu de Vinho',
  description: 'Celebre 70 anos de história, programação de eventos comemorativos, depoimentos de ex-alunos e aquisição de ingressos para a celebração.',
}

export default async function SetentaAnosPage() {
  const linhaTempo = await getLinhaDoTempo()
  const depoimentos = await getDepoimentos()

  const programacao70Anos = [
    {
      data: '15 de Setembro de 2026',
      horario: '19h00',
      titulo: 'Missa em Ação de Graças pelos 70 Anos',
      local: 'Auditório Principal Ir. Tereza',
      descricao: 'Celebração eucarística comemorativa presidida com participação do coral dos alunos.',
      ingresso: 'Entrada Franca mediante confirmação prévia.',
    },
    {
      data: '24 de Outubro de 2026',
      horario: '14h00 às 20h00',
      titulo: 'Grande Encontro dos Ex-Alunos & Feira Cultural 70 Anos',
      local: 'Ginásio Poliesportivo e Pátios do Colégio',
      descricao: 'Reencontro de turmas históricas, exposição de fotos antigas, música ao vivo e espaço gastronômico.',
      ingresso: 'Convite individual disponível na Secretaria ou via WhatsApp.',
    },
    {
      data: '20 de Novembro de 2026',
      horario: '20h00',
      titulo: 'Jantar Solene de Gala dos 70 Anos',
      local: 'Salão de Eventos Principal',
      descricao: 'Noite de homenagens a educadores históricos, ex-diretores e famílias fundadoras.',
      ingresso: 'Mesa reserva na Secretaria. (Consulte disponibilidade).',
    },
  ]

  const curiosidades = [
    { ano: '1956', texto: 'A primeira turma contava com apenas 28 alunos e funcionava em um casarão adaptado.' },
    { ano: '1974', texto: 'O Colégio formou seu primeiro time feminino de basquete, sagrando-se campeão municipal no ano seguinte.' },
    { ano: '1998', texto: 'Inauguração da cápsula do tempo no jardim central, que será aberta durante os festejos dos 70 anos.' },
    { ano: '2026', texto: 'Mais de 15.000 alunos já passaram pelas salas de aula do Sagrado ao longo de sete décadas.' },
  ]

  return (
    <div>
      <MigalhaDePao items={[{ label: '70 Anos' }]} />

      {/* Hero Banner Gold */}
      <section className="bg-gradient-to-r from-[#152A47] via-[#1E3A5F] to-[#152A47] text-white py-20 px-4 border-b-4 border-[#B8860B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#B8860B_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

        <div className="max-w-[1280px] mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md">
            <Award className="w-4 h-4" />
            <span>1956 — 2026 | Jubileu de Vinho</span>
          </div>

          <h1 className="font-display text-hero font-bold text-white max-w-4xl mx-auto leading-tight">
            70 Anos Formando Gerações com Excelência, Acolhimento e Valores
          </h1>

          <p className="text-amber-100 text-base sm:text-xl max-w-2xl mx-auto font-sans leading-relaxed">
            Sete décadas construindo memórias, transformando vidas e reafirmando o compromisso com uma educação integral de verdade.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-20">
        {/* Curiosidades */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Etiqueta variant="anniversary">Curiosidades Históricas</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Fatos Marcantes das Nossas 7 Décadas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {curiosidades.map((c, idx) => (
              <div key={idx} className="bg-amber-50/50 p-6 rounded-md border border-amber-200 shadow-sm space-y-3">
                <span className="inline-block font-display font-bold text-2xl text-[#B8860B] border-b-2 border-[#B8860B] pb-1">
                  {c.ano}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed">{c.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Etiqueta variant="brand">Trajetória Cronológica</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">A Nossa História Ano a Ano</h2>
          </div>

          <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1 md:before:h-full md:before:bg-[#1E3A5F]/20">
            {linhaTempo.map((item, idx) => (
              <ItemLinhaDoTempo key={item._id} item={item} isEven={idx % 2 === 0} />
            ))}
          </div>
        </section>

        {/* Programação de Eventos dos 70 Anos (RF08) */}
        <section className="bg-slate-900 text-white p-8 sm:p-12 rounded-lg border-2 border-[#B8860B]/60 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-700 pb-6">
            <div>
              <Etiqueta variant="anniversary" className="mb-2">Agenda Comemorativa</Etiqueta>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Programação dos 70 Anos</h2>
              <p className="text-slate-300 text-sm mt-1">Participe dos eventos festivos ao longo do ano comemorativo.</p>
            </div>
            <Botao href="https://wa.me/5541999997000" external variant="anniversary" size="md">
              <Ticket className="w-4 h-4" />
              <span>Informações sobre Convites / Ingressos</span>
            </Botao>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programacao70Anos.map((prog, idx) => (
              <div key={idx} className="bg-[#152A47] p-6 rounded-md border border-slate-700 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 px-3 py-1 rounded">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{prog.data} • {prog.horario}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">{prog.titulo}</h3>

                  <p className="text-xs text-slate-300 leading-relaxed">{prog.descricao}</p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 text-xs text-amber-200 flex items-center justify-between">
                  <span>{prog.local}</span>
                  <span className="font-semibold text-emerald-400">Sem taxa online</span>
                </div>
              </div>
            ))}
          </div>

          {/* Directing for ticket info without processing online payment */}
          <div className="p-4 bg-[#1E3A5F] rounded-md border border-slate-700 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Como adquirir seu convite:</strong> Os convites para os eventos dos 70 anos são retirados diretamente na Secretaria do Colégio ou reservados pelo WhatsApp oficial, sem cobrança de taxas de intermediação online.
              </span>
            </div>
            <Botao href="https://wa.me/5541999997000" external variant="white" size="sm" className="shrink-0">
              Reservar via WhatsApp
            </Botao>
          </div>
        </section>

        {/* Depoimentos dos 70 Anos */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Etiqueta variant="anniversary">Depoimentos Históricos</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Histórias que Vivem no Sagrado</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <div key={dep._id} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-4">
                <p className="italic text-slate-700 text-sm leading-relaxed">"{dep.texto}"</p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A5F] text-white font-bold flex items-center justify-center">
                    {dep.nome.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{dep.nome}</h4>
                    <p className="text-xs text-[#5C7A99] font-medium">{dep.relacao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
