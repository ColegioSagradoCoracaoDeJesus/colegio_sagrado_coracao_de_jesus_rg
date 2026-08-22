import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateOrcamentoLocacao } from '@/lib/validation'
import { DEFAULT_SITE_SETTINGS } from '@/lib/sanity/queries'
import { sanitizeHTML } from '@/lib/email/sanitize'
import { checkRateLimit, getClientIp } from '@/lib/email/rateLimit'

// Remetente do e-mail de notificação. Em produção, defina RESEND_FROM_EMAIL
// com um endereço do domínio verificado no Resend (ex.: "Colégio Sagrado
// Coração <secretaria@colegiosagradocoracao.com.br>") — o domínio de teste
// onboarding@resend.dev só entrega para o e-mail do dono da conta Resend.
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Colégio Sagrado Coração <onboarding@resend.dev>'

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request)

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Muitas requisições. Tente novamente em alguns momentos.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { valid, errors } = validateOrcamentoLocacao(body)

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const targetEmail = process.env.EMAIL_DESTINO_LOCACAO || DEFAULT_SITE_SETTINGS.emailLocacao

    if (!resendApiKey) {
      console.error('[orcamento-locacao] RESEND_API_KEY não configurada — e-mail NÃO foi enviado. Configure a variável de ambiente na hospedagem (Vercel).', { destinatarioEsperado: targetEmail, body })
      return NextResponse.json(
        { success: false, message: 'Não foi possível enviar sua solicitação no momento. Por favor, entre em contato pelo WhatsApp ou telefone da secretaria.' },
        { status: 502 }
      )
    }

    const resend = new Resend(resendApiKey)
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [targetEmail],
      replyTo: body.email,
      subject: `[Orçamento de Locação] Solicitação de ${sanitizeHTML(body.nome)} - ${sanitizeHTML(body.espacoInteresse)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1E3A5F; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Nova Solicitação de Orçamento de Locação</h2>
          </div>
          <div style="padding: 24px; color: #374151;">
            <p><strong>Nome do Responsável:</strong> ${sanitizeHTML(body.nome)}</p>
            <p><strong>E-mail:</strong> ${sanitizeHTML(body.email)}</p>
            <p><strong>Telefone:</strong> ${sanitizeHTML(body.telefone)}</p>
            <p><strong>Espaço de Interesse:</strong> ${sanitizeHTML(body.espacoInteresse)}</p>
            <p><strong>Data Prevista:</strong> ${sanitizeHTML(body.dataPrevista)}</p>
            <p><strong>Estimativa de Público:</strong> ${sanitizeHTML(body.numeroEstimadoPessoas) || 'Não especificado'}</p>
            <p><strong>Descrição do Evento:</strong> ${sanitizeHTML(body.descricaoEvento)}</p>
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">Solicitação enviada via site do Colégio Sagrado Coração de Jesus (Seção Locação de Espaços).</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('[orcamento-locacao] Resend recusou o envio — e-mail NÃO chegou ao destinatário.', { error, destinatarioEsperado: targetEmail })
      return NextResponse.json(
        { success: false, message: 'Não foi possível enviar sua solicitação no momento. Por favor, entre em contato pelo WhatsApp ou telefone da secretaria.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação de orçamento recebida com sucesso! Nossa equipe de eventos retornará com os valores e condições.',
    })
  } catch (error) {
    console.error('Erro na rota orcamento-locacao:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar solicitação. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
