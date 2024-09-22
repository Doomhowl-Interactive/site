import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pages-privacy-policy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './privacy-policy.component.html',
  styles: `
  nav a {
        color: lightgray;
      }
  `,
})
export class PrivacyPolicyComponent {}
