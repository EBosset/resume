 # Structure du projet
 
 Vue d’ensemble de l’application Angular (standalone components, signals, Angular Material) et du rôle de chaque dossier/fichier principal.
 
 ```
 resume/
 ├── DOCS/
 │   └── structure.md · documentation interne (ce fichier)
 ├── public/
 │   └── favicon.ico · assets servis tels quels par Angular CLI
 ├── src/
 │   ├── index.html · page HTML hôte
 │   ├── main.ts · bootstrap (bootstrapApplication)
 │   ├── styles.scss · styles globaux, thèmes light/dark, utilitaires sections
 │   ├── assets/ · images et fichiers statiques référencés par les composants
 │   │   ├── biography/ · assets biographie (SVG soft skills, etc.)
 │   │   ├── cv/ · CV PDF (ex: /assets/cv/...)
 │   │   ├── imgs/ · images diverses (ex: dots, etc.)
 │   │   ├── portfolio/ · médias portfolio (webp, jpg, gif…)
 │   │   └── services/ · images de la section services (webp…)
 │   ├── types/
 │   │   └── svg-raw.d.ts · déclaration TS pour import de SVG bruts
 │   └── app/
 │       ├── app.ts · composant racine standalone (shell, logique globale)
 │       ├── app.html · template shell (sidenav Material + sections)
 │       ├── app.scss · styles du shell (layout, sidenav, sections)
 │       ├── app.config.ts · config Angular (providers)
 │       ├── app.routes.ts · routes standalone
 │       ├── theme.service.ts · service de thème (mode clair/sombre, accent color, etc.)
 │       ├── components/ · composants transverses réutilisables
 │       │   ├── color-switcher/
 │       │   │   └── color-switcher.component.* · switcher d’accent (signals)
 │       │   ├── custom-cursor/
 │       │   │   └── custom-cursor.component.* · curseur custom (écoute souris)
 │       │   └── theme-toggle/
 │       │       └── theme-toggle.component.* · bouton flottant light/dark
 │       └── sections/ · sections de la page (one-page)
 │           ├── biography/
 │           │   ├── biography.component.* · orchestrateur de la section biographie
 │           │   ├── biography.data.ts · données biographie (contenus structurés)
 │           │   ├── bio-intro/
 │           │   │   └── bio-intro.component.* · introduction
 │           │   ├── bio-highlights/
 │           │   │   └── bio-highlights.component.* · points clés / highlights
 │           │   └── bio-soft-skills/
 │           │       └── bio-soft-skills.component.* · soft skills + SVG
 │           ├── contact/
 │           │   └── contact.component.* · section contact (CTA mail / liens)
 │           ├── home/
 │           │   ├── home.component.* · section d’accueil (orchestrateur)
 │           │   └── home-header/
 │           │       └── home-header.component.* · header (nom + rôle + CTA)
 │           ├── portfolio/
 │           │   ├── portfolio.component.* · section avec onglets + grille
 │           │   ├── portfolio.data.ts · projets (disciplines, médias, CTA)
 │           │   └── portfolio-content-panel/
 │           │       └── portfolio-content-panel.component.* · panneau projet + lightbox
 │           └── services/
 │               ├── services.component.* · liste + gestion sélection (modale)
 │               ├── services.data.ts · données des cartes (titre, contenu, imageUrl…)
 │               ├── service-card/
 │               │   └── service-card.component.* · carte service cliquable
 │               └── service-detail/
 │                   └── service-detail.component.* · modale service (backdrop + contenu)
 ├── angular.json · configuration Angular CLI
 ├── tsconfig*.json · configuration TypeScript
 ├── package.json / package-lock.json · dépendances (Angular, Material, etc.)
 ├── README.md · instructions projet
 └── .editorconfig / .vscode/ · configuration d’éditeur
 ```
 
 ## Notes supplémentaires
 
 - **Standalones & Signals** : les composants sont standalone. L’état local / global (thème, sélection de service, etc.) utilise `signal()`/`computed()` plutôt que NgRx.
 - **Material** : Angular Material est utilisé pour la structure (ex: sidenav) et certains widgets. Les overlays custom (ex: `service-detail`) gèrent les `z-index`.
 - **Sections** : `src/app/sections/` contient les sections de la page. Les classes utilitaires `.section`, `.section__header`, etc. sont définies dans `src/styles.scss` pour garder un layout homogène.
 - **Assets** : les médias sont dans `src/assets/` (portfolio/services/biography). Le `public/` sert aux fichiers servis tels quels (ex: favicon).
 
 Ce schéma sert de référence rapide pour savoir où ajouter/modifier un comportement (ex. nouvelle card service → `sections/services/service-card`, ajustement toggle → `components/theme-toggle`).
