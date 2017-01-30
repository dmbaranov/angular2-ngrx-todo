import { createSelector } from 'reselect';
import { ActionReducer, combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { Todo } from '../models/todo.model';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as todoListReducer from './todo-list.reducer';

export interface State {
  todo: todoListReducer.State;
  router: fromRouter.RouterState;
}

const reducers = {
  todo: todoListReducer.reducer,
  router: fromRouter.routerReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);

export function reducer(state: any, action: any) {
  return developmentReducer(state, action);
}

const getTodoState = (state: State) => state.todo;

export const getTodoList = createSelector(getTodoState, todoListReducer.getTodoList);
