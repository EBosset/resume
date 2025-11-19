export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  imageUrl: string;
  link: string;
}

export interface PortfolioDiscipline {
  id: 'graphiste' | 'webdesigner' | 'dev-web' | 'ui-ux';
  label: string;
  summary: string;
  projects: PortfolioProject[];
}

export const PORTFOLIO_DISCIPLINES: PortfolioDiscipline[] = [
  {
    id: 'graphiste',
    label: 'Graphiste',
    summary:
      'Identités visuelles, décors sur mesure et supports imprimés ou physiques pour des marques et ateliers.',
    projects: [
      {
        id: 'graphiste-atelier-ceramique',
        title: 'Atelier Terre & Couleurs',
        description:
          'Décors de céramique, packagings et supports print cohérents pour une collection capsule artisanale.',
        role: 'Direction artistique & illustrations',
        stack: ['Illustrator', 'Procreate', 'InDesign'],
        imageUrl: '/assets/portfolio/graphiste-atelier.jpg',
        link: 'https://www.behance.net/',
      },
      {
        id: 'graphiste-branding-salon',
        title: 'Identité pour salon créatif',
        description:
          'Création d’un univers graphique complet (logo, signalétique, goodies textile) pour un événement local.',
        role: 'Branding & déclinaisons print',
        stack: ['Illustrator', 'Photoshop'],
        imageUrl: '/assets/portfolio/graphiste-salon.jpg',
        link: 'https://www.behance.net/',
      },
    ],
  },
  {
    id: 'webdesigner',
    label: 'Webdesigner',
    summary:
      'Maquettes hautement convertissantes, orientées storytelling et optimisation des parcours utilisateurs.',
    projects: [
      {
        id: 'webdesigner-saas',
        title: 'Landing SaaS Fintech',
        description:
          'Structure modulaire, sections storytelling et CTA clairs pour une solution SaaS B2B.',
        role: 'Wireframes + UI haute-fidélité',
        stack: ['Figma', 'FigJam'],
        imageUrl: '/assets/portfolio/webdesigner-saas.jpg',
        link: 'https://www.behance.net/',
      },
      {
        id: 'webdesigner-agence',
        title: 'Site vitrine Agence',
        description:
          'Refonte complète avec hero immersif, carrousel projets et formulaire multi-étapes.',
        role: 'UI design & prototype interactif',
        stack: ['Figma', 'After Effects'],
        imageUrl: '/assets/portfolio/webdesigner-agence.jpg',
        link: 'https://www.behance.net/',
      },
    ],
  },
  {
    id: 'dev-web',
    label: 'Développeuse Web',
    summary:
      'Intégration front-end moderne (Angular, animations accessibles, performance) sur projets sur-mesure.',
    projects: [
      {
        id: 'devweb-dashboard',
        title: 'Dashboard analytique',
        description:
          'Composants Angular standalone, charts dynamiques et theming custom pour une plateforme analytique.',
        role: 'Développement front & design system',
        stack: ['Angular', 'RxJS', 'Nx'],
        imageUrl: '/assets/portfolio/dev-dashboard.jpg',
        link: 'https://github.com/',
      },
      {
        id: 'devweb-ecommerce',
        title: 'Boutique artisanale',
        description:
          'Site e-commerce headless avec animations micro-interactions, paiement Stripe et gestion de paniers offline.',
        role: 'Front-end lead',
        stack: ['Angular', 'Stripe', 'SCSS'],
        imageUrl: '/assets/portfolio/dev-boutique.jpg',
        link: 'https://github.com/',
      },
    ],
  },
  {
    id: 'ui-ux',
    label: 'UI / UX',
    summary:
      'Recherche utilisateur, prototypes interactifs et design systems scalables pour produits digitaux.',
    projects: [
      {
        id: 'uiux-app-sante',
        title: 'Application santé',
        description:
          'Sprint UX, user journey et UI inclusive pour une app de suivi patient multi-profils.',
        role: 'UX research + UI kit',
        stack: ['Figma', 'Maze', 'Notion'],
        imageUrl: '/assets/portfolio/uiux-sante.jpg',
        link: 'https://www.behance.net/',
      },
      {
        id: 'uiux-banque',
        title: 'Portail bancaire selfcare',
        description:
          'Ateliers co-design, tests utilisateurs et bibliothèque de composants responsive.',
        role: 'Lead UX/UI',
        stack: ['Figma', 'Storybook'],
        imageUrl: '/assets/portfolio/uiux-banque.jpg',
        link: 'https://www.behance.net/',
      },
    ],
  },
];
