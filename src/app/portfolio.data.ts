export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  scope: string;
  technologies: readonly string[];
  repositoryUrl?: string;
  demoUrl?: string;
  designUrl?: string;
  image?: { src: string; alt: string };
}

export interface Experience {
  company: string;
  period: string;
  role?: string;
  description?: string;
}

export interface Certification {
  name: string;
  institution: string;
  year: string;
  url?: string;
}

// Adicione somente URLs reais. Campos vazios não geram botões no site.
export const profile = {
  name: "Herbert da Silva da Cruz",
  shortName: "Herbert",
  title: "Desenvolvedor de software · Estudante de ADS",
  email: "herbertdasilvadacruz@outlook.com",
  phone: "(11) 91419-8063",
  phoneUrl: "tel:+5511914198063",
  location: "São Paulo, SP, Brasil",
  availability: "Em busca de uma oportunidade de estágio",
  introduction:
    "Estudante de Análise e Desenvolvimento de Sistemas com experiência em suporte e infraestrutura de TI. Desenvolvo projetos de APIs, interfaces web e bancos de dados.",
  about: [
    "Sou Herbert da Silva da Cruz, estudante de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie.",
    "Minha experiência inclui investigação de incidentes, atendimento a usuários, suporte a redes e dispositivos e comunicação entre equipes de infraestrutura e operação.",
    "Também desenvolvo projetos de back-end, interfaces web, bancos de dados e design de interfaces. Busco um estágio para continuar evoluindo em desenvolvimento de software.",
  ],
  interests:
    "Desenvolvimento back-end, interfaces web, APIs, bancos de dados e aplicativos móveis.",
  languages: ["Português nativo", "Inglês técnico", "Espanhol básico"],
  githubUrl: "https://github.com/HerbertsDev",
  linkedinUrl:
    "https://www.linkedin.com/in/herbert-da-silva-da-cruz-b001942b0/",
  resumeUrl: "/curriculo-herbert-da-silva-da-cruz.pdf",
  photo: {
    src: "/images/herbert-perfil.jpeg",
    alt: "Retrato profissional de Herbert da Silva da Cruz",
  },
};

export const education = {
  institution: "Universidade Presbiteriana Mackenzie",
  course: "Análise e Desenvolvimento de Sistemas",
  semester: "2º de 5 semestres",
  completion: "Abril de 2028",
};

export const technologyGroups = [
  {
    name: "Linguagens",
    items: ["Python", "Java", "JavaScript", "TypeScript", "C#", "Dart", "SQL"],
  },
  { name: "Interfaces web", items: ["Angular", "HTML", "CSS"] },
  {
    name: "Desenvolvimento de APIs",
    items: ["FastAPI", ".NET", "Spring Boot"],
  },
  { name: "Aplicativos móveis", items: ["Flutter"] },
  { name: "Banco de dados", items: ["PostgreSQL", "SQL Server"] },
  {
    name: "Ferramentas",
    items: ["Git", "GitHub", "Docker", "Alembic", "Figma"],
  },
  { name: "Outros conhecimentos", items: ["Inteligência Artificial"] },
] as const;

