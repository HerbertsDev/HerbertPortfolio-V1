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
  title: "Desenvolvedor Full Stack",
  email: "herbertdasilvadacruz@outlook.com",
  location: "São Paulo, SP, Brasil",
  availability: "Em busca de uma oportunidade de estágio",
  introduction:
    "Estudante de Análise e Desenvolvimento de Sistemas no Mackenzie. Desenvolvo projetos para colocar meus conhecimentos em prática e avançar na minha formação.",
  about: [
    "Sou Herbert da Silva da Cruz, estudante de Análise e Desenvolvimento de Sistemas na Universidade Presbiteriana Mackenzie.",
    "Minha formação inclui projetos práticos de banco de dados, desenvolvimento de software e design de interfaces. Esses trabalhos fazem parte do meu processo de aprendizado.",
    "Busco uma oportunidade de estágio para contribuir com uma equipe, aprender com outros profissionais e desenvolver minhas habilidades na prática.",
  ],
  interests:
    "Desenvolvimento de interfaces, servidores, aplicações completas e aplicativos móveis.",
  githubUrl: "https://github.com/HerbertsDev",
  linkedinUrl:
    "https://www.linkedin.com/in/herbert-da-silva-da-cruz-b001942b0/",
  photo: undefined as { src: string; alt: string } | undefined,
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
    items: ["Python", "Java", "JavaScript", "Dart", "SQL"],
  },
  { name: "Interfaces web", items: ["Angular", "HTML", "CSS"] },
  { name: "Desenvolvimento de APIs", items: ["FastAPI", "Spring Boot"] },
  { name: "Aplicativos móveis", items: ["Flutter"] },
  { name: "Banco de dados", items: ["PostgreSQL"] },
  { name: "Ferramentas", items: ["Git", "GitHub", "Docker"] },
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
  },
  {
    id: "chamados",
    name: "Gestão de Chamados e Incidentes de TI",
    category: "Aplicação web · Projeto de estudo",
    description:
      "Sistema web para organizar demandas, acompanhar registros operacionais e visualizar indicadores em um painel.",
    scope:
      "O fluxo inclui acesso à plataforma, formulários, tabelas, cartões e gráficos. Os dados são estruturados com arrays e objetos e persistidos localmente no navegador.",
    technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
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
  {
    id: "monitoramento",
    name: "Sistema de Monitoramento de Redes",
    category: "Back-end · Em desenvolvimento",
    description:
      "Proposta de sistema voltado à coleta e ao processamento de dados para acompanhamento de dispositivos e serviços.",
    scope:
      "O projeto aparece no perfil do GitHub com foco em APIs, automação e monitoramento. Não há repositório público para validar funcionalidades concluídas.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS"],
  },
];

// Empresas e períodos informados. Cargos e descrições são opcionais.
export const experiences: readonly Experience[] = [
  {
    company: "Randstad Brasil",
    period: "Atual",
    role: "Suporte técnico e infraestrutura de TI",
  },
  {
    company: "Zetheta Algorithms Private Limited",
    period: "Julho de 2026 — Agosto de 2026",
  },
  { company: "Foundever", period: "Abril de 2024 — Fevereiro de 2025" },
];

export const certifications: readonly Certification[] = [
  {
    name: "Programação C# — Módulo IV",
    institution: "Microlins",
    year: "Julho de 2023",
  },
  {
    name: "Banco de Dados com SQL",
    institution: "Microlins",
    year: "Abril de 2023",
  },
  {
    name: "Lógica de Programação",
    institution: "Microlins",
    year: "Abril de 2023",
  },
];

export const socialLinks = [
  { label: "GitHub", url: profile.githubUrl },
  { label: "LinkedIn", url: profile.linkedinUrl },
].filter((link) => link.url.trim().length > 0);
