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
  readonly lightboxZoom = signal<number>(1);
  readonly lightboxOffsetX = signal<number>(0);
  readonly lightboxOffsetY = signal<number>(0);

  private isDraggingLightbox = false;
  private lastDragX = 0;
  private lastDragY = 0;
  private isTouchDraggingLightbox = false;

  private getPrimaryTouch(event: TouchEvent): Touch | null {
    if (!event.touches || event.touches.length === 0) {
      return null;
    }
    return event.touches[0];
  }

  activeImage(project: PortfolioProject): string {
    return this.selectedImages()[project.id] ?? project.imageUrl;
  }

  selectImage(projectId: string, image: string): void {
    this.selectedImages.update((current) => ({ ...current, [projectId]: image }));
  }

  openLightbox(image: string, alt: string): void {
    this.lightboxImage.set(image);
    this.lightboxAlt.set(alt);
    this.lightboxZoom.set(1);
    this.lightboxOffsetX.set(0);
    this.lightboxOffsetY.set(0);
    this.isDraggingLightbox = false;
  }

  closeLightbox(): void {
    this.lightboxImage.set(null);
    this.lightboxAlt.set('');
    this.lightboxZoom.set(1);
    this.lightboxOffsetX.set(0);
    this.lightboxOffsetY.set(0);
    this.isDraggingLightbox = false;
  }

  onLightboxWheel(event: WheelEvent): void {
    event.preventDefault();

    const delta = event.deltaY;
    const step = 0.15;
    const current = this.lightboxZoom();

    const next = Math.min(3, Math.max(1, current + (delta < 0 ? step : -step)));
    this.lightboxZoom.set(next);
  }

  onLightboxMouseDown(event: MouseEvent): void {
    if (this.lightboxZoom() <= 1) {
      return;
    }

    event.preventDefault();
    this.isDraggingLightbox = true;
    this.lastDragX = event.clientX;
    this.lastDragY = event.clientY;
  }

  onLightboxMouseMove(event: MouseEvent): void {
    if (!this.isDraggingLightbox) {
      return;
    }

    event.preventDefault();

    const dx = event.clientX - this.lastDragX;
    const dy = event.clientY - this.lastDragY;

    this.lastDragX = event.clientX;
    this.lastDragY = event.clientY;

    this.lightboxOffsetX.update((current) => current + dx);
    this.lightboxOffsetY.update((current) => current + dy);
  }

  onLightboxMouseUp(): void {
    this.isDraggingLightbox = false;
  }

  onLightboxMouseLeave(): void {
    this.isDraggingLightbox = false;
  }

  onLightboxTouchStart(event: TouchEvent): void {
    if (this.lightboxZoom() <= 1) {
      return;
    }

    const touch = this.getPrimaryTouch(event);
    if (!touch) {
      return;
    }

    event.preventDefault();
    this.isTouchDraggingLightbox = true;
    this.lastDragX = touch.clientX;
    this.lastDragY = touch.clientY;
  }

  onLightboxTouchMove(event: TouchEvent): void {
    if (!this.isTouchDraggingLightbox) {
      return;
    }

    const touch = this.getPrimaryTouch(event);
    if (!touch) {
      return;
    }

    event.preventDefault();

    const dx = touch.clientX - this.lastDragX;
    const dy = touch.clientY - this.lastDragY;

    this.lastDragX = touch.clientX;
    this.lastDragY = touch.clientY;

    this.lightboxOffsetX.update((current) => current + dx);
    this.lightboxOffsetY.update((current) => current + dy);
  }

  onLightboxTouchEnd(): void {
    this.isTouchDraggingLightbox = false;
  }

  onLightboxTouchCancel(): void {
    this.isTouchDraggingLightbox = false;
  }
}
