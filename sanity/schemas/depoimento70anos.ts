import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'depoimento70anos',
  title: 'Depoimento 70 Anos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Depoente',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relacao',
      title: 'Vínculo com o Colégio',
      type: 'string',
      description: 'Ex: Ex-aluno (Turma de 1988), Mãe de Aluno, Professor por 25 anos',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'texto',
      title: 'Texto do Depoimento',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foto',
      title: 'Foto do Depoente (opcional)',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo' }],
    }),
  ],
})
