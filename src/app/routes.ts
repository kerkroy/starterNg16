import { Routes } from '@angular/router';
import { page1Guard } from './presentation/page/page1/page1.guard';
import { page2Guard } from './presentation/page/page2/page2.guard';

export const routes: Routes = [
  
  {
    path: 'home', 
    loadComponent: () => import('./presentation/page/home/home.component').then( module => module.HomeComponent ),
    title: ' Accueil' 
  },
  {
    path:'Page1', 
    loadComponent: () => import('./presentation/page/page1/page1.component').then( module => module.Page1Component ),
    title: ' Page 1',
    canActivate: [ page1Guard ]
  },
  {
    path:'Page2/:id', 
    loadComponent: () => import('./presentation/page/page2/page2.component').then( module => module.Page2Component ),
    resolve: { page2Guard }
  },
  {
    path:'onboarding', 
    loadComponent: () => import('./presentation/page/onBoarding/onBoarding.component').then( module => module.OnBoardingComponent )
  },
  {
    path:'', 
    loadComponent: () => import('./presentation/page/home/home.component').then( module => module.HomeComponent ),
    title: 'Welcome'
  },
  {
    path:'403', 
    loadComponent: () => import('./presentation/errors/403/403.component').then( module => module.RefusedComponent ),
    title: '403'
  },
  {
    path:'**', 
    loadComponent: () => import('./presentation/errors/404/404.component').then( module => module.NotFoundComponent ),
    title: '404'
  }
];
