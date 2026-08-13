import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações Globais do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nome da Instituição',
      type: 'string',
      initialValue: 'Colégio Sagrado Coração de Jesus',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logotipo do Colégio',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Alt)',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'telefones',
      title: 'Telefones de Contato',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'whatsapp',
      title: 'Número do WhatsApp (com DDD)',
      type: 'string',
      description: 'Exemplo: 5541999999999',
    }),
    defineField({
      name: 'email',
      title: 'E-mail Geral de Contato',
      type: 'string',
    }),
    defineField({
      name: 'emailVisita',
      title: 'E-mail para Receber Agendamentos de Visita',
      type: 'string',
    }),
    defineField({
      name: 'emailLocacao',
      title: 'E-mail para Receber Solicitações de Orçamento de Locação',
      type: 'string',
    }),
    defineField({
      name: 'endereco',
      title: 'Endereço Completo',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'linkMapaEmbed',
      title: 'URL de Incorporação do Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'horarioAtendimento',
      title: 'Horário de Atendimento da Secretaria',
      type: 'string',
    }),
    defineField({
      name: 'redesSociais',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url', title: 'Instagram' },
        { name: 'facebook', type: 'url', title: 'Facebook' },
        { name: 'youtube', type: 'url', title: 'YouTube' },
      ],
    }),
  ],
})
