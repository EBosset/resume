export interface BiographyIntro {
  paragraphs: string[];
}

export interface BiographyHighlight {
  id: string;
  label: string;
  description: string;
}

export interface BiographySoftSkill {
  id: string;
  title: string;
  description: string;
}

export const BIOGRAPHY_INTRO: BiographyIntro = {
  paragraphs: [
    'Mon parcours s’articule autour d’un fil conducteur : la créativité.',
    'Pendant plus de quinze ans, j’ai dirigé un studio de création matérielle : sculptures, décors et installations sur-mesure pour des marques et des événements.',
    'Cette expertise du geste, des volumes et des matières nourrit aujourd’hui mon travail de design numérique, où je compose des interfaces, des parcours et des systèmes interactifs.',
    'Qu’il s’agisse de façonner une pièce physique ou de prototyper une expérience digitale, l’intention artistique et la logique de conception sont les mêmes.',
  ],
};

export const BIOGRAPHY_HIGHLIGHTS: BiographyHighlight[] = [
  {
    id: 'atelier-ceramique',
    label: '15 ans de studio créatif',
    description: 'Céramique, décors, illustrations & installations sur-mesure.',
  },
  {
    id: 'design-digital',
    label: '10 ans de Design Web',
    description: 'Webdesign, UI/UX et intégration front pour des projets immersifs.',
  },
  {
    id: 'ponts-hybrides',
    label: 'Ponts hybrides',
    description: 'Créer des passerelles entre matière et expériences numériques.',
  },
];

export const BIOGRAPHY_SOFT_SKILLS: BiographySoftSkill[] = [
  {
    id: 'creative',
    title: 'CRÉATIVE',
    description: 'Passe du dessin au code pour matérialiser une idée, quel que soit le support.',
  },
  {
    id: 'autonome',
    title: 'AUTONOME',
    description: 'Capable de piloter un projet de la direction artistique à l’intégration front.',
  },
  {
    id: 'methodique',
    title: 'MÉTHODIQUE',
    description: 'Process clair, documentation rigoureuse, sens du détail.',
  },
  {
    id: 'team-player',
    title: 'ESPRIT D’ÉQUIPE',
    description: 'Co-construit chaque projet avec les parties prenantes pour produire des livrables alignés sur les objectifs.',
  },
  {
    id: 'detail',
    title: 'SENS DU DÉTAIL',
    description: 'Soin apporté aux moindres nuances, du pinceau au pixel.',
  },
];