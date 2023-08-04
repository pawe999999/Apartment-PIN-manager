

import { FormControl, FormGroup } from '@angular/forms';
import { dateValidator } from './pinForm.model';
import { isConsecutiveNumbers } from '../utils/isConsecutiveNumbers';

describe('Date Validator', () => {
  it('should validate when end date is after start date', () => {
    const formGroup = new FormGroup({
      validFrom: new FormControl('01/08/2023'),
      validTo: new FormControl('01/08/2023')
    }, { validators: dateValidator() });

    expect(formGroup.valid).toBeTrue();
    expect(formGroup.hasError('endDateBeforeStartDate')).toBeFalse();
  });

  it('should not validate when end date is before start date', () => {
    const formGroup = new FormGroup({
      validFrom: new FormControl('05/08/2023'),
      validTo: new FormControl('01/08/2023')
    }, { validators: dateValidator() });

    expect(formGroup.valid).toBeFalse();
    expect(formGroup.hasError('endDateBeforeStartDate')).toBeTrue();
  });

  it('should not validate when end date is in the past', () => {
    const date = new Date();
    
    const formGroup = new FormGroup({
      validFrom: new FormControl('01/08/2023'),
      validTo: new FormControl(date.setDate(date.getDate() - 1))
    }, { validators: dateValidator() });

    expect(formGroup.valid).toBeFalse();
    expect(formGroup.hasError('endDateInPast')).toBeTrue();
  });
});

describe('isConsecutiveNumbers', () => {
    it('should detect consecutive numbers', () => {
      expect(isConsecutiveNumbers('123456')).toBe(true);
      expect(isConsecutiveNumbers('432124')).toBe(true);
      expect(isConsecutiveNumbers('135798')).toBe(true);
    });
  
    it('should not detect consecutive numbers', () => {
      expect(isConsecutiveNumbers('135791')).toBe(false);
      expect(isConsecutiveNumbers('864209')).toBe(false);
      expect(isConsecutiveNumbers('000000')).toBe(false);

    });
  });

