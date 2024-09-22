import { Component } from '@angular/core';
import { GameListComponent } from '../comps/game-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameListComponent],
  template: `<app-comps-game-list></app-comps-game-list>`,
})
export class HomeComponent {}
