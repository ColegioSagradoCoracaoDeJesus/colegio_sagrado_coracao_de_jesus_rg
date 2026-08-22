import { MetadataRoute } from 'next'

// BLOQUEIO TEMPORÁRIO DE INDEXAÇÃO: site ainda em fase de testes/produção.
// Quando estiver pronto para aparecer no Google, trocar `disallow: '/'` de
// volta para `allow: '/'` (com o disallow de /studio/ e /api/), e reverter
// também o `robots` em src/app/layout.tsx.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: 'https://colegiosagradocoracaodejesusrg.vercel.app/sitemap.xml',
  }
}
