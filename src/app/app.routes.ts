import { Routes } from '@angular/router';
import { HomeSectionComponent } from './sections/home/home.component';
import { BiographySectionComponent } from './sections/biography/biography.component';
import { ServicesSectionComponent } from './sections/services/services.component';
import { PortfolioSectionComponent } from './sections/portfolio/portfolio.component';
import { ContactSectionComponent } from './sections/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeSectionComponent },
  { path: 'biography', component: BiographySectionComponent },
  { path: 'services', component: ServicesSectionComponent },
  { path: 'portfolio', component: PortfolioSectionComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: '**', redirectTo: 'home' },
];
