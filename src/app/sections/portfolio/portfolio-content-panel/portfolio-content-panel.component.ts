import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

import { PortfolioDiscipline, PortfolioProject } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-content-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-content-panel.component.html',
  styleUrl: './portfolio-content-panel.component.scss',
})
export class PortfolioContentPanelComponent {
  @Input({ required: true }) discipline!: PortfolioDiscipline;

  private readonly selectedImages = signal<Record<string, string>>({});

  readonly lightboxImage = signal<string | null>(null);
  readonly lightboxAlt = signal<string>('');

  activeImage(project: PortfolioProject): string {
    return this.selectedImages()[project.id] ?? project.imageUrl;
  }

  selectImage(projectId: string, image: string): void {
    this.selectedImages.update((current) => ({ ...current, [projectId]: image }));
  }

  openLightbox(image: string, alt: string): void {
    this.lightboxImage.set(image);
    this.lightboxAlt.set(alt);
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
    this.lightboxAlt.set('');
  }
}
