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
  readonly lightboxProjectId = signal<PortfolioProject['id'] | null>(null);
  readonly lightboxGallery = signal<string[]>([]);
  readonly lightboxIndex = signal<number>(0);

  activeImage(project: PortfolioProject): string {
    return this.selectedImages()[project.id] ?? project.imageUrl;
  }

  selectImage(projectId: string, image: string): void {
    this.selectedImages.update((current) => ({ ...current, [projectId]: image }));
  }

  openLightbox(
    projectId: PortfolioProject['id'],
    image: string,
    alt: string,
    gallery?: string[]
  ): void {
    this.lightboxProjectId.set(projectId);
    this.lightboxImage.set(image);
    this.lightboxAlt.set(alt);

    const normalizedGallery = (gallery && gallery.length > 0 ? gallery : [image]).filter(
      (entry): entry is string => Boolean(entry)
    );
    this.lightboxGallery.set(normalizedGallery);

    const index = normalizedGallery.indexOf(image);
    this.lightboxIndex.set(index >= 0 ? index : 0);
  }

  closeLightbox(): void {
    this.lightboxProjectId.set(null);
    this.lightboxImage.set(null);
    this.lightboxAlt.set('');
    this.lightboxGallery.set([]);
    this.lightboxIndex.set(0);
  }

  showPrevLightboxImage(): void {
    const gallery = this.lightboxGallery();
    if (gallery.length < 2) {
      return;
    }

    const currentIndex = this.lightboxIndex();
    const nextIndex = (currentIndex - 1 + gallery.length) % gallery.length;
    this.lightboxIndex.set(nextIndex);
    const nextImage = gallery[nextIndex];
    this.lightboxImage.set(nextImage);

    const projectId = this.lightboxProjectId();
    if (projectId) {
      this.selectImage(projectId, nextImage);
    }
  }

  showNextLightboxImage(): void {
    const gallery = this.lightboxGallery();
    if (gallery.length < 2) {
      return;
    }

    const currentIndex = this.lightboxIndex();
    const nextIndex = (currentIndex + 1) % gallery.length;
    this.lightboxIndex.set(nextIndex);
    const nextImage = gallery[nextIndex];
    this.lightboxImage.set(nextImage);

    const projectId = this.lightboxProjectId();
    if (projectId) {
      this.selectImage(projectId, nextImage);
    }
  }
}
