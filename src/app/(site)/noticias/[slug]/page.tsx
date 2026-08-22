import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { getNoticiaBySlug, getNoticias } from '@/lib/sanity/queries'
import { urlForImage } from '@/lib/sanity/image'

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const url = urlForImage(value)?.width(900).url()
      if (!url) return null
      return (
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-md overflow-hidden bg-slate-100 border border-slate-200 my-6">
          <Image src={url} alt={value?.alt || ''} fill sizes="(max-width: 900px) 100vw, 900px" className="object-cover" />
        </div>
      )
    },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const noticia = await getNoticiaBySlug(slug)
  if (!noticia) return { title: 'Notícia Não Encontrada' }
  return {
    title: noticia.titulo,
    description: noticia.resumo,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumo,
      images: noticia.imageUrl ? [noticia.imageUrl] : [],
    },
  }
}

export default async function NoticiaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const noticia = await getNoticiaBySlug(slug)

  if (!noticia) {
    notFound()
  }

  const todas = await getNoticias()
  const relacionadas = todas.filter((n) => n._id !== noticia._id).slice(0, 2)

  const formattedDate = new Date(noticia.data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Noticias', href: '/noticias' }, { label: noticia.titulo }]} />

      <article className="max-w-[900px] mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <Link href="/noticias" className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline mb-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todas as notícias</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <Etiqueta variant={noticia.categoria === '70 Anos' ? 'anniversary' : 'brand'}>{noticia.categoria}</Etiqueta>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Calendar className="w-3.5 h-3.5 text-brand-dark" />
              <time dateTime={noticia.data}>{formattedDate}</time>
            </span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-4xl text-slate-900 leading-tight">
            {noticia.titulo}
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#B8860B] pl-4 italic">
            {noticia.resumo}
          </p>
        </div>

        {/* Cover Image with Mandatory Alt (RNF03) */}
        {noticia.imageUrl && (
          <div className="relative h-[350px] sm:h-[450px] w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
            <Image
              src={noticia.imageUrl}
              alt={noticia.titulo}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        )}

        {/* Article Body (RF10 — corpo de texto cadastrado no Sanity) */}
        {Array.isArray(noticia.corpo) && noticia.corpo.length > 0 ? (
          <div className="prose prose-slate max-w-none text-slate-800 text-base leading-relaxed">
            <PortableText value={noticia.corpo} components={portableTextComponents} />
          </div>
        ) : (
          <p className="text-slate-500 text-sm italic border-l-4 border-slate-200 pl-4">
            O conteúdo completo desta notícia ainda não foi publicado.
          </p>
        )}

        {/* Social Share & Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Share2 className="w-4 h-4 text-brand" />
            <span>Compartilhe esta notícia com a comunidade</span>
          </div>
          <Botao href="/noticias" variant="outline" size="sm">
            Ver Outras Notícias
          </Botao>
        </div>

        {/* Related News */}
        {relacionadas.length > 0 && (
          <div className="pt-12 border-t border-slate-200 space-y-6">
            <h3 className="font-display font-bold text-xl text-slate-900">Outras Notícias Recomendadas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relacionadas.map((r) => (
                <div key={r._id} className="bg-slate-50 p-5 rounded-md border border-slate-200">
                  <span className="text-xs font-bold text-amber-700">{r.categoria}</span>
                  <h4 className="font-display font-bold text-slate-900 text-base mt-1 line-clamp-2">
                    <Link href={`/noticias/${r.slug.current}`} className="hover:text-brand">
                      {r.titulo}
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}
