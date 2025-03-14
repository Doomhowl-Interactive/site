import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
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
    </header>
    <main class="container">
      <nav>
        <p class="text-center">
          <a class="text-link-underline" routerLink="..">Go back</a>
        </p>
      </nav>
      <router-outlet></router-outlet>
    </main>
    <footer class="d-flex justify-content-center">
      <div class="w-50 border-top border-dark-subtle">
        <p class="text-center pt-3">
          For business enquiries, questions and bug reports,<br />please contact
          us at doomhowl(dot)interactive&#64;gmail(dot)com.
        </p>
        <p class="text-center d-flex gap-2 justify-content-center">
          <a routerLink="/privacy" class="text-link-underline"
            >Privacy Policy</a
          >
          <a routerLink="/licenses" class="text-link-underline">Licenses</a>
        </p>
        <p class="text-center">©2023-{{ currentYear }} Doomhowl Interactive</p>
        <div class="socials d-flex justify-content-center gap-2">
          <a
            href="https://play.google.com/store/apps/dev?id=8968137923229043394"
            target="_blank"
          >
            <img
              ngSrc="assets/img/socials/play.webp"
              alt="play"
              title="Play"
              width="{{ footerIconSize }}"
              height="{{ footerIconSize }}"
            />
          </a>
          <a href="https://www.youtube.com/@brambasieldev" target="_blank">
            <img
              ngSrc="assets/img/socials/youtube.webp"
              alt="youtube"
              title="YouTube"
              width="{{ footerIconSize }}"
              height="{{ footerIconSize }}"
            />
          </a>
          <a href="https://twitch.tv/brambasiel" target="_blank">
            <img
              ngSrc="assets/img/socials/twitch.webp"
              alt="twitch"
              title="Twitch"
              width="{{ footerIconSize }}"
              height="{{ footerIconSize }}"
            />
          </a>
        </div>
      </div>
      <p>©2023-{{ currentYear }} Doomhowl Interactive</p>
    </footer>
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

    footer {
      main {
        color: darkgray; 
      }
      a {
        color: lightgray;
      }
    }
    @media (max-width: 576px) {
      footer > div {
        width: 100% !important;
      }
    }
  `,
})
export class AppComponent {
  footerIconSize = 50 as const;
  currentYear = new Date().getUTCFullYear();
}
