import {Pipe, PipeTransform} from '@angular/core';
import {TodoModel} from "../../core/models/todo/todo-model";
import {TodoStatus} from "../enum/todo-status";
import {StatusCountModel} from "../../core/models/todo/status-count.model";

@Pipe({
  name: 'statusCountTodoList',
  standalone: true
})
export class StatusCountTodoListPipe implements PipeTransform {

  transform(todoList: TodoModel[]): StatusCountModel {
    const statusList = Object.values(TodoStatus);
    const statusAll = statusList.splice(0, 1)[0];
    const initStatusListResult = <StatusCountModel>{};
    statusList.forEach((status) => {
      initStatusListResult[status] = 0;
    });
    const statusCount = todoList.reduce((result, current) => {
      for (const status of statusList) {
        if (current.status.toLowerCase() === status.toLowerCase()) {
          return {...result, [status]: (result[status] + 1)};
        }
      }
      return result;
    }, initStatusListResult);
    return {
      [statusAll]: todoList.length,
      ...statusCount,
    };
  }

}
