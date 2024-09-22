import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { PrivacyPolicyComponent } from './pages/privacy/privacy-policy.component';
import { PageNotFoundComponent } from './pages/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: '**', component: PageNotFoundComponent },
];
