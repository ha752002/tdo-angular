import {Component, Input, OnInit} from '@angular/core';
import {TodoEventService} from "./services/todo-event.service";
import {TodoModel} from "../../core/models/todo/todo-model";
import {Subscription} from "rxjs";
import {TodoApiService} from "../../core/services/todo-service/todo-api.service";
import {DatetimeToLocalPipe} from "../../shared/pipes/datetime-to-local.pipe";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
    @Input() todo!: TodoModel;
    todoList: TodoModel[] = [];
    private subscription: Subscription = new Subscription();
    newTodo: TodoModel = new TodoModel(null, '', '', '', '');

    get createOrEditModalKey(): string {
      return this.todoEventService.createOrEditModalKey;
    }

    get deleteModalKey(): string {
      return this.todoEventService.deleteModalKey;
    }

    constructor(
      private todoEventService: TodoEventService,
      private todoApiService: TodoApiService,
      private datetimeToLocalPipe: DatetimeToLocalPipe
    ) {
    }

    openCreateOrEditModal() {
      this.newTodo = {
        id: null,
        deadline: this.datetimeToLocalPipe.transform(new Date()),
        titleTask: '',
        status: '',
        createdAt: ''
      };
      this.todoEventService.openCreateOrEditModal(this.newTodo);
    }

    ngOnInit(): void {
      this.subscription.add(this.todoApiService.getTodos().subscribe((data) => {
        this.todoList = data;
      }));
    }

    protected readonly Object = Object;
}
