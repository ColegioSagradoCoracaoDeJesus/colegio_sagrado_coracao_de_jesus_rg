import React from 'react'
import Link from 'next/link'
import { Newspaper, Image as ImageIcon, Calendar, ArrowRight } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { CartaoNoticia } from '@/components/conteudo/CartaoNoticia'
import { GaleriaComLightbox } from '@/components/conteudo/GaleriaComLightbox'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getNoticias, getGaleriasMes } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Aconteceu no Sagrado | Notícias e Galerias Mensais',
  description: 'Fique por dentro das últimas notícias, galerias de fotos mensais e eventos do Colégio Sagrado Coração de Jesus.',
}

export default async function AconteceuNoSagradoPage() {
  const noticias = await getNoticias()
  const galerias = await getGaleriasMes()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Aconteceu no Sagrado' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Vida Escolar em Imagens e Palavras</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Aconteceu no Sagrado</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Mural interativo com as matérias mais recentes, eventos comemorativos dos 70 anos e galerias de fotos das nossas turmas.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Latest News */}
        <section className="space-y-8">
          <div className="flex justify-between items-end border-b pb-4">
            <div>
              <Etiqueta variant="brand" className="mb-2">Jornalismo Escolar</Etiqueta>
              <h2 className="font-display text-h2 font-bold text-slate-900 flex items-center gap-2">
                <Newspaper className="w-6 h-6 text-brand" />
                <span>Últimas Notícias</span>
              </h2>
            </div>
            <Link href="/noticias" className="text-sm font-bold text-brand hover:underline flex items-center gap-1">
              Ver arquivo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.slice(0, 3).map((n) => (
              <CartaoNoticia key={n._id} noticia={n} />
            ))}
          </div>
        </section>

        {/* Monthly Galleries (RF11, RF23) */}
        <section className="space-y-8 pt-6 border-t border-slate-200">
          <div className="border-b pb-4">
            <Etiqueta variant="anniversary" className="mb-2">Registros Fotográficos</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-[#B8860B]" />
              <span>Galerias do Mês</span>
            </h2>
            <p className="text-slate-600 text-sm mt-1">Clique nas fotos para expandir em tela cheia (Lightbox).</p>
          </div>

          {galerias.map((g) => (
            <div key={g._id} className="bg-slate-50 p-6 sm:p-8 rounded-lg border border-slate-200 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900">{g.titulo}</h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {g.mes} de {g.ano}
                  </p>
                </div>
                <Etiqueta variant="brand">{g.fotos.length} Fotos</Etiqueta>
              </div>

              <p className="text-slate-600 text-sm">{g.descricao}</p>

              <GaleriaComLightbox fotos={g.fotos} />
            </div>
          ))}
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
