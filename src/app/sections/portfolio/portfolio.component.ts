import { Component, computed, signal } from '@angular/core';

import { PORTFOLIO_DISCIPLINES, PortfolioDiscipline } from './portfolio.data';
import { PortfolioContentPanelComponent } from './portfolio-content-panel/portfolio-content-panel.component';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [PortfolioContentPanelComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioSectionComponent {
  readonly disciplines = PORTFOLIO_DISCIPLINES;
  private readonly first = this.disciplines[0];

  readonly selectedId = signal<PortfolioDiscipline['id']>(this.first.id);

  readonly selectedDiscipline = computed(() =>
    this.disciplines.find((d) => d.id === this.selectedId()) ?? this.first,
  );

  select(id: PortfolioDiscipline['id']): void {
    this.selectedId.set(id);
  }

  isActive(id: PortfolioDiscipline['id']): boolean {
    return this.selectedId() === id;
  }
}
