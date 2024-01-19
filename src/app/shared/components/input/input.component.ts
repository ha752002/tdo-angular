import {Component, forwardRef, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";
import {
  ControlValueAccessor,
  FormsModule,NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from "@angular/forms";
import {FormErrorMessagePipe} from "../../pipes/form-error-message.pipe";
import {noop} from "rxjs";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  imports: [
    NgStyle,
    ReactiveFormsModule,
    NgIf,
    FormErrorMessagePipe,
    FormsModule,
  ],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent implements ControlValueAccessor {
  @Input() placeholderInput: string = 'Enter';
  inputValue: string = '';
  @Input() styleInput: object = {
    padding: '10px 20px'
  };

  constructor() {
  }

  onChange: (value: string) => void = noop;
  onTouched: () => void = noop;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(inputValue: string): void {
    this.inputValue = inputValue;
  }
}
