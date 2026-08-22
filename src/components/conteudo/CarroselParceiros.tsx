'use client'

import Image from 'next/image'
import type { Parceiro } from '@/lib/sanity/queries'

interface CarroselParceirosProps {
  parceiros: Parceiro[]
}

export function CarroselParceiros({ parceiros }: CarroselParceirosProps) {
  if (parceiros.length === 0) {
    return null
  }

  const parceirosDuplicados = [...parceiros, ...parceiros]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50" aria-label="Empresas Parceiras">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Parceiros</p>
          <h2 className="mt-3 font-display text-h1 font-bold text-slate-900">Empresas Parceiras</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Conheça as empresas que colaboram com o Colégio Sagrado e fortalecem projetos, experiências e oportunidades para a nossa comunidade.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 py-6 shadow-sm">
          <div className="partners-marquee-track flex w-max items-center gap-5 px-4">
            {parceirosDuplicados.map((parceiro, index) => (
              <div
                key={`${parceiro._id}-${index}`}
                className="group flex min-w-[220px] max-w-[260px] flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-lg bg-slate-50 p-3">
                  {parceiro.logoUrl ? (
                    <Image
                      src={parceiro.logoUrl}
                      alt={parceiro.nome}
                      width={180}
                      height={90}
                      className="max-h-16 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm font-semibold uppercase tracking-wide text-slate-400">Logo</span>
                  )}
                </div>

                <h3 className="mt-4 text-center text-sm font-semibold text-slate-900">{parceiro.nome}</h3>

                {parceiro.descricao && (
                  <p className="mt-2 line-clamp-2 text-center text-xs leading-relaxed text-slate-600">
                    {parceiro.descricao}
                  </p>
                )}

                {parceiro.website && (
                  <a
                    href={parceiro.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center text-xs font-semibold text-brand transition-colors hover:text-[#D97706]"
                    aria-label={`Visitar site de ${parceiro.nome}`}
                  >
                    Visitar site
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
