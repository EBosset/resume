import { Component } from '@angular/core';

import { BioIntroComponent } from './bio-intro/bio-intro.component';
import { BioHighlightsComponent } from './bio-highlights/bio-highlights.component';
import { BioSoftSkillsComponent } from './bio-soft-skills/bio-soft-skills.component';

@Component({
  selector: 'app-biography-section',
  standalone: true,
  imports: [BioIntroComponent, BioHighlightsComponent, BioSoftSkillsComponent],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.scss',
})
export class BiographySectionComponent {}