import * as todoList from '../actions/todo-list.action';
import { Todo } from '../models/todo.model';

export interface State {
  todoList: Array<Todo>
}

const initialState: State = {
  todoList: []
};

export function reducer(state = initialState, action: todoList.Actions): State {
  switch (action.type) {
    case todoList.ActionsTypes.INIT_LIST_SUCCESS:
      return { todoList: action.payload.todoList };

    default:
      return state;
  }
}

export const getTodoList = (state: State) => state.todoList;
