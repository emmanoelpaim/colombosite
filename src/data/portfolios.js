export const portfolioSlugs = ['douglas', 'emmanoel', 'larissa', 'luana']

export const portfolios = {
  douglas: {
    type: 'dev',
    slug: 'douglas',
    name: 'Douglas Colombo',
    role: 'Desenvolvimento de aplicações',
    headline: 'Backend, apps mobile e sites em produção',
    summary:
      'Foco em APIs estáveis, integrações e publicação de aplicativos nas lojas, além de sites performáticos alinhados à operação do cliente.',
    avatar: 'img/douglas.jpeg',
    initials: 'DC',
    linkedIn: 'https://www.linkedin.com/in/douglas-colombo-51a75416a/',
    highlights: ['APIs e integrações', 'Apps mobile (publicação)', 'Sites e painéis', 'Infra e deploy'],
    projects: [
      {
        title: 'APIs e microsserviços',
        description:
          'Modelagem de endpoints, autenticação, filas e integração com gateways de pagamento e CRMs.',
        tags: ['Node', 'REST', 'Integrações'],
      },
      {
        title: 'Apps publicados nas lojas',
        description:
          'Build, assinaturas, políticas das lojas e releases contínuos para Android e iOS.',
        tags: ['Mobile', 'Play Store', 'App Store'],
      },
      {
        title: 'Sites e landing pages',
        description:
          'Performance, SEO técnico básico e integração com formulários e automações.',
        tags: ['Web', 'Performance'],
      },
    ],
  },
  emmanoel: {
    type: 'dev',
    slug: 'emmanoel',
    name: 'Emmanoel Paim',
    role: 'Desenvolvimento e publicação de aplicações',
    headline: 'Aplicações web, mobile, backend e automação',
    summary:
      'Desenvolvimento de soluções completas com foco em performance, escalabilidade e experiência do usuário. Atuação em aplicações web utilizando Angular e PHP, aplicações mobile utilizando Flutter. Aplicações de backend utilizando Node.js, Python e bancos de dados, além de automações, APIs, integrações e publicação de aplicativos nas lojas oficiais.',
    avatar: 'img/manu.jpg',
    initials: 'EP',
    linkedIn: 'https://www.linkedin.com/in/emmanoel-da-silva-soares-paim/',
    highlights: ['Aplicações web', 'Aplicações mobile', 'Backend', 'Automação','UX/UI'],
    projects: [
      {
        title: 'Sistemas web e automações',
        description:
          'Desenvolvimento de sistemas administrativos, dashboards, portais web e automações para otimização de processos e produtividade.',
        tags: ['Web', 'Automação','UX/UI'],
      },
      {
        title: 'Aplicações mobile multiplataforma',
        description:
          'Desenvolvimento e manutenção de aplicativos Flutter com foco em performance, arquitetura escalável, integrações com APIs e publicação nas lojas Google Play e App Store.',
        tags: ['Flutter', 'Mobile', 'Firebase'],
      },
      {
        title: 'Sites e portais',
        description:
          'Interfaces rápidas, acessíveis e conectadas a campanhas e indicadores de conversão.',
        tags: ['Web', 'UX técnica'],
      },
    ],
    workItems: [
      {
        title: 'Comer Bem — Sabor e Saúde',
        description: 'App de alimentação saudável e planejamento de refeições, publicado nas lojas oficiais.',
        logoSrc:
          'https://play-lh.googleusercontent.com/ufP_WQTzPdbxqSVfSuaG5vZBqe9sOnssDIaW2ymqN6JczbDt5Z4OPSA_lgA5ZHUKMriwhOwfcWzvZUvwCSLB=w240-h480-rw',
        logoInitials: 'CB',
        links: [
          { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=br.com.comerbem.app&pcampaignid=web_share' },
          { label: 'App Store', href: 'https://apps.apple.com/br/app/comer-bem-sabor-e-sa%C3%BAde/id6754412068' },
        ],
      },
      {
        title: 'Vexus — SMPM, SenseMet e produtos',
        description: 'Soluções de monitoramento e previsão meteorológica (SMPM e SenseMet) e ecossistema web da Vexus.',
        logoDomain: 'vexus.solutions',
        logoInitials: 'VX',
        links: [
          { label: 'Google Play (SMPM)', href: 'https://play.google.com/store/apps/details?id=com.vexus.app&hl=pt_BR' },
          { label: 'App Store (SMPM)', href: 'https://apps.apple.com/br/app/smpm-monitoramento-e-previs%C3%A3o/id6670795180' },
          { label: 'App Store (SenseMet)', href: 'https://apps.apple.com/br/app/sensemet-monitoria-e-previs%C3%A3o/id6741776456' },
          {
            label: 'Acesso web (Vale)',
            href: 'https://login.vexus.solutions/realms/vale/protocol/openid-connect/auth?client_id=administration&redirect_uri=https%3A%2F%2Fproducts.vexus.solutions%2Fadmin_app%2Frealm%2Fvale%2Fvalidate-2fa-pin%2Fproducts%3Ferror%3Dinvalid_request%26error_description%3DMissing%2Bparameter%253A%2Bresponse_type&state=2891044e-0eb8-45d2-986f-4a14e8993171&response_mode=fragment&response_type=code&scope=openid&nonce=2abab6a3-6158-44f0-ab7e-cdeadd8aa594&code_challenge=0PI0FCExAy_j5yXVXB6QJvNdL1ulbtCsa-i-EaCW1F4&code_challenge_method=S256',
          },
        ],
      },
      {
        title: 'Simers — apps e presença digital',
        description: 'Aplicativo oficial, portal do sindicato e projetos ligados à marca e à comunidade médica.',
        logoDomain: 'simers.org.br',
        logoInitials: 'SI',
        links: [
          { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.simers.app&hl=pt_BR' },
          { label: 'App Store', href: 'https://apps.apple.com/br/app/simers-aplicativo/id1530215321' },
          { label: 'Site institucional', href: 'https://simers.org.br' },
          { label: 'MUHM', href: 'https://muhm.org.br/' },
          { label: 'Trote Solidário', href: 'https://trotesolidario.com.br/participante' },
        ],
      },
      {
        title: 'ASAV e Rede Jesuíta de Educação',
        description: 'Portais e sites institucionais da mantenedora ASAV e da Rede Jesuíta de Educação.',
        logoSrc: 'https://jesuitasbrasil.org.br/wp-content/uploads/2023/05/BRASAO.svg',
        logoInitials: 'AS',
        links: [
          { label: 'Unisinos', href: 'https://www.unisinos.br' },
          { label: 'Portal Jesuítas Brasil', href: 'https://jesuitasbrasil.org.br/' },
          { label: 'Colégio Anchieta', href: 'https://www.colegioanchieta.g12.br/' },
          { label: 'Colégio Catarinense', href: 'https://www.colegiocatarinense.g12.br/' },
        ],
      },
      {
        title: 'Cubo Play',
        description: 'Plataforma de entretenimento com cultura e esporte: entrevistas, podcast e debates online.',
        logoDomain: 'cuboplay.com.br',
        logoInitials: 'CP',
        links: [{ label: 'Visitar site', href: 'https://cuboplay.com.br/' }],
      },
      {
        title: 'Voxer Global',
        logoSrc:
          'https://media.licdn.com/dms/image/v2/D4D0BAQEWrM2pSMyIbg/company-logo_100_100/company-logo_100_100/0/1703101579320/voxer_app_logo?e=1779926400&v=beta&t=gCQJpal5lVc2u-7GsqMIvB-Vrw7BzqzQXVAnrHIlTD0',
        description:
          'Aplicativo focado em videochamadas educacionais, similar ao Cambly',
        logoInitials: 'VG',
        links: [],
      },
    ],
  },
  larissa: {
    type: 'marketing',
    slug: 'larissa',
    name: 'Larissa Mença',
    role: 'Criativo e conteúdo',
    headline: 'Conteúdo, identidade e campanhas que convertem',
    summary:
      'Estratégia de conteúdo, peças criativas e consistência de marca para fortalecer presença digital e engajamento.',
    avatar: 'img/lari.jpeg',
    initials: 'LM',
    linkedIn: 'https://www.linkedin.com/in/larissa-mariah-men%C3%A7a-4aa8b86b/',
    highlights: ['Branding', 'Social media', 'Copy e roteiros', 'Peças criativas'],
    projects: [
      {
        title: 'Identidade e linha editorial',
        description:
          'Tom de voz, calendário editorial e adaptação de mensagens por canal (feed, stories, anúncios).',
        tags: ['Branding', 'Conteúdo'],
      },
      {
        title: 'Campanhas de awareness e conversão',
        description:
          'Conceito criativo, variações de criativo e alinhamento com objetivos de mídia paga.',
        tags: ['Campanhas', 'Ads'],
      },
      {
        title: 'Produção visual e storytelling',
        description:
          'Direção visual leve, sugestões de formato e narrativas que reforçam prova social e autoridade.',
        tags: ['Criativo', 'Storytelling'],
      },
    ],
  },
  luana: {
    type: 'marketing',
    slug: 'luana',
    name: 'Luana Colombo',
    role: 'Gestão e atendimento ao cliente',
    headline: 'Marketing orientado a resultado e relacionamento',
    summary:
      'Planejamento de ações de marketing alinhado à operação, relacionamento com clientes e acompanhamento de entregas com foco em ROI.',
    avatar: 'img/lu.jpeg',
    initials: 'LC',
    linkedIn: 'https://www.linkedin.com/in/luana-colombo-53a21617b/',
    highlights: ['Gestão de campanhas', 'CRM e relacionamento', 'Métricas e relatórios', 'Atendimento'],
    projects: [
      {
        title: 'Gestão de projetos de marketing',
        description:
          'Cronogramas, checkpoints com cliente e priorização de entregas para campanhas sazonais e recorrentes.',
        tags: ['Gestão', 'Planejamento'],
      },
      {
        title: 'Relacionamento e pós-venda',
        description:
          'Comunicação clara com stakeholders, alinhamento de briefings e feedback contínuo nas fases do projeto.',
        tags: ['Atendimento', 'CRM'],
      },
      {
        title: 'Indicadores e melhoria contínua',
        description:
          'Leitura de métricas de campanha, relatórios objetivos e sugestões de ajuste com base em dados.',
        tags: ['Analytics', 'Performance'],
      },
    ],
  },
}

export function getPortfolioBySlug(slug) {
  if (!slug) return null
  const key = String(slug).toLowerCase().trim()
  return portfolios[key] ?? null
}
