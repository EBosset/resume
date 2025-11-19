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

const PORTFOLIO_ASSETS = [
  '/assets/portfolio/atelier-inclusion-sociale-artisanat-et-numerique.png',
  '/assets/portfolio/webdesigner-agence.jpg',
  '/assets/portfolio/webdesigner-saas.jpg',
  '/assets/portfolio/webdesigner-saas-wireframe.jpg',
  '/assets/portfolio/webdesigner-saas-mobile.jpg',
];

const randomAsset = (): string =>
  PORTFOLIO_ASSETS[Math.floor(Math.random() * PORTFOLIO_ASSETS.length)];

const buildGallery = (size = 3): string[] =>
  Array.from({ length: size }, () => randomAsset());

const randomMedia = (size?: number) => {
  const gallery = buildGallery(size);
  return {
    imageUrl: gallery[0],
    gallery,
  } satisfies Pick<PortfolioProject, 'imageUrl' | 'gallery'>;
};

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
        link: 'https://www.behance.net/',
        ...randomMedia(),
      },
      {
        id: 'webdesigner-agence',
        title: 'Site vitrine Agence',
        description:
          'Refonte complète avec hero immersif, carrousel projets et formulaire multi-étapes.',
        role: 'UI design & prototype interactif',
        stack: ['Figma', 'After Effects'],
        link: 'https://www.behance.net/',
        ...randomMedia(),
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
        link: 'https://www.behance.net/',
        ...randomMedia(),
      },
      {
        id: 'uiux-banque',
        title: 'Portail bancaire selfcare',
        description:
          'Ateliers co-design, tests utilisateurs et bibliothèque de composants responsive.',
        role: 'Lead UX/UI',
        stack: ['Figma', 'Storybook'],
        link: 'https://www.behance.net/',
        ...randomMedia(),
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
        link: 'https://github.com/',
        ...randomMedia(),
      },
      {
        id: 'devweb-ecommerce',
        title: 'Boutique artisanale',
        description:
          'Site e-commerce headless avec animations micro-interactions, paiement Stripe et gestion de paniers offline.',
        role: 'Front-end lead',
        stack: ['Angular', 'Stripe', 'SCSS'],
        link: 'https://github.com/',
        ...randomMedia(),
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
        link: 'https://www.behance.net/',
        ...randomMedia(),
      },
      {
        id: 'plasticienne-atelier-ceramique',
        title: 'Atelier Terre & Pixels',
        description:
          'Logo & charte Graphique, identité visuelle.',
        role: 'Direction artistique & design',
        stack: ['Illustrator', 'InDesign'],
        link: 'https://www.behance.net/',
        ...randomMedia(),
      },
    ],
  },
];
