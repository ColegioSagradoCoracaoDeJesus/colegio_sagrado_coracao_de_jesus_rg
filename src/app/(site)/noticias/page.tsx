import React from 'react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { CartaoNoticia } from '@/components/conteudo/CartaoNoticia'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getNoticias } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Notícias & Aconteceu no Sagrado',
  description: 'Confira as últimas notícias, conquistas pedagógicas e eventos do Colégio Sagrado Coração de Jesus.',
}

export default async function NoticiasPage() {
  const noticias = await getNoticias()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Notícias' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Jornalismo Escolar</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Notícias & Aconteceu no Sagrado</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Fique informado sobre os projetos pedagógicos, feiras de ciências, eventos esportivos e comemorações dos 70 anos.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-12">
        {/* Featured news */}
        {noticias.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-display text-h2 font-bold text-slate-900 border-b pb-2">Matéria em Destaque</h2>
            <CartaoNoticia noticia={noticias[0]} featured />
          </div>
        )}

        {/* Grid of news */}
        <div className="space-y-6">
          <h2 className="font-display text-h2 font-bold text-slate-900 border-b pb-2">Todas as Publicações</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {noticias.slice(1).map((noticia) => (
              <CartaoNoticia key={noticia._id} noticia={noticia} />
            ))}
          </div>
        </div>

        <BlocoCTA />
      </div>
    </div>
  )
}
