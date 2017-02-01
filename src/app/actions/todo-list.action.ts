import { Action } from '@ngrx/store';
import { type } from '../type';
import { Todo } from '../models/todo.model';

export const ActionsTypes = {
  INIT_LIST:          type('[TodoList] List initial loading'),
  INIT_LIST_SUCCESS:  type('[TodoList] List initial loading success')
};

export class InitListAction implements Action {
  type = ActionsTypes.INIT_LIST;
  payload: ReadonlyArray<Todo> = null;

  constructor() { console.log('InitListAction'); }
}

export class InitListActionSuccess implements Action {
  type = ActionsTypes.INIT_LIST_SUCCESS;

  constructor(public payload: ReadonlyArray<Todo>) { console.log('InitListActionSuccess'); }
}

export type Actions
  = InitListAction
  | InitListActionSuccess;
