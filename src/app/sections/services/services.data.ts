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
    shortDescription: 'Création de visuels forts pour votre identité et vos supports de communication.',
    imageUrl: '/assets/services/graphiste.jpg',
    content: `
Je conçois des visuels qui traduisent l’ADN de votre marque : affiches, flyers, bannières, visuels pour les réseaux sociaux, supports print ou digitaux.

Je vous accompagne sur la construction d’un univers graphique cohérent : choix des couleurs, typographies, textures, compositions… afin que chaque support soit identifiable au premier regard et serve vos objectifs de communication.
    `,
    icon: 'brush',
  },
  {
    id: 'webdesigner',
    title: 'Webdesigner',
    shortDescription: 'Maquettes de sites et landing pages claires, modernes et orientées conversion.',
    imageUrl: '/assets/services/webdesign.jpg',
    content: `
Je conçois l’architecture visuelle de vos pages web : structure des sections, hiérarchie des informations, mise en avant des messages clés et des appels à l’action.

Mon objectif : des interfaces à la fois esthétiques et efficaces, qui guident naturellement l’utilisateur vers l’essentiel et favorisent l’engagement, sur desktop comme sur mobile.
    `,
    icon: 'web',
  },
  {
    id: 'dev-web',
    title: 'Développeuse Web',
    shortDescription: 'Intégration et développement front-end modernes, adaptés à chaque projet.',
    imageUrl: '/assets/services/frontend.jpg',
    content: `
J’intègre vos maquettes en front-end en choisissant les technologies les plus pertinentes selon le contexte (framework, outil ou stack existant), en veillant à la qualité du code, à la performance, au responsive et à l’accessibilité.

Je développe des composants réutilisables, des micro‑interactions et des animations maîtrisées pour proposer une expérience fluide, cohérente et agréable à utiliser au quotidien.
    `,
    icon: 'code',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX',
    shortDescription: 'Conception d’expériences centrées utilisateur, des parcours aux interfaces finales.',
    imageUrl: '/assets/services/ui-ux.jpg',
    content: `
J’interviens sur la réflexion UX (parcours, scénarios, architecture de l’information, wireframes) et sur la couche UI (système de composants, états, micro‑interactions).

L’objectif : concevoir des parcours simples et intuitifs, adaptés à vos utilisateurs et à vos contraintes, tout en mettant en valeur la personnalité de votre marque.
    `,
    icon: 'dashboard_customize',
  },
];