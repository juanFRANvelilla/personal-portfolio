import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'debtapp',
        loadComponent: () => import('./pages/debtapp/debtapp').then(m => m.Debtapp)
    },
    {
        path: 'podiotest',
        loadComponent: () => import('./pages/podiotest/podiotest').then(m => m.Podiotest)
    }
];
