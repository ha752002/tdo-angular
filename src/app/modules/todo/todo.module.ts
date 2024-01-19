import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import {TodoRoutingModule} from "./todo-routing.module";
import { TodoTabsComponent } from './components/todo-tabs/todo-tabs.component';
import { TodoComponent } from './todo.component';
import {ButtonComponent} from "../../shared/components/button/button.component";
import { TodoStatusRadioGroupComponent } from './components/todo-status-radio-group/todo-status-radio-group.component';
import { CreateOrEditTodoComponent } from './components/create-or-edit-todo/create-or-edit-todo.component';
import {InputComponent} from "../../shared/components/input/input.component";
import {ModalComponent} from "../../shared/components/modal/modal.component";
import {DatePickerComponent} from "../../shared/components/date-picker/date-picker.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TimestampToDatetimePipe} from "../../shared/pipes/timestamp-to-datetime.pipe";
import { DeleteConfirmTodoComponent } from './components/delete-confirm-todo/delete-confirm-todo.component';
import {ToggleComponent} from "../../shared/components/toggle/toggle.component";
import {TodoStatusFilterPipe} from "../../shared/pipes/todo-status-filter.pipe";
import {StatusCountTodoListPipe} from "../../shared/pipes/status-count-todo-list.pipe";
import { TodoStatusCounterComponent } from './components/todo-status-counter/todo-status-counter.component';
import {DatetimeToLocalPipe} from "../../shared/pipes/datetime-to-local.pipe";
import {TodoApiService} from "../../core/services/todo-service/todo-api.service";
import {TodoEventService} from "./services/todo-event.service";
import {RemainTimePipe} from "../../shared/pipes/remain-time.pipe";
import { RemainTimeTodoItemComponent } from './components/remain-time-todo-item/remain-time-todo-item.component';
import {FormErrorMessagePipe} from "../../shared/pipes/form-error-message.pipe";
import {ErrorMessageComponent} from "../../shared/components/error-message/error-message.component";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoItemComponent,
    TodoTabsComponent,
    TodoComponent,
    TodoStatusRadioGroupComponent,
    CreateOrEditTodoComponent,
    DeleteConfirmTodoComponent,
    TodoStatusCounterComponent,
    RemainTimeTodoItemComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ButtonComponent,
    ModalComponent,
    InputComponent,
    DatePickerComponent,
    ReactiveFormsModule,
    TimestampToDatetimePipe,
    FormsModule,
    ToggleComponent,
    TodoStatusFilterPipe,
    StatusCountTodoListPipe,
    RemainTimePipe,
    FormErrorMessagePipe,
    ErrorMessageComponent,
  ],
  providers: [
    DatetimeToLocalPipe,
    TodoApiService,
    TodoEventService,
    RemainTimePipe
  ]
})
export class TodoModule {

}
