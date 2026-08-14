import React from 'react'
import Image from 'next/image'
import { Building2, Sparkles, CheckCircle2 } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { GaleriaComLightbox } from '@/components/conteudo/GaleriaComLightbox'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getEstrutura } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Nossa Estrutura Física',
  description: 'Conheça a infraestrutura completa do Colégio Sagrado Coração de Jesus: salas climatizadas, ginásio poliesportivo, auditório, biblioteca e laboratórios.',
}

export default async function NossaEstruturaPage() {
  const estrutura = await getEstrutura()
  const estruturaSegura = Array.isArray(estrutura) ? estrutura : []
  const fotosEstrutura = estruturaSegura.flatMap((e) => {
    const fotos = Array.isArray(e?.fotos) ? e.fotos : []

    return fotos.map((f) => ({
      url: f?.url,
      alt: f?.alt || e?.ambiente || 'Foto do ambiente',
      descricao: `${e?.ambiente || 'Ambiente'} — ${f?.legenda || e?.descricao || 'Foto do ambiente'}`,
    }))
  })

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Nossa Estrutura' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Espaços de Aprendizado</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Nossa Estrutura Física</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Mais de 15.000m² projetados para garantir segurança, conforto, estímulo cognitivo e bem-estar em todas as fases escolares.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {estruturaSegura.map((est) => {
            const fotos = Array.isArray(est?.fotos) ? est.fotos : []
            const fotoPrincipal = fotos[0]

            return (
              <div key={est._id} className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="relative h-56 bg-slate-100">
                  {fotoPrincipal?.url ? (
                    <Image src={fotoPrincipal.url} alt={est.ambiente} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1E3A5F] text-white font-bold text-lg">
                      {est.ambiente}
                    </div>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">{est.ambiente}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{est.descricao}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global Lightbox for environment photos */}
        <section className="space-y-6 border-t pt-10">
          <h2 className="font-display text-h2 font-bold text-slate-900">Galeria dos Ambientes</h2>
          <GaleriaComLightbox fotos={fotosEstrutura} />
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
