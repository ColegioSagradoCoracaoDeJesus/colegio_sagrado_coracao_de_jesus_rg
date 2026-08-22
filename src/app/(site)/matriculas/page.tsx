import React from 'react'
import { GraduationCap, Calendar, FileCheck, Phone, CheckCircle2, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { Botao } from '@/components/ui/Botao'
import { FormVisitaModal } from '@/components/conteudo/FormVisitaModal'
import { BlocoCTA } from '@/components/conteudo/BlocoCTA'
import { getSiteSettings } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Matrículas e Rematrículas 2027 | Vagas Abertas',
  description: 'Garanta a vaga do seu filho no Colégio Sagrado Coração de Jesus para o Ano Letivo 2027 em Rio Grande - RS. Documentação necessária, passo a passo e agendamento de visita.',
}

export default async function MatriculasPage() {
  const settings = await getSiteSettings()
  const passosMatricula = [
    { passo: '01', titulo: 'Agende uma Visita Guiada', descricao: 'Conheça nossa estrutura física, proposta pedagógica e tire dúvidas com a equipe de coordenação.' },
    { passo: '02', titulo: 'Entrevista Pedagógica & Apresentação', descricao: 'Conversa acolhedora com os pais e apresentação das diretrizes de convivência do Sagrado.' },
    { passo: '03', titulo: 'Entrega de Documentos', descricao: 'Apresentação da documentação do aluno e dos responsáveis na Secretaria do Colégio.' },
    { passo: '04', titulo: 'Assinatura & Boas-Vindas', descricao: 'Assinatura do contrato de prestação de serviços educacionais e integração da família no Diário Escola.' },
  ]

  const documentosNecessarios = [
    'Certidão de Nascimento do Aluno (cópia simples)',
    'RG e CPF do Aluno (se houver)',
    'RG, CPF e Comprovante de Residência dos Responsáveis Financeiros',
    'Declaração de Transferência ou Histórico Escolar da escola de origem',
    'Carteira de Vacinação atualizada (para Educação Infantil e Fundamental I)',
    'Declaração de Quitação de Débitos da escola anterior',
  ]

  const faqMatriculas = [
    { pergunta: 'Qual é o horário de atendimento da Secretaria para matrículas?', resposta: 'A Secretaria atende presencialmente e por telefone de segunda a sexta-feira, das 07h30 às 17h30 sem fechar para o almoço.' },
    { pergunta: 'O Colégio oferece período integral ou turmas de contraturno?', resposta: 'Sim! Possuímos programas de permanência estendida e atividades extracurriculares no contraturno escolar para Educação Infantil e Ensino Fundamental.' },
    { pergunta: 'Como funciona a rematrícula de alunos veteranos para 2027?', resposta: 'Alunos veteranos possuem prioridade de renovação de vaga através do portal de rematrículas com condições especiais no período oficial de campanha 2027.' },
  ]

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Matrículas & Rematrículas 2027' }]} />

      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Ano Letivo 2027 — Vagas Abertas</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Matrículas & Rematrículas 2027</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Garanta a vaga do seu filho para 2027 em uma instituição com 70 anos de tradição, inovação e acolhimento humano em Rio Grande - RS.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Step by step */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Etiqueta variant="brand">Passo a Passo</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Como Funciona o Processo de Matrícula</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passosMatricula.map((p, idx) => (
              <div key={idx} className="bg-white p-6 rounded-md border border-slate-200 shadow-sm relative space-y-3">
                <span className="font-display font-bold text-3xl text-[#D97706]">{p.passo}</span>
                <h3 className="font-display font-bold text-lg text-slate-900">{p.titulo}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documentation checklist & Agende Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 bg-slate-50 p-8 rounded-lg border border-slate-200 space-y-6">
            <div className="space-y-2">
              <Etiqueta variant="brand">Documentação Exigida</Etiqueta>
              <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-brand" />
                <span>Documentos para Matrícula</span>
              </h3>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              {documentosNecessarios.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Botao href={`https://wa.me/${settings.whatsapp}`} external variant="outline" fullWidth size="md">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Tirar dúvidas sobre documentos</span>
              </Botao>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FormVisitaModal />
          </div>
        </div>

        {/* FAQ Section */}
        <section className="space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <Etiqueta variant="brand">Perguntas Frequentes</Etiqueta>
            <h2 className="font-display text-h2 font-bold text-slate-900">Dúvidas Comuns sobre Matrículas</h2>
          </div>

          <div className="space-y-4">
            {faqMatriculas.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-md border border-slate-200 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>{faq.pergunta}</span>
                </h3>
                <p className="text-slate-600 text-sm pl-6 leading-relaxed">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </section>

        <BlocoCTA />
      </div>
    </div>
  )
}
