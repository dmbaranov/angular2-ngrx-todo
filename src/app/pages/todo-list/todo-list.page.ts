import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import * as reducer from '../../reducers';
import * as actions from '../../actions/todo-list.action';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.css']
})
export class TodoList implements OnInit {
  todos: ReadonlyArray<Todo>;

  constructor(private store: Store<reducer.State>) { }

  ngOnInit() {
    this.store.dispatch(new actions.InitListAction());
    this.store.select(reducer.getTodoList).subscribe(result => {
      this.todos = result;
    });
  }

  handleTodoDelete(id: Number) {
    this.store.dispatch(new actions.DeleteTodoAction(this.todos, id));
  }

  handleAddTodo() {
    this.store.dispatch(new actions.AddTodoAction(this.todos, 'lol'));
  }

  handleChangeStatus(id: Number) {
    this.store.dispatch(new actions.ChangeTodoStatus(this.todos, id));
  }
}
