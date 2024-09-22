import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GameListComponent } from './comps/game-list.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { LogoComponent } from './comps/logo.component';
import { SocialsComponent } from './comps/socials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    GameListComponent,
    RouterLink,
    LogoComponent,
    SocialsComponent,
  ],
  template: `
    <header>
      <app-comps-logo />
    </header>
    <main class="container">
      <router-outlet></router-outlet>
    </main>
    <footer class="d-flex justify-content-center">
      <div class="w-50 border-top border-dark-subtle">
        <p class="text-center pt-3">
          For business enquiries, questions and bug reports,<br />please contact
          us at doomhowl(dot)interactive&#64;gmail(dot)com.
        </p>
        <p class="text-center d-flex gap-2 justify-content-center">
          <a routerLink="/privacy" class="text-link-underline"
            >Privacy Policy</a
          >
          <a routerLink="/licenses" class="text-link-underline">Licenses</a>
        </p>
        <p class="text-center">©2023-{{ currentYear }} Doomhowl Interactive</p>
        <app-comps-socials />
      </div>
    </footer>
  `,
  styles: `
    footer {
      main {
        color: darkgray; 
      }
      a {
        color: lightgray;
      }
    }
    @media (max-width: 576px) {
      footer > div {
        width: 100% !important;
      }
    }
  `,
})
export class AppComponent {
  currentYear = new Date().getUTCFullYear();
}
