import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'paginaEstrutura',
  title: 'Ambiente da Estrutura Física',
  type: 'document',
  fields: [
    defineField({
      name: 'ambiente',
      title: 'Nome do Ambiente',
      type: 'string',
      description: 'Ex: Salas de Aula Climatizadas, Biblioteca Interativa, Laboratório de Robótica, Auditório, Ginásio Poliesportivo, Parque Infantil',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição dos Recursos e Diferenciais do Ambiente',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos do Ambiente',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'legenda', type: 'string', title: 'Legenda' },
            { name: 'alt', type: 'string', title: 'Texto Alternativo (Alt Obrigatório)', validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: 'ordem',
      title: 'Ordem de Exibição',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
