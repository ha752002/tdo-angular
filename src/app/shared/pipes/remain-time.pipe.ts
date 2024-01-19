import {Pipe, PipeTransform} from '@angular/core';
import {duration} from "moment";
import {RemainTime} from "../../core/models/date-time/remain-time";

@Pipe({
  name: 'remainTime',
  standalone: true
})

export class RemainTimePipe implements PipeTransform {
  transform(date: string | Date): RemainTime {
    const dateToTransform = new Date(date).getTime();
    const currentTime = new Date().getTime();
    const remain = duration((dateToTransform - currentTime), 'milliseconds');
    const remainTime = remain.asHours();
    const remainTimeString = remain.humanize();

    return <RemainTime>{
      hours: remainTime,
      humanize: remainTimeString
    };
  }
}
