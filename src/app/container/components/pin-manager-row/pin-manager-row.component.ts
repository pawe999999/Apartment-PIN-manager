import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pin } from 'src/app/shared/interfaces/pin.interface';

@Component({
  selector: 'app-pin-manager-row',
  templateUrl: './pin-manager-row.component.html',
  styleUrls: ['./pin-manager-row.component.scss']
})
export class PinManagerRowComponent {
  @Input() pin: Pin
  @Output() selectedPin: EventEmitter<Pin> = new EventEmitter()


  public outputPin(pin: Pin): void {
    this.selectedPin.emit(pin)
  }
}