export const projects: readonly Project[] = [
  {
    id: "stockflow",
    name: "StockFlow Database",
    category: "Banco de dados · Projeto acadêmico",
    description:
      "Banco de dados relacional para controle de produtos, desenvolvido para aplicar conceitos fundamentais de modelagem e manipulação de dados.",
    scope:
      "Inclui criação da tabela de produtos, operações CRUD, consultas com filtros e restrições de integridade. Os scripts e a documentação estão organizados por operação no repositório.",
    technologies: ["PostgreSQL 17", "SQL", "pgAdmin 4", "Git"],
    repositoryUrl: "https://github.com/HerbertsDev/StockFlow-database",
    image: {
      src: "/images/stockflow-linkedin.jpg",
      alt: "Consulta SQL do StockFlow no pgAdmin, com um produto retornado na tabela de resultados",
    },
  },
  {
    id: "simulador-copa",
    name: "Simulador da Copa 2026",
    category: "Python e banco de dados · Projeto de estudo",
    description:
      "Simulador das fases eliminatórias da Copa do Mundo, com geração automática de resultados e registro das partidas.",
    scope:
      "Simula oitavas, quartas, semifinais e final, decide empates nos pênaltis e armazena resultados em SQLite para consultas posteriores em SQL.",
    technologies: ["Python 3", "SQLite", "SQL"],
    repositoryUrl: "https://github.com/HerbertsDev/Simulador-de-Copa-2026",
    image: {
      src: "/images/simulador-copa-github.png",
      alt: "Saída do Simulador da Copa 2026 no terminal, com resultados das fases e Senegal como campeão",
    },
  },
  {
    id: "medicamentos",
    name: "Gerenciamento de Medicamentos",
    category: "Design de interface · Prototipação",
    description:
      "Projeto de interface e experiência do usuário para um aplicativo de gerenciamento de medicamentos.",
    scope:
      "O protótipo apresenta lista de medicamentos do dia, detalhes de dose e horário, cadastro de lembretes e confirmação do registro. É um trabalho de UX/UI, sem aplicativo publicado.",
    technologies: ["Figma", "UX/UI", "Design para iOS"],
    image: {
      src: "/images/medicamentos-prototipo.png",
      alt: "Quatro telas do protótipo iOS: medicamentos do dia, detalhes, cadastro de lembrete e confirmação",
    },
  },
];

// Empresas e períodos informados. Cargos e descrições são opcionais.
export const experiences: readonly Experience[] = [
  {
    company: "Mercado Livre, via Randstad Digital",
    period: "Abril de 2026 — Setembro de 2026",
    role: "Analista de Redes Jr / Suporte de TI",
    description:
      "Investigação de incidentes de rede, acessos e dispositivos em suporte presencial e remoto, com acompanhamento de chamados e SLAs. Colaboração com equipes de infraestrutura e operação, comunicação de diagnósticos e documentação de soluções.",
  },
  {
    company: "Zetheta Algorithms Private Limited",
    period: "Julho de 2026 — Agosto de 2026",
    role: "Desenvolvedor Back-End · Programa remoto por projetos",
    description:
      "Desenvolvimento de componentes de back-end e APIs REST para fluxos de pagamento no projeto Payment Orchestration Layer, utilizando Python, FastAPI e SQL. Organização de entregáveis e documentação técnica em colaboração remota.",
  },
  {
    company: "Foundever · Operação Dell Technologies",
    period: "Abril de 2024 — Fevereiro de 2025",
    role: "Analista de Suporte Técnico N1",
    description:
      "Atendimento a clientes em suporte técnico, investigação de problemas, verificação de garantias e acompanhamento de cada caso até o encaminhamento.",
  },
];

export const certifications: readonly Certification[] = [
  {
    name: "Foundation Design iOS",
    institution: "Mackenzie Open Academy · 24 horas",
    year: "Setembro de 2026",
    url: "/certificados/foundation-design-ios.pdf",
  },
  {
    name: "Payment Orchestration Layer · Back End Developer",
    institution: "Zetheta Algorithms · 15 dias equivalentes",
    year: "Agosto de 2026",
    url: "/certificados/payment-orchestration-zetheta.pdf",
  },
  {
    name: "Projetos de Sistemas de TI",
    institution: "Fundação Bradesco · 15 horas",
    year: "Junho de 2026",
    url: "/certificados/projetos-sistemas-ti-fundacao-bradesco.jpg",
  },
  {
    name: "Programação C# — Módulo IV",
    institution: "Microlins · 16 horas",
    year: "Julho de 2023",
    url: "/certificados/programacao-csharp-modulo-iv-microlins.jpg",
  },
  {
    name: "Banco de Dados com SQL",
    institution: "Microlins · 16 horas",
    year: "Abril de 2023",
    url: "/certificados/banco-dados-sql-microlins.jpg",
  },
  {
    name: "Lógica de Programação",
    institution: "Microlins · 12 horas",
    year: "Abril de 2023",
    url: "/certificados/logica-programacao-microlins.jpg",
  },
];

export const socialLinks = [
  { label: "GitHub", url: profile.githubUrl },
  { label: "LinkedIn", url: profile.linkedinUrl },
].filter((link) => link.url.trim().length > 0);
