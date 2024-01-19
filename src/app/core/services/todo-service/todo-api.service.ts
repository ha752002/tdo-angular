import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, switchMap, tap} from "rxjs";
import {TodoModel} from "../../models/todo/todo-model";
import {environment} from "../../../../environments/environment";
import {TodoRequestModel} from "../../models/todo/todo-request.model";

@Injectable()
export class TodoApiService {
  baseURL: string = environment.apiURL;
  private dataSubject$ = new BehaviorSubject<TodoModel[]>([]);

  constructor(private http: HttpClient) {
  }

  public getTodos() {
    return this.dataSubject$.asObservable().pipe(
      switchMap(() => {
        return this.http.get<TodoModel[]>(this.baseURL + '/todo');
      }));
  }

  public addTodo(todo: TodoRequestModel) {
    return this.http.post<TodoModel>(this.baseURL + '/todo', todo)
      .pipe(
        tap((data) => {
          if (data) {
            this.refreshData();
          }
        }),
        catchError((err, caught) => {
          throw err + " " + caught;
        })
      );
  }

  public refreshData() {
    this.dataSubject$.next([]);
  }

  public editTodo(id: string, todo: TodoRequestModel) {
    return this.http.put<TodoModel>(this.baseURL + '/todo/' + id, todo).pipe(
      tap((data) => {
        if (data) {
          this.refreshData();
        }
      })
    );
  }

  public deleteTodo(id: string) {
    return this.http.delete<TodoModel>(this.baseURL + '/todo/' + id).pipe(
      tap((data) => {
        if (data) {
          this.refreshData();
        }
      })
    );
  }
}
