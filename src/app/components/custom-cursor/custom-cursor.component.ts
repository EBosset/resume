import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent {
  x = signal(0);
  y = signal(0);
  visible = signal(false);
  pressed = signal(false);
  private hideTimeoutId: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.visible.set(true);
    this.x.set(event.clientX);
    this.y.set(event.clientY);

    if (this.hideTimeoutId !== null) {
      window.clearTimeout(this.hideTimeoutId);
    }

    this.hideTimeoutId = window.setTimeout(() => {
      this.visible.set(false);
      this.hideTimeoutId = null;
    }, 500);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.visible.set(false);
    this.pressed.set(false);
  }

  @HostListener('document:mousedown')
  onMouseDown() {
    this.pressed.set(true);
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.pressed.set(false);
  }
}