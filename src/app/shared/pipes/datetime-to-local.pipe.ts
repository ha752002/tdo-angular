import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datetimeToLocal',
  standalone: true
})
export class DatetimeToLocalPipe implements PipeTransform {
  transform(date: Date): string {
    return date.getFullYear().toString() + '-'
      + ("0" + (date.getMonth() + 1)).slice(-2) + '-'
      + ("0" + (date.getDate())).slice(-2)
      + 'T' + date.toTimeString().slice(0, 5);
  }
}
