import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  readonly name = 'Edwige Bosset';
  readonly role = 'WEBDESIGNER UI/UX ● DÉVELOPPEUSE WEB ● MAKER';
  readonly intro =
    "Mon expérience et ma créativité au service de vos projets";

  private readonly mailUser = 'ebossetpro';
  private readonly mailDomain = 'gmail.com';
  private readonly mailSubject = 'Contact depuis le portfolio';

  openEmail(event?: MouseEvent): void {
    event?.preventDefault();

    const email = `${this.mailUser}@${this.mailDomain}`;
    const subject = encodeURIComponent(this.mailSubject);
    const url = `mailto:${email}?subject=${subject}`;

    window.location.href = url;
  }
}

