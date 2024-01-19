import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TodoModel} from "../../../core/models/todo/todo-model";
import {ModalService} from "../../../core/services/modal-service/modal.service";
import {TodoStatus} from "../../../shared/enum/todo-status";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatetimeValidator} from "../../../shared/validators/datetime-validator";
import {TodoRequestModel} from "../../../core/models/todo/todo-request.model";

@Injectable()

export class TodoEventService {
  private todoFilterStatusSubject$ = new Subject<TodoStatus>();
  todoFilterStatusObservable = this.todoFilterStatusSubject$.asObservable();

  createOrEditModalKey: string = 'create-edit-modal';
  deleteModalKey: string = 'delete-modal';
  private _todoForm: FormGroup = this.initForm();

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {
  }

  get todoForm(){
    return this._todoForm;
  }

  getFormControl(controlName: string) {
    return this.todoForm.controls[controlName];
  }

  checkError(controlName: string) {
    return this.getFormControl(controlName).errors && this.getFormControl(controlName).touched;
  }

  getErrors(controlName: string) {
    return this.getFormControl(controlName).errors;
  }

  private initForm(): FormGroup {
    return this.formBuilder.group({
      id: this.formBuilder.control('', []),
      titleTask: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      deadline: this.formBuilder.control('', [Validators.required, DatetimeValidator()])
    });
  }

  setFormData(todo: TodoModel) {
    this.todoForm.setValue(<TodoRequestModel>{
      id: todo.id,
      titleTask: todo.titleTask,
      deadline: todo.deadline,
    });
  }

  getFormControlByKey(key: string) {
    return this.todoForm.controls[key];
  }

  openCreateOrEditModal(todo: TodoModel) {
    this.setFormData(todo);
    this.modalService.openModalByKey(this.createOrEditModalKey);
  }

  closeCreateOrEditModal() {
    this.modalService.closeModalByKey(this.createOrEditModalKey);
  }

  openDeleteModal(todo: TodoModel) {
    this.setFormData(todo);
    this.modalService.openModalByKey(this.deleteModalKey);
  }

  closeDeleteModal() {
    this.modalService.closeModalByKey(this.deleteModalKey);
  }

  resetForm() {
    this.todoForm.reset();
  }

  changeStatus(status: TodoStatus) {
    this.todoFilterStatusSubject$.next(status);
  }
}
