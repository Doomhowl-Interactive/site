import { Routes } from '@angular/router';
import { PrivacyPolicyPage } from './privacy/privacy-policy.page';
import { NotFoundPage } from './not-found/not-found.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    pathMatch: 'full',
  },
  { path: 'privacy', component: PrivacyPolicyPage },
  {
    path: 'licenses',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./licenses/index/licenses-index.page').then(
            (m) => m.LicensesIndexPage
          ),
      },
      {
        path: 'blasteroids',
        loadComponent: () =>
          import('./licenses/blasteroids/blasteroids-licenses.page').then(
            (m) => m.BlasteroidsLicensesPage
          ),
      },
      {
        path: 'vortex',
        loadComponent: () =>
          import('./licenses/vortex/vortex-licenses.page').then(
            (m) => m.VortexLicensesPage
          ),
      },
      { path: '**', redirectTo: '' },
    ],
  },
  { path: '**', component: NotFoundPage },
];
