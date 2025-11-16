import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ColorSwitcherComponent } from './components/color-switcher/color-switcher.component';
import { CustomCursorComponent } from './components/custom-cursor/custom-cursor.component';
import { HomeSectionComponent } from './sections/home/home.component';
import { BiographySectionComponent } from './sections/biography/biography.component';
import { ServicesSectionComponent } from './sections/services/services.component';
import { PortfolioSectionComponent } from './sections/portfolio/portfolio.component';
import { ContactSectionComponent } from './sections/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ColorSwitcherComponent,
    CustomCursorComponent,
    HomeSectionComponent,
    BiographySectionComponent,
    ServicesSectionComponent,
    PortfolioSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Resume');
  protected readonly currentYear = new Date().getFullYear();
  protected readonly activeSection = signal<'home' | 'biography' | 'services' | 'portfolio' | 'contact'>('home');

  scrollToSection(sectionId: 'home' | 'biography' | 'services' | 'portfolio' | 'contact'): void {
    this.activeSection.set(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
