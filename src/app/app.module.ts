import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { NgModule,
         ApplicationRef }     from '@angular/core';
import { RouterModule,
         PreloadAllModules }  from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { TodoListEffects } from './effects/todo-list.effect';
import { reducer } from './reducers';

import { ENV_PROVIDERS }      from './environment';
import { ROUTES }             from './app.routes';

import { CoreModule } from './core/core.module';
import { AppComponent }       from './app.component';
import { TodoListModule }     from './pages/todo-list/todo-list.module';

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    TodoListModule,
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(TodoListEffects),
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
