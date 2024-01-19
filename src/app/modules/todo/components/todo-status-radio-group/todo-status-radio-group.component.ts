import {Component} from '@angular/core';
import {TodoStatus} from "../../../../shared/enum/todo-status";
import {TodoEventService} from "../../services/todo-event.service";

@Component({
  selector: 'app-todo-status-radio-group',
  templateUrl: './todo-status-radio-group.component.html',
  styleUrls: ['./todo-status-radio-group.component.scss']
})

export class TodoStatusRadioGroupComponent {
  todoStatusList = [{
    title: TodoStatus.ALL
  }, {
    title: TodoStatus.COMPLETED
  }, {
    title: TodoStatus.ACTIVE
  }];
  currentStatus: TodoStatus = TodoStatus.ALL;

  constructor(private todoEventService: TodoEventService) {
  }

  onChangeStatus(status: TodoStatus) {
    this.todoEventService.changeStatus(status);
  }
}
