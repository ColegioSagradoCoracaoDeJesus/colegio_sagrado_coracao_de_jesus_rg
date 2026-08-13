'use client'

import React, { useState } from 'react'
import { Building2, Calendar, Send, CheckCircle2, AlertCircle, Loader2, Users, FileText } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { CartaoEspaco } from '@/components/conteudo/CartaoEspaco'
import { CampoFormulario, HoneypotField } from '@/components/ui/CampoFormulario'
import { Botao } from '@/components/ui/Botao'
import { validateOrcamentoLocacao } from '@/lib/validation'
import { DEFAULT_ESPACOS } from '@/lib/sanity/queries'

export default function LocacaoDeEspacosPage() {
  const espacos = DEFAULT_ESPACOS

  const [selectedEspaco, setSelectedEspaco] = useState('Ginásio Poliesportivo Sagrado')

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    espacoInteresse: 'Ginásio Poliesportivo Sagrado',
    dataPrevista: '',
    numeroEstimadoPessoas: '',
    descricaoEvento: '',
    website_hp: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleOpenFormWithEspaco = (espacoNome: string) => {
    setSelectedEspaco(espacoNome)
    setFormData((prev) => ({ ...prev, espacoInteresse: espacoNome }))
    const formElement = document.getElementById('formulario-orcamento')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage('')

    const { valid, errors: valErrors } = validateOrcamentoLocacao(formData)
    if (!valid) {
      setErrors(valErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/orcamento-locacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsSuccess(true)
        setFormData({
          nome: '',
          telefone: '',
          email: '',
          espacoInteresse: selectedEspaco,
          dataPrevista: '',
          numeroEstimadoPessoas: '',
          descricaoEvento: '',
          website_hp: '',
        })
      } else {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          setErrorMessage(data.message || 'Erro ao enviar a solicitação.')
        }
      }
    } catch (err) {
      setErrorMessage('Erro de conexão. Tente novamente mais tarde.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Locação de Espaços' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Infraestrutura Multiuso</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Locação de Ginásio & Auditório</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Estruturas completas para campeonatos esportivos, formaturas, convenções corporativas, apresentações artísticas e palestras.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        {/* Espaços Cards (RF19) */}
        <div className="space-y-10">
          {espacos.map((espaco) => (
            <CartaoEspaco
              key={espaco._id}
              espaco={espaco}
              onSolicitarOrcamento={handleOpenFormWithEspaco}
            />
          ))}
        </div>

        {/* Detailed Rental Terms (RF21) */}
        <section className="bg-slate-50 p-8 rounded-lg border border-slate-200 space-y-4">
          <h3 className="font-display font-bold text-xl text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1E3A5F]" />
            <span>Condições Gerais e Regras de Utilização dos Espaços (RF21)</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 leading-relaxed">
            <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
              <span className="text-[#1E3A5F] font-bold">1.</span>
              <span>Horários disponíveis: Finais de semana (sábados e domingos) e noites em dias úteis a partir das 19h00.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
              <span className="text-[#1E3A5F] font-bold">2.</span>
              <span>Equipe de apoio técnico de som e iluminação do Colégio incluída nos eventos do Auditório.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
              <span className="text-[#1E3A5F] font-bold">3.</span>
              <span>Proibido o uso de calçados que danifiquem o piso emborrachado oficial da quadra do Ginásio.</span>
            </li>
            <li className="flex items-start gap-2 bg-white p-3 rounded border border-slate-200">
              <span className="text-[#1E3A5F] font-bold">4.</span>
              <span>Reservas sujeitas a análise de compatibilidade do evento com as diretrizes institucionais do Colégio.</span>
            </li>
          </ul>
        </section>

        {/* Formulario de Solicitação de Orçamento (RF20) */}
        <section id="formulario-orcamento" className="bg-white p-8 sm:p-10 rounded-lg border-2 border-[#1E3A5F] shadow-lg max-w-3xl mx-auto space-y-6">
          <div className="border-b pb-4">
            <Etiqueta variant="accent" className="mb-2">Solicite uma Cotação</Etiqueta>
            <h2 className="font-display font-bold text-2xl text-slate-900">Formulário de Orçamento de Locação</h2>
            <p className="text-xs text-slate-600 mt-1">Preencha os dados do seu evento para receber os valores e disponibilidade.</p>
          </div>

          {isSuccess ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-4 my-4 animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-display font-bold text-lg text-emerald-900">Solicitação Enviada com Sucesso!</h4>
              <p className="text-sm text-emerald-800 leading-relaxed">
                Recebemos o pedido de orçamento para o <strong>{formData.espacoInteresse}</strong>. Nossa equipe de eventos entrará em contato via e-mail ou WhatsApp.
              </p>
              <Botao onClick={() => setIsSuccess(false)} variant="outline" size="sm">
                Enviar Outro Pedido
              </Botao>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <HoneypotField value={formData.website_hp} onChange={handleChange} />

              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-xs text-red-700 flex items-center gap-2 mb-4">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <CampoFormulario
                  label="Nome do Responsável / Empresa / Instituição"
                  name="nome"
                  type="text"
                  placeholder="Ex: João da Silva / Associação Esportiva"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  error={errors.nome}
                />

                <CampoFormulario
                  label="Telefone / WhatsApp de Contato"
                  name="telefone"
                  type="tel"
                  placeholder="(41) 99999-9999"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  error={errors.telefone}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <CampoFormulario
                  label="E-mail Principal"
                  name="email"
                  type="email"
                  placeholder="seu.email@empresa.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                <CampoFormulario
                  label="Espaço de Interesse"
                  name="espacoInteresse"
                  type="select"
                  required
                  value={formData.espacoInteresse}
                  onChange={handleChange}
                  error={errors.espacoInteresse}
                  options={[
                    { value: 'Ginásio Poliesportivo Sagrado', label: 'Ginásio Poliesportivo Sagrado' },
                    { value: 'Auditório Principal Ir. Tereza', label: 'Auditório Principal Ir. Tereza' },
                    { value: 'Ambos os Espaços', label: 'Ambos os Espaços (Ginásio + Auditório)' },
                  ]}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <CampoFormulario
                  label="Data Prevista para o Evento"
                  name="dataPrevista"
                  type="date"
                  required
                  value={formData.dataPrevista}
                  onChange={handleChange}
                  error={errors.dataPrevista}
                />

                <CampoFormulario
                  label="Estimativa de Público (Pessoas)"
                  name="numeroEstimadoPessoas"
                  type="text"
                  placeholder="Ex: 300 pessoas"
                  value={formData.numeroEstimadoPessoas}
                  onChange={handleChange}
                />
              </div>

              <CampoFormulario
                label="Descrição Breve do Evento e Necessidades"
                name="descricaoEvento"
                type="textarea"
                rows={4}
                required
                placeholder="Descreva o tipo de evento (campeonato, palestra, formatura), necessidade de som/iluminação e horário pretendido..."
                value={formData.descricaoEvento}
                onChange={handleChange}
                error={errors.descricaoEvento}
              />

              <div className="pt-2">
                <Botao type="submit" variant="accent" fullWidth size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando solicitação...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Pedido de Orçamento</span>
                    </>
                  )}
                </Botao>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
