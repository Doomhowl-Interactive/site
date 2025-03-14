import { Component } from '@angular/core';
import { InnerComponent } from './inner.component';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from "../../../comps/back-button.component";

@Component({
  selector: 'app-pages-licenses-blasteroids',
  imports: [InnerComponent, RouterLink, BackButtonComponent],
  standalone: true,
  template: `
    <app-comps-back-button />
    <h1>Blasteroids! software licenses</h1>
    <app-pages-licenses-blasteroids-inner />
  `,
  styles: `
  a {
    color: lightgray;
  }
`,
})
export class BlasteroidsLicensesComponent {}
