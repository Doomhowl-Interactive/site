import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comps-logo',
  imports: [RouterLink],
  standalone: true,
  template: `
    <section class="position-relative user-select-none">
      <div
        class="position-absolute w-100 d-flex justify-content-center align-items-center"
      >
        <a routerLink="/" class="text-decoration-none">
          <h2 class="text-center">Doomhowl Interactive</h2>
        </a>
      </div>
      <div id="logo" class="d-flex justify-content-center">
        <canvas
          width="400"
          height="400"
          id="moon"
          (contextmenu)="doNothing()"
        ></canvas>
      </div>
    </section>
  `,
  styles: `
    @font-face {
      font-family: "Gothica";
      src: url("/assets/fonts/Gothica-Book.ttf");
    }

    div:first-child {
      height: 400px;
    }

    h2 {
      font-family: "Gothica", serif;
      font-size: 3.5rem;
      font-optical-sizing: auto;
      font-weight: normal;
      font-style: normal;
      color: rgb(255, 255, 255, 0.7);
      transition: color 0.2s;

      &:hover {
        color: rgb(255, 255, 255, 0.9);
      }
    }
  `,
})
export class LogoComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // HACK: inject old Javascript code
      if (!document.querySelector('#logo scripts')) {
        const group = document.createElement('div');
        group.appendChild(this.createScriptTag('/assets/js/p5.js'));
        group.appendChild(this.createScriptTag('/assets/js/moon.js'));
        document.querySelector('#logo')!.appendChild(group);
      }
    }
  }

  doNothing() {
    return false;
  }

  private createScriptTag(src: string): HTMLScriptElement {
    const elem = document.createElement('script');
    elem.src = src;
    return elem;
  }
}
