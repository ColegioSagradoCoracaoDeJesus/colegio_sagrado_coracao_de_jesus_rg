import React from 'react'
import Image from 'next/image'
import { GraduationCap, CheckCircle2, Target, BookOpen, Sparkles, Star } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getModalidades } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Modalidades de Ensino em Rio Grande - RS',
  description: 'Conheça as modalidades de Educação Infantil, Ensino Fundamental e Ensino Médio do Colégio Sagrado Coração de Jesus em Rio Grande - RS.',
}

export default async function EnsinoPage() {
  const modalidades = await getModalidades()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Ensino' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Excelência Pedagógica</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Modalidades de Ensino em Rio Grande - RS</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Formação acadêmica robusta e acolhedora para a Educação Infantil, Ensino Fundamental e Ensino Médio em Rio Grande - RS, com atenção à identidade, ao desenvolvimento humano e à excelência pedagógica.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 pt-10">
        <div className="rounded-2xl border border-[#1E3A5F]/10 bg-[#F5F7FA] p-6 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E3A5F]">Localização</p>
          <h2 className="mt-2 font-display text-h2 font-bold text-slate-900">Colégio no bairro Cidade Nova, em Rio Grande - RS</h2>
          <p className="mt-3 mx-auto max-w-3xl text-slate-600">
            O Colégio Sagrado Coração de Jesus oferece uma educação de qualidade para famílias da região, combinando tradição, proximidade e um ambiente propício ao aprendizado e ao desenvolvimento integral.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-20">
        {modalidades.map((m, index) => (
          <section
            key={m._id}
            id={m.slug.current}
            className={`p-8 sm:p-10 rounded-lg border border-slate-200 bg-white shadow-sm ${
              index % 2 === 1 ? 'border-l-4 border-l-[#B8860B]' : 'border-l-4 border-l-[#1E3A5F]'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#1E3A5F] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {m.faixaEtaria}
                  </span>
                  <Etiqueta variant="brand">{m.nome}</Etiqueta>
                </div>

                <h2 className="font-display text-h1 font-bold text-slate-900">{m.nome}</h2>

                <p className="text-slate-700 text-base leading-relaxed">{m.resumo}</p>

                {/* Methodology */}
                <div className="bg-slate-50 p-5 rounded-md border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D97706]" />
                    <span>Metodologia & Abordagem</span>
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.metodologia}</p>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#1E3A5F]" />
                    <span>Objetivos Pedagógicos</span>
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {m.objetivos.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                {m.projetos && m.projetos.length > 0 && (
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-500" />
                      <span>Projetos de Destaque</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {m.projetos.map((proj, idx) => (
                        <div key={idx} className="p-3 bg-amber-50/60 border border-amber-200/80 rounded text-xs">
                          <p className="font-bold text-slate-900">{proj.nome}</p>
                          <p className="text-slate-600 mt-0.5">{proj.descricao}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Photo & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="relative h-72 sm:h-80 rounded-md overflow-hidden bg-slate-100 shadow border border-slate-200">
                  {m.imageUrl && (
                    <Image src={m.imageUrl} alt={m.nome} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                  )}
                </div>

                <div className="bg-slate-900 text-white p-6 rounded-md space-y-4">
                  <h4 className="font-bold text-sm text-amber-300">Quer saber mais sobre o {m.nome}?</h4>
                  <p className="text-xs text-slate-300">Agende uma conversa com a coordenação pedagógica desta modalidade.</p>
                  <Botao href="/contato#agendar-visita" variant="accent" size="sm" fullWidth>
                    Agendar Visita para {m.nome}
                  </Botao>
                </div>
              </div>
            </div>
          </section>
        ))}

        <BlocoCTA />
      </div>
    </div>
  )
}
