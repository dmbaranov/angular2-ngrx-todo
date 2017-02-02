import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { TodoItemInfo } from './todo-item-info.component';

@NgModule({
  imports:      [ SharedModule ],
  declarations: [ TodoItemInfo ],
  exports:      [ TodoItemInfo ]
})
export class TodoItemInfoModule { }
