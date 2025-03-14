import { MobileGame } from './types';

export const mobileGames: MobileGame[] = [
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
