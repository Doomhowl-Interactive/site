import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { routes } from './app.routes';
import { HomePage } from './home/home.page';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { ionLogoGooglePlaystore } from '@ng-icons/ionicons';
import { NotFoundPage } from './not-found/not-found.page';
import { PrivacyPolicyPage } from './privacy/privacy-policy.page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    NgOptimizedImage,
  ],
})
export class AppComponent {
  footerIconSize = 50 as const;
  currentYear = new Date().getUTCFullYear();

  constructor(private router: Router) {}

  goHome() {
    console.log('Navigating to home page');
    this.router.navigate(['/']);
  }
}
