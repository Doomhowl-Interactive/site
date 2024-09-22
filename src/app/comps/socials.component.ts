import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comps-socials',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="socials d-flex justify-content-center gap-2">
      <a
        href="https://play.google.com/store/apps/dev?id=8968137923229043394"
        target="_blank"
      >
        <img
          ngSrc="assets/img/socials/play.webp"
          alt="play"
          title="Play"
          width="{{ size }}"
          height="{{ size }}"
        />
      </a>
      <a href="https://www.youtube.com/@brambasieldev" target="_blank">
        <img
          ngSrc="assets/img/socials/youtube.webp"
          alt="youtube"
          title="YouTube"
          width="{{ size }}"
          height="{{ size }}"
        />
      </a>
      <a href="https://twitch.tv/brambasiel" target="_blank">
        <img
          ngSrc="assets/img/socials/twitch.webp"
          alt="twitch"
          title="Twitch"
          width="{{ size }}"
          height="{{ size }}"
        />
      </a>
    </div>
  `,
  styles: `
    img {
        opacity: 0.3;
        &:hover {
            opacity: 0.5;
        }
    }
  `,
})
export class SocialsComponent {
  size = 50;
}
