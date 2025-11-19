import { Component } from '@angular/core';

import { BIOGRAPHY_INTRO } from '../biography.data';

@Component({
  selector: 'app-bio-intro',
  standalone: true,
  templateUrl: './bio-intro.component.html',
  styleUrl: './bio-intro.component.scss',
})
export class BioIntroComponent {
  readonly introParagraphs = BIOGRAPHY_INTRO.paragraphs;
}
