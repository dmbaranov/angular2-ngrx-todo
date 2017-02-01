import { NgModule, Optional, SkipSelf } from '@angular/core';

import { TodoListService } from './todo-list.service';

@NgModule({
  providers: [ TodoListService ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has been already loaded!');
    }
  }
}
