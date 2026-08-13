import React from 'react'
import Link from 'next/link'
import { Home, Search, ArrowLeft, GraduationCap } from 'lucide-react'
import { Botao } from '@/components/ui/Botao'
import { Etiqueta } from '@/components/ui/Etiqueta'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-xl space-y-6">
        <div className="w-20 h-20 bg-amber-50 text-[#D97706] rounded-full flex items-center justify-center mx-auto border-2 border-amber-200 font-display font-bold text-3xl">
          404
        </div>

        <div className="space-y-2">
          <Etiqueta variant="accent">Página Não Encontrada</Etiqueta>
          <h1 className="font-display font-bold text-2xl text-slate-900">Ops! Endereço Inexistente</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            A página que você está procurando pode ter sido movida, atualizada ou o link digitado está incorreto.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Botao href="/" variant="primary" fullWidth size="md">
            <Home className="w-4 h-4" />
            <span>Voltar para a Página Inicial</span>
          </Botao>
          <Botao href="/noticias" variant="outline" fullWidth size="md">
            <Search className="w-4 h-4" />
            <span>Ver Notícias & Aconteceu no Sagrado</span>
          </Botao>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <p className="text-xs text-slate-500">
            Dúvidas? Entre em contato com nossa secretaria pelo telefone <strong className="text-slate-800">(41) 3333-7000</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}
