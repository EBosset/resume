import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-color-switcher',
  standalone: true,
  imports: [NgClass, MatIconModule, MatButtonModule],
  templateUrl: './color-switcher.component.html',
  styleUrl: './color-switcher.component.scss',
})
export class ColorSwitcherComponent {
  private readonly theme = inject(ThemeService);

  readonly accent = this.theme.accent;
  readonly isOpen = signal(false);

  readonly colors = [
    '#FF5349',
    '#a3f307',
    '#634352',
    '#605e2d',
    '#03A9F4',
    '#00BCD4',
    '#4CAF50',
    '#8BC34A',
    '#9C27B0',
    '#E91E63',
    '#3F51B5',
    '#009688',
    '#795548',
  ];

  setAccent(color: string): void {
    this.theme.setAccent(color);
  }

  toggle(): void {
    this.isOpen.update((value) => !value);
  }
}
