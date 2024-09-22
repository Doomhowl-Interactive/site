import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MobileGame } from '../../types';

@Component({
  selector: 'app-comps-mobile-icon',
  template: ` <figure class="d-inline m-2 figure">
    <img
      ngSrc="{{ game?.iconPath }}"
      class="rounded-4 shadow-lg figure-img img-fluid img-thumbnail"
      width="{{ size }}"
      height="{{ size }}"
    />
  </figure>`,
  styles: `
    
  `,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class MobileIconComponent {
  @Input({ required: true }) game?: MobileGame;
  size = 150;
}
