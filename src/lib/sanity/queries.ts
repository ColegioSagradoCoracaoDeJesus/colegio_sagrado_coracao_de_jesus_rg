import { client, projectId } from './client'

export interface SiteSettings {
  title: string
  telefones: string[]
  whatsapp: string
  email: string
  emailVisita: string
  emailLocacao: string
  endereco: string
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

// MOCK DATA FALLBACKS FOR ROBUSTNESS
export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  title: 'Colégio Sagrado Coração de Jesus',
  telefones: ['(53) 3232-5531 (Somente WhatsApp)'],
  whatsapp: '555332325531',
  email: 'secretariacolegiosagrado@gmail.com',
  emailVisita: 'secretariacolegiosagrado@gmail.com',
  emailLocacao: 'secretariacolegiosagrado@gmail.com',
  endereco: 'Rua Doutor Augusto Duprat, 374 - Cidade Nova, Rio Grande - RS, CEP 96211-058 (CEP: 96200-010)',
  linkMapaEmbed: 'https://maps.google.com/maps?q=Rua+Doutor+Augusto+Duprat,+374+-+Cidade+Nova,+Rio+Grande+-+RS,+96211-058&t=&z=16&ie=UTF8&iwloc=&output=embed',
  horarioAtendimento: 'Segunda a Sexta, das 07h30 às 17h30',
  redesSociais: {
    instagram: 'https://instagram.com/colegiosagradocoracao',
    facebook: 'https://facebook.com/colegiosagradocoracao',
    youtube: 'https://youtube.com/@colegiosagradocoracao',
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
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
    destaque: true,
  },
  {
    _id: 'n2',
    titulo: 'Alunos do Ensino Médio Conquistam Prêmios na Olimpíada Paranaense de Robótica',
    slug: { current: 'alunos-conquistam-premios-na-olimpiada-paranaense-de-robotica' },
    data: '2026-08-02',
    categoria: 'Pedagógico',
    resumo: 'Equipe de tecnologia do Colégio desenvolveu protótipo sustentável de automação e conquistou o 1º lugar na categoria Destaque Inovação.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    destaque: true,
  },
  {
    _id: 'n3',
    titulo: 'Projeto de Leitura e Literatura Transforma Aprendizado na Educação Infantil',
    slug: { current: 'projeto-de-leitura-transforma-aprendizado-na-educacao-infantil' },
    data: '2026-07-25',
    categoria: 'Pedagógico',
    resumo: 'A atividade "Passaporte da Leitura" incentivou o contato diário das crianças com contos clássicos e produções autorais dos alunos.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
  {
    _id: 'n4',
    titulo: 'Ação Solidária de Inverno Arrecada Mais de 2 Toneladas de Agasalhos e Alimentos',
    slug: { current: 'acao-solidaria-de-inverno-arrecada-2-toneladas-de-agasalhos' },
    data: '2026-07-15',
    categoria: ' Pastoral & Espiritualidade',
    resumo: 'Mobilização da comunidade escolar fortalece valores de fraternidade e solidariedade junto a instituições assistenciais locais.',
    imageUrl: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
  {
    _id: 'n5',
    titulo: 'Feira das Profissões Reúne Especialistas e Orientação Vocacional para o Ensino Médio',
    slug: { current: 'feira-das-profissoes-reune-especialistas-para-o-ensino-medio' },
    data: '2026-06-28',
    categoria: 'Institucional',
    resumo: 'Estudantes conversaram com profissionais renomados, participaram de oficinas de carreira e simulados dos principais vestibulares.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
  {
    _id: 'n6',
    titulo: 'Campeonato Intercolegial de Basquete e Futsal Movimenta o Ginásio Sagrado',
    slug: { current: 'campeonato-intercolegial-movimenta-o-ginasio-sagrado' },
    data: '2026-06-14',
    categoria: 'Esportes & Cultura',
    resumo: 'Nossas equipes demonstraram espírito esportivo, fair play e excelente desempenho técnico diante de diversas escolas da região.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    destaque: false,
  },
]

export const DEFAULT_DIFERENCIAIS: Diferencial[] = [
  { _id: 'd1', titulo: 'Formação Humana e Valores', icone: 'Heart', textoCurto: 'Educação alicerçada no respeito, acolhimento, ética e responsabilidade social.', ordem: 1 },
  { _id: 'd2', titulo: 'Tradição dos 70 Anos', icone: 'Award', textoCurto: 'Sete décadas de história moldando cidadãos conscientes e preparados para o futuro.', ordem: 2 },
  { _id: 'd3', titulo: 'Programa Bilingue e Global', icone: 'Globe', textoCurto: 'Imersão no idioma inglês com foco em fluência, cultura e certificações internacionais.', ordem: 3 },
  { _id: 'd4', titulo: 'Tecnologia Educacional Avançada', icone: 'Cpu', textoCurto: 'Laboratórios de robótica, Plataforma Iônica e ecossistema digital integrado.', ordem: 4 },
  { _id: 'd5', titulo: 'Suporte Socioemocional', icone: 'Users', textoCurto: 'Equipe multidisciplinar de psicologia e orientação pedagógica permanente.', ordem: 5 },
  { _id: 'd6', titulo: 'Segurança e Estrutura Completa', icone: 'ShieldCheck', textoCurto: 'Monitoramento 24h, amplos espaços esportivos, auditório e ambientes climatizados.', ordem: 6 },
]

export const DEFAULT_MODALIDADES: ModalidadeEnsino[] = [
  {
    _id: 'm1',
    nome: 'Educação Infantil',
    slug: { current: 'educacao-infantil' },
    faixaEtaria: '2 a 5 anos (Maternal ao Infantil V)',
    resumo: 'Ambiente estimulante, seguro e acolhedor onde a criança descobre o mundo através do brincar guiado, da socialização e do desenvolvimento socioemocional.',
    objetivos: [
      'Desenvolver a autonomia, coordenação motora e expressão corporal',
      'Estimular a linguagem oral e o gosto inicial pela leitura e histórias',
      'Incentivar a convivência harmoniosa, empatia e compartilhamento',
      'Promover a curiosidade científica e o contato com a natureza'
    ],
    metodologia: 'Metodologia afetiva e investigativa, onde a criança é protagonista de suas descobertas. Utilizamos jogos pedagógicos, projetos temáticos e vivências ao ar livre.',
    diferenciais: [
      'Parque infantil exclusivo e arborizado',
      'Iniciação ao inglês de forma lúdica',
      'Acompanhamento nutricional e ambiente seguro',
      'Salas de aulas lúdicas e climatizadas'
    ],
    projetos: [
      { nome: 'Passaporte da Leitura', descricao: 'Incentivo diário ao contato com livros infantis com participação da família.' },
      { nome: 'Horta Pedagógica', descricao: 'Vivência prática sobre sustentabilidade, cultivo e alimentação saudável.' }
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
      'Aulas de Robótica e Raciocínio Lógico',
      'Programa Bilíngue em parceria internacional',
      'Feiras de Ciências e Artes anuais',
      'Reforço escolar e acompanhamento individualizado'
    ],
    projetos: [
      { nome: 'Jovens Escritores', descricao: 'Produção e autoria de livros pelos próprios alunos com noite de autógrafos.' },
      { nome: 'Clube de Matemática Divertida', descricao: 'Jogos de tabuleiro e desafios lógicos estimulantes.' }
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
    metodologia: 'Metodologias ativas, uso de laboratórios modernos de ciências e informática, aulas de campo e participação em olimpíadas de conhecimento.',
    diferenciais: [
      'Preparação para Olimpíadas de Matemática, Física e Robótica',
      'Acompanhamento de orientação vocacional inicial',
      'Torneios esportivos internos e intercolegiais',
      'Plataforma digital com acervo de exercícios e videoaulas'
    ],
    projetos: [
      { nome: 'Simulação da ONU Jr.', descricao: 'Debates geopolíticos onde os alunos representam nações globais.' },
      { nome: 'Feira de Inovação e Sustentabilidade', descricao: 'Criação de soluções tecnológicas com foco ecológico.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'm4',
    nome: 'Ensino Médio',
    slug: { current: 'ensino-medio' },
    faixaEtaria: '1ª à 3ª série (15 a 17 anos)',
    resumo: 'Excelência acadêmica focada nos melhores vestibulares e no ENEM, aliada a um sólido projeto de vida e formação cidadã global.',
    objetivos: [
      'Alcançar alto rendimento no ENEM e vestibulares das universidades de topo',
      'Consolidar a capacidade analítica, redação nota 1000 e raciocínio crítico',
      'Construir o Projeto de Vida individual do estudante',
      'Formar líderes éticos com visão global e responsabilidade social'
    ],
    metodologia: 'Matriz curricular aprofundada, simulados periódicos estilo ENEM, material didático de alta performance, plantões de dúvidas e orientação acadêmica personalizada.',
    diferenciais: [
      'Simulados ENEM e Vestibulares com relatório individual de desempenho',
      'Oficinas intensivas de Redação com correção detalhada',
      'Plataforma Iônica de aprendizagem adaptativa',
      'Orientação Vocacional e Feira das Profissões'
    ],
    projetos: [
      { nome: 'Mentoria Vestibular Sagrado', descricao: 'Tutoria individualizada para plano de estudo semanal.' },
      { nome: 'Academia de Redação', descricao: 'Treinamento contínuo de estruturas dissertativas de alta pontuação.' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
]

export const DEFAULT_LINHA_TEMPO: LinhaDoTempoItem[] = [
  { _id: 'lt1', ano: '1956', titulo: 'Fundação do Colégio', descricao: 'Abertura das primeiras turmas com a missão de oferecer ensino de excelência pautado nos valores do Sagrado Coração.', imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop', ordem: 1 },
  { _id: 'lt2', ano: '1970', titulo: 'Construção da Sede Própria', descricao: 'Inauguração do prédio principal com salas amplas, biblioteca central e área verde integrada.', imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop', ordem: 2 },
  { _id: 'lt3', ano: '1995', titulo: 'Pioneirismo Tecnológico e Ginásio', descricao: 'Implantação do primeiro laboratório de informática e inauguração do Ginásio Poliesportivo coberto.', imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=800&auto=format&fit=crop', ordem: 3 },
  { _id: 'lt4', ano: '2012', titulo: 'Ampliação do Auditório e Bilinguismo', descricao: 'Inauguração do Auditório com 450 lugares e implementação do programa de imersão em inglês.', imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop', ordem: 4 },
  { _id: 'lt5', ano: '2026', titulo: 'Celebração dos 70 Anos', descricao: 'Sete décadas de história, consolidando tradição pedagógica, tecnologia educacional de ponta e comunidade participativa.', imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', ordem: 5 },
]

export const DEFAULT_DEPOIMENTOS: Depoimento70Anos[] = [
  { _id: 'dep1', nome: 'Dra. Maria Helena Silveira', relacao: 'Ex-aluna (Turma de 1982) e Médica', texto: 'O Sagrado foi a base não apenas da minha formação acadêmica, mas dos princípios éticos que me guiam até hoje na medicina e na vida.', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
  { _id: 'dep2', nome: 'Carlos Eduardo Oliveira', relacao: 'Pai de alunos (Ensino Fundamental e Médio)', texto: 'Confiar a educação dos meus dois filhos ao Colégio Sagrado Coração foi a melhor escolha. A proximidade da equipe e o acolhimento são únicos.', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop' },
  { _id: 'dep3', nome: 'Profª. Ana Beatriz Mendes', relacao: 'Docente há 22 anos', texto: 'Lecionar aqui é ver gerações de famílias passarem por nossas salas e se tornarem cidadãos brilhantes, generosos e transformadores.', imageUrl: 'https://images.unsplash.com/photo-1580894732413-8011394c8e76?q=80&w=400&auto=format&fit=crop' },
]

export const DEFAULT_ESPACOS: EspacoLocacao[] = [
  {
    _id: 'e1',
    nome: 'Ginásio Poliesportivo Sagrado',
    capacidade: 'Até 1.200 pessoas (arquibancadas e quadra)',
    descricao: 'Espaço multieventos coberto com piso esportivo oficial, tabela de basquete profissional, redes de vôlei/futsal, sonorização e vestiários completos.',
    itensDisponiveis: [
      'Quadra poliesportiva com marcação oficial',
      'Arquibancada coberta para 800 espectadores',
      'Sistema de som e microfones sem fio',
      'Vestiários masculino, feminino e adaptados',
      'Iluminação em LED de alta potência'
    ],
    usosPossiveis: [
      'Torneios e campeonatos esportivos',
      'Cerimônias de formatura e graduação',
      'Feiras comunitárias e exposições',
      'Apresentações culturais e musicais'
    ],
    condicoesGerais: 'Disponível para locação aos finais de semana e noites em dias úteis mediante agendamento prévio com 15 dias de antecedência. É necessário cumprir o regulamento interno de preservação do piso.',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    _id: 'e2',
    nome: 'Auditório Principal Ir. Tereza',
    capacidade: 'Até 450 pessoas em poltronas estofadas',
    descricao: 'Ambiente climatizado com acústica profissional, palco elevado, camarim privado, projetor 4K e mesa de controle multimídia.',
    itensDisponiveis: [
      '450 poltronas reclináveis estofadas com prancheta',
      'Palco modular iluminado com varanda técnica',
      'Projetor de alta definição e telão retrátil de 200"',
      'Mesa de som de 24 canais e microfones',
      'Camarim climatizado com banheiro privativo',
      'Foyer para recepção e coffee break'
    ],
    usosPossiveis: [
      'Palestras, simpósios e congressos',
      'Peças teatrais e recitais de música',
      'Reuniões corporativas e convenções',
      'Lançamentos de livros e exibições'
    ],
    condicoesGerais: 'Locação com acompanhamento técnico de som e iluminação incluído. Reservas abertas para instituições, empresas e organizadores de eventos.',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop',
  },
]

export const DEFAULT_ESTRUTURA: AmbienteEstrutura[] = [
  {
    _id: 'est1',
    ambiente: 'Salas de Aula Climatizadas',
    descricao: 'Ambientes amplos, iluminados, equipados com lousas digitais, projetores e mobiliário ergonômico.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', alt: 'Sala de aula moderna' }]
  },
  {
    _id: 'est2',
    ambiente: 'Biblioteca Interativa',
    descricao: 'Acervo com mais de 15.000 títulos, salas de estudo individual e em grupo, e cantinhos de leitura infantil.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop', alt: 'Biblioteca do colégio' }]
  },
  {
    _id: 'est3',
    ambiente: 'Laboratórios de Ciências e Informática',
    descricao: 'Bancadas equipadas para experimentos de Física, Química e Biologia, além de computadores atualizados para robótica.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop', alt: 'Laboratório de ciências' }]
  },
  {
    _id: 'est4',
    ambiente: 'Complexo Esportivo e Ginásio',
    descricao: 'Quadras externas e ginásio coberto preparados para modalidades coletivas e treinamentos.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop', alt: 'Ginásio do colégio' }]
  },
  {
    _id: 'est5',
    ambiente: 'Auditório Principal',
    descricao: 'Estrutura completa com 450 lugares para palestras, teatro, concertos e formaturas.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop', alt: 'Auditório principal' }]
  },
  {
    _id: 'est6',
    ambiente: 'Pátios Arborizados e Parque Infantil',
    descricao: 'Áreas de convivência ao ar livre cercadas por jardins e brinquedos seguros para o recreio.',
    fotos: [{ url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop', alt: 'Parque infantil' }]
  },
]

const isSanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder-project')

// QUERY FUNCTIONS WITH FALLBACK PROTECTION
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured) return DEFAULT_SITE_SETTINGS
  try {
    const res = await client.fetch(`*[_type == "siteSettings"][0]`)
    return res || DEFAULT_SITE_SETTINGS
  } catch (err) {
    return DEFAULT_SITE_SETTINGS
  }
}

export async function getNoticias(): Promise<Noticia[]> {
  if (!isSanityConfigured) return DEFAULT_NOTICIAS
  try {
    const res = await client.fetch(`*[_type == "noticia"] | order(data desc) {
      _id, titulo, slug, data, categoria, resumo, imagemCapa, destaque
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
    const res = await client.fetch(`*[_type == "noticia" && slug.current == $slug][0]`, { slug })
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
    const res = await client.fetch(`*[_type == "modalidadeEnsino"]`)
    return res && res.length > 0 ? res : DEFAULT_MODALIDADES
  } catch (err) {
    return DEFAULT_MODALIDADES
  }
}

export async function getEspacosLocacao(): Promise<EspacoLocacao[]> {
  if (!isSanityConfigured) return DEFAULT_ESPACOS
  try {
    const res = await client.fetch(`*[_type == "espacoLocacao"]`)
    return res && res.length > 0 ? res : DEFAULT_ESPACOS
  } catch (err) {
    return DEFAULT_ESPACOS
  }
}

export async function getLinhaDoTempo(): Promise<LinhaDoTempoItem[]> {
  if (!isSanityConfigured) return DEFAULT_LINHA_TEMPO
  try {
    const res = await client.fetch(`*[_type == "linhaDoTempoItem"] | order(ordem asc)`)
    return res && res.length > 0 ? res : DEFAULT_LINHA_TEMPO
  } catch (err) {
    return DEFAULT_LINHA_TEMPO
  }
}

export async function getDepoimentos(): Promise<Depoimento70Anos[]> {
  if (!isSanityConfigured) return DEFAULT_DEPOIMENTOS
  try {
    const res = await client.fetch(`*[_type == "depoimento70anos"]`)
    return res && res.length > 0 ? res : DEFAULT_DEPOIMENTOS
  } catch (err) {
    return DEFAULT_DEPOIMENTOS
  }
}

export async function getEstrutura(): Promise<AmbienteEstrutura[]> {
  if (!isSanityConfigured) return DEFAULT_ESTRUTURA
  try {
    const res = await client.fetch(`*[_type == "paginaEstrutura"] | order(ordem asc)`)
    return res && res.length > 0 ? res : DEFAULT_ESTRUTURA
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
        { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop', alt: 'Abertura oficial dos 70 anos', descricao: 'Solenidade de Abertura dos 70 Anos' },
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
      descricao: 'Oficinas práticas de robótica, estandes universitários e simulações com os alunos do Ensino Médio.',
      fotos: [
        { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop', alt: 'Demonstração de robótica', descricao: 'Projeto de Automação de Alunos' },
        { url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', alt: 'Palestra com profissionais convidados', descricao: 'Roda de Conversa sobre Carreiras' },
        { url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', alt: 'Oficina de ciências aplicadas', descricao: 'Experimentos em Laboratório' },
      ],
    },
  ]

  if (!isSanityConfigured) return fallbackGalerias
  try {
    const res = await client.fetch(`*[_type == "galeriaMes"] | order(ano desc, mes desc)`)
    return res && res.length > 0 ? res : fallbackGalerias
  } catch (err) {
    return fallbackGalerias
  }
}
