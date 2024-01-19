import {Component, Input} from '@angular/core';
import {RemainTime} from "../../../../core/models/date-time/remain-time";

@Component({
  selector: 'app-remain-time-todo-item',
  templateUrl: './remain-time-todo-item.component.html',
  styleUrls: ['./remain-time-todo-item.component.scss']
})
export class RemainTimeTodoItemComponent {
  @Input() remainTime?: RemainTime;

  constructor() {
  }


}
