import {Pipe, PipeTransform} from '@angular/core';
import {ValidationErrors} from "@angular/forms";

@Pipe({
  name: 'formErrorMessage',
  standalone: true
})
export class FormErrorMessagePipe implements PipeTransform {

  transform(errors: ValidationErrors | undefined | null): string {
    if (errors === undefined || errors === null) {
      return '';
    }
    const error = Object.keys(errors)[0];
    switch (error) {
    case 'required' :
      return 'this field can not be empty';

    case 'minlength' :
      return `this field must have ${errors['minlength']['requiredLength']} or more character`;

    case 'dateValidator' :
      return `Must have correct datetime format`;
    }

    return 'some Error';
  }

}
