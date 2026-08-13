import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateOrcamentoLocacao } from '@/lib/validation'
import { DEFAULT_SITE_SETTINGS } from '@/lib/sanity/queries'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { valid, errors } = validateOrcamentoLocacao(body)

    if (!valid) {
      return NextResponse.json({ success: false, errors }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const targetEmail = process.env.EMAIL_DESTINO_LOCACAO || DEFAULT_SITE_SETTINGS.emailLocacao

    if (resendApiKey) {
      const resend = new Resend(resendApiKey)
      await resend.emails.send({
        from: 'Colégio Sagrado Coração <onboarding@resend.dev>',
        to: [targetEmail],
        subject: `[Orçamento de Locação] Solicitação de ${body.nome} - ${body.espacoInteresse}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #1E3A5F; color: white; padding: 20px; text-align: center;">
              <h2 style="margin: 0;">Nova Solicitação de Orçamento de Locação</h2>
            </div>
            <div style="padding: 24px; color: #374151;">
              <p><strong>Nome do Responsável:</strong> ${body.nome}</p>
              <p><strong>E-mail:</strong> ${body.email}</p>
              <p><strong>Telefone:</strong> ${body.telefone}</p>
              <p><strong>Espaço de Interesse:</strong> ${body.espacoInteresse}</p>
              <p><strong>Data Prevista:</strong> ${body.dataPrevista}</p>
              <p><strong>Estimativa de Público:</strong> ${body.numeroEstimadoPessoas || 'Não especificado'}</p>
              <p><strong>Descrição do Evento:</strong> ${body.descricaoEvento}</p>
              <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
              <p style="font-size: 12px; color: #6b7280;">Solicitação enviada via site do Colégio Sagrado Coração de Jesus (Seção Locação de Espaços).</p>
            </div>
          </div>
        `,
      })
    } else {
      console.log('[MOCK RESEND EMAIL - LOCACAO]', { to: targetEmail, body })
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
