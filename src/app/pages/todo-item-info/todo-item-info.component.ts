import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store';

import { Todo } from '../../models/todo.model';
import * as reducers from '../../reducers';
import * as actions from '../../actions/todo-list.action';

@Component({
  selector: 'todo-item-info',
  templateUrl: './todo-item-info.component.html',
  styleUrls: ['./todo-item-info.component.css']
})
export class TodoItemInfo implements OnInit {
  todoId: number;

  constructor(private route: ActivatedRoute, private store: Store<reducers.State>) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.todoId = params.id;
    //   // this.store.dispatch(new actions.GetTodoItem(params.id))
    // });
    //
    // this.store.dispatch(new actions.GetTodoItem();
  }
}
