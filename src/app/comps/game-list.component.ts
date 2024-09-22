import { Component, Input } from '@angular/core';
import { MobileIconComponent } from './mobile-icon.component';
import { MobileGame } from '../../types';
import { mobileGames } from '../../data';

@Component({
  selector: 'app-comps-game-list',
  template: `
    <div class="container p-3 d-flex justify-content-center">
      @for (game of games; track game.displayName) {
      <app-comps-mobile-icon
        [game]="game"
        [tooltip]="game.displayName"
      ></app-comps-mobile-icon>
      }
    </div>
  `,
  styles: `

  `,
  standalone: true,
  imports: [MobileIconComponent],
})
export class GameListComponent {
  @Input() games: MobileGame[] = mobileGames;
}
