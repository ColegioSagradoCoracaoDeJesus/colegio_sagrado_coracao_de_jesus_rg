import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'linhaDoTempoItem',
  title: 'Item da Linha do Tempo (70 Anos)',
  type: 'document',
  fields: [
    defineField({
      name: 'ano',
      title: 'Ano / Época',
      type: 'string',
      description: 'Ex: 1956, 1975, 2000, 2026',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titulo',
      title: 'Título do Marco Histórico',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Detalhada',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem Histórica ou Ilustrativa',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo', validation: (Rule) => Rule.required() }],
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Exibição Cronológica',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
