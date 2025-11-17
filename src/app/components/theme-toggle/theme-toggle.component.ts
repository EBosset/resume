import { Component, inject } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgClass, NgIf, MatIconModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  private readonly theme = inject(ThemeService);

  readonly mode = this.theme.mode;

  toggleMode(): void {
    this.theme.toggleMode();
  }
}
