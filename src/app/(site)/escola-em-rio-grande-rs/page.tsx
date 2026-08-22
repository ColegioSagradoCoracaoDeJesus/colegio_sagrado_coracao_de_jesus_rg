import React from 'react'
import { MapPin, GraduationCap, School, PhoneCall, CalendarCheck2 } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { getSiteSettings } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Escola em Rio Grande - RS | Colégio Sagrado Coração de Jesus',
  description: 'Conheça o Colégio Sagrado Coração de Jesus em Rio Grande - RS, no bairro Cidade Nova, oferecendo Educação Infantil, Ensino Fundamental e Ensino Médio com tradição e acolhimento.',
}

export default async function EscolaRioGrandePage() {
  const settings = await getSiteSettings()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Escola em Rio Grande - RS' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="mx-auto max-w-[1280px] text-center space-y-4">
          <Etiqueta variant="anniversary">Escola em Rio Grande - RS</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Colégio Sagrado Coração de Jesus</h1>
          <p className="mx-auto max-w-3xl text-slate-200 text-body leading-relaxed">
            Uma instituição com tradição, acolhimento e excelência pedagógica, localizada no bairro Cidade Nova em Rio Grande - RS. Oferecemos Educação Infantil, Ensino Fundamental e Ensino Médio com foco na formação integral dos estudantes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1280px] px-4 py-16 space-y-14">
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-display text-h2 font-bold text-slate-900">Educação de qualidade para a cidade de Rio Grande</h2>
            <p className="text-slate-600 leading-relaxed">
              O Colégio Sagrado Coração de Jesus é referência em educação no município de Rio Grande - RS. Nossa proposta combina tradição, valores cristãos, atenção individualizada e uma estrutura moderna pensada para o desenvolvimento emocional, cognitivo e social dos alunos.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Com 70 anos de atuação, o colégio oferece um ambiente acolhedor e seguro para famílias que buscam uma educação sólida, com inovação pedagógica e preparação para o futuro.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <School className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">Educação Infantil</h3>
                <p className="mt-2 text-sm text-slate-600">Ambiente acolhedor e estimulante para o desenvolvimento inicial da criança.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">Ensino Fundamental</h3>
                <p className="mt-2 text-sm text-slate-600">Estrutura acadêmica sólida com foco em autonomia, raciocínio e cidadania.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <CalendarCheck2 className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">Ensino Médio</h3>
                <p className="mt-2 text-sm text-slate-600">Preparação para desafios acadêmicos, profissionais e pessoais.</p>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">Localização</h3>
                <p className="mt-2 text-sm text-slate-600">Conveniente para famílias do bairro Cidade Nova e região de Rio Grande.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-h3 font-bold text-slate-900">Visite o Colégio</h3>
              <ul className="mt-5 space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-brand" />
                  <span>{settings.endereco}</span>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneCall className="mt-0.5 h-5 w-5 text-brand" />
                  <span>{settings.telefones[0]}</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Botao href="/contato#agendar-visita" variant="accent" size="md" fullWidth>
                  Agendar visita
                </Botao>
                <Botao href={`https://wa.me/${settings.whatsapp}`} external variant="white" size="md" fullWidth>
                  Falar no WhatsApp
                </Botao>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-brand/10 bg-[#F8FAFC] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Por que escolher o Sagrado?</p>
          <h2 className="mt-3 font-display text-h2 font-bold text-slate-900">Uma educação que une tradição, acolhimento e inovação</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Tradição de 70 anos</h3>
              <p className="mt-2 text-sm text-slate-600">História sólida, valores e compromisso com a formação cidadã.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Acolhimento humano</h3>
              <p className="mt-2 text-sm text-slate-600">Ambiente seguro, respeitoso e atento às necessidades de cada criança e jovem.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">Excelência pedagógica</h3>
              <p className="mt-2 text-sm text-slate-600">Estratégias alinhadas ao desenvolvimento integral e ao futuro acadêmico.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
