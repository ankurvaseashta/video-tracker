import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashobard',
    pathMatch: 'full'
  }
  ,
  {
    path: 'dashboard',
    loadComponent:() => import('./dashboard/dashboard.component')
  }
];
