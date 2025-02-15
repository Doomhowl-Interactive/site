import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comps-logo',
  imports: [RouterLink],
  standalone: true,
  template: `
    <section class="position-relative user-select-none pt-3 pb-2">
      <div
        class="position-absolute w-100 d-flex justify-content-center align-items-center"
      >
        <a
          routerLink="/"
          class="text-decoration-none"
          style="text-shadow: #fa0c0c 1px 0 10px;"
        >
          <h2 class="text-center" style="padding-top: 4rem">
            Doomhowl Interactive
          </h2>
        </a>
      </div>
      <div id="logo" class="d-flex justify-content-center">
        <img
          draggable="false"
          src="logo-no-background.png"
          width="400px"
          height="400px"
          alt="Doomhowl Interactive"
        />
      </div>
    </section>
  `,
  styles: `
    @font-face {
      font-family: "Gothica";
      src: url("/assets/fonts/Gothica-Book.ttf");
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
export class LogoComponent {}
