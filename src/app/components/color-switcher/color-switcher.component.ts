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

  readonly colorGroups = [
    {
      title: 'Dark mode',
      subtitle: 'Couleurs vives conseillées',
      colors: [
        '#FF5349',
        '#A3F307',
        '#BC13FE', 
        '#4deeea', 
      ],
    },
    {
      title: 'Light mode',
      subtitle: 'Teintes douces recommandées',
      colors: [        
        '#D86C63',
        '#A6B59A',              
        '#C9A574', 
        '#B17090',        
      ],
    },
  ];

  setAccent(color: string): void {
    this.theme.setAccent(color);
  }

  toggle(): void {
    this.isOpen.update((value) => !value);
  }
}
