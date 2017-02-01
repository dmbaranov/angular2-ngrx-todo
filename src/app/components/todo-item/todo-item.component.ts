import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() onTodoDelete = new EventEmitter<Number>();

  constructor() { }

  handleTodoDelete(id: Number) {
    this.onTodoDelete.emit(id);
  }
}
