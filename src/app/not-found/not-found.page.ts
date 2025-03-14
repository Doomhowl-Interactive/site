import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pages-page-not-found',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage {}
