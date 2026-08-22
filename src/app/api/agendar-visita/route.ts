import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateAgendarVisita } from '@/lib/validation'
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
    const { valid, errors } = validateAgendarVisita(body)

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const targetEmail = process.env.EMAIL_DESTINO_VISITAS || DEFAULT_SITE_SETTINGS.emailVisita

    if (!resendApiKey) {
      console.error('[agendar-visita] RESEND_API_KEY não configurada — e-mail NÃO foi enviado. Configure a variável de ambiente na hospedagem (Vercel).', { destinatarioEsperado: targetEmail, body })
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
      subject: `[Agende uma Visita] Novo pedido de ${sanitizeHTML(body.nome)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1E3A5F; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Novo Agendamento de Visita - Colégio Sagrado Coração</h2>
          </div>
          <div style="padding: 24px; color: #374151;">
            <p><strong>Nome:</strong> ${sanitizeHTML(body.nome)}</p>
            <p><strong>E-mail:</strong> ${sanitizeHTML(body.email)}</p>
            <p><strong>Telefone/WhatsApp:</strong> ${sanitizeHTML(body.telefone)}</p>
            <p><strong>Série / Modalidade de Interesse:</strong> ${sanitizeHTML(body.serieModalidade)}</p>
            <p><strong>Período Preferido:</strong> ${sanitizeHTML(body.periodoPreferido)}</p>
            ${body.mensagem ? `<p><strong>Mensagem Adicional:</strong> ${sanitizeHTML(body.mensagem)}</p>` : ''}
            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="font-size: 12px; color: #6b7280;">Este e-mail foi enviado através do formulário de agendamento de visita no site oficial do Colégio Sagrado Coração de Jesus.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('[agendar-visita] Resend recusou o envio — e-mail NÃO chegou ao destinatário.', { error, destinatarioEsperado: targetEmail })
      return NextResponse.json(
        { success: false, message: 'Não foi possível enviar sua solicitação no momento. Por favor, entre em contato pelo WhatsApp ou telefone da secretaria.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação de visita enviada com sucesso! Nossa secretaria entrará em contato em até 24 horas úteis.',
    })
  } catch (error) {
    console.error('Erro na rota agendar-visita:', error)
    return NextResponse.json(
      { success: false, message: 'Ocorreu um erro interno ao processar seu agendamento. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
