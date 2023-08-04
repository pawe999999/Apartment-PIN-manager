
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    inputElement.value = sanitizedValue;
  }
}