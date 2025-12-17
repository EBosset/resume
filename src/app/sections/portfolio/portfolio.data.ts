import de from "@angular/common/locales/de";

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  imageUrl: string;
  link?: string;
  gallery?: string[];
}

export interface PortfolioDiscipline {
  id: 'artiste-plasticienne' | 'webdesigner' | 'dev-web' | 'ui-ux';
  label: string;
  summary?: string;
  projects: PortfolioProject[];
}

export const PORTFOLIO_DISCIPLINES: PortfolioDiscipline[] = [
  {
    id: 'webdesigner',
    label: 'Webdesign',
    summary:'',
    projects: [
      {
        id: 'charte-atelier',
        title: 'Charte graphique – Atelier',
        description:
          'Création de l’identité visuelle et de l’univers graphique d’un atelier associant savoir-faire artisanal et outils numériques.\n \n Travail réalisé en amont du lancement du projet : logo, palette de couleurs, typographie, images et visuels divers, '
          +'hiérarchie des visuels, présentation de la marque.',
        role: 'Logo + Charte graphique',
        stack: ['Illustrator', 'InDesign'],
        imageUrl: '/assets/portfolio/charte-graphique-atelier-terre-pixel.webp',
        gallery: [
          '/assets/portfolio/charte-graphique-atelier-terre-pixel.webp',
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
        ],
      },
      {
        id: 'webdesigner-agence',
        title: 'Site vitrine Agence',
        description:
          'Refonte complète avec hero immersif, carrousel projets et formulaire multi-étapes.',
        role: 'UI design & prototype interactif',
        stack: ['Figma', 'After Effects'],
        link: '',
        imageUrl: '/assets/portfolio/webdesigner-agence.jpg',
        gallery: [
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
        ],
      },
    ],
  },
  {
    id: 'ui-ux',
    label: 'UI / UX',
    summary:
      '',
    projects: [
      {
        id: 'uiux-app-plantes',
        title: 'UI Design — App interne Formation',
        description:
          'Application destinée aux étudiants d’une école de formation (accès restreint, pas d’accès public).\n\n Conception UI complète des composants clés, design system mobile, composants interactifs et maquettes haute fidélité.',
        role: 'UI kit',
        stack: ['Adobe XD', 'Illustrator'],
        link: '',
        imageUrl: '/assets/portfolio/design-composants-application-materia-medica.webp',
        gallery: [
          '/assets/portfolio/design-composants-application-materia-medica.webp',
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
        ],
      },
      {
        id: 'uiux-dating',
        title: 'Application de rencontre (pré-lancement)',
        description:
          'Création des user flows, wireframes et maquettes UI pour l’onboarding et la messagerie.',
        role: 'Lead UX/UI',
        stack: ['Adobe XD', 'Illustrator'],
        link: '',
        imageUrl: '/assets/portfolio/ux-user-journey-app.webp',
        gallery: [
          '/assets/portfolio/ux-user-journey-app.webp',
          '/assets/portfolio/flowchart-login.webp',
          '/assets/portfolio/dating-app-UI-screens-wireflow.webp',
        ],
      },
    ],
  },
  {
    id: 'dev-web',
    label: 'Développement Web',
    summary:
      '',
    projects: [
      {
        id: 'devweb-angular',
        title: 'Application Materia Medica',
        description:
          'Application destinée aux étudiants d’une école de formation (accès restreint, via un lien d’invitation).\n \n Cette application permet de filtrer les plantes par différentes propriétés (famille, principes actifs, parties de la plante, constituants….etc).\n \nSéparation claire frontend/backend\nSystème d’authentification utilisateur\nTableau de bord admin\nRôles',
        role: 'Développement Front End',
        stack: ['Angular','TypeScript','RxJS','standalone components'],
        link: '',
        imageUrl: '/assets/portfolio/materia-medica-mobile-app-login.webp',
        gallery: [
          '/assets/portfolio/materia-medica-mobile-app-login.webp',
          '/assets/portfolio/materia-medica-app-edit-plant-desktop.webp',
          '/assets/portfolio/application-materia-medica-mobile.webp',
        ],
      },
      {
        id: 'devweb-ecommerce',
        title: 'Boutique artisanale',
        description:
          'Site e-commerce headless avec animations micro-interactions, paiement Stripe et gestion de paniers offline.',
        role: 'Front-end lead',
        stack: ['Angular', 'Stripe', 'SCSS'],
        link: 'https://github.com/',
        imageUrl: '/assets/portfolio/webdesigner-agence.jpg',
        gallery: [
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
        ],
      },
    ],
  },
  {
    id: 'artiste-plasticienne',
    label: 'Arts plastiques',
    summary:
      '',
    projects: [      
      {
        id: 'plasticienne-branding-salon',
        title: 'Décor pour l’entreprise Galtié',
        description:
          'Recherches techniques & création d’un décor céramique complet, décliné en 4 coloris, et application sur différentes pièces.\nCollection exposée au salon Nimagine 2013.',
        role: 'Céramique',
        stack: ['Art', 'créativité', 'technique'],
        link: 'https://www.behance.net/',
        imageUrl: '/assets/portfolio/decor-orange-gris-assortiment-pieces.webp',
        gallery: [
          '/assets/portfolio/decor-orange-gris-assortiment-pieces.webp',
          '/assets/portfolio/decor-beige-pourpre-assortiment-pieces.webp',
          '/assets/portfolio/decor-rouge-gris-assortiment-pieces.webp',
          '/assets/portfolio/decor-rouge-turquoise-assortiment-pieces.webp',
        ],
      },
      {
        id: 'production-porcelaine',
        title: 'Collection Porcelaine Salon Nimagine',
        description:
          'Production d’une collection de pièces utilitaires en porcelaine. \n Tournage : Dessin des pièces, calcul du poids de terre imparti à chaque forme de pièce\nCréation & application de 4 gammes de décors\nCuisson ',
        role: 'Céramique',
        stack: ['Direction Artisitique','production de la collection'],
        link: 'https://www.behance.net/',
        imageUrl: '/assets/portfolio/expo-collection-porcelaine-nimagine.webp',
        gallery: [
          '/assets/portfolio/expo-collection-porcelaine-nimagine.webp',
          '/assets/portfolio/webdesigner-agence.jpg',
          '/assets/portfolio/webdesigner-agence.jpg',
        ],
      },
    ],
  },
];
