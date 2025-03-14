import { Component, Input } from '@angular/core';
import { MobileIconComponent } from './mobile-icon.component';
import { MobileGame } from '../../types';
import { mobileGames } from '../../data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comps-game-list',
  template: `
    <div class="container p-3 d-flex justify-content-center">
      <app-comps-mobile-icon [game]="game" *ngFor="let game of games" />
    </div>
  `,
  standalone: true,
  imports: [MobileIconComponent, CommonModule],
})
export class GameListComponent {
  @Input() games: MobileGame[] = mobileGames;
}
