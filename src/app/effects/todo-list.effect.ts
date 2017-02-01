import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { TodoListService } from '../core/todo-list.service';
import { Todo } from '../models/todo.model';
import * as todoList from '../actions/todo-list.action';

@Injectable()
export class TodoListEffects {
  constructor(private actions$: Actions, private todoListService: TodoListService) { }

  @Effect()
  initTodoList: Observable<Action> = this.actions$
    .ofType(todoList.ActionsTypes.INIT_LIST)
    .map((action: todoList.InitListAction) => action)
    .switchMap(() => {
      return this.todoListService.getTodoList()
        .map((newList: ReadonlyArray<Todo>) => {
          return new todoList.InitListActionSuccess({newList});
        });
    });

  @Effect()
  deleteTodo: Observable<Action> = this.actions$
    .ofType(todoList.ActionsTypes.DELETE_TODO)
    .map((action: todoList.DeleteTodoAction) => action)
    .switchMap((action: todoList.DeleteTodoAction) => {
      return this.todoListService.removeTodo(action.list, action.id)
        .map((newList: ReadonlyArray<Todo>) => {
          return new todoList.DeleteTodoActionSuccess({newList});
        });
    });

  @Effect()
  addTodo: Observable<Action> = this.actions$
    .ofType(todoList.ActionsTypes.ADD_TODO)
    .map((action: todoList.AddTodoAction) => action)
    .switchMap((action: todoList.AddTodoAction) => {
      return this.todoListService.addTodo(action.list, action.text)
        .map((newTodo: Todo) => {
          return new todoList.AddTodoActionSuccess({newTodo});
        })
    });
}



// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
// import { Injectable } from '@angular/core';
// import { Effect, Actions } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
// import { Observable } from 'rxjs/Rx';
//
// import { TodoListService } from '../core/todo-list.service';
// import { Todo } from '../models/todo.model';
// import * as todoList from '../actions/todo-list.action';
//
// @Injectable()
// export class TodoListEffects {
//   constructor(private actions$: Actions, private todoListService: TodoListService) { }
//
//   @Effect()
//   initTodoList: Observable<Action> = this.actions$
//     .ofType(todoList.ActionsTypes.INIT_LIST)
//     .map((action: todoList.InitListAction) => action)
//     .switchMap(() => {
//       return this.todoListService.getTodoList()
//         .map((list: ReadonlyArray<Todo>) => {
//           return new todoList.InitListActionSuccess(list);
//         });
//     });
//
//   @Effect()
//   deleteTodo: Observable<Action> = this.actions$
//     .ofType(todoList.ActionsTypes.DELETE_TODO)
//     .map((action: todoList.DeleteTodoAction) => action)
//     .switchMap((action: todoList.DeleteTodoAction) => {
//       return this.todoListService.removeTodo(action.list, action.id)
//         .map((newList: ReadonlyArray<Todo>) => {
//           return new todoList.DeleteTodoActionSuccess(newList);
//         });
//     });
//
//   @Effect()
//   addTodo: Observable<Action> = this.actions$
//     .ofType(todoList.ActionsTypes.ADD_TODO)
//     .map((action: todoList.AddTodoAction) => action)
//     .switchMap((action: todoList.AddTodoAction) => {
//       return this.todoListService.addTodo(action.list, action.text)
//         .map((newTodo: Todo) => {
//           return new todoList.AddTodoActionSuccess(newTodo);
//         })
//     });
// }
