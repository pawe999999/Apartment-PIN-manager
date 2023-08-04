import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export const getPinForm = (): FormGroup =>
    new FormGroup ({
        alias: new FormControl(null, [Validators.required, Validators.maxLength(20)]),
        pin: new FormControl(null, [Validators.required, Validators.minLength(6), consecutiveNumbersValidator()]),
        validFrom: new FormControl(null, [Validators.required]),
        validTo: new FormControl(null, [Validators.required]),
    }, { validators: dateValidator() })



export function dateValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
          const startDate = control.get('validFrom').value;
          const endDate = control.get('validTo').value;

          if(!endDate || !startDate) return null

          if (endDate < startDate) {
            return { endDateBeforeStartDate: true };
          }
      
          if (endDate < new Date()) {
            return { endDateInPast: true };
          }
      
          return null;
    };
}


export function consecutiveNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if(!value) return null
        
      if (isConsecutiveNumbers(value)) {
        return { consecutiveNumbers: true };
      }
  
      return null;
    };
  }

export function isConsecutiveNumbers(value: string): boolean {
    const digits = value.split('').map(i => +i);
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] - digits[i + 1] === 1 || digits[i] - digits[i + 1] === -1) {
        return true;
      }
    }
    return false;
  }