import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'galeriaMes',
  title: 'Galeria do Mês',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Galeria',
      type: 'string',
      description: 'Ex: Melhores Momentos de Setembro / Feira Cultural',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mes',
      title: 'Mês',
      type: 'string',
      options: {
        list: [
          'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ano',
      title: 'Ano',
      type: 'number',
      initialValue: () => new Date().getFullYear(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição / Apresentação do Mês',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos da Galeria',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'descricao', type: 'string', title: 'Legenda / Descrição da Foto' },
            { name: 'alt', type: 'string', title: 'Texto Alternativo (Alt Obrigatório)', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: 'autorizacaoImagemConfirmada',
      title: ' Checklist Interno LGPD: Autorização de uso de imagem dos alunos verificada?',
      type: 'boolean',
      description: 'Lembrete de conformidade com a política de imagem dos alunos (visível somente no Studio).',
      initialValue: false,
    }),
  ],
})
