import { CommonModule, isPlatformBrowser, NgOptimizedImage } from "@angular/common";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { NgIcon, provideIcons } from "@ng-icons/core";
import { ionLogoChrome, ionLogoGooglePlaystore, ionGlobeOutline } from "@ng-icons/ionicons";
import { DeviceDetectorService } from "ngx-device-detector";

export interface Game {
  displayName: string;
  iconPath: string;
  stores: { display: string; icon: string; url: string; wakeUpUrl?: string }[];
}

@Component({
  selector: "app-home-page",
  templateUrl: "home.page.html",
  styleUrl: "home.page.scss",
  imports: [CommonModule, NgIcon, NgOptimizedImage],
  providers: [provideIcons({ ionLogoGooglePlaystore, ionLogoChrome, ionGlobeOutline })],
})
export class HomePage implements AfterViewInit {
  games: Game[] = mobileGames;
  dropdownsVisible: boolean[];

  constructor(private deviceService: DeviceDetectorService) {
    this.dropdownsVisible = new Array(this.games.length).fill(false);
  }

  ngAfterViewInit(): void {
    // Wake up web apps so the user doesn't have to
    // wait ridiculously long for them to cold start
    for (const game of this.games) {
      for (const store of game.stores) {
        if (store.wakeUpUrl) {
          fetch(store.wakeUpUrl)
            .then(() => {
              console.debug("Woke up", store.wakeUpUrl);
            })
            .catch(console.warn);
        }
      }
    }
  }

  clickAction(game: Game, i: number): void {
    if (game.stores.length === 0) {
      alert("Coming soon!");
    } else if (game.stores.length === 1) {
      window.open(game.stores[0].url, "_blank");
    } else if (!this.deviceService.isMobile()) {
      this.dropdownsVisible[i] = !this.dropdownsVisible[i];
    }
  }

  showDropdown(i: number) {
    this.dropdownsVisible[i] = true;
  }

  hideDropdown(i: number) {
    this.dropdownsVisible[i] = false;
  }
}

const mobileGames: Game[] = [
  {
    displayName: "Vortex",
    iconPath: "assets/icons/vortex.webp",
    stores: [
      {
        display: "Google Play",
        icon: "ionLogoGooglePlaystore",
        url: "https://play.google.com/store/apps/details?id=com.doomhowl.vortex",
      },
    ],
  },
  {
    displayName: "Blasteroids!",
    iconPath: "assets/icons/blasteroids.png",
    stores: [
      {
        display: "Google Play",
        icon: "ionLogoGooglePlaystore",
        url: "https://play.google.com/store/apps/details?id=com.doomhowl.blasteroids",
      },
      /*
      {
        display: "Chrome Web Store",
        icon: "ionLogoChrome",
        url: "#",
      },
      */
      {
        display: "Web",
        icon: "ionGlobeOutline",
        url: "https://blasteroids.doomhowl-interactive.com",
        wakeUpUrl: "https://blasteroids.doomhowl-interactive.com/health",
      },
    ],
  },
];
