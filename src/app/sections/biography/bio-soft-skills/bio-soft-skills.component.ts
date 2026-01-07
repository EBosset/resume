import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { BIOGRAPHY_SOFT_SKILLS } from '../biography.data';

@Component({
  selector: 'app-bio-soft-skills',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './bio-soft-skills.component.html',
  styleUrls: ['./bio-soft-skills.component.scss'],
})
export class BioSoftSkillsComponent implements OnInit {
  readonly skills = BIOGRAPHY_SOFT_SKILLS;
  illustrationSvg: SafeHtml | null = null;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http
      .get('assets/biography/soft-skills-webdesign-developpement-web.svg', { responseType: 'text' })
      .subscribe((svg) => {
        this.illustrationSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }
}