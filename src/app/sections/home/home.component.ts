import { Component } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';

@Component({
  selector: 'app-home-section',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HomeHeaderComponent],
})
export class HomeSectionComponent {}
