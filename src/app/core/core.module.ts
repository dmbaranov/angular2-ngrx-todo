import { NgModule } from '@angular/core';

import { TodoListService } from './todo-list.service';

@NgModule({
  providers: [ TodoListService ]
})
export class CoreModule { }
