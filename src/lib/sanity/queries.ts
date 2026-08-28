import { client, projectId } from './client'

export interface SiteSettings {
  title: string
  telefones: string[]
  whatsapp: string
  email: string
  emailVisita: string
  emailLocacao: string
  endereco: string
  bairro: string
  cidade: string
  estado: string
  descricaoSEO: string
  linkMapaEmbed: string
  horarioAtendimento: string
  redesSociais: {
    instagram?: string
    facebook?: string
    youtube?: string
  }
}

export interface Noticia {
  _id: string
  titulo: string
  slug: { current: string }
  data: string
  categoria: string
  resumo: string
  imagemCapa?: any
  imageUrl?: string
  corpo?: any
  destaque?: boolean
  autorizacaoImagemConfirmada?: boolean
}

export interface GaleriaMes {
  _id: string
  titulo: string
  mes: string
  ano: number
  descricao: string
  fotos: Array<{
    url?: string
    asset?: any
    descricao?: string
    alt: string
  }>
}

export interface Diferencial {
  _id: string
  titulo: string
  icone: string
  textoCurto: string
  ordem: number
}

export interface ModalidadeEnsino {
  _id: string
  nome: string
  slug: { current: string }
  faixaEtaria: string
  resumo: string
  objetivos: string[]
  metodologia: string
  diferenciais: string[]
  projetos: Array<{ nome: string; descricao: string }>
  imageUrl?: string
}

export interface EspacoLocacao {
  _id: string
  nome: string
  capacidade: string
  descricao: string
  itensDisponiveis: string[]
  usosPossiveis: string[]
  condicoesGerais: string
  imageUrl?: string
}

export interface LinhaDoTempoItem {
  _id: string
  ano: string
  titulo: string
  descricao: string
  imageUrl?: string
  ordem: number
}

export interface Depoimento70Anos {
  _id: string
  nome: string
  relacao: string
  texto: string
  imageUrl?: string
}

export interface AmbienteEstrutura {
  _id: string
  ambiente: string
  descricao: string
  fotos: Array<{ url?: string; alt: string; legenda?: string }>
}

export interface Parceiro {
  _id: string
  nome: string
  logo?: any
  descricao?: string
  website?: string
  ordem: number
  ativo: boolean
  logoUrl?: string
}

// MOCK DATA FALLBACKS FOR ROBUSTNESS
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  title: 'Colégio Sagrado Coração de Jesus',
  telefones: ['(53) 3232-5531 (Somente WhatsApp)'],
  whatsapp: '555332325531',
  email: 'secretariacolegiosagrado@gmail.com',
  emailVisita: 'secretariacolegiosagrado@gmail.com',
  emailLocacao: 'secretariacolegiosagrado@gmail.com',
  endereco: 'Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS, CEP 96211-058 (CEP: 96200-010)',
  bairro: 'Cidade Nova',
  cidade: 'Rio Grande',
  estado: 'RS',
  descricaoSEO: 'Colégio em Cidade Nova, Rio Grande - RS, com Educação Infantil, Ensino Fundamental e Ensino Médio, tradição e acolhimento.',
  linkMapaEmbed: 'https://maps.google.com/maps?q=Rua+Doutor+Augusto+Duprat,+374+-+Cidade+Nova,+Rio+Grande+-+RS,+96211-058&t=&z=16&ie=UTF8&iwloc=&output=embed',
  horarioAtendimento: 'Segunda a Sexta, das 07h30 às 17h30',
  redesSociais: {
    instagram: 'https://instagram.com/colegiosagradorg',
    facebook: 'https://facebook.com/colegiosagradorg',
  },
}

