export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
  icon: string; // Angular Material icon name
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'graphiste',
    title: 'Graphiste',
    shortDescription: 'Création de visuels forts pour ton identité et tes supports de communication.',
    imageUrl: '/assets/services/graphiste.jpg',
    content: `
J’imagine et conçois des visuels qui racontent quelque chose de toi ou de ta marque : affiches, flyers, bannières, visuels pour les réseaux sociaux, supports print ou digitaux.

Je t’aide à trouver un univers graphique cohérent : choix des couleurs, typographies, textures, compositions… pour que chaque support soit reconnaissable au premier coup d’œil.
    `,
    icon: 'brush',
  },
  {
    id: 'webdesigner',
    title: 'Webdesigner',
    shortDescription: 'Maquettes de sites et landing pages claires, modernes et efficaces.',
    imageUrl: '/assets/services/webdesign.jpg',
    content: `
Je conçois l’architecture visuelle de tes pages web : structure des sections, hiérarchie des informations, mise en avant des appels à l’action.

L’objectif : des interfaces attractives mais surtout lisibles, qui guident naturellement l’utilisateur vers l’essentiel, sur desktop comme sur mobile.
    `,
    icon: 'web',
  },
  {
    id: 'dev-web',
    title: 'Développeuse Web',
    shortDescription: 'Intégration et développement front-end avec Angular et SCSS.',
    imageUrl: '/assets/services/frontend.jpg',
    content: `
J’intègre tes maquettes en HTML, CSS/SCSS et Angular, en veillant à la performance, au responsive et à l’accessibilité.

Je crée des composants réutilisables, des animations subtiles et des interactions fluides pour que ton site soit agréable à utiliser, pas seulement à regarder.
    `,
    icon: 'code',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX',
    shortDescription: 'Conception d’expériences centrées utilisateur, des wireframes aux interfaces finales.',
    imageUrl: '/assets/services/ui-ux.jpg',
    content: `
Je t’accompagne sur la réflexion UX (parcours, architecture de l’information, wireframes) et sur la couche UI (design d’interface, composants, états, micro-interactions).

Le but : créer des parcours simples et intuitifs, qui respectent les usages tout en mettant en valeur ta singularité.
    `,
    icon: 'dashboard_customize',
  },
];