import {Component, forwardRef, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormErrorMessagePipe} from "../../pipes/form-error-message.pipe";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from "@angular/forms";
import {noop} from "rxjs";

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [CommonModule, FormErrorMessagePipe, FormsModule, ReactiveFormsModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})

export class DatePickerComponent implements ControlValueAccessor {
  @Input() placeholderInput: string = 'Enter';
  inputValue: Date = new Date();
  @Input() styleInput: object = {
    padding: '10px 20px'
  };

  constructor() {
  }

  onChange: (value: Date) => void = noop;
  onTouched: () => void = noop;

  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(inputValue: Date): void {
    this.inputValue = inputValue;
  }
}
