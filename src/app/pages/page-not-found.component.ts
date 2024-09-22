import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pages-page-not-found',
  imports: [RouterLink],
  standalone: true,
  template: `
    <h2 class="text-center">Page not found</h2>
    <p class="text-center">
      <a class="text-link-underline" routerLink="/">Go back</a>
    </p>
  `,
  styles: `
    h2 {
        font-size: 2rem;
    }
    a {
        color: lightgray;
    }
  `,
})
export class PageNotFoundComponent {}
