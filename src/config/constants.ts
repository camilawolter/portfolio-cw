import { Locale, TranslationContent } from '@/types';

export const DEFAULT_LOCALE: Locale = 'pt-BR';

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'pt-BR', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

const skillsPt = [
  'TypeScript',
  'PHP',
  'React',
  'Laravel',
  'Node.js',
  'Java',
  'Quarkus',
  'Spring Boot',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Docker',
  'Linux',
  'CI/CD',
  'Cypress'
];

const skillsEn = [
  'TypeScript',
  'PHP',
  'React',
  'Laravel',
  'Node.js',
  'Java',
  'Quarkus',
  'Spring Boot',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Docker',
  'Linux',
  'CI/CD',
  'Cypress'
];

const skillsEs = [
  'TypeScript',
  'PHP',
  'React',
  'Laravel',
  'Node.js',
  'Java',
  'Quarkus',
  'Spring Boot',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'MySQL',
  'Tailwind CSS',
  'Docker',
  'Linux',
  'CI/CD',
  'Cypress'
];

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
      role: 'Desenvolvedora Full Stack',
      nationality: 'Brasileira',
      location: 'São Lourenço do Sul, Brasil',
      phone: '+55 (53) 991688519',
      email: 'woltercardoso@gmail.com',
      about: [
        'Sou apaixonada por resolver problemas complexos e garantir a excelência e a qualidade final de produtos digitais. Minha trajetória une de forma única a base analítica da Engenharia Hídrica com a expertise técnica em Desenvolvimento Web e Quality Assurance.',
        'Com experiência prática em QA e desenvolvimento, atuo na prevenção de falhas combinando testes manuais, automação (Cypress, PHPUnit, Playwright) e uma visão full-stack sólida (JavaScript/TypeScript, PHP/Laravel, React e Node.js).',
        'Prezo pela estabilidade, pela empatia com o usuário e por entregas que realmente façam a diferença. Estou sempre em busca de aprender novas ferramentas e metodologias que elevem o padrão e tragam eficiência para o dia a dia.'
      ]
    },
    actions: {
      visitProject: 'Visitar projeto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir',
        url: 'https://youtube.com/watch?v=B2LSCS4lXX8',
        tagline: 'Agregador web de streaming para descoberta de títulos.',
        description: 'Plataforma web desenvolvida como Trabalho de Conclusão de Curso para centralizar e facilitar a busca por títulos de streaming de forma ágil.',
        bullets: [
          'Stack principal: React, TypeScript, Laravel, PostgreSQL e consumo da API TMDb.',
          'Arquitetura modular orientada a serviços e estruturação de banco de dados relacional.',
          'Implementação de rotas otimizadas e interface responsiva para melhor experiência do usuário.'
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
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Sistema Full Stack para controle inteligente de produção industrial.',
        description: 'Software de otimização de estoque que utiliza Algoritmo Ganancioso (Greedy Algorithm) para sugerir planos de produção maximizando o faturamento com base nos insumos disponíveis.',
        bullets: [
          'Stack robusta: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite e Redux Toolkit.',
          'Simulação em memória de estoque e efetivação de baixa em tempo real.',
          'Cobertura de testes automatizados com JUnit 5 no backend, Vitest + MSW no frontend e Cypress (E2E).'
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
          'Implementação de interfaces dinâmicas, dashboards e formulários complexos utilizando PHP (Drupal) e Angular.',
          'Refatoração de queries SQL e atualizações de banco de dados para consultas mais rápidas e melhor desempenho.',
          'Garantia de estabilidade com testes unitários (PHPUnit), integração e regressão visual (Cypress) em ambiente Docker/Linux.'
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
      role: 'Desenvolvedora Full Stack'
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
      role: 'Full Stack Developer',
      nationality: 'Brazilian',
      location: 'São Lourenço do Sul, Brazil',
      phone: '+55 (53) 991688519',
      email: 'woltercardoso@gmail.com',
      about: [
        'I am passionate about solving complex problems and ensuring the final excellence and quality of digital products. My journey uniquely bridges the analytical foundation of Water Resources Engineering (UFPel) with technical expertise in Web Development and Quality Assurance.',
        'With hands-on experience in QA and development, I stand on the front line of failure prevention by combining manual testing, automation (Cypress, PHPUnit, Playwright), and a solid full-stack vision (JavaScript/TypeScript, PHP/Laravel, React, and Node.js).',
        'I value stability, user empathy, and deliveries that truly make an impact. I am always eager to learn new tools and methodologies that elevate quality standards and bring efficiency to everyday work.'
      ]
    },
    actions: {
      visitProject: 'Visit project',
      languageLabel: 'Language'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir',
        url: 'https://github.com',
        tagline: 'Web streaming aggregator platform for content discovery.',
        description: 'Web platform developed as an undergraduate capstone project to centralize and simplify searching for streaming titles efficiently.',
        bullets: [
          'Main stack: React, TypeScript, Laravel, PostgreSQL, and TMDb API integration.',
          'Modular service-oriented architecture and robust relational database design.',
          'Implementation of optimized routes and responsive interface for a seamless user experience.'
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
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Full Stack system for intelligent industrial production control.',
        description: 'Inventory optimization software that utilizes a Greedy Algorithm to suggest production plans maximizing revenue based on available supplies.',
        bullets: [
          'Robust stack: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite, and Redux Toolkit.',
          'In-memory inventory simulation and real-time stock deduction handling.',
          'Automated test coverage using JUnit 5 on the backend, Vitest + MSW on the frontend, and Cypress (E2E).'
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
          'Implemented dynamic interfaces, dashboards, and complex forms using PHP (Drupal) and Angular.',
          'Refactored SQL queries and database updates, leading to faster queries and improved application performance.',
          'Ensured software stability through unit tests (PHPUnit), integration tests, and visual regression testing (Cypress) in Docker/Linux.'
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
      role: 'Full Stack Developer'
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
      role: 'Desarrolladora Full Stack',
      nationality: 'Brasileña',
      location: 'São Lourenço do Sul, Brasil',
      phone: '+55 (53) 991688519',
      email: 'woltercardoso@gmail.com',
      about: [
        'Me apasiona resolver problemas complejos y garantizar la excelencia y calidad final de los productos digitales. Mi trayectoria une de forma única la base analítica de la Ingeniería Hídrica (UFPel) con la experiencia técnica en Desarrollo Web y Quality Assurance.',
        'Con experiencia práctica en QA y desarrollo, trabajo en la primera línea de prevención de errores combinando pruebas manuales, automatización (Cypress, PHPUnit, Playwright) y una sólida visión full-stack (JavaScript/TypeScript, PHP/Laravel, React y Node.js).',
        'Valoro la estabilidad, la empatía con el usuario y las entregas que realmente generan impacto. Siempre busco aprender nuevas herramientas y metodologías que eleven el estándar y aporten eficiencia al día a día.'
      ]
    },
    actions: {
      visitProject: 'Visitar proyecto',
      languageLabel: 'Idioma'
    },
    projects: [
      {
        id: 'onde-assistir',
        title: 'Onde Assistir',
        url: 'https://github.com',
        tagline: 'Agregador web de streaming para el descubrimiento de títulos.',
        description: 'Plataforma web desarrollada como proyecto de titulación para centralizar y facilitar la búsqueda de títulos de streaming de forma ágil.',
        bullets: [
          'Stack principal: React, TypeScript, Laravel, PostgreSQL y consumo de la API TMDb.',
          'Arquitectura modular orientada a servicios y diseño robusto de bases de datos relacionales.',
          'Implementación de rutas optimizadas y diseño responsivo para una óptima experiencia de usuario.'
        ]
      },
      {
        id: 'finmail-ai',
        title: 'FinMail.ai - Triaje Inteligente de Cordeos',
        url: 'https://desafio-email-front.vercel.app/',
        tagline: 'Automatización inteligente y clasificación de correos para el sector financiero.',
        description: 'Solución full stack desarrollada para automatizar la lectura, clasificación y priorización de un alto volumen diario de correos electrónicos.',
        bullets: [
          'IA y NLP integradas mediante Hugging Face Inference API (DeBERTa-v3) para análisis de intención y lectura de archivos PDF/TXT.',
          'Backend asíncrono en Python con FastAPI y sistema de resiliencia (fallback) por palabras clave financieras.',
          'Frontend moderno en React.js, Tailwind CSS v4, Framer Motion e interfaz Glassmorphism en modo oscuro.'
        ]
      },
      {
        id: 'factory-manager',
        title: 'Factory Manager - Inventory & Production Optimizer',
        url: 'https://github.com/camilawolter/Autoflex',
        tagline: 'Sistema Full Stack para control inteligente de producción industrial.',
        description: 'Software de optimización de inventario que utiliza un Algoritmo Voraz (Greedy Algorithm) para sugerir planes de producción maximizando la facturación.',
        bullets: [
          'Stack robusta: Java 17+, Quarkus, Hibernate Panache, PostgreSQL, React 18, Vite y Redux Toolkit.',
          'Simulación en memoria de inventario y gestión de rebajas de stock en tiempo real.',
          'Cobertura de pruebas automatizadas con JUnit 5 en backend, Vitest + MSW en frontend y Cypress (E2E).'
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
          'Implementación de interfaces dinámicas, dashboards y formularios complejos utilizando PHP (Drupal) y Angular.',
          'Refactorización de consultas SQL y actualizaciones de base de datos para mejorar el rendimiento de la aplicación.',
          'Garantía de estabilidad con pruebas unitarias (PHPUnit), de integración y regresión visual (Cypress) en entorno Docker/Linux.'
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
      role: 'Desarrolladora Full Stack'
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
