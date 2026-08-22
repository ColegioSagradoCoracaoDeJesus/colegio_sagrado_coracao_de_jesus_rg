import React from 'react'
import Image from 'next/image'
import { Cpu, Laptop, ExternalLink, ShieldCheck, Smartphone, BookOpen, Sparkles, AlertCircle } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'

export const metadata = {
  title: 'Tecnologia Educacional | Diário Escola e Plataforma Iônica',
  description: 'Conheça as plataformas digitais e ecossistema de aprendizagem da Plataforma Iônica e Diário Escola.',
}

export default function TecnologiaEducacionalPage() {
  return (
    <div>
      <MigalhaDePao items={[{ label: 'Tecnologia Educacional' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Ecossistema Digital</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Recursos e Plataformas Educacionais</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Ferramentas e plataformas de apoio ao processo pedagógico e comunicação entre Escola e Famílias.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Main 2 Platforms (RF09) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Diário Escola */}
          <div className="bg-white p-8 rounded-lg border-2 border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-200">
                  <Smartphone className="w-8 h-8" />
                </div>
                <Etiqueta variant="success">Comunicação Escola-Família</Etiqueta>
              </div>

              <h2 className="font-display font-bold text-2xl text-slate-900">Diário Escola</h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Plataforma de comunicação e acompanhamento de rotina escolar para Educação Infantil e Ensino Fundamental.
              </p>
              <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-300">
                Plataforma fornecida e gerenciada por parceiro educacional.
              </p>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Agenda diária de atividades e comunicados oficiais</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Registro de frequência, tarefas de casa e alimentação</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Canal direto com a coordenação pedagógica e professores</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Botao href="https://diarioescola.com.br" external variant="primary" fullWidth size="md">
                <span>Acessar Diário Escola (Web/App)</span>
                <ExternalLink className="w-4 h-4" />
              </Botao>
            </div>
          </div>

          {/* Card 2: Plataforma Iônica */}
          <div className="bg-white p-8 rounded-lg border-2 border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-amber-50 text-[#D97706] rounded-lg border border-amber-200">
                  <Laptop className="w-8 h-8" />
                </div>
                <Etiqueta variant="accent">Aprendizagem Adaptativa</Etiqueta>
              </div>

              <h2 className="font-display font-bold text-2xl text-slate-900">Plataforma Iônica</h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Ambiente virtual de aprendizagem utilizado do Ensino Fundamental ao Ensino Médio com materiais didáticos digitais e recursos educacionais.
              </p>
              <p className="text-xs text-slate-500 italic bg-slate-50 p-2 rounded border border-slate-300">
                Plataforma fornecida e gerenciada por parceiro educacional (FTD Educação).
              </p>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Livros digitais interativos e acervo multimídia 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Trilhas de exercícios adaptativos e recursos interativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Relatórios individuais de desempenho em tempo real</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <Botao href="https://p21-ionica.com.br" external variant="accent" fullWidth size="md">
                <span>Acessar Plataforma Iônica</span>
                <ExternalLink className="w-4 h-4" />
              </Botao>
            </div>
          </div>
        </div>

        {/* Infographic Note */}
        <section className="bg-blue-50 p-8 rounded-lg border-l-4 border-brand">
          <div className="space-y-3">
            <h3 className="font-display font-bold text-lg text-slate-900">💡 Nota Importante</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              O Colégio Sagrado Coração de Jesus utiliza plataformas e recursos educacionais reconhecidos no mercado, fornecidos por parceiros especializados, 
              integrados ao currículo pedagógico para enriquecer o processo de ensino e aprendizagem.
            </p>
            <p className="text-xs text-slate-600 italic">
              As plataformas, softwares e materiais digitais são ferramentas de apoio gerenciadas e atualizadas pelos respectivos fornecedores.
            </p>
          </div>
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
