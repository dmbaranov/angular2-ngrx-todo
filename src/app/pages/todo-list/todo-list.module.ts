import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TodoList } from './todo-list.page';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ TodoList ],
  exports:      [ TodoList ]
})
export class TodoListModule { }
