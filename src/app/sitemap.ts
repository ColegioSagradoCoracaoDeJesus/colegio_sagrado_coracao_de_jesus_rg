import { MetadataRoute } from 'next'
import { getNoticias } from '@/lib/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sagradocoracao.g12.br'
  const noticias = await getNoticias()

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/nossa-historia',
    '/escola-em-rio-grande-rs',
    '/ensino',
    '/vivencie-o-sagrado',
    '/tecnologia-educacional',
    '/diferenciais',
    '/aconteceu-no-sagrado',
    '/70-anos',
    '/nossa-estrutura',
    '/locacao-de-espacos',
    '/noticias',
    '/matriculas',
    '/contato',
    '/politica-de-privacidade',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const newsRoutes: MetadataRoute.Sitemap = noticias.map((n) => ({
    url: `${baseUrl}/noticias/${n.slug.current}`,
    lastModified: new Date(n.data),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...newsRoutes]
}
