import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'diferencial',
  title: 'Diferencial Pedagógico',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título do Diferencial',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icone',
      title: 'Identificador do Ícone',
      type: 'string',
      description: 'Ex: BookOpen, Award, Heart, Cpu, Globe, Users, ShieldCheck, Dumbbell',
    }),
    defineField({
      name: 'textoCurto',
      title: 'Descrição Curta',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Exibição',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
