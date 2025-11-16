import { Injectable, computed, effect, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly modeSignal = signal<ThemeMode>('dark');
  private readonly accentSignal = signal<string>('#FF5349');

  readonly mode = computed(() => this.modeSignal());
  readonly accent = computed(() => this.accentSignal());
  readonly isDark = computed(() => this.modeSignal() === 'dark');

  constructor() {
    effect(() => {
      const mode = this.mode();
      const accent = this.accent();
      const body = document.body;

      body.classList.toggle('theme-dark', mode === 'dark');
      body.classList.toggle('theme-light', mode === 'light');

      body.style.setProperty('--accent-color', accent);
    });
  }

  setMode(mode: ThemeMode): void {
    this.modeSignal.set(mode);
  }

  toggleMode(): void {
    this.modeSignal.update((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  setAccent(color: string): void {
    this.accentSignal.set(color);
  }
}
