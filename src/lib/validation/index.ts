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

// Sanitize strings to prevent XSS
function sanitizeString(str: string): string {
  if (!str) return ''
  return str
    .trim()
    .replace(/[<>\"']/g, '')
    .substring(0, 255)
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 255
}

// Validate phone format (Brazilian phone pattern)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{2})\)?[\s]?[0-9]{4,5}[-]?[0-9]{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

export function validateAgendarVisita(data: Partial<AgendarVisitaInput>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  // Honeypot check
  if (data.website_hp && data.website_hp.trim() !== '') {
    return { valid: false, errors: { _honeypot: 'Spam detectado.' } }
  }

  // Nome validation
  if (!data.nome || sanitizeString(data.nome).length < 3) {
    errors.nome = 'Por favor, informe seu nome completo (mínimo 3 caracteres).'
  } else if (sanitizeString(data.nome).length > 100) {
    errors.nome = 'Nome muito longo. Máximo 100 caracteres.'
  }

  // Telefone validation
  if (!data.telefone || !isValidPhone(data.telefone)) {
    errors.telefone = 'Por favor, informe um telefone válido (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.'
  }

  // Email validation
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Por favor, informe um endereço de e-mail válido.'
  }

  // Série/Modalidade validation
  if (!data.serieModalidade || data.serieModalidade.trim() === '') {
    errors.serieModalidade = 'Por favor, selecione a modalidade de interesse.'
  }

  // Período validation
  if (!data.periodoPreferido || data.periodoPreferido.trim() === '') {
    errors.periodoPreferido = 'Por favor, selecione o período preferido para a visita.'
  }

  // Mensagem validation (optional but sanitized if present)
  if (data.mensagem && sanitizeString(data.mensagem).length > 500) {
    errors.mensagem = 'Mensagem muito longa. Máximo 500 caracteres.'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

export function validateOrcamentoLocacao(data: Partial<OrcamentoLocacaoInput>): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}

  // Honeypot check
  if (data.website_hp && data.website_hp.trim() !== '') {
    return { valid: false, errors: { _honeypot: 'Spam detectado.' } }
  }

  // Nome validation
  if (!data.nome || sanitizeString(data.nome).length < 3) {
    errors.nome = 'Por favor, informe seu nome completo (mínimo 3 caracteres).'
  } else if (sanitizeString(data.nome).length > 100) {
    errors.nome = 'Nome muito longo. Máximo 100 caracteres.'
  }

  // Telefone validation
  if (!data.telefone || !isValidPhone(data.telefone)) {
    errors.telefone = 'Por favor, informe um telefone válido (XX) XXXXX-XXXX ou (XX) XXXX-XXXX.'
  }

  // Email validation
  if (!data.email || !isValidEmail(data.email)) {
    errors.email = 'Por favor, informe um e-mail válido.'
  }

  // Espaço validation
  if (!data.espacoInteresse || data.espacoInteresse.trim() === '') {
    errors.espacoInteresse = 'Por favor, selecione o espaço desejado.'
  }

  // Data validation
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
