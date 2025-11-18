import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ServiceItem } from '../services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent {
  @Input() service: ServiceItem | null = null;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}