import React from 'react'
import Image from 'next/image'
import { Award, Compass, Eye, Heart, BookOpen, Clock } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { ItemLinhaDoTempo } from '@/components/conteudo/ItemLinhaDoTempo'
import { GaleriaComLightbox } from '@/components/conteudo/GaleriaComLightbox'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getLinhaDoTempo } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Nossa História e 70 Anos em Rio Grande - RS',
  description: 'Conheça a trajetória de 70 anos do Colégio Sagrado Coração de Jesus em Rio Grande - RS, com missão, visão, valores e tradição pedagógica.',
}

export default async function NossaHistoriaPage() {
  const linhaTempo = await getLinhaDoTempo()

  const fotosHistoricas = [
    { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop', alt: 'Primeiras turmas em 1956', descricao: 'Primeira turma do Colégio Sagrado Coração em 1956' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', alt: 'Construção do prédio central', descricao: 'Inauguração do prédio histórico nos anos 1970' },
    { url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop', alt: 'Inauguração do ginásio poliesportivo', descricao: 'Primeiros campeonatos no Ginásio coberto' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', alt: 'Fachada atual no ano do Jubileu', descricao: 'Fachada atual preparada para as celebrações dos 70 anos' },
  ]

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Nossa História' }]} />

      {/* Header Banner */}
      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Jubileu de Vinho (1956 - 2026)</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Nossa História e Propósito em Rio Grande - RS</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Há sete décadas, o Colégio Sagrado Coração de Jesus atua em Rio Grande - RS formando cidadãos conscientes, éticos e preparados para transformar a sociedade com responsabilidade, acolhimento e excelência.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-20">
        {/* Institutional Text */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-h2 font-bold text-slate-900">
              Sete Décadas Marcadas pelo Afeto, Rigor Acadêmico e Tradição
            </h2>
            <p className="text-slate-600 text-body leading-relaxed">
              Fundado em 1956 com a missão de oferecer uma educação cristã humanizada, o Colégio Sagrado Coração de Jesus consolidou-se como referência pedagógica em Rio Grande - RS. Durante 70 anos, acompanhamos as profundas transformações da sociedade sem jamais abrir mão de nossos pilares fundacionais.
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              Aqui, a tradição caminha lado a lado com a inovação: integrando recursos tecnológicos de ponta, laboratórios modernos e programa bilíngue ao acolhimento atento que faz cada aluno sentir-se único e valorizado.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[380px] rounded-md overflow-hidden shadow-xl border-4 border-[#B8860B]/30">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
              alt="Alunos e fachada do Colégio Sagrado Coração de Jesus"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mx-auto shadow">
              <Compass className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Missão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Promover a formação humana integral por meio da excelência acadêmica, da evangelização e da vivência de valores cristãos, capacitando o estudante a agir no mundo de forma ética e solidária.
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mx-auto shadow">
              <Eye className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Visão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ser reconhecido como um ecossistema educacional de excelência que alia tradição pedagógica, inovação metodológica e desenvolvimento socioemocional de alto nível.
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#1E3A5F] text-white flex items-center justify-center mx-auto shadow">
              <Heart className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossos Valores</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Acolhimento afetivo, ética, respeito à diversidade, compromisso com o saber científico, responsabilidade ambiental e amor ao próximo em cada atitude.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Etiqueta variant="anniversary">Linha do Tempo</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-slate-900">Marcos Históricos dos 70 Anos</h2>
            <p className="text-slate-600 text-body">
              Relembre os momentos emblemáticos que construíram a nossa história de 1956 até hoje.
            </p>
          </div>

          <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1 md:before:h-full md:before:bg-[#1E3A5F]/20">
            {linhaTempo.map((item, idx) => (
              <ItemLinhaDoTempo key={item._id} item={item} isEven={idx % 2 === 0} />
            ))}
          </div>
        </section>

        {/* Photo Gallery (RF03 / RF12) */}
        <section className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="font-display text-h2 font-bold text-slate-900">Galeria Histórica e Atual</h2>
            <p className="text-slate-600 text-sm">Registros fotográficos da evolução física e da comunidade escolar do Sagrado.</p>
          </div>
          <GaleriaComLightbox fotos={fotosHistoricas} />
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
