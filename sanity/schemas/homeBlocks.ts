import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homeBlocks',
  title: 'Blocos Dinâmicos da Home',
  type: 'document',
  fields: [
    defineField({
      name: 'campanhaAtiva',
      title: 'Campanha de Matrículas / Destaque Principal',
      type: 'object',
      fields: [
        { name: 'ativo', type: 'boolean', title: 'Exibir Bloco de Campanha na Home' },
        { name: 'titulo', type: 'string', title: 'Título da Campanha' },
        { name: 'subtitulo', type: 'text', title: 'Subtítulo / Descrição' },
        { name: 'badge', type: 'string', title: 'Etiqueta / Badge (ex: Matrículas 2025/2026)' },
        { name: 'textoBotao', type: 'string', title: 'Texto do Botão principal' },
        { name: 'linkBotao', type: 'string', title: 'Link do Botão' },
        {
          name: 'imagem',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Texto Alternativo', validation: (r) => r.required() }],
        },
      ],
    }),
    defineField({
      name: 'avisos',
      title: 'Quadro de Avisos Importantes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'ativo', type: 'boolean', title: 'Ativo' },
            { name: 'titulo', type: 'string', title: 'Título do Aviso' },
            { name: 'descricao', type: 'text', title: 'Descrição' },
            { name: 'tipo', type: 'string', title: 'Tipo (Informativo, Urgente, Evento)', options: { list: ['Informativo', 'Urgente', 'Evento'] } },
            { name: 'dataValidade', type: 'date', title: 'Exibir até' },
          ],
        },
      ],
    }),
    defineField({
      name: 'proximosEventos',
      title: 'Próximos Eventos do Calendário',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'titulo', type: 'string', title: 'Nome do Evento' },
            { name: 'data', type: 'string', title: 'Data Formatada (ex: 25 de Setembro)' },
            { name: 'horario', type: 'string', title: 'Horário / Local' },
            { name: 'descricao', type: 'text', title: 'Descrição Breve' },
          ],
        },
      ],
    }),
  ],
})
