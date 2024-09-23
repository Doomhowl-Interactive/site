import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../../comps/back-button.component';

type Link = {
  text: string;
  url: string;
};

@Component({
  selector: 'app-pages-licenses',
  imports: [RouterLink, BackButtonComponent],
  standalone: true,
  template: `
    <app-comps-back-button />
    <h1>Software licenses</h1>
    <nav>
      <ul>
        @for (link of links; track link.text) {
        <li>
          <a routerLink="{{ link.url }}">{{ link.text }}</a>
        </li>
        }
      </ul>
    </nav>
  `,
})
export class LicensesComponent {
  links: Link[] = [
    {
      text: 'Vortex',
      url: './vortex',
    },
    {
      text: 'Blasteroids!',
      url: './blasteroids',
    },
  ];
}
