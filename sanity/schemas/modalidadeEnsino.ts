import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'modalidadeEnsino',
  title: 'Modalidade de Ensino',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome da Modalidade',
      type: 'string',
      description: 'Ex: Educação Infantil, Ensino Fundamental I, Ensino Fundamental II, Ensino Médio',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nome' },
    }),
    defineField({
      name: 'faixaEtaria',
      title: 'Faixa Etária / Anos',
      type: 'string',
      description: 'Ex: 2 a 5 anos | 1º ao 5º ano | 6º ao 9º ano | 1ª à 3ª série',
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo / Apresentação',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'objetivos',
      title: 'Objetivos Pedagógicos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'metodologia',
      title: 'Metodologia e Abordagem',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'diferenciais',
      title: 'Diferenciais Específicos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'projetos',
      title: 'Projetos de Destaque',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'nome', type: 'string', title: 'Nome do Projeto' },
            { name: 'descricao', type: 'text', title: 'Descrição do Projeto' },
          ],
        },
      ],
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos da Modalidade',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo', validation: (Rule) => Rule.required() }],
        },
      ],
    }),
  ],
})
