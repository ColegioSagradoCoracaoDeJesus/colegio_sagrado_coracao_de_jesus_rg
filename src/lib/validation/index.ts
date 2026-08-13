export interface AgendarVisitaInput {
  nome: string
  telefone: string
  email: string
  serieModalidade: string
  periodoPreferido: string
  mensagem?: string
  website_hp?: string // Honeypot field (must be empty)
}

export interface OrcamentoLocacaoInput {
  nome: string
  telefone: string
  email: string
  espacoInteresse: string
  dataPrevista: string
  numeroEstimadoPessoas: string
  descricaoEvento: string
  website_hp?: string // Honeypot field
}

export function validateAgendarVisita(data: Partial<AgendarVisitaInput>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  if (data.website_hp && data.website_hp.trim() !== '') {
    return { valid: false, errors: { _honeypot: 'Spam detectado.' } }
  }

  if (!data.nome || data.nome.trim().length < 3) {
    errors.nome = 'Por favor, informe seu nome completo (mínimo 3 caracteres).'
  }

  if (!data.telefone || data.telefone.trim().length < 8) {
    errors.telefone = 'Por favor, informe um telefone válido com DDD.'
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Por favor, informe um endereço de e-mail válido.'
  }

  if (!data.serieModalidade || data.serieModalidade.trim() === '') {
    errors.serieModalidade = 'Por favor, selecione a modalidade de interesse.'
  }

  if (!data.periodoPreferido || data.periodoPreferido.trim() === '') {
    errors.periodoPreferido = 'Por favor, selecione o período preferido para a visita.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function validateOrcamentoLocacao(data: Partial<OrcamentoLocacaoInput>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  if (data.website_hp && data.website_hp.trim() !== '') {
    return { valid: false, errors: { _honeypot: 'Spam detectado.' } }
  }

  if (!data.nome || data.nome.trim().length < 3) {
    errors.nome = 'Por favor, informe seu nome completo.'
  }

  if (!data.telefone || data.telefone.trim().length < 8) {
    errors.telefone = 'Por favor, informe um telefone válido com DDD.'
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Por favor, informe um e-mail válido.'
  }

  if (!data.espacoInteresse || data.espacoInteresse.trim() === '') {
    errors.espacoInteresse = 'Por favor, selecione o espaço desejado (Ginásio ou Auditório).'
  }

  if (!data.dataPrevista || data.dataPrevista.trim() === '') {
    errors.dataPrevista = 'Por favor, informe a data estimada para o evento.'
  }

  if (!data.descricaoEvento || data.descricaoEvento.trim().length < 10) {
    errors.descricaoEvento = 'Por favor, descreva brevemente o tipo de evento e necessidades (mínimo 10 caracteres).'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}
