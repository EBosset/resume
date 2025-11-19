# Structure du projet

Vue d’ensemble de l’application Angular (standalone components, signals, Angular Material) et du rôle de chaque dossier/fichier principal.

```
resume/
├── DOCS/
│   └── structure.md · documentation interne (ce fichier)
├── public/
│   └── favicon.ico · assets servis tels quels par Angular CLI
├── src/
│   ├── main.ts · bootstrap (enableProdMode + bootstrapApplication)
│   ├── styles.scss · styles globaux, thèmes light/dark, utilitaires sections
│   ├── assets/ · images (services, etc.) référencées par les composants
│   └── app/
│       ├── app.ts · composant racine standalone (signals activeSection, title, etc.)
│       ├── app.html · template shell (sidenav Material + sections)
│       ├── app.scss · styles du shell (layout, sidenav, sections)
│       ├── app.config.ts / app.routes.ts · config Angular (providers, routes standalone)
│       ├── theme.service.ts · service de thème (signal accentColor, mode clair/sombre)
│       ├── components/
│       │   ├── color-switcher/
│       │   │   ├── *.ts|html|scss · switcher d’accent (MatMenu, signals)
│       │   ├── custom-cursor/ · composant fixe qui suit la souris (HostListener)
│       │   └── theme-toggle/ · bouton flottant light/dark (MatIconButton)
│       └── sections/
│           ├── home/
│           │   ├── home-section.component.* · hero principal
│           │   ├── home-header/ · header animé (nom + role)
│           │   └── skills-preview/ · blocs rapides (si activés)
│           ├── services/
│           │   ├── services.component.* · liste + gestion du signal `selected`
│           │   ├── services.data.ts · données des cartes (titre, shortDescription, contenu)
│           │   ├── service-card/ · composant de carte cliquable
│           │   └── service-detail/ · composant détail (modale custom avec backdrop)
│           ├── portfolio/
│           │   ├── portfolio.component.* · section avec onglets + grille centrée
│           │   ├── portfolio.data.ts · projets (disciplines, médias)
│           │   └── portfolio-content-panel/ · affichage d’un projet (media + meta + CTA)
│           ├── biography/
│           │   ├── biography.component.* · orchestrateur de la section biographie
│           │   ├── bio-intro/ · introduction narrative (visuels, sous-titre)
│           │   ├── bio-highlights/ · liste des points clés (badges, timeline courte)
│           │   └── bio-soft-skills/ · texte + SVG « soft skills » (HTTP load + DomSanitizer)
│           └── contact/
│               └── contact.component.* · CTA/contact info (formulaire léger)
│       ├── types/
│       │   └── svg-raw.d.ts · déclaration de modules pour importer des SVG bruts
│       └── sections/
├── angular.json / tsconfig*.json · configuration Angular CLI & TypeScript
├── package.json / package-lock.json · dépendances (Angular 17, Angular Material…)
├── README.md · instructions projet
└── .editorconfig / .vscode/ · configuration d’éditeur

## Notes supplémentaires

- **Standalones & Signals** : chaque composant est standalone (import direct de MatIconModule, etc.). L’état local (service sélectionné, thème) est géré via `signal()`/`computed()` plutôt que via NgRx.
- **Material** : Angular Material est utilisé pour la structure (MatSidenav) et les widgets (MatIcon, MatMenu). Les overlays custom (service-detail) gèrent les `z-index` pour passer devant les toggles.
- **Sections** : dossiers sous `sections/` = sections de la page. Elles partagent classes `.section`, `.section__header`, `.section__inner` définies dans `styles.scss` pour conserver alignement et espacements.
- **Components/** : regroupe les widgets transverses (toggle thème, changeur d’accent, curseur custom) montés dans `app.html` en dehors de `<main>` mais dans `mat-sidenav-content` pour rester dans le même contexte d’empilement.

Ce schéma sert de référence rapide pour savoir où ajouter/modifier un comportement (ex. nouvelle card service → `sections/services/service-card`, ajustement toggle → `components/theme-toggle`).
