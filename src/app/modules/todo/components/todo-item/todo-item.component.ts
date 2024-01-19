import {Component, Input} from '@angular/core';
import {TodoEventService} from "../../services/todo-event.service";
import {TodoModel} from "../../../../core/models/todo/todo-model";
import {TodoStatus} from "../../../../shared/enum/todo-status";
import {TodoApiService} from "../../../../core/services/todo-service/todo-api.service";
import {TodoRequestModel} from "../../../../core/models/todo/todo-request.model";
import {ToastService} from "../../../../core/services/toast-service/toast.service";
import {ColorType} from "../../../../shared/enum/color-type";
import {RemainTimePipe} from "../../../../shared/pipes/remain-time.pipe";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  @Input() todo!: TodoModel;

  get toggleChecked() {
    return this.todo.status === TodoStatus.COMPLETED;
  }

  constructor(
    private todoEventService: TodoEventService,
    private todoApiService: TodoApiService,
    private toastService: ToastService,
    private remainTimePipe: RemainTimePipe
  ) {
  }

  get remainTime() {
    return this.remainTimePipe.transform(this.todo.deadline);
  }

  handleEditButtonClick() {
    this.todoEventService.openCreateOrEditModal(this.todo);
  }

  handleDeleteButtonClick() {
    this.todoEventService.openDeleteModal(this.todo);
  }

  protected readonly TodoStatus = TodoStatus;

  handleChangeTodoStatus($event: boolean) {
    const status = $event ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;
    this.todoApiService.editTodo(this.todo.id!, <TodoRequestModel>{status}).subscribe({
      next: () => {
        this.toastService.success('Update status successfully');
      },
      error: () => {
        this.toastService.error('Update status failed');
      }
    });
  }

  protected readonly ColorType = ColorType;
}
