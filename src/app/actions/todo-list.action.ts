import { Action } from '@ngrx/store';
import { type } from '../type';
import { Todo } from '../models/todo.model';

export const ActionsTypes = {
  INIT_LIST:          type('[TodoList] List initial loading'),
  INIT_LIST_SUCCESS:  type('[TodoList] List initial loading success')
};

export class InitListAction implements Action {
  type = ActionsTypes.INIT_LIST;
  // payload: string = null;
  payload: any = null;

  constructor() { }
}

export class InitListActionSuccess implements Action {
  type = ActionsTypes.INIT_LIST_SUCCESS;

  // constructor(public payload: Array<Todo>) { }
  constructor(public payload: any) { }
}

export type Actions
  = InitListAction
  | InitListActionSuccess;
