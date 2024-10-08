import { Component, computed, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MobileGame } from '../../types';

@Component({
  selector: 'app-comps-mobile-icon',
  template: ` <figure class="d-inline m-2 figure">
    <a
      href="{{ game?.storePage }}"
      (click)="followLink($event)"
      target="_blank"
    >
      <img
        ngSrc="{{ game?.iconPath }}"
        class="rounded-4 shadow-lg figure-img img-fluid img-thumbnail"
        width="{{ size }}"
        height="{{ size }}"
        alt="{{ tooltip }}"
        title="{{ tooltip }}"
        draggable="false"
        (contextmenu)="doNothing()"
      />
    </a>
  </figure>`,
  styles: `
    img {
      transition: transform 0.2s;
    }
    img:hover {
      transform: scale(1.05)
    }
  `,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class MobileIconComponent {
  @Input({ required: true }) game?: MobileGame;
  @Input({ required: true }) tooltip?: string;
  size = 150;

  followLink(event: MouseEvent): void {
    if (!this.game?.storePage) {
      event.preventDefault();
      alert('Coming soon!');
    }
  }

  doNothing() {
    return false;
  }
}
