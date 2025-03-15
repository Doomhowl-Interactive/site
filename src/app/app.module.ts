import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HomePage } from './home/home.page';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { ionLogoGooglePlaystore } from '@ng-icons/ionicons';
import { NotFoundPage } from './not-found/not-found.page';
import { PrivacyPolicyPage } from './privacy/privacy-policy.page';

@NgModule({
  declarations: [AppComponent, HomePage, NotFoundPage, PrivacyPolicyPage],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    RouterModule,
    BrowserModule,
    NgOptimizedImage,
    NgIconsModule.withIcons({ ionLogoGooglePlaystore }),
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
