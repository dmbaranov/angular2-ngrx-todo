import { Routes } from '@angular/router';

import { TodoList } from './pages/todo-list';
import { TodoItemInfo } from './pages/todo-item-info';

export const ROUTES: Routes = [
  { path: '',         redirectTo: '/list', pathMatch: 'full' },
  { path: 'list',     component: TodoList },
  { path: 'item',     component: TodoItemInfo },
  { path: 'item/:id',  component: TodoItemInfo }
];
