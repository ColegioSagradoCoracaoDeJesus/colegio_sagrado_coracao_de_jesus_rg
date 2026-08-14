import React from 'react'
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'

export const metadata = {
  title: 'Política de Privacidade & Proteção de Dados (LGPD)',
  description: 'Política de Privacidade e Termos de Uso de Dados Pessoais do Colégio Sagrado Coração de Jesus em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
}

export default function PoliticaDePrivacidadePage() {
  return (
    <div>
      <MigalhaDePao items={[{ label: 'Política de Privacidade' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Transparência & LGPD</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Política de Privacidade & Proteção de Dados</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Conheça os compromissos do Colégio Sagrado Coração de Jesus com a segurança e o tratamento responsável dos seus dados pessoais.
          </p>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-4 py-16 space-y-10 text-slate-800 text-sm leading-relaxed">
        <div className="p-4 bg-amber-50 border-l-4 border-[#D97706] rounded text-slate-900 text-xs">
          <p className="font-bold mb-1">Última atualização: Agosto de 2026</p>
          <p>Esta Política de Privacidade cumpre integralmente os requisitos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).</p>
        </div>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#1E3A5F]" />
            <span>1. Informações Coletadas nos Formulários</span>
          </h2>
          <p>
            O Colégio Sagrado Coração de Jesus coleta apenas os dados pessoais estritamente necessários para o atendimento das solicitações enviadas através dos nossos formulários de Agende uma Visita e Orçamento de Locação, incluindo: nome completo, telefone/WhatsApp, endereço de e-mail e informações pedagógicas ou do evento de interesse.
          </p>
          <p>
            Esses dados trafegam de forma criptografada (HTTPS) diretamente para a equipe responsável pela secretaria ou eventos, não sendo armazenados em bancos de dados públicos e não sendo comercializados ou compartilhados com terceiros sob nenhuma hipótese.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#1E3A5F]" />
            <span>2. Uso de Cookies e Google Analytics 4</span>
          </h2>
          <p>
            Nosso site utiliza cookies essenciais para o correto funcionamento da navegação e registra a sua preferência no aviso inicial de cookies via armazenamento local no seu próprio navegador.
          </p>
          <p>
            Os scripts estatísticos de medição de audiência (Google Analytics 4) somente são ativados caso você selecione a opção Aceitar Todos no banner de consentimento. Você pode alterar essa escolha ou limpar seus cookies a qualquer momento nas configurações do seu navegador.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-[#1E3A5F]" />
            <span>3. Proteção e Direitos do Titular de Dados</span>
          </h2>
          <p>
            Em conformidade com a LGPD, o titular dos dados possui o direito de solicitar a confirmação, o acesso, a correção ou a exclusão definitiva dos seus dados pessoais fornecidos ao Colégio.
          </p>
          <p>
            Para exercer seus direitos como titular de dados, entre em contato direto com nosso Encarregado de Proteção de Dados (DPO) através do e-mail oficial: <a href="mailto:secretariacolegiosagrado@gmail.com" className="text-[#1E3A5F] font-bold underline">secretariacolegiosagrado@gmail.com</a>.
          </p>
        </section>

        <section className="space-y-3 border-t pt-6">
          <h2 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1E3A5F]" />
            <span>4. Imagem de Alunos e Menores de Idade (RN01)</span>
          </h2>
          <p>
            Todas as imagens de alunos publicadas nas seções de Notícias ou Galerias possuem termo de autorização prévia de uso de imagem assinado pelos pais ou responsáveis legais no momento da matrícula, em cumprimento ao Estatuto da Criança e do Adolescente (ECA) e às normas da LGPD.
          </p>
        </section>
      </div>
    </div>
  )
}
