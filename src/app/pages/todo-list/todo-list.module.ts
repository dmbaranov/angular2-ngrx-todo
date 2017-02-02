import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TodoList } from './todo-list.page';
import { TodoItemModule } from '../../components/todo-item/todo-item.module';

@NgModule({
  imports:      [ SharedModule, TodoItemModule, RouterModule ],
  declarations: [ TodoList ],
  exports:      [ TodoList ]
})
export class TodoListModule { }
