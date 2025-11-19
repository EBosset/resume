import { Component, HostListener, signal } from '@angular/core';
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
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [    
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ThemeToggleComponent,
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
  protected readonly isMobile = signal(window.innerWidth <= 768);
  protected readonly isMobileMenuOpen = signal(false);
  protected readonly showBackToTop = signal(false);
  private contentScrollTop = 0;
  private scrollHostElement?: HTMLElement;

  scrollToSection(sectionId: 'home' | 'biography' | 'services' | 'portfolio' | 'contact'): void {
    this.activeSection.set(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (this.isMobile()) {
      this.isMobileMenuOpen.set(false);
    }
  }

  toggleMobileMenu(): void {
    if (!this.isMobile()) {
      return;
    }
    this.isMobileMenuOpen.update((open) => !open);
  }

  closeMobileMenu(): void {
    if (!this.isMobile()) {
      return;
    }
    this.isMobileMenuOpen.set(false);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.scrollHostElement?.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onContentScroll(event: Event): void {
    const target = event.target as HTMLElement | null;
    this.scrollHostElement = target ?? this.scrollHostElement;
    this.contentScrollTop = target?.scrollTop ?? 0;
    this.updateBackToTopVisibility();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const mobile = window.innerWidth <= 768;
    this.isMobile.set(mobile);
    if (!mobile) {
      this.isMobileMenuOpen.set(false);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateBackToTopVisibility();
  }

  private updateBackToTopVisibility(): void {
    const scrollTop = Math.max(window.scrollY, this.contentScrollTop);
    this.showBackToTop.set(scrollTop > 400);
  }
}
