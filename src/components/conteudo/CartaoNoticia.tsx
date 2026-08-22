import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Noticia } from '@/lib/sanity/queries'
import { Etiqueta } from '../ui/Etiqueta'

interface CartaoNoticiaProps {
  noticia: Noticia
  featured?: boolean
}

export const CartaoNoticia: React.FC<CartaoNoticiaProps> = ({ noticia, featured = false }) => {
  const formattedDate = new Date(noticia.data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className={`bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ${featured ? 'md:grid md:grid-cols-2' : ''}`}>
      <div className={`relative w-full overflow-hidden bg-slate-100 ${featured ? 'h-64 md:h-full' : 'h-48'}`}>
        {noticia.imageUrl ? (
          <Image
            src={noticia.imageUrl}
            alt={noticia.titulo}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-brand text-white font-display text-lg font-bold">
            Sagrado Coração
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Etiqueta variant={noticia.categoria === '70 Anos' ? 'anniversary' : 'brand'} size="sm">
            {noticia.categoria}
          </Etiqueta>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
            <Calendar className="w-3.5 h-3.5 text-brand-dark" />
            <time dateTime={noticia.data}>{formattedDate}</time>
          </div>

          <h3 className={`font-display font-bold text-slate-900 leading-snug mb-3 hover:text-brand transition-colors ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
            <Link href={`/noticias/${noticia.slug.current}`}>
              {noticia.titulo}
            </Link>
          </h3>

          <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
            {noticia.resumo}
          </p>
        </div>

        <Link
          href={`/noticias/${noticia.slug.current}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand hover:text-[#D97706] transition-colors mt-2"
        >
          <span>Ler matéria completa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  )
}
