import {Component} from '@angular/core';
import {TodoEventService} from "../../services/todo-event.service";
import {TodoModel} from "../../../../core/models/todo/todo-model";
import {TodoApiService} from "../../../../core/services/todo-service/todo-api.service";
import {ToastService} from "../../../../core/services/toast-service/toast.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-delete-confirm-todo',
  templateUrl: './delete-confirm-todo.component.html',
  styleUrls: ['./delete-confirm-todo.component.scss']
})

export class DeleteConfirmTodoComponent  {
  formGroup: FormGroup;

  constructor(
    private todoEventService: TodoEventService,
    private todoApiService: TodoApiService,
    private toastService: ToastService,
  ) {
    this.formGroup= todoEventService.todoForm;
  }

  getValueByKey(key: string){
    return this.todoEventService.getFormControlByKey(key).value;
  }

  handleConfirmDelete() {
    this.todoEventService.closeDeleteModal();
    this.todoApiService.deleteTodo(this.todoEventService.getFormControlByKey('id').value).subscribe({
      next: (data: TodoModel) => {
        this.toastService.success(`Delete Todo ${data.titleTask} successfully`);
      },
      error: () => {
        this.toastService.error('Todo not found');
      }
    });

  }
}
