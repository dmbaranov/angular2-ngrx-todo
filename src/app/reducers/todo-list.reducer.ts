import * as todoList from '../actions/todo-list.action';
import { Todo } from '../models/todo.model';

export interface State {
  todoList: ReadonlyArray<Todo>,
  activeTodo: Todo
}

const initialState: State = {
  todoList: [],
  activeTodo: {
    id: null,
    text: '',
    isCompleted: false
  }
};

export function reducer(state = initialState, action: todoList.Actions): State {
  switch (action.type) {
    case todoList.ActionsTypes.INIT_LIST_SUCCESS:
      return { ...state, todoList: action.payload.newList };

    case todoList.ActionsTypes.DELETE_TODO_SUCCESS:
      return { ...state, todoList: action.payload.newList };

    case todoList.ActionsTypes.ADD_TODO_SUCCESS:
      return { ...state, todoList: [...state.todoList, action.payload.newTodo] };

    case todoList.ActionsTypes.CHANGE_STATUS_SUCCESS:
      return { ...state, todoList: action.payload.newList };

    case todoList.ActionsTypes.GET_TODO_ITEM_SUCCESS:
      return { ...state, activeTodo: action.payload.todoItem };

    default:
      return state;
  }
}

export const getTodoList = (state: State) => state.todoList;
