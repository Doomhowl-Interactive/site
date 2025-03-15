import { Component } from '@angular/core';

export interface Game {
  displayName: string;
  iconPath: string;
  stores: { display: string; icon: string; url: string }[];
}

@Component({
  selector: 'app-home-page',
  templateUrl: 'home.page.html',
  styleUrl: 'home.page.scss',
  standalone: false,
})
export class HomePage {
  games: Game[] = mobileGames;
  dropdownsVisible: boolean[];

  constructor() {
    this.dropdownsVisible = new Array(this.games.length).fill(false);
  }

  clickAction(game: Game, i: number): void {
    if (game.stores.length === 0) {
      alert('Coming soon!');
    } else if (game.stores.length === 1) {
      window.open(game.stores[0].url, '_blank');
    } else {
      this.dropdownsVisible[i] = !this.dropdownsVisible[i];
    }
  }

  doNothing() {
    return false;
  }
}

const mobileGames: Game[] = [
  {
    displayName: 'Vortex',
    iconPath: 'assets/icons/vortex.webp',
    stores: [
      {
        display: 'Google Play',
        icon: 'assets/icons/google-play.png',
        url: 'https://play.google.com/store/apps/details?id=com.doomhowl.vortex',
      },
    ],
  },
  {
    displayName: 'Blasteroids!',
    iconPath: 'assets/icons/blasteroids.png',
    stores: [
      {
        display: 'Google Play',
        icon: 'assets/icons/google-play.png',
        url: 'https://play.google.com/store/apps/details?id=com.doomhowl.blasteroids',
      },
      {
        display: 'Chrome Web Store',
        icon: 'assets/icons/chrome-web-store.png',
        url: '#',
      },
    ],
  },
];
