import { Routes } from '@angular/router';
import { LicensesIndexPage } from './index/licenses-index.page';
import { BlasteroidsLicensesPage } from './blasteroids/blasteroids-licenses.page';

export const routes: Routes = [
  { path: '', component: LicensesIndexPage, pathMatch: 'full' },
  { path: 'blasteroids', component: BlasteroidsLicensesPage },
  {
    path: 'vortex',
    component: LicensesIndexPage,
  },
  { path: '**', redirectTo: '' },
];
