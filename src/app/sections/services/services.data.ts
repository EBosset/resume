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
    imageUrl: '/assets/services/img.jpg',
    content: `
Je conçois des identités visuelles efficaces, esthétiques et cohérentes : logos, chartes graphiques, plaquettes, cartes de visite et supports print.\n
J’imagine des maquettes desktop et mobile structurées par une hiérarchie visuelle maîtrisée, un rythme de sections harmonieux, des traitements 
typographiques soignés, ainsi que des CTA et variantes responsive.\n
Chaque interface est pensée pour être moderne, engageante, orientée conversion et parfaitement alignée avec votre marque.

    `,
    icon: 'web',
  },
  {
    id: 'ui-ux',
    title: 'UI / UX',
    shortDescription: `Expériences intuitives, centrées utilisateur, pensées pour performer.`,
    imageUrl: '/assets/services/img.jpg',
    content: `
J’accompagne vos projets depuis l’exploration UX (analyse des besoins utilisateurs, parcours, wireframes)
jusqu’à la création d’un UI kit complet incluant une bibliothèque de composants, leurs états et micro-interactions.\n
Mon objectif : concevoir des expériences simples, accessibles et fidèles à votre marque.\n
Grâce à la recherche, aux prototypes interactifs et aux tests, je construis des parcours intuitifs et performants, 
pensés pour convertir efficacement et prêts à être livrés au développement.
    `,
    icon: 'dashboard_customize',
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    shortDescription: `Intégrations modernes, rapides et accessibles pour des sites fiables.`,
    imageUrl: '/assets/services/img.jpg',
    content: `
J’intègre vos maquettes avec un front-end moderne, propre et performant, en choisissant les technologies les plus adaptées aux besoins du projet.\n
Je conçois des composants autonomes, un style system maintenable et des animations légères pour garantir une expérience fluide sur tous les supports.\n
Optimisation, responsive, accessibilité et bonnes pratiques front-end : votre site est rapide, fiable et parfaitement fidèle à votre design.   `,
    icon: 'code',
  },
  {
    id: 'artiste-plasticienne',
    title: 'Arts plastiques',
    shortDescription: `Création de décors uniques et sur-mesure, adaptés à tous vos supports physiques.`,
    imageUrl: '/assets/services/img.jpg',
    content: `
Je crée des univers tangibles : fresques murales, vitrines, objets peints, textiles, motifs, textures ou installations événementielles.\n
Chaque décor est original, sur-mesure et pensé pour révéler la matière, l’espace et votre univers.\n
J’assure également la direction artistique et la charte graphique associée afin de garantir la cohérence entre vos supports physiques
 et numériques, du motif à l’univers visuel final.\n
    `,
    icon: 'brush',
  },
];