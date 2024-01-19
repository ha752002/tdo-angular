import {Component, Input} from '@angular/core';
import {TodoModel} from "../../../../core/models/todo/todo-model";

@Component({
  selector: 'app-todo-status-counter',
  templateUrl: './todo-status-counter.component.html',
  styleUrls: ['./todo-status-counter.component.scss']
})
export class TodoStatusCounterComponent  {
  @Input() todoList: TodoModel[] = [];
  constructor() { }

  protected readonly Object = Object;
}
