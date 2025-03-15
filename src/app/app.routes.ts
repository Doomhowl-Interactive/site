import { Routes } from '@angular/router';
import { PrivacyPolicyPage } from './privacy/privacy-policy.page';
import { NotFoundPage } from './not-found/not-found.page';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full' },
  { path: 'privacy', component: PrivacyPolicyPage },
  {
    path: 'licenses',
    loadChildren: () =>
      import('./licenses/licenses.module').then((m) => m.LicensesModule),
  },
  { path: '**', component: NotFoundPage },
];
