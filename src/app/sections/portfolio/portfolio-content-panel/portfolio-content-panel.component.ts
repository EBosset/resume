import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { PortfolioDiscipline } from '../portfolio.data';

@Component({
  selector: 'app-portfolio-content-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-content-panel.component.html',
  styleUrl: './portfolio-content-panel.component.scss',
})
export class PortfolioContentPanelComponent {
  @Input({ required: true }) discipline!: PortfolioDiscipline;
}