export const DEFAULT_NOTICIAS: Noticia[] = [
  {
    _id: 'n1',
    titulo: 'Colégio Sagrado Coração de Jesus Celebra 70 Anos de Tradição e Inovação Educacional',
    slug: { current: 'colegio-sagrado-coracao-celebra-70-anos-de-tradicao-e-inovacao' },
    data: '2026-08-10',
    categoria: '70 Anos',
    resumo: 'Com vasta programação cultural, celebrações religiosas e encontros de ex-alunos, a instituição marca sete décadas de compromisso com a formação humana integral.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    destaque: true,
  },
  {
    // Fonte: post real do Instagram @colegiosagradorg (instagram.com/p/DQU3_5hEY0H),
    // publicado em 27/10/2025. Sem foto própria hospedada ainda — fica sem imagem
    // (mostra o card de fallback da marca) em vez de usar uma foto de banco de
    // imagens que não é do evento real.
    _id: 'n2',
    titulo: 'Turno Inverso tem Oficina de Culinária',
    slug: { current: 'turno-inverso-oficina-de-culinaria' },
    data: '2025-10-27',
    categoria: 'Pedagógico',
    resumo: 'O 2º ano do Ensino Fundamental participou de uma oficina de culinária no turno inverso, colocando a mão na massa para preparar receitas com a equipe pedagógica.',
    destaque: false,
  },
  {
    // Fonte: post real do Instagram @colegiosagradorg (instagram.com/p/DYxb_NWxxqg),
    // publicado em 25/05/2026.
    _id: 'n3',
    titulo: 'Campanha do Agasalho Arrecada Roupas e Cobertores',
    slug: { current: 'campanha-do-agasalho' },
    data: '2026-05-25',
    categoria: 'Pastoral & Espiritualidade',
    resumo: 'O Colégio Sagrado Coração de Jesus é ponto oficial de arrecadação de casacos, moletons, toucas, luvas, cobertores e calças infantis para aquecer quem mais precisa neste inverno.',
    destaque: false,
  },
  {
    _id: 'n4',
    titulo: '[EXEMPLO] Evento Institucional a Descrever',
    slug: { current: 'evento-institucional' },
    data: new Date().toISOString().split('T')[0],
    categoria: 'Institucional',
    resumo: 'Descreva aqui eventos institucionais, campanhas ou iniciativas do Colégio. Atualize com dados reais no Sanity.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
  {
    _id: 'n5',
    titulo: '[EXEMPLO] Evento de Esportes ou Cultura a Documentar',
    slug: { current: 'evento-esportes-cultura' },
    data: new Date().toISOString().split('T')[0],
    categoria: 'Esportes & Cultura',
    resumo: 'Descreva aqui eventos esportivos, apresentações culturais ou atividades realizadas no Colégio. Preencha com informações reais.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
]

export const DEFAULT_DIFERENCIAIS: Diferencial[] = [
  { _id: 'd1', titulo: 'Formação Humana e Valores', icone: 'Heart', textoCurto: 'Educação alicerçada no respeito, acolhimento, ética e responsabilidade social.', ordem: 1 },
  { _id: 'd2', titulo: 'Tradição dos 70 Anos', icone: 'Award', textoCurto: 'Sete décadas de história moldando cidadãos conscientes e preparados para o futuro.', ordem: 2 },
  { _id: 'd3', titulo: 'Programa Bilíngue e Global', icone: 'Globe', textoCurto: 'Imersão no idioma inglês com foco em fluência, cultura e certificações internacionais.', ordem: 3 },
  { _id: 'd4', titulo: 'Tecnologia Integrada ao Aprendizado', icone: 'Cpu', textoCurto: 'Plataformas educacionais, laboratórios modernos e ecossistema digital de apoio pedagógico.', ordem: 4 },
  { _id: 'd5', titulo: 'Suporte Socioemocional', icone: 'Users', textoCurto: 'Equipe multidisciplinar de psicologia e orientação pedagógica permanente.', ordem: 5 },
  { _id: 'd6', titulo: 'Segurança e Infraestrutura Completa', icone: 'ShieldCheck', textoCurto: 'Espaços amplos, seguros e bem equipados para o desenvolvimento integral dos alunos.', ordem: 6 },
  { _id: 'd7', titulo: 'Teatro, Musicalização e Dança', icone: 'Music', textoCurto: 'Atividades artísticas integradas à proposta pedagógica e extracurricular, do Maternal ao Ensino Médio.', ordem: 7 },
]

export const DEFAULT_MODALIDADES: ModalidadeEnsino[] = [
  {
    _id: 'm1',
    nome: 'Educação Infantil',
    slug: { current: 'educacao-infantil' },
    faixaEtaria: '2 a 5 anos (Maternal ao Infantil V)',
    // Objetivos/metodologia/diferenciais atualizados com base no material oficial
    // publicado pelo colégio (@colegiosagradorg) sobre a proposta pedagógica da
    // Educação Infantil — BNCC, corporeidade, inglês desde cedo, inclusão etc.
    resumo: 'Proposta pedagógica baseada na BNCC, onde a criança descobre o mundo através do brincar guiado, do cuidado, da socialização e do desenvolvimento socioemocional.',
    objetivos: [
      'Desenvolver autonomia, corporeidade e coordenação motora, com aulas de corporeidade semanais',
      'Estimular a linguagem, a alfabetização inicial e o contato com o inglês desde cedo',
      'Promover a convivência, a inclusão e o respeito à diversidade em turmas reduzidas',
      'Trabalhar os 5 Campos de Experiência da BNCC de forma lúdica e integrada'
    ],
    metodologia: 'Proposta pedagógica baseada na Base Nacional Comum Curricular (BNCC), organizada em 5 Campos de Experiências: Eu, o outro e nós; Corpo, gesto e movimento; Traços, sons, cores e formas; Escuta, fala, pensamento e imaginação; Espaço, tempo, quantidades, relações e transformações. O aprendizado acontece de forma lúdica, respeitando o tempo e o ritmo de cada criança.',
    diferenciais: [
      'Aulas de corporeidade e de inglês, uma vez por semana cada',
      'Salas com turmas reduzidas, mesas individuais e monitores capacitados para inclusão',
      'Pátio exclusivo para a Educação Infantil e horários de brincadeiras próprios da faixa etária',
      'Material didático de alta qualidade (FTD) e família presente em cada etapa'
    ],
    projetos: [
      { nome: 'Aulas de Culinária', descricao: 'Atividades práticas de culinária como parte da vivência pedagógica das crianças.' },
      { nome: 'Passeios Temáticos', descricao: 'Passeios com contato direto com a natureza e animais, ampliando o aprendizado fora da sala de aula.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm2',
    nome: 'Ensino Fundamental I',
    slug: { current: 'ensino-fundamental-1' },
    faixaEtaria: '1º ao 5º ano (6 a 10 anos)',
    resumo: 'Consolidação da alfabetização, letramento matemático e raciocínio crítico em uma fase crucial para o desenvolvimento do pensamento lógico e colaborativo.',
    objetivos: [
      'Garantir a alfabetização plena e capacidade leitora crítica',
      'Construir a base matemática e o raciocínio lógico-dedutivo',
      'Desenvolver hábitos de estudo, organização e autonomia',
      'Estimular a consciência cidadã e valores éticos'
    ],
    metodologia: 'Aprendizagem significativa integrando disciplinas através de projetos interdisciplinares, cultura maker e resolução de problemas práticos do dia a dia.',
    diferenciais: [
      'Atividades de raciocínio lógico e resolução de problemas',
      'Programa bilíngue com imersão em inglês',
      'Teatro e musicalização como atividades extracurriculares',
      'Acompanhamento e reforço personalizado'
    ],
    projetos: [
      { nome: 'Teatro', descricao: 'Atividade extracurricular de teatro, com turmas organizadas por série, desenvolvendo comunicação, criatividade, autoestima e expressão corporal.' },
      { nome: 'Musicalização', descricao: 'Atividade extracurricular de musicalização, integrada à vivência pedagógica dos alunos.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm3',
    nome: 'Ensino Fundamental II',
    slug: { current: 'ensino-fundamental-2' },
    faixaEtaria: '6º ao 9º ano (11 a 14 anos)',
    resumo: 'Aprofundamento científico, autonomia intelectual e preparação para os desafios do Ensino Médio em um período de profundas transformações interpessoais.',
    objetivos: [
      'Aprofundar os conhecimentos nas áreas de ciências, linguagens e exatas',
      'Desenvolver a argumentação fundamentada e a pesquisa acadêmica',
      'Incentivar a liderança, protagonismo e o trabalho em equipe',
      'Fortalecer a inteligência emocional e a resiliência'
    ],
    metodologia: 'Metodologias ativas, uso de laboratórios de ciências e informática, aulas de campo e projetos desafiadores.',
    diferenciais: [
      'Teatro e musicalização como atividades extracurriculares',
      'Acompanhamento de orientação vocacional',
      'Atividades esportivas e culturais',
      'Plataforma digital com recursos educacionais'
    ],
    projetos: [
      { nome: 'Teatro', descricao: 'Atividade extracurricular de teatro, com turmas organizadas por série, desenvolvendo comunicação, criatividade, autoestima e expressão corporal.' },
      { nome: 'Musicalização', descricao: 'Atividade extracurricular de musicalização, integrada à vivência pedagógica dos alunos.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm4',
    nome: 'Ensino Médio',
    slug: { current: 'ensino-medio' },
    faixaEtaria: '1ª à 3ª série (15 a 17 anos)',
    // Objetivos/metodologia/diferenciais atualizados com base no material oficial
    // publicado pelo colégio (@colegiosagradorg) sobre a preparação para o ENEM,
    // o Ensino Bilíngue e o Grêmio Estudantil.
    resumo: 'Formação integral com preparação real para o ENEM desde o 1º ano, aliada à formação cidadã, ao protagonismo estudantil e ao projeto de vida.',
    objetivos: [
      'Preparar para o ENEM desde o 1º ano, com simulados no formato oficial e avaliação trimestral (provas, trabalhos e simulados)',
      'Desenvolver autonomia, rotina de estudos e planejamento acadêmico',
      'Consolidar a base matemática, a leitura crítica e a argumentação',
      'Estimular o protagonismo estudantil através de projetos, debates e do Grêmio Estudantil'
    ],
    metodologia: 'Ensino Bilíngue com imersão gradual, laboratórios modernos, material didático completo e equipe de professores especialistas no Ensino Médio, com acompanhamento pedagógico e apoio emocional individualizado.',
    diferenciais: [
      'Simulados no formato ENEM desde o 1º ano, com aplicação em duas tardes (Humanas + Redação e Exatas)',
      'Grêmio Estudantil, projetos e debates que estimulam liderança e trabalho em equipe',
      'Ensino Bilíngue com evolução real',
      'Apoio emocional e orientação de rotina de estudos'
    ],
    projetos: [
      { nome: 'Grêmio Estudantil', descricao: 'Projetos, debates e eventos liderados pelos próprios estudantes, estimulando liderança, responsabilidade e trabalho em equipe.' },
      { nome: 'Mentoria Vestibular Sagrado', descricao: 'Tutoria individualizada para plano de estudo semanal.' },
      { nome: 'Academia de Redação', descricao: 'Treinamento contínuo de estruturas dissertativas de alta pontuação.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
]

// Datas/fatos confirmados no histórico oficial do Colégio: fundação (1956) e a
// celebração corrente dos 70 anos. Os demais marcos da linha do tempo real ainda
// não foram documentados — em vez de inventar datas e eventos, ficam como
// [EXEMPLO] até serem preenchidos no Sanity com fatos confirmados.
export const DEFAULT_LINHA_TEMPO: LinhaDoTempoItem[] = [
  { _id: 'lt1', ano: '1956', titulo: 'Fundação da Creche Casa da Criança Sagrado Coração de Jesus', descricao: 'Fundada em 16 de setembro de 1956 pelo Círculo Operário Riograndino, sob liderança do Pe. Luiz de Carvalho, para acolher os filhos dos operários da cidade.', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop', ordem: 1 },
  { _id: 'lt2', ano: '[EXEMPLO]', titulo: '[EXEMPLO] Marco Histórico a Preencher', descricao: '[EXEMPLO] Descreva aqui um marco histórico real do Colégio (ano, evento, contexto) para preencher no Sanity.', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', ordem: 2 },
  { _id: 'lt3', ano: '1998', titulo: 'Transformação em Escola de Ensino Fundamental', descricao: 'O Círculo Operário Riograndino transforma a Creche Casa da Criança Sagrado Coração de Jesus em Escola de Ensino Fundamental.', imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', ordem: 3 },
  { _id: 'lt4', ano: '2008', titulo: 'Autorização do Ensino Médio', descricao: 'O funcionamento do Ensino Médio é autorizado e a instituição passa a se chamar Colégio Sagrado Coração de Jesus.', imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop', ordem: 4 },
  { _id: 'lt5', ano: '2026', titulo: 'Celebração dos 70 Anos', descricao: 'Sete décadas de história, consolidando tradição pedagógica, tecnologia educacional de ponta e comunidade participativa.', imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', ordem: 5 },
]

// Depoimentos ilustrativos — nenhum depoimento real foi fornecido ainda, então
// ficam claramente marcados como [EXEMPLO] (nunca com nome, profissão ou turma
// inventados) até serem substituídos por relatos reais cadastrados no Sanity.
export async function getDepoimentos(): Promise<Depoimento70Anos[]> {
  if (!isSanityConfigured) return DEFAULT_DEPOIMENTOS

  try {
    const res = await client.fetch(
      `*[_type == "depoimento70anos"] {
        ...,
        "imageUrl": foto.asset->url
      }`,
      {},
      {
        next: {
          revalidate: 60,
        },
      }
    )

    return res && res.length > 0 ? res : DEFAULT_DEPOIMENTOS
  } catch (err) {
    console.error('Erro ao buscar depoimentos no Sanity:', err)
    return DEFAULT_DEPOIMENTOS
  }
}

// Capacidades, itens e nomes específicos (ex.: contagem exata de lugares,
// especificações técnicas) ainda não foram confirmados pelo Colégio — os campos
// abaixo descrevem apenas o que consta no histórico oficial (ginásio poliesportivo
// e auditório existem), sem números ou nomes inventados. Ajuste no Sanity com os
// dados reais de cada espaço.
export const DEFAULT_ESPACOS: EspacoLocacao[] = [
  {
    _id: 'e1',
    nome: 'Ginásio Poliesportivo',
    capacidade: '[EXEMPLO] A confirmar',
    descricao: 'Espaço coberto para eventos esportivos e comunitários. [EXEMPLO] Detalhe aqui a estrutura real do ginásio no Sanity.',
    itensDisponiveis: [
      '[EXEMPLO] Liste aqui os equipamentos e recursos reais disponíveis no ginásio.',
    ],
    usosPossiveis: [
      'Torneios e campeonatos esportivos',
      'Cerimônias de formatura e graduação',
      'Feiras comunitárias e exposições',
      'Apresentações culturais e musicais'
    ],
    condicoesGerais: '[EXEMPLO] Descreva aqui as condições reais de locação (antecedência, regras de uso) no Sanity.',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'e2',
    nome: 'Auditório Principal',
    capacidade: '[EXEMPLO] A confirmar',
    descricao: 'Espaço para eventos institucionais, palestras e apresentações. [EXEMPLO] Detalhe aqui a estrutura real do auditório no Sanity.',
    itensDisponiveis: [
      '[EXEMPLO] Liste aqui os equipamentos e recursos reais disponíveis no auditório.',
    ],
    usosPossiveis: [
      'Palestras, simpósios e congressos',
      'Peças teatrais e recitais de música',
      'Reuniões corporativas e convenções',
      'Lançamentos de livros e exibições'
    ],
    condicoesGerais: '[EXEMPLO] Descreva aqui as condições reais de locação (acompanhamento técnico, reservas) no Sanity.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  },
]

// Ambientes confirmados pelo histórico oficial do Colégio (biblioteca, laboratório
// de ciências e informática, sala de arte, auditório e ginásio poliesportivo).
// Nenhuma metragem, capacidade ou especificação técnica é afirmada aqui — nada
// disso consta no documento oficial disponível, então fica para preenchimento
// real no Sanity em vez de um número inventado.
export const DEFAULT_ESTRUTURA: AmbienteEstrutura[] = [
  {
    _id: 'est1',
    ambiente: 'Salas de Aula',
    descricao: 'Ambientes preparados para o dia a dia pedagógico dos alunos.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', alt: 'Sala de aula' }]
  },
  {
    _id: 'est2',
    ambiente: 'Biblioteca',
    descricao: 'Rico acervo pedagógico, científico e literário à disposição dos alunos.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', alt: 'Biblioteca do colégio' }]
  },
  {
    _id: 'est3',
    ambiente: 'Laboratório de Ciências e Informática',
    descricao: 'Espaço equipado para atividades práticas de ciências e para o uso de recursos de informática.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop', alt: 'Laboratório de ciências' }]
  },
  {
    _id: 'est4',
    ambiente: 'Sala de Arte',
    descricao: '[EXEMPLO] Descreva aqui os recursos reais da sala de arte para preencher no Sanity.',
    fotos: []
  },
  {
    _id: 'est5',
    ambiente: 'Ginásio Poliesportivo',
    descricao: 'Quadra de esportes coberta para modalidades coletivas e atividades físicas.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop', alt: 'Ginásio do colégio' }]
  },
  {
    _id: 'est6',
    ambiente: 'Auditório',
    descricao: 'Espaço para palestras, apresentações e eventos institucionais.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop', alt: 'Auditório principal' }]
  },
  {
    _id: 'est7',
    ambiente: 'Área de Lazer e Recreação',
    descricao: 'Ampla área de lazer e espaço para atividades recreativas dos alunos.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop', alt: 'Área de recreação' }]
  },
]

export const DEFAULT_PARCEIROS: Parceiro[] = [
  {
    _id: 'p1',
    nome: '[EXEMPLO] Empresa Parceira 1',
    descricao: '[EXEMPLO] Descreva a parceria institucional para preencher no Sanity.',
    website: 'https://exemplo.com',
    ordem: 1,
    ativo: true,
    logoUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'p2',
    nome: '[EXEMPLO] Empresa Parceira 2',
    descricao: '[EXEMPLO] Descreva a parceria institucional para preencher no Sanity.',
    website: 'https://exemplo.com',
    ordem: 2,
    ativo: true,
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    _id: 'p3',
    nome: '[EXEMPLO] Empresa Parceira 3',
    descricao: '[EXEMPLO] Descreva a parceria institucional para preencher no Sanity.',
    website: 'https://exemplo.com',
    ordem: 3,
    ativo: true,
    logoUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
]

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder-project')

// QUERY FUNCTIONS WITH FALLBACK PROTECTION
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return DEFAULT_SITE_SETTINGS
  try {
    const res = await client.fetch(`*[_type == "siteSettings"][0]`)
    if (!res) return DEFAULT_SITE_SETTINGS
    // Mescla campo a campo com os padrões: um documento existente no Sanity
    // porém com campos ainda não preenchidos (ex.: telefones vazio) não pode
    // deixar a página sem esse dado — components como o Footer fazem
    // settings.telefones.map(...) sem optional chaining.
    return {
      ...DEFAULT_SITE_SETTINGS,
      ...res,
      telefones: res.telefones?.length ? res.telefones : DEFAULT_SITE_SETTINGS.telefones,
      redesSociais: { ...DEFAULT_SITE_SETTINGS.redesSociais, ...res.redesSociais },
    }
  } catch (err) {
    return DEFAULT_SITE_SETTINGS
  }
}

export async function getNoticias(): Promise<Noticia[]> {
  if (!isSanityConfigured) return DEFAULT_NOTICIAS
  try {
    const res = await client.fetch(`*[_type == "noticia"] | order(data desc) {
      _id, titulo, slug, data, categoria, resumo, imagemCapa, destaque,
      "imageUrl": imagemCapa.asset->url
    }`)
    return res && res.length > 0 ? res : DEFAULT_NOTICIAS
  } catch (err) {
    return DEFAULT_NOTICIAS
  }
}

export async function getNoticiaBySlug(slug: string): Promise<Noticia | null> {
  if (!isSanityConfigured) {
    const found = DEFAULT_NOTICIAS.find(n => n.slug.current === slug)
    return found || DEFAULT_NOTICIAS[0]
  }
  try {
    const res = await client.fetch(`*[_type == "noticia" && slug.current == $slug][0] {
      ...,
      "imageUrl": imagemCapa.asset->url
    }`, { slug })
    return res || DEFAULT_NOTICIAS.find(n => n.slug.current === slug) || DEFAULT_NOTICIAS[0]
  } catch (err) {
    return DEFAULT_NOTICIAS.find(n => n.slug.current === slug) || DEFAULT_NOTICIAS[0]
  }
}

export async function getDiferenciais(): Promise<Diferencial[]> {
  if (!isSanityConfigured) return DEFAULT_DIFERENCIAIS
  try {
    const res = await client.fetch(`*[_type == "diferencial"] | order(ordem asc)`)
    return res && res.length > 0 ? res : DEFAULT_DIFERENCIAIS
  } catch (err) {
    return DEFAULT_DIFERENCIAIS
  }
}

export async function getModalidades(): Promise<ModalidadeEnsino[]> {
  if (!isSanityConfigured) return DEFAULT_MODALIDADES
  try {
    const res = await client.fetch(`*[_type == "modalidadeEnsino"] {
      ...,
      "imageUrl": fotos[0].asset->url
    }`)
    return res && res.length > 0 ? res : DEFAULT_MODALIDADES
  } catch (err) {
    return DEFAULT_MODALIDADES
  }
}

export async function getEspacosLocacao(): Promise<EspacoLocacao[]> {
  if (!isSanityConfigured) return DEFAULT_ESPACOS
  try {
    const res = await client.fetch(`*[_type == "espacoLocacao"] {
      ...,
      "imageUrl": fotos[0].asset->url
    }`)
    return res && res.length > 0 ? res : DEFAULT_ESPACOS
  } catch (err) {
    return DEFAULT_ESPACOS
  }
}

export async function getLinhaDoTempo(): Promise<LinhaDoTempoItem[]> {
  if (!isSanityConfigured) return DEFAULT_LINHA_TEMPO

  try {
    const res = await client.fetch(
      `*[_type == "linhaDoTempoItem"] | order(ordem asc) {
        ...,
        "imageUrl": imagem.asset->url
      }`,
      {},
      {
        next: {
          revalidate: 60,
        },
      }
    )

    return res && res.length > 0 ? res : DEFAULT_LINHA_TEMPO
  } catch (err) {
    console.error('Erro ao buscar linha do tempo no Sanity:', err)
    return DEFAULT_LINHA_TEMPO
  }
}

export async function getDepoimentos(): Promise<Depoimento70Anos[]> {
  if (!isSanityConfigured) return DEFAULT_DEPOIMENTOS
  try {
    const res = await client.fetch(`*[_type == "depoimento70anos"] {
      ...,
      "imageUrl": foto.asset->url
    }`)
    return res && res.length > 0 ? res : DEFAULT_DEPOIMENTOS
  } catch (err) {
    return DEFAULT_DEPOIMENTOS
  }
}

export async function getEstrutura(): Promise<AmbienteEstrutura[]> {
  if (!isSanityConfigured) return DEFAULT_ESTRUTURA
  try {
    const res = await client.fetch(`*[_type == "paginaEstrutura"] | order(ordem asc) {
      ...,
      "fotos": fotos[]{ "url": asset->url, alt, legenda }
    }`)

    if (!Array.isArray(res) || res.length === 0) {
      return DEFAULT_ESTRUTURA
    }

    return res.map((item) => ({
      ...item,
      fotos: Array.isArray(item?.fotos) ? item.fotos : [],
    }))
  } catch (err) {
    return DEFAULT_ESTRUTURA
  }
}

export async function getGaleriasMes(): Promise<GaleriaMes[]> {
  const fallbackGalerias: GaleriaMes[] = [
    {
      _id: 'g1',
      titulo: 'Galeria de Fotos - Comemoração dos 70 Anos',
      mes: 'Agosto',
      ano: 2026,
      descricao: 'Registros marcantes da celebração com alunos, educadores, ex-alunos e famílias no ginásio do Colégio.',
      fotos: [
        { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', alt: 'Abertura oficial dos 70 anos', descricao: 'Solenidade de Abertura dos 70 Anos' },
        { url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop', alt: 'Apresentação do coral infantil', descricao: 'Coral de Alunos do Ensino Fundamental' },
        { url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=800&auto=format&fit=crop', alt: 'Encontro das turmas de ex-alunos', descricao: 'Reencontro de Turmas Históricas' },
        { url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop', alt: 'Bolo comemorativo de 70 anos', descricao: 'Momento Parabéns com a comunidade escolar' },
      ],
    },
    {
      _id: 'g2',
      titulo: 'Feira das Profissões e Tecnologia',
      mes: 'Julho',
      ano: 2026,
      descricao: '[EXEMPLO] Descrição de evento a preencher - Atividades e apresentações do mês.',
      fotos: [
        { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: '[EXEMPLO] Imagem do evento', descricao: '[EXEMPLO] Descrição do evento' },
        { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', alt: 'Palestra com profissionais convidados', descricao: 'Roda de Conversa sobre Carreiras' },
        { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', alt: 'Oficina de ciências aplicadas', descricao: 'Experimentos em Laboratório' },
      ],
    },
  ]

  if (!isSanityConfigured) return fallbackGalerias
  try {
    const res = await client.fetch(`*[_type == "galeriaMes"] | order(ano desc, mes desc) {
      ...,
      "fotos": fotos[]{ "url": asset->url, alt, descricao }
    }`)
    return res && res.length > 0 ? res : fallbackGalerias
  } catch (err) {
    return fallbackGalerias
  }
}

export async function getParceiros(): Promise<Parceiro[]> {
  if (!isSanityConfigured) return DEFAULT_PARCEIROS
  try {
    // Busca os documentos "parceiro" diretamente (mesmo padrão de getDiferenciais,
    // getModalidades etc.) em vez de depender do array de referências opcional em
    // siteSettings.parceiros — assim, um novo parceiro cadastrado no Sanity aparece
    // no site sem precisar de um segundo passo manual em "Configurações Globais".
    const res = await client.fetch(`*[_type == "parceiro" && ativo != false] | order(ordem asc) {
      _id,
      nome,
      descricao,
      website,
      ordem,
      ativo,
      logo { asset -> { url } }
    }`)

    if (!Array.isArray(res)) return DEFAULT_PARCEIROS

    const parceirosComImagem = res.map((parceiro: any) => ({
      ...parceiro,
      logoUrl: parceiro.logo?.asset?.url || undefined,
    }))

    return parceirosComImagem.length > 0 ? parceirosComImagem : DEFAULT_PARCEIROS
  } catch (err) {
    return DEFAULT_PARCEIROS
  }
}

// ---------------------------------------------------------------------------
// PÁGINAS SINGULARES (Nossa História, Matrículas, Tecnologia Educacional,
// Vivencie o Sagrado, 70 Anos) — cada uma é um único documento no Sanity que
// alimenta textos/imagens/listas editáveis da página. Seguem o mesmo padrão de
// merge-com-padrão de getSiteSettings: um documento existente, mas com algum
// campo ainda não preenchido, não deixa a página com um buraco — o campo
// específico cai no valor padrão (o mesmo conteúdo que já estava fixo no código).
// ---------------------------------------------------------------------------

export interface PaginaHistoria {
  tituloBanner: string
  subtituloBanner: string
  tituloSecao: string
  textoInstitucional1: string
  textoInstitucional2: string
  imagemDestaqueUrl?: string
  filosofiaTexto1: string
  filosofiaTexto2: string
  missao: string
  visao: string
  valoresIntroducao: string
  valoresLista: string[]
  principiosEducacionais: Array<{ titulo: string; descricao: string }>
  fotosHistoricas: Array<{ url?: string; alt: string; descricao?: string }>
}

export const DEFAULT_PAGINA_HISTORIA: PaginaHistoria = {
  tituloBanner: 'Nossa História e Propósito em Rio Grande - RS',
  subtituloBanner: 'Há sete décadas, o Colégio Sagrado Coração de Jesus atua em Rio Grande - RS formando cidadãos conscientes, éticos e preparados para transformar a sociedade com responsabilidade, acolhimento e excelência.',
  tituloSecao: 'Uma História que Começa com o Cuidado por Rio Grande',
  textoInstitucional1: 'Nossa trajetória começa em 14 de setembro de 1944, com a fundação do Círculo Operário Riograndino, sob a proteção de São José Operário e Nossa Senhora Medianeira. Atento às necessidades das famílias trabalhadoras da cidade e sob a liderança do Pe. Luiz de Carvalho, o Círculo fundou, em 16 de setembro de 1956, a Creche Casa da Criança Sagrado Coração de Jesus — criada para acolher os filhos dos operários enquanto os pais trabalhavam.',
  textoInstitucional2: 'Em 1998, a creche se transformou em Escola de Ensino Fundamental. Em 2008, o Ensino Médio foi autorizado e a instituição passou a se chamar Colégio Sagrado Coração de Jesus. Hoje seguimos com a mesma essência acolhedora do início, oferecendo Recreação, Educação Infantil, Ensino Fundamental e Ensino Médio às famílias de Rio Grande - RS.',
  imagemDestaqueUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  filosofiaTexto1: 'Educar pessoas descobridoras, reflexivas, criativas, críticas e humanistas, que, compreendendo-se como sujeitos transformadores do meio, sejam capazes de promover mudanças significativas na sociedade.',
  // Missão e Visão institucionais ainda não foram confirmadas em nenhum documento
  // oficial disponível — ficam como [EXEMPLO] em vez de um texto genérico
  // apresentado como se fosse a declaração oficial do Colégio.
  filosofiaTexto2: '[EXEMPLO] Complemente aqui a filosofia do Colégio com texto oficial, se houver, para preencher no Sanity.',
  missao: '[EXEMPLO] Descreva aqui a missão institucional oficial do Colégio para preencher no Sanity.',
  visao: '[EXEMPLO] Descreva aqui a visão institucional oficial do Colégio para preencher no Sanity.',
  valoresIntroducao: 'Os princípios que guiam nossa convivência dentro e fora da sala de aula:',
  valoresLista: ['[EXEMPLO] Preencha os valores institucionais reais no Sanity'],
  // Os 5 itens abaixo são os "Objetivos do Colégio" tal como registrados no
  // documento institucional oficial (Filosofia e Objetivos do Colégio) — não
  // paráfrase nem conteúdo inventado.
  principiosEducacionais: [
    { titulo: 'Autoconfiança e Autenticidade', descricao: 'Oportunizar ao aluno desenvolver a autoconfiança, a liberdade e a autenticidade no ser e no agir.' },
    { titulo: 'Capacidade de Aprendizagem', descricao: 'Desenvolver a capacidade de aprendizagem, tendo em vista a aquisição de conhecimentos e habilidades, bem como a formação de atitudes e valores.' },
    { titulo: 'Educação Participativa', descricao: 'Elaborar estratégias globais em conjunto, condizentes com a educação participativa, para oportunizar ao educando/comunidade ser sujeito do próprio desenvolvimento.' },
    { titulo: 'Família e Vida Social', descricao: 'Fortalecer os vínculos da família, os laços de solidariedade humana e a tolerância recíproca em que se assenta a vida social.' },
    { titulo: 'Liderança', descricao: 'Auxiliar o educando a desenvolver suas potencialidades de liderança.' },
  ],
  fotosHistoricas: [
    { url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop', alt: 'Primeiras turmas em 1956', descricao: 'Fundação da Creche Casa da Criança Sagrado Coração de Jesus, em 1956' },
    { url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', alt: 'Prédio histórico do Colégio', descricao: '[EXEMPLO] Legenda a confirmar no Sanity' },
    { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', alt: 'Ginásio Poliesportivo do Colégio', descricao: '[EXEMPLO] Legenda a confirmar no Sanity' },
    { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', alt: 'Fachada atual no ano do Jubileu', descricao: 'Fachada atual preparada para as celebrações dos 70 anos' },
  ],
}

export async function getPaginaHistoria(): Promise<PaginaHistoria> {
  if (!isSanityConfigured) return DEFAULT_PAGINA_HISTORIA
  try {
    const res = await client.fetch(`*[_type == "paginaHistoria"][0] {
      ...,
      "imagemDestaqueUrl": imagemDestaque.asset->url,
      "fotosHistoricas": fotosHistoricas[]{ "url": asset->url, alt, descricao }
    }`)
    if (!res) return DEFAULT_PAGINA_HISTORIA
    return {
      ...DEFAULT_PAGINA_HISTORIA,
      ...res,
      imagemDestaqueUrl: res.imagemDestaqueUrl || DEFAULT_PAGINA_HISTORIA.imagemDestaqueUrl,
      valoresLista: res.valoresLista?.length ? res.valoresLista : DEFAULT_PAGINA_HISTORIA.valoresLista,
      principiosEducacionais: res.principiosEducacionais?.length ? res.principiosEducacionais : DEFAULT_PAGINA_HISTORIA.principiosEducacionais,
      fotosHistoricas: res.fotosHistoricas?.length
        ? res.fotosHistoricas.map((f: { url?: string; alt?: string; descricao?: string }) => ({ ...f, alt: f.alt || 'Foto histórica do Colégio Sagrado' }))
        : DEFAULT_PAGINA_HISTORIA.fotosHistoricas,
    }
  } catch (err) {
    return DEFAULT_PAGINA_HISTORIA
  }
}

export interface PaginaMatriculas {
  tituloBanner: string
  subtituloBanner: string
  etiquetaBanner: string
  passos: Array<{ titulo: string; descricao: string }>
  documentosNecessarios: string[]
  faq: Array<{ pergunta: string; resposta: string }>
}

export const DEFAULT_PAGINA_MATRICULAS: PaginaMatriculas = {
  tituloBanner: 'Matrículas & Rematrículas 2027',
  subtituloBanner: 'Garanta a vaga do seu filho para 2027 em uma instituição com 70 anos de tradição, inovação e acolhimento humano em Rio Grande - RS.',
  etiquetaBanner: 'Ano Letivo 2027 — Vagas Abertas',
  passos: [
    { titulo: 'Agende uma Visita Guiada', descricao: 'Conheça nossa estrutura física, proposta pedagógica e tire dúvidas com a equipe de coordenação.' },
    { titulo: 'Entrevista Pedagógica & Apresentação', descricao: 'Conversa acolhedora com os pais e apresentação das diretrizes de convivência do Sagrado.' },
    { titulo: 'Entrega de Documentos', descricao: 'Apresentação da documentação do aluno e dos responsáveis na Secretaria do Colégio.' },
    { titulo: 'Assinatura & Boas-Vindas', descricao: 'Assinatura do contrato de prestação de serviços educacionais e integração da família no Diário Escola.' },
  ],
  documentosNecessarios: [
    'Certidão de Nascimento do Aluno (cópia simples)',
    'RG e CPF do Aluno (se houver)',
    'RG, CPF e Comprovante de Residência dos Responsáveis Financeiros',
    'Declaração de Transferência ou Histórico Escolar da escola de origem',
    'Carteira de Vacinação atualizada (para Educação Infantil e Fundamental I)',
    'Declaração de Quitação de Débitos da escola anterior',
  ],
  faq: [
    { pergunta: 'Qual é o horário de atendimento da Secretaria para matrículas?', resposta: 'A Secretaria atende presencialmente e por telefone de segunda a sexta-feira, das 07h30 às 17h30 sem fechar para o almoço.' },
    { pergunta: 'O Colégio oferece período integral ou turmas de contraturno?', resposta: 'Sim! Possuímos programas de permanência estendida e atividades extracurriculares no contraturno escolar para Educação Infantil e Ensino Fundamental.' },
    { pergunta: 'Como funciona a rematrícula de alunos veteranos para 2027?', resposta: 'Alunos veteranos possuem prioridade de renovação de vaga através do portal de rematrículas com condições especiais no período oficial de campanha 2027.' },
  ],
}

export async function getPaginaMatriculas(): Promise<PaginaMatriculas> {
  if (!isSanityConfigured) return DEFAULT_PAGINA_MATRICULAS
  try {
    const res = await client.fetch(`*[_type == "paginaMatriculas"][0]`)
    if (!res) return DEFAULT_PAGINA_MATRICULAS
    return {
      ...DEFAULT_PAGINA_MATRICULAS,
      ...res,
      passos: res.passos?.length ? res.passos : DEFAULT_PAGINA_MATRICULAS.passos,
      documentosNecessarios: res.documentosNecessarios?.length ? res.documentosNecessarios : DEFAULT_PAGINA_MATRICULAS.documentosNecessarios,
      faq: res.faq?.length ? res.faq : DEFAULT_PAGINA_MATRICULAS.faq,
    }
  } catch (err) {
    return DEFAULT_PAGINA_MATRICULAS
  }
}

export interface PaginaTecnologia {
  titulo: string
  subtitulo: string
  plataformas: Array<{
    nome: string
    publicoAlvo?: string
    descricao: string
    recursos: string[]
    iconeTipo?: string
    linkWeb?: string
    linkAppStore?: string
    linkPlayStore?: string
    ordem?: number
    ativo?: boolean
  }>
  avisoTransparencia: string
  textoSuporteWhats: string
}

// Este é o schema/formato real já usado pelo documento cadastrado no Sanity
// (5 apps: Plataforma Iônica + Diário Escola separado por público — pais e
// professores, Fundamental e Infantil — cada um com link próprio de Web/App
// Store/Play Store). O fallback abaixo só entra em cena se o Sanity não tiver
// nenhum documento deste tipo.
export const DEFAULT_PAGINA_TECNOLOGIA: PaginaTecnologia = {
  titulo: 'Recursos e Plataformas Educacionais',
  subtitulo: 'Ferramentas e plataformas de apoio ao processo pedagógico e comunicação entre Escola e Famílias.',
  plataformas: [
    {
      nome: 'Diário Escola',
      publicoAlvo: 'Pais e Responsáveis',
      descricao: 'Plataforma de comunicação e acompanhamento de rotina escolar para Educação Infantil e Ensino Fundamental.',
      recursos: [
        'Agenda diária de atividades e comunicados oficiais',
        'Registro de frequência, tarefas de casa e alimentação',
        'Canal direto com a coordenação pedagógica e professores',
      ],
      iconeTipo: 'Smartphone',
      linkWeb: 'https://diarioescola.com.br',
      ordem: 1,
      ativo: true,
    },
    {
      nome: 'Plataforma Iônica (FTD Educação)',
      publicoAlvo: 'Alunos, Pais e Professores',
      descricao: 'Ambiente virtual de aprendizagem utilizado do Ensino Fundamental ao Ensino Médio com materiais didáticos digitais e recursos educacionais.',
      recursos: [
        'Livros digitais interativos e acervo multimídia 24/7',
        'Trilhas de exercícios adaptativos e recursos interativos',
        'Relatórios individuais de desempenho em tempo real',
      ],
      iconeTipo: 'Laptop',
      linkWeb: 'https://p21-ionica.com.br',
      ordem: 2,
      ativo: true,
    },
  ],
  avisoTransparencia: 'O Colégio Sagrado Coração de Jesus utiliza os sistemas e materiais didáticos de parceiros educacionais (FTD Educação e Diário Escola) para apoio pedagógico e comunicação com pais, alunos e professores.',
  textoSuporteWhats: 'Dúvidas com usuário, primeiro acesso ou redefinição de senha? Fale diretamente com a Secretaria pelo WhatsApp oficial.',
}

export async function getPaginaTecnologia(): Promise<PaginaTecnologia> {
  if (!isSanityConfigured) return DEFAULT_PAGINA_TECNOLOGIA
  try {
    const res = await client.fetch(`*[_type == "paginaTecnologia"][0]`)
    if (!res) return DEFAULT_PAGINA_TECNOLOGIA
    const plataformasAtivas = (res.plataformas || [])
      .filter((p: { ativo?: boolean }) => p.ativo !== false)
      .sort((a: { ordem?: number }, b: { ordem?: number }) => (a.ordem ?? 0) - (b.ordem ?? 0))
    return {
      ...DEFAULT_PAGINA_TECNOLOGIA,
      ...res,
      plataformas: plataformasAtivas.length ? plataformasAtivas : DEFAULT_PAGINA_TECNOLOGIA.plataformas,
    }
  } catch (err) {
    return DEFAULT_PAGINA_TECNOLOGIA
  }
}

export interface PaginaVivencie {
  tituloBanner: string
  subtituloBanner: string
  tituloIntroducao: string
  textoIntroducao1: string
  textoIntroducao2: string
  imagemIntroducaoUrl?: string
  pilares: Array<{ titulo: string; descricao: string }>
}

export const DEFAULT_PAGINA_VIVENCIE: PaginaVivencie = {
  tituloBanner: 'Vivencie o Sagrado',
  subtituloBanner: 'Mais do que salas de aula: um espaço de convivência, desenvolvimento de virtudes e memórias inesquecíveis para toda a vida.',
  tituloIntroducao: 'Um Ambiente Onde Cada Aluno se Sente em Casa',
  textoIntroducao1: 'No Colégio Sagrado Coração de Jesus, o aprendizado vai além dos livros. Acreditamos que o conhecimento floresce em um ambiente seguro, acolhedor e repleto de afeto.',
  textoIntroducao2: 'Nossa rotina é planejada para equilibrar rigor acadêmico, práticas esportivas, manifestações artísticas e momentos de pastoral que conectam a juventude a valores elevados.',
  imagemIntroducaoUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop',
  pilares: [
    { titulo: 'Pastoral & Espiritualidade', descricao: 'Ações de solidariedade, encontros de reflexão, celebrações eucarísticas e voluntariado que aquecem o coração e desenvolvem a empatia.' },
    { titulo: 'Projetos de Convivência', descricao: 'Rodas de conversa socioemocionais, mediação de conflitos e assembleias de alunos para fortalecer o sentimento de pertencimento.' },
    { titulo: 'Cultura, Arte & Esportes', descricao: 'Teatro, musicalização e dança integrados à rotina pedagógica, desenvolvendo comunicação, criatividade, autoestima e expressão corporal — além de eventos ao longo do ano como Feira de Ciências, Feira do Livro (que envolve até a Educação Infantil e o Maternal) e datas temáticas como Semana da Criança, Páscoa e Amigo Doce.' },
    { titulo: 'Rotina e Conforto', descricao: '[EXEMPLO] Descreva aqui a rotina e a estrutura de conforto reais do Colégio para preencher no Sanity.' },
  ],
}

export async function getPaginaVivencie(): Promise<PaginaVivencie> {
  if (!isSanityConfigured) return DEFAULT_PAGINA_VIVENCIE
  try {
    const res = await client.fetch(`*[_type == "paginaVivencie"][0] {
      ...,
      "imagemIntroducaoUrl": imagemIntroducao.asset->url
    }`)
    if (!res) return DEFAULT_PAGINA_VIVENCIE
    return {
      ...DEFAULT_PAGINA_VIVENCIE,
      ...res,
      imagemIntroducaoUrl: res.imagemIntroducaoUrl || DEFAULT_PAGINA_VIVENCIE.imagemIntroducaoUrl,
      pilares: res.pilares?.length ? res.pilares : DEFAULT_PAGINA_VIVENCIE.pilares,
    }
  } catch (err) {
    return DEFAULT_PAGINA_VIVENCIE
  }
}

export interface PaginaSetentaAnos {
  etiquetaBanner: string
  tituloBanner: string
  subtituloBanner: string
  curiosidades: Array<{ ano: string; texto: string }>
  programacao: Array<{ data: string; horario: string; titulo: string; local: string; descricao: string }>
}

export const DEFAULT_PAGINA_SETENTA_ANOS: PaginaSetentaAnos = {
  etiquetaBanner: '1956 — 2026 | Jubileu de Vinho',
  tituloBanner: '70 Anos Formando Gerações com Excelência, Acolhimento e Valores',
  subtituloBanner: 'Sete décadas construindo memórias, transformando vidas e reafirmando o compromisso com uma educação integral de verdade.',
  // Nenhuma curiosidade histórica real foi confirmada ainda — em vez de inventar
  // números e episódios, os 4 espaços ficam como [EXEMPLO] até serem preenchidos
  // no Sanity com fatos reais e verificáveis.
  curiosidades: [
    { ano: '[EXEMPLO]', texto: '[EXEMPLO] Adicione aqui uma curiosidade histórica real do Colégio (fato verificável) para preencher no Sanity.' },
    { ano: '[EXEMPLO]', texto: '[EXEMPLO] Adicione aqui uma curiosidade histórica real do Colégio (fato verificável) para preencher no Sanity.' },
    { ano: '[EXEMPLO]', texto: '[EXEMPLO] Adicione aqui uma curiosidade histórica real do Colégio (fato verificável) para preencher no Sanity.' },
    { ano: '[EXEMPLO]', texto: '[EXEMPLO] Adicione aqui uma curiosidade histórica real do Colégio (fato verificável) para preencher no Sanity.' },
  ],
  // Datas, horários e locais dos eventos comemorativos ainda não foram confirmados
  // pelo Colégio — publicar isso como se fosse a programação real arriscaria levar
  // alguém a um evento que não existe. Fica como [EXEMPLO] até a confirmação oficial.
  programacao: [
    {
      data: '[EXEMPLO] Data a definir',
      horario: '[EXEMPLO]',
      titulo: '[EXEMPLO] Evento Comemorativo a Definir',
      local: '[EXEMPLO] Local a definir',
      descricao: '[EXEMPLO] Descreva aqui um evento real da programação dos 70 anos para preencher no Sanity.',
    },
    {
      data: '[EXEMPLO] Data a definir',
      horario: '[EXEMPLO]',
      titulo: '[EXEMPLO] Evento Comemorativo a Definir',
      local: '[EXEMPLO] Local a definir',
      descricao: '[EXEMPLO] Descreva aqui um evento real da programação dos 70 anos para preencher no Sanity.',
    },
    {
      data: '[EXEMPLO] Data a definir',
      horario: '[EXEMPLO]',
      titulo: '[EXEMPLO] Evento Comemorativo a Definir',
      local: '[EXEMPLO] Local a definir',
      descricao: '[EXEMPLO] Descreva aqui um evento real da programação dos 70 anos para preencher no Sanity.',
    },
  ],
}

export async function getPaginaSetentaAnos(): Promise<PaginaSetentaAnos> {
  if (!isSanityConfigured) return DEFAULT_PAGINA_SETENTA_ANOS
  try {
    const res = await client.fetch(`*[_type == "paginaSetentaAnos"][0]`)
    if (!res) return DEFAULT_PAGINA_SETENTA_ANOS
    return {
      ...DEFAULT_PAGINA_SETENTA_ANOS,
      ...res,
      curiosidades: res.curiosidades?.length ? res.curiosidades : DEFAULT_PAGINA_SETENTA_ANOS.curiosidades,
      programacao: res.programacao?.length ? res.programacao : DEFAULT_PAGINA_SETENTA_ANOS.programacao,
    }
  } catch (err) {
    return DEFAULT_PAGINA_SETENTA_ANOS
  }
}
