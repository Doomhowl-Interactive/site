import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages-licenses',
  styleUrls: ['./licenses-index.page.scss'],
  templateUrl: './licenses-index.page.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
