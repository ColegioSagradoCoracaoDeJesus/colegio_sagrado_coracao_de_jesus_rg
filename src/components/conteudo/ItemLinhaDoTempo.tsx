import React from 'react'
import Image from 'next/image'
import { LinhaDoTempoItem } from '@/lib/sanity/queries'
import { Award } from 'lucide-react'

interface ItemLinhaDoTempoProps {
  item: LinhaDoTempoItem
  isEven: boolean
}

export const ItemLinhaDoTempo: React.FC<ItemLinhaDoTempoProps> = ({ item, isEven }) => {
  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-8 my-8 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Date badge / center pin */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className={`bg-white p-6 rounded-md border-2 border-[#B8860B] shadow-md max-w-lg w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
          <div className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-3 py-1 rounded font-bold text-sm mb-3">
            <Award className="w-4 h-4" />
            <span>{item.ano}</span>
          </div>

          <h3 className="font-display font-bold text-xl text-brand mb-2">{item.titulo}</h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.descricao}</p>

          {item.imageUrl && (
            <div className="relative h-44 w-full rounded-md overflow-hidden bg-slate-100 border border-slate-200 mt-3">
              <Image src={item.imageUrl} alt={item.titulo} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          )}
        </div>
      </div>

      {/* Timeline Node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand border-4 border-amber-400 items-center justify-center text-white z-10 shadow">
        <div className="w-2 h-2 rounded-full bg-white"></div>
      </div>

      {/* Empty half for desktop layout spacing */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  )
}
