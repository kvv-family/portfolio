import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/general/general.component').then(
        (m) => m.GeneralComponent
      ),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then(
        (m) => m.PrivacyComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
