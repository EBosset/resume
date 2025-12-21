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
  id: 'webdesigner-uiux' | 'dev-web' | 'design-craft';
  label: string;
  summary?: string;
  projects: PortfolioProject[];
}

export const PORTFOLIO_DISCIPLINES: PortfolioDiscipline[] = [
  {
    id: 'webdesigner-uiux',
    label: 'Webdesigner UI/UX',
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
      {
        id: 'uiux-app-plantes',
        title: 'UI Design — App interne Formation',
        description:
          'Application destinée aux étudiants d’une école de formation (accès restreint, pas d’accès public).\n\n Conception UI complète des composants clés de l’application.',
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
    ],
  },
  {
    id: 'dev-web',
    label: 'Développeuse Web',
    summary:
      '',
    projects: [
      {
        id: 'devweb-angular',
        title: 'Application Materia Medica',
        description:
          'Application destinée aux étudiants d’une école de formation (accès restreint, via un lien d’invitation).\n \n Cette application permet de filtrer les plantes par différentes propriétés (famille, principes actifs, parties de la plante, constituants….etc).\n \n ● Séparation claire frontend/backend\n ● Système d’authentification utilisateur\n ● Tableau de bord admin\nRôles',
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
        id: 'wordpress',
        title: 'WPM (wpmanager)',
        description:
          'Outil Open source pour configurer, installer et servir des projets WordPress en un clin d’œil, sans Apache.\n \n ● Plus besoin d’installer PHP/MySQL/WP‑CLI sur l’OS\n ● Un simple fichier compose.example.yaml à copier/configurer\n ● Base MySQL persistée dans un volume Docker -db_data-\n ● WordPress dispo directement sur http://localhost:8000\n ● Environnement reproductible sur n’importe quelle machine (Docker Desktop)',
        role: 'Front-end lead',
        stack: ['Angular', 'Stripe', 'SCSS'],
        link: 'https://github.com/EBosset/wpmanager',
        imageUrl: '/assets/portfolio/wordpress-manager-installer-configurer-projets-wordpress.webp',
        gallery: [
          '/assets/portfolio/wordpress-manager-installer-configurer-projets-wordpress.webp',          
        ],
      },
      {
        id: 'angular-image-cropper',
        title: 'Cropper d’image Angular',
        description:
          'Cropper d’image Angular Open source : dialog standalone, compression intégrée, export en base64.\n\n● Ciblé “dialog Material” prêt à l’emploi\n→ Composant standalone pensé pour être ouvert via MatDialog, avec une API claire (Inputs/Outputs) et un flux simple : ouvrir le dialog, écouter les events, récupérer l’image.\n\n● API propre & moderne\n→ OnPush, compression déportée dans un service, Inputs typés (ratio, taille, compression) et Outputs simples, avec un event enrichi (width / height / taille estimée).\n\n● UX, accessibilité & theming pris en compte\n→ Attributs ARIA sur le dialog, boutons accessibles au clavier, theming via variables CSS (facile à intégrer dans n’importe quel design system).',
        role: 'Développement Front End',
        stack: ['Angular', 'TypeScript', 'SCSS'],
        link: 'https://github.com/EBosset/ngx-img-cropper-standalone',
        imageUrl: '/assets/portfolio/angular-cropper-demo.gif',
        gallery: [
          '/assets/portfolio/angular-cropper-demo.gif',                   
        ],
      },
    ],
  },
  {
    id: 'design-craft',
    label: 'Design & Craft',
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
        link: '',
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
        link: '',
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
