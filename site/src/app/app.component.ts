import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameListComponent } from './comps/game-list.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';
import { LogoComponent } from './comps/logo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    GameListComponent,
    LogoComponent,
  ],
  template: `
    <header>
      <app-comps-logo />
    </header>
    <main class="container">
      <app-comps-game-list></app-comps-game-list>
    </main>
    <footer>
      <p class="text-center">
        For business enquiries, questions and technical problems,<br />please
        contact us at doomhowl(dot)interactive&#64;gmail(dot)com.
      </p>
      <p class="text-center">
        <a routerLink="#">Privacy Policy</a>
      </p>
      <p class="text-center">©2023-{{ currentYear }} Doomhowl Interactive</p>
    </footer>
  `,
  styles: `
    main {
      color: darkgray; 
    }
    a {
      color: lightgray;
    }
  `,
})
export class AppComponent {
  currentYear = new Date().getUTCFullYear();
}
