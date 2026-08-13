import React from 'react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { CartaoDiferencial } from '@/components/conteudo/CartaoDiferencial'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getDiferenciais } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Nossos Diferenciais',
  description: 'Descubra os diferenciais pedagógicos, bilinguismo, segurança, formação humana e estrutura do Colégio Sagrado Coração de Jesus.',
}

export default async function DiferenciaisPage() {
  const diferenciais = await getDiferenciais()

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Diferenciais' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Marca do Sagrado</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Nossos Diferenciais</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Razões pelas quais famílias confiam a formação de seus filhos ao Colégio Sagrado Coração de Jesus há 70 anos.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((dif) => (
            <CartaoDiferencial key={dif._id} diferencial={dif} />
          ))}
        </div>

        <BlocoCTA />
      </div>
    </div>
  )
}
