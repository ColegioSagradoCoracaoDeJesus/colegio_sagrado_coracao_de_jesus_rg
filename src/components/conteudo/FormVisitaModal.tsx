'use client'

import React, { useState } from 'react'
import { Calendar, CheckCircle2, AlertCircle, Send, Loader2 } from 'lucide-react'
import { CampoFormulario, HoneypotField } from '../ui/CampoFormulario'
import { Botao } from '../ui/Botao'
import { validateAgendarVisita } from '@/lib/validation'

export const FormVisitaModal: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    serieModalidade: '',
    periodoPreferido: '',
    mensagem: '',
    website_hp: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

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
    
    // Client-side validation
    const { valid, errors: validationErrors } = validateAgendarVisita(formData)
    if (!valid) {
      setErrors(validationErrors)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/agendar-visita', {
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
          serieModalidade: '',
          periodoPreferido: '',
          mensagem: '',
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
      setErrorMessage('Ocorreu uma falha de conexão. Por favor, verifique sua internet e tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="agendar-visita" className="bg-white rounded-md border border-slate-200 shadow-md p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4 border-b border-slate-200 pb-4">
        <div className="w-10 h-10 rounded-full bg-amber-100 text-[#D97706] flex items-center justify-center font-bold">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-slate-900">Agende uma Visita Guiada</h3>
          <p className="text-xs text-slate-600">Preencha os dados abaixo para que nossa equipe entre em contato.</p>
        </div>
      </div>

      {isSuccess ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-md text-center space-y-4 my-4 animate-fadeIn">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="font-display font-bold text-lg text-emerald-900">Visita Solicitada com Sucesso!</h4>
          <p className="text-sm text-emerald-800 leading-relaxed">
            Recebemos seu pedido de agendamento. Nossa secretaria entrará em contato em até 24 horas úteis no telefone/WhatsApp informado para confirmar a data e horário.
          </p>
          <Botao onClick={() => setIsSuccess(false)} variant="outline" size="sm">
            Agendar Nova Visita
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
              label="Nome Completo do Responsável"
              name="nome"
              type="text"
              placeholder="Ex: Maria da Silva"
              required
              value={formData.nome}
              onChange={handleChange}
              error={errors.nome}
            />

            <CampoFormulario
              label="Telefone / WhatsApp"
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
              placeholder="seu.email@exemplo.com"
              required
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />

            <CampoFormulario
              label="Série / Modalidade de Interesse"
              name="serieModalidade"
              type="select"
              required
              value={formData.serieModalidade}
              onChange={handleChange}
              error={errors.serieModalidade}
              options={[
                { value: 'Educação Infantil', label: 'Educação Infantil (2 a 5 anos)' },
                { value: 'Ensino Fundamental I', label: 'Ensino Fundamental I (1º ao 5º ano)' },
                { value: 'Ensino Fundamental II', label: 'Ensino Fundamental II (6º ao 9º ano)' },
                { value: 'Ensino Médio', label: 'Ensino Médio (1ª à 3ª série)' },
              ]}
            />
          </div>

          <CampoFormulario
            label="Período Preferido para Visita"
            name="periodoPreferido"
            type="select"
            required
            value={formData.periodoPreferido}
            onChange={handleChange}
            error={errors.periodoPreferido}
            options={[
              { value: 'Manhã (08h às 11h)', label: 'Manhã (08h às 11h)' },
              { value: 'Tarde (13h30 às 17h)', label: 'Tarde (13h30 às 17h)' },
              { value: 'Qualquer Horário', label: 'Qualquer Horário' },
            ]}
          />

          <CampoFormulario
            label="Mensagem / Observações (opcional)"
            name="mensagem"
            type="textarea"
            rows={3}
            placeholder="Dúvidas específicas, número de alunos ou detalhes adicionais..."
            value={formData.mensagem}
            onChange={handleChange}
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
                  <span>Enviar Solicitação de Visita</span>
                </>
              )}
            </Botao>
          </div>
        </form>
      )}
    </div>
  )
}
