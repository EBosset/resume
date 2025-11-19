export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  content: string;
  icon: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'webdesign',
    title: 'Webdesign',
    shortDescription: `Création d'identités visuelles fortes et interfaces modernes qui valorisent votre marque.`,
    imageUrl: '/assets/services/webdesign.jpg',
    content: `
Je conçois l’architecture visuelle de vos pages : hiérarchie des informations, rythme des sections, traitements typographiques, CTA et variantes responsive. Je travaille vos messages clés (hero, bénéfices, social proof) pour créer des interfaces esthétiques, cohérentes avec votre identité et orientées conversion.
    `,
    icon: 'web',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX',
    shortDescription: `Expériences intuitives, centrées utilisateur, pensées pour performer.`,
    imageUrl: '/assets/services/ui-ux.jpg',
    content: `
J’accompagne vos projets depuis la phase d’exploration UX (interviews, parcours, wireframes) jusqu’à la définition d’un langage UI complet (bibliothèque de composants, états, micro-interactions). L’objectif : des expériences simples, accessibles et fidèles à votre marque, prêtes à être livrées au développement.
    `,
    icon: 'dashboard_customize',
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    shortDescription: `Intégrations modernes, rapides et accessibles pour des sites fiables.`,
    imageUrl: '/assets/services/frontend.jpg',
    content: `
J’intègre vos maquettes en Angular ou en stack front équivalente, en privilégiant des composants standalone, un style system maintenable et des animations légères. Je veille aux performances, au responsive, à l’accessibilité et à la maintenabilité du code pour livrer une expérience fluide sur tous les supports.
    `,
    icon: 'code',
  },
  {
    id: 'artiste-plasticienne',
    title: 'Arts plastiques',
    shortDescription: `Création de décors uniques et sur-mesure, adaptés à tous vos supports physiques.`,
    imageUrl: '/assets/services/graphiste.jpg',
    content: `
Je crée des univers tangibles : fresques murales, vitrines, objets peints, textiles ou installations événementielles. J’assure également la direction artistique et la charte graphique associée pour garantir la cohérence entre vos supports physiques et digitaux, du motif à la scénographie complète.
    `,
    icon: 'brush',
  },
];