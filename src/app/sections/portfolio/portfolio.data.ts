export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  imageUrl: string;
  link: string;
  gallery?: string[];
}

export interface PortfolioDiscipline {
  id: 'artiste-plasticienne' | 'webdesigner' | 'dev-web' | 'ui-ux';
  label: string;
  summary: string;
  projects: PortfolioProject[];
}

export const PORTFOLIO_DISCIPLINES: PortfolioDiscipline[] = [
  {
    id: 'webdesigner',
    label: 'Webdesign',
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
        gallery: [
          '/assets/portfolio/webdesigner-saas.jpg',
          '/assets/portfolio/webdesigner-saas-wireframe.jpg',
          '/assets/portfolio/webdesigner-saas-mobile.jpg',
        ],
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
        gallery: [
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence-mobile.jpg',
          '/assets/portfolio/webdesigner-agence-styleguide.jpg',
        ],
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
        gallery: [
          '/assets/portfolio/uiux-sante.jpg',
          '/assets/portfolio/uiux-sante-flows.jpg',
          '/assets/portfolio/uiux-sante-mobile.jpg',
        ],
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
        gallery: [
          '/assets/portfolio/uiux-banque.jpg',
          '/assets/portfolio/uiux-banque-kit.jpg',
          '/assets/portfolio/uiux-banque-mobile.jpg',
        ],
      },
    ],
  },
  {
    id: 'dev-web',
    label: 'Développement Web',
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
        gallery: [
          '/assets/portfolio/dev-dashboard.jpg',
          '/assets/portfolio/dev-dashboard-dark.jpg',
          '/assets/portfolio/dev-dashboard-mobile.jpg',
        ],
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
        gallery: [
          '/assets/portfolio/dev-boutique.jpg',
          '/assets/portfolio/dev-boutique-product.jpg',
          '/assets/portfolio/dev-boutique-checkout.jpg',
        ],
      },
    ],
  },
  {
    id: 'artiste-plasticienne',
    label: 'Arts plastiques',
    summary:
      'Décors peints, fresques, installations artisanales et identités visuelles appliquées à des supports physiques.',
    projects: [      
      {
        id: 'plasticienne-branding-salon',
        title: 'Identité pour salon créatif',
        description:
          'Création d’un univers graphique complet (logo, signalétique, goodies textile) pour un événement local.',
        role: 'Branding & déclinaisons print',
        stack: ['Illustrator', 'Photoshop'],
        imageUrl: '/assets/portfolio/graphiste-salon.jpg',
        link: 'https://www.behance.net/',
        gallery: [
          '/assets/portfolio/graphiste-salon.jpg',
          '/assets/portfolio/graphiste-salon-detail-1.jpg',
          '/assets/portfolio/graphiste-salon-detail-2.jpg',
        ],
      },
      {
        id: 'plasticienne-atelier-ceramique',
        title: 'Atelier Terre & Pixels',
        description:
          'Logo & charte Graphique, identité visuelle.',
        role: 'Direction artistique & design',
        stack: ['Illustrator', 'InDesign'],
        imageUrl: '/assets/portfolio/atelier-inclusion-sociale-artisanat-et-numerique.png',
        link: 'https://www.behance.net/',
        gallery: [
          '/assets/portfolio/atelier-inclusion-sociale-artisanat-et-numerique.png',
          '/assets/portfolio/atelier-inclusion-sociale-artisanat-et-numerique-2.png',
          '/assets/portfolio/atelier-inclusion-sociale-artisanat-et-numerique-3.png',
        ],
      },
    ],
  },
];
