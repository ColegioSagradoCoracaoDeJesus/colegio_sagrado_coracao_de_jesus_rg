import React from 'react'
import Image from 'next/image'
import { Heart, Sun, Users, BookOpen, Music, Shield, Sparkles } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'

export const metadata = {
  title: 'Vivencie o Sagrado | Vida Escolar e Pastoral',
  description: 'Conheça o dia a dia, projetos pastorais, convivência comunitária e rotina acolhedora do Colégio Sagrado Coração de Jesus.',
}

export default function VivencieOSagradoPage() {
  const pilaresVida = [
    {
      icon: <Heart className="w-8 h-8 text-amber-500" />,
      titulo: 'Pastoral & Espiritualidade',
      descricao: 'Ações de solidariedade, encontros de reflexão, celebrações eucarísticas e voluntariado que aquecem o coração e desenvolvem a empatia.',
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      titulo: 'Projetos de Convivência',
      descricao: 'Rodas de conversa socioemocionais, mediação de conflitos e assembleias de alunos para fortalecer o sentimento de pertencimento.',
    },
    {
      icon: <Music className="w-8 h-8 text-amber-500" />,
      titulo: 'Cultura, Arte & Esportes',
      descricao: 'Mostras culturais, festivais de música, peças teatrais e olimpíadas internas no ginásio poliesportivo.',
    },
    {
      icon: <Sun className="w-8 h-8 text-amber-500" />,
      titulo: 'Rotina e Conforto',
      descricao: 'Horários organizados, ambiente seguro com monitoramento 24h e refeições acompanhadas por nutricionista.',
    },
  ]

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Vivencie o Sagrado' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Vida em Comunidade</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Vivencie o Sagrado</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Mais do que salas de aula: um espaço de convivência, desenvolvimento de virtudes e memórias inesquecíveis para toda a vida.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-h2 font-bold text-slate-900">
              Um Ambiente Onde Cada Aluno se Sente em Casa
            </h2>
            <p className="text-slate-600 text-body leading-relaxed">
              No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              Nossa rotina é planejada para equilibrar rigor acadêmico, práticas esportivas, manifestações artísticas e momentos de pastoral que conectam a juventude a valores elevados.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-80 rounded-md overflow-hidden shadow-lg border-2 border-slate-200">
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
              alt="Alunos convivendo no pátio do colégio"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilaresVida.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-14 h-14 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-200">
                {p.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">{p.titulo}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.descricao}</p>
            </div>
          ))}
        </div>

        <BlocoCTA />
      </div>
    </div>
  )
}
