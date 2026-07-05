import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Layout } from './layout/layout';
import { Employees } from './pages/employees/employees';
import { FormsPage } from './pages/forms/forms';
import { AnalysisPage } from './pages/analysis/analysis';
import { SmartTextareaPage } from './pages/smart-textarea/smart-textarea';
import { TreegridPage } from './pages/treegrid/treegrid';
import { QueryBuilderPage } from './pages/query-builder/query-builder';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Home },
      { path: 'employees', component: Employees },
      { path: 'forms', component: FormsPage },
      { path: 'smart-textarea', component: SmartTextareaPage },
      { path: 'analysis', component: AnalysisPage },
      { path: 'treegrid', component: TreegridPage },
      { path: 'query-builder', component: QueryBuilderPage },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
