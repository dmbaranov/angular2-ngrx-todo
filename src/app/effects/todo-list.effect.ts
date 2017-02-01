import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { TodoListService } from '../core/todo-list.service';
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
        .map(list => {
          console.log('InitTodoListEffect');
          return new todoList.InitListActionSuccess(list);
        });
    });
}
