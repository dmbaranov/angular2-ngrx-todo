import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Todo } from '../models/todo.model';

let data: Array<Todo> = [{
  id: 0,
  text: 'One',
  isCompleted: false
}, {
  id: 1,
  text: 'Two',
  isCompleted: true
}, {
  id: 2,
  text: 'Three',
  isCompleted: false
}];

@Injectable()
export class TodoListService {
  constructor() { }

  getTodoList(): Observable<Array<Todo>> {
    return Observable.of(data).map(res => res);
  }

  removeTodo(list: ReadonlyArray<Todo>, id: Number): Observable<ReadonlyArray<Todo>> {
    const newList = list.filter(item => item.id !== id);

    return Observable.of(newList).map(res => res);
  }

  addTodo(list: ReadonlyArray<Todo>, text: String): Observable<Todo> {
    const newTodo: Todo = {
      id: list.length,
      text: text,
      isCompleted: false
    };

    return Observable.of(newTodo).map(res => res);
  }

  changeStatus(list: ReadonlyArray<Todo>, id: Number) {
    const newList = list.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });

    return Observable.of(newList).map(res => res);
  }

  getTodoItem(list: ReadonlyArray<Todo>, id: Number) {
    const todoItem = list.filter(item => item.id === id);

    return Observable.of(todoItem[0]).map(res => res);
  }
}
