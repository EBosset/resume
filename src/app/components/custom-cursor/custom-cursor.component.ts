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

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.visible.set(true);
    this.x.set(event.clientX);
    this.y.set(event.clientY);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.visible.set(false);
  }
}