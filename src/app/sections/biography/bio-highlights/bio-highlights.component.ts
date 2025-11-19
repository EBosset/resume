import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BIOGRAPHY_HIGHLIGHTS } from '../biography.data';

@Component({
  selector: 'app-bio-highlights',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-highlights.component.html',
  styleUrls: ['./bio-highlights.component.scss'],
})
export class BioHighlightsComponent {
  readonly highlights = BIOGRAPHY_HIGHLIGHTS;
}