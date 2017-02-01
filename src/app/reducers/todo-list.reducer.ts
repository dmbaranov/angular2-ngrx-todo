import * as todoList from '../actions/todo-list.action';
import { Todo } from '../models/todo.model';

export interface State {
  todoList: ReadonlyArray<Todo>
}

const initialState: State = {
  todoList: []
};

export function reducer(state = initialState, action: todoList.Actions): State {
  switch (action.type) {
    case todoList.ActionsTypes.INIT_LIST_SUCCESS:
      return { todoList: action.payload.newList };

    case todoList.ActionsTypes.DELETE_TODO_SUCCESS:
      return { todoList: action.payload.newList };

    case todoList.ActionsTypes.ADD_TODO_SUCCESS:
      return { todoList: [...state.todoList, action.payload.newTodo] };

    default:
      return state;
  }
}

export const getTodoList = (state: State) => state.todoList;
