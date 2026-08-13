import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'espacoLocacao',
  title: 'Espaço para Locação',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome do Espaço',
      type: 'string',
      description: 'Ex: Ginásio Poliesportivo / Auditório Principal',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capacidade',
      title: 'Capacidade de Pessoas',
      type: 'string',
      description: 'Ex: Até 800 pessoas em arquibancada',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição Geral',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'itensDisponiveis',
      title: 'Equipamentos e Recursos Disponíveis',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'usosPossiveis',
      title: 'Tipos de Eventos Permitidos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'condicoesGerais',
      title: 'Condições Gerais e Regras de Uso',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'fotos',
      title: 'Fotos do Espaço',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo (Alt Obrigatório)', validation: (Rule) => Rule.required() }],
        },
      ],
    }),
  ],
})
