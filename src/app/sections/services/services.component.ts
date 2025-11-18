import { Component, signal } from '@angular/core';

import { ServiceCardComponent } from './service-card/service-card.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceItem, SERVICES } from './services.data';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [ServiceCardComponent, ServiceDetailComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesSectionComponent {
  readonly services = SERVICES;

  readonly selected = signal<ServiceItem | null>(null);

  openService(service: ServiceItem): void {
    this.selected.set(service);
  }

  closeService(): void {
    this.selected.set(null);
  }
}