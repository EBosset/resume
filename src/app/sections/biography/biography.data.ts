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
    'Pendant plus de quinze ans, j’ai exercé le métier de céramiste, façonnant la matière pour transformer une idée en une forme tangible.',
    'Par la suite, j’ai choisi d’explorer un autre univers : le design numérique. Loin d’être une rupture, cette orientation est restée dans la continuité de ma démarche créative.',
    'La terre et l’écran sont deux supports différents, mais l’intention artistique et la logique de conception sont les mêmes.',
  ],
};

export const BIOGRAPHY_HIGHLIGHTS: BiographyHighlight[] = [
  {
    id: 'atelier-ceramique',
    label: '15 ans d’atelier',
    description: 'Céramique, décors, installations artisanales sur-mesure.',
  },
  {
    id: 'design-digital',
    label: 'Design Web',
    description: 'Webdesign, UI/UX et intégration front pour des projets immersifs.',
  },
  {
    id: 'ponts-hybrides',
    label: 'Ponts hybrides',
    description: 'Créer des passerelles entre artisanat et expériences numériques.',
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