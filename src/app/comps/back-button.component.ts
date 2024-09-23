import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comps-back-button',
  imports: [RouterLink],
  standalone: true,
  template: `
    <nav>
      <p class="text-center">
        <a class="text-link-underline" routerLink="..">Go back</a>
      </p>
    </nav>
  `,
  styles: `
  a {
    color: lightgray;
  }
`,
})
export class BackButtonComponent {}
