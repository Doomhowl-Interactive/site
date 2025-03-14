import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy/privacy-policy.component';
import { VortexLicensesComponent } from './pages/licenses/vortex/vortex-licenses.component';
import { LicensesComponent } from './pages/licenses/licenses.component';
import { BlasteroidsLicensesComponent } from './pages/licenses/blasteroids/blasteroids-licenses.component';
import { NotFoundPage } from './not-found/not-found.page';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'licenses', component: LicensesComponent },
  { path: 'licenses/blasteroids', component: BlasteroidsLicensesComponent },
  { path: 'licenses/vortex', component: VortexLicensesComponent },
  { path: '**', component: NotFoundPage },
];
