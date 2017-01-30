import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Todo } from '../models/todo.model';

const data: Array<Todo> = [{
  id: 0,
  text: 'One',
  isCompleted: false
}, {
  id: 1,
  text: 'Two',
  isCompleted: false
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
}
