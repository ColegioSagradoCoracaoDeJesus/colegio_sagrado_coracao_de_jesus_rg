import React from 'react'
import Image from 'next/image'
import { Cpu, Laptop, ExternalLink, ShieldCheck, Smartphone, BookOpen, Sparkles } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'

export const metadata = {
  title: 'Tecnologia Educacional | Diário Escola e Plataforma Iônica',
  description: 'Conheça as plataformas digitais, laboratórios de robótica e ecossistema de aprendizagem da Plataforma Iônica e Diário Escola.',
}

export default function TecnologiaEducacionalPage() {
  return (
    <div>
      <MigalhaDePao items={[{ label: 'Tecnologia Educacional' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Ecossistema Digital</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Tecnologia Educacional</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Ferramentas digitais de última geração integradas ao cotidiano pedagógico e à comunicação transparente com as famílias.
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
                Aplicativo oficial do Colégio para acompanhamento diário da rotina escolar dos alunos da Educação Infantil e Ensino Fundamental.
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
                Ambiente virtual de aprendizagem utilizado do Ensino Fundamental ao Ensino Médio para materiais didáticos digitais e simulados.
              </p>

              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Livros digitais interativos e acervo multimídia 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span>Trilhas de exercícios adaptativos e simulados ENEM</span>
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

        {/* Robotics & STEAM */}
        <section className="bg-slate-50 p-8 sm:p-10 rounded-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Etiqueta variant="brand">Cultura Maker & STEAM</Etiqueta>
              <h3 className="font-display font-bold text-2xl text-slate-900">Laboratório de Robótica & Raciocínio Lógico</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nossos alunos aprendem programação, montagem de protótipos e resolução de problemas através de um currículo prático de robótica alinhado com desafios mundiais de inovação.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-60 rounded-md overflow-hidden bg-slate-200">
              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
                alt="Alunos aprendendo robótica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
