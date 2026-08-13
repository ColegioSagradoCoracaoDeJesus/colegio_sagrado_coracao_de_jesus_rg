import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'noticia',
  title: 'Notícia / Aconteceu no Sagrado',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título da Notícia',
      type: 'string',
      validation: (Rule) => Rule.required().min(5),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Amigável)',
      type: 'slug',
      options: { source: 'titulo', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'data',
      title: 'Data de Publicação',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoria',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Institucional', value: 'Institucional' },
          { title: 'Pedagógico', value: 'Pedagógico' },
          { title: 'Eventos & Projetos', value: 'Eventos & Projetos' },
          { title: 'Esportes & Cultura', value: 'Esportes & Cultura' },
          { title: ' Pastoral & Espiritualidade', value: 'Pastoral & Espiritualidade' },
          { title: '70 Anos', value: '70 Anos' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'resumo',
      title: 'Resumo / Subtítulo para a listagem',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagemCapa',
      title: 'Imagem de Capa',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Alt Obrigatório)',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'corpo',
      title: 'Conteúdo Completo da Notícia',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }] }],
    }),
    defineField({
      name: 'destaque',
      title: 'Notícia em Destaque na Home',
      type: 'boolean',
      initialValue: false,
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
