import {Component, Input} from '@angular/core';
import {FormErrorMessagePipe} from "../../pipes/form-error-message.pipe";
import {ValidationErrors} from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
  imports: [
    FormErrorMessagePipe
  ],
  standalone: true
})
export class ErrorMessageComponent {
  @Input() message: ValidationErrors = {};

  constructor() {
  }
}
