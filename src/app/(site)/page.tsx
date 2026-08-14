import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, GraduationCap, Award, Heart, CheckCircle2, ChevronRight, MessageSquare, PhoneCall, Sparkles, Megaphone, Clock, MapPin } from 'lucide-react'
import { Botao } from '@/components/ui/Botao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { CartaoNoticia } from '@/components/conteudo/CartaoNoticia'
import { CartaoDiferencial } from '@/components/conteudo/CartaoDiferencial'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { CarroselParceiros } from '@/components/conteudo/CarroselParceiros'
import { getNoticias, getDiferenciais, getModalidades, getDepoimentos, getParceiros } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Colégio Sagrado Coração de Jesus | Educação de Excelência em Rio Grande - RS',
  description: 'Descubra o Colégio Sagrado Coração de Jesus em Rio Grande - RS: Educação Infantil, Ensino Fundamental, Ensino Médio, tradição, acolhimento e matrículas abertas.',
}

export const revalidate = 60 // Revalidate cache every 60 seconds

export default async function HomePage() {
  const notizie = await getNoticias()
  const diferenciais = await getDiferenciais()
  const modalidades = await getModalidades()
  const depoimentos = await getDepoimentos()
  const parceiros = await getParceiros()

  const noticiasDestaque = notizie.filter((n) => n.destaque).slice(0, 2)
  const outrasNoticias = notizie.slice(0, 3)

  // Dynamic avisos mock/data (hides automatically if empty)
  const avisosImportantes = [
    {
      id: 'a1',
      tipo: 'Matrículas 2027',
      titulo: 'Período de Rematrículas para Alunos Veteranos e Novas Vagas Abertas',
      descricao: 'Agende o atendimento na secretaria ou garanta a vaga do seu filho pelo portal de matrículas.',
      data: 'Vagas Limitadas',
    },
  ]

  return (
    <div className="space-y-16 pb-12">
      {/* SECTION 1: HERO BANNER (RF01, RF02) */}
      <section className="relative bg-[#1E3A5F] text-white py-16 lg:py-24 px-4 overflow-hidden border-b-4 border-[#B8860B]">
        {/* Background Image Overlay with dark gradient */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920&auto=format&fit=crop"
            alt="Fachada do Colégio Sagrado Coração de Jesus"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#152A47] via-[#1E3A5F]/90 to-[#152A47]/80 z-0" />

        <div className="max-w-[1280px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#B8860B]/30 border border-[#B8860B] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-200 shadow-sm backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Jubileu de Vinho — 70 Anos de História (1956 - 2026)</span>
            </div>

            <h1 className="font-display text-hero font-bold tracking-tight text-white leading-tight">
              Há 70 anos formando gerações com excelência, acolhimento e valores.
            </h1>

            <p className="text-slate-200 text-base sm:text-xl max-w-2xl leading-relaxed font-sans">
              Tradição pedagógica reconhecida em Rio Grande - RS, no bairro Cidade Nova, com estrutura moderna, ginásio e auditório próprios, programa bilíngue e foco constante na formação humana integral do seu filho.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-white/5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-amber-200 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS</span>
            </div>

            {/* 4 Mandatory Action Buttons (RF01) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto lg:mx-0">
              <Botao href="/matriculas" variant="accent" size="md" fullWidth>
                <GraduationCap className="w-4 h-4" />
                <span>Matrículas & Rematrículas</span>
              </Botao>

              <Botao href="/nossa-historia" variant="outline" size="md" fullWidth className="border-white text-white hover:bg-white hover:text-[#1E3A5F]">
                <Award className="w-4 h-4" />
                <span>Conheça o Colégio</span>
              </Botao>

              <Botao href="/contato#agendar-visita" variant="anniversary" size="md" fullWidth>
                <Calendar className="w-4 h-4" />
                <span>Agende uma Visita</span>
              </Botao>

              <Botao href="/contato" variant="white" size="md" fullWidth>
                <PhoneCall className="w-4 h-4 text-[#1E3A5F]" />
                <span>Fale Conosco</span>
              </Botao>
            </div>
          </div>

          {/* Hero Feature Card: 70th Anniversary Badge & Quick Stats */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-white space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/20 pb-4">
              <div className="w-14 h-14 rounded-full bg-[#B8860B] flex items-center justify-center font-display font-bold text-2xl shadow border-2 border-white">
                70
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">Anos de Sagrado</h3>
                <p className="text-xs text-amber-300">Sete Décadas Formando Líderes Éticos</p>
              </div>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Da Educação Infantil ao Ensino Médio:</strong> Jornada completa.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Ginásio e Auditório Próprios:</strong> Locação e eventos.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Tecnologia Integrada:</strong> Plataforma Iônica e Diário Escola.</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-white/20">
              <Link href="/70-anos" className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-white transition-colors">
                <span>Ver programação dos 70 Anos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4">
        <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E3A5F]">Escola em Rio Grande - RS</p>
              <h2 className="mt-2 font-display text-h2 font-bold text-slate-900">Educação de qualidade para famílias da região</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                O Colégio Sagrado Coração de Jesus está localizado no bairro Cidade Nova, em Rio Grande - RS, e oferece uma proposta educativa completa para a Educação Infantil, Ensino Fundamental e Ensino Médio. Com 70 anos de tradição, o Colégio combina acolhimento, valores, excelência acadêmica e uma infraestrutura moderna para o desenvolvimento integral dos estudantes.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:w-[360px]">
              <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-[#1E3A5F]">70 anos</div>
                <div className="text-xs text-slate-600">de tradição</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-[#1E3A5F]">Educação</div>
                <div className="text-xs text-slate-600">Integral</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm">
                <div className="text-lg font-bold text-[#1E3A5F]">Rio Grande</div>
                <div className="text-xs text-slate-600">- RS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DYNAMIC AVISOS & CAMPANHA BANNER (RF02 - hides automatically if empty) */}
      {avisosImportantes.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4">
          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 bg-amber-500 text-white rounded-full shrink-0 mt-1 sm:mt-0">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Etiqueta variant="accent" size="sm">{avisosImportantes[0].tipo}</Etiqueta>
                  <span className="text-xs font-bold text-amber-900">{avisosImportantes[0].data}</span>
                </div>
                <h3 className="font-display font-bold text-lg text-amber-950">{avisosImportantes[0].titulo}</h3>
                <p className="text-sm text-amber-800 leading-relaxed">{avisosImportantes[0].descricao}</p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <Botao href="/matriculas" variant="accent" size="sm" fullWidth>
                Saber Mais sobre Vagas
              </Botao>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: MODALIDADES DE ENSINO PREVIEW (RF04) */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <Etiqueta variant="brand">Formação Integral</Etiqueta>
          <h2 className="font-display text-h1 font-bold text-slate-900">
            Nossas Modalidades de Ensino
          </h2>
          <p className="text-slate-600 text-body">
            Uma trajetória contínua de aprendizagem, afeto e desenvolvimento cognitivo adaptada a cada fase da infância e juventude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modalidades.map((m) => (
            <div key={m._id} className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="relative h-44 w-full bg-slate-100">
                {m.imageUrl && (
                  <Image src={m.imageUrl} alt={m.nome} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                )}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#1E3A5F] text-white text-xs font-bold px-2.5 py-1 rounded">
                    {m.faixaEtaria}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 mb-2 group-hover:text-[#1E3A5F] transition-colors">
                    {m.nome}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-4">
                    {m.resumo}
                  </p>
                </div>

                <Link href="/ensino" className="inline-flex items-center gap-1 text-xs font-bold text-[#1E3A5F] hover:text-[#D97706] transition-colors">
                  <span>Conhecer modalidade</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: DIFERENCIAIS INSTITUCIONAIS (RF06) */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Etiqueta variant="anniversary">Por que o Sagrado?</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-slate-900">
              Diferenciais que Transformam Futuros
            </h2>
            <p className="text-slate-600 text-body">
              Conheça os pilares pedagógicos e de infraestrutura que fundamentam nossos 70 anos de história.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((dif) => (
              <CartaoDiferencial key={dif._id} diferencial={dif} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Botao href="/diferenciais" variant="outline" size="md">
              Ver Todos os Diferenciais em Detalhes
            </Botao>
          </div>
        </div>
      </section>

      {/* SECTION 5: NOTÍCIAS & ACONTECEU NO SAGRADO (RF10) */}
      <section className="max-w-[1280px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <Etiqueta variant="brand" className="mb-2">Comunidade Escolar</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-slate-900">Aconteceu no Sagrado</h2>
            <p className="text-slate-600 text-sm mt-1">Acompanhe as últimas notícias, projetos pedagógicos e comemorações dos 70 anos.</p>
          </div>
          <Botao href="/noticias" variant="outline" size="sm">
            Ver Todas as Notícias
          </Botao>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {outrasNoticias.map((noticia) => (
            <CartaoNoticia key={noticia._id} noticia={noticia} />
          ))}
        </div>
      </section>

      <CarroselParceiros parceiros={parceiros} />

      {/* SECTION 6: TESTEMUNHOS DOS 70 ANOS (RF08) */}
      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <Etiqueta variant="anniversary">Vozes da Nossa História</Etiqueta>
            <h2 className="font-display text-h1 font-bold text-white">Depoimentos dos 70 Anos</h2>
            <p className="text-slate-200 text-body">
              Histórias reais de quem vivenciou a excelência e o afeto do Colégio Sagrado Coração de Jesus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep) => (
              <div key={dep._id} className="bg-[#152A47] p-6 rounded-md border border-[#B8860B]/40 shadow-lg flex flex-col justify-between">
                <p className="italic text-slate-200 text-sm leading-relaxed mb-6">
                  “{dep.texto}”
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                  <div className="w-10 h-10 rounded-full bg-[#B8860B] text-white font-bold flex items-center justify-center text-sm shrink-0">
                    {dep.nome.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{dep.nome}</h4>
                    <p className="text-xs text-amber-300">{dep.relacao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: HIGH CONVERSION CTA */}
      <div className="max-w-[1280px] mx-auto px-4">
        <BlocoCTA />
      </div>
    </div>
  )
}
