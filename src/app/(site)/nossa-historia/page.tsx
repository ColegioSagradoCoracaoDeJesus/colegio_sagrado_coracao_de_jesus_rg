import React from 'react'
import Image from 'next/image'
import { Compass, Eye, Heart, BookOpen, Users, Building2, GraduationCap, Quote } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { ItemLinhaDoTempo } from '@/components/conteudo/ItemLinhaDoTempo'
import { GaleriaComLightbox } from '@/components/conteudo/GaleriaComLightbox'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getLinhaDoTempo } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Nossa História e 70 Anos em Rio Grande - RS',
  description: 'Conheça a trajetória de 70 anos do Colégio Sagrado Coração de Jesus em Rio Grande - RS, com missão, visão, valores e tradição pedagógica.',
}

export default async function NossaHistoriaPage() {
  const linhaTempo = await getLinhaDoTempo()

  const fotosHistoricas = [
    { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop', alt: 'Primeiras turmas em 1956', descricao: 'Primeira turma do Colégio Sagrado Coração em 1956' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', alt: 'Construção do prédio central', descricao: 'Inauguração do prédio histórico nos anos 1970' },
    { url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop', alt: 'Inauguração do ginásio poliesportivo', descricao: 'Primeiros campeonatos no Ginásio coberto' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', alt: 'Fachada atual no ano do Jubileu', descricao: 'Fachada atual preparada para as celebrações dos 70 anos' },
  ]

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Nossa História' }]} />

      {/* Header Banner */}
      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Jubileu de Vinho (1956 - 2026)</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Nossa História e Propósito em Rio Grande - RS</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Há sete décadas, o Colégio Sagrado Coração de Jesus atua em Rio Grande - RS formando cidadãos conscientes, éticos e preparados para transformar a sociedade com responsabilidade, acolhimento e excelência.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-20">
        {/* Institutional Text */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-h2 font-bold text-slate-900">
              Uma História que Começa com o Cuidado por Rio Grande
            </h2>
            <p className="text-slate-600 text-body leading-relaxed">
              Nossa trajetória começa em 14 de setembro de 1944, com a fundação do Círculo Operário Riograndino, sob a proteção de São José Operário e Nossa Senhora Medianeira. Atento às necessidades das famílias trabalhadoras da cidade e sob a liderança do Pe. Luiz de Carvalho, o Círculo fundou, em 16 de setembro de 1956, a Creche Casa da Criança Sagrado Coração de Jesus — criada para acolher os filhos dos operários enquanto os pais trabalhavam.
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              Em 1998, a creche se transformou em Escola de Ensino Fundamental. Em 2008, o Ensino Médio foi autorizado e a instituição passou a se chamar Colégio Sagrado Coração de Jesus. Hoje seguimos com a mesma essência acolhedora do início, oferecendo Recreação, Educação Infantil, Ensino Fundamental e Ensino Médio às famílias de Rio Grande - RS.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[380px] rounded-md overflow-hidden shadow-xl border-4 border-[#B8860B]/30">
            <Image
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
              alt="Alunos e fachada do Colégio Sagrado Coração de Jesus"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Philosophy */}
        <section className="bg-white border border-slate-200 rounded-md shadow-sm px-6 py-10 md:px-16 md:py-12">
          <div className="max-w-prose mx-auto text-center space-y-5">
            <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Quote className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="font-display text-h2 font-bold text-slate-900">Nossa Filosofia</h2>
            <p className="text-slate-600 text-body-lead leading-relaxed">
              Educamos pessoas descobridoras, reflexivas, criativas, críticas e humanistas — capazes de atuar como sujeitos transformadores da sociedade em que vivem.
            </p>
            <p className="text-slate-600 text-body leading-relaxed">
              Acreditamos que a educação desenvolve, em cada pessoa, a consciência da própria dignidade e a capacidade de exercer a cidadania. Por isso, direcionamos o conhecimento construído em sala de aula para uma finalidade maior: uma sociedade mais justa, mais ética e mais humana, na qual o aluno é sempre protagonista da própria história.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Compass className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Missão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Educar para a vida, respeitando as diferenças de cada aluno. Construímos, ao lado do estudante, o caminho para que ele conquiste autonomia — ensinando por meio de exemplos, valores e atitudes, e formando um cidadão consciente e com responsabilidade social.
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Eye className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossa Visão</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Formar alunos críticos e atuantes, capazes de devolver à sociedade tudo o que aprenderam no Colégio. Um processo educacional que respeita a individualidade de cada aluno, conduzido por educadores em constante busca por novos conhecimentos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-md border border-slate-200 shadow-sm hover:shadow-md transition-all text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow">
              <Heart className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900">Nossos Valores</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-1">
              Os princípios que guiam nossa convivência dentro e fora da sala de aula:
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {['Verdade', 'Justiça', 'Amizade', 'Sinceridade', 'Diversidade', 'Honestidade', 'Idealismo', 'Ética'].map((valor) => (
                <Etiqueta key={valor} variant="brand" size="sm">{valor}</Etiqueta>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Principles */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-display text-h2 font-bold text-slate-900">Como Enxergamos a Educação</h2>
            <p className="text-slate-600 text-body">
              Os princípios que orientam nossa prática pedagógica no dia a dia da escola.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-3">
              <Users className="w-8 h-8 text-brand" />
              <h3 className="font-display font-bold text-base text-slate-900">O Ser Humano</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acreditamos em um ser humano histórico e social, que se constrói na relação com o outro. Por isso, formamos cidadãos éticos, ativos e conscientes de seu papel na transformação da sociedade.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-3">
              <BookOpen className="w-8 h-8 text-brand" />
              <h3 className="font-display font-bold text-base text-slate-900">A Sociedade</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vivemos em um mundo em transformação constante. Preparamos nossos alunos para essa realidade com uma educação que desenvolve criatividade, pensamento crítico e responsabilidade social.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-3">
              <Building2 className="w-8 h-8 text-brand" />
              <h3 className="font-display font-bold text-base text-slate-900">A Escola</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Acreditamos numa escola que vai além de transmitir conhecimento: um espaço de convivência que acolhe as diferenças e aproxima o saber científico da vivência de cada aluno.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-slate-200 shadow-sm space-y-3">
              <GraduationCap className="w-8 h-8 text-brand" />
              <h3 className="font-display font-bold text-base text-slate-900">Ensino e Aprendizagem</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cada aluno aprende no seu tempo e do seu jeito. Nosso compromisso é adaptar a forma de ensinar — nunca abrir mão do conteúdo — para que todos aprendam, respeitando o que cada um já traz consigo.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Etiqueta variant="anniversary">Linha do Tempo</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-slate-900">Marcos Históricos dos 70 Anos</h2>
            <p className="text-slate-600 text-body">
              Relembre os momentos emblemáticos que construíram a nossa história de 1956 até hoje.
            </p>
          </div>

          <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-1 md:before:h-full md:before:bg-brand/20">
            {linhaTempo.map((item, idx) => (
              <ItemLinhaDoTempo key={item._id} item={item} isEven={idx % 2 === 0} />
            ))}
          </div>
        </section>

        {/* Photo Gallery (RF03 / RF12) */}
        <section className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="font-display text-h2 font-bold text-slate-900">Galeria Histórica e Atual</h2>
            <p className="text-slate-600 text-sm">Registros fotográficos da evolução física e da comunidade escolar do Sagrado.</p>
          </div>
          <GaleriaComLightbox fotos={fotosHistoricas} />
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
