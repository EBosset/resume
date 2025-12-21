import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  readonly name = 'Edwige Bosset';
  readonly role = 'WEBDESIGNER UI/UX ● DÉVELOPPEUSE WEB ● DESIGN & CRAFT';
  readonly intro =
    "Mon expérience et ma créativité au service de vos projets";
}

