import { Action } from '@ngrx/store';
import { type } from '../type';
import { Todo } from '../models/todo.model';

export const ActionsTypes = {
  INIT_LIST:              type('[TodoList] List initial loading'),
  INIT_LIST_SUCCESS:      type('[TodoList] List initial loading success'),
  DELETE_TODO:            type('[TodoList] Delete todo'),
  DELETE_TODO_SUCCESS:    type('[TodoList] Delete todo success'),
  ADD_TODO:               type('[TodoList] Add todo'),
  ADD_TODO_SUCCESS:       type('[TodoList] Add todo success'),
  CHANGE_STATUS:          type('[TodoList] Change status'),
  CHANGE_STATUS_SUCCESS:  type('[TodoList] Change status success')
};

export class InitListAction implements Action {
  type = ActionsTypes.INIT_LIST;
  payload: Object = {};

  constructor() { }
}

export class InitListActionSuccess implements Action {
  type = ActionsTypes.INIT_LIST_SUCCESS;

  constructor(public payload: Object) { }
}

export class DeleteTodoAction implements Action {
  type = ActionsTypes.DELETE_TODO;
  payload: Object = {};

  constructor(public list: ReadonlyArray<Todo>, public id: Number) { }
}

export class DeleteTodoActionSuccess implements Action {
  type = ActionsTypes.DELETE_TODO_SUCCESS;

  constructor(public payload: Object) { }
}

export class AddTodoAction implements Action {
  type = ActionsTypes.ADD_TODO;
  payload = null;

  constructor(public list: ReadonlyArray<Todo>, public text: string) { }
}

export class AddTodoActionSuccess implements Action {
  type = ActionsTypes.ADD_TODO_SUCCESS;

  constructor(public payload: Object) { }
}

export class ChangeTodoStatus implements Action {
  type = ActionsTypes.CHANGE_STATUS;
  payload = null;

  constructor(public list: ReadonlyArray<Todo>, public id: Number) { }
}

export class ChangeTodoStatusSuccess implements Action {
  type = ActionsTypes.CHANGE_STATUS_SUCCESS;

  constructor(public payload: Object) { }
}

export type Actions
  = InitListAction
  | InitListActionSuccess
  | DeleteTodoAction
  | DeleteTodoActionSuccess
  | AddTodoAction
  | AddTodoActionSuccess
  | ChangeTodoStatus
  | ChangeTodoStatusSuccess;
