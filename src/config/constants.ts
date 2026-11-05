import { Locale, TranslationContent } from '@/types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];


const skillsBase = [
  'Cypress',
  'JUnit 5',
  'Vitest + MSW',
  'PHPUnit',
  'Robot Framework',
  'Playwright',
  'Lighthouse',
  'Hotjar',
  'TypeScript',
  'React',
  'Node.js',
  'PHP',
  'Laravel',
  'Java',
  'Quarkus',
  'Spring Boot',
  'Python',
  'FastAPI',
  'Tailwind CSS',
  'PostgreSQL',
  'MySQL',
  'Docker',
  'Linux',
  'CI/CD',
  'Git'
];

const skillsPt = skillsBase;
const skillsEn = skillsBase;
const skillsEs = skillsBase;

const ONDE_ASSISTIR_DEMO_URL = 'https://youtube.com/watch?v=B2LSCS4lXX8';

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  'pt-BR': {
    sections: {
      about: 'Sobre',
      projects: 'Projetos em Destaque',
      experience: 'Experiência Profissional',
      stack: 'Stack Técnica',
      education: 'Formação',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Camila Wolter',
      role: 'QA Júnior | Desenvolvedora Full Stack',
      nationality: 'Brasileira',
      location: 'Brasil',
      email: 'woltercardoso@gmail.com',
      about: [
        'Sou Desenvolvedora Full Stack e Analista de QA. Construo aplicações robustas de ponta a ponta e garanto a qualidade técnica por meio de código limpo, testes automatizados (Cypress, PHPUnit, JUnit, Vitest; Playwright) e avaliações de usabilidade.',
        'Na Chuva Inc., atuei no desenvolvimento web (PHP/Drupal e Angular), refatoração de queries e na criação de testes unitários, de integração e de regressão visual. No meu TCC, o Onde Assistir, liderei tanto o desenvolvimento Full Stack quanto a auditoria completa de qualidade (Lighthouse, heurísticas de Nielsen e testes com usuários).',
        'Minha formação em Engenharia Hídrica trouxe uma base altamente analítica para resolução de problemas. Busco oportunidades como Desenvolvedora Full Stack ou QA, em vagas remotas, híbridas ou presenciais.'
      ]
    },
    actions: {
      visitProject: 'Visitar projeto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir | Sistema Agregador de Streaming (TCC)',
        url: ONDE_ASSISTIR_DEMO_URL,
        tagline: 'Como validei a qualidade de um agregador de streaming com testes estáticos e dinâmicos.',
        description: 'Plataforma web desenvolvida como Trabalho de Conclusão de Curso para centralizar a busca por títulos de streaming (React, TypeScript, Laravel, PostgreSQL e API TMDb). Conduzi a avaliação de qualidade descrita abaixo.',
        bullets: [
          'Desenvolvimento Full Stack completo: criação de APIs, consumo de dados externos e interfaces responsivas.',
          'Testes estáticos e revisões: matriz de rastreabilidade, refinamento de requisitos e correção prévia de fluxos.',
          'Avaliação de usabilidade e acessibilidade: aplicação de heurísticas de Nielsen, auditorias Lighthouse (86-100) e testes com 9 usuários (SUS médio de 96,8).',
          'Garantia de conformidade com padrões WCAG 2.1 AA para contraste e navegação acessível.'
        ]
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Sistema Full Stack para controle inteligente de produção industrial.',
        description: 'Software de otimização de estoque que utiliza Algoritmo Ganancioso (Greedy Algorithm) para sugerir planos de produção maximizando o faturamento com base nos insumos disponíveis.',
        bullets: [
          'Testes automatizados em três camadas: JUnit 5 no backend, Vitest + MSW no frontend e Cypress (E2E).',
          'Stack robusta: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite e Redux Toolkit.',
          'Simulação em memória de estoque e efetivação de baixa em tempo real.'
        ]
      },
      {
        id: 'finmail-ai',
        title: 'FinMail.ai - Triagem Inteligente de E-mails',
        url: 'https://desafio-email-front.vercel.app/',
        tagline: 'Automação inteligente e classificação de e-mails para o setor financeiro.',
        description: 'Solução full stack desenvolvida para automatizar a leitura, triagem e priorização de um alto volume diário de e-mails, diferenciando solicitações produtivas de mensagens irrelevantes.',
        bullets: [
          'IA e NLP integradas via Hugging Face Inference API (DeBERTa-v3) para análise de intenção e leitura de anexos PDF/TXT.',
          'Backend assíncrono em Python com FastAPI e sistema de resiliência (fallback) por palavras-chave financeiras.',
          'Frontend moderno em React.js, Tailwind CSS v4, Framer Motion e interface Glassmorphism em dark mode.'
        ]
      }
    ],
    experiences: [
      {
        company: '2D Gráfica Expressa',
        location: 'São Lourenço do Sul, RS, Brasil',
        role: 'Assistente de Produção Gráfica',
        period: '07/2026 - 10/2026',
        bullets: [
          'Atendimento de clientes, levantamento de demandas e acompanhamento de ordens de serviço do início ao fim.',
          'Uso do CorelDRAW para ajustes de layout, cores e preparação de arquivos para garantir a fidelidade visual.',
          'Auxílio na confecção de adesivos, cartões de visita, folders, revistas, manuais e execução de impressões e encadernações.'
        ]
      },
      {
        company: 'Chuva Inc.',
        location: 'Campinas, SP, Brasil (Remoto)',
        role: 'Desenvolvedora Web (Estágio)',
        period: '07/2024 - 09/2025',
        bullets: [
          'Garantia de estabilidade com testes unitários (PHPUnit), integração e regressão visual (Cypress) em ambiente Docker/Linux.',
          'Implementação de interfaces dinâmicas, dashboards e formulários complexos utilizando PHP (Drupal) e Angular.',
          'Refatoração de queries SQL e atualizações de banco de dados para consultas mais rápidas e melhor desempenho.'
        ]
      },
      {
        company: 'Farmácia Municipal',
        location: 'São Lourenço do Sul, RS, Brasil',
        role: 'Estagiária',
        period: '09/2023 - 07/2024',
        bullets: [
          'Atendimento direto ao público e orientação aos cidadãos com foco em clareza e empatia.',
          'Dispensação de medicamentos seguindo rigorosos protocolos de saúde pública.',
          'Organização de estoque, controle de validade e gestão eficiente de suprimentos farmacêuticos.'
        ]
      }
    ],
    skills: skillsPt,
    education: {
      institution: 'Instituto Federal Sul-Rio-Grandense (IFSul) & Universidade Federal de Pelotas (UFPel)',
      degree: 'Tecnologia em Sistemas para Internet & Bacharelado em Engenharia Hídrica',
      date: '2026 / 2022',
      languages: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Avançado' }
      ]
    },
    footer: {
      copyright: '© 2026 Camila Wolter',
      role: 'QA Júnior | Desenvolvedora Full Stack'
    }
  },
  en: {
    sections: {
      about: 'About',
      projects: 'Featured Projects',
      experience: 'Professional Experience',
      stack: 'Technical Stack',
      education: 'Education',
      languages: 'Languages'
    },
    hero: {
      name: 'Camila Wolter',
      role: 'Junior QA | Full Stack Developer',
      nationality: 'Brazilian',
      location: 'Brazil',
      email: 'woltercardoso@gmail.com',
      about: [
        'I am a Full Stack Developer and QA Analyst. I build robust end-to-end applications and ensure technical excellence through clean code, automated testing (Cypress, PHPUnit, JUnit, Vitest; Playwright), and usability evaluations.',
        'At Chuva Inc., I worked on web development (PHP/Drupal and Angular), query refactoring, and unit, integration, and visual regression tests. In my capstone project, Onde Assistir, I led both the Full Stack development and the comprehensive quality audit (Lighthouse, Nielsen heuristics, and user testing).',
        'My background in Water Resources Engineering provided a strong analytical foundation for problem-solving. I am looking for opportunities as a Full Stack Developer or QA, in remote, hybrid, or on-site roles.'
      ]
    },
    actions: {
      visitProject: 'Visit project',
      languageLabel: 'Language'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir | Streaming Aggregator System (capstone)',
        url: ONDE_ASSISTIR_DEMO_URL,
        tagline: 'How I validated the quality of a streaming aggregator with static and dynamic testing.',
        description: 'Web platform built as an undergraduate capstone project to centralize the search for streaming titles (React, TypeScript, Laravel, PostgreSQL and the TMDb API). I led the quality evaluation described below.',
        bullets: [
          'Complete Full Stack development: API creation, external data consumption, and responsive interfaces.',
          'Static testing and reviews: traceability matrix, requirements refinement, and proactive flow correction.',
          'Usability and accessibility evaluation: Nielsen heuristics, Lighthouse audits (86-100), and testing with 9 users (average SUS of 96.8).',
          'Ensured compliance with WCAG 2.1 AA standards for contrast and accessible navigation.'
        ]
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Full Stack system for intelligent industrial production control.',
        description: 'Inventory optimization software that utilizes a Greedy Algorithm to suggest production plans maximizing revenue based on available supplies.',
        bullets: [
          'Automated testing in three layers: JUnit 5 on the backend, Vitest + MSW on the frontend, and Cypress (E2E).',
          'Robust stack: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite, and Redux Toolkit.',
          'In-memory inventory simulation and real-time stock deduction handling.'
        ]
      },
      {
        id: 'finmail-ai',
        title: 'FinMail.ai - Smart Email Triage',
        url: 'https://desafio-email-front.vercel.app/',
        tagline: 'Intelligent automation and email classification for the financial sector.',
        description: 'Full stack solution built to automate the reading, triage, and prioritization of a high daily volume of emails, differentiating productive requests from irrelevant messages.',
        bullets: [
          'Integrated AI and NLP via Hugging Face Inference API (DeBERTa-v3) for intent analysis and PDF/TXT attachment processing.',
          'Asynchronous Python backend with FastAPI and a keyword-based resilience fallback system.',
          'Modern frontend built with React.js, Tailwind CSS v4, Framer Motion, and dark mode Glassmorphism UI.'
        ]
      }
    ],
    experiences: [
      {
        company: '2D Gráfica Expressa',
        location: 'São Lourenço do Sul, RS, Brazil',
        role: 'Graphic Production Assistant',
        period: '07/2026 - 10/2026',
        bullets: [
          'Customer service, requirement gathering, and end-to-end service order tracking.',
          'Utilized CorelDRAW for layout adjustments, color calibration, and pre-press file preparation.',
          'Assisted in manufacturing stickers, business cards, folders, magazines, manuals, and managed printing/binding.'
        ]
      },
      {
        company: 'Chuva Inc.',
        location: 'Campinas, SP, Brazil (Remote)',
        role: 'Web Developer (Internship)',
        period: '07/2024 - 09/2025',
        bullets: [
          'Ensured software stability through unit tests (PHPUnit), integration tests, and visual regression testing (Cypress) in Docker/Linux.',
          'Implemented dynamic interfaces, dashboards, and complex forms using PHP (Drupal) and Angular.',
          'Refactored SQL queries and database updates, leading to faster queries and improved application performance.'
        ]
      },
      {
        company: 'Municipal Pharmacy',
        location: 'São Lourenço do Sul, RS, Brazil',
        role: 'Intern',
        period: '09/2023 - 07/2024',
        bullets: [
          'Direct public customer service and citizen guidance with focus on clarity and empathy.',
          'Medication dispensing following strict public health protocols.',
          'Inventory organization, expiration date tracking, and efficient pharmaceutical supply management.'
        ]
      }
    ],
    skills: skillsEn,
    education: {
      institution: 'Federal Institute of Sul-Rio-Grandense (IFSul) & Federal University of Pelotas (UFPel)',
      degree: 'Internet Systems Technology & Bachelor in Water Resources Engineering',
      date: '2026 / 2022',
      languages: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Advanced' }
      ]
    },
    footer: {
      copyright: '© 2026 Camila Wolter',
      role: 'Junior QA | Full Stack Developer'
    }
  },
  es: {
    sections: {
      about: 'Sobre',
      projects: 'Proyectos Destacados',
      experience: 'Experiencia Profesional',
      stack: 'Stack Técnico',
      education: 'Formación',
      languages: 'Idiomas'
    },
    hero: {
      name: 'Camila Wolter',
      role: 'QA Junior | Desarrolladora Full Stack',
      nationality: 'Brasileña',
      location: 'Pelotas, Brasil',
      email: 'woltercardoso@gmail.com',
      about: [
        'Soy Desarrolladora Full Stack y Analista de QA. Construyo aplicaciones robustas de principio a fin y garantizo la calidad técnica a través de código limpio, pruebas automatizadas (Cypress, PHPUnit, JUnit, Vitest; Playwright) y evaluaciones de usabilidad.',
        'En Chuva Inc., trabajé en desarrollo web (PHP/Drupal y Angular), refactorización de consultas y creación de pruebas unitarias, de integración y de regresión visual. En mi trabajo de titulación, Onde Assistir, lideré tanto el desarrollo Full Stack como la auditoría completa de calidad (Lighthouse, heurísticas de Nielsen y pruebas con usuarios).',
        'Mi formación en Ingeniería Hídrica aportó una base altamente analítica para la resolución de problemas. Busco oportunidades como Desarrolladora Full Stack o QA, en puestos remotos, híbridos o presenciales.'
      ]
    },
    actions: {
      visitProject: 'Visitar proyecto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir | Sistema agregador de streaming (titulación)',
        url: ONDE_ASSISTIR_DEMO_URL,
        tagline: 'Cómo validé la calidad de un agregador de streaming con pruebas estáticas y dinámicas.',
        description: 'Plataforma web desarrollada como proyecto de titulación para centralizar la búsqueda de títulos de streaming (React, TypeScript, Laravel, PostgreSQL y la API TMDb). Dirigí la evaluación de calidad descrita a continuación.',
        bullets: [
          'Desarrollo Full Stack completo: creación de APIs, consumo de datos externos e interfaces responsivas.',
          'Pruebas estáticas y revisiones: matriz de trazabilidad, refinamiento de requisitos y corrección previa de flujos.',
          'Evaluación de usabilidad y accesibilidad: aplicación de heurísticas de Nielsen, auditorías Lighthouse (86-100) y pruebas con 9 usuarios (SUS promedio de 96,8).',
          'Garantía de cumplimiento con los estándares WCAG 2.1 AA de contraste y navegación accesible.'
        ]
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Sistema Full Stack para control inteligente de producción industrial.',
        description: 'Software de optimización de inventario que utiliza un Algoritmo Voraz (Greedy Algorithm) para sugerir planes de producción maximizando la facturación.',
        bullets: [
          'Pruebas automatizadas en tres capas: JUnit 5 en backend, Vitest + MSW en frontend y Cypress (E2E).',
          'Stack robusta: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite y Redux Toolkit.',
          'Simulación en memoria de inventario y gestión de rebajas de stock en tiempo real.'
        ]
      },
      {
        id: 'finmail-ai',
        title: 'FinMail.ai - Triaje Inteligente de Correos',
        url: 'https://desafio-email-front.vercel.app/',
        tagline: 'Automatización inteligente y clasificación de correos para el sector financiero.',
        description: 'Solución full stack desarrollada para automatizar la lectura, clasificación y priorización de un alto volumen diario de correos electrónicos.',
        bullets: [
          'IA y NLP integradas mediante Hugging Face Inference API (DeBERTa-v3) para análisis de intención y lectura de archivos PDF/TXT.',
          'Backend asíncrono en Python con FastAPI y sistema de resiliencia (fallback) por palabras clave financieras.',
          'Frontend moderno en React.js, Tailwind CSS v4, Framer Motion e interfaz Glassmorphism en modo oscuro.'
        ]
      }
    ],
    experiences: [
      {
        company: '2D Gráfica Expressa',
        location: 'São Lourenço do Sul, RS, Brasil',
        role: 'Asistente de Producción Gráfica',
        period: '07/2026 - 10/2026',
        bullets: [
          'Atención a clientes, levantamiento de demandas y seguimiento de órdenes de servicio de principio a fin.',
          'Uso de CorelDRAW para ajustes de diseño, colores y preparación de archivos para garantizar fidelidad visual.',
          'Apoyo en la confección de adhesivos, tarjetas de presentación, carpetas, revistas, manuales e impresión/encuadernación.'
        ]
      },
      {
        company: 'Chuva Inc.',
        location: 'Campinas, SP, Brasil (Remoto)',
        role: 'Desarrolladora Web (Pasantía)',
        period: '07/2024 - 09/2025',
        bullets: [
          'Garantía de estabilidad con pruebas unitarias (PHPUnit), de integración y regresión visual (Cypress) en entorno Docker/Linux.',
          'Implementación de interfaces dinámicas, dashboards y formularios complejos utilizando PHP (Drupal) y Angular.',
          'Refactorización de consultas SQL y actualizaciones de base de datos para mejorar el rendimiento de la aplicación.'
        ]
      },
      {
        company: 'Farmacia Municipal',
        location: 'São Lourenço do Sul, RS, Brasil',
        role: 'Pasante',
        period: '09/2023 - 07/2024',
        bullets: [
          'Atención directa al público y orientación a los ciudadanos con enfoque en claridad y empatía.',
          'Dispensación de medicamentos siguiendo estrictos protocolos de salud pública.',
          'Organización de inventario, control de fechas de caducidad y gestión eficiente de suministros farmacéuticos.'
        ]
      }
    ],
    skills: skillsEs,
    education: {
      institution: 'Instituto Federal Sul-Rio-Grandense (IFSul) & Universidade Federal de Pelotas (UFPel)',
      degree: 'Tecnología en Sistemas para Internet & Licenciatura en Ingeniería Hídrica',
      date: '2026 / 2022',
      languages: [
        { name: 'Portugués', level: 'Nativo' },
        { name: 'Inglés', level: 'Avanzado' }
      ]
    },
    footer: {
      copyright: '© 2026 Camila Wolter',
      role: 'QA Junior | Desarrolladora Full Stack'
    }
  }
};

export const normalizeLocale = (value?: string | null): Locale => {
  const lang = (value ?? '').toLowerCase();
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('en')) return 'en';
  return DEFAULT_LOCALE;
};
