import { Component } from '@angular/core';

@Component({
  selector: 'app-pages-licenses',
  styleUrls: ['./licenses-index.page.scss'],
  templateUrl: './licenses-index.page.html',
  standalone: false,
})
export class LicensesIndexPage {
  links: { text: string; url: string }[] = [
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
