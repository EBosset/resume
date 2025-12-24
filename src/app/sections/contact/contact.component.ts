import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactSectionComponent {
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
