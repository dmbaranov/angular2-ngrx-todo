import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';
import { NgModule,
         ApplicationRef }     from '@angular/core';
import { RouterModule,
         PreloadAllModules }  from '@angular/router';

import { ENV_PROVIDERS }      from './environment';
import { ROUTES }             from './app.routes';

import { AppComponent }       from './app.component';

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent],
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    ENV_PROVIDERS,
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
}
