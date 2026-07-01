import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { Employees } from './pages/employees/employees';
import { FormsPage } from './pages/forms/forms';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Home },
      { path: 'employees', component: Employees },
      { path: 'forms', component: FormsPage },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
