import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from "../../comps/back-button.component";

@Component({
  selector: 'app-pages-privacy-policy',
  standalone: true,
  imports: [RouterLink, BackButtonComponent],
  templateUrl: './privacy-policy.component.html',
  styles: `
  nav a {
        color: lightgray;
      }
  `,
})
export class PrivacyPolicyComponent {}
