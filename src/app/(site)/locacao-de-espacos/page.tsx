import React from 'react'
import { LocacaoDeEspacosForm } from '@/components/conteudo/LocacaoDeEspacosForm'
import { getEspacosLocacao } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Locação de Ginásio & Auditório em Rio Grande - RS',
  description: 'Alugue o ginásio poliesportivo ou o auditório do Colégio Sagrado Coração de Jesus em Rio Grande - RS para eventos, formaturas, campeonatos e palestras. Solicite um orçamento.',
}

export default async function LocacaoDeEspacosPage() {
  const espacos = await getEspacosLocacao()

  return <LocacaoDeEspacosForm espacos={espacos} />
}
