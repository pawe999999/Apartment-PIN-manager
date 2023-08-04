import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subject } from 'rxjs';
import { Pin } from 'src/app/shared/interfaces/pin.interface';
import { getPinForm } from 'src/app/shared/models/pinForm.model';
import { generateNewPin } from 'src/app/shared/utils/generateNewPin';
import { getProperDateFormat } from 'src/app/shared/utils/getProperDateForm';

@Component({
  selector: 'app-pin-manager-form',
  templateUrl: './pin-manager-form.component.html',
  styleUrls: ['./pin-manager-form.component.scss'],
})
export class PinManagerFormComponent implements OnInit {

  @Input() componentRef: ViewContainerRef
  @Input() formValues: Pin

  public addNewPin$: Subject<Pin> = new Subject()
  public deletePin$: Subject<string> = new Subject()

  public form: FormGroup
  public newPin: boolean

  public matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.newPin = !this.formValues
    this.form = getPinForm()

    if(this.newPin) {
      this.form.get('pin').patchValue(generateNewPin())
      }
    else {
      this.form.patchValue({...this.formValues,
        validFrom: new Date(this.formValues.validFrom),
        validTo: new Date(this.formValues.validTo),
      })
      this.form.disable()
    }
  }

  public closeModal(): void {
    this.componentRef.clear()
  }

  public modifyPin():void {
    this.newPin ? this.addNewPin() : this.deleteNewPin()
  }

  private addNewPin(): void {
    this.form.markAsDirty()
    
    if(this.form.valid) {
      this.addNewPin$.next({
        ...this.form.value,
        id: Math.floor(Math.random() * 1000000),
        validFrom: getProperDateFormat(this.form.value.validFrom),
        validTo: getProperDateFormat(this.form.value.validTo)

      })
    this.closeModal()
    }
  }

  private deleteNewPin() {
    this.deletePin$.next(String(this.formValues.id))
    this.closeModal()
    }

}
// For Angular Materials datepicker
class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}