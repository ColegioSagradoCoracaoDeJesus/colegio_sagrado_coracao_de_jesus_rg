import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'parceiro',
  title: 'Empresa Parceira',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome da Empresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logotipo da Empresa',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
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
      name: 'descricao',
      title: 'Descrição da Parceria',
      type: 'text',
      rows: 3,
      description: 'Breve descrição do tipo de parceria ou serviço prestado',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'website',
      title: 'Site da Empresa',
      type: 'url',
      description: 'Link para o website da empresa parceira',
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Exibição',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ativo',
      title: 'Ativo',
      type: 'boolean',
      initialValue: true,
      description: 'Desative para ocultar da seção de parceiros',
    }),
  ],
  preview: {
    select: {
      title: 'nome',
      media: 'logo',
    },
  },
})
