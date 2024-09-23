import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PrivacyPolicyComponent } from './pages/privacy/privacy-policy.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { VortexLicensesComponent } from './pages/licenses/vortex/vortex-licenses.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { BlasteroidsLicensesComponent } from './pages/licenses/blasteroids/blasteroids-licenses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'licenses', component: LicensesComponent },
  { path: 'licenses/blasteroids', component: BlasteroidsLicensesComponent },
  { path: 'licenses/vortex', component: VortexLicensesComponent },
  { path: '**', component: PageNotFoundComponent },
];
