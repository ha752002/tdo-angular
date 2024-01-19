import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timestampToDatetime',
  standalone: true
})

export class TimestampToDatetimePipe implements PipeTransform {
  transform(timestamp: string): string {
    const datetime = (new Date(Number(timestamp) * 1000));
    return datetime.getDate() + "-" + (datetime.getMonth() + 1) + "-" + datetime.getFullYear() + " " +
      datetime.getHours() + ":" + datetime.getMinutes();
  }

}
