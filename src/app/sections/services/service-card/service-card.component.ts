import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceItem } from '../services.data';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss',
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
  @Output() open = new EventEmitter<ServiceItem>();

  onOpen(): void {
    this.open.emit(this.service);
  }
}