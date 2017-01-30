import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  template: `
    <div>app</div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() {}
}
