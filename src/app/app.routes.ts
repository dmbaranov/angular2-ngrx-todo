import { Routes } from '@angular/router';

import { TodoList } from './pages/todo-list';

export const ROUTES: Routes = [
  { path: '',      redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',  component: TodoList }
];
