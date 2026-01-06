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
    id: 'webdesigner-uiux',
    title: 'Webdesign UI/UX',
    shortDescription: `Logos, chartes graphiques et interfaces modernes, pensés pour votre marque et vos utilisateurs.`,
    imageUrl: 'assets/services/webdesign-logo-charte-graphique-ui-ux.webp',
    content: `
WEBDESIGN / IDENTITÉ VISUELLE\n
Je conçois des identités visuelles cohérentes et impactantes : logo, charte graphique, choix typographiques et palettes, ainsi que les supports clés.
Je décline ensuite cette direction sur des maquettes web modernes (desktop & mobile), avec une hiérarchie claire, des sections lisibles et des CTA efficaces.\n
UI / UX\n
J’accompagne vos projets depuis l’exploration UX (analyse des besoins, parcours, wireframes) jusqu’à la création d’un UI kit complet.
Je structure des composants, leurs états et micro-interactions, pour livrer un design prêt à intégrer, accessible et performant.\n
Mon objectif : une expérience fluide, alignée avec votre marque et orientée conversion.
    `,
    icon: 'dashboard_customize',
  },
  {
    id: 'dev-web',
    title: 'Développement Web',
    shortDescription: `Intégrations modernes, rapides et accessibles pour des sites fiables.`,
    imageUrl: 'assets/services/developpement-web-front-end-moderne-performant.webp',
    content: `
J’intègre vos maquettes avec un front-end moderne, propre et performant, en choisissant les technologies les plus adaptées aux besoins du projet.\n
Je conçois des composants autonomes, un style system maintenable et des animations légères pour garantir une expérience fluide sur tous les supports.\n
Optimisation, responsive, accessibilité et bonnes pratiques front-end : votre site est rapide, fiable et parfaitement fidèle à votre design.   `,
    icon: 'code',
  },
  {
    id: 'design-craft',
    title: 'Making',
    shortDescription: `Création de décors uniques et sur-mesure, adaptés à tous vos supports physiques.`,
    imageUrl: 'assets/services/maker-decors-formes-matieres.webp',
    content: `
Je crée des univers tangibles : fresques murales, vitrines, objets peints, textiles, motifs, textures ou installations événementielles.\n
Chaque décor est original, sur-mesure et pensé pour révéler la matière, l’espace et votre univers.\n
J’assure également la direction artistique et la charte graphique associée afin de garantir la cohérence entre vos supports physiques et numériques, du motif à l’univers visuel final.\n
    `,
    icon: 'brush',
  },
];