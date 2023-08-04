import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs';
import { Pin } from 'src/app/shared/interfaces/pin.interface';
import { PinManagerFormComponent } from '../components/pin-manager-form/pin-manager-form.component';
import { FormGroup } from '@angular/forms';
import { PinService } from 'src/app/shared/services/pin.service';
import { sortByString } from 'src/app/shared/utils/sortByString';

@Component({
  selector: 'app-pin-manager-container',
  templateUrl: './pin-manager-container.component.html',
  styleUrls: ['./pin-manager-container.component.scss'],
})
export class PinManagerContainerComponent implements OnInit {

  public form: FormGroup
  public pinList: Pin[]


  @ViewChild('pinForm', {read: ViewContainerRef}) pinFormComponent: ViewContainerRef

  constructor(private pinService: PinService){}

  ngOnInit(): void {
    this.pinService.pinList$.pipe(
      map(pinList => pinList.sort(
        (a,b)=> sortByString(a.alias.toLowerCase(), b.alias.toLowerCase()))))
        .subscribe(pins => {
            this.pinList = pins
        })
  }

  public openModal(pin?: Pin): void {
    this.pinFormComponent.clear()
    const component = this.pinFormComponent.createComponent(PinManagerFormComponent)
    component.instance.componentRef = this.pinFormComponent
    component.instance.formValues = pin

    component.instance.addNewPin$.subscribe(pinFormValue => {
      this.pinService.addNewPin(pinFormValue)
      component.instance.addNewPin$.unsubscribe()
    })

    component.instance.deletePin$.subscribe(id => {
      this.pinService.deletePin(id)
      component.instance.deletePin$.unsubscribe()
    })

  }
}
