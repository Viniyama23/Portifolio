/* ==========================================================================
   data/projects.js — lista de projetos exibidos nos cards.
   Para adicionar um projeto, copie um objeto e preencha os campos.

   Campos:
   - title       nome do projeto
   - kind        contexto (TCC, Checkpoint FIAP, Estudo...)
   - description texto curto, 1 a 3 frases
   - tags        tecnologias usadas
   - categories  filtros: "web" | "ia" | "automacao" | "estudos"
   - link        URL do repositório (ou null, se ainda não houver)
   - featured    true para destacar com ★
   ========================================================================== */

window.PORTFOLIO_PROJECTS = [
  {
    title: "Axion Tech",
    kind: "TCC · FIAP",
    description:
      "SaaS que usa IA para montar um ERP sob medida a partir da descrição do negócio em linguagem natural. Atuo como full-stack, com telas em React, chat com IA e páginas de perfil e assinatura.",
    tags: ["React", "TypeScript", "Vite", "SCSS", "Gemini"],
    categories: ["web", "ia"],
    link: "https://github.com/Pontessxx/Axion_REACTWEB",
    featured: true,
  },
  {
    title: "SkyGuard",
    kind: "Global Solution · FIAP",
    description:
      "Robô UiPath que monitora focos de incêndio no Brasil com a API NASA FIRMS e dados de clima da OpenWeather, exibe um painel e preenche formulários do Google automaticamente.",
    tags: ["UiPath", "RPA", "Python", "APIs"],
    categories: ["automacao"],
    link: null,
    featured: true,
  },
  {
    title: "LLM local na GPU",
    kind: "Checkpoint · FIAP",
    description:
      "Uso de uma LLM local rodando na GPU, com testes de diferentes parâmetros, avaliação das respostas e um frontend para enviar prompts.",
    tags: ["Python", "LLM", "CUDA", "GPU"],
    categories: ["ia"],
    link: "https://github.com/Viniyama23/CP2-CP3---IA",
    featured: false,
  },
  {
    title: "Visão computacional em vídeo",
    kind: "Checkpoint · FIAP",
    description:
      "Pipeline que combina YOLO (detecção), U-Net (segmentação) e SlowFast (reconhecimento de ação) e sobrepõe as três saídas no mesmo vídeo.",
    tags: ["Python", "YOLO", "U-Net", "SlowFast"],
    categories: ["ia"],
    link: null,
    featured: false,
  },
  {
    title: "Bio-Orbit Labs",
    kind: "Automação · FIAP",
    description:
      "Automação UiPath que acompanha a posição orbital da ISS pela API Open Notify, registra os dados em Excel e envia alertas por e-mail via Gmail SMTP.",
    tags: ["UiPath", "RPA", "API REST", "Excel"],
    categories: ["automacao"],
    link: null,
    featured: false,
  },
  {
    title: "blog",
    kind: "Estudo",
    description: "Blog feito em HTML e CSS como exercício de estrutura e estilo de páginas.",
    tags: ["HTML", "CSS"],
    categories: ["web", "estudos"],
    link: "https://github.com/Viniyama23/blog",
    featured: false,
  },
  {
    title: "javascript",
    kind: "Estudo",
    description: "Exercícios de JavaScript no navegador, com manipulação de páginas HTML.",
    tags: ["JavaScript", "HTML"],
    categories: ["web", "estudos"],
    link: "https://github.com/Viniyama23/javascript",
    featured: false,
  },
  {
    title: "aula-python",
    kind: "Estudo",
    description: "Exercícios e práticas das aulas de Python.",
    tags: ["Python"],
    categories: ["estudos"],
    link: "https://github.com/Viniyama23/aula-python",
    featured: false,
  },
  {
    title: "aula-git",
    kind: "Estudo",
    description: "Prática de versionamento com Git: commits, branches e repositórios remotos.",
    tags: ["Git"],
    categories: ["estudos"],
    link: "https://github.com/Viniyama23/aula-git",
    featured: false,
  },
];

/* Filtros exibidos acima dos cards (o primeiro mostra tudo) */
window.PORTFOLIO_FILTERS = [
  { id: "all", label: "Todos" },
  { id: "web", label: "Web" },
  { id: "ia", label: "IA e dados" },
  { id: "automacao", label: "Automação" },
  { id: "estudos", label: "Estudos" },
];
