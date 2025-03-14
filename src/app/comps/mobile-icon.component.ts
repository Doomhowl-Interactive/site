import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MobileGame } from '../../types';
import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-comps-mobile-icon',
  template: `
    <div>
      <figure class="d-inline m-2 figure" (click)="clickAction()">
        <img
          ngSrc="{{ game.iconPath }}"
          class="rounded-4 shadow-lg figure-img img-fluid img-thumbnail"
          width="{{ size }}"
          height="{{ size }}"
          alt="{{ game.displayName }}"
          title="{{ game.displayName }}"
          draggable="false"
          (contextmenu)="doNothing()"
        />
      </figure>
      <div class="popover" *ngIf="popoverVisible">
        <ul>
          <li *for="let store of game.stores">
            <a href="{{ store.url }}" target="_blank">
              <li>
                <ng-icon name="logo-google-play"></ng-icon>
                <img ngSrc="{{ store.icon }}" alt="{{ store.display }}" />
              </li>
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    figure:hover {
      cursor: pointer;
    }
    img {
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.05)
      }
    }
  `,
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, NgIconsModule],
  providers: [NgIconsModule],
})
export class MobileIconComponent {
  @Input({})
  size = 150;

  @Input({ required: true }) game!: MobileGame;
  popoverVisible = false;

  clickAction(): void {
    if (this.game.stores.length === 0) {
      alert('Coming soon!');
    } else if (this.game.stores.length === 1) {
      window.open(this.game.stores[0].url, '_blank');
    } else {
      this.popoverVisible = !this.popoverVisible;
    }
  }

  doNothing() {
    return false;
  }
}
