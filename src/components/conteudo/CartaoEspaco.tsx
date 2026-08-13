import React from 'react'
import Image from 'next/image'
import { Users, CheckCircle2, Calendar, FileText } from 'lucide-react'
import { EspacoLocacao } from '@/lib/sanity/queries'
import { Botao } from '../ui/Botao'
import { Etiqueta } from '../ui/Etiqueta'

interface CartaoEspacoProps {
  espaco: EspacoLocacao
  onSolicitarOrcamento: (espacoNome: string) => void
}

export const CartaoEspaco: React.FC<CartaoEspacoProps> = ({ espaco, onSolicitarOrcamento }) => {
  return (
    <div className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-md flex flex-col lg:grid lg:grid-cols-12 gap-0">
      {/* Photo banner */}
      <div className="relative lg:col-span-5 h-64 lg:h-full min-h-[280px] bg-slate-100">
        {espaco.imageUrl ? (
          <Image
            src={espaco.imageUrl}
            alt={espaco.nome}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#1E3A5F] text-white font-display text-xl font-bold p-6 text-center">
            {espaco.nome}
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Etiqueta variant="brand" size="sm">
            Locação Disponível
          </Etiqueta>
        </div>
      </div>

      {/* Details & Specifications */}
      <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="font-display font-bold text-2xl text-slate-900">{espaco.nome}</h3>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
              <Users className="w-4 h-4 text-amber-600" />
              <span>{espaco.capacidade}</span>
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            {espaco.descricao}
          </p>

          {/* Grid of features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Equipamentos & Recursos</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {espaco.itensDisponiveis.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#1E3A5F] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#D97706]" />
                <span>Eventos Recomendados</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {espaco.usosPossiveis.map((uso, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#D97706] font-bold">•</span>
                    <span>{uso}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {espaco.condicoesGerais && (
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-600 mb-6">
              <p className="font-semibold text-slate-900 mb-0.5 flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 text-[#5C7A99]" />
                <span>Condições e Regras Gerais:</span>
              </p>
              <p>{espaco.condicoesGerais}</p>
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <Botao onClick={() => onSolicitarOrcamento(espaco.nome)} variant="accent" size="md">
            Solicitar Orçamento de Locação
          </Botao>
        </div>
      </div>
    </div>
  )
}
