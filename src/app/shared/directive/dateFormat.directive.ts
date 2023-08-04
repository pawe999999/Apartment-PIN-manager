import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective {

  @HostListener('input', ['$event']) onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value.replace(/\D/g, ''); 
    if (value.length > 0) {
      value = value.replace(/^(\d{2})(\d{2})(\d{4})$/, '$1/$2/$3');
    }
    inputElement.value = value;
  }
}