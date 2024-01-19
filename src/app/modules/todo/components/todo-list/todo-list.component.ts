import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {TodoModel} from "../../../../core/models/todo/todo-model";
import {TodoStatus} from "../../../../shared/enum/todo-status";
import {TodoEventService} from "../../services/todo-event.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit, OnDestroy {
  @Input() todoList: TodoModel[] = [];
  private subscription: Subscription = new Subscription();
  currentFilterStatus: TodoStatus = TodoStatus.ALL;

  constructor(private todoEventService: TodoEventService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.todoEventService.todoFilterStatusObservable.subscribe((status) => {
      this.currentFilterStatus = status;
    }));
  }

  todoTrackBy(_: number, todo: TodoModel) {
    return todo.id;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
