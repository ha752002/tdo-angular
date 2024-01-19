import {Pipe, PipeTransform} from '@angular/core';
import {TodoModel} from "../../core/models/todo/todo-model";
import {TodoStatus} from "../enum/todo-status";

@Pipe({
  standalone: true,
  name: 'todoStatusFilter'
})

export class TodoStatusFilterPipe implements PipeTransform{
  transform(todoList: TodoModel[], status: TodoStatus): TodoModel[] {
    if(status === TodoStatus.ALL){
      return todoList;
    }
    return todoList.filter(todo => todo.status === status);
  }

}
