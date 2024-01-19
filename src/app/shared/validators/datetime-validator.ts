import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function DatetimeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!isNaN(new Date(control.value).getDate())) {
      return null;
    } else {
      return {dateValidator: {valid: false}};
    }
  };
}

