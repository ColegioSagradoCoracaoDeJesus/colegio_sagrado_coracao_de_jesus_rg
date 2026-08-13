'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface FotoItem {
  url?: string
  alt: string
  descricao?: string
}

interface GaleriaComLightboxProps {
  fotos: FotoItem[]
  titulo?: string
}

export const GaleriaComLightbox: React.FC<GaleriaComLightboxProps> = ({ fotos, titulo }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  const handlePrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === 0 ? fotos.length - 1 : selectedIndex - 1)
  }

  const handleNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex(selectedIndex === fotos.length - 1 ? 0 : selectedIndex + 1)
  }

  if (!fotos || fotos.length === 0) return null

  return (
    <div className="w-full">
      {titulo && <h3 className="font-display font-bold text-xl text-slate-900 mb-4">{titulo}</h3>}

      {/* Grid of gallery thumbnails */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fotos.map((foto, index) => (
          <div
            key={index}
            onClick={() => handleOpen(index)}
            className="group relative h-56 rounded-md overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-md transition-all"
            tabIndex={0}
            role="button"
            aria-label={`Ver foto em tamanho amplo: ${foto.alt}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOpen(index)
              }
            }}
          >
            {foto.url ? (
              <Image
                src={foto.url}
                alt={foto.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#1E3A5F] text-white text-xs">
                Foto Sagrado
              </div>
            )}
            <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Maximize2 className="w-8 h-8" />
            </div>
            {foto.descricao && (
              <div className="absolute bottom-0 inset-x-0 bg-slate-900/80 text-white p-2 text-xs truncate">
                {foto.descricao}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal (RF12) */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 z-50"
            aria-label="Fechar visualização de imagem"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 z-50"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center">
            {fotos[selectedIndex].url && (
              <div className="relative w-full h-[70vh]">
                <Image
                  src={fotos[selectedIndex].url!}
                  alt={fotos[selectedIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {fotos[selectedIndex].descricao && (
              <p className="text-white text-sm mt-4 text-center font-medium bg-black/60 px-4 py-2 rounded-md">
                {fotos[selectedIndex].descricao}
              </p>
            )}
            <p className="text-slate-400 text-xs mt-2">
              {selectedIndex + 1} de {fotos.length}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 z-50"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  )
}
