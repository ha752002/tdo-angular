import {Component} from '@angular/core';
import {TodoEventService} from "../../services/todo-event.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TodoApiService} from "../../../../core/services/todo-service/todo-api.service";
import {ToastService} from "../../../../core/services/toast-service/toast.service";
import {TodoRequestModel} from "../../../../core/models/todo/todo-request.model";

@Component({
  selector: 'app-create-or-edit-todo',
  templateUrl: './create-or-edit-todo.component.html',
  styleUrls: ['./create-or-edit-todo.component.scss']
})

export class CreateOrEditTodoComponent {
  createOrEditFormGroup: FormGroup;

  constructor(private todoEventService: TodoEventService,
              private formBuilder: FormBuilder,
              private todoApiService: TodoApiService,
              private toast: ToastService
  ) {
    this.createOrEditFormGroup = todoEventService.todoForm;
  }

  get isEditingTodo() {
    return this.todoEventService.getFormControlByKey('id').value !== null;
  }

  handleSubmitCreateOrEditForm() {
    if (this.createOrEditFormGroup.invalid) {
      this.createOrEditFormGroup.markAllAsTouched();
      return;
    }
    this.todoEventService.closeCreateOrEditModal();
    if (this.isEditingTodo) {
      this.todoApiService.editTodo(this.todoEventService.getFormControlByKey('id').value!, <TodoRequestModel>this.createOrEditFormGroup.value).subscribe({
        next: () => {
          this.toast.success("Edit todo successfully");
        },
        error: () => {
          this.toast.error("Edit todo failed");
        }
      });
    } else {
      this.todoApiService.addTodo(<TodoRequestModel>this.todoEventService.todoForm.value).subscribe({
        next: () => {
          this.toast.success("Add todo successfully");
        },
        error: () => {
          this.toast.error("Add todo failed");
        }
      });
    }
    this.todoEventService.resetForm();
  }

  checkError(key: string) {
    return this.todoEventService.checkError(key);
  }

  getErrors(key: string) {
    return this.todoEventService.getErrors(key);

  }
}
